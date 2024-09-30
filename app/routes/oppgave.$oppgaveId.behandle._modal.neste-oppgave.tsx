import { Button, Heading, Modal } from "@navikt/ds-react";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { RemixLink } from "~/components/RemixLink";
import { commitSession, getSession } from "~/sessions";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { hentNesteOppgave, type IOppgave } from "~/models/oppgave.server";
import { logger } from "~/utils/logger.utils";
import { getAlertMessage } from "~/utils/alert-message.utils";

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

  return (
    <>
      <Modal.Header>
        <Heading size="small">{alert?.title}</Heading>
      </Modal.Header>

      <Modal.Footer>
        <RemixLink asButtonVariant={"secondary"} size="small" to={"/"}>
          Oppgaveliste
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
