import { BodyLong, Button, InlineMessage, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import {
  formaterOpplysningVerdi,
  hentOpplysningsperiodePåPrøvingsdato,
} from "~/utils/opplysning.utils";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForFattVedtak } from "~/utils/validering.util";

export function OppgaveFattVedtak() {
  const { pathname } = useLocation();
  const { oppgaveId } = useTypeSafeParams();
  const { behandling, sistePrøvingsdato } = useBehandling();
  const { meldingOmVedtak } = useMeldingOmVedtak();
  const { oppgave } = useOppgave();
  const [visFeilmelding, setVisFeilmelding] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const fattVedtakForm = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFattVedtak(),
    onSubmitSuccess: () => modalRef.current?.close(),
    defaultValues: {
      _action: "fatt-vedtak",
      oppgaveId: oppgaveId,
    },
  });

  useEffect(() => {
    setVisFeilmelding(false);
  }, [oppgave.meldingOmVedtakKilde]);

  if (!sistePrøvingsdato) {
    return null;
  }

  const harLøpendeRettPåDagpengerPeriode = hentOpplysningsperiodePåPrøvingsdato(
    behandling.opplysninger,
    "01990a09-0eab-7957-b88f-14484a50e194",
    sistePrøvingsdato.toISOString(),
  );

  function handleOnClick() {
    if (oppgave.meldingOmVedtakKilde === "DP_SAK" && isAlert(meldingOmVedtak)) {
      setVisFeilmelding(true);
    } else {
      modalRef.current?.showModal();
    }
  }

  return (
    <>
      <Button size="small" onClick={() => handleOnClick()}>
        Fatt vedtak
      </Button>

      {visFeilmelding && (
        <InlineMessage status="error">
          Kan ikke fatte vedtak fordi melding om vedtak er feiler. Endre melding om vedtak kilde og
          prøv igjen.
        </InlineMessage>
      )}

      <Modal ref={modalRef} header={{ heading: "Fatt vedtak" }}>
        <Modal.Body>
          {harLøpendeRettPåDagpengerPeriode && (
            <BodyLong>
              Ønsker du å fatte vedtak med utfall{" "}
              <strong>
                {formaterOpplysningVerdi(harLøpendeRettPåDagpengerPeriode.verdi) === "Ja"
                  ? "Innvilgelse"
                  : "Avslag"}
              </strong>
            </BodyLong>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            loading={fattVedtakForm.formState.isSubmitting}
            onClick={() => fattVedtakForm.submit()}
          >
            Ja
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Avbryt
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
