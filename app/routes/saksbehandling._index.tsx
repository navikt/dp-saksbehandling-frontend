import { Table, Tag } from "@navikt/ds-react";
import { RemixLink } from "~/components/RemixLink";
import { type TOppgaveTilstand } from "~/models/oppgave.server";
import { hentFormattertDato } from "~/utils/dato.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export default function Saksbehandling() {
  const { oppgaver } = useTypedRouteLoaderData("routes/saksbehandling");

  const tilBehandlingsOppgaver = oppgaver.filter(
    (oppgave) => oppgave.tilstand !== "FerdigBehandlet",
  );

  function hentTilstandTekst(tilstand: TOppgaveTilstand) {
    switch (tilstand) {
      case "TilBehandling":
        return "Til behandling";
      case "FerdigBehandlet":
        return "Ferdig behandlet";
      default:
        return "";
    }
  }

  return (
    <main>
      <Table zebraStripes={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Oppgave Type</Table.HeaderCell>
            <Table.HeaderCell scope="col">Personnummer</Table.HeaderCell>
            <Table.HeaderCell scope="col">Opprettet</Table.HeaderCell>
            <Table.HeaderCell scope="col">Status</Table.HeaderCell>
            <Table.HeaderCell scope="col"></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tilBehandlingsOppgaver?.map((oppgave, index) => {
            const { uuid, person, opprettet, tilstand, steg, emneknagger } = oppgave;
            return (
              <Table.Row key={index}>
                <Table.DataCell>
                  {emneknagger &&
                    emneknagger.map((knagg, i) => {
                      return (
                        <Tag variant="info" key={i}>
                          {knagg}
                        </Tag>
                      );
                    })}
                </Table.DataCell>
                <Table.DataCell>
                  <RemixLink to={`person/${uuid}/oversikt/rapportering-og-utbetaling/`}>
                    {person}
                  </RemixLink>
                </Table.DataCell>
                <Table.DataCell>{hentFormattertDato(opprettet)}</Table.DataCell>
                <Table.DataCell>{hentTilstandTekst(tilstand)}</Table.DataCell>
                <Table.DataCell>
                  <RemixLink to={`oppgave/${uuid}/steg/${steg[0].uuid}`} as="Button">
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
