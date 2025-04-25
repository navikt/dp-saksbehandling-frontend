import { Table } from "@navikt/ds-react";

import styles from "~/components/behandling/Behandling.module.css";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["Behandling"];
}

export function MeldekortBeregning({ behandling }: IProps) {
  const opplysninger = behandling.opplysninger;
  const meldekortPeriodeId = "01956abd-2871-7517-a332-b462c0c31292";
  const meldeperiode = opplysninger.find((op) => op.opplysningTypeId == meldekortPeriodeId);

  const forbruksdagOpplysningstypeId = "01948ea0-ffdc-7964-ab55-52a7e35e1020";
  const dager = opplysninger.filter((op) => op.opplysningTypeId == forbruksdagOpplysningstypeId);

  const arbeidsTimerOpplysningsTypeId = "01948ea0-e25c-7c47-8429-a05045d80eca";
  const timer = opplysninger.filter((op) => op.opplysningTypeId == arbeidsTimerOpplysningsTypeId);

  const utbetalingOpplysningstypeId = "01957069-d7d5-7f7c-b359-c00686fbf1f7";
  const utbetaling = opplysninger.filter(
    (op) => op.opplysningTypeId == utbetalingOpplysningstypeId,
  );

  const meldedager = dager
    .map((op) => ({
      fraDato: new Date(op.gyldigFraOgMed ?? ""),
      erArbeidsdag: op.verdi,
      timer: timer.find((t) => t.gyldigFraOgMed == op.gyldigFraOgMed)?.verdi,
      utbetaling: utbetaling.find((u) => u.gyldigFraOgMed == op.gyldigFraOgMed)?.verdi,
    }))
    .sort((a, b) => {
      const timeA = a.fraDato?.getTime() ?? 0;
      const timeB = b.fraDato?.getTime() ?? 0;
      return timeA - timeB;
    });

  return (
    <>
      <div>
        <h2 className={styles.meldekortTittel}>Meldekort</h2>
        <p className={styles.meldekortTekst}>
          {meldeperiode && <div>Meldeperiode: {meldeperiode.verdi}</div>}
          <Meldedager meldedager={meldedager} />
        </p>
      </div>
    </>
  );
}

interface Meldedager {
  meldedager?: {
    fraDato: Date | null | undefined;
    erArbeidsdag: string | undefined;
    timer: string | undefined;
    utbetaling: string | undefined;
  }[];
}

const Meldedager = ({ meldedager }: Meldedager) => {
  return (
    <Table size={"medium"}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" align="center">
            Dato
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="center">
            Forbruksdag
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="right">
            Arbeidede timer
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" align="right">
            Utbetaling
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {meldedager &&
          meldedager.map(({ fraDato, timer, erArbeidsdag, utbetaling }, i) => (
            <Table.Row key={i}>
              <Table.HeaderCell scope="row" align="center">
                {fraDato?.toLocaleDateString("no-NO")}
              </Table.HeaderCell>
              <Table.DataCell align="center">
                {erArbeidsdag == "true" ? "Ja" : "Nei"}
              </Table.DataCell>
              <Table.DataCell align="right">{timer}</Table.DataCell>
              <Table.DataCell align="right">{utbetaling} kr</Table.DataCell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};
