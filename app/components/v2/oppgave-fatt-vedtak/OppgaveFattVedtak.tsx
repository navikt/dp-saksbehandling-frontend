import { BodyLong, Button, Modal } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useRef } from "react";
import { useLocation } from "react-router";

import { usePrøvingsdato } from "~/hooks/usePrøvingsdato";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import {
  formaterOpplysningVerdiV2,
  hentOpplysningsperiodePåPrøvingsdato,
} from "~/utils/opplysning.utils";
import { hentValideringForFattVedtak } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["BehandlingsresultatV2"];
}

export function OppgaveFattVedtak({ behandling }: IProps) {
  const { pathname } = useLocation();
  const { oppgaveId } = useTypeSafeParams();
  const { prøvingsdato } = usePrøvingsdato(behandling);
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

  if (!prøvingsdato) {
    return null;
  }

  const harLøpendeRettPåDagpengerPeriode = hentOpplysningsperiodePåPrøvingsdato(
    behandling.opplysninger,
    "01990a09-0eab-7957-b88f-14484a50e194",
    prøvingsdato.toISOString(),
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
                {formaterOpplysningVerdiV2(harLøpendeRettPåDagpengerPeriode.verdi) === "Ja"
                  ? "Innvilgelse"
                  : "Avslag"}
              </strong>
            </BodyLong>
          )}
        </Modal.Body>

        <Modal.Footer>
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
            loading={fattVedtakForm.formState.isSubmitting}
            onClick={() => fattVedtakForm.submit()}
          >
            Ja
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
