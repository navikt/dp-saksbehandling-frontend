import { BodyLong, Button, Detail, Heading, Modal, Select, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { type ChangeEvent, useEffect, useRef } from "react";
import { useFetcher, useLocation } from "react-router";
import { useDebounceCallback } from "usehooks-ts";

import { gyldigBegrunnelse, gyldigeBegrunnelser } from "~/const";
import { useBeslutterNotat } from "~/hooks/useBeslutterNotat";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useOppgave } from "~/hooks/useOppgave";
import { lagreNotatAction } from "~/server-side-actions/lagre-notat-action";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentTekstForBegrunnelse } from "~/utils/tekst.utils";
import { isAlert, isILagreNotatResponse } from "~/utils/type-guards";
import { v2hentValideringForReturnerTilSaksbehandler } from "~/utils/validering.util";

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
    schema: v2hentValideringForReturnerTilSaksbehandler(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "returner-oppgave-til-saksbehandler",
      oppgaveId: oppgave.oppgaveId,
      notat: notat.tekst,
      begrunnelse: "" as unknown as gyldigBegrunnelse,
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

      <Modal ref={modalRef} header={{ heading: "Send tilbake til saksbehandler" }}>
        <Modal.Body>
          <BodyLong>Du er i ferd med å returnere oppgaven tilbake til saksbehandler.</BodyLong>

          <Textarea
            {...returnerTilSaksbehandlerForm.getInputProps("notat")}
            size={"small"}
            className="mt-4"
            value={notat.tekst}
            onChange={lagreNotat}
            onBlur={handleOnBlur}
            resize="vertical"
            label={
              <>
                <Heading size="small">Melding</Heading>
                <Detail textColor="subtle">Notat vil være synlig for bruker ved innsyn. </Detail>
              </>
            }
            error={returnerTilSaksbehandlerForm.field("notat").error()}
          />

          <Select
            {...returnerTilSaksbehandlerForm.getInputProps("begrunnelse")}
            className={"mt-8"}
            label="Begrunnelse"
            size="small"
            error={returnerTilSaksbehandlerForm.field("begrunnelse").error()}
          >
            <option hidden={true} value={""}>
              Velg begrunnelse
            </option>
            {gyldigeBegrunnelser.map((årsak) => (
              <option key={årsak} value={årsak}>
                {hentTekstForBegrunnelse(årsak)}
              </option>
            ))}
          </Select>

          {notat.sistEndretTidspunkt && (
            <Detail textColor="subtle">
              Sist lagret: {formaterTilNorskDato(notat.sistEndretTidspunkt, true)}
            </Detail>
          )}

          <div className="mt-6 flex gap-2">
            <Button
              size="small"
              type="button"
              variant="secondary"
              onClick={() => modalRef.current?.close()}
            >
              Avbryt
            </Button>

            <Button
              size="small"
              variant="primary"
              type="button"
              onClick={() => returnerTilSaksbehandlerForm.submit()}
              loading={returnerTilSaksbehandlerForm.formState.isSubmitting}
            >
              Ja
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
