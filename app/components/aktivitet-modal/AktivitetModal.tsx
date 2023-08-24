import { Alert, Button, Heading, Modal } from "@navikt/ds-react";
import { Form, useActionData } from "@remix-run/react";
import classNames from "classnames";
import { ValidatedForm } from "remix-validated-form";
import { validatorAktivitet } from "~/utils/validering.util";
import { AktivitetRadio } from "../aktivitet-radio/AktivitetRadio";
import { type IRapporteringsperiode } from "~/models/rapporteringsperiode.server";
import { FormattedDate } from "../FormattedDate";
import { useEffect } from "react";
import { type TAktivitetType } from "~/models/aktivitet.server";
import { hentAktivitetITimer } from "~/utils/aktivitet.utils";
import { AktivitetTekstfelt } from "../aktivitet-tekstfelt/AktivitetTekstfelt";
import { type IRedigerPeriodeAction } from "~/routes/saksbehandling.person.$oppgaveId.rediger-periode.$periodeId";

import styles from "./AktivitetModal.module.css";

interface IProps {
  rapporteringsperiode: IRapporteringsperiode;
  dato: string | undefined;
  valgtAktivitet: string | TAktivitetType;
  setValgtAktivitet: (aktivitet: string | TAktivitetType) => void;
  modalAapen: boolean;
  lukkModal: () => void;
}

export function AktivitetModal(props: IProps) {
  const { rapporteringsperiode, dato, valgtAktivitet, setValgtAktivitet, modalAapen, lukkModal } =
    props;
  const actionData = useActionData() as IRedigerPeriodeAction;

  const dag = rapporteringsperiode.dager.find((rapporteringsdag) => rapporteringsdag.dato === dato);

  function hentAktivitetTekst() {
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
      className={styles.modal}
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
            <input type="hidden" name="aktivitetId" defaultValue={aktivitet.id} />

            <div className={classNames(styles.registrertAktivitet, styles[aktivitet.type])}>
              {hentAktivitetTekst()}
            </div>
            <div className={styles.knappKontainer}>
              <Button type="submit" name="submit" value="slette-aktivitet">
                Fjern registrering
              </Button>
            </div>
          </Form>
        ))}

        {dag && dag.muligeAktiviteter.length > 0 && (
          <ValidatedForm method="post" validator={validatorAktivitet(valgtAktivitet)}>
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

            {actionData?.aktivitetError && (
              <Alert variant="error" className={styles.feilmelding}>
                Det skjedde en feil.
              </Alert>
            )}

            <div className="knapperad knapperad-hoyrestilt">
              <Button type="submit" name="submit" value="lagre-aktivitet">
                Lagre
              </Button>
            </div>
          </ValidatedForm>
        )}
      </Modal.Content>
    </Modal>
  );
}
