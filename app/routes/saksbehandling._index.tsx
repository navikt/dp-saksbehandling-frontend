import { Table } from "@navikt/ds-react";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { hentOppgaver } from "~/models/oppgave.server";
import type { IOppgave } from "~/models/oppgave.server";
import { hentFormattertDato } from "~/utils/dato.utils";
import { RemixLink } from "../components/RemixLink";

export async function loader({ params }: LoaderArgs) {
  const oppgaver = await hentOppgaver();

  return json(oppgaver);
}

export const meta: MetaFunction = () => {
  return {
    title: "Dagpenger saksbehandling",
  };
};

export default function Saksbehandling() {
  const loaderData = useLoaderData<typeof loader>();
  const oppgaver = loaderData as IOppgave[];

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
                  <RemixLink to={`person/${person}/oppgave/${uuid}`} as="Button">
                    Behandle
                  </RemixLink>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </main>
  );
}
