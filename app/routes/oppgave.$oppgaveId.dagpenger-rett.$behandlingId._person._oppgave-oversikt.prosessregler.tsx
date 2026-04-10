import { InfoCard } from "@navikt/ds-react";
import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Prosessregler() {
  const { behandling } = useBehandling();
  const { oppgaveId } = useTypeSafeParams();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  if (!behandling.saksbehandlingsregler || behandling.saksbehandlingsregler.length === 0) {
    return (
      <InfoCard data-color="warning">
        <InfoCard.Header>
          <InfoCard.Title>Ingen prosessregler</InfoCard.Title>
        </InfoCard.Header>
        <InfoCard.Content>Vi fant ingen prosessregler for denne behandlingen.</InfoCard.Content>
      </InfoCard>
    );
  }

  return (
    <>
      {behandling.saksbehandlingsregler.map((regelsett) => {
        const opplysninger = behandling.opplysninger.filter((opplysning) =>
          regelsett.opplysninger.includes(opplysning.opplysningTypeId),
        );

        return (
          <div key={regelsett.id}>
            <OpplysningerTidslinje
              tittel={regelsett.navn}
              regelsettHjemmel={regelsett.hjemmel.tittel}
              opplysninger={opplysninger}
              medLenkeTilOpplysning={true}
              opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${regelsett.id}/opplysning`}
            />
          </div>
        );
      })}
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
