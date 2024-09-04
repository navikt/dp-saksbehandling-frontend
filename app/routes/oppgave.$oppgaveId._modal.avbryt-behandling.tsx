import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { avbrytBehandling } from "~/models/behandling.server";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { Form, useNavigate } from "@remix-run/react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { logger } from "~/utils/logger.utils";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const behandlingId = formData.get("behandlingId") as string;
  const personIdent = formData.get("personIdent") as string;

  const response = await avbrytBehandling(request, behandlingId, personIdent);
  const session = await getSession(request.headers.get("Cookie"));
  session.flash("alert", getAlertMessage({ name: "avbryt-behandling", httpCode: response.status }));

  if (!response.ok) {
    logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

    return redirect(`/oppgave/${params.oppgaveId}`, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return redirect(`/`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function AvbrytBehandling() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const navigate = useNavigate();

  return (
    <>
      <Modal.Header>
        <Heading size={"medium"}>Send til Arena</Heading>
      </Modal.Header>

      <Modal.Body>
        <BodyLong>Du er i ferd med å sende oppgaven til Arena</BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <Button size="small" type="button" variant="secondary" onClick={() => navigate(-1)}>
          Avbryt
        </Button>

        <Form method="post">
          <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
          <input hidden={true} readOnly={true} name="personIdent" value={oppgave.personIdent} />

          <Button size="small" variant="primary">
            Ja
          </Button>
        </Form>
      </Modal.Footer>
    </>
  );
}
