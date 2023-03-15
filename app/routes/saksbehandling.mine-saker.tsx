import { Table } from "@navikt/ds-react";
import type { MetaFunction } from "@remix-run/node";
import type { IOppgave } from "~/models/oppgave.server";
import { Link, useLoaderData } from "@remix-run/react";
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
            <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
            <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
            <Table.HeaderCell scope="col">Hendelse</Table.HeaderCell>
            <Table.HeaderCell scope="col">Status</Table.HeaderCell>
            <Table.HeaderCell scope="col">Dato opprettet</Table.HeaderCell>
            <Table.HeaderCell scope="col">Tildeling</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {oppgaver.map((oppgave, index) => {
            const { saksbehandler, person, opprettet, hendelse } = oppgave;
            const navn = `${person.forNavn} ${person.mellomNavn} ${person.etterNavn}`;
            return (
              <Table.Row key={index}>
                <Table.HeaderCell scope="row">
                  <Link to={`../person/${person.ident}/oversikt`}>{navn}</Link>
                </Table.HeaderCell>
                <Table.DataCell>Ny periode</Table.DataCell>
                <Table.DataCell>{hendelse.type}</Table.DataCell>
                <Table.DataCell>Mange varsler</Table.DataCell>
                <Table.DataCell>{opprettet}</Table.DataCell>
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
