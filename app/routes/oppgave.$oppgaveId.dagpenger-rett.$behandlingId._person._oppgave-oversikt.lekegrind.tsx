import {
  ArrowRightIcon,
  ArrowsSquarepathIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CogIcon,
  ExclamationmarkTriangleIcon,
  EyeIcon,
  PersonIcon,
  XMarkIcon,
} from "@navikt/aksel-icons";
import {
  Alert,
  BodyShort,
  Button,
  Detail,
  Heading,
  HStack,
  Label,
  Tag,
  TextField,
  VStack,
} from "@navikt/ds-react";
import { useMemo, useState } from "react";
import { ActionFunctionArgs, useFetcher, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
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

type Kilde = components["schemas"]["Opplysningskilde"];
type Utledning = components["schemas"]["Utledning"];

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
  // Kilde og utledning for ny periode
  kilde?: Kilde;
  utledetAv?: Utledning;
  // Kilde og utledning for gammel periode (ved endring)
  gammelKilde?: Kilde;
  gammelUtledetAv?: Utledning;
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
        gammelKilde: periode.kilde,
        gammelUtledetAv: periode.utledetAv,
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
        kilde: periode.kilde,
        utledetAv: periode.utledetAv,
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

  // Helper to build kilde/utledetAv fields for a matched pair
  const metaFelter = (vp: Periode, hp: Periode) => ({
    kilde: hp.kilde,
    utledetAv: hp.utledetAv,
    gammelKilde: vp.kilde,
    gammelUtledetAv: vp.utledetAv,
  });

  // STRATEGY 0: Match by same ID
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
          ...metaFelter(vp, hp),
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
          ...metaFelter(vp, hp),
        });
      }
    }
  }

  // Strategy 1: Exact matches
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

  // Strategy 2: Same value, different dates
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
          ...metaFelter(vp, hp),
        });
        break;
      }
    }
  }

  // Strategy 3: Same dates, different value
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
          ...metaFelter(vp, hp),
        });
        break;
      }
    }
  }

  // Strategy 4: Overlapping date ranges
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
          ...metaFelter(vp, bestMatch),
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
          ...metaFelter(vp, bestMatch),
        });
      }
    }
  }

  // Strategy 5: Remaining unmatched in venstre are removed
  for (const vp of venstrePerioder) {
    if (!matchedVenstreIds.has(vp.id)) {
      endringer.push({
        periodeId: vp.id,
        type: "fjernet",
        verdi: formaterOpplysningVerdi(vp.verdi),
        fraOgMed: vp.gyldigFraOgMed,
        tilOgMed: vp.gyldigTilOgMed,
        gammelKilde: vp.kilde,
        gammelUtledetAv: vp.utledetAv,
      });
    }
  }

  // Strategy 6: Remaining unmatched in høyre are added
  for (const hp of høyrePerioder) {
    if (!matchedHøyreIds.has(hp.id)) {
      endringer.push({
        periodeId: hp.id,
        type: "lagt-til",
        verdi: formaterOpplysningVerdi(hp.verdi),
        fraOgMed: hp.gyldigFraOgMed,
        tilOgMed: hp.gyldigTilOgMed,
        kilde: hp.kilde,
        utledetAv: hp.utledetAv,
      });
    }
  }

  return endringer;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Diff() {
  const { behandling: gjeldeneBehandling } = useBehandling();
  const [sammenligningsBehandlingId, setSammenligningsBehandlingId] = useState(
    gjeldeneBehandling.basertPå ?? "",
  );
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

  // Alle opplysninger (inkl. ikke-synlige) for oppslag i utledningstreet
  const alleOpplysninger = useMemo(() => {
    const map = new Map<string, Opplysning>();
    for (const o of gjeldeneBehandling.opplysninger) {
      map.set(o.opplysningTypeId, o);
    }
    if (sammenligningsBehandling) {
      for (const o of sammenligningsBehandling.opplysninger) {
        if (!map.has(o.opplysningTypeId)) {
          map.set(o.opplysningTypeId, o);
        }
      }
    }
    return Array.from(map.values());
  }, [gjeldeneBehandling, sammenligningsBehandling]);

  return (
    <VStack gap="space-8" className="card p-4">
      <Heading size="medium">Sammenlign behandlinger</Heading>

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

      {sammenligningsBehandling && (
        <Design1InputOutput forskjeller={forskjeller} alleOpplysninger={alleOpplysninger} />
      )}
    </VStack>
  );
}

