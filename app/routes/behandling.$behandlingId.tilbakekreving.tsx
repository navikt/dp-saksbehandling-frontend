import { ExternalLinkIcon } from "@navikt/aksel-icons";
import { BodyShort, Heading, HStack, VStack } from "@navikt/ds-react";
import { useState } from "react";
import { useActionData, useLoaderData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { NoteButton, NoteModal } from "~/components/note-button/NoteButton";
import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useOppgave } from "~/hooks/useOppgave";
import { hentTilbakekreving } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

import type { Route } from "./+types/behandling.$behandlingId.tilbakekreving";

export async function loader({ params, request }: Route.LoaderArgs) {
  const tilbakekreving = await hentTilbakekreving(request, params.behandlingId);

  return { tilbakekreving };
}

export async function action({ request, params }: Route.ActionArgs) {
  return await handleActions(request, params);
}

export default function Tilbakekreving() {
  const { tilbakekreving } = useLoaderData<typeof loader>();
  const { oppgave } = useOppgave();

  const [visHuskelapp, setVisHuskelapp] = useState(false);
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <HStack gap="space-16" align="stretch" wrap={false}>
      <BeslutterNotatProvider notat={oppgave.notat}>
        {visHuskelapp && (
          <NoteModal noteKey={oppgave.oppgaveId} onClose={() => setVisHuskelapp(false)} />
        )}
        <VStack className="card relative flex-1" align="center" justify="center">
          {/* litt hacky måte å legge notatknappen øverst til høyre */}
          <div className="absolute top-(--ax-space-16) right-(--ax-space-16)">
            <NoteButton
              noteKey={oppgave.oppgaveId}
              onClick={() => setVisHuskelapp(true)}
              oppgaveTilstand={oppgave.tilstand}
            />
          </div>
          <BodyShort>Oppgaven behandles i tilbakekrevingsløsningen</BodyShort>
          <LoadingLink to={tilbakekreving.saksbehandlingURL} target="_blank">
            Åpne behandling (åpnes i ny fane) <ExternalLinkIcon aria-hidden />
          </LoadingLink>
        </VStack>
        <div className="card flex w-80 flex-col p-4">
          <div className="flex items-center gap-2 pb-2">
            <Heading size={"small"}>Oppgaveinformasjon</Heading>
          </div>

          <OppgaveOversikt />
        </div>
      </BeslutterNotatProvider>
    </HStack>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
