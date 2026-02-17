import {
  ArrowRightIcon,
  ArrowsSquarepathIcon,
  CalendarIcon,
  CheckmarkCircleFillIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExclamationmarkTriangleFillIcon,
  MinusCircleFillIcon,
  PlusCircleFillIcon,
  SparklesIcon,
} from "@navikt/aksel-icons";
import {
  Alert,
  BodyShort,
  Button,
  Chips,
  CopyButton,
  Detail,
  Heading,
  HStack,
  Label,
  Loader,
  Search,
  Switch,
  Table,
  Tag,
  TextField,
  Timeline,
  ToggleGroup,
  Tooltip,
  VStack,
} from "@navikt/ds-react";
import { useMemo, useState } from "react";
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

  if (actionType === "hent-behandling-for-sammenligning") {
    const behandlingId = formData.get("behandlingId") as string;
    if (!behandlingId) {
      return { error: "Behandling ID er påkrevd" };
    }

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
  verdi?: string;
  fraOgMed?: string;
  tilOgMed?: string;
  gammelVerdi?: string;
  nyVerdi?: string;
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
  harNyePerioder: boolean;
  harFjernedePerioder: boolean;
  harEndredeVerdier: boolean;
  harEndredeDatoer: boolean;
}

interface DesignProps {
  forskjeller: OpplysningForskjell[];
  gammelBehandling: Behandling;
  nyBehandling: Behandling;
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
  const matchedVenstreIds = new Set<string>();
  const matchedHøyreIds = new Set<string>();

  const getVerdiFingeravtrykk = (p: Periode) => JSON.stringify(p.verdi);
  const getDatoFingeravtrykk = (p: Periode) =>
    `${p.gyldigFraOgMed || ""}|${p.gyldigTilOgMed || ""}`;

  const høyreById = new Map(høyrePerioder.map((p) => [p.id, p]));

  // Match by same ID first
  for (const vp of venstrePerioder) {
    const hp = høyreById.get(vp.id);
    if (hp) {
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
    }
  }

