import { BodyShort, Button, Heading, Modal } from "@navikt/ds-react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { useRef, useState } from "react";

import { KonfettiKanon } from "~/components/konfetti-kanon/KonfettiKanon";
import { RemixLink } from "~/components/RemixLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import styles from "~/route-styles/oppgave.module.css";
import { oppgaverTilBehandlingDefaultParams } from "~/routes/_index";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { getEnv } from "~/utils/env.utils";
import { isAlert } from "~/utils/type-guards";
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
  const [kaffepuase, setKaffepause] = useState(false);
  const actionData = useActionData<typeof action>();
  const { aktivtOppgaveSok } = useSaksbehandler();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <Modal
      closeOnBackdropClick={false}
      aria-label={""}
      open={true}
      onClose={() => undefined}
      onCancel={(e) => e.preventDefault()}
      ref={ref}
    >
      {kaffepuase && <Kaffepause setKaffepause={setKaffepause} />}
      {!kaffepuase && (
        <>
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

            <Button size="small" variant="secondary" onClick={() => setKaffepause(true)}>
              Kaffepause
            </Button>

            <Form method="post">
              <input name="_action" value="hent-neste-oppgave" hidden={true} readOnly={true} />
              <input
                name="aktivtOppgaveSok"
                value={aktivtOppgaveSok}
                hidden={true}
                readOnly={true}
              />
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
        </>
      )}
    </Modal>
  );
}

interface IKaffepauseProps {
  setKaffepause: (value: boolean) => void;
}

function Kaffepause(props: IKaffepauseProps) {
  const [kattNummer, setKattNummer] = useState(hentTilfeldigNummer());

  function hentNyKatt() {
    setKattNummer((prevNummer) => {
      let nyttNummer;
      do {
        nyttNummer = hentTilfeldigNummer();
      } while (nyttNummer === prevNummer);
      return nyttNummer;
    });
  }

  return (
    <>
      <Modal.Header className={styles.modalCenterHeader} closeButton={false}>
        <Heading size={"medium"}>Katt til kaffen ☕️</Heading>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        <img src={`${getEnv("BASE_PATH")}/katter/cat${kattNummer}.gif`} alt={""} />
      </Modal.Body>

      <Modal.Footer>
        <Button size="small" variant="secondary" onClick={() => hentNyKatt()}>
          Ny katt
        </Button>
        <Button size="small" variant="primary" onClick={() => props.setKaffepause(false)}>
          Nok kaffe
        </Button>
      </Modal.Footer>
    </>
  );
}

function hentTilfeldigNummer() {
  return Math.floor(Math.random() * 8) + 1;
}
