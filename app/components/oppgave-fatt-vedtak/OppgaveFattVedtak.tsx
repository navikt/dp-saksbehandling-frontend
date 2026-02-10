import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import {
  formaterOpplysningVerdi,
  hentOpplysningsperiodePåPrøvingsdato,
} from "~/utils/opplysning.utils";
import { hentValideringForFattVedtak } from "~/utils/validering.util";

export function OppgaveFattVedtak() {
  const { pathname } = useLocation();
  const { oppgaveId } = useTypeSafeParams();
  const { behandling, sistePrøvingsdato } = useBehandling();
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

  if (!sistePrøvingsdato) {
    return null;
  }

  const harLøpendeRettPåDagpengerPeriode = hentOpplysningsperiodePåPrøvingsdato(
    behandling.opplysninger,
    "01990a09-0eab-7957-b88f-14484a50e194",
    sistePrøvingsdato.toISOString(),
  );

  return (
    <>
      <Button size="small" onClick={() => modalRef.current?.showModal()}>
        Fatt vedtak
      </Button>

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
