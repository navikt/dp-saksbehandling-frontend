import { ExternalLinkIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgave, hentTilbakekreving } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const tilbakekreving = await hentTilbakekreving(request, params.behandlingId);

  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

  return {
    oppgave,
    tilbakekreving,
    journalposterPromises,
  };
}

export default function Tilbakekreving() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, tilbakekreving, journalposterPromises } = useLoaderData<typeof loader>();
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
        <div
          className={"card flex flex-1 flex-col items-center justify-center gap-4 p-4 text-center"}
        >
          <Heading size={"medium"}>Oppgaven behandles i tilbakekrevingsløsningen</Heading>
          <LoadingLink
            to={tilbakekreving.saksbehandlingURL}
            asButtonVariant={"primary"}
            icon={<ExternalLinkIcon aria-hidden={true} />}
            buttonSize={"medium"}
          >
            Åpne behandling
          </LoadingLink>
        </div>
      </div>
    </OppgaveProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
