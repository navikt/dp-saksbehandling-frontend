import { BodyShort, Button, Heading } from "@navikt/ds-react";
import { useState } from "react";
import {
  ActionFunctionArgs,
  data,
  Form,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { AktivOppgaveSøk } from "~/components/aktivt-oppgave-søk-tags/AktivtOppgaveSøkTags";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { Kaffepause } from "~/components/kaffepause/Kaffepause";
import { KonfettiKanon } from "~/components/konfetti-kanon/KonfettiKanon";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    { oppgave, alert },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function NesteOppgave() {
  const navigation = useNavigation();
  const { oppgave, alert } = useLoaderData<typeof loader>();
  const [kaffepause, setKaffepause] = useState(false);
  const actionData = useActionData<typeof action>();
  const { aktivtOppgaveSok } = useSaksbehandler();

  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="card">
      <Kaffepause kaffepause={kaffepause} setKaffepause={setKaffepause} />
      <div className={"mx-auto flex max-w-[650px] flex-col items-center gap-8 py-16"}>
        <KonfettiKanon />
        <Heading size="xlarge">Fullført!</Heading>
        <BodyShort>{alert?.title}</BodyShort>

        <Form method="post" className={"flex flex-col items-center"}>
          <input name="_action" value="hent-neste-oppgave" hidden={true} readOnly={true} />
          <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
          <Button
            className={"w-max"}
            variant="primary"
            loading={navigation.state !== "idle"}
            disabled={navigation.state !== "idle"}
          >
            Start neste oppgave
          </Button>
          <AktivOppgaveSøk aktivtOppgaveSok={aktivtOppgaveSok} />
        </Form>

        <div className="flex gap-6">
          <LoadingLink asButtonVariant={"secondary"} to={`/?${aktivtOppgaveSok}`}>
            Gå til oppgaveliste
          </LoadingLink>
          <LoadingLink asButtonVariant="secondary" to={`/person/${oppgave.person.id}/oversikt`}>
            Gå til personoversikt
          </LoadingLink>
          <Button variant="secondary" onClick={() => setKaffepause(true)}>
            Ta en kaffepause
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
