import { BodyLong, Heading, Tag } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentJournalpost } from "~/models/saf.server";
import { hentGenerellOppgaveData, hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const generellOppgaveData = await hentGenerellOppgaveData(request, params.oppgaveId);

  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    generellOppgaveData,
    journalposterPromises,
  };
}

export default function GenerellOppgave() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, generellOppgaveData, journalposterPromises } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <OppgaveProvider
      oppgave={oppgave}
      saksbehandler={saksbehandler}
      journalposterPromises={journalposterPromises}
    >
      <PersonBoks person={oppgave.person} oppgave={oppgave} />
      <div className={"main flex gap-4"}>
        <OppgaveOversikt journalposterPromises={journalposterPromises} />
        <div className={"card flex flex-1 flex-col gap-4 p-4"}>
          <div className={"flex items-center gap-2"}>
            <Heading size={"medium"}>{generellOppgaveData.tittel}</Heading>
            <Tag variant={"neutral"} size={"small"}>
              {generellOppgaveData.oppgaveType}
            </Tag>
          </div>
          {generellOppgaveData.beskrivelse && (
            <BodyLong>{generellOppgaveData.beskrivelse}</BodyLong>
          )}
        </div>
      </div>
    </OppgaveProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
