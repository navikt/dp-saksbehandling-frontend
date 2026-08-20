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
import { IValgtDokument, PdfViewer } from "~/components/innsending/pdf-viewer/PdfViewer";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentInnsending } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const innsending = await hentInnsending(request, params.behandlingId);

  return { innsending };
}

export default function Innsending() {
  const { innsending } = useLoaderData<typeof loader>();
  const [valgtDokument, setValgtDokument] = useState<IValgtDokument>();

  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className={`grid grid-cols-[350px_1fr] gap-4`}>
      <section className="flex flex-col gap-4">
        <InnsendingInfo innsending={innsending} />

        <div className="card p-4">
          <InnsendingDokumentOversikt
            valgtDokument={valgtDokument}
            setValgtDokument={setValgtDokument}
          />
        </div>
      </section>
      {valgtDokument && <PdfViewer valgtDokument={valgtDokument} />}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