// ============================================================================
// SHARED HELPERS
// ============================================================================

function formatDato(dato?: string): string {
  return dato ? formaterTilNorskDato(dato) : "—";
}

function KildeBadge({ kilde }: { kilde?: Kilde }) {
  if (!kilde) return null;
  const erSaksbehandler = kilde.type === "Saksbehandler";
  return (
    <Tag variant={erSaksbehandler ? "alt1" : "alt2"} size="xsmall">
      <HStack gap="space-1" align="center">
        {erSaksbehandler ? <PersonIcon aria-hidden /> : <CogIcon aria-hidden />}
        {erSaksbehandler ? (kilde.ident ?? "Saksbehandler") : "System"}
      </HStack>
    </Tag>
  );
}

function UtledningPanel({
  utledetAv,
  alleOpplysninger,
  className,
}: {
  utledetAv?: Utledning;
  alleOpplysninger: Opplysning[];
  className?: string;
}) {
  const [åpen, setÅpen] = useState(false);

  if (!utledetAv) return null;

  return (
    <div
      className={`rounded border border-(--ax-border-neutral) bg-(--ax-bg-neutral-soft) ${className ?? ""}`}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-2 rounded p-3 text-left transition-colors hover:bg-(--ax-bg-neutral-moderate)"
        onClick={() => setÅpen(!åpen)}
      >
        {åpen ? (
          <ChevronDownIcon aria-hidden className="shrink-0" />
        ) : (
          <ChevronRightIcon aria-hidden className="shrink-0" />
        )}
        <CogIcon aria-hidden className="shrink-0 text-(--ax-text-neutral)" />
        <Detail weight="semibold" className="flex-1">
          Regel: {utledetAv.regel.navn}
        </Detail>
        <Detail className="text-(--ax-text-neutral)">
          {utledetAv.opplysninger.length} opplysning
          {utledetAv.opplysninger.length !== 1 ? "er" : ""}
        </Detail>
      </button>

      {åpen && utledetAv.opplysninger.length > 0 && (
        <div className="border-t border-t-(--ax-border-neutral) p-3">
          <VStack gap="space-1">
            {utledetAv.opplysninger.map((opplysningId, idx) => (
              <UtledningNode
                key={idx}
                opplysningId={opplysningId}
                alleOpplysninger={alleOpplysninger}
              />
            ))}
          </VStack>
        </div>
      )}
    </div>
  );
}

function UtledningNode({
  opplysningId,
  alleOpplysninger,
}: {
  opplysningId: string;
  alleOpplysninger: Opplysning[];
}) {
  const [expanded, setExpanded] = useState(false);

  // Prøv å matche på opplysningTypeId først, deretter på periode-id
  const opplysning =
    alleOpplysninger.find((o) => o.opplysningTypeId === opplysningId) ??
    alleOpplysninger.find((o) => o.perioder.some((p) => p.id === opplysningId));

  if (!opplysning) {
    return <Detail className="p-1 font-mono text-(--ax-text-neutral)">• {opplysningId}</Detail>;
  }

  const periodeUtledning = opplysning.perioder.find((p) => p.utledetAv)?.utledetAv;
  const harBarn = periodeUtledning && periodeUtledning.opplysninger.length > 0;
  const sistePeriode = opplysning.perioder[opplysning.perioder.length - 1];

  return (
    <div>
      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-2 rounded p-1 text-left transition-colors hover:bg-(--ax-bg-neutral-moderate)"
        onClick={() => harBarn && setExpanded(!expanded)}
      >
        {harBarn ? (
          expanded ? (
            <ChevronDownIcon aria-hidden className="shrink-0 text-sm" />
          ) : (
            <ChevronRightIcon aria-hidden className="shrink-0 text-sm" />
          )
        ) : (
          <span className="w-4 shrink-0" />
        )}
        <Detail weight="semibold" className="flex-1 truncate">
          {opplysning.navn}
        </Detail>
        {sistePeriode && (
          <Detail className="shrink-0 text-(--ax-text-neutral)">
            {formaterOpplysningVerdi(sistePeriode.verdi)}
          </Detail>
        )}
      </button>

      {expanded && periodeUtledning && (
        <div className="mt-1 ml-4 border-l-2 border-l-(--ax-border-neutral) pl-2">
          <Detail className="mb-1 text-(--ax-text-neutral)">
            Regel: {periodeUtledning.regel.navn}
          </Detail>
          {periodeUtledning.opplysninger.map((childId, idx) => (
            <UtledningNode key={idx} opplysningId={childId} alleOpplysninger={alleOpplysninger} />
          ))}
        </div>
      )}
    </div>
  );
}

