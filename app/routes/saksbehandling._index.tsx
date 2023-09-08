import { Table } from "@navikt/ds-react";
import { useRouteLoaderData } from "@remix-run/react";
import { RemixLink } from "~/components/RemixLink";
import { type IRootLoader } from "~/root";
import { hentFormattertDato } from "~/utils/dato.utils";

export default function Saksbehandling() {
  const { oppgaver } = useRouteLoaderData("root") as IRootLoader;

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
            const { uuid, person, opprettet } = oppgave;
            return (
              <Table.Row key={index}>
                <Table.DataCell>{uuid}</Table.DataCell>
                <Table.DataCell>
                  <RemixLink to={`person/${oppgave.uuid}/oversikt`}>{person}</RemixLink>
                </Table.DataCell>
                <Table.DataCell>{hentFormattertDato(opprettet)}</Table.DataCell>
                <Table.DataCell>Klar for behandling</Table.DataCell>
                <Table.DataCell>
                  <RemixLink to={`oppgave/${uuid}`} asButton>
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
