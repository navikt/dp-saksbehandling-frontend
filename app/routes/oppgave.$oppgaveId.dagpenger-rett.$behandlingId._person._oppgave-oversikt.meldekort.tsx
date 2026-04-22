import { Heading, InfoCard } from "@navikt/ds-react";
import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { TidslinjeNavigering } from "~/components/tidslinje-navigering/TidslinjeNavigering";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTidslinjeNavigeringState } from "~/hooks/useTidslinjeNavigeringState";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Meldekortberegning() {
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  const { behandling } = useBehandling();
  const { oppgaveId } = useTypeSafeParams();

  const meldekortRegelsett = behandling.fastsettelser.find(
    (fastsettelse) => fastsettelse.id === "NDk3MjQwMDY0",
  );

  const opplysninger = behandling.opplysninger.filter(
    (opplysning) =>
      opplysning.synlig && meldekortRegelsett?.opplysninger.includes(opplysning.opplysningTypeId),
  );

  if (!meldekortRegelsett) {
    return (
      <InfoCard data-color="warning">
        <InfoCard.Header>
          <InfoCard.Title>Ingen meldekortbergening</InfoCard.Title>
        </InfoCard.Header>
        <InfoCard.Content>
          Vi fant ingen meldekortberegning for denne behandlingen.
        </InfoCard.Content>
      </InfoCard>
    );
  }

  const tidslinjeState = useTidslinjeNavigeringState(
    behandling,
    undefined,
    opplysninger
      .find((opplysning) => opplysning.opplysningTypeId === "01956abd-2871-7517-a332-b462c0c31292")
      ?.perioder.at(-1)?.gyldigFraOgMed,
  );

  return (
    <>
      <div className={"flex justify-between"}>
        <Heading size={"small"}>{meldekortRegelsett.navn}</Heading>
        <TidslinjeNavigering
          tidslinjeStartSlutt={tidslinjeState.tidslinjeStartSlutt}
          setTidslinjeStartSlutt={tidslinjeState.setTidslinjeStartSlutt}
          antallUkerITidslinje={tidslinjeState.antallUkerITidslinje}
          setAntallUkerITidslinje={tidslinjeState.setAntallUkerITidslinje}
        />
      </div>
      <OpplysningerTidslinje
        eksternTidslinjeNavigeringState={tidslinjeState}
        opplysninger={opplysninger}
        visAllePerioder={true}
        medLenkeTilOpplysning={true}
        opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${meldekortRegelsett.id}/opplysning`}
      />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