  // Find exact matches for remaining
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;
    const vpVerdi = getVerdiFingeravtrykk(vp);
    const vpDato = getDatoFingeravtrykk(vp);

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;
      if (vpVerdi === getVerdiFingeravtrykk(hp) && vpDato === getDatoFingeravtrykk(hp)) {
        matchedVenstreIds.add(vp.id);
        matchedHøyreIds.add(hp.id);
        break;
      }
    }
  }

  // Find periods with same value but different dates
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;
    const vpVerdi = getVerdiFingeravtrykk(vp);

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;
      if (vpVerdi === getVerdiFingeravtrykk(hp)) {
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

  // Find periods with same dates but different value
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;
    const vpDato = getDatoFingeravtrykk(vp);

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;
      if (vpDato === getDatoFingeravtrykk(hp)) {
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

  // Try overlapping date ranges for remaining
  for (const vp of venstrePerioder) {
    if (matchedVenstreIds.has(vp.id)) continue;
    let bestMatch: Periode | null = null;

    for (const hp of høyrePerioder) {
      if (matchedHøyreIds.has(hp.id)) continue;
      const vpStart = vp.gyldigFraOgMed || "0000-01-01";
      const vpEnd = vp.gyldigTilOgMed || "9999-12-31";
      const hpStart = hp.gyldigFraOgMed || "0000-01-01";
      const hpEnd = hp.gyldigTilOgMed || "9999-12-31";
      if (vpStart <= hpEnd && hpStart <= vpEnd) {
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

  // Remaining unmatched in venstre are removed
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

  // Remaining unmatched in høyre are added
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

export default function Lekegrind() {
  const { behandling: gjeldeneBehandling } = useBehandling();
  const [sammenligningsBehandlingId, setSammenligningsBehandlingId] = useState(
    gjeldeneBehandling.basertPå ?? "",
  );
  const [aktivtDesign, setAktivtDesign] = useState<string>("1");
  const fetcher = useFetcher<{ behandling?: Behandling; error?: string }>();

  const sammenligningsBehandling = fetcher.data?.behandling;
  const feil = fetcher.data?.error;
  const laster = fetcher.state === "submitting" || fetcher.state === "loading";

  const hentSammenligningsBehandling = () => {
    if (!sammenligningsBehandlingId.trim()) return;
    fetcher.submit(
      { _action: "hent-behandling-for-sammenligning", behandlingId: sammenligningsBehandlingId },
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

      <VStack gap="space-6" className="mt-4">
        {/* Hero Section with Design Selector */}
        <div className="relative overflow-hidden rounded-xl bg-(--ax-bg-neutral-soft) p-6">
          <div className="from-blue-500/20 to-purple-500/20 absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br blur-3xl" />
          <div className="from-green-500/20 to-yellow-500/20 absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr blur-3xl" />

          <VStack gap="space-4" className="relative">
            <HStack justify="space-between" align="start" wrap>
              <VStack gap="space-2">
                <HStack gap="space-2" align="center">
                  <SparklesIcon aria-hidden className="text-2xl text-(--ax-text-brand-icon)" />
                  <Heading size="large">Behandlingssammenligning</Heading>
                </HStack>
                <BodyShort className="text-(--ax-text-neutral)">
                  Sammenlign opplysninger mellom to behandlinger for å identifisere endringer
                </BodyShort>
              </VStack>

              <ToggleGroup
                value={aktivtDesign}
                onChange={(val) => setAktivtDesign(val)}
                size="small"
              >
                <ToggleGroup.Item value="1">
                  <Tooltip content="Visuell Tidslinje">
                    <span>1</span>
                  </Tooltip>
                </ToggleGroup.Item>
                <ToggleGroup.Item value="2">
                  <Tooltip content="Kortbasert Oversikt">
                    <span>2</span>
                  </Tooltip>
                </ToggleGroup.Item>
                <ToggleGroup.Item value="3">
                  <Tooltip content="Side-ved-Side Tabell">
                    <span>3</span>
                  </Tooltip>
                </ToggleGroup.Item>
                <ToggleGroup.Item value="4">
                  <Tooltip content="Trevisning">
                    <span>4</span>
                  </Tooltip>
                </ToggleGroup.Item>
                <ToggleGroup.Item value="5">
                  <Tooltip content="Kompakt Dashboard">
                    <span>5</span>
                  </Tooltip>
                </ToggleGroup.Item>
              </ToggleGroup>
            </HStack>

            {/* Input Section */}
            <HStack gap="space-4" align="end" className="mt-2">
              <TextField
                label="Behandling-ID å sammenligne med"
                description={
                  gjeldeneBehandling.basertPå
                    ? `Denne behandlingen er basert på: ${gjeldeneBehandling.basertPå}`
                    : "Skriv inn UUID for behandlingen du vil sammenligne med"
                }
                value={sammenligningsBehandlingId}
                onChange={(e) => setSammenligningsBehandlingId(e.target.value)}
                size="small"
                className="max-w-md flex-1"
              />
              <Button
                size="small"
                variant="primary"
                onClick={hentSammenligningsBehandling}
                loading={laster}
                disabled={!sammenligningsBehandlingId.trim()}
                icon={<ArrowsSquarepathIcon aria-hidden />}
              >
                Sammenlign
              </Button>
            </HStack>

            {feil && (
              <Alert variant="error" size="small" className="mt-2">
                {feil}
              </Alert>
            )}
          </VStack>
        </div>

        {/* Show design based on selection */}
        {sammenligningsBehandling && (
          <>
            {aktivtDesign === "1" && (
              <Design1VisualTimeline
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
            {aktivtDesign === "2" && (
              <Design2CardOverview
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
            {aktivtDesign === "3" && (
              <Design3SideBySideTable
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
            {aktivtDesign === "4" && (
              <Design4TreeView
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
            {aktivtDesign === "5" && (
              <Design5CompactDashboard
                forskjeller={forskjeller}
                gammelBehandling={sammenligningsBehandling}
                nyBehandling={gjeldeneBehandling}
              />
            )}
          </>
        )}

        {/* Empty State */}
        {!sammenligningsBehandling && !laster && (
          <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-12 text-center">
            <VStack gap="space-4" align="center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-(--ax-bg-neutral-moderate)">
                <ArrowsSquarepathIcon aria-hidden className="text-4xl text-(--ax-text-neutral)" />
              </div>
              <VStack gap="space-1">
                <Heading size="small">Ingen behandling valgt</Heading>
                <BodyShort className="text-(--ax-text-neutral)">
                  Skriv inn en behandling-ID og klikk &quot;Sammenlign&quot; for å se forskjellene
                </BodyShort>
              </VStack>
            </VStack>
          </div>
        )}

        {laster && (
          <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-12 text-center">
            <VStack gap="space-4" align="center">
              <Loader size="xlarge" />
              <BodyShort>Henter behandling...</BodyShort>
            </VStack>
          </div>
        )}
      </VStack>
    </main>
  );
}

// ============================================================================
// DESIGN 1: VISUAL TIMELINE
// En horisontalt orientert tidslinje som viser endringer kronologisk
// med fargekodede noder og ekspanderbare detaljer
// ============================================================================

function Design1VisualTimeline({ forskjeller, gammelBehandling, nyBehandling }: DesignProps) {
  const [søk, setSøk] = useState("");
  const [kunEndrede, setKunEndrede] = useState(true);

  const filtrertForskjeller = useMemo(() => {
    let result = forskjeller;
    if (kunEndrede) {
      result = result.filter((f) => f.type !== "uendret");
    }
    if (søk) {
      result = result.filter((f) => f.navn.toLowerCase().includes(søk.toLowerCase()));
    }
    return result;
  }, [forskjeller, kunEndrede, søk]);

  const stats = useMemo(() => {
    const endrede = forskjeller.filter((f) => f.type !== "uendret");
    return {
      endret: endrede.length,
      lagt_til: forskjeller.filter((f) => f.type === "lagt-til").length,
      fjernet: forskjeller.filter((f) => f.type === "fjernet").length,
    };
  }, [forskjeller]);

  return (
    <VStack gap="space-6">
      {/* Summary Header */}
      <div className="rounded-lg bg-(--ax-bg-info-soft) p-4">
        <HStack justify="space-between" align="center" wrap gap="space-4">
          <HStack gap="space-6">
            <VStack gap="space-1">
              <Detail uppercase className="text-(--ax-text-neutral)">
                Fra behandling
              </Detail>
              <HStack gap="space-2" align="center">
                <div className="h-3 w-3 rounded-full bg-(--ax-bg-danger-strong)" />
                <CopyButton
                  copyText={gammelBehandling.behandlingId}
                  text={gammelBehandling.behandlingId.slice(0, 18) + "..."}
                  size="xsmall"
                />
              </HStack>
            </VStack>
            <div className="flex items-center">
              <ArrowRightIcon aria-hidden className="text-2xl text-(--ax-text-neutral)" />
            </div>
            <VStack gap="space-1">
              <Detail uppercase className="text-(--ax-text-neutral)">
                Til behandling
              </Detail>
              <HStack gap="space-2" align="center">
                <div className="h-3 w-3 rounded-full bg-(--ax-bg-success-strong)" />
                <CopyButton
                  copyText={nyBehandling.behandlingId}
                  text={nyBehandling.behandlingId.slice(0, 18) + "..."}
                  size="xsmall"
                />
              </HStack>
            </VStack>
          </HStack>

          <HStack gap="space-4">
            <StatBadge
              label="Endret"
              value={stats.endret}
              variant="warning"
              icon={<ArrowsSquarepathIcon aria-hidden />}
            />
            <StatBadge
              label="Lagt til"
              value={stats.lagt_til}
              variant="success"
              icon={<PlusCircleFillIcon aria-hidden />}
            />
            <StatBadge
              label="Fjernet"
              value={stats.fjernet}
              variant="error"
              icon={<MinusCircleFillIcon aria-hidden />}
            />
          </HStack>
        </HStack>
      </div>

      {/* Filters */}
      <HStack gap="space-4" align="center">
        <Search
          label="Søk i opplysninger"
          hideLabel
          variant="simple"
          size="small"
          value={søk}
          onChange={(val) => setSøk(val)}
          placeholder="Søk etter opplysning..."
          className="w-72"
        />
        <Switch checked={kunEndrede} onChange={(e) => setKunEndrede(e.target.checked)} size="small">
          Vis kun endrede ({stats.endret})
        </Switch>
      </HStack>

      {/* Timeline */}
      <div className="relative">
        {filtrertForskjeller.length === 0 ? (
          <Alert variant="info">Ingen opplysninger matcher søket</Alert>
        ) : (
          <Timeline>
            {filtrertForskjeller.map((forskjell) => (
              <Timeline.Row
                key={forskjell.opplysningTypeId}
                label={forskjell.navn}
                icon={getTimelineIcon(forskjell.type)}
              >
                <Timeline.Period
                  start={new Date()}
                  end={new Date()}
                  status={getTimelineStatus(forskjell.type)}
                >
                  <TimelineContent forskjell={forskjell} />
                </Timeline.Period>
              </Timeline.Row>
            ))}
          </Timeline>
        )}
      </div>
    </VStack>
  );
}

function StatBadge({
  label,
  value,
  variant,
  icon,
}: {
  label: string;
  value: number;
  variant: "success" | "warning" | "error" | "info";
  icon: React.ReactNode;
}) {
  const bgColors = {
    success: "bg-(--ax-bg-success-soft)",
    warning: "bg-(--ax-bg-warning-soft)",
    error: "bg-(--ax-bg-danger-soft)",
    info: "bg-(--ax-bg-info-soft)",
  };
  const textColors = {
    success: "text-(--ax-text-success)",
    warning: "text-(--ax-text-warning)",
    error: "text-(--ax-text-danger)",
    info: "text-(--ax-text-info)",
  };

  return (
    <div className={`rounded-lg px-3 py-2 ${bgColors[variant]}`}>
      <HStack gap="space-2" align="center">
        <span className={textColors[variant]}>{icon}</span>
        <VStack gap="space-0">
          <span className={`text-lg font-bold ${textColors[variant]}`}>{value}</span>
          <Detail>{label}</Detail>
        </VStack>
      </HStack>
    </div>
  );
}

function getTimelineIcon(type: OpplysningForskjell["type"]) {
  switch (type) {
    case "lagt-til":
      return <PlusCircleFillIcon aria-hidden />;
    case "fjernet":
      return <MinusCircleFillIcon aria-hidden />;
    case "endret":
      return <ExclamationmarkTriangleFillIcon aria-hidden />;
    default:
      return <CheckmarkCircleFillIcon aria-hidden />;
  }
}

function getTimelineStatus(type: OpplysningForskjell["type"]) {
  switch (type) {
    case "lagt-til":
      return "success" as const;
    case "fjernet":
      return "danger" as const;
    case "endret":
      return "warning" as const;
    default:
      return "success" as const;
  }
}

function TimelineContent({ forskjell }: { forskjell: OpplysningForskjell }) {
  if (forskjell.periodeEndringer.length === 0) {
    return (
      <BodyShort size="small" className="text-(--ax-text-success)">
        Ingen endringer
      </BodyShort>
    );
  }

  return (
    <VStack gap="space-2">
      {forskjell.periodeEndringer.map((endring, idx) => (
        <PeriodeEndringBadge key={idx} endring={endring} />
      ))}
    </VStack>
  );
}

function PeriodeEndringBadge({ endring }: { endring: PeriodeEndring }) {
  if (endring.type === "lagt-til") {
    return (
      <HStack gap="space-2" align="center" className="text-(--ax-text-success)">
        <PlusCircleFillIcon aria-hidden />
        <Detail>
          Ny: {endring.verdi} ({formatDato(endring.fraOgMed)} - {formatDato(endring.tilOgMed)})
        </Detail>
      </HStack>
    );
  }

  if (endring.type === "fjernet") {
    return (
      <HStack gap="space-2" align="center" className="text-(--ax-text-danger)">
        <MinusCircleFillIcon aria-hidden />
        <Detail className="line-through">
          {endring.verdi} ({formatDato(endring.fraOgMed)} - {formatDato(endring.tilOgMed)})
        </Detail>
      </HStack>
    );
  }

  if (endring.type === "endret-verdi") {
    return (
      <HStack gap="space-2" align="center">
        <ArrowsSquarepathIcon aria-hidden className="text-(--ax-text-warning)" />
        <Detail>
          <span className="text-(--ax-text-danger) line-through">{endring.gammelVerdi}</span>
          {" → "}
          <span className="font-semibold text-(--ax-text-success)">{endring.nyVerdi}</span>
        </Detail>
      </HStack>
    );
  }

  if (endring.type === "endret-datoer") {
    return (
      <HStack gap="space-2" align="center">
        <CalendarIcon aria-hidden className="text-(--ax-text-info)" />
        <Detail>
          <span className="text-(--ax-text-neutral)">
            {formatDato(endring.gammelFraOgMed)} - {formatDato(endring.gammelTilOgMed)}
          </span>
          {" → "}
          <span className="font-semibold">
            {formatDato(endring.nyFraOgMed)} - {formatDato(endring.nyTilOgMed)}
          </span>
        </Detail>
      </HStack>
    );
  }

  return null;
}

// ============================================================================
// DESIGN 2: CARD OVERVIEW
// Kortbasert layout med store, klikkbare kort som viser opplysninger
// gruppert etter endringstype med visuell vekting basert på viktighet
// ============================================================================

function Design2CardOverview({ forskjeller }: DesignProps) {
  const [valgtKategori, setValgtKategori] = useState<"alle" | "endret" | "lagt-til" | "fjernet">(
    "alle",
  );
  const [ekspandertKort, setEkspandertKort] = useState<string | null>(null);

  const kategorisert = useMemo(() => {
    return {
      endret: forskjeller.filter((f) => f.type === "endret"),
      lagtTil: forskjeller.filter((f) => f.type === "lagt-til"),
      fjernet: forskjeller.filter((f) => f.type === "fjernet"),
      uendret: forskjeller.filter((f) => f.type === "uendret"),
    };
  }, [forskjeller]);

  const visningsForskjeller = useMemo(() => {
    switch (valgtKategori) {
      case "endret":
        return kategorisert.endret;
      case "lagt-til":
        return kategorisert.lagtTil;
      case "fjernet":
        return kategorisert.fjernet;
      default:
        return [...kategorisert.endret, ...kategorisert.lagtTil, ...kategorisert.fjernet];
    }
  }, [kategorisert, valgtKategori]);

  return (
    <VStack gap="space-6">
      {/* Category Pills */}
      <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-4">
        <HStack gap="space-4" wrap>
          <CategoryPill
            label="Alle endringer"
            count={
              kategorisert.endret.length + kategorisert.lagtTil.length + kategorisert.fjernet.length
            }
            active={valgtKategori === "alle"}
            onClick={() => setValgtKategori("alle")}
            variant="neutral"
          />
          <CategoryPill
            label="Endret"
            count={kategorisert.endret.length}
            active={valgtKategori === "endret"}
            onClick={() => setValgtKategori("endret")}
            variant="warning"
          />
          <CategoryPill
            label="Lagt til"
            count={kategorisert.lagtTil.length}
            active={valgtKategori === "lagt-til"}
            onClick={() => setValgtKategori("lagt-til")}
            variant="success"
          />
          <CategoryPill
            label="Fjernet"
            count={kategorisert.fjernet.length}
            active={valgtKategori === "fjernet"}
            onClick={() => setValgtKategori("fjernet")}
            variant="error"
          />
        </HStack>
      </div>

      {/* Cards Grid */}
      {visningsForskjeller.length === 0 ? (
        <Alert variant="info">Ingen opplysninger i denne kategorien</Alert>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visningsForskjeller.map((forskjell) => (
            <OpplysningCard
              key={forskjell.opplysningTypeId}
              forskjell={forskjell}
              erEkspandert={ekspandertKort === forskjell.opplysningTypeId}
              onToggle={() =>
                setEkspandertKort(
                  ekspandertKort === forskjell.opplysningTypeId ? null : forskjell.opplysningTypeId,
                )
              }
            />
          ))}
        </div>
      )}
    </VStack>
  );
}

function CategoryPill({
  label,
  count,
  active,
  onClick,
  variant,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  variant: "neutral" | "success" | "warning" | "error";
}) {
  const baseClasses =
    "cursor-pointer rounded-full px-4 py-2 transition-all hover:scale-105 active:scale-95";
  const variantClasses = {
    neutral: active
      ? "bg-(--ax-bg-neutral-strong) text-white"
      : "bg-(--ax-bg-neutral-soft) hover:bg-(--ax-bg-neutral-moderate)",
    success: active
      ? "bg-(--ax-bg-success-strong) text-white"
      : "bg-(--ax-bg-success-soft) text-(--ax-text-success) hover:bg-(--ax-bg-success-moderate)",
    warning: active
      ? "bg-(--ax-bg-warning-strong) text-white"
      : "bg-(--ax-bg-warning-soft) text-(--ax-text-warning) hover:bg-(--ax-bg-warning-moderate)",
    error: active
      ? "bg-(--ax-bg-danger-strong) text-white"
      : "bg-(--ax-bg-danger-soft) text-(--ax-text-danger) hover:bg-(--ax-bg-danger-moderate)",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} onClick={onClick}>
      <HStack gap="space-2" align="center">
        <span className="font-medium">{label}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-bold ${
            active ? "bg-white/20" : "bg-(--ax-bg-neutral-soft)"
          }`}
        >
          {count}
        </span>
      </HStack>
    </button>
  );
}

function OpplysningCard({
  forskjell,
  erEkspandert,
  onToggle,
}: {
  forskjell: OpplysningForskjell;
  erEkspandert: boolean;
  onToggle: () => void;
}) {
  const borderColors = {
    "lagt-til": "border-l-(--ax-border-success)",
    fjernet: "border-l-(--ax-border-danger)",
    endret: "border-l-(--ax-border-warning)",
    uendret: "border-l-(--ax-border-neutral)",
  };

  const iconForType = {
    "lagt-til": <PlusCircleFillIcon className="text-(--ax-text-success)" aria-hidden />,
    fjernet: <MinusCircleFillIcon className="text-(--ax-text-danger)" aria-hidden />,
    endret: <ExclamationmarkTriangleFillIcon className="text-(--ax-text-warning)" aria-hidden />,
    uendret: <CheckmarkCircleFillIcon className="text-(--ax-text-success)" aria-hidden />,
  };

  return (
    <button
      type="button"
      className={`rounded-lg border border-l-4 border-(--ax-border-subtle) ${borderColors[forskjell.type]} w-full cursor-pointer bg-(--ax-bg-default) text-left transition-all hover:shadow-md`}
      onClick={onToggle}
    >
      <div className="p-4">
        <HStack justify="space-between" align="start">
          <HStack gap="space-4" align="center">
            {iconForType[forskjell.type]}
            <VStack gap="space-1">
              <Label size="small">{forskjell.navn}</Label>
              <Detail className="text-(--ax-text-neutral)">
                {forskjell.periodeEndringer.length} periode
                {forskjell.periodeEndringer.length !== 1 && "r"} påvirket
              </Detail>
            </VStack>
          </HStack>
          <ChevronDownIcon
            aria-hidden
            className={`transition-transform ${erEkspandert ? "rotate-180" : ""}`}
          />
        </HStack>

        {erEkspandert && (
          <VStack gap="space-4" className="mt-4 border-t border-(--ax-border-subtle) pt-4">
            {forskjell.periodeEndringer.map((endring, idx) => (
              <PeriodeEndringDetalj key={idx} endring={endring} />
            ))}
          </VStack>
        )}
      </div>
    </button>
  );
}

function PeriodeEndringDetalj({ endring }: { endring: PeriodeEndring }) {
  const bgColors = {
    "lagt-til": "bg-(--ax-bg-success-soft)",
    fjernet: "bg-(--ax-bg-danger-soft)",
    "endret-verdi": "bg-(--ax-bg-warning-soft)",
    "endret-datoer": "bg-(--ax-bg-info-soft)",
  };

  return (
    <div className={`rounded p-2 ${bgColors[endring.type]}`}>
      {endring.type === "lagt-til" && (
        <HStack gap="space-2" align="center">
          <PlusCircleFillIcon className="text-(--ax-text-success)" aria-hidden />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold">
              Ny periode
            </BodyShort>
            <Detail>
              {endring.verdi} • {formatDato(endring.fraOgMed)} – {formatDato(endring.tilOgMed)}
            </Detail>
          </VStack>
        </HStack>
      )}

      {endring.type === "fjernet" && (
        <HStack gap="space-2" align="center">
          <MinusCircleFillIcon className="text-(--ax-text-danger)" aria-hidden />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold">
              Fjernet periode
            </BodyShort>
            <Detail className="line-through">
              {endring.verdi} • {formatDato(endring.fraOgMed)} – {formatDato(endring.tilOgMed)}
            </Detail>
          </VStack>
        </HStack>
      )}

      {endring.type === "endret-verdi" && (
        <HStack gap="space-2" align="center">
          <ArrowsSquarepathIcon className="text-(--ax-text-warning)" aria-hidden />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold">
              Verdi endret
            </BodyShort>
            <Detail>
              <span className="line-through">{endring.gammelVerdi}</span> → {endring.nyVerdi}
            </Detail>
          </VStack>
        </HStack>
      )}

      {endring.type === "endret-datoer" && (
        <HStack gap="space-2" align="center">
          <CalendarIcon className="text-(--ax-text-info)" aria-hidden />
          <VStack gap="space-0">
            <BodyShort size="small" weight="semibold">
              Periode endret
            </BodyShort>
            <Detail>
              {formatDato(endring.gammelFraOgMed)}–{formatDato(endring.gammelTilOgMed)} →{" "}
              {formatDato(endring.nyFraOgMed)}–{formatDato(endring.nyTilOgMed)}
            </Detail>
          </VStack>
        </HStack>
      )}
    </div>
  );
}

// ============================================================================
// DESIGN 3: SIDE-BY-SIDE TABLE
// Tradisjonell tabelloppsett med gammel og ny verdi side ved side
// med highlighting av forskjeller og sortering
// ============================================================================

function Design3SideBySideTable({ forskjeller, gammelBehandling, nyBehandling }: DesignProps) {
  const [filter, setFilter] = useState<string>("");
  const [visUendrede, setVisUendrede] = useState(false);

  const sortert = useMemo(() => {
    let result = [...forskjeller];

    if (!visUendrede) {
      result = result.filter((f) => f.type !== "uendret");
    }

    if (filter) {
      result = result.filter((f) => f.navn.toLowerCase().includes(filter.toLowerCase()));
    }

    // Sort by type priority
    const typeOrder = { fjernet: 0, endret: 1, "lagt-til": 2, uendret: 3 };
    result.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

    return result;
  }, [forskjeller, filter, visUendrede]);

  return (
    <VStack gap="space-4">
      {/* Table Header */}
      <div className="rounded-lg bg-(--ax-bg-info-soft) p-4">
        <HStack justify="space-between" align="center" wrap gap="space-4">
          <HStack gap="space-6" align="center">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-(--ax-bg-danger-moderate)" />
              <Detail>{gammelBehandling.behandlingId.slice(0, 12)}...</Detail>
            </div>
            <ArrowRightIcon aria-hidden className="text-xl" />
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded bg-(--ax-bg-success-moderate)" />
              <Detail>{nyBehandling.behandlingId.slice(0, 12)}...</Detail>
            </div>
          </HStack>

          <HStack gap="space-4" align="center">
            <Search
              label="Filtrer"
              hideLabel
              size="small"
              variant="simple"
              value={filter}
              onChange={setFilter}
              placeholder="Filtrer opplysninger..."
              className="w-48"
            />
            <Switch
              checked={visUendrede}
              onChange={(e) => setVisUendrede(e.target.checked)}
              size="small"
            >
              Vis uendrede
            </Switch>
          </HStack>
        </HStack>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-(--ax-border-subtle)">
        <Table size="small" zebraStripes>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col" className="w-24">
                Type
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">Opplysning</Table.HeaderCell>
              <Table.HeaderCell scope="col" className="bg-(--ax-bg-danger-soft)">
                Før
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" className="bg-(--ax-bg-success-soft)">
                Etter
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sortert.length === 0 ? (
              <Table.Row>
                <Table.DataCell colSpan={4} className="py-8 text-center">
                  <BodyShort className="text-(--ax-text-neutral)">
                    Ingen opplysninger funnet
                  </BodyShort>
                </Table.DataCell>
              </Table.Row>
            ) : (
              sortert.map((f) => (
                <Table.ExpandableRow
                  key={f.opplysningTypeId}
                  content={<ExpandableRowContent forskjell={f} />}
                  togglePlacement="right"
                >
                  <Table.DataCell>
                    <TypeTag type={f.type} />
                  </Table.DataCell>
                  <Table.DataCell>
                    <Label size="small">{f.navn}</Label>
                  </Table.DataCell>
                  <Table.DataCell className="bg-(--ax-bg-danger-soft)/30">
                    {f.gammelOpplysning ? (
                      formatVerdier(f.gammelOpplysning.perioder)
                    ) : (
                      <span className="text-(--ax-text-neutral)">—</span>
                    )}
                  </Table.DataCell>
                  <Table.DataCell className="bg-(--ax-bg-success-soft)/30">
                    {f.nyOpplysning ? (
                      formatVerdier(f.nyOpplysning.perioder)
                    ) : (
                      <span className="text-(--ax-text-neutral)">—</span>
                    )}
                  </Table.DataCell>
                </Table.ExpandableRow>
              ))
            )}
          </Table.Body>
        </Table>
      </div>
    </VStack>
  );
}

function TypeTag({ type }: { type: OpplysningForskjell["type"] }) {
  const variants: Record<string, "success" | "error" | "warning" | "neutral"> = {
    "lagt-til": "success",
    fjernet: "error",
    endret: "warning",
    uendret: "neutral",
  };
  const labels: Record<string, string> = {
    "lagt-til": "Ny",
    fjernet: "Fjernet",
    endret: "Endret",
    uendret: "Uendret",
  };

  return (
    <Tag variant={variants[type]} size="xsmall">
      {labels[type]}
    </Tag>
  );
}

function formatVerdier(perioder: Periode[]): string {
  if (perioder.length === 0) return "—";
  if (perioder.length === 1) {
    const p = perioder[0];
    return formaterOpplysningVerdi(p.verdi);
  }
  return `${perioder.length} perioder`;
}

function ExpandableRowContent({ forskjell }: { forskjell: OpplysningForskjell }) {
  return (
    <div className="p-4">
      <VStack gap="space-4">
        <Heading size="xsmall">Detaljer for {forskjell.navn}</Heading>

        {forskjell.periodeEndringer.length === 0 ? (
          <BodyShort className="text-(--ax-text-neutral)">Ingen endringer i perioder</BodyShort>
        ) : (
          <div className="grid gap-2">
            {forskjell.periodeEndringer.map((e, i) => (
              <PeriodeEndringDetalj key={i} endring={e} />
            ))}
          </div>
        )}
      </VStack>
    </div>
  );
}

// ============================================================================
// DESIGN 4: TREE VIEW
// Hierarkisk trevisning med ekspanderbare noder
// som viser opplysninger og deres perioder
// ============================================================================

function Design4TreeView({ forskjeller }: DesignProps) {
  const [ekspanderte, setEkspanderte] = useState<Set<string>>(new Set());
  const [søk, setSøk] = useState("");
  const [filter, setFilter] = useState<"alle" | "endrede">("endrede");

  const toggleEkspandert = (id: string) => {
    const nySet = new Set(ekspanderte);
    if (nySet.has(id)) {
      nySet.delete(id);
    } else {
      nySet.add(id);
    }
    setEkspanderte(nySet);
  };

  const ekspanderAlle = () => {
    setEkspanderte(new Set(forskjeller.map((f) => f.opplysningTypeId)));
  };

  const lukkAlle = () => {
    setEkspanderte(new Set());
  };

  const filtrert = useMemo(() => {
    let result = forskjeller;

    if (filter === "endrede") {
      result = result.filter((f) => f.type !== "uendret");
    }

    if (søk) {
      result = result.filter((f) => f.navn.toLowerCase().includes(søk.toLowerCase()));
    }

    return result;
  }, [forskjeller, filter, søk]);

  const gruppertEtterType = useMemo(() => {
    const grupper: Record<string, OpplysningForskjell[]> = {
      endret: [],
      "lagt-til": [],
      fjernet: [],
    };

    for (const f of filtrert) {
      if (f.type !== "uendret" && grupper[f.type]) {
        grupper[f.type].push(f);
      }
    }

    return grupper;
  }, [filtrert]);

  return (
    <VStack gap="space-4">
      {/* Controls */}
      <HStack justify="space-between" align="center" wrap gap="space-4">
        <HStack gap="space-4" align="center">
          <Search
            label="Søk"
            hideLabel
            size="small"
            variant="simple"
            value={søk}
            onChange={setSøk}
            placeholder="Søk etter opplysning..."
            className="w-64"
          />
          <Chips size="small">
            <Chips.Toggle selected={filter === "endrede"} onClick={() => setFilter("endrede")}>
              Kun endrede
            </Chips.Toggle>
            <Chips.Toggle selected={filter === "alle"} onClick={() => setFilter("alle")}>
              Alle
            </Chips.Toggle>
          </Chips>
        </HStack>

        <HStack gap="space-2">
          <Button size="xsmall" variant="tertiary" onClick={ekspanderAlle}>
            Ekspander alle
          </Button>
          <Button size="xsmall" variant="tertiary" onClick={lukkAlle}>
            Lukk alle
          </Button>
        </HStack>
      </HStack>

      {/* Tree */}
      <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-4">
        <VStack gap="space-4">
          {/* Endret gruppe */}
          {gruppertEtterType["endret"].length > 0 && (
            <TreeGroup
              label="Endrede opplysninger"
              count={gruppertEtterType["endret"].length}
              variant="warning"
              icon={<ExclamationmarkTriangleFillIcon aria-hidden />}
            >
              {gruppertEtterType["endret"].map((f) => (
                <TreeNode
                  key={f.opplysningTypeId}
                  forskjell={f}
                  erEkspandert={ekspanderte.has(f.opplysningTypeId)}
                  onToggle={() => toggleEkspandert(f.opplysningTypeId)}
                />
              ))}
            </TreeGroup>
          )}

          {/* Lagt til gruppe */}
          {gruppertEtterType["lagt-til"].length > 0 && (
            <TreeGroup
              label="Nye opplysninger"
              count={gruppertEtterType["lagt-til"].length}
              variant="success"
              icon={<PlusCircleFillIcon aria-hidden />}
            >
              {gruppertEtterType["lagt-til"].map((f) => (
                <TreeNode
                  key={f.opplysningTypeId}
                  forskjell={f}
                  erEkspandert={ekspanderte.has(f.opplysningTypeId)}
                  onToggle={() => toggleEkspandert(f.opplysningTypeId)}
                />
              ))}
            </TreeGroup>
          )}

          {/* Fjernet gruppe */}
          {gruppertEtterType["fjernet"].length > 0 && (
            <TreeGroup
              label="Fjernede opplysninger"
              count={gruppertEtterType["fjernet"].length}
              variant="error"
              icon={<MinusCircleFillIcon aria-hidden />}
            >
              {gruppertEtterType["fjernet"].map((f) => (
                <TreeNode
                  key={f.opplysningTypeId}
                  forskjell={f}
                  erEkspandert={ekspanderte.has(f.opplysningTypeId)}
                  onToggle={() => toggleEkspandert(f.opplysningTypeId)}
                />
              ))}
            </TreeGroup>
          )}

          {filtrert.length === 0 && (
            <BodyShort className="py-8 text-center text-(--ax-text-neutral)">
              Ingen opplysninger matcher filteret
            </BodyShort>
          )}
        </VStack>
      </div>
    </VStack>
  );
}

function TreeGroup({
  label,
  count,
  variant,
  icon,
  children,
}: {
  label: string;
  count: number;
  variant: "success" | "warning" | "error";
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const [åpen, setÅpen] = useState(true);

  const bgColors = {
    success: "bg-(--ax-bg-success-soft)",
    warning: "bg-(--ax-bg-warning-soft)",
    error: "bg-(--ax-bg-danger-soft)",
  };

  const textColors = {
    success: "text-(--ax-text-success)",
    warning: "text-(--ax-text-warning)",
    error: "text-(--ax-text-danger)",
  };

  return (
    <div>
      <button
        className={`w-full rounded-lg ${bgColors[variant]} p-3 text-left transition-colors hover:opacity-80`}
        onClick={() => setÅpen(!åpen)}
      >
        <HStack justify="space-between" align="center">
          <HStack gap="space-2" align="center">
            <span className={textColors[variant]}>{icon}</span>
            <Label size="small">{label}</Label>
            <Tag variant={variant} size="xsmall">
              {count}
            </Tag>
          </HStack>
          <ChevronDownIcon
            className={`transition-transform ${åpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </HStack>
      </button>

      {åpen && (
        <div className="mt-2 ml-6 space-y-1 border-l-2 border-(--ax-border-subtle) pl-4">
          {children}
        </div>
      )}
    </div>
  );
}

function TreeNode({
  forskjell,
  erEkspandert,
  onToggle,
}: {
  forskjell: OpplysningForskjell;
  erEkspandert: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-lg bg-(--ax-bg-default) p-2">
      <button className="w-full text-left" onClick={onToggle} aria-expanded={erEkspandert}>
        <HStack justify="space-between" align="center">
          <HStack gap="space-2" align="center">
            {erEkspandert ? (
              <ChevronDownIcon aria-hidden className="text-(--ax-text-neutral)" />
            ) : (
              <ChevronRightIcon aria-hidden className="text-(--ax-text-neutral)" />
            )}
            <BodyShort size="small">{forskjell.navn}</BodyShort>
          </HStack>
          <Detail className="text-(--ax-text-neutral)">
            {forskjell.periodeEndringer.length} endring
            {forskjell.periodeEndringer.length !== 1 && "er"}
          </Detail>
        </HStack>
      </button>

      {erEkspandert && forskjell.periodeEndringer.length > 0 && (
        <div className="mt-2 ml-6 space-y-2">
          {forskjell.periodeEndringer.map((e, i) => (
            <PeriodeEndringDetalj key={i} endring={e} />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// DESIGN 5: COMPACT DASHBOARD
// Kompakt dashboard med statistikk, grafer og hurtigvisning
// Fokus på å gi rask oversikt uten å måtte klikke mye
// ============================================================================

function Design5CompactDashboard({ forskjeller }: DesignProps) {
  const [hoveredKategori, setHoveredKategori] = useState<string | null>(null);

  const stats = useMemo(() => {
    const endrede = forskjeller.filter((f) => f.type !== "uendret");

    let totaltPeriodeEndringer = 0;
    let nyePerioder = 0;
    let fjernedePerioder = 0;
    let endredeVerdier = 0;
    let endredeDatoer = 0;

    for (const f of forskjeller) {
      for (const e of f.periodeEndringer) {
        totaltPeriodeEndringer++;
        switch (e.type) {
          case "lagt-til":
            nyePerioder++;
            break;
          case "fjernet":
            fjernedePerioder++;
            break;
          case "endret-verdi":
            endredeVerdier++;
            break;
          case "endret-datoer":
            endredeDatoer++;
            break;
        }
      }
    }

    return {
      totaltOpplysninger: forskjeller.length,
      endredeOpplysninger: endrede.length,
      uendredeOpplysninger: forskjeller.length - endrede.length,
      totaltPeriodeEndringer,
      nyePerioder,
      fjernedePerioder,
      endredeVerdier,
      endredeDatoer,
      prosentEndret: Math.round((endrede.length / forskjeller.length) * 100) || 0,
    };
  }, [forskjeller]);

  const kategorisert = useMemo(() => {
    return {
      endret: forskjeller.filter((f) => f.type === "endret"),
      lagtTil: forskjeller.filter((f) => f.type === "lagt-til"),
      fjernet: forskjeller.filter((f) => f.type === "fjernet"),
    };
  }, [forskjeller]);

  return (
    <VStack gap="space-6">
      {/* Top Stats Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStatCard
          title="Opplysninger endret"
          value={stats.endredeOpplysninger}
          subtitle={`av ${stats.totaltOpplysninger} totalt`}
          icon={<ArrowsSquarepathIcon aria-hidden />}
          color="warning"
        />
        <DashboardStatCard
          title="Nye perioder"
          value={stats.nyePerioder}
          icon={<PlusCircleFillIcon aria-hidden />}
          color="success"
        />
        <DashboardStatCard
          title="Fjernede perioder"
          value={stats.fjernedePerioder}
          icon={<MinusCircleFillIcon aria-hidden />}
          color="error"
        />
        <DashboardStatCard
          title="Datoer justert"
          value={stats.endredeDatoer}
          icon={<CalendarIcon aria-hidden />}
          color="info"
        />
      </div>

      {/* Progress visualization */}
      <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-4">
        <VStack gap="space-4">
          <HStack justify="space-between" align="center">
            <Label size="small">Endringsgrad</Label>
            <Detail>{stats.prosentEndret}% av opplysninger påvirket</Detail>
          </HStack>
          <div className="relative h-4 w-full overflow-hidden rounded-full bg-(--ax-bg-neutral-moderate)">
            <div
              className="from-green-500 via-yellow-500 to-red-500 absolute top-0 left-0 h-full rounded-full bg-gradient-to-r transition-all duration-500"
              style={{ width: `${stats.prosentEndret}%` }}
            />
          </div>
          <HStack justify="space-between">
            <Detail className="text-(--ax-text-success)">Minimale endringer</Detail>
            <Detail className="text-(--ax-text-danger)">Omfattende endringer</Detail>
          </HStack>
        </VStack>
      </div>

      {/* Quick Lists */}
      <div className="grid gap-4 md:grid-cols-3">
        <QuickList
          title="Endrede opplysninger"
          items={kategorisert.endret}
          variant="warning"
          emptyText="Ingen endrede opplysninger"
          isHovered={hoveredKategori === "endret"}
          onHover={() => setHoveredKategori("endret")}
          onLeave={() => setHoveredKategori(null)}
        />
        <QuickList
          title="Nye opplysninger"
          items={kategorisert.lagtTil}
          variant="success"
          emptyText="Ingen nye opplysninger"
          isHovered={hoveredKategori === "lagtTil"}
          onHover={() => setHoveredKategori("lagtTil")}
          onLeave={() => setHoveredKategori(null)}
        />
        <QuickList
          title="Fjernede opplysninger"
          items={kategorisert.fjernet}
          variant="error"
          emptyText="Ingen fjernede opplysninger"
          isHovered={hoveredKategori === "fjernet"}
          onHover={() => setHoveredKategori("fjernet")}
          onLeave={() => setHoveredKategori(null)}
        />
      </div>

      {/* Recent Changes Timeline */}
      <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-4">
        <VStack gap="space-4">
          <HStack justify="space-between" align="center">
            <Label size="small">Seneste endringer</Label>
            <Detail className="text-(--ax-text-neutral)">
              {stats.totaltPeriodeEndringer} periode-endringer totalt
            </Detail>
          </HStack>

          <div className="max-h-64 overflow-y-auto">
            <VStack gap="space-2">
              {forskjeller
                .filter((f) => f.type !== "uendret")
                .slice(0, 10)
                .map((f) => (
                  <CompactChangeItem key={f.opplysningTypeId} forskjell={f} />
                ))}
            </VStack>
          </div>
        </VStack>
      </div>
    </VStack>
  );
}

function DashboardStatCard({
  title,
  value,
  subtitle,
  icon,
  color,
}: {
  title: string;
  value: number;
  subtitle?: string;
  icon: React.ReactNode;
  color: "success" | "warning" | "error" | "info";
}) {
  const colors = {
    success: {
      bg: "bg-gradient-to-br from-(--ax-bg-success-soft) to-(--ax-bg-success-moderate)/30",
      text: "text-(--ax-text-success)",
      icon: "bg-(--ax-bg-success-moderate)",
    },
    warning: {
      bg: "bg-gradient-to-br from-(--ax-bg-warning-soft) to-(--ax-bg-warning-moderate)/30",
      text: "text-(--ax-text-warning)",
      icon: "bg-(--ax-bg-warning-moderate)",
    },
    error: {
      bg: "bg-gradient-to-br from-(--ax-bg-danger-soft) to-(--ax-bg-danger-moderate)/30",
      text: "text-(--ax-text-danger)",
      icon: "bg-(--ax-bg-danger-moderate)",
    },
    info: {
      bg: "bg-gradient-to-br from-(--ax-bg-info-soft) to-(--ax-bg-info-moderate)/30",
      text: "text-(--ax-text-info)",
      icon: "bg-(--ax-bg-info-moderate)",
    },
  };

  return (
    <div className={`rounded-lg p-4 ${colors[color].bg} transition-transform hover:scale-[1.02]`}>
      <HStack gap="space-4" align="center">
        <div className={`rounded-lg p-2 ${colors[color].icon}`}>
          <span className={`text-xl ${colors[color].text}`}>{icon}</span>
        </div>
        <VStack gap="space-0">
          <span className={`text-3xl font-bold ${colors[color].text}`}>{value}</span>
          <Detail className="text-(--ax-text-neutral)">{title}</Detail>
          {subtitle && <Detail className="text-(--ax-text-neutral)">{subtitle}</Detail>}
        </VStack>
      </HStack>
    </div>
  );
}

function QuickList({
  title,
  items,
  variant,
  emptyText,
  isHovered,
  onHover,
  onLeave,
}: {
  title: string;
  items: OpplysningForskjell[];
  variant: "success" | "warning" | "error";
  emptyText: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const borderColors = {
    success: "border-(--ax-border-success)",
    warning: "border-(--ax-border-warning)",
    error: "border-(--ax-border-danger)",
  };

  const headerBg = {
    success: "bg-(--ax-bg-success-soft)",
    warning: "bg-(--ax-bg-warning-soft)",
    error: "bg-(--ax-bg-danger-soft)",
  };

  return (
    <div
      className={`overflow-hidden rounded-lg border border-(--ax-border-subtle) transition-all ${isHovered ? `border-2 ${borderColors[variant]} shadow-lg` : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className={`${headerBg[variant]} px-4 py-2`}>
        <HStack justify="space-between" align="center">
          <Label size="small">{title}</Label>
          <Tag variant={variant} size="xsmall">
            {items.length}
          </Tag>
        </HStack>
      </div>
      <div className="max-h-48 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-4 text-center">
            <Detail className="text-(--ax-text-neutral)">{emptyText}</Detail>
          </div>
        ) : (
          <VStack gap="space-0">
            {items.map((item) => (
              <div
                key={item.opplysningTypeId}
                className="border-b border-(--ax-border-subtle) px-4 py-2 last:border-b-0 hover:bg-(--ax-bg-neutral-soft)"
              >
                <HStack justify="space-between" align="center">
                  <BodyShort size="small" truncate className="max-w-[180px]">
                    {item.navn}
                  </BodyShort>
                  <Detail className="text-(--ax-text-neutral)">
                    {item.periodeEndringer.length}
                  </Detail>
                </HStack>
              </div>
            ))}
          </VStack>
        )}
      </div>
    </div>
  );
}

function CompactChangeItem({ forskjell }: { forskjell: OpplysningForskjell }) {
  const typeStyles = {
    "lagt-til": {
      dot: "bg-(--ax-bg-success-strong)",
      label: "Ny",
    },
    fjernet: {
      dot: "bg-(--ax-bg-danger-strong)",
      label: "Fjernet",
    },
    endret: {
      dot: "bg-(--ax-bg-warning-strong)",
      label: "Endret",
    },
    uendret: {
      dot: "bg-(--ax-bg-neutral-moderate)",
      label: "Uendret",
    },
  };

  const style = typeStyles[forskjell.type];

  return (
    <div className="flex items-center gap-3 rounded-lg bg-(--ax-bg-default) p-2 hover:bg-(--ax-bg-neutral-soft)">
      <div className={`h-2 w-2 flex-shrink-0 rounded-full ${style.dot}`} />
      <VStack gap="space-0" className="min-w-0 flex-1">
        <HStack justify="space-between" align="center">
          <BodyShort size="small" truncate>
            {forskjell.navn}
          </BodyShort>
          <Tag
            variant={
              forskjell.type === "endret"
                ? "warning"
                : forskjell.type === "lagt-til"
                  ? "success"
                  : "error"
            }
            size="xsmall"
          >
            {style.label}
          </Tag>
        </HStack>
        <Detail className="text-(--ax-text-neutral)">
          {forskjell.periodeEndringer.length} periode-endring
          {forskjell.periodeEndringer.length !== 1 && "er"}
        </Detail>
      </VStack>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
