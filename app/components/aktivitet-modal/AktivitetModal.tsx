import { TrashIcon } from "@navikt/aksel-icons";
import { Alert, Button, Heading, Modal } from "@navikt/ds-react";
import { Form, useActionData } from "@remix-run/react";
import classNames from "classnames";
import { ValidatedForm } from "remix-validated-form";
import { validatorAktivitet } from "~/utils/validering.util";
import { AktivitetRadio } from "../aktivitet-radio/AktivitetRadio";
import { type IRapporteringsperiodeDag } from "~/models/rapporteringsperiode.server";
import { FormattedDate } from "../FormattedDate";
import { useEffect, useState } from "react";
import { type TAktivitetstype } from "~/models/aktivitet.server";
import { hentAktivitetITimer } from "~/utils/aktivitet.utils";
import { AktivitetTekstfelt } from "../aktivitet-tekstfelt/AktivitetTekstfelt";

import styles from "./AktivitetModal.module.css";

interface IProps {
  periodeId: string;
  dag: IRapporteringsperiodeDag | undefined;
  modalAapen: boolean;
  lukkModal: () => void;
}

export function AktivitetModal(props: IProps) {
  const { periodeId, dag, modalAapen, lukkModal } = props;
  const actionData = useActionData();
  const [valgtAktivitet, setValgtAktivitet] = useState<TAktivitetstype | string>("");

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

        {dag?.aktiviteter.map((aktivitet) => (
          <Form key={aktivitet.id} method="post">
            <input type="hidden" name="periodeId" defaultValue={periodeId} />
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
          <ValidatedForm method="post" validator={validatorAktivitet(valgtAktivitet)}>
            <input type="hidden" name="periodeId" value={periodeId} />
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

            {actionData?.error && (
              <Alert variant="error" className={styles.feilmelding}>
                {actionData.error}
              </Alert>
            )}

            <div className={styles.knappKontainer}>
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
