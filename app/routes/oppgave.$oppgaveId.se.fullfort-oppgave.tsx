import { BodyShort, Button, Heading, Modal } from "@navikt/ds-react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useRef } from "react";

import { KonfettiKanon } from "~/components/konfetti-kanon/KonfettiKanon";
import { RemixLink } from "~/components/RemixLink";
import styles from "~/route-styles/oppgave.module.css";
import { oppgaverTilBehandlingDefaultParams } from "~/routes/_index";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { convertToQueryParamString } from "~/utils/url.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return json(
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
      <Modal.Header className={styles.modalCenterHeader} closeButton={false}>
        <Heading size={"medium"}>Fullført!</Heading>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        <KonfettiKanon />
        <BodyShort>{alert?.title}</BodyShort>
      </Modal.Body>

      <Modal.Footer>
        <RemixLink
          asButtonVariant={"secondary"}
          size="small"
          to={`/?${convertToQueryParamString(oppgaverTilBehandlingDefaultParams)}`}
        >
          Oppgaveliste
        </RemixLink>

        <Button size="small" variant="secondary">
          TODO FIKS Kaffepause
        </Button>

        <Form method="post">
          <input name="_action" value="hent-neste-oppgave" hidden={true} readOnly={true} />
          <Button
            variant="primary"
            size="small"
            loading={navigation.state !== "idle"}
            disabled={navigation.state !== "idle"}
          >
            Neste oppgave
          </Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
}
