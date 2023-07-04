import { TrashIcon } from "@navikt/aksel-icons";
import { Alert, Button, Heading, Modal } from "@navikt/ds-react";
import { Form, useActionData } from "@remix-run/react";
import classNames from "classnames";
import { ValidatedForm, useIsSubmitting } from "remix-validated-form";
import { validatorAktivitet } from "~/utils/validering.util";
import { AktivitetRadio } from "../aktivitet-radio/AktivitetRadio";
import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";
import { FormattedDate } from "../FormattedDate";
import { useEffect, useState } from "react";
import { type TAktivitetstype } from "~/models/aktivitet.server";
import { hentAktivitetITimer } from "~/utils/aktivitet.utils";
import { AktivitetTekstfelt } from "../aktivitet-tekstfelt/AktivitetTekstfelt";

import styles from "./AktivitetModal.module.css";

interface IProps {
  rapporteringsperiode: IRapporteringsperiode;
  dato: string | undefined;
  modalAapen: boolean;
  lukkModal: () => void;
}

export function AktivitetModal(props: IProps) {
  const { rapporteringsperiode, dato, modalAapen, lukkModal } = props;
  const actionData = useActionData();
  const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetstype | string>("");
  const isSubmitting = useIsSubmitting("send-aktivitet");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dag = rapporteringsperiode.dager.find((rapporteringsdag) => rapporteringsdag.dato === dato);

  function hentSlettKnappTekst() {
    const aktivitet = dag && dag.aktiviteter[0];
    const timer = dag && aktivitet && hentAktivitetITimer(dag, aktivitet.type);

    if (aktivitet?.type === "Arbeid") {
      return `${aktivitet.type} ${timer} timer`;
    }

    return `${aktivitet?.type}`;
  }

  useEffect(() => {
    Modal.setAppElement("#dp-saksbehandling-frontend");
  }, []);

  useEffect(() => {
    if (isSubmitting) {
      setHasSubmitted(true);
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (actionData && actionData.aktivitetSuccess && hasSubmitted) {
      setHasSubmitted(false);
      lukkModal();
    }
  }, [actionData, modalAapen, lukkModal, hasSubmitted]);

  return (
    <Modal
      aria-labelledby="modal-heading"
      aria-label="Rapporter aktivitet"
      open={modalAapen}
      onClose={() => lukkModal()}
    >
      <Modal.Content>
        {dag && (
          <Heading
            spacing
            level="1"
            size="medium"
            id="modal-heading"
            className={styles.modalHeader}
          >
            <FormattedDate date={dag?.dato} />
          </Heading>
        )}

        {actionData?.aktivitetError && (
          <Alert variant="error" className="my-3">
            Det skjedde en feil.
          </Alert>
        )}

        {dag?.aktiviteter.map((aktivitet) => (
          <Form key={aktivitet.id} method="post">
            <input type="hidden" name="periodeId" defaultValue={rapporteringsperiode.id} />
            <input type="hidden" name="aktivitetId" defaultValue={aktivitet.id} />
            <button
              type="submit"
              name="submit"
              value="slette"
              className={classNames(styles.slettKnapp, styles[aktivitet.type])}
            >
              {hentSlettKnappTekst()}
              <TrashIcon title="a11y-title" fontSize="1.5rem" />
            </button>
          </Form>
        ))}

        {dag?.muligeAktiviteter && (
          <ValidatedForm
            method="post"
            validator={validatorAktivitet(valgtAktivitet)}
            id="send-aktivitet"
          >
            <input type="hidden" name="periodeId" value={rapporteringsperiode.id} />
            <input type="hidden" name="dato" value={dag.dato} />

            <div className={styles.aktivitetKontainer}>
              <AktivitetRadio
                name="aktivitetstype"
                muligeAktiviteter={dag.muligeAktiviteter}
                verdi={valgtAktivitet}
                onChange={(aktivitet: string) => setValgtAktivitet(aktivitet)}
              />
            </div>

            {valgtAktivitet === "Arbeid" && (
              <AktivitetTekstfelt name="timer" label="Antall timer:" />
            )}

            <div className="knapperad knapperad-hoyrestilt">
              <Button type="submit" name="submit">
                Lagre
              </Button>
            </div>
          </ValidatedForm>
        )}
      </Modal.Content>
    </Modal>
  );
}