interface DesignProps {
  forskjeller: OpplysningForskjell[];
  alleOpplysninger: Opplysning[];
}

// ============================================================================
// DESIGN 1: INPUT/OUTPUT SPLIT VIEW
// Separates saksbehandler-endringer (input) from system-endringer (output)
// with a clear cause-effect flow between the two panels
// ============================================================================

function Design1InputOutput({ forskjeller, alleOpplysninger }: DesignProps) {
  const [selectedOpplysning, setSelectedOpplysning] = useState<OpplysningForskjell | null>(null);

  const endringer = forskjeller.filter((f) => f.type !== "uendret");

  const { saksbehandlerEndringer, systemEndringer } = useMemo(() => {
    const saksbehandler: OpplysningForskjell[] = [];
    const system: OpplysningForskjell[] = [];
    for (const f of endringer) {
      const harSaksbehandlerKilde = f.periodeEndringer.some(
        (e) => e.kilde?.type === "Saksbehandler" || e.gammelKilde?.type === "Saksbehandler",
      );
      if (harSaksbehandlerKilde) {
        saksbehandler.push(f);
      } else {
        system.push(f);
      }
    }
    return { saksbehandlerEndringer: saksbehandler, systemEndringer: system };
  }, [endringer]);

  return (
    <VStack gap="space-4">
      {/* Summary bar */}
      <HStack gap="space-4" wrap>
        <div className="flex-1 rounded-lg bg-(--ax-bg-alt1-soft) p-4">
          <HStack gap="space-2" align="center">
            <PersonIcon aria-hidden className="text-xl" />
            <VStack gap="space-0">
              <Label size="small">Input – Saksbehandler</Label>
              <Detail>{saksbehandlerEndringer.length} opplysninger endret manuelt</Detail>
            </VStack>
          </HStack>
        </div>
        <div className="flex items-center">
          <ArrowRightIcon aria-hidden className="text-2xl text-(--ax-text-neutral)" />
        </div>
        <div className="flex-1 rounded-lg bg-(--ax-bg-alt2-soft) p-4">
          <HStack gap="space-2" align="center">
            <CogIcon aria-hidden className="text-xl" />
            <VStack gap="space-0">
              <Label size="small">Output – Regelmotor</Label>
              <Detail>{systemEndringer.length} opplysninger beregnet av system</Detail>
            </VStack>
          </HStack>
        </div>
      </HStack>

      <div className="grid min-h-[500px] grid-cols-12 gap-4">
        {/* Input column */}
        <div className="col-span-3 flex flex-col gap-2">
          <Label size="small" className="flex items-center gap-1">
            <PersonIcon aria-hidden /> Saksbehandler-endringer
          </Label>
          <div className="flex-1 overflow-auto rounded-lg border border-(--ax-border-alt1) bg-(--ax-bg-alt1-soft) p-2">
            <VStack gap="space-1">
              {saksbehandlerEndringer.length === 0 && (
                <Detail className="p-3 text-(--ax-text-neutral)">Ingen endringer</Detail>
              )}
              {saksbehandlerEndringer.map((f) => (
                <OpplysningListeKnapp
                  key={f.opplysningTypeId}
                  forskjell={f}
                  selected={selectedOpplysning?.opplysningTypeId === f.opplysningTypeId}
                  onClick={() => setSelectedOpplysning(f)}
                />
              ))}
            </VStack>
          </div>
        </div>

        {/* Output column */}
        <div className="col-span-3 flex flex-col gap-2">
          <Label size="small" className="flex items-center gap-1">
            <CogIcon aria-hidden /> System-endringer
          </Label>
          <div className="flex-1 overflow-auto rounded-lg border border-(--ax-border-alt2) bg-(--ax-bg-alt2-soft) p-2">
            <VStack gap="space-1">
              {systemEndringer.length === 0 && (
                <Detail className="p-3 text-(--ax-text-neutral)">Ingen endringer</Detail>
              )}
              {systemEndringer.map((f) => (
                <OpplysningListeKnapp
                  key={f.opplysningTypeId}
                  forskjell={f}
                  selected={selectedOpplysning?.opplysningTypeId === f.opplysningTypeId}
                  onClick={() => setSelectedOpplysning(f)}
                />
              ))}
            </VStack>
          </div>
        </div>

        {/* Detail panel */}
        <div className="col-span-6">
          {selectedOpplysning ? (
            <OpplysningDetaljer
              forskjell={selectedOpplysning}
              onClose={() => setSelectedOpplysning(null)}
              alleOpplysninger={alleOpplysninger}
            />
          ) : (
            <TomDetaljerPanel />
          )}
        </div>
      </div>
    </VStack>
  );
}

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

