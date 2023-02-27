import { Table } from "@navikt/ds-react";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { IOppgave } from "~/models/oppgave.server";
import { mockHentOppgaver } from "~/models/oppgave.server";
import { mockSaksbehandler } from "../../mock-data/mock-saksbehandler";

export const meta: MetaFunction = () => {
  return {
    title: "Dagpenger saksbehandling",
  };
};

export async function loader() {
  const oppgaver = await mockHentOppgaver(mockSaksbehandler);
  return oppgaver;
}

export default function Saksbehandling() {
  const oppgaver = useLoaderData<typeof loader>() as IOppgave[];

  return (
    <main>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
            <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
            <Table.HeaderCell scope="col">Hendelse</Table.HeaderCell>
            <Table.HeaderCell scope="col">Status</Table.HeaderCell>
            <Table.HeaderCell scope="col">Dato opprettet</Table.HeaderCell>
            <Table.HeaderCell scope="col">Tildeling</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {oppgaver
            .sort((a, b) => {
              // sorterer slik at eldste havner øverst
              return Date.parse(a.datoOpprettet) - Date.parse(b.datoOpprettet);
            })
            .map((oppgave, index) => {
              const { saksbehandler, hendelse, bruker, datoOpprettet } = oppgave;
              return (
                <Table.Row key={index}>
                  <Table.HeaderCell scope="row">
                    <Link
                      to={`../bruker/${bruker.ident}/vilkaar`}
                    >{`${bruker.forNavn} ${bruker.mellomNavn} ${bruker.etterNavn}`}</Link>
                  </Table.HeaderCell>
                  <Table.DataCell>Ny periode</Table.DataCell>
                  <Table.DataCell>{hendelse}</Table.DataCell>
                  <Table.DataCell>Mange varsler</Table.DataCell>
                  <Table.DataCell>{datoOpprettet}</Table.DataCell>
                  <Table.DataCell>
                    {saksbehandler?.givenName + " "}
                    <Link to={"../"}>Legg tilbake</Link>
                  </Table.DataCell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </main>
  );
}
