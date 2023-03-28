import { Button, Table } from "@navikt/ds-react";
import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { hentBehandlinger } from "~/models/behandling.server";

export const meta: MetaFunction = () => {
  return {
    title: "Dagpenger saksbehandling",
  };
};

export async function loader() {
  return json({ behandlinger: await hentBehandlinger() });
}

export default function Saksbehandling() {
  const { behandlinger } = useLoaderData<typeof loader>();
  console.log(behandlinger);
  return (
    <main>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">uuid</Table.HeaderCell>
            <Table.HeaderCell scope="col">Dato opprettet</Table.HeaderCell>
            <Table.HeaderCell scope="col">Person</Table.HeaderCell>
            <Table.HeaderCell scope="col">Saksbehandler</Table.HeaderCell>
            <Table.HeaderCell scope="col">Behandle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {behandlinger?.map((behandling, index) => {
            const { uuid, opprettet, person, saksbehandler } = behandling;
            return (
              <Table.Row key={index}>
                <Table.DataCell>{uuid}</Table.DataCell>
                <Table.DataCell>{opprettet}</Table.DataCell>
                <Table.DataCell>{person}</Table.DataCell>
                <Table.DataCell>{saksbehandler}</Table.DataCell>
                <Table.DataCell>
                  <Link to={`person/${person}/behandle/${uuid}`}>
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
