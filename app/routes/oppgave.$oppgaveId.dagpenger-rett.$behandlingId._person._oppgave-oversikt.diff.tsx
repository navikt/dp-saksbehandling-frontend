import {
  ArrowRightIcon,
  ArrowsSquarepathIcon,
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
  type: "lagt-til" | "fjernet" | "endret";
  felt?: "fraOgMed" | "tilOgMed" | "verdi";
  gammelVerdi?: string;
  nyVerdi?: string;
  verdi?: string;
  fraOgMed?: string;
  tilOgMed?: string;
}

interface OpplysningForskjell {
  opplysningTypeId: string;
  navn: string;
  type: "lagt-til" | "fjernet" | "endret" | "uendret";
  periodeEndringer: PeriodeEndring[];
  gammelOpplysning?: Opplysning;
  nyOpplysning?: Opplysning;
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
      });
    } else {
      const periodeEndringer = sammenlignPerioder(
        venstreOpplysning.perioder,
        høyreOpplysning.perioder,
      );

      forskjeller.push({
        opplysningTypeId: id,
        navn: venstreOpplysning.navn,
        type: periodeEndringer.length > 0 ? "endret" : "uendret",
        periodeEndringer,
        gammelOpplysning: venstreOpplysning,
        nyOpplysning: høyreOpplysning,
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

  // Simple approach: compare by index
  const maxLength = Math.max(venstrePerioder.length, høyrePerioder.length);

  for (let i = 0; i < maxLength; i++) {
    const venstrePeriode = venstrePerioder[i];
    const høyrePeriode = høyrePerioder[i];

    if (!venstrePeriode && høyrePeriode) {
      // New period added
      endringer.push({
        periodeId: høyrePeriode.id,
        type: "lagt-til",
        verdi: formaterOpplysningVerdi(høyrePeriode.verdi),
        fraOgMed: høyrePeriode.gyldigFraOgMed,
        tilOgMed: høyrePeriode.gyldigTilOgMed,
      });
    } else if (venstrePeriode && !høyrePeriode) {
      // Period removed
      endringer.push({
        periodeId: venstrePeriode.id,
        type: "fjernet",
        verdi: formaterOpplysningVerdi(venstrePeriode.verdi),
        fraOgMed: venstrePeriode.gyldigFraOgMed,
        tilOgMed: venstrePeriode.gyldigTilOgMed,
      });
    } else if (venstrePeriode && høyrePeriode) {
      // Compare all fields
      if (venstrePeriode.gyldigFraOgMed !== høyrePeriode.gyldigFraOgMed) {
        endringer.push({
          periodeId: høyrePeriode.id,
          type: "endret",
          felt: "fraOgMed",
          gammelVerdi: venstrePeriode.gyldigFraOgMed || "(ingen)",
          nyVerdi: høyrePeriode.gyldigFraOgMed || "(ingen)",
        });
      }

      if (venstrePeriode.gyldigTilOgMed !== høyrePeriode.gyldigTilOgMed) {
        endringer.push({
          periodeId: høyrePeriode.id,
          type: "endret",
          felt: "tilOgMed",
          gammelVerdi: venstrePeriode.gyldigTilOgMed || "(ingen)",
          nyVerdi: høyrePeriode.gyldigTilOgMed || "(ingen)",
        });
      }

      // Compare verdi - use JSON.stringify for deep comparison
      const venstreVerdiJson = JSON.stringify(venstrePeriode.verdi);
      const høyreVerdiJson = JSON.stringify(høyrePeriode.verdi);

      if (venstreVerdiJson !== høyreVerdiJson) {
        endringer.push({
          periodeId: høyrePeriode.id,
          type: "endret",
          felt: "verdi",
          gammelVerdi: formaterOpplysningVerdi(venstrePeriode.verdi),
          nyVerdi: formaterOpplysningVerdi(høyrePeriode.verdi),
        });
      }
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
  const [sammenligningsBehandlingId, setSammenligningsBehandlingId] = useState("");
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
      sammenligningsBehandling.opplysninger,
      gjeldeneBehandling.opplysninger,
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

function Design1SideBySide({ gammelBehandling, nyBehandling, forskjeller }: DesignProps) {
  const [filterType, setFilterType] = useState<"alle" | "endret" | "uendret">("alle");
  const [søk, setSøk] = useState("");

  const filtrertForskjeller = useMemo(() => {
    let result = forskjeller.filter((f) => f.gammelOpplysning?.synlig || f.nyOpplysning?.synlig);

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

  const antallEndringer = forskjeller.filter((f) => f.type !== "uendret").length;

  return (
    <VStack gap="space-4">
      {/* Header Stats */}
      <div className="rounded-lg bg-(--ax-bg-info-soft) p-4">
        <HStack gap="space-8" align="center">
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
            <Detail uppercase>Endringer funnet</Detail>
            <HStack gap="space-2">
              <Tag variant="warning" size="small">
                {antallEndringer} endret
              </Tag>
              <Tag variant="neutral" size="small">
                {forskjeller.filter((f) => f.type === "uendret").length} uendret
              </Tag>
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
            Alle
          </Chips.Toggle>
          <Chips.Toggle selected={filterType === "endret"} onClick={() => setFilterType("endret")}>
            Kun endrede
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
                <HStack justify="space-between">
                  <BodyShort size="small" weight="semibold">
                    {forskjell.navn}
                  </BodyShort>
                  {forskjell.type === "fjernet" && (
                    <Tag variant="error" size="xsmall">
                      Fjernet
                    </Tag>
                  )}
                  {forskjell.type === "endret" && (
                    <Tag variant="warning" size="xsmall">
                      Endret
                    </Tag>
                  )}
                </HStack>
                {forskjell.gammelOpplysning?.perioder.map((periode, idx) => (
                  <div
                    key={periode.id || idx}
                    className={`rounded p-2 ${
                      forskjell.type === "endret"
                        ? "bg-(--ax-bg-warning-softA)"
                        : "bg-(--ax-bg-default)"
                    }`}
                  >
                    <Detail>
                      Periode: {formatDato(periode.gyldigFraOgMed)} –{" "}
                      {formatDato(periode.gyldigTilOgMed)}
                    </Detail>
                    <BodyShort
                      size="small"
                      className={
                        forskjell.type === "endret" ? "text-(--ax-text-neutral) line-through" : ""
                      }
                    >
                      {formaterOpplysningVerdi(periode.verdi)}
                    </BodyShort>
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
                    ? "border-(--ax-border-warning) bg-(--ax-bg-success-soft)"
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
                      Ny
                    </Tag>
                  )}
                </HStack>
                {forskjell.nyOpplysning?.perioder.map((periode, idx) => (
                  <div
                    key={periode.id || idx}
                    className={`rounded p-2 ${
                      forskjell.type === "endret"
                        ? "bg-(--ax-bg-success-softA)"
                        : "bg-(--ax-bg-default)"
                    }`}
                  >
                    <Detail>
                      Periode: {formatDato(periode.gyldigFraOgMed)} –{" "}
                      {formatDato(periode.gyldigTilOgMed)}
                    </Detail>
                    <BodyShort
                      size="small"
                      weight={forskjell.type === "endret" ? "semibold" : "regular"}
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
          {(visSamlet ? endringer : forskjeller)
            .filter((f) => f.gammelOpplysning?.synlig || f.nyOpplysning?.synlig)
            .map((forskjell, idx) => (
              <div key={forskjell.opplysningTypeId}>
                {/* Hunk header */}
                <div className="bg-(--ax-bg-info-soft) px-4 py-1 text-(--ax-text-neutral)">
                  @@ {forskjell.navn} @@
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

                {forskjell.type === "endret" && (
                  <>
                    {forskjell.gammelOpplysning?.perioder.map((periode, pIdx) => (
                      <div key={`old-${pIdx}`} className="bg-(--ax-bg-danger-soft) px-4 py-1">
                        <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                        <span className="mr-2 text-(--ax-text-danger)">-</span>
                        <span className="text-(--ax-text-danger)">
                          verdi: &quot;{formaterOpplysningVerdi(periode.verdi)}&quot; | periode:{" "}
                          {formatDato(periode.gyldigFraOgMed)} →{" "}
                          {formatDato(periode.gyldigTilOgMed)}
                        </span>
                      </div>
                    ))}
                    {forskjell.nyOpplysning?.perioder.map((periode, pIdx) => (
                      <div key={`new-${pIdx}`} className="bg-(--ax-bg-success-soft) px-4 py-1">
                        <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                        <span className="mr-2 text-(--ax-text-success)">+</span>
                        <span className="text-(--ax-text-success)">
                          verdi: &quot;{formaterOpplysningVerdi(periode.verdi)}&quot; | periode:{" "}
                          {formatDato(periode.gyldigFraOgMed)} →{" "}
                          {formatDato(periode.gyldigTilOgMed)}
                        </span>
                      </div>
                    ))}
                  </>
                )}

                {forskjell.type === "lagt-til" &&
                  forskjell.nyOpplysning?.perioder.map((periode, pIdx) => (
                    <div key={pIdx} className="bg-(--ax-bg-success-soft) px-4 py-1">
                      <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                      <span className="mr-2 text-(--ax-text-success)">+</span>
                      <span className="text-(--ax-text-success)">
                        [NY] verdi: &quot;{formaterOpplysningVerdi(periode.verdi)}&quot;
                      </span>
                    </div>
                  ))}

                {forskjell.type === "fjernet" &&
                  forskjell.gammelOpplysning?.perioder.map((periode, pIdx) => (
                    <div key={pIdx} className="bg-(--ax-bg-danger-soft) px-4 py-1">
                      <span className="mr-4 text-(--ax-text-neutral) select-none">{idx + 1}</span>
                      <span className="mr-2 text-(--ax-text-danger)">-</span>
                      <span className="text-(--ax-text-danger)">
                        [FJERNET] verdi: &quot;{formaterOpplysningVerdi(periode.verdi)}&quot;
                      </span>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>

      {/* Stats footer */}
      <HStack gap="space-4">
        <Tag variant="success" size="small">
          <PlusIcon aria-hidden /> {forskjeller.filter((f) => f.type === "lagt-til").length} lagt
          til
        </Tag>
        <Tag variant="error" size="small">
          <MinusIcon aria-hidden /> {forskjeller.filter((f) => f.type === "fjernet").length} fjernet
        </Tag>
        <Tag variant="warning" size="small">
          <ArrowsSquarepathIcon aria-hidden />{" "}
          {forskjeller.filter((f) => f.type === "endret").length} endret
        </Tag>
      </HStack>
    </VStack>
  );
}

// ============================================================================
// DESIGN 3: CARD-BASED TIMELINE
// Visual timeline showing changes as a journey from old to new
// ============================================================================

function Design3CardBasedTimeline({ forskjeller, gammelBehandling, nyBehandling }: DesignProps) {
  const endringer = forskjeller.filter(
    (f) => f.type !== "uendret" && (f.gammelOpplysning?.synlig || f.nyOpplysning?.synlig),
  );
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
                        <Detail className="text-(--ax-text-neutral)">
                          {forskjell.type === "lagt-til" && "Ny opplysning lagt til"}
                          {forskjell.type === "fjernet" && "Opplysning fjernet"}
                          {forskjell.type === "endret" &&
                            `${forskjell.periodeEndringer.length} periode-endring(er)`}
                        </Detail>
                      </VStack>
                    </HStack>
                    <HStack gap="space-2" align="center">
                      <Tag
                        variant={
                          forskjell.type === "lagt-til"
                            ? "success"
                            : forskjell.type === "fjernet"
                              ? "error"
                              : "warning"
                        }
                        size="xsmall"
                      >
                        {forskjell.type}
                      </Tag>
                      {isExpanded ? (
                        <ChevronDownIcon aria-hidden />
                      ) : (
                        <ChevronRightIcon aria-hidden />
                      )}
                    </HStack>
                  </HStack>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 rounded-lg bg-(--ax-bg-neutral-soft) p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <VStack gap="space-2">
                          <Label size="small">Før</Label>
                          {forskjell.gammelOpplysning?.perioder.map((p, idx) => (
                            <div key={idx} className="rounded bg-(--ax-bg-danger-soft) p-2">
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
                            <div key={idx} className="rounded bg-(--ax-bg-success-soft) p-2">
                              <Detail>
                                {formatDato(p.gyldigFraOgMed)} – {formatDato(p.gyldigTilOgMed)}
                              </Detail>
                              <BodyShort size="small">{formaterOpplysningVerdi(p.verdi)}</BodyShort>
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

  const synligeForskjeller = forskjeller.filter(
    (f) => f.gammelOpplysning?.synlig || f.nyOpplysning?.synlig,
  );

  const filtrert = useMemo(() => {
    let result = synligeForskjeller;
    if (visningstype !== "alle") {
      result = result.filter((f) => f.type === visningstype);
    }
    if (søk) {
      result = result.filter((f) => f.navn.toLowerCase().includes(søk.toLowerCase()));
    }
    return result;
  }, [synligeForskjeller, visningstype, søk]);

  const stats = {
    totalt: synligeForskjeller.length,
    endret: synligeForskjeller.filter((f) => f.type === "endret").length,
    lagtTil: synligeForskjeller.filter((f) => f.type === "lagt-til").length,
    fjernet: synligeForskjeller.filter((f) => f.type === "fjernet").length,
    uendret: synligeForskjeller.filter((f) => f.type === "uendret").length,
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
                    <Label>Detaljerte endringer</Label>
                    {selectedOpplysning.periodeEndringer.map((endring, idx) => (
                      <HStack
                        key={idx}
                        gap="space-4"
                        align="center"
                        className="rounded bg-(--ax-bg-default) p-2"
                      >
                        {endring.type === "endret" && endring.felt && (
                          <>
                            <Tag variant="warning" size="xsmall">
                              {endring.felt}
                            </Tag>
                            <BodyShort
                              size="small"
                              className="text-(--ax-text-neutral) line-through"
                            >
                              {endring.gammelVerdi || "—"}
                            </BodyShort>
                            <ArrowRightIcon aria-hidden />
                            <BodyShort size="small" weight="semibold">
                              {endring.nyVerdi || "—"}
                            </BodyShort>
                          </>
                        )}
                        {endring.type === "lagt-til" && (
                          <>
                            <Tag variant="success" size="xsmall">
                              Ny periode
                            </Tag>
                            <BodyShort size="small">{endring.verdi}</BodyShort>
                          </>
                        )}
                        {endring.type === "fjernet" && (
                          <>
                            <Tag variant="error" size="xsmall">
                              Fjernet periode
                            </Tag>
                            <BodyShort size="small" className="line-through">
                              {endring.verdi}
                            </BodyShort>
                          </>
                        )}
                      </HStack>
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

  const synligeForskjeller = forskjeller.filter(
    (f) => f.gammelOpplysning?.synlig || f.nyOpplysning?.synlig,
  );

  const sortert = useMemo(() => {
    const filtered = visUendret
      ? synligeForskjeller
      : synligeForskjeller.filter((f) => f.type !== "uendret");
    return [...filtered].sort((a, b) => {
      if (sortering === "navn") return a.navn.localeCompare(b.navn);
      if (sortering === "type") {
        const order = { endret: 0, "lagt-til": 1, fjernet: 2, uendret: 3 };
        return order[a.type] - order[b.type];
      }
      return b.periodeEndringer.length - a.periodeEndringer.length;
    });
  }, [synligeForskjeller, sortering, visUendret]);

  const oppsummering = {
    totalt: synligeForskjeller.length,
    endret: synligeForskjeller.filter((f) => f.type === "endret").length,
    lagtTil: synligeForskjeller.filter((f) => f.type === "lagt-til").length,
    fjernet: synligeForskjeller.filter((f) => f.type === "fjernet").length,
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
            <Table.HeaderCell scope="col" className="w-48">
              Før
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" className="w-12 text-center">
              →
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" className="w-48">
              Etter
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" className="w-24 text-center">
              Endringer
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
                  <BodyShort
                    size="small"
                    className={
                      forskjell.type === "endret" ? "text-(--ax-text-neutral) line-through" : ""
                    }
                  >
                    {gammelVerdi}
                  </BodyShort>
                </Table.DataCell>
                <Table.DataCell className="text-center">
                  {forskjell.type !== "uendret" && (
                    <ArrowRightIcon aria-hidden className="text-(--ax-text-neutral)" />
                  )}
                </Table.DataCell>
                <Table.DataCell>
                  <BodyShort
                    size="small"
                    weight={forskjell.type === "endret" ? "semibold" : "regular"}
                    className={
                      forskjell.type === "lagt-til"
                        ? "text-(--ax-text-success)"
                        : forskjell.type === "fjernet"
                          ? "text-(--ax-text-neutral) line-through"
                          : ""
                    }
                  >
                    {nyVerdi}
                  </BodyShort>
                </Table.DataCell>
                <Table.DataCell className="text-center">
                  {forskjell.periodeEndringer.length > 0 && (
                    <Tag variant="info" size="xsmall">
                      {forskjell.periodeEndringer.length}
                    </Tag>
                  )}
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      {/* Quick Legend */}
      <div className="rounded-lg bg-(--ax-bg-neutral-soft) p-3">
        <HStack gap="space-8" justify="center">
          <HStack gap="space-2" align="center">
            <Tag variant="warning" size="xsmall">
              ~
            </Tag>
            <Detail>Endret verdi</Detail>
          </HStack>
          <HStack gap="space-2" align="center">
            <Tag variant="success" size="xsmall">
              +
            </Tag>
            <Detail>Ny opplysning</Detail>
          </HStack>
          <HStack gap="space-2" align="center">
            <Tag variant="error" size="xsmall">
              −
            </Tag>
            <Detail>Fjernet opplysning</Detail>
          </HStack>
          <HStack gap="space-2" align="center">
            <Tag variant="neutral" size="xsmall">
              =
            </Tag>
            <Detail>Uendret</Detail>
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
