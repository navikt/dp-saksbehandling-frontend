import {
  ArrowRightIcon,
  ArrowsSquarepathIcon,
  CalendarIcon,
  CheckmarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CodeIcon,
  ExclamationmarkTriangleIcon,
  EyeIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@navikt/aksel-icons";
import {
  Alert,
  BodyShort,
  Button,
  Chips,
  Detail,
  Heading,
  HStack,
  Label,
  Search,
  Switch,
  Table,
  Tag,
  TextField,
  ToggleGroup,
  Tooltip,
  VStack,
} from "@navikt/ds-react";
import { Fragment, useMemo, useState } from "react";
import { ActionFunctionArgs, useFetcher, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { useBehandling } from "~/hooks/useBehandling";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../openapi/behandling-typer";

type Behandling = components["schemas"]["Behandling"];
type Opplysning = components["schemas"]["RedigerbareOpplysninger"];
type Periode = components["schemas"]["Opplysningsperiode"];

// ============================================================================
// ACTION
// ============================================================================

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.clone().formData();
  const actionType = formData.get("_action");

  if (actionType === "hent-behandling-for-diff") {
    const behandlingId = formData.get("behandlingId") as string;
    if (!behandlingId) {
      return { error: "Behandling ID er påkrevd" };
    }
    console.log(`Henter behandling for diff: ${behandlingId}`);

    try {
      const behandling = await hentBehandling(request, behandlingId);
      return { behandling };
    } catch (error) {
      return {
        error: `Kunne ikke hente behandling: ${error instanceof Error ? error.message : "Ukjent feil"}`,
      };
    }
  }

  return await handleActions(request, params);
}

// ============================================================================
// TYPES
// ============================================================================

interface PeriodeEndring {
  periodeId?: string;
  type: "lagt-til" | "fjernet" | "endret-verdi" | "endret-datoer";
  // For added/removed periods - show the full period info
  verdi?: string;
  fraOgMed?: string;
  tilOgMed?: string;
  // For changed values
  gammelVerdi?: string;
  nyVerdi?: string;
  // For changed dates
  gammelFraOgMed?: string;
  nyFraOgMed?: string;
  gammelTilOgMed?: string;
  nyTilOgMed?: string;
}

interface OpplysningForskjell {
  opplysningTypeId: string;
  navn: string;
  type: "lagt-til" | "fjernet" | "endret" | "uendret";
  periodeEndringer: PeriodeEndring[];
  gammelOpplysning?: Opplysning;
  nyOpplysning?: Opplysning;
  // Summary of changes for easy display
  harNyePerioder: boolean;
  harFjernedePerioder: boolean;
  harEndredeVerdier: boolean;
  harEndredeDatoer: boolean;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function sammenlignOpplysninger(venstre: Opplysning[], høyre: Opplysning[]): OpplysningForskjell[] {
  const forskjeller: OpplysningForskjell[] = [];
  const venstreMap = new Map(venstre.map((o) => [o.opplysningTypeId, o]));
  const høyreMap = new Map(høyre.map((o) => [o.opplysningTypeId, o]));

  for (const [id, venstreOpplysning] of venstreMap) {
    const høyreOpplysning = høyreMap.get(id);

    if (!høyreOpplysning) {
      const periodeEndringer: PeriodeEndring[] = venstreOpplysning.perioder.map((periode) => ({
        periodeId: periode.id,
        type: "fjernet" as const,
        verdi: formaterOpplysningVerdi(periode.verdi),
        fraOgMed: periode.gyldigFraOgMed,
        tilOgMed: periode.gyldigTilOgMed,
      }));

      forskjeller.push({
        opplysningTypeId: id,
        navn: venstreOpplysning.navn,
        type: "fjernet",
        periodeEndringer,
        gammelOpplysning: venstreOpplysning,
        harNyePerioder: false,
        harFjernedePerioder: true,
        harEndredeVerdier: false,
        harEndredeDatoer: false,
      });
    } else {
      const periodeEndringer = sammenlignPerioder(
        venstreOpplysning.perioder,
        høyreOpplysning.perioder,
      );

      const harNyePerioder = periodeEndringer.some((e) => e.type === "lagt-til");
      const harFjernedePerioder = periodeEndringer.some((e) => e.type === "fjernet");
      const harEndredeVerdier = periodeEndringer.some((e) => e.type === "endret-verdi");
      const harEndredeDatoer = periodeEndringer.some((e) => e.type === "endret-datoer");

      forskjeller.push({
        opplysningTypeId: id,
        navn: venstreOpplysning.navn,
        type: periodeEndringer.length > 0 ? "endret" : "uendret",
        periodeEndringer,
        gammelOpplysning: venstreOpplysning,
        nyOpplysning: høyreOpplysning,
        harNyePerioder,
        harFjernedePerioder,
        harEndredeVerdier,
        harEndredeDatoer,
      });
    }
  }

  for (const [id, høyreOpplysning] of høyreMap) {
    if (!venstreMap.has(id)) {
      const periodeEndringer: PeriodeEndring[] = høyreOpplysning.perioder.map((periode) => ({
        periodeId: periode.id,
        type: "lagt-til" as const,
        verdi: formaterOpplysningVerdi(periode.verdi),
        fraOgMed: periode.gyldigFraOgMed,
        tilOgMed: periode.gyldigTilOgMed,
      }));

      forskjeller.push({
        opplysningTypeId: id,
        navn: høyreOpplysning.navn,
        type: "lagt-til",
        periodeEndringer,
        nyOpplysning: høyreOpplysning,
        harNyePerioder: true,
        harFjernedePerioder: false,
        harEndredeVerdier: false,
        harEndredeDatoer: false,
      });
    }
  }

  return forskjeller;
}

function sammenlignPerioder(
  venstrePerioder: Periode[],
  høyrePerioder: Periode[],
): PeriodeEndring[] {
  const endringer: PeriodeEndring[] = [];

  // Use IDs for tracking matched periods (more reliable than Set with objects)
  const matchedVenstreIds = new Set<string>();
  const matchedHøyreIds = new Set<string>();

  // Helper to create a value fingerprint for comparison
  const getVerdiFingeravtrykk = (p: Periode) => JSON.stringify(p.verdi);

  // Helper to create a date fingerprint for comparison
  const getDatoFingeravtrykk = (p: Periode) =>
    `${p.gyldigFraOgMed || ""}|${p.gyldigTilOgMed || ""}`;

  // Create map for quick lookup by ID
  const høyreById = new Map(høyrePerioder.map((p) => [p.id, p]));

  // STRATEGY 0: Match periods by SAME ID first (most reliable)
  // This catches cases where the same period exists in both but has changed
  for (const vp of venstrePerioder) {
    const hp = høyreById.get(vp.id);
    if (hp) {
      // Same period ID exists in both - check for changes
      matchedVenstreIds.add(vp.id);
      matchedHøyreIds.add(hp.id);

      const verdiEndret = getVerdiFingeravtrykk(vp) !== getVerdiFingeravtrykk(hp);
      const datoEndret = getDatoFingeravtrykk(vp) !== getDatoFingeravtrykk(hp);

      if (verdiEndret) {
        endringer.push({
          periodeId: hp.id,
          type: "endret-verdi",
          gammelVerdi: formaterOpplysningVerdi(vp.verdi),
          nyVerdi: formaterOpplysningVerdi(hp.verdi),
          fraOgMed: hp.gyldigFraOgMed,
          tilOgMed: hp.gyldigTilOgMed,
        });
      }

      if (datoEndret) {
        endringer.push({
          periodeId: hp.id,
          type: "endret-datoer",
          verdi: formaterOpplysningVerdi(hp.verdi),
          gammelFraOgMed: vp.gyldigFraOgMed,
          nyFraOgMed: hp.gyldigFraOgMed,
          gammelTilOgMed: vp.gyldigTilOgMed,
          nyTilOgMed: hp.gyldigTilOgMed,
        });
      }
      // If neither changed, it's an exact match (no change to report)
    }
  }

  // Strategy 1: Find exact matches (same value AND same dates) for remaining unmatched
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;

    const vpVerdi = getVerdiFingeravtrykk(vp);
    const vpDato = getDatoFingeravtrykk(vp);

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;

      const hpVerdi = getVerdiFingeravtrykk(hp);
      const hpDato = getDatoFingeravtrykk(hp);

      if (vpVerdi === hpVerdi && vpDato === hpDato) {
        // Perfect match - no changes to report
        matchedVenstreIds.add(vp.id);
        matchedHøyreIds.add(hp.id);
        break;
      }
    }
  }

  // Strategy 2: Find periods with same value but different dates (date changed)
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;

    const vpVerdi = getVerdiFingeravtrykk(vp);

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;

      const hpVerdi = getVerdiFingeravtrykk(hp);

      if (vpVerdi === hpVerdi) {
        // Same value, dates must be different (otherwise would be exact match)
        matchedVenstreIds.add(vp.id);
        matchedHøyreIds.add(hp.id);

        endringer.push({
          periodeId: hp.id,
          type: "endret-datoer",
          verdi: formaterOpplysningVerdi(vp.verdi),
          gammelFraOgMed: vp.gyldigFraOgMed,
          nyFraOgMed: hp.gyldigFraOgMed,
          gammelTilOgMed: vp.gyldigTilOgMed,
          nyTilOgMed: hp.gyldigTilOgMed,
        });
        break;
      }
    }
  }

  // Strategy 3: Find periods with same dates but different value (value changed)
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;

    const vpDato = getDatoFingeravtrykk(vp);

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;

      const hpDato = getDatoFingeravtrykk(hp);

      if (vpDato === hpDato) {
        // Same dates, value must be different
        matchedVenstreIds.add(vp.id);
        matchedHøyreIds.add(hp.id);

        endringer.push({
          periodeId: hp.id,
          type: "endret-verdi",
          gammelVerdi: formaterOpplysningVerdi(vp.verdi),
          nyVerdi: formaterOpplysningVerdi(hp.verdi),
          fraOgMed: hp.gyldigFraOgMed,
          tilOgMed: hp.gyldigTilOgMed,
        });
        break;
      }
    }
  }

  // Strategy 4: Try to match remaining by overlapping date ranges
  // (periods that changed both value and dates)
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;

    // Try to find an overlapping period in høyre
    let bestMatch: Periode | null = null;

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;

      // Check if date ranges overlap
      const vpStart = vp.gyldigFraOgMed || "0000-01-01";
      const vpEnd = vp.gyldigTilOgMed || "9999-12-31";
      const hpStart = hp.gyldigFraOgMed || "0000-01-01";
      const hpEnd = hp.gyldigTilOgMed || "9999-12-31";

      const overlaps = vpStart <= hpEnd && hpStart <= vpEnd;

      if (overlaps) {
        bestMatch = hp;
        break;
      }
    }

    if (bestMatch) {
      matchedVenstreIds.add(vp.id);
      matchedHøyreIds.add(bestMatch.id);

      const verdiEndret = getVerdiFingeravtrykk(vp) !== getVerdiFingeravtrykk(bestMatch);
      const datoEndret = getDatoFingeravtrykk(vp) !== getDatoFingeravtrykk(bestMatch);

      if (verdiEndret) {
        endringer.push({
          periodeId: bestMatch.id,
          type: "endret-verdi",
          gammelVerdi: formaterOpplysningVerdi(vp.verdi),
          nyVerdi: formaterOpplysningVerdi(bestMatch.verdi),
          fraOgMed: bestMatch.gyldigFraOgMed,
          tilOgMed: bestMatch.gyldigTilOgMed,
        });
      }

      if (datoEndret) {
        endringer.push({
          periodeId: bestMatch.id,
          type: "endret-datoer",
          verdi: formaterOpplysningVerdi(bestMatch.verdi),
          gammelFraOgMed: vp.gyldigFraOgMed,
          nyFraOgMed: bestMatch.gyldigFraOgMed,
          gammelTilOgMed: vp.gyldigTilOgMed,
          nyTilOgMed: bestMatch.gyldigTilOgMed,
        });
      }
    }
  }

  // Strategy 5: Any remaining unmatched in venstre are removed
  for (const vp of venstrePerioder) {
    if (!matchedVenstreIds.has(vp.id)) {
      endringer.push({
        periodeId: vp.id,
        type: "fjernet",
        verdi: formaterOpplysningVerdi(vp.verdi),
        fraOgMed: vp.gyldigFraOgMed,
        tilOgMed: vp.gyldigTilOgMed,
      });
    }
  }

  // Strategy 6: Any remaining unmatched in høyre are added
  for (const hp of høyrePerioder) {
    if (!matchedHøyreIds.has(hp.id)) {
      endringer.push({
        periodeId: hp.id,
        type: "lagt-til",
        verdi: formaterOpplysningVerdi(hp.verdi),
        fraOgMed: hp.gyldigFraOgMed,
        tilOgMed: hp.gyldigTilOgMed,
      });
    }
  }

  return endringer;
}

