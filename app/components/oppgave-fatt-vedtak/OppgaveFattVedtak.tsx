import { BodyLong, Button, InlineMessage, Modal, Tag } from "@navikt/ds-react";
import { AkselColor } from "@navikt/ds-react/types/theme";
import { useForm } from "@rvf/react-router";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import { useBehandling } from "~/hooks/useBehandling";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { isAlert } from "~/utils/type-guards";
import { hentValideringForFattVedtak } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

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
          <BodyLong>
            Du er i ferd med å fatte vedtak med utfall:
            <div>
              <Tag
                size={"xsmall"}
                data-color={hentTagFargeForForslag(behandling.forslagOm)}
                className={"whitespace-nowrap"}
              >
                {behandling.forslagOm}
              </Tag>
            </div>
          </BodyLong>
        </Modal.Body>

        <Modal.Footer>
          <Button
            size="small"
            variant="primary"
            loading={fattVedtakForm.formState.isSubmitting}
            onClick={() => fattVedtakForm.submit()}
          >
            Fatt vedtak
          </Button>

          <Button
            size="small"
            type="button"
            variant="secondary"
            onClick={() => modalRef.current?.close()}
          >
            Ikke fatt vedtak
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function hentTagFargeForForslag(forslag: components["schemas"]["Avgj\u00F8relse"]): AkselColor {
  switch (forslag) {
    case "Innvilgelse":
      return "success";
    case "Avslag":
      return "danger";
    case "Stans":
      return "success";
    case "Gjenopptak":
      return "success";
    case "Endring":
      return "info";
  }
}
