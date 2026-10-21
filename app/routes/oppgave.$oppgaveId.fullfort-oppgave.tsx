import { BodyShort, Button, Heading } from "@navikt/ds-react";
import { useState } from "react";
import {
  ActionFunctionArgs,
  data,
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
import { useAktivOppgavelisteSok, useAktivOppgavelisteUrl } from "~/hooks/useAktivOppgaveliste";
import { useAktivtOppgaveSokKilde } from "~/hooks/useAktivtOppgaveSok";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useHentNesteOppgave } from "~/hooks/useHentNesteOppgave";
import { useOppgave } from "~/hooks/useOppgave";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    { alert },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function NesteOppgave() {
  const navigation = useNavigation();
  const { alert } = useLoaderData<typeof loader>();
  const { oppgave } = useOppgave();
  const [kaffepause, setKaffepause] = useState(false);
  const actionData = useActionData<typeof action>();
  const aktivtOppgaveSok = useAktivOppgavelisteSok();
  const kilde = useAktivtOppgaveSokKilde();
  const oppgavelisteUrl = useAktivOppgavelisteUrl();
  const { hentNesteOppgave, henterNesteOppgave } = useHentNesteOppgave(aktivtOppgaveSok, kilde);
  const venter = henterNesteOppgave || navigation.state !== "idle";

  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="card">
      <Kaffepause kaffepause={kaffepause} setKaffepause={setKaffepause} />
      <div className={"mx-auto flex max-w-[650px] flex-col items-center gap-8 py-16"}>
        <KonfettiKanon />
        <Heading size="xlarge">Fullført!</Heading>
        <BodyShort>{alert?.title}</BodyShort>

        <div className={"flex flex-col items-center"}>
          <Button
            className={"w-max"}
            variant="primary"
            onClick={hentNesteOppgave}
            loading={venter}
            disabled={venter}
          >
            Start neste oppgave
          </Button>
          <AktivOppgaveSøk aktivtOppgaveSok={aktivtOppgaveSok} />
        </div>

        <div className="flex gap-6">
          <LoadingLink asButtonVariant={"secondary"} to={oppgavelisteUrl}>
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
