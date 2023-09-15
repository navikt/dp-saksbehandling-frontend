import { Table } from "@navikt/ds-react";
import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { IOppgave } from "~/models/oppgave.server";
import { hentOppgaver } from "~/models/oppgave.server";
import { hentFormattertDato } from "~/utils/dato.utils";
import { RemixLink } from "~/components/RemixLink";
import { getSession } from "~/models/auth.server";

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request);
  const oppgaver = await hentOppgaver(session);

  return json(oppgaver);
}

export default function Saksbehandling() {
  const loaderData = useLoaderData<typeof loader>();
  const oppgaver = loaderData as IOppgave[];

  return (
    <main>
      <Table size="small" zebraStripes={true}>
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
                <Table.DataCell>
                  <RemixLink to={`person/${oppgave.uuid}/oversikt`} as="Link">
                    {person}
                  </RemixLink>
                </Table.DataCell>
                <Table.DataCell>{hentFormattertDato(opprettet)}</Table.DataCell>
                <Table.DataCell>{tilstand}</Table.DataCell>
                <Table.DataCell>
                  <RemixLink to={`oppgave/${uuid}`} as="Button">
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
