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
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentTilbakekreving } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const tilbakekreving = await hentTilbakekreving(request, params.behandlingId);

  return { tilbakekreving };
}

export default function Tilbakekreving() {
  const { tilbakekreving } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className={"flex gap-4"}>
      <OppgaveOversikt />
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
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
