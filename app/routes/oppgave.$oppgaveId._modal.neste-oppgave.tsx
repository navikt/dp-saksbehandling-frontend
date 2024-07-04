import { BodyShort, Button, Heading, Modal } from "@navikt/ds-react";
import { Form, useFetcher, useLoaderData, useNavigation } from "@remix-run/react";
import { KonfettiKanon } from "~/components/konfetti-kanon/KonfettiKanon";
import { RemixLink } from "~/components/RemixLink";
import { CoffeeLoader } from "~/components/coffee-loader/CoffeeLoader";
import { commitSession, getSession } from "~/sessions";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import styles from "~/route-styles/oppgave.module.css";
import { hentNesteOppgave, type IOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  const response = await hentNesteOppgave(request);

  if (response.ok) {
    const oppgave = (await response.json()) as IOppgave;
    return redirect(`/oppgave/${oppgave.oppgaveId}`);
  }

  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

  const session = await getSession(request.headers.get("Cookie"));
  session.flash(
    "alert",
    getAlertMessage({ name: "hent-neste-oppgave", httpCode: response.status }),
  );

  return redirect(`/oppgave/${params.oppgaveId}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
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
  const fetcher = useFetcher<typeof action>();
  const { alert } = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <>
      <Modal.Header className={styles.modalCenterHeader}>
        <Heading size={"medium"}>Fullført!</Heading>
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        {navigation.state !== "loading" && (
          <>
            <KonfettiKanon />
            <BodyShort>{alert?.title}</BodyShort>
          </>
        )}
        {navigation.state === "loading" && <CoffeeLoader />}
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
