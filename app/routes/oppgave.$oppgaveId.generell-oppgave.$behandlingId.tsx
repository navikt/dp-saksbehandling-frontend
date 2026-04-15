import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { GenerellOppgaveInfo } from "~/components/generell-oppgave/generell-oppgave-info/GenerellOppgaveInfo";
import { GenerellOppgaveInnhold } from "~/components/generell-oppgave/generell-oppgave-innhold/GenerellOppgaveInnhold";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentJournalpost } from "~/models/saf.server";
import { hentGenerellOppgave, hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const generellOppgave = await hentGenerellOppgave(request, params.behandlingId);

  const journalposter = await Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    generellOppgave,
    journalposter,
  };
}

export default function GenerellOppgaveRoute() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, generellOppgave, journalposter } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <OppgaveProvider
      oppgave={oppgave}
      saksbehandler={saksbehandler}
      journalposterPromises={Promise.all(journalposter)}
    >
      <PersonBoks person={oppgave.person} oppgave={oppgave} />
      <div className={`main grid grid-cols-[350px_1fr] gap-4`}>
        <section className="flex flex-col gap-4">
          <GenerellOppgaveInfo generellOppgave={generellOppgave} />
        </section>
        <GenerellOppgaveInnhold generellOppgave={generellOppgave} />
      </div>
    </OppgaveProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
