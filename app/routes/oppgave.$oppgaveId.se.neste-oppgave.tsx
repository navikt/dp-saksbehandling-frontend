import { Button, Heading, Modal } from "@navikt/ds-react";
import { useRef } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { Form, useLoaderData, useNavigation } from "react-router";

import { RemixLink } from "~/components/RemixLink";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { oppgaverTilBehandlingDefaultParams } from "~/routes/_index";
import { handleActions } from "~/server-side-actions/handle-actions";
import { getSession } from "~/sessions";
import { convertToQueryParamString } from "~/utils/url.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return { alert };
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
        <RemixLink
          asButtonVariant={"secondary"}
          size="small"
          to={`/?${convertToQueryParamString(oppgaverTilBehandlingDefaultParams)}`}
        >
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
