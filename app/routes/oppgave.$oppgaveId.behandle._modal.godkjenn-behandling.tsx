import { BodyLong, Button, Heading, Modal } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { godkjennBehandling } from "~/models/behandling.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { Form, useNavigate, useNavigation } from "@remix-run/react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { commitSession, getSession } from "~/sessions";

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const behandlingId = formData.get("behandlingId") as string;
  const personIdent = formData.get("personIdent") as string;

  const response = await godkjennBehandling(request, behandlingId, personIdent);
  const session = await getSession(request.headers.get("Cookie"));
  session.flash(
    "alert",
    getAlertMessage({ name: "godkjenn-behandling", httpCode: response.status }),
  );

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

export default function GodkjennBehandling() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  return (
    <>
      <Modal.Header>
        <Heading size={"medium"}>Automatisk avslag</Heading>
      </Modal.Header>

      <Modal.Body>
        <BodyLong>Du er i ferd med å sende oppgaven til automatisk avslag</BodyLong>
      </Modal.Body>

      <Modal.Footer>
        <Button size="small" type="button" variant="secondary" onClick={() => navigate(-1)}>
          Avbryt
        </Button>

        <Form method="post">
          <input hidden={true} readOnly={true} name="behandlingId" value={oppgave.behandlingId} />
          <input hidden={true} readOnly={true} name="personIdent" value={oppgave.person.ident} />

          <Button size="small" variant="primary" disabled={isSubmitting}>
            Ja
          </Button>
        </Form>
      </Modal.Footer>
    </>
  );
}
