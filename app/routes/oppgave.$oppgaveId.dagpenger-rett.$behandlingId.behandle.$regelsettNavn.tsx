import { ActionFunctionArgs, useActionData, useParams, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { Regelsett } from "~/components/regelsett/Regelsett";
import { RegelsettPeriode } from "~/components/regelsett/RegelsettPeriode";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function RegelsettRoute() {
  const { regelsettNavn } = useParams();
  const { periodisertBehandlingsView } = useSaksbehandler();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { behandling } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle",
  );
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const alleRegelsett = [...behandling.vilkår, ...behandling.fastsettelser];
  const nåværendeRegelsett = alleRegelsett.find((regelsett) => regelsett.navn === regelsettNavn);

  if (!nåværendeRegelsett) {
    return <div>Fant ikke regelsett</div>;
  }

  return (
    <>
      {periodisertBehandlingsView ? (
        <RegelsettPeriode
          behandling={behandling}
          aktivtRegelsett={nåværendeRegelsett}
          readonly={oppgave.tilstand !== "UNDER_BEHANDLING"}
        />
      ) : (
        <Regelsett
          behandling={behandling}
          aktivtRegelsett={nåværendeRegelsett}
          readonly={oppgave.tilstand !== "UNDER_BEHANDLING"}
        />
      )}
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
