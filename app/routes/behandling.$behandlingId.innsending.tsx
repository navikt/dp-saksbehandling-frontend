import { Box, HGrid, VStack } from "@navikt/ds-react";
import { useState } from "react";
import { useActionData, useLoaderData, useRouteError } from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { InnsendingDokumentOversikt } from "~/components/innsending/innsending-dokument-oversikt/InnsendingDokumentOversikt";
import { InnsendingInfo } from "~/components/innsending/innsending-info/InnsendingInfo";
import { IValgtDokument, PdfViewer } from "~/components/innsending/pdf-viewer/PdfViewer";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useOppgave } from "~/hooks/useOppgave";
import { hentInnsending } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

import type { Route } from "./+types/behandling.$behandlingId.innsending";

export async function loader({ params, request }: Route.LoaderArgs) {
  const innsending = await hentInnsending(request, params.behandlingId);

  return { innsending };
}

export async function action({ request, params }: Route.ActionArgs) {
  return await handleActions(request, params);
}

export default function Innsending() {
  const { innsending } = useLoaderData<typeof loader>();
  const { oppgave } = useOppgave();
  invariant(oppgave.behandlingType === "INNSENDING", "Oppgaven må være av typen INNSENDING");
  const [valgtDokument, setValgtDokument] = useState<IValgtDokument>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <HGrid columns="350px 1fr" gap="space-16">
      <VStack as="section" gap="space-16">
        <InnsendingInfo innsending={innsending} />
        <Box className="card" padding="space-16">
          <InnsendingDokumentOversikt
            valgtDokument={valgtDokument}
            setValgtDokument={setValgtDokument}
          />
        </Box>
      </VStack>
      {valgtDokument && <PdfViewer valgtDokument={valgtDokument} />}
    </HGrid>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
