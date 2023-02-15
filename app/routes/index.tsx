import React from "react";
import { Header } from "@navikt/ds-react-internal";
import { Link, useLoaderData } from "@remix-run/react";
import { Table } from "@navikt/ds-react";
import { mockHentOppgaver } from "~/models/oppgave.server";

export async function loader() {
  const oppgaver = await mockHentOppgaver();
  return oppgaver;
}

export default function Index() {
  const oppgaver = useLoaderData<typeof loader>();

  return (
    <div>
      <Header>
        <Header.Title as="h1">NAV Dagpenger</Header.Title>
      </Header>

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
              const saksbehandlerNavn = `${saksbehandler.forNavn} ${saksbehandler.mellomNavn} ${saksbehandler.etterNavn}`;
              const brukerNavn = `${bruker.forNavn} ${bruker.mellomNavn} ${bruker.etterNavn}`;

              return (
                <Table.Row key={index}>
                  <Table.HeaderCell scope="row">{saksbehandlerNavn}</Table.HeaderCell>
                  <Table.DataCell>{oppgaveType}</Table.DataCell>
                  <Table.DataCell>
                    <Link to={`bruker/${bruker.ident}`}>{brukerNavn}</Link>
                  </Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </main>
    </div>
  );
}
