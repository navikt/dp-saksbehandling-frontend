import { Button, Heading, Modal } from "@navikt/ds-react";
import { useRef } from "react";
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
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <Modal
      closeOnBackdropClick={false}
      aria-label={""}
      open={true}
      width={"small"}
      onClose={() => undefined}
      onCancel={(e) => e.preventDefault()}
      ref={ref}
    >
      <Modal.Header closeButton={false}>
        <Heading size="small">{alert?.title}</Heading>
      </Modal.Header>

      <Modal.Footer>
        <RemixLink asButtonVariant={"secondary"} size="small" to={`/?${aktivtOppgaveSok}`}>
          Oppgaveliste
        </RemixLink>

        <Form method="post">
          <input name="_action" value="hent-neste-oppgave" hidden={true} readOnly={true} />
          <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
          <Button
            variant="primary"
            size="small"
            loading={state !== "idle"}
            disabled={state !== "idle"}
          >
            Neste oppgave
          </Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
}
