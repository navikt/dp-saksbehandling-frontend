import { Button, Detail, Modal, Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { type ChangeEvent, useEffect, useRef } from "react";
import { useFetcher, useLocation } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useOppgave } from "~/hooks/useOppgave";
import { lagreNotatAction } from "~/server-side-actions/lagre-notat-action";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentTekstForReturnerTilSaksbehandlerÅrsak } from "~/utils/tekst.utils";
import { isAlert, isILagreNotatResponse } from "~/utils/type-guards";
import { hentValideringForReturnerTilSaksbehandler } from "~/utils/validering.util";

import { components } from "../../../openapi/saksbehandling-typer";

export function OppgaveReturnerTilSaksbehandler() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { pathname } = useLocation();
  const { addAlert } = useGlobalAlerts();
  const { oppgave } = useOppgave();
  const { notat, setNotat } = useBeslutterNotat();
  const lagreNotatFetcher = useFetcher<typeof lagreNotatAction>();
  const debouncedLagreNotatFetcher = useDebounceCallback(lagreNotatFetcher.submit, 2000);

  const returnerTilSaksbehandlerForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForReturnerTilSaksbehandler(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "returner-oppgave-til-saksbehandler",
      oppgaveId: oppgave.oppgaveId,
      notat: notat.tekst,
      årsak: "" as unknown as components["schemas"]["ReturnerTilSaksbehandlingAarsak"],
    },
  });

  useEffect(() => {
    if (lagreNotatFetcher.data) {
      if (isILagreNotatResponse(lagreNotatFetcher.data)) {
        returnerTilSaksbehandlerForm.field("notat").setValue(notat.tekst);
        setNotat({ ...notat, sistEndretTidspunkt: lagreNotatFetcher.data.sistEndretTidspunkt });
      }

      if (isAlert(lagreNotatFetcher.data)) {
        addAlert(lagreNotatFetcher.data);
      }
    }
  }, [lagreNotatFetcher.data]);

  useEffect(() => {
    returnerTilSaksbehandlerForm.field("notat").setValue(notat.tekst);
  }, [notat.tekst]);

  function lagreNotat(event: ChangeEvent<HTMLTextAreaElement>) {
    const nyVerdi = event.currentTarget.value;
    setNotat({ ...notat, tekst: nyVerdi });
    if (returnerTilSaksbehandlerForm.field("notat").error()) {
      returnerTilSaksbehandlerForm.field("notat").clearError();
    }

    debouncedLagreNotatFetcher(
      { _action: "lagre-notat", notat: nyVerdi, oppgaveId: oppgave.oppgaveId },
      { method: "post", action: pathname },
    );

    if (nyVerdi === oppgave.notat?.tekst) {
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
      <Button size="small" variant="secondary" onClick={() => modalRef.current?.showModal()}>
        Returner til saksbehandler
      </Button>

      <Modal ref={modalRef} header={{ heading: "Returner til saksbehandler" }}>
        <Modal.Body>
          <Textarea
            {...returnerTilSaksbehandlerForm.getInputProps("notat")}
            size={"small"}
            className="mt-4"
            value={notat.tekst}
            onChange={lagreNotat}
            onBlur={handleOnBlur}
            resize="vertical"
            label={"Notat til saksbehandler"}
            description={"Notat vil være synlig for bruker ved innsyn. "}
            error={returnerTilSaksbehandlerForm.field("notat").error()}
          />

          <RadioGroup
            className={"mt-2"}
            {...returnerTilSaksbehandlerForm.getInputProps("årsak")}
            size="small"
            error={returnerTilSaksbehandlerForm.field("årsak").error()}
            legend="Velg årsak"
          >
            {oppgave.lovligeEndringer.returnerTilSaksbehandlingAarsaker.map((årsak) => (
              <Radio key={årsak} value={årsak}>
                {hentTekstForReturnerTilSaksbehandlerÅrsak(årsak)}
              </Radio>
            ))}
          </RadioGroup>

          {notat.sistEndretTidspunkt && (
            <Detail textColor="subtle">
              Sist lagret: {formaterTilNorskDato(notat.sistEndretTidspunkt, true)}
            </Detail>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            type="button"
            onClick={() => returnerTilSaksbehandlerForm.submit()}
            loading={returnerTilSaksbehandlerForm.formState.isSubmitting}
          >
            Returner til saksbehandler
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Ikke returner
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
