import { Button, Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  data,
  Form,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigation,
} from "react-router";

import { RemixLink } from "~/components/RemixLink";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
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
  const { state } = useNavigation();
  const { alert } = useLoaderData<typeof loader>();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <div className="flex flex-grow flex-col">
      <div className="card flex flex-grow-1 flex-col items-center gap-8 pt-16">
        <span className="text-7xl">🫡</span>
        <Heading size="xlarge">{alert?.title}</Heading>

        <div className="flex gap-6">
          <Form method="post">
            <input name="_action" value="hent-neste-oppgave" hidden={true} readOnly={true} />
            <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
            <Button variant="primary" loading={state !== "idle"} disabled={state !== "idle"}>
              Neste oppgave
            </Button>
          </Form>
        </div>
        <div className="flex gap-6">
          <RemixLink asButtonVariant={"secondary"} to={`/?${aktivtOppgaveSok}`}>
            Gå til oppgaveliste
          </RemixLink>
          <RemixLink asButtonVariant="secondary" to={`/person/${oppgave.person.id}/oversikt`}>
            Gå til personoversikt
          </RemixLink>
        </div>
      </div>
    </div>
  );
}
