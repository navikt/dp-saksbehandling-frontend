import { Heading } from "@navikt/ds-react";
import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { OppgaveMeny } from "~/components/oppgave-meny/OppgaveMeny";
import { OpplysningsVerdierForPerioder } from "~/components/rett-på-dagpenger/OpplysningsVerdierForPerioder";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Behandle() {
  const { behandling } = useBehandling();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const nyeOpplysninger = behandling.opplysninger.filter((opplysning) =>
    opplysning.perioder.some((periode) => periode.opprinnelse === "Ny"),
  );

  return (
    <main>
      <div className={"card flex flex-col gap-4 p-4"}>
        <div className="flex justify-between gap-6">
          <LinkTabs className="flex-1" />
          <OppgaveMeny />
        </div>

        <div className="mt-4">
          <Heading size={"small"}>Utvikler lekegrind</Heading>

          <div className={"card p-4"}>
            <Heading size={"xsmall"}>Opplysninger som har periode med opprinnelse Ny</Heading>
            <section className="grid grid-cols-4 gap-4">
              {nyeOpplysninger.map((opplysning) => (
                <div key={opplysning.opplysningTypeId}>
                  <OpplysningsVerdierForPerioder
                    label={opplysning.navn}
                    perioder={opplysning.perioder}
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
