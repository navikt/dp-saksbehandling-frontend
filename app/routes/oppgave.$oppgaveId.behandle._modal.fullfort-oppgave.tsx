import { BodyShort, Button, Heading, Modal } from "@navikt/ds-react";
import { Form, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import { KonfettiKanon } from "~/components/konfetti-kanon/KonfettiKanon";
import { RemixLink } from "~/components/RemixLink";
import { commitSession, getSession } from "~/sessions";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import styles from "~/route-styles/oppgave.module.css";
import { hentNesteOppgave, type IOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { hentStatistikkForSaksbehandler } from "~/models/statistikk.server";

export async function action({ request, params }: ActionFunctionArgs) {
  const response = await hentNesteOppgave(request);

  if (response.ok) {
    const oppgave = (await response.json()) as IOppgave;
    return redirect(`/oppgave/${oppgave.oppgaveId}/behandle`);
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

  const session = await getSession(request.headers.get("Cookie"));
  session.flash(
    "alert",
    getAlertMessage({ name: "hent-neste-oppgave", httpCode: response.status }),
  );

  if (response.status === 404) {
    return redirect(`/`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return redirect(`/oppgave/${params.oppgaveId}/behandle`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const statistikk = await hentStatistikkForSaksbehandler(request);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return json(
    { alert, statistikk },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function NesteOppgave() {
  const fetcher = useFetcher<typeof action>();
  const { alert } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <>
      <Modal.Header className={styles.modalCenterHeader}>
        <Heading size={"medium"}>Fullført!</Heading>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        <KonfettiKanon />
        <BodyShort>{alert?.title}</BodyShort>
        {/*<div className={styles.modalStatistikk}>*/}
        {/*  <span className={styles.modalIcon}>📊</span>*/}
        {/*  <BodyLong>*/}
        {/*    Du har behandlet{" "}*/}
        {/*    <b>{`${statistikk.dag} ${statistikk.dag === 1 ? "oppgave" : "oppgaver"}`}</b> i dag og*/}
        {/*    totalt <b>{`${statistikk.uke} ${statistikk.uke === 1 ? "oppgave" : "oppgaver"}`}</b>{" "}*/}
        {/*    denne uken.*/}
        {/*  </BodyLong>*/}
        {/*</div>*/}
      </Modal.Body>

      <Modal.Footer>
        <RemixLink asButtonVariant={"secondary"} size="small" to={"/"}>
          Oppgaveliste
        </RemixLink>

        <RemixLink
          asButtonVariant={"secondary"}
          size="small"
          to={"../kaffepause"}
          loading={navigation.state === "loading"}
        >
          Kaffepause
        </RemixLink>

        <Form method="post">
          <Button
            variant="primary"
            size="small"
            loading={fetcher.state !== "idle"}
            disabled={fetcher.state !== "idle"}
          >
            Neste oppgave
          </Button>
        </Form>
      </Modal.Footer>
    </>
  );
}
