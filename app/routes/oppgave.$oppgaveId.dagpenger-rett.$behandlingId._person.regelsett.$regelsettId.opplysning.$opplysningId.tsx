import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Alert, Heading } from "@navikt/ds-react";
import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OpplysningPerioderTabell } from "~/components/opplysning-perioder-tabell/OpplysningPerioderTabell";
import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../openapi/behandling-typer";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Opplysning() {
  const { oppgaveId, regelsettId, opplysningId } = useTypeSafeParams();
  const { behandling, sistePrøvingsdato } = useBehandling();
  const { meldekortUrl } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person",
  );
  const meldekortId =
    behandling.behandletHendelse.type === "Meldekort" ? behandling.behandletHendelse.id : null;

  const direkteMeldekortUrl =
    regelsettId === "497240064" && meldekortUrl && meldekortId
      ? `${meldekortUrl}/perioder?meldekortId=${meldekortId}`
      : undefined;

  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const regelsett = [...behandling.vilkår, ...behandling.fastsettelser].find(
    (sett) => sett.id === regelsettId,
  );

  const opplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === opplysningId,
  );

  if (!regelsett) {
    return (
      <Alert className={"m-4"} variant="error">
        <Heading spacing size="medium" level="1">
          {`404 Finner ikke regelsett med id ${regelsettId}`}
        </Heading>
      </Alert>
    );
  }

  if (!opplysning) {
    return (
      <Alert className={"m-4"} variant="error">
        <Heading spacing size="medium" level="1">
          {`404 Finner ikke opplysning med id ${opplysningId}`}
        </Heading>
      </Alert>
    );
  }

  const regelsettOpplysninger = behandling.opplysninger.filter(
    (opplysning) =>
      regelsett.opplysninger.includes(opplysning.opplysningTypeId) && opplysning.synlig,
  );

  const tilbakeKnappTilstand = hentTilbakeKnappTilstand(behandling, opplysningId);

  return (
    <>
      <main className={"main"}>
        <LoadingLink
          to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/${tilbakeKnappTilstand.path}`}
          className={"flex items-center gap-1 pb-2"}
        >
          <ArrowLeftIcon />
          {tilbakeKnappTilstand.label}
        </LoadingLink>

        <div className={"card p-4"}>
          <div className={"flex flex-1 flex-col gap-4"}>
            <div className={"card p-4"}>
              <OpplysningerTidslinje
                opplysninger={regelsettOpplysninger.reverse()}
                tittel={regelsett.hjemmel.tittel}
                fremhevØverstTidslinjeRad={true}
                meldekortUrl={direkteMeldekortUrl}
                medLenkeTilOpplysning={true}
                opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${regelsett.id}/opplysning`}
                pins={[{ label: "Prøvingsdato", date: sistePrøvingsdato }]}
              />
            </div>

            <div className={"card p-4"}>
              <OpplysningerTidslinje
                tittel={opplysning.navn}
                redigertAvSaksbehandler={opplysning.redigertAvSaksbehandler}
                regelsettHjemmel={regelsett.hjemmel.tittel}
                opplysningKilde={opplysning.formål}
                opplysninger={[opplysning]}
                pins={[{ label: "Prøvingsdato", date: sistePrøvingsdato }]}
              />
              <OpplysningPerioderTabell opplysning={opplysning} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}

function hentTilbakeKnappTilstand(
  behandling: components["schemas"]["Behandling"],
  opplysningTypeId: string,
) {
  const forSlagTilVedtakTilstand = {
    path: "behandle",
    label: "Forslag til vedtak",
  };

  // Rett på dagpenger opplysning
  if (opplysningTypeId === "01990a09-0eab-7957-b88f-14484a50e194") {
    return forSlagTilVedtakTilstand;
  }

  const opplysningErVilkår = behandling.vilkår.some((vilkår) =>
    vilkår.opplysninger.includes(opplysningTypeId),
  );
  const opplysningErFastsettelse = behandling.fastsettelser.some((vilkår) =>
    vilkår.opplysninger.includes(opplysningTypeId),
  );

  if (opplysningErVilkår) {
    return {
      path: "vilkar",
      label: "Vilkårsvurderinger",
    };
  }

  if (opplysningErFastsettelse) {
    return {
      path: "fastsettelser",
      label: "Fastsettelser",
    };
  }

  return forSlagTilVedtakTilstand;
}
