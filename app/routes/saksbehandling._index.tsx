import { Table } from "@navikt/ds-react";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { IOppgave } from "~/models/oppgave.server";
import { mockHentOppgaver } from "~/models/oppgave.server";

export const meta: MetaFunction = () => {
  return {
    title: "Dagpenger saksbehandling",
  };
};

export async function loader() {
  const oppgaver = await mockHentOppgaver();
  return oppgaver;
}

export default function Saksbehandling() {
  const oppgaver = useLoaderData<typeof loader>() as IOppgave[];

  return (
    <main>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Saksbehandler</Table.HeaderCell>
            <Table.HeaderCell scope="col">Oppgavetype</Table.HeaderCell>
            <Table.HeaderCell scope="col">Bruker</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {oppgaver.map((oppgave, index) => {
            const { saksbehandler, oppgaveType, bruker } = oppgave;
            const brukerNavn = `${bruker.forNavn} ${bruker.mellomNavn} ${bruker.etterNavn}`;

            return (
              <Table.Row key={index}>
                <Table.HeaderCell scope="row">{saksbehandler.givenName}</Table.HeaderCell>
                <Table.DataCell>{oppgaveType}</Table.DataCell>
                <Table.DataCell>
                  <Link to={`bruker/${bruker.ident}/vilkaar`}>{brukerNavn}</Link>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </main>
  );
}
