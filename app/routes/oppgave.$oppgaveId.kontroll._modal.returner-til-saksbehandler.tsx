import { BodyLong, Button, Detail, Heading, Modal, Textarea } from "@navikt/ds-react";
import type { ActionFunctionArgs, SerializeFrom } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { type ChangeEvent, useEffect } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";
import invariant from "tiny-invariant";

import type { IFormValidationError } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { returnerOppgaveTilSaksbehandler } from "~/models/oppgave.server";
import type { action as lagreNotatAction } from "~/routes/action-lagre-notat";
import { commitSession, getSession } from "~/sessions";
import { getAlertMessage } from "~/utils/alert-message.utils";
import { formaterNorskDato } from "~/utils/dato.utils";
import { logger } from "~/utils/logger.utils";
import { isFormValidationErrorResponse } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const formData = await request.formData();
  const notat = formData.get("notat") as string;

  if (!notat) {
    const error: IFormValidationError = {
      field: "notat",
      message: "Du må skrive en begrunnelse for å returnere oppgaven til saksbehandler.",
    };

    return json(error);
  }

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

  return redirect(`../../behandle/neste-oppgave`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function ReturnerTilSaksbehandler() {
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { notat, setNotat } = useBeslutterNotat();

  const lagreNotatFetcher = useDebounceFetcher<SerializeFrom<typeof lagreNotatAction>>();

  useEffect(() => {
    if (lagreNotatFetcher.data) {
      setNotat({ ...notat, sistEndretTidspunkt: lagreNotatFetcher.data.sistEndretTidspunkt });
    }
  }, [lagreNotatFetcher.data]);

  function lagreNotat(event: ChangeEvent<HTMLTextAreaElement>, delayInMs: number) {
    setNotat({ ...notat, tekst: event.currentTarget.value });
    lagreNotatFetcher.submit(event.target.form, {
      debounceTimeout: delayInMs,
    });
  }

  return (
    <>
      <Modal.Header>
        <Heading size={"medium"}>Send tilbake til saksbehandler</Heading>
      </Modal.Header>

      <Modal.Body>
        <BodyLong>Du er i ferd med å returnere oppgaven tilbake til saksbehandler.</BodyLong>

        <lagreNotatFetcher.Form method="post" action="/action-lagre-notat">
          <input name={"oppgave-id"} value={oppgave.oppgaveId} hidden={true} readOnly={true} />
          <Textarea
            name="notat"
            className="mt-4"
            value={notat.tekst}
            onChange={(event) => lagreNotat(event, 2000)}
            onBlur={(event) => lagreNotat(event, 0)}
            resize="vertical"
            label={
              <>
                <Heading size="small">Begrunnelse</Heading>
                <Detail textColor="subtle">Notat vil være synlig for bruker ved innsyn. </Detail>
              </>
            }
            error={isFormValidationErrorResponse(actionData) && <>{actionData.message}</>}
          />
          {notat.sistEndretTidspunkt && (
            <Detail textColor="subtle">
              Sist lagret: {formaterNorskDato(notat.sistEndretTidspunkt, true)}
            </Detail>
          )}
        </lagreNotatFetcher.Form>

        <Form method="post">
          <input name={"notat"} value={notat.tekst} hidden={true} readOnly={true} />
          <Button
            className="mr-2 mt-6"
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
      </Modal.Body>
    </>
  );
}
