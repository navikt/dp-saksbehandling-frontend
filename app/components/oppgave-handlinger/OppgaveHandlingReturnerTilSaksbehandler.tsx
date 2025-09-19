import { BodyLong, Button, Detail, Heading, Modal, Textarea } from "@navikt/ds-react";
import { type ChangeEvent, useEffect, useRef } from "react";
import { Form, useActionData, useFetcher, useNavigation } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { lagreNotatAction } from "~/server-side-actions/lagre-notat-action";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isFormValidationError, isILagreNotatResponse } from "~/utils/type-guards";

export function OppgaveHandlingReturnerTilSaksbehandler() {
  const { state } = useNavigation();
  const actionData = useActionData<typeof handleActions>();
  const modalRef = useRef<HTMLDialogElement>(null);
  const { notat, setNotat } = useBeslutterNotat();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const lagreNotatFetcher = useFetcher<typeof lagreNotatAction>();
  const debouncedLagreNotatFetcher = useDebounceCallback(lagreNotatFetcher.submit, 2000);

  useEffect(() => {
    if (lagreNotatFetcher.data && isILagreNotatResponse(lagreNotatFetcher.data)) {
      setNotat({ ...notat, sistEndretTidspunkt: lagreNotatFetcher.data.sistEndretTidspunkt });
    }
  }, [lagreNotatFetcher.data]);

  function lagreNotat(event: ChangeEvent<HTMLTextAreaElement>) {
    setNotat({ ...notat, tekst: event.currentTarget.value });
    debouncedLagreNotatFetcher(event.target.form);

    if (event.currentTarget.value === oppgave.notat?.tekst) {
      debouncedLagreNotatFetcher.cancel();
    }
  }

  function handleOnBlur(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.currentTarget.value !== oppgave.notat?.tekst) {
      debouncedLagreNotatFetcher.flush();
    }
  }

  return (
    <>
      <Button
        size="small"
        variant="secondary"
        onClick={() => modalRef.current?.showModal()}
        loading={state !== "idle"}
      >
        Returner til saksbehandler
      </Button>

      <Modal ref={modalRef} header={{ heading: "Send tilbake til saksbehandler" }}>
        <Modal.Body>
          <BodyLong>Du er i ferd med å returnere oppgaven tilbake til saksbehandler.</BodyLong>

          <lagreNotatFetcher.Form method="post">
            <input name="_action" value="lagre-notat" hidden={true} readOnly={true} />
            <input name="oppgave-id" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
            <Textarea
              name="notat"
              className="mt-4"
              value={notat.tekst}
              onChange={lagreNotat}
              onBlur={handleOnBlur}
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
                Sist lagret: {formaterTilNorskDato(notat.sistEndretTidspunkt, true)}
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
            <input name="behandlingId" value={oppgave.behandlingId} hidden={true} readOnly={true} />
            <input name="notat" value={notat.tekst} hidden={true} readOnly={true} />
            <Button
              className="mt-6 mr-2"
              size="small"
              type="button"
              variant="secondary"
              onClick={() => modalRef.current?.close()}
              loading={state !== "idle"}
            >
              Avbryt
            </Button>

            <Button size="small" variant="primary" type="submit" loading={state !== "idle"}>
              Ja
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
