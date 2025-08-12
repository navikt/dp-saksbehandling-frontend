import { ActionFunctionArgs, useParams, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { Regelsett } from "~/components/regelsett/Regelsett";
import { RegelsettPeriode } from "~/components/regelsett/RegelsettPeriode";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function RegelsettRoute() {
  const { regelsettNavn } = useParams();
  const { periodisertBehandlingsView } = useSaksbehandler();
  const { behandling } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle",
  );
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

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
