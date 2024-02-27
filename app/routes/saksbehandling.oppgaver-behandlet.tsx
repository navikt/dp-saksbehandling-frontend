import { Table, Tag } from "@navikt/ds-react";
import { RemixLink } from "~/components/RemixLink";
import { hentFormattertDato } from "~/utils/dato.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { oppgaveErFerdigBehandlet } from "~/routes/saksbehandling.oppgave.$oppgaveId";

export default function SaksbehandlingOppgaverBehandlet() {
  const { oppgaver } = useTypedRouteLoaderData("routes/saksbehandling");
  const lukkedeSaker = oppgaver.filter((oppgave) => oppgaveErFerdigBehandlet(oppgave));

  return (
    <main>
      <Table zebraStripes={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Tilstand</Table.HeaderCell>
            <Table.HeaderCell scope="col">Personnummer</Table.HeaderCell>
            <Table.HeaderCell scope="col">Opprettet</Table.HeaderCell>
            <Table.HeaderCell scope="col">Emneknagger</Table.HeaderCell>
            <Table.HeaderCell scope="col"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lukkedeSaker?.map((oppgave) => {
            const { oppgaveId, personIdent, datoOpprettet, tilstand, emneknagger, steg } = oppgave;
            return (
              <Table.Row key={oppgaveId}>
                <Table.DataCell>{tilstand}</Table.DataCell>
                <Table.DataCell>
                  <RemixLink to={`/saksbehandling/person/${oppgaveId}/oversikt`}>
                    {personIdent}
                  </RemixLink>
                </Table.DataCell>
                <Table.DataCell>{hentFormattertDato(datoOpprettet)}</Table.DataCell>
                <Table.DataCell>
                  {emneknagger.map((emneknagg) => (
                    <Tag key={emneknagg} size={"xsmall"} variant="alt2-filled">
                      {emneknagg}
                    </Tag>
                  ))}
                </Table.DataCell>
                <Table.DataCell>
                  <RemixLink
                    to={`/saksbehandling/oppgave/${oppgaveId}/steg/${steg[0].stegNavn}`}
                    asButtonVariant="primary"
                  >
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
