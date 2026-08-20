import { type LoaderFunctionArgs, Outlet, useLoaderData, useRouteError } from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentRapporteringPersonId } from "~/models/rapportering.server";
import { hentOppgave } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const oppgave = await hentOppgave(request, params.oppgaveId);
  const rapporteringPersonIdPromise = hentRapporteringPersonId(request, oppgave.person.ident);

  return { oppgave, rapporteringPersonIdPromise };
}

export default function OppgaveLayout() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, rapporteringPersonIdPromise } = useLoaderData<typeof loader>();

  return (
    <OppgaveProvider oppgave={oppgave} saksbehandler={saksbehandler}>
      <PersonBoks
        person={oppgave.person}
        rapporteringPersonIdPromise={rapporteringPersonIdPromise}
      />
      <div className="main overflow-scroll">
        <Outlet />
      </div>
    </OppgaveProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="main overflow-scroll overflow-y-auto">
      <ErrorMessageComponent error={error} />
    </div>
  );
}