function PeriodeEndringTag({ type }: { type: PeriodeEndring["type"] }) {
  const config = {
    "lagt-til": { variant: "success" as const, label: "+Ny" },
    fjernet: { variant: "error" as const, label: "-Fjernet" },
    "endret-verdi": { variant: "warning" as const, label: "~Verdi" },
    "endret-datoer": { variant: "info" as const, label: "📅Dato" },
  };
  const c = config[type];
  return (
    <Tag variant={c.variant} size="xsmall">
      {c.label}
    </Tag>
  );
}

function PeriodeEndringKort({ endring }: { endring: PeriodeEndring }) {
  if (endring.type === "lagt-til" || endring.type === "fjernet") {
    return (
      <Detail>
        {endring.verdi} | {formatDato(endring.fraOgMed)} – {formatDato(endring.tilOgMed)}
      </Detail>
    );
  }
  if (endring.type === "endret-verdi") {
    return (
      <HStack gap="space-2" align="center">
        <BodyShort size="small" className="text-(--ax-text-danger) line-through">
          {endring.gammelVerdi}
        </BodyShort>
        <ArrowRightIcon aria-hidden />
        <BodyShort size="small" weight="semibold" className="text-(--ax-text-success)">
          {endring.nyVerdi}
        </BodyShort>
      </HStack>
    );
  }
  if (endring.type === "endret-datoer") {
    return (
      <VStack gap="space-0">
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
    );
  }
  return null;
}

function OpplysningListeKnapp({
  forskjell,
  selected,
  onClick,
}: {
  forskjell: OpplysningForskjell;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`w-full cursor-pointer rounded p-3 text-left transition-colors hover:bg-(--ax-bg-neutral-moderate) ${
        selected ? "bg-(--ax-bg-info-soft)" : "bg-(--ax-bg-default)"
      }`}
      onClick={onClick}
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
  );
}

function TomDetaljerPanel() {
  return (
    <div className="flex h-full items-center justify-center rounded-lg bg-(--ax-bg-neutral-soft) p-6">
      <VStack gap="space-4" align="center">
        <EyeIcon aria-hidden className="text-5xl text-(--ax-text-neutral)" />
        <Heading size="small" className="text-(--ax-text-neutral)">
          Velg en opplysning
        </Heading>
        <BodyShort className="text-center text-(--ax-text-neutral)">
          Klikk på en opplysning for å se detaljer, kilde og utledning
        </BodyShort>
      </VStack>
    </div>
  );
}

