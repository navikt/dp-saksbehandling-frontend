import { Table, Tag } from "@navikt/ds-react";
import { RemixLink } from "~/components/RemixLink";
import { hentFormattertDato } from "~/utils/dato.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export default function Saksbehandling() {
  const { oppgaver } = useTypedRouteLoaderData("routes/saksbehandling");

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
          {oppgaver?.map((oppgave) => {
            const { uuid, personIdent, datoOpprettet, tilstand, emneknagger, steg } = oppgave;
            return (
              <Table.Row key={oppgave.uuid}>
                <Table.DataCell>{tilstand}</Table.DataCell>
                <Table.DataCell>
                  <RemixLink to={`person/${uuid}/oversikt`}>{personIdent}</RemixLink>
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
                  <RemixLink to={`oppgave/${uuid}/steg/${steg[0].uuid}`} asButtonVariant="primary">
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
