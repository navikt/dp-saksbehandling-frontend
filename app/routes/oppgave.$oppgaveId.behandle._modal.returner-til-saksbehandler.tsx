import { BodyLong, Button, Heading, Modal, Textarea } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { Form, useNavigate } from "@remix-run/react";
import { logger } from "~/utils/logger.utils";
import { returnerOppgaveTilSaksbehandler } from "~/models/oppgave.server";
import invariant from "tiny-invariant";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const response = await returnerOppgaveTilSaksbehandler(request, params.oppgaveId);
  const session = await getSession(request.headers.get("Cookie"));
  session.flash(
    "alert",
    getAlertMessage({ name: "returner-til-saksbehandler", httpCode: response.status }),
  );

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

    return redirect(`/oppgave/${params.oppgaveId}/behandle`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return redirect(`../neste-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function ReturnerTilSaksbehandler() {
  const navigate = useNavigate();

  return (
    <>
      <Modal.Header>
        <Heading size={"medium"}>Send tilbake til saksbehandler</Heading>
      </Modal.Header>

      <Modal.Body>
        <BodyLong>Du er i ferd med å returnere oppgaven tilbake til saksbehandler.</BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <Form method="post">
          <Textarea className={"mb-6"} label={"Begrunnelse"} name="begrunnelse" required />

          <Button
            className="mr-2"
            size="small"
            type="button"
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            Avbryt
          </Button>

          <Button size="small" variant="primary" type="submit">
            Ja
          </Button>
        </Form>
      </Modal.Footer>
    </>
  );
}