function formatDato(dato?: string): string {
  return dato ? formaterTilNorskDato(dato) : "—";
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Diff() {
  const { behandling: gjeldeneBehandling } = useBehandling();
  const [sammenligningsBehandlingId, setSammenligningsBehandlingId] = useState(
    gjeldeneBehandling.basertPå,
  );
  const [aktivtDesign, setAktivtDesign] = useState<string>("1");
  const fetcher = useFetcher<{ behandling?: Behandling; error?: string }>();

  const sammenligningsBehandling = fetcher.data?.behandling;
  const feil = fetcher.data?.error;
  const laster = fetcher.state === "submitting" || fetcher.state === "loading";

  const hentSammenligningsBehandling = () => {
    if (!sammenligningsBehandlingId.trim()) return;
    fetcher.submit(
      { _action: "hent-behandling-for-diff", behandlingId: sammenligningsBehandlingId },
      { method: "post" },
    );
  };

  const forskjeller = useMemo(() => {
    if (!sammenligningsBehandling) return [];
    return sammenlignOpplysninger(
      sammenligningsBehandling.opplysninger.filter((o) => o.synlig),
      gjeldeneBehandling.opplysninger.filter((o) => o.synlig),
    );
  }, [sammenligningsBehandling, gjeldeneBehandling]);

  return (
    <main className="card p-4">
      <LinkTabs className="flex-1" />
      <VStack gap="space-8" className="card mt-4 p-4">
        {/* Design Toggle */}
        <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-4">
          <HStack justify="space-between" align="center">
            <Heading size="medium">🎨 Sammenlign behandlinger</Heading>
            <ToggleGroup
              defaultValue="1"
              value={aktivtDesign}
              onChange={(val) => setAktivtDesign(val)}
              size="small"
            >
              <ToggleGroup.Item value="1">Design 1</ToggleGroup.Item>
              <ToggleGroup.Item value="2">Design 2</ToggleGroup.Item>
              <ToggleGroup.Item value="3">Design 3</ToggleGroup.Item>
              <ToggleGroup.Item value="4">Design 4</ToggleGroup.Item>
              <ToggleGroup.Item value="5">Design 5</ToggleGroup.Item>
            </ToggleGroup>
          </HStack>
        </div>

        {/* Input Section */}
        <HStack gap="space-4" align="end">
          <TextField
            label="Behandling ID å sammenligne med"
            description="Skriv inn UUID for behandlingen du vil sammenligne med"
            value={sammenligningsBehandlingId}
            onChange={(e) => setSammenligningsBehandlingId(e.target.value)}
            size="small"
            className="w-96"
          />
          <Button
            size="small"
            onClick={hentSammenligningsBehandling}
            loading={laster}
            disabled={!sammenligningsBehandlingId.trim()}
            icon={<ArrowsSquarepathIcon aria-hidden />}
          >
            Sammenlign
          </Button>
        </HStack>

        {feil && (
          <Alert variant="error" size="small">
            {feil}
          </Alert>
        )}

        {/* Render Active Design */}
        {sammenligningsBehandling && (
          <>
            {aktivtDesign === "1" && (
              <Design1SideBySide
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
                forskjeller={forskjeller}
              />
            )}
            {aktivtDesign === "2" && (
              <Design2GitStyleUnifiedDiff
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
            {aktivtDesign === "3" && (
              <Design3CardBasedTimeline
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
            {aktivtDesign === "4" && (
              <Design4InteractiveExplorer
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
            {aktivtDesign === "5" && (
              <Design5CompactSummary
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
          </>
        )}
      </VStack>
    </main>
  );
}

// ============================================================================
// DESIGN 1: SIDE-BY-SIDE COMPARISON
// A classic two-panel view with synchronized scrolling and inline diff markers
// ============================================================================

interface DesignProps {
  forskjeller: OpplysningForskjell[];
  gammelBehandling: Behandling;
  nyBehandling: Behandling;
}

// Helper component to show change type badges
function EndringsBadges({ forskjell }: { forskjell: OpplysningForskjell }) {
  if (forskjell.type === "uendret") return null;

  return (
    <HStack gap="space-1" wrap>
      {forskjell.harNyePerioder && (
        <Tag variant="success" size="xsmall">
          +Ny periode
        </Tag>
      )}
      {forskjell.harFjernedePerioder && (
        <Tag variant="error" size="xsmall">
          -Fjernet periode
        </Tag>
      )}
      {forskjell.harEndredeVerdier && (
        <Tag variant="warning" size="xsmall">
          ~Verdi endret
        </Tag>
      )}
      {forskjell.harEndredeDatoer && (
        <Tag variant="info" size="xsmall">
          📅 Datoer endret
        </Tag>
      )}
    </HStack>
  );
}

// Helper component to show period change details
function PeriodeEndringDetaljer({ endring }: { endring: PeriodeEndring }) {
  if (endring.type === "lagt-til") {
    return (
      <div className="rounded border-l-2 border-l-(--ax-border-success) bg-(--ax-bg-success-soft) p-2">
        <HStack gap="space-2" align="center">
          <PlusIcon aria-hidden className="text-(--ax-text-success)" />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold" className="text-(--ax-text-success)">
              Ny periode lagt til
            </BodyShort>
            <Detail>
              Verdi: {endring.verdi} | {formatDato(endring.fraOgMed)} –{" "}
              {formatDato(endring.tilOgMed)}
            </Detail>
          </VStack>
        </HStack>
      </div>
    );
  }

  if (endring.type === "fjernet") {
    return (
      <div className="rounded border-l-2 border-l-(--ax-border-danger) bg-(--ax-bg-danger-soft) p-2">
        <HStack gap="space-2" align="center">
          <MinusIcon aria-hidden className="text-(--ax-text-danger)" />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold" className="text-(--ax-text-danger)">
              Periode fjernet
            </BodyShort>
            <Detail className="line-through">
              Verdi: {endring.verdi} | {formatDato(endring.fraOgMed)} –{" "}
              {formatDato(endring.tilOgMed)}
            </Detail>
          </VStack>
        </HStack>
      </div>
    );
  }

  if (endring.type === "endret-verdi") {
    return (
      <div className="rounded border-l-2 border-l-(--ax-border-warning) bg-(--ax-bg-warning-soft) p-2">
        <HStack gap="space-2" align="center">
          <ArrowsSquarepathIcon aria-hidden className="text-(--ax-text-warning)" />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold">
              Verdi endret
            </BodyShort>
            <HStack gap="space-2" align="center">
              <BodyShort size="small" className="text-(--ax-text-danger) line-through">
                {endring.gammelVerdi}
              </BodyShort>
              <ArrowRightIcon aria-hidden />
              <BodyShort size="small" weight="semibold" className="text-(--ax-text-success)">
                {endring.nyVerdi}
              </BodyShort>
            </HStack>
          </VStack>
        </HStack>
      </div>
    );
  }

  if (endring.type === "endret-datoer") {
    return (
      <div className="rounded border-l-2 border-l-(--ax-border-info) bg-(--ax-bg-info-soft) p-2">
        <HStack gap="space-2" align="center">
          <CalendarIcon aria-hidden className="text-(--ax-text-info)" />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold">
              Gyldighetsperiode endret
            </BodyShort>
            <Detail>Verdi: {endring.verdi}</Detail>
            <HStack gap="space-2" align="center">
              <Detail className="text-(--ax-text-neutral) line-through">
                {formatDato(endring.gammelFraOgMed)} – {formatDato(endring.gammelTilOgMed)}
              </Detail>
              <ArrowRightIcon aria-hidden />
              <Detail weight="semibold">
                {formatDato(endring.nyFraOgMed)} – {formatDato(endring.nyTilOgMed)}
              </Detail>
            </HStack>
          </VStack>
        </HStack>
      </div>
    );
  }

  return null;
}

function Design1SideBySide({ gammelBehandling, nyBehandling, forskjeller }: DesignProps) {
  const [filterType, setFilterType] = useState<"alle" | "endret" | "uendret">("alle");
  const [søk, setSøk] = useState("");

  const filtrertForskjeller = useMemo(() => {
    let result = forskjeller;

    if (filterType === "endret") {
      result = result.filter((f) => f.type !== "uendret");
    } else if (filterType === "uendret") {
      result = result.filter((f) => f.type === "uendret");
    }

    if (søk) {
      result = result.filter((f) => f.navn.toLowerCase().includes(søk.toLowerCase()));
    }

    return result;
  }, [forskjeller, filterType, søk]);

  const stats = useMemo(() => {
    const endrede = forskjeller.filter((f) => f.type !== "uendret");
    return {
      totaltEndret: endrede.length,
      nyePerioder: endrede.filter((f) => f.harNyePerioder).length,
      fjernedePerioder: endrede.filter((f) => f.harFjernedePerioder).length,
      endredeVerdier: endrede.filter((f) => f.harEndredeVerdier).length,
      endredeDatoer: endrede.filter((f) => f.harEndredeDatoer).length,
    };
  }, [forskjeller]);

  return (
    <VStack gap="space-4">
      {/* Header Stats */}
      <div className="rounded-lg bg-(--ax-bg-info-soft) p-4">
        <HStack gap="space-8" align="center" wrap>
          <VStack gap="space-1">
            <Detail uppercase>Sammenligner</Detail>
            <HStack gap="space-2" align="center">
              <Tag variant="info" size="small">
                {gammelBehandling.behandlingId.slice(0, 12)}...
              </Tag>
              <ArrowRightIcon aria-hidden />
              <Tag variant="success" size="small">
                {nyBehandling.behandlingId.slice(0, 12)}...
              </Tag>
            </HStack>
          </VStack>
          <div className="h-8 w-px bg-(--ax-border-neutral)" />
          <VStack gap="space-1">
            <Detail uppercase>Oppsummering av endringer</Detail>
            <HStack gap="space-2" wrap>
              {stats.nyePerioder > 0 && (
                <Tag variant="success" size="xsmall">
                  +{stats.nyePerioder} nye perioder
                </Tag>
              )}
              {stats.fjernedePerioder > 0 && (
                <Tag variant="error" size="xsmall">
                  -{stats.fjernedePerioder} fjernede perioder
                </Tag>
              )}
              {stats.endredeVerdier > 0 && (
                <Tag variant="warning" size="xsmall">
                  ~{stats.endredeVerdier} endrede verdier
                </Tag>
              )}
              {stats.endredeDatoer > 0 && (
                <Tag variant="info" size="xsmall">
                  📅{stats.endredeDatoer} endrede datoer
                </Tag>
              )}
            </HStack>
          </VStack>
        </HStack>
      </div>

      {/* Filters */}
      <HStack gap="space-4" align="end">
        <Search
          label="Søk i opplysninger"
          size="small"
          variant="simple"
          value={søk}
          onChange={(val) => setSøk(val)}
          className="w-64"
        />
        <Chips>
          <Chips.Toggle selected={filterType === "alle"} onClick={() => setFilterType("alle")}>
            Alle ({forskjeller.length})
          </Chips.Toggle>
          <Chips.Toggle selected={filterType === "endret"} onClick={() => setFilterType("endret")}>
            Kun endrede ({stats.totaltEndret})
          </Chips.Toggle>
          <Chips.Toggle
            selected={filterType === "uendret"}
            onClick={() => setFilterType("uendret")}
          >
            Kun uendrede
          </Chips.Toggle>
        </Chips>
      </HStack>

      {/* Side by Side Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column Header */}
        <div className="rounded-lg bg-(--ax-bg-danger-soft) p-3">
          <HStack gap="space-2" align="center">
            <MinusIcon aria-hidden className="text-(--ax-text-danger)" />
            <Label size="small">Før (Sammenligningsbehandling)</Label>
          </HStack>
        </div>

        {/* Right Column Header */}
        <div className="rounded-lg bg-(--ax-bg-success-soft) p-3">
          <HStack gap="space-2" align="center">
            <PlusIcon aria-hidden className="text-(--ax-text-success)" />
            <Label size="small">Etter (Gjeldende behandling)</Label>
          </HStack>
        </div>

        {/* Content */}
        {filtrertForskjeller.map((forskjell) => (
          <Fragment key={forskjell.opplysningTypeId}>
            {/* Left Side */}
            <div
              className={`rounded-lg border p-3 ${
                forskjell.type === "fjernet"
                  ? "border-(--ax-border-danger) bg-(--ax-bg-danger-soft)"
                  : forskjell.type === "endret"
                    ? "border-(--ax-border-warning) bg-(--ax-bg-warning-soft)"
                    : "border-(--ax-border-neutral) bg-(--ax-bg-neutral-soft)"
              }`}
            >
              <VStack gap="space-2">
                <HStack justify="space-between" align="start" wrap>
                  <BodyShort size="small" weight="semibold">
                    {forskjell.navn}
                  </BodyShort>
                  <EndringsBadges forskjell={forskjell} />
                </HStack>

                {/* Show change details */}
                {forskjell.periodeEndringer.length > 0 && (
                  <VStack gap="space-1">
                    {forskjell.periodeEndringer.map((endring, idx) => (
                      <PeriodeEndringDetaljer key={idx} endring={endring} />
                    ))}
                  </VStack>
                )}

                {/* Show original periods for context */}
                {forskjell.gammelOpplysning?.perioder.map((periode, idx) => (
                  <div
                    key={periode.id || idx}
                    className="rounded bg-(--ax-bg-default) p-2 opacity-60"
                  >
                    <Detail>
                      {formatDato(periode.gyldigFraOgMed)} – {formatDato(periode.gyldigTilOgMed)}
                    </Detail>
                    <BodyShort size="small">{formaterOpplysningVerdi(periode.verdi)}</BodyShort>
                  </div>
                ))}
                {!forskjell.gammelOpplysning && (
                  <BodyShort size="small" className="text-(--ax-text-neutral) italic">
                    Ikke tilstede
                  </BodyShort>
                )}
              </VStack>
            </div>

            {/* Right Side */}
            <div
              className={`rounded-lg border p-3 ${
                forskjell.type === "lagt-til"
                  ? "border-(--ax-border-success) bg-(--ax-bg-success-soft)"
                  : forskjell.type === "endret"
                    ? "border-(--ax-border-success) bg-(--ax-bg-success-soft)"
                    : "border-(--ax-border-neutral) bg-(--ax-bg-neutral-soft)"
              }`}
            >
              <VStack gap="space-2">
                <HStack justify="space-between">
                  <BodyShort size="small" weight="semibold">
                    {forskjell.navn}
                  </BodyShort>
                  {forskjell.type === "lagt-til" && (
                    <Tag variant="success" size="xsmall">
                      Ny opplysning
                    </Tag>
                  )}
                </HStack>
                {forskjell.nyOpplysning?.perioder.map((periode, idx) => (
                  <div
                    key={periode.id || idx}
                    className={`rounded p-2 ${
                      forskjell.type !== "uendret"
                        ? "bg-(--ax-bg-success-softA)"
                        : "bg-(--ax-bg-default)"
                    }`}
                  >
                    <Detail>
                      {formatDato(periode.gyldigFraOgMed)} – {formatDato(periode.gyldigTilOgMed)}
                    </Detail>
                    <BodyShort
                      size="small"
                      weight={forskjell.type !== "uendret" ? "semibold" : "regular"}
                    >
                      {formaterOpplysningVerdi(periode.verdi)}
                    </BodyShort>
                  </div>
                ))}
                {!forskjell.nyOpplysning && (
                  <BodyShort size="small" className="text-(--ax-text-neutral) italic">
                    Ikke tilstede
                  </BodyShort>
                )}
              </VStack>
            </div>
          </Fragment>
        ))}
      </div>
    </VStack>
  );
}

// ============================================================================
// DESIGN 2: GIT-STYLE UNIFIED DIFF
// A developer-friendly view inspired by GitHub's diff UI
// ============================================================================

function Design2GitStyleUnifiedDiff({ forskjeller, gammelBehandling, nyBehandling }: DesignProps) {
  const [visSamlet, setVisSamlet] = useState(true);
  const endringer = forskjeller.filter((f) => f.type !== "uendret");

  // Calculate stats for change types
  const stats = useMemo(
    () => ({
      nyePerioder: endringer.filter((f) => f.harNyePerioder).length,
      fjernedePerioder: endringer.filter((f) => f.harFjernedePerioder).length,
      endredeVerdier: endringer.filter((f) => f.harEndredeVerdier).length,
      endredeDatoer: endringer.filter((f) => f.harEndredeDatoer).length,
    }),
    [endringer],
  );

  return (
    <VStack gap="space-4">
      {/* Header */}
      <div className="rounded-lg border border-(--ax-border-neutral) bg-(--ax-bg-neutral-soft) p-4 font-mono">
        <HStack justify="space-between" align="center">
          <HStack gap="space-4">
            <CodeIcon aria-hidden className="text-2xl" />
            <VStack gap="space-0">
              <BodyShort size="small" weight="semibold">
                behandling-diff.json
              </BodyShort>
              <Detail className="text-(--ax-text-neutral)">
                {endringer.length} opplysninger endret, {forskjeller.length - endringer.length}{" "}
                uendret
              </Detail>
            </VStack>
          </HStack>
          <Switch size="small" checked={visSamlet} onChange={() => setVisSamlet(!visSamlet)}>
            Vis kun endringer
          </Switch>
        </HStack>
      </div>

      {/* Diff Content */}
      <div className="overflow-hidden rounded-lg border border-(--ax-border-neutral) bg-(--ax-bg-neutral-soft) font-mono text-sm">
        {/* File header */}
        <div className="border-b border-(--ax-border-neutral) bg-(--ax-bg-neutral-moderate) px-4 py-2">
          <HStack gap="space-2" align="center">
            <span className="text-(--ax-text-danger)">
              --- a/{gammelBehandling.behandlingId.slice(0, 8)}
            </span>
            <span className="text-(--ax-text-neutral)">(gammel)</span>
          </HStack>
          <HStack gap="space-2" align="center">
            <span className="text-(--ax-text-success)">
              +++ b/{nyBehandling.behandlingId.slice(0, 8)}
            </span>
            <span className="text-(--ax-text-neutral)">(ny)</span>
          </HStack>
        </div>

        {/* Diff lines */}
        <div className="divide-y divide-(--ax-border-neutral)">
          {(visSamlet ? endringer : forskjeller).map((forskjell, idx) => (
            <div key={forskjell.opplysningTypeId}>
              {/* Hunk header with change type indicators */}
              <div className="flex items-center justify-between bg-(--ax-bg-info-soft) px-4 py-1">
                <span className="text-(--ax-text-neutral)">@@ {forskjell.navn} @@</span>
                <HStack gap="space-1">
                  {forskjell.harNyePerioder && (
                    <span className="rounded bg-(--ax-bg-success-moderate) px-1 text-xs">
                      +periode
                    </span>
                  )}
                  {forskjell.harFjernedePerioder && (
                    <span className="rounded bg-(--ax-bg-danger-moderate) px-1 text-xs">
                      -periode
                    </span>
                  )}
                  {forskjell.harEndredeVerdier && (
                    <span className="rounded bg-(--ax-bg-warning-moderate) px-1 text-xs">
                      ~verdi
                    </span>
                  )}
                  {forskjell.harEndredeDatoer && (
                    <span className="rounded bg-(--ax-bg-info-moderate) px-1 text-xs">📅dato</span>
                  )}
                </HStack>
              </div>

              {forskjell.type === "uendret" && (
                <div className="px-4 py-1 text-(--ax-text-neutral)">
                  <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                  <span className="mr-2"> </span>
                  {forskjell.nyOpplysning?.perioder
                    .map((p) => formaterOpplysningVerdi(p.verdi))
                    .join(", ")}
                </div>
              )}

              {/* Show specific changes */}
              {forskjell.periodeEndringer.map((endring, eIdx) => {
                if (endring.type === "lagt-til") {
                  return (
                    <div key={eIdx} className="bg-(--ax-bg-success-soft) px-4 py-1">
                      <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                      <span className="mr-2 text-(--ax-text-success)">+</span>
                      <span className="text-(--ax-text-success)">
                        [NY PERIODE] verdi: &quot;{endring.verdi}&quot; |{" "}
                        {formatDato(endring.fraOgMed)} → {formatDato(endring.tilOgMed)}
                      </span>
                    </div>
                  );
                }
                if (endring.type === "fjernet") {
                  return (
                    <div key={eIdx} className="bg-(--ax-bg-danger-soft) px-4 py-1">
                      <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                      <span className="mr-2 text-(--ax-text-danger)">-</span>
                      <span className="text-(--ax-text-danger)">
                        [FJERNET PERIODE] verdi: &quot;{endring.verdi}&quot; |{" "}
                        {formatDato(endring.fraOgMed)} → {formatDato(endring.tilOgMed)}
                      </span>
                    </div>
                  );
                }
                if (endring.type === "endret-verdi") {
                  return (
                    <Fragment key={eIdx}>
                      <div className="bg-(--ax-bg-danger-soft) px-4 py-1">
                        <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                        <span className="mr-2 text-(--ax-text-danger)">-</span>
                        <span className="text-(--ax-text-danger)">
                          verdi: &quot;{endring.gammelVerdi}&quot;
                        </span>
                      </div>
                      <div className="bg-(--ax-bg-success-soft) px-4 py-1">
                        <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                        <span className="mr-2 text-(--ax-text-success)">+</span>
                        <span className="text-(--ax-text-success)">
                          verdi: &quot;{endring.nyVerdi}&quot;
                        </span>
                      </div>
                    </Fragment>
                  );
                }
                if (endring.type === "endret-datoer") {
                  return (
                    <Fragment key={eIdx}>
                      <div className="bg-(--ax-bg-info-soft) px-4 py-1">
                        <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                        <span className="mr-2 text-(--ax-text-info)">~</span>
                        <span className="text-(--ax-text-info)">
                          [DATO ENDRET] verdi: &quot;{endring.verdi}&quot; |
                          {formatDato(endring.gammelFraOgMed)}→{formatDato(endring.gammelTilOgMed)}{" "}
                          ⇒{formatDato(endring.nyFraOgMed)}→{formatDato(endring.nyTilOgMed)}
                        </span>
                      </div>
                    </Fragment>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Stats footer */}
      <HStack gap="space-4" wrap>
        {stats.nyePerioder > 0 && (
          <Tag variant="success" size="small">
            <PlusIcon aria-hidden /> {stats.nyePerioder} nye perioder
          </Tag>
        )}
        {stats.fjernedePerioder > 0 && (
          <Tag variant="error" size="small">
            <MinusIcon aria-hidden /> {stats.fjernedePerioder} fjernede perioder
          </Tag>
        )}
        {stats.endredeVerdier > 0 && (
          <Tag variant="warning" size="small">
            <ArrowsSquarepathIcon aria-hidden /> {stats.endredeVerdier} endrede verdier
          </Tag>
        )}
        {stats.endredeDatoer > 0 && (
          <Tag variant="info" size="small">
            <CalendarIcon aria-hidden /> {stats.endredeDatoer} endrede datoer
          </Tag>
        )}
      </HStack>
    </VStack>
  );
}

// ============================================================================
// DESIGN 3: CARD-BASED TIMELINE
// Visual timeline showing changes as a journey from old to new
// ============================================================================

function Design3CardBasedTimeline({ forskjeller, gammelBehandling, nyBehandling }: DesignProps) {
  const endringer = forskjeller.filter((f) => f.type !== "uendret");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  if (endringer.length === 0) {
    return <Alert variant="info">Ingen endringer funnet mellom behandlingene</Alert>;
  }

  return (
    <VStack gap="space-8">
      {/* Journey Header */}
      <div className="rounded-xl bg-(--ax-bg-neutral-soft) p-6 text-center">
        <VStack gap="space-4" align="center">
          <Heading size="small">🚀 Endringsreise</Heading>
          <HStack gap="space-4" align="center" justify="center" wrap>
            <div className="rounded-lg bg-(--ax-bg-default) p-3 shadow-sm">
              <VStack gap="space-1" align="center">
                <Detail uppercase>Fra</Detail>
                <BodyShort size="small" weight="semibold" className="font-mono">
                  {gammelBehandling.behandlingId.slice(0, 12)}...
                </BodyShort>
                <Detail>{gammelBehandling.tilstand}</Detail>
              </VStack>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 bg-(--ax-border-neutral)" />
              <ArrowRightIcon aria-hidden className="text-2xl text-(--ax-text-info)" />
              <div className="h-0.5 w-8 bg-(--ax-border-neutral)" />
            </div>

            <div className="rounded-lg bg-(--ax-bg-success-soft) p-3 shadow-sm">
              <VStack gap="space-1" align="center">
                <Detail uppercase>Til</Detail>
                <BodyShort size="small" weight="semibold" className="font-mono">
                  {nyBehandling.behandlingId.slice(0, 12)}...
                </BodyShort>
                <Detail>{nyBehandling.tilstand}</Detail>
              </VStack>
            </div>
          </HStack>

          <Tag variant="info" size="medium">
            {endringer.length} opplysninger ble endret
          </Tag>
        </VStack>
      </div>

      {/* Timeline Cards */}
      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-(--ax-border-neutral)" />

        <VStack gap="space-4">
          {endringer.map((forskjell, index) => {
            const isExpanded = expandedCards.has(forskjell.opplysningTypeId);
            const typeColors = {
              "lagt-til": {
                bg: "bg-(--ax-bg-success-soft)",
                border: "border-l-(--ax-border-success)",
                icon: <PlusIcon aria-hidden />,
              },
              fjernet: {
                bg: "bg-(--ax-bg-danger-soft)",
                border: "border-l-(--ax-border-danger)",
                icon: <MinusIcon aria-hidden />,
              },
              endret: {
                bg: "bg-(--ax-bg-warning-soft)",
                border: "border-l-(--ax-border-warning)",
                icon: <ArrowsSquarepathIcon aria-hidden />,
              },
              uendret: {
                bg: "bg-(--ax-bg-neutral-soft)",
                border: "border-l-(--ax-border-neutral)",
                icon: <CheckmarkIcon aria-hidden />,
              },
            };
            const colors = typeColors[forskjell.type];

            return (
              <div key={forskjell.opplysningTypeId} className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute top-4 -left-5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-(--ax-border-neutral) ${colors.bg}`}
                >
                  <span className="text-xs">{index + 1}</span>
                </div>

                {/* Card */}
                <div
                  className={`cursor-pointer rounded-lg border border-(--ax-border-neutral) bg-(--ax-bg-default) p-4 transition-shadow hover:shadow-md ${colors.border} border-l-4`}
                  onClick={() => toggleCard(forskjell.opplysningTypeId)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(forskjell.opplysningTypeId);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                >
                  <HStack justify="space-between" align="center">
                    <HStack gap="space-4" align="center">
                      <div className={`rounded-full p-2 ${colors.bg}`}>{colors.icon}</div>
                      <VStack gap="space-0">
                        <BodyShort weight="semibold">{forskjell.navn}</BodyShort>
                        <HStack gap="space-1" wrap>
                          {forskjell.harNyePerioder && (
                            <Detail className="text-(--ax-text-success)">+ny periode</Detail>
                          )}
                          {forskjell.harFjernedePerioder && (
                            <Detail className="text-(--ax-text-danger)">-fjernet periode</Detail>
                          )}
                          {forskjell.harEndredeVerdier && (
                            <Detail className="text-(--ax-text-warning)">~endret verdi</Detail>
                          )}
                          {forskjell.harEndredeDatoer && (
                            <Detail className="text-(--ax-text-info)">📅endret dato</Detail>
                          )}
                        </HStack>
                      </VStack>
                    </HStack>
                    <HStack gap="space-2" align="center">
                      <EndringsBadges forskjell={forskjell} />
                      {isExpanded ? (
                        <ChevronDownIcon aria-hidden />
                      ) : (
                        <ChevronRightIcon aria-hidden />
                      )}
                    </HStack>
                  </HStack>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 space-y-4">
                      {/* Show specific changes */}
                      <VStack gap="space-2">
                        <Label size="small">Hva endret seg?</Label>
                        {forskjell.periodeEndringer.map((endring, idx) => (
                          <PeriodeEndringDetaljer key={idx} endring={endring} />
                        ))}
                      </VStack>

                      {/* Before/After comparison */}
                      <div className="grid grid-cols-2 gap-4 rounded-lg bg-(--ax-bg-neutral-soft) p-4">
                        <VStack gap="space-2">
                          <Label size="small">Før</Label>
                          {forskjell.gammelOpplysning?.perioder.map((p, idx) => (
                            <div key={idx} className="rounded bg-(--ax-bg-default) p-2 opacity-70">
                              <Detail>
                                {formatDato(p.gyldigFraOgMed)} – {formatDato(p.gyldigTilOgMed)}
                              </Detail>
                              <BodyShort size="small">{formaterOpplysningVerdi(p.verdi)}</BodyShort>
                            </div>
                          )) || <Detail className="text-(--ax-text-neutral)">—</Detail>}
                        </VStack>
                        <VStack gap="space-2">
                          <Label size="small">Etter</Label>
                          {forskjell.nyOpplysning?.perioder.map((p, idx) => (
                            <div key={idx} className="rounded bg-(--ax-bg-default) p-2">
                              <Detail>
                                {formatDato(p.gyldigFraOgMed)} – {formatDato(p.gyldigTilOgMed)}
                              </Detail>
                              <BodyShort size="small" weight="semibold">
                                {formaterOpplysningVerdi(p.verdi)}
                              </BodyShort>
                            </div>
                          )) || <Detail className="text-(--ax-text-neutral)">—</Detail>}
                        </VStack>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </VStack>
      </div>
    </VStack>
  );
}

// ============================================================================
// DESIGN 4: INTERACTIVE EXPLORER
// Advanced filtering, grouping, and drill-down capabilities
// ============================================================================

function Design4InteractiveExplorer({ forskjeller }: DesignProps) {
  const [selectedOpplysning, setSelectedOpplysning] = useState<OpplysningForskjell | null>(null);
  const [visningstype, setVisningstype] = useState<"alle" | "endret" | "lagt-til" | "fjernet">(
    "endret",
  );
  const [søk, setSøk] = useState("");

  const filtrert = useMemo(() => {
    let result = forskjeller;
    if (visningstype !== "alle") {
      result = result.filter((f) => f.type === visningstype);
    }
    if (søk) {
      result = result.filter((f) => f.navn.toLowerCase().includes(søk.toLowerCase()));
    }
    return result;
  }, [forskjeller, visningstype, søk]);

  const stats = {
    totalt: forskjeller.length,
    endret: forskjeller.filter((f) => f.type === "endret").length,
    lagtTil: forskjeller.filter((f) => f.type === "lagt-til").length,
    fjernet: forskjeller.filter((f) => f.type === "fjernet").length,
    uendret: forskjeller.filter((f) => f.type === "uendret").length,
  };

  return (
    <div className="grid min-h-[600px] grid-cols-12 gap-4">
      {/* Left Sidebar - Filters & List */}
      <div className="col-span-4 flex flex-col gap-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className={`cursor-pointer rounded-lg p-3 transition-all hover:shadow-sm ${
              visningstype === "endret"
                ? "bg-(--ax-bg-warning-moderate)"
                : "bg-(--ax-bg-warning-soft)"
            }`}
            onClick={() => setVisningstype(visningstype === "endret" ? "alle" : "endret")}
          >
            <VStack gap="space-1" align="center">
              <ArrowsSquarepathIcon aria-hidden className="text-xl" />
              <Heading size="medium">{stats.endret}</Heading>
              <Detail>Endret</Detail>
            </VStack>
          </button>
          <button
            type="button"
            className={`cursor-pointer rounded-lg p-3 transition-all hover:shadow-sm ${
              visningstype === "lagt-til"
                ? "bg-(--ax-bg-success-moderate)"
                : "bg-(--ax-bg-success-soft)"
            }`}
            onClick={() => setVisningstype(visningstype === "lagt-til" ? "alle" : "lagt-til")}
          >
            <VStack gap="space-1" align="center">
              <PlusIcon aria-hidden className="text-xl" />
              <Heading size="medium">{stats.lagtTil}</Heading>
              <Detail>Lagt til</Detail>
            </VStack>
          </button>
          <button
            type="button"
            className={`cursor-pointer rounded-lg p-3 transition-all hover:shadow-sm ${
              visningstype === "fjernet"
                ? "bg-(--ax-bg-danger-moderate)"
                : "bg-(--ax-bg-danger-soft)"
            }`}
            onClick={() => setVisningstype(visningstype === "fjernet" ? "alle" : "fjernet")}
          >
            <VStack gap="space-1" align="center">
              <MinusIcon aria-hidden className="text-xl" />
              <Heading size="medium">{stats.fjernet}</Heading>
              <Detail>Fjernet</Detail>
            </VStack>
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-(--ax-bg-neutral-soft) p-3 transition-all hover:shadow-sm"
            onClick={() => setVisningstype("alle")}
          >
            <VStack gap="space-1" align="center">
              <EyeIcon aria-hidden className="text-xl" />
              <Heading size="medium">{stats.totalt}</Heading>
              <Detail>Totalt</Detail>
            </VStack>
          </button>
        </div>

        {/* Search */}
        <Search
          label="Søk opplysninger"
          size="small"
          variant="simple"
          value={søk}
          onChange={(val) => setSøk(val)}
        />

        {/* Opplysning List */}
        <div className="flex-1 overflow-auto rounded-lg bg-(--ax-bg-neutral-soft) p-2">
          <VStack gap="space-1">
            {filtrert.map((forskjell) => (
              <button
                type="button"
                key={forskjell.opplysningTypeId}
                className={`w-full cursor-pointer rounded p-3 text-left transition-colors hover:bg-(--ax-bg-neutral-moderate) ${
                  selectedOpplysning?.opplysningTypeId === forskjell.opplysningTypeId
                    ? "bg-(--ax-bg-info-soft)"
                    : "bg-(--ax-bg-default)"
                }`}
                onClick={() => setSelectedOpplysning(forskjell)}
              >
                <HStack justify="space-between" align="center">
                  <BodyShort size="small" className="flex-1 truncate">
                    {forskjell.navn}
                  </BodyShort>
                  <Tag
                    variant={
                      forskjell.type === "endret"
                        ? "warning"
                        : forskjell.type === "lagt-til"
                          ? "success"
                          : forskjell.type === "fjernet"
                            ? "error"
                            : "neutral"
                    }
                    size="xsmall"
                  >
                    {forskjell.type === "endret" && "~"}
                    {forskjell.type === "lagt-til" && "+"}
                    {forskjell.type === "fjernet" && "-"}
                    {forskjell.type === "uendret" && "="}
                  </Tag>
                </HStack>
              </button>
            ))}
          </VStack>
        </div>
      </div>

      {/* Right Panel - Detail View */}
      <div className="col-span-8">
        {selectedOpplysning ? (
          <div className="h-full rounded-lg border border-(--ax-border-neutral) bg-(--ax-bg-default) p-6">
            <VStack gap="space-6">
              <HStack justify="space-between" align="start">
                <VStack gap="space-2">
                  <Heading size="small">{selectedOpplysning.navn}</Heading>
                  <HStack gap="space-2">
                    <Tag
                      variant={
                        selectedOpplysning.type === "endret"
                          ? "warning"
                          : selectedOpplysning.type === "lagt-til"
                            ? "success"
                            : selectedOpplysning.type === "fjernet"
                              ? "error"
                              : "neutral"
                      }
                    >
                      {selectedOpplysning.type.charAt(0).toUpperCase() +
                        selectedOpplysning.type.slice(1)}
                    </Tag>
                    <Detail className="text-(--ax-text-neutral)">
                      Type ID: {selectedOpplysning.opplysningTypeId.slice(0, 8)}...
                    </Detail>
                  </HStack>
                </VStack>
                <Button
                  variant="tertiary"
                  size="xsmall"
                  icon={<XMarkIcon aria-hidden />}
                  onClick={() => setSelectedOpplysning(null)}
                />
              </HStack>

              {/* Detailed Comparison */}
              <div className="grid grid-cols-2 gap-6">
                {/* Before */}
                <VStack gap="space-4">
                  <HStack gap="space-2" align="center">
                    <div className="h-3 w-3 rounded-full bg-(--ax-bg-danger-strong)" />
                    <Label>Før (Gammel behandling)</Label>
                  </HStack>
                  <div className="min-h-[200px] rounded-lg bg-(--ax-bg-danger-soft) p-4">
                    {selectedOpplysning.gammelOpplysning ? (
                      <VStack gap="space-4">
                        {selectedOpplysning.gammelOpplysning.perioder.map((periode, idx) => (
                          <div key={idx} className="rounded bg-(--ax-bg-default) p-3">
                            <VStack gap="space-2">
                              <HStack justify="space-between">
                                <Detail uppercase>Periode {idx + 1}</Detail>
                              </HStack>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <Detail>Fra</Detail>
                                  <BodyShort size="small">
                                    {formatDato(periode.gyldigFraOgMed)}
                                  </BodyShort>
                                </div>
                                <div>
                                  <Detail>Til</Detail>
                                  <BodyShort size="small">
                                    {formatDato(periode.gyldigTilOgMed)}
                                  </BodyShort>
                                </div>
                              </div>
                              <div>
                                <Detail>Verdi</Detail>
                                <BodyShort size="small" weight="semibold">
                                  {formaterOpplysningVerdi(periode.verdi)}
                                </BodyShort>
                              </div>
                            </VStack>
                          </div>
                        ))}
                      </VStack>
                    ) : (
                      <VStack gap="space-2" align="center" justify="center" className="h-full">
                        <ExclamationmarkTriangleIcon
                          aria-hidden
                          className="text-3xl text-(--ax-text-neutral)"
                        />
                        <BodyShort className="text-(--ax-text-neutral)">
                          Ikke tilstede i gammel behandling
                        </BodyShort>
                      </VStack>
                    )}
                  </div>
                </VStack>

                {/* After */}
                <VStack gap="space-4">
                  <HStack gap="space-2" align="center">
                    <div className="h-3 w-3 rounded-full bg-(--ax-bg-success-strong)" />
                    <Label>Etter (Ny behandling)</Label>
                  </HStack>
                  <div className="min-h-[200px] rounded-lg bg-(--ax-bg-success-soft) p-4">
                    {selectedOpplysning.nyOpplysning ? (
                      <VStack gap="space-4">
                        {selectedOpplysning.nyOpplysning.perioder.map((periode, idx) => (
                          <div key={idx} className="rounded bg-(--ax-bg-default) p-3">
                            <VStack gap="space-2">
                              <HStack justify="space-between">
                                <Detail uppercase>Periode {idx + 1}</Detail>
                              </HStack>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <Detail>Fra</Detail>
                                  <BodyShort size="small">
                                    {formatDato(periode.gyldigFraOgMed)}
                                  </BodyShort>
                                </div>
                                <div>
                                  <Detail>Til</Detail>
                                  <BodyShort size="small">
                                    {formatDato(periode.gyldigTilOgMed)}
                                  </BodyShort>
                                </div>
                              </div>
                              <div>
                                <Detail>Verdi</Detail>
                                <BodyShort size="small" weight="semibold">
                                  {formaterOpplysningVerdi(periode.verdi)}
                                </BodyShort>
                              </div>
                            </VStack>
                          </div>
                        ))}
                      </VStack>
                    ) : (
                      <VStack gap="space-2" align="center" justify="center" className="h-full">
                        <ExclamationmarkTriangleIcon
                          aria-hidden
                          className="text-3xl text-(--ax-text-neutral)"
                        />
                        <BodyShort className="text-(--ax-text-neutral)">
                          Ikke tilstede i ny behandling
                        </BodyShort>
                      </VStack>
                    )}
                  </div>
                </VStack>
              </div>

              {/* Change Details */}
              {selectedOpplysning.periodeEndringer.length > 0 && (
                <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-4">
                  <VStack gap="space-4">
                    <HStack justify="space-between" align="center">
                      <Label>Hva endret seg?</Label>
                      <EndringsBadges forskjell={selectedOpplysning} />
                    </HStack>
                    {selectedOpplysning.periodeEndringer.map((endring, idx) => (
                      <PeriodeEndringDetaljer key={idx} endring={endring} />
                    ))}
                  </VStack>
                </div>
              )}
            </VStack>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg bg-(--ax-bg-neutral-soft) p-6">
            <VStack gap="space-4" align="center">
              <EyeIcon aria-hidden className="text-5xl text-(--ax-text-neutral)" />
              <Heading size="small" className="text-(--ax-text-neutral)">
                Velg en opplysning fra listen
              </Heading>
              <BodyShort className="text-center text-(--ax-text-neutral)">
                Klikk på en opplysning i listen til venstre for å se detaljer
              </BodyShort>
            </VStack>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// DESIGN 5: COMPACT SUMMARY / TABLE VIEW
// Dense, data-rich table view for power users who need overview fast
// ============================================================================

function Design5CompactSummary({ forskjeller, gammelBehandling, nyBehandling }: DesignProps) {
  const [sortering, setSortering] = useState<"navn" | "type" | "endringer">("type");
  const [visUendret, setVisUendret] = useState(false);

  const sortert = useMemo(() => {
    const filtered = visUendret ? forskjeller : forskjeller.filter((f) => f.type !== "uendret");
    return [...filtered].sort((a, b) => {
      if (sortering === "navn") return a.navn.localeCompare(b.navn);
      if (sortering === "type") {
        const order = { endret: 0, "lagt-til": 1, fjernet: 2, uendret: 3 };
        return order[a.type] - order[b.type];
      }
      return b.periodeEndringer.length - a.periodeEndringer.length;
    });
  }, [forskjeller, sortering, visUendret]);

  const oppsummering = {
    totalt: forskjeller.length,
    endret: forskjeller.filter((f) => f.type === "endret").length,
    lagtTil: forskjeller.filter((f) => f.type === "lagt-til").length,
    fjernet: forskjeller.filter((f) => f.type === "fjernet").length,
  };

  return (
    <VStack gap="space-8">
      {/* Executive Summary */}
      <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-5">
        <HStack justify="space-between" align="center" wrap gap="space-4">
          <VStack gap="space-2">
            <Heading size="small">📊 Sammendrag</Heading>
            <BodyShort>
              Sammenligning av <strong>{gammelBehandling.behandlingId.slice(0, 8)}...</strong> →{" "}
              <strong>{nyBehandling.behandlingId.slice(0, 8)}...</strong>
            </BodyShort>
          </VStack>
          <HStack gap="space-4">
            <VStack
              gap="space-0"
              align="center"
              className="rounded-lg bg-(--ax-bg-warning-soft) px-4 py-2"
            >
              <Heading size="xlarge">{oppsummering.endret}</Heading>
              <Detail>Endret</Detail>
            </VStack>
            <VStack
              gap="space-0"
              align="center"
              className="rounded-lg bg-(--ax-bg-success-soft) px-4 py-2"
            >
              <Heading size="xlarge">{oppsummering.lagtTil}</Heading>
              <Detail>Lagt til</Detail>
            </VStack>
            <VStack
              gap="space-0"
              align="center"
              className="rounded-lg bg-(--ax-bg-danger-soft) px-4 py-2"
            >
              <Heading size="xlarge">{oppsummering.fjernet}</Heading>
              <Detail>Fjernet</Detail>
            </VStack>
          </HStack>
        </HStack>
      </div>

      {/* Controls */}
      <HStack justify="space-between" align="center">
        <HStack gap="space-4" align="center">
          <Label size="small">Sorter etter:</Label>
          <Chips size="small">
            <Chips.Toggle selected={sortering === "type"} onClick={() => setSortering("type")}>
              Type
            </Chips.Toggle>
            <Chips.Toggle selected={sortering === "navn"} onClick={() => setSortering("navn")}>
              Navn
            </Chips.Toggle>
            <Chips.Toggle
              selected={sortering === "endringer"}
              onClick={() => setSortering("endringer")}
            >
              Antall endringer
            </Chips.Toggle>
          </Chips>
        </HStack>
        <Switch size="small" checked={visUendret} onChange={() => setVisUendret(!visUendret)}>
          Vis uendrede opplysninger
        </Switch>
      </HStack>

      {/* Compact Table */}
      <Table size="small" zebraStripes>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" className="w-8">
              Status
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">Opplysning</Table.HeaderCell>
            <Table.HeaderCell scope="col" className="w-64">
              Hva endret seg?
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" className="w-48">
              Før → Etter
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortert.map((forskjell) => {
            const gammelVerdi =
              forskjell.gammelOpplysning?.perioder
                .map((p) => formaterOpplysningVerdi(p.verdi))
                .join(", ") || "—";
            const nyVerdi =
              forskjell.nyOpplysning?.perioder
                .map((p) => formaterOpplysningVerdi(p.verdi))
                .join(", ") || "—";

            return (
              <Table.Row key={forskjell.opplysningTypeId}>
                <Table.DataCell>
                  {forskjell.type === "endret" && (
                    <Tooltip content="Endret">
                      <Tag
                        variant="warning"
                        size="xsmall"
                        className="flex h-6 w-6 items-center justify-center"
                      >
                        ~
                      </Tag>
                    </Tooltip>
                  )}
                  {forskjell.type === "lagt-til" && (
                    <Tooltip content="Lagt til">
                      <Tag
                        variant="success"
                        size="xsmall"
                        className="flex h-6 w-6 items-center justify-center"
                      >
                        +
                      </Tag>
                    </Tooltip>
                  )}
                  {forskjell.type === "fjernet" && (
                    <Tooltip content="Fjernet">
                      <Tag
                        variant="error"
                        size="xsmall"
                        className="flex h-6 w-6 items-center justify-center"
                      >
                        −
                      </Tag>
                    </Tooltip>
                  )}
                  {forskjell.type === "uendret" && (
                    <Tooltip content="Uendret">
                      <Tag
                        variant="neutral"
                        size="xsmall"
                        className="flex h-6 w-6 items-center justify-center"
                      >
                        =
                      </Tag>
                    </Tooltip>
                  )}
                </Table.DataCell>
                <Table.DataCell>
                  <VStack gap="space-0">
                    <BodyShort size="small" weight="semibold">
                      {forskjell.navn}
                    </BodyShort>
                    <Detail className="font-mono text-(--ax-text-neutral)">
                      {forskjell.opplysningTypeId.slice(0, 12)}...
                    </Detail>
                  </VStack>
                </Table.DataCell>
                <Table.DataCell>
                  <HStack gap="space-1" wrap>
                    {forskjell.harNyePerioder && (
                      <Tag variant="success" size="xsmall">
                        +Ny periode
                      </Tag>
                    )}
                    {forskjell.harFjernedePerioder && (
                      <Tag variant="error" size="xsmall">
                        -Fjernet
                      </Tag>
                    )}
                    {forskjell.harEndredeVerdier && (
                      <Tag variant="warning" size="xsmall">
                        ~Verdi
                      </Tag>
                    )}
                    {forskjell.harEndredeDatoer && (
                      <Tag variant="info" size="xsmall">
                        📅Dato
                      </Tag>
                    )}
                    {forskjell.type === "uendret" && (
                      <Detail className="text-(--ax-text-neutral)">Ingen endringer</Detail>
                    )}
                  </HStack>
                </Table.DataCell>
                <Table.DataCell>
                  {forskjell.type !== "uendret" ? (
                    <HStack gap="space-2" align="center">
                      <BodyShort size="small" className="text-(--ax-text-neutral) line-through">
                        {gammelVerdi}
                      </BodyShort>
                      <ArrowRightIcon aria-hidden className="shrink-0" />
                      <BodyShort size="small" weight="semibold">
                        {nyVerdi}
                      </BodyShort>
                    </HStack>
                  ) : (
                    <BodyShort size="small">{nyVerdi}</BodyShort>
                  )}
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {/* Quick Legend */}
      <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-3">
        <HStack gap="space-8" justify="center" wrap>
          <HStack gap="space-2" align="center">
            <Tag variant="success" size="xsmall">
              +Ny periode
            </Tag>
            <Detail>Periode lagt til</Detail>
          </HStack>
          <HStack gap="space-2" align="center">
            <Tag variant="error" size="xsmall">
              -Fjernet
            </Tag>
            <Detail>Periode fjernet</Detail>
          </HStack>
          <HStack gap="space-2" align="center">
            <Tag variant="warning" size="xsmall">
              ~Verdi
            </Tag>
            <Detail>Verdi endret</Detail>
          </HStack>
          <HStack gap="space-2" align="center">
            <Tag variant="info" size="xsmall">
              📅Dato
            </Tag>
            <Detail>Gyldighetsperiode endret</Detail>
          </HStack>
        </HStack>
      </div>
    </VStack>
  );
}

// ============================================================================
// ERROR BOUNDARY
// ============================================================================

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
