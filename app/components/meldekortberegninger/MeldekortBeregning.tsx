import { Heading, Table } from "@navikt/ds-react";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandling: components["schemas"]["Behandling"];
}

export function MeldekortBeregning({ behandling }: IProps) {
  const opplysninger = behandling.opplysninger;

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
      tilDato: new Date(op.gyldigTilOgMed ?? ""),
      forbruksdag: op.verdi,
      timer: Number(timer.find((t) => t.gyldigFraOgMed == op.gyldigFraOgMed)?.verdi),
      utbetaling: Number(utbetaling.find((u) => u.gyldigFraOgMed == op.gyldigFraOgMed)?.verdi),
    }))
    .sort((a, b) => {
      const timeA = a.fraDato?.getTime() ?? 0;
      const timeB = b.fraDato?.getTime() ?? 0;
      return timeA - timeB;
    });

  return (
    <>
      <Heading size="medium">Meldekort</Heading>
      <dl>
        {meldedager.length > 0 && (
          <>
            <dt>Periode</dt>
            <dd>
              {formatterDato(meldedager[0].fraDato)} -{" "}
              {formatterDato(meldedager[meldedager.length - 1].tilDato)}
            </dd>
          </>
        )}
        <dt>Utbetalt i perioden</dt>
        <dd>{meldedager.reduce((sum, dag) => sum + (dag.utbetaling || 0), 0)} kr</dd>
        <dt>Forbrukt i perioden</dt>
        <dd>
          {meldedager.reduce((sum, dag) => sum + ((dag.forbruksdag == "true" ? 1 : 0) || 0), 0)}{" "}
          dager{" "}
        </dd>
      </dl>
      <Meldedager meldedager={meldedager} />
    </>
  );
}

interface Meldedager {
  meldedager?: {
    fraDato: Date;
    tilDato: Date;
    forbruksdag: string;
    timer: number;
    utbetaling: number;
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
          meldedager.map(({ fraDato, timer, forbruksdag, utbetaling }, i) => (
            <Table.Row key={i}>
              <Table.HeaderCell scope="row" align="center">
                {formatterDato(fraDato)}
              </Table.HeaderCell>
              <Table.DataCell align="center">{forbruksdag == "true" ? "Ja" : "Nei"}</Table.DataCell>
              <Table.DataCell align="right">{timer}</Table.DataCell>
              <Table.DataCell align="right">{utbetaling}&nbsp;kr</Table.DataCell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

const formatterDato = (date: Date) => {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const d = date.getDate().toString().padStart(2, "0");
  return `${d}.${m}.${y}`;
};
