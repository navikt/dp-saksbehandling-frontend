import { BodyLong, Button, Detail, Heading, Modal, Textarea } from "@navikt/ds-react";
import type { ActionFunctionArgs, SerializeFrom } from "@remix-run/node";
import { Form, useActionData, useNavigate, useNavigation } from "@remix-run/react";
import { type ChangeEvent, useEffect } from "react";
import { useDebounceFetcher } from "remix-utils/use-debounce-fetcher";

import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterNorskDato } from "~/utils/dato.utils";
import { isFormValidationError, isILagreNotatResponse } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function ReturnerTilSaksbehandler() {
  const { state } = useNavigation();
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { notat, setNotat } = useBeslutterNotat();
  const lagreNotatFetcher = useDebounceFetcher<SerializeFrom<typeof action>>();

  useEffect(() => {
    if (lagreNotatFetcher.data && isILagreNotatResponse(lagreNotatFetcher.data)) {
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

        <lagreNotatFetcher.Form method="post">
          <input name="_action" value="lagre-notat" hidden={true} readOnly={true} />
          <input name="oppgave-id" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
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
            error={isFormValidationError(actionData) && <>{actionData.message}</>}
          />
          {notat.sistEndretTidspunkt && (
            <Detail textColor="subtle">
              Sist lagret: {formaterNorskDato(notat.sistEndretTidspunkt, true)}
            </Detail>
          )}
        </lagreNotatFetcher.Form>

        <Form method="post">
          <input
            name="_action"
            value="returner-oppgave-til-saksbehandler"
            hidden={true}
            readOnly={true}
          />
          <input name="notat" value={notat.tekst} hidden={true} readOnly={true} />
          <Button
            className="mr-2 mt-6"
            size="small"
            type="button"
            variant="secondary"
            onClick={() => navigate(-1)}
            loading={state !== "idle"}
          >
            Avbryt
          </Button>

          <Button size="small" variant="primary" type="submit" loading={state !== "idle"}>
            Ja
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
