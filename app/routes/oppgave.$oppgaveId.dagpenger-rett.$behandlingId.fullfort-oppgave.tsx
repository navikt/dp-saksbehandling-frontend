import { BodyShort, Button, Heading, Modal } from "@navikt/ds-react";
import { useRef, useState } from "react";
import {
  ActionFunctionArgs,
  data,
  Form,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";

import { KonfettiKanon } from "~/components/konfetti-kanon/KonfettiKanon";
import { RemixLink } from "~/components/RemixLink";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { getEnv } from "~/utils/env.utils";
import { isAlert } from "~/utils/type-guards";

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
  const navigation = useNavigation();
  const { alert } = useLoaderData<typeof loader>();
  const [kaffepause, setKaffepause] = useState(false);
  const actionData = useActionData<typeof action>();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="flex flex-grow flex-col">
      <div className="card flex flex-grow-1 flex-col items-center gap-8 pt-16">
        <Kaffepause kaffepause={kaffepause} setKaffepause={setKaffepause} />
        <>
          <KonfettiKanon />
          <Heading size="xlarge">Fullført!</Heading>
          <BodyShort>{alert?.title}</BodyShort>

          <Form method="post">
            <input name="_action" value="hent-neste-oppgave" hidden={true} readOnly={true} />
            <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
            <Button
              variant="primary"
              loading={navigation.state !== "idle"}
              disabled={navigation.state !== "idle"}
            >
              Start neste oppgave
            </Button>
          </Form>
          <div className="flex gap-6">
            <RemixLink asButtonVariant={"secondary"} to={`/?${aktivtOppgaveSok}`}>
              Gå til oppgaveliste
            </RemixLink>
            <RemixLink asButtonVariant="secondary" to={`/person/${oppgave.person.id}/oversikt`}>
              Gå til personoversikt
            </RemixLink>
            <Button variant="secondary" onClick={() => setKaffepause(true)}>
              Ta en kaffepause
            </Button>
          </div>
        </>
      </div>
    </div>
  );
}

interface IKaffepauseProps {
  setKaffepause: (value: boolean) => void;
  kaffepause: boolean;
}

function Kaffepause(props: IKaffepauseProps) {
  const ref = useRef<HTMLDialogElement>(null);
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
    <Modal
      closeOnBackdropClick={false}
      aria-label={""}
      open={props.kaffepause}
      onClose={() => undefined}
      onCancel={(e) => e.preventDefault()}
      ref={ref}
    >
      <>
        <Modal.Header className={styles.modalCenterHeader} closeButton={false}>
          <Heading size={"medium"}>Katt til kaffen ☕️</Heading>
        </Modal.Header>

        <Modal.Body className={styles.modalBody}>
          <img
            src={`${getEnv("IS_LOCALHOST") ? "" : "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client"}/katter/cat${kattNummer}.gif`}
            alt={""}
          />
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
    </Modal>
  );
}

function hentTilfeldigNummer() {
  return Math.floor(Math.random() * 8) + 1;
}