function PeriodeSammenligning({
  forskjell,
  alleOpplysninger,
}: {
  forskjell: OpplysningForskjell;
  alleOpplysninger: Opplysning[];
}) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <VStack gap="space-4">
        <HStack gap="space-2" align="center">
          <div className="h-3 w-3 rounded-full bg-(--ax-bg-danger-strong)" />
          <Label>Før</Label>
        </HStack>
        <div className="min-h-[150px] rounded-lg bg-(--ax-bg-danger-soft) p-4">
          {forskjell.gammelOpplysning ? (
            <VStack gap="space-4">
              {forskjell.gammelOpplysning.perioder.map((periode, idx) => (
                <div key={idx} className="rounded bg-(--ax-bg-default) p-3">
                  <VStack gap="space-2">
                    <HStack justify="space-between" align="center">
                      <Detail uppercase>Periode {idx + 1}</Detail>
                      <KildeBadge kilde={periode.kilde} />
                    </HStack>
                    <Detail>
                      {formatDato(periode.gyldigFraOgMed)} – {formatDato(periode.gyldigTilOgMed)}
                    </Detail>
                    <BodyShort size="small" weight="semibold">
                      {formaterOpplysningVerdi(periode.verdi)}
                    </BodyShort>
                    <UtledningPanel
                      utledetAv={periode.utledetAv}
                      alleOpplysninger={alleOpplysninger}
                    />
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
              <BodyShort className="text-(--ax-text-neutral)">Ikke tilstede</BodyShort>
            </VStack>
          )}
        </div>
      </VStack>

      <VStack gap="space-4">
        <HStack gap="space-2" align="center">
          <div className="h-3 w-3 rounded-full bg-(--ax-bg-success-strong)" />
          <Label>Etter</Label>
        </HStack>
        <div className="min-h-[150px] rounded-lg bg-(--ax-bg-success-soft) p-4">
          {forskjell.nyOpplysning ? (
            <VStack gap="space-4">
              {forskjell.nyOpplysning.perioder.map((periode, idx) => (
                <div key={idx} className="rounded bg-(--ax-bg-default) p-3">
                  <VStack gap="space-2">
                    <HStack justify="space-between" align="center">
                      <Detail uppercase>Periode {idx + 1}</Detail>
                      <KildeBadge kilde={periode.kilde} />
                    </HStack>
                    <Detail>
                      {formatDato(periode.gyldigFraOgMed)} – {formatDato(periode.gyldigTilOgMed)}
                    </Detail>
                    <BodyShort size="small" weight="semibold">
                      {formaterOpplysningVerdi(periode.verdi)}
                    </BodyShort>
                    <UtledningPanel
                      utledetAv={periode.utledetAv}
                      alleOpplysninger={alleOpplysninger}
                    />
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
              <BodyShort className="text-(--ax-text-neutral)">Ikke tilstede</BodyShort>
            </VStack>
          )}
        </div>
      </VStack>
    </div>
  );
}

function OpplysningDetaljer({
  forskjell,
  onClose,
  alleOpplysninger,
}: {
  forskjell: OpplysningForskjell;
  onClose: () => void;
  alleOpplysninger: Opplysning[];
}) {
  return (
    <div className="h-full rounded-lg border border-(--ax-border-neutral) bg-(--ax-bg-default) p-6">
      <VStack gap="space-6">
        <HStack justify="space-between" align="start">
          <VStack gap="space-2">
            <Heading size="small">{forskjell.navn}</Heading>
            <HStack gap="space-2" wrap>
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
              >
                {forskjell.type.charAt(0).toUpperCase() + forskjell.type.slice(1)}
              </Tag>
              {forskjell.periodeEndringer.map((e, i) => (
                <KildeBadge key={i} kilde={e.kilde ?? e.gammelKilde} />
              ))}
            </HStack>
          </VStack>
          <Button
            variant="tertiary"
            size="xsmall"
            icon={<XMarkIcon aria-hidden />}
            onClick={onClose}
          />
        </HStack>

        {/* Period endringer with kilde and utledning */}
        {forskjell.periodeEndringer.length > 0 && (
          <VStack gap="space-4">
            <Label size="small">Endringer</Label>
            {forskjell.periodeEndringer.map((endring, idx) => (
              <div key={idx} className="rounded-lg border border-(--ax-border-neutral) p-3">
                <VStack gap="space-4">
                  <HStack justify="space-between" align="center">
                    <PeriodeEndringTag type={endring.type} />
                    <KildeBadge kilde={endring.kilde ?? endring.gammelKilde} />
                  </HStack>
                  <PeriodeEndringKort endring={endring} />
                  <UtledningPanel
                    utledetAv={endring.utledetAv ?? endring.gammelUtledetAv}
                    alleOpplysninger={alleOpplysninger}
                  />
                </VStack>
              </div>
            ))}
          </VStack>
        )}

        {/* Før/etter */}
        <PeriodeSammenligning forskjell={forskjell} alleOpplysninger={alleOpplysninger} />
      </VStack>
    </div>
  );
}

// ============================================================================
// ERROR BOUNDARY
// ============================================================================

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
