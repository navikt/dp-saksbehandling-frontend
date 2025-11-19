import { useState } from "react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { InnsendingDokumentOversikt } from "~/components/innsending/innsending-dokument-oversikt/InnsendingDokumentOversikt";
import { InnsendingInfo } from "~/components/innsending/innsending-info/InnsendingInfo";
import { PdfViewer } from "~/components/innsending/pdf-viewer/PdfViewer";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentJournalpost } from "~/models/saf.server";
import { hentInnsending, hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const innsending = await hentInnsending(request, params.behandlingId);
  const journalposter = await Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    innsending,
    journalposter,
  };
}

export default function Innsending() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, journalposter } = useLoaderData<typeof loader>();
  const [valgtDokument, setValgtDokument] = useState<string>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <OppgaveProvider oppgave={oppgave} saksbehandler={saksbehandler}>
      <PersonBoks person={oppgave.person} oppgave={oppgave} />
      <div className={`main grid grid-cols-[350px_1fr] gap-4`}>
        <section className="flex flex-col gap-4">
          <InnsendingInfo oppgave={oppgave} />
          <div className="card p-4">
            <InnsendingDokumentOversikt
              setValgtDokument={setValgtDokument}
              journalposter={journalposter}
            />
          </div>
        </section>
        {valgtDokument && <PdfViewer valgtDokument={valgtDokument} />}
      </div>
    </OppgaveProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
