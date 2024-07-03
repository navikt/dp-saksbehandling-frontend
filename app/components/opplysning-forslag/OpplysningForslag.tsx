import { Table } from "@navikt/ds-react";
import styles from "./OpplysningForslag.module.css";
import { CheckmarkCircleIcon } from "@navikt/aksel-icons";

export default function OpplysningForslag() {
  return (
    <div className={styles.container}>
      <h1>Behandlingsoversikt</h1>
      <p>
        Etter opplysningene som er tilgjengelig har regelmotoren landet på et resultat av
        behandlingen. Se nøkkelpunkter for å få en oversikt.
      </p>
      <Table>
        <Table.Row className={styles.success}>
          <Table.DataCell>
            <span>
              <CheckmarkCircleIcon fontSize="1em" />
              Bruker har rett til dagpenger
            </span>
          </Table.DataCell>
          <Table.DataCell></Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Virkningstidspunkt</Table.DataCell>
          <Table.DataCell>12.05.2023</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Søknadsdato</Table.DataCell>
          <Table.DataCell>05.05.2023</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Dagpengeperiode</Table.DataCell>
          <Table.DataCell>104 uker</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Egenandel</Table.DataCell>
          <Table.DataCell>4 818 kr</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Dagsats</Table.DataCell>
          <Table.DataCell>1 606 kr</Table.DataCell>
        </Table.Row>
      </Table>
    </div>
  );
}
