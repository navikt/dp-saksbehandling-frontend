import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OpplysningsVerdierForPerioder } from "~/components/rett-på-dagpenger/OpplysningsVerdierForPerioder";
import { LinkTabs } from "~/components/v2/link-tabs/LinkTabs";
import { OppgaveMeny } from "~/components/v2/oppgave-meny/OppgaveMeny";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandling = await hentBehandling(request, params.behandlingId);

  return { behandling };
}

export default function Behandle() {
  const { behandling } = useLoaderData<typeof loader>();
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
