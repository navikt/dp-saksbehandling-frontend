import { Button, Table } from "@navikt/ds-react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import type { IOppgave } from "~/models/oppgave.server";
import { hentFormattertDato } from "~/utils/dato.utils";
import { useMatchesData } from "~/utils/loader-data.utils";

export const meta: MetaFunction = () => {
  return {
    title: "Dagpenger saksbehandling",
  };
};

export default function Saksbehandling() {
  const data = useMatchesData("root");
  const oppgaver = data?.oppgaver as IOppgave[];

  return (
    <main>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Oppgave ID</Table.HeaderCell>
            <Table.HeaderCell scope="col">Personnummer</Table.HeaderCell>
            <Table.HeaderCell scope="col">Opprettet</Table.HeaderCell>
            <Table.HeaderCell scope="col">Tilstand</Table.HeaderCell>
            <Table.HeaderCell scope="col">Gå til behandling</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {oppgaver?.map((oppgave, index) => {
            const { uuid, tilstand, person, opprettet } = oppgave;
            return (
              <Table.Row key={index}>
                <Table.DataCell>{uuid}</Table.DataCell>
                <Table.DataCell>{person}</Table.DataCell>
                <Table.DataCell>{hentFormattertDato(opprettet)}</Table.DataCell>
                <Table.DataCell>{tilstand}</Table.DataCell>
                <Table.DataCell>
                  <Link to={`person/${person}/oppgave/${uuid}`}>
                    <Button>Behandle</Button>
                  </Link>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </main>
  );
}
