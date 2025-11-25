import { useEffect, useState } from "react";
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

import { Variantformat } from "../../graphql/generated/saf/graphql";

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

export interface IValgtDokument {
  blobUrl: string;
  dokumentId: string;
}

export default function Innsending() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, innsending, journalposter } = useLoaderData<typeof loader>();
  const [valgtDokument, setValgtDokument] = useState<IValgtDokument>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  useEffect(() => {
    const førsteJournalpost = journalposter[0];
    if (!isAlert(førsteJournalpost) && førsteJournalpost?.dokumenter) {
      const førsteDokument = førsteJournalpost.dokumenter[0];
      if (førsteDokument) {
        åpneDokument(
          førsteJournalpost.journalpostId,
          førsteDokument.dokumentInfoId,
          Variantformat.Arkiv,
        );
      }
    }
  }, []);

  async function åpneDokument(
    journalpostId: string,
    dokumentInfoId: string,
    variantFormat: Variantformat,
  ) {
    const url = `/api/hent-dokument/${journalpostId}/${dokumentInfoId}/${variantFormat}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Response(`Feil ved kall til ${url}`, {
        status: response.status,
        statusText: response.statusText,
      });
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    setValgtDokument({ dokumentId: dokumentInfoId, blobUrl });
  }

  return (
    <OppgaveProvider oppgave={oppgave} saksbehandler={saksbehandler}>
      <PersonBoks person={oppgave.person} oppgave={oppgave} />
      <div className={`main grid grid-cols-[350px_1fr] gap-4`}>
        <section className="flex flex-col gap-4">
          <InnsendingInfo oppgave={oppgave} innsending={innsending} />

          <div className="card p-4">
            <InnsendingDokumentOversikt
              valgtDokument={valgtDokument}
              journalposter={journalposter}
              åpneDokument={åpneDokument}
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
