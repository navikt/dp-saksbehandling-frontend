import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Alert, Heading } from "@navikt/ds-react";
import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import EndretOpplysninger from "~/components/endret-opplysninger/EndretOpplysninger";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OpplysningPerioderTabell } from "~/components/opplysning-perioder-tabell/OpplysningPerioderTabell";
import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { PrøvingsdatoInput } from "~/components/rett-på-dagpenger/PrørvingsdatoInput";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Opplysning() {
  const { oppgaveId, regelsettId, opplysningId } = useTypeSafeParams();
  const { behandling, vurderinger, prøvingsdato, prøvingsdatoOpplysning } = useBehandling();
  const { meldekortUrl } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person",
  );
  const direkteMeldekortUrl =
    regelsettId === "497240064" && meldekortUrl
      ? `${meldekortUrl}` // TODO: legg på det ekstra vi trenger på denne url'en
      : // alternativ 1: `/perioder?variant=A&aar=2025&aktivtMeldekort=${meldekortId}` (krever endring fra ramp og pjs)
        // alternativ 2: `/periode/${meldekortId}/korriger?variant=A` (krever endring fra pjs)
        undefined;

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

  const regelsettAvklaringer = behandling.avklaringer.filter((avklaring) =>
    avklaring.regelsett.some((sett) => sett.id === regelsettId),
  );

  return (
    <>
      <main className={"main"}>
        <LoadingLink
          to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/behandle`}
          className={"flex items-center gap-1 pb-2"}
        >
          <ArrowLeftIcon />
          Behandling
        </LoadingLink>

        <div className={"card p-4"}>
          <div className={"flex gap-4"}>
            <div className={"flex w-[500px] flex-col gap-4"}>
              {prøvingsdatoOpplysning && <PrøvingsdatoInput />}

              <Avklaringer
                avklaringer={regelsettAvklaringer}
                behandlingId={behandling.behandlingId}
              />

              <EndretOpplysninger vurderinger={vurderinger} />
            </div>

            <div className={"flex flex-1 flex-col gap-4"}>
              <div className={"card p-4"}>
                <OpplysningerTidslinje
                  opplysninger={regelsettOpplysninger.reverse()}
                  tittel={regelsett.hjemmel.tittel}
                  fremhevØverstTidslinjeRad={true}
                  meldekortUrl={direkteMeldekortUrl}
                  medLenkeTilOpplysning={true}
                  opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${regelsett.id}/opplysning`}
                  pins={[{ label: "Prøvingsdato", date: prøvingsdato }]}
                />
              </div>

              <div className={"card p-4"}>
                <OpplysningerTidslinje
                  tittel={opplysning.navn}
                  redigertAvSaksbehandler={opplysning.redigertAvSaksbehandler}
                  regelsettHjemmel={regelsett.hjemmel.tittel}
                  opplysningKilde={opplysning.formål}
                  opplysninger={[opplysning]}
                  pins={[{ label: "Prøvingsdato", date: prøvingsdato }]}
                />
                <OpplysningPerioderTabell opplysning={opplysning} />
              </div>
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
