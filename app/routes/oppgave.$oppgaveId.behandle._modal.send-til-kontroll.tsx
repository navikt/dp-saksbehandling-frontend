import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { sendOppgaveTilKontroll } from "~/models/oppgave.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { logger } from "~/utils/logger.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const response = await sendOppgaveTilKontroll(request, params.oppgaveId);
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", getAlertMessage({ name: "send-til-kontroll", httpCode: response.status }));

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

    return redirect(`/oppgave/${params.oppgaveId}/behandle`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return redirect(`../fullfort-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function SendTilKontroll() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const navigate = useNavigate();

  return (
    <>
      <Modal.Header>
        <Heading size={"medium"}>Send til kontroll</Heading>
      </Modal.Header>

      <Modal.Body>
        <BodyLong>Du er i ferd med å sende oppgaven til kontroll</BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <Button size="small" type="button" variant="secondary" onClick={() => navigate(-1)}>
          Avbryt
        </Button>

        <Form method="post">
          <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
          <input hidden={true} readOnly={true} name="personIdent" value={oppgave.person.ident} />

          <Button size="small" variant="primary">
            Ja
          </Button>
        </Form>
      </Modal.Footer>
    </>
  );
}
