import { Alert, BodyShort, Button, Heading, HStack, TextField, VStack } from "@navikt/ds-react";
import { useState } from "react";
import { ActionFunctionArgs, useFetcher, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { useBehandling } from "~/hooks/useBehandling";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";

import { components } from "../../openapi/behandling-typer";

type Behandling = components["schemas"]["Behandling"];

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.clone().formData();
  const action = formData.get("_action");

  if (action === "hent-behandling-for-diff") {
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

export default function Diff() {
  const { behandling: gjeldeneBehandling } = useBehandling();
  const [sammenligningsBehandlingId, setSammenligningsBehandlingId] = useState("");
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

  return (
    <main className="card p-4">
      <LinkTabs className="flex-1" />
      <VStack gap="space-8" className={"card mt-4 p-4"}>
        <Heading size="medium">Sammenlign behandlinger</Heading>

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
          >
            Hent behandling
          </Button>
        </HStack>

        {feil && (
          <Alert variant="error" size="small">
            {feil}
          </Alert>
        )}

        {sammenligningsBehandling && (
          <BehandlingDiffVisning
            venstreBehandling={sammenligningsBehandling}
            høyreBehandling={gjeldeneBehandling}
          />
        )}
      </VStack>
    </main>
  );
}

interface BehandlingDiffVisningProps {
  venstreBehandling: Behandling;
  høyreBehandling: Behandling;
}

function BehandlingDiffVisning({ venstreBehandling, høyreBehandling }: BehandlingDiffVisningProps) {
  const opplysningsforskjeller = sammenlignOpplysninger(
    venstreBehandling.opplysninger,
    høyreBehandling.opplysninger,
  );

  return (
    <div className="grid min-h-[600px] grid-cols-3 gap-4">
      {/* Venstre: Sammenligningsbehandling */}
      <BehandlingPanel tittel="Sammenligning" behandling={venstreBehandling} side="venstre" />

      {/* Midten: Diff-visning */}
      <DiffPanel forskjeller={opplysningsforskjeller} />

      {/* Høyre: Gjeldende behandling */}
      <BehandlingPanel tittel="Gjeldende behandling" behandling={høyreBehandling} side="høyre" />
    </div>
  );
}

interface BehandlingPanelProps {
  tittel: string;
  behandling: Behandling;
  side: "venstre" | "høyre";
}

function BehandlingPanel({ tittel, behandling, side }: BehandlingPanelProps) {
  const bakgrunnsfarge =
    side === "venstre" ? "bg-(--ax-bg-info-soft)" : "bg-(--ax-bg-success-soft)";

  return (
    <div className={`overflow-auto rounded-lg border p-4 ${bakgrunnsfarge}`}>
      <VStack gap="space-4">
        <Heading size="small">{tittel}</Heading>
        <BodyShort size="small" className="">
          ID: {behandling.behandlingId}
        </BodyShort>
        <BodyShort size="small" className="">
          Tilstand: {behandling.tilstand}
        </BodyShort>

        <Heading size="xsmall">Opplysninger</Heading>
        <VStack gap="space-2">
          {behandling.opplysninger.map((opplysning) => (
            <OpplysningVisning key={opplysning.opplysningTypeId} opplysning={opplysning} />
          ))}
        </VStack>
      </VStack>
    </div>
  );
}

interface OpplysningVisningProps {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
}

function OpplysningVisning({ opplysning }: OpplysningVisningProps) {
  if (!opplysning.synlig) return null;

  return (
    <div className="rounded border border-(--ax-border-default) bg-(--ax-bg-default) p-2">
      <BodyShort size="small" weight="semibold">
        {opplysning.navn}
      </BodyShort>
      {opplysning.perioder.map((periode, index) => {
        const fraOgMed = periode.gyldigFraOgMed ? `fra ${periode.gyldigFraOgMed}` : "";
        const tilOgMed = periode.gyldigTilOgMed ? `til ${periode.gyldigTilOgMed}` : "";
        const periodeStr = [fraOgMed, tilOgMed].filter(Boolean).join(" ");

        return (
          <BodyShort key={periode.id || index} size="small" className="">
            {formaterOpplysningVerdi(periode.verdi)}
            {periodeStr && ` (${periodeStr})`}
          </BodyShort>
        );
      })}
    </div>
  );
}

interface PeriodeEndring {
  periodeId?: string;
  type: "lagt-til" | "fjernet" | "endret";
  felt?: "fraOgMed" | "tilOgMed" | "verdi";
  gammelVerdi?: string;
  nyVerdi?: string;
  // For nye/fjernede perioder
  verdi?: string;
  fraOgMed?: string;
  tilOgMed?: string;
}

interface OpplysningForskjell {
  opplysningTypeId: string;
  navn: string;
  type: "lagt-til" | "fjernet" | "endret" | "uendret";
  periodeEndringer: PeriodeEndring[];
}

function DiffPanel({ forskjeller }: { forskjeller: OpplysningForskjell[] }) {
  const endringer = forskjeller.filter((d) => d.type !== "uendret");

  return (
    <div className="overflow-auto rounded-lg border-2 border-(--ax-border-strong) bg-(--ax-bg-default) p-4">
      <VStack gap="space-4">
        <Heading size="small">Endringer</Heading>
        {endringer.length === 0 ? (
          <Alert variant="info" size="small">
            Ingen forskjeller funnet
          </Alert>
        ) : (
          <VStack gap="space-8">
            {endringer.map((forskjell) => (
              <DiffLinje key={forskjell.opplysningTypeId} forskjell={forskjell} />
            ))}
          </VStack>
        )}
      </VStack>
    </div>
  );
}

function DiffLinje({ forskjell }: { forskjell: OpplysningForskjell }) {
  const hentBakgrunnsfarge = () => {
    switch (forskjell.type) {
      case "lagt-til":
        return "bg-(--ax-bg-success-soft) border-l-(--ax-border-success)";
      case "fjernet":
        return "bg-(--ax-bg-danger-soft) border-l-(--ax-border-danger)";
      case "endret":
        return "bg-(--ax-bg-warning-soft) border-l-(--ax-border-warning)";
      default:
        return "bg-(--ax-bg-neutral-soft) border-l-(--ax-border-neutral)";
    }
  };

  const hentEtikett = () => {
    switch (forskjell.type) {
      case "lagt-til":
        return "+ Lagt til";
      case "fjernet":
        return "- Fjernet";
      case "endret":
        return "~ Endret";
      default:
        return "";
    }
  };

  const hentFeltNavn = (felt?: string) => {
    switch (felt) {
      case "fraOgMed":
        return "Fra og med";
      case "tilOgMed":
        return "Til og med";
      case "verdi":
        return "Verdi";
      default:
        return "";
    }
  };

  return (
    <div className={`rounded border-l-4 p-3 ${hentBakgrunnsfarge()}`}>
      <HStack justify="space-between" align="start">
        <VStack gap="space-2">
          <BodyShort size="small" weight="semibold">
            {forskjell.navn}
          </BodyShort>

          {forskjell.periodeEndringer.map((endring, index) => (
            <div key={index} className="ml-2 rounded bg-(--ax-bg-default) p-2">
              {endring.type === "lagt-til" && (
                <VStack gap="space-1">
                  <BodyShort size="small" className="text-(--ax-text-success-decoration)">
                    + Ny periode
                  </BodyShort>
                  {endring.verdi && <BodyShort size="small">Verdi: {endring.verdi}</BodyShort>}
                  {endring.fraOgMed && (
                    <BodyShort size="small">Fra og med: {endring.fraOgMed}</BodyShort>
                  )}
                  {endring.tilOgMed && (
                    <BodyShort size="small">Til og med: {endring.tilOgMed}</BodyShort>
                  )}
                </VStack>
              )}
              {endring.type === "fjernet" && (
                <VStack gap="space-1">
                  <BodyShort size="small" className="text-(--ax-text-danger)">
                    - Fjernet periode
                  </BodyShort>
                  {endring.verdi && (
                    <BodyShort size="small" className="line-through">
                      Verdi: {endring.verdi}
                    </BodyShort>
                  )}
                  {endring.fraOgMed && (
                    <BodyShort size="small" className="line-through">
                      Fra og med: {endring.fraOgMed}
                    </BodyShort>
                  )}
                  {endring.tilOgMed && (
                    <BodyShort size="small" className="line-through">
                      Til og med: {endring.tilOgMed}
                    </BodyShort>
                  )}
                </VStack>
              )}
              {endring.type === "endret" && endring.felt && (
                <HStack gap="space-2" align="center">
                  <BodyShort size="small" weight="semibold">
                    {hentFeltNavn(endring.felt)}:
                  </BodyShort>
                  <BodyShort
                    size="small"
                    className="text-(--ax-text-danger-decoration) line-through"
                  >
                    {endring.gammelVerdi || "(tom)"}
                  </BodyShort>
                  <BodyShort size="small">→</BodyShort>
                  <BodyShort size="small" className="text-(--ax-text-success-decoration)">
                    {endring.nyVerdi || "(tom)"}
                  </BodyShort>
                </HStack>
              )}
            </div>
          ))}
        </VStack>
        <BodyShort size="small" className="font-mono text-xs">
          {hentEtikett()}
        </BodyShort>
      </HStack>
    </div>
  );
}

function sammenlignOpplysninger(
  venstre: components["schemas"]["RedigerbareOpplysninger"][],
  høyre: components["schemas"]["RedigerbareOpplysninger"][],
): OpplysningForskjell[] {
  const forskjeller: OpplysningForskjell[] = [];
  const venstreMap = new Map(venstre.map((o) => [o.opplysningTypeId, o]));
  const høyreMap = new Map(høyre.map((o) => [o.opplysningTypeId, o]));

  // Finn opplysninger som finnes i begge eller kun i venstre
  for (const [id, venstreOpplysning] of venstreMap) {
    const høyreOpplysning = høyreMap.get(id);

    if (!høyreOpplysning) {
      // Hele opplysningen er fjernet
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
      });
    } else {
      // Sammenlign perioder
      const periodeEndringer = sammenlignPerioder(
        venstreOpplysning.perioder,
        høyreOpplysning.perioder,
      );

      if (periodeEndringer.length > 0) {
        forskjeller.push({
          opplysningTypeId: id,
          navn: venstreOpplysning.navn,
          type: "endret",
          periodeEndringer,
        });
      } else {
        forskjeller.push({
          opplysningTypeId: id,
          navn: venstreOpplysning.navn,
          type: "uendret",
          periodeEndringer: [],
        });
      }
    }
  }

  // Finn opplysninger som kun finnes i høyre
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
      });
    }
  }

  return forskjeller;
}

function sammenlignPerioder(
  venstrePerioder: components["schemas"]["Opplysningsperiode"][],
  høyrePerioder: components["schemas"]["Opplysningsperiode"][],
): PeriodeEndring[] {
  const endringer: PeriodeEndring[] = [];
  const maxLength = Math.max(venstrePerioder.length, høyrePerioder.length);

  for (let i = 0; i < maxLength; i++) {
    const venstrePeriode = venstrePerioder[i];
    const høyrePeriode = høyrePerioder[i];

    if (!venstrePeriode && høyrePeriode) {
      // Ny periode lagt til (flere perioder i høyre enn venstre)
      endringer.push({
        periodeId: høyrePeriode.id,
        type: "lagt-til",
        verdi: formaterOpplysningVerdi(høyrePeriode.verdi),
        fraOgMed: høyrePeriode.gyldigFraOgMed,
        tilOgMed: høyrePeriode.gyldigTilOgMed,
      });
    } else if (venstrePeriode && !høyrePeriode) {
      // Periode fjernet (flere perioder i venstre enn høyre)
      endringer.push({
        periodeId: venstrePeriode.id,
        type: "fjernet",
        verdi: formaterOpplysningVerdi(venstrePeriode.verdi),
        fraOgMed: venstrePeriode.gyldigFraOgMed,
        tilOgMed: venstrePeriode.gyldigTilOgMed,
      });
    } else if (venstrePeriode && høyrePeriode) {
      // Sammenlign feltene i eksisterende periode
      if (venstrePeriode.gyldigFraOgMed !== høyrePeriode.gyldigFraOgMed) {
        endringer.push({
          periodeId: høyrePeriode.id,
          type: "endret",
          felt: "fraOgMed",
          gammelVerdi: venstrePeriode.gyldigFraOgMed,
          nyVerdi: høyrePeriode.gyldigFraOgMed,
        });
      }

      if (venstrePeriode.gyldigTilOgMed !== høyrePeriode.gyldigTilOgMed) {
        endringer.push({
          periodeId: høyrePeriode.id,
          type: "endret",
          felt: "tilOgMed",
          gammelVerdi: venstrePeriode.gyldigTilOgMed,
          nyVerdi: høyrePeriode.gyldigTilOgMed,
        });
      }

      const venstreVerdi = formaterOpplysningVerdi(venstrePeriode.verdi);
      const høyreVerdi = formaterOpplysningVerdi(høyrePeriode.verdi);
      if (venstreVerdi !== høyreVerdi) {
        endringer.push({
          periodeId: høyrePeriode.id,
          type: "endret",
          felt: "verdi",
          gammelVerdi: venstreVerdi,
          nyVerdi: høyreVerdi,
        });
      }
    }
  }

  return endringer;
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
