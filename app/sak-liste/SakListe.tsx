import { FolderFileIcon } from "@navikt/aksel-icons";
import { BodyShort, Detail, ExpansionCard, Table } from "@navikt/ds-react";

import { hentBehandlingTypeTekstForVisning } from "~/components/oppgave-filter-behandling-type/OppgaveFilterBehandlingType";
import { RemixLink } from "~/components/RemixLink";
import { formaterTilNorskDato } from "~/utils/dato.utils";

import { components } from "../../openapi/saksbehandling-typer";

interface IProps {
  saker: components["schemas"]["Sak"][];
}

export function SakListe({ saker }: IProps) {
  return (
    <>
      {saker.length === 0 && (
        <div className={"card my-4 p-4"}>
          <BodyShort>Personen har ingen saker</BodyShort>
        </div>
      )}

      {saker.map((sak) => (
        <ExpansionCard
          key={sak.id}
          className={"expansion--subtil card my-4"}
          aria-label={""}
          size={"small"}
        >
          <ExpansionCard.Header>
            <ExpansionCard.Title size={"small"} className={"flex items-center gap-1"}>
              <FolderFileIcon fontSize="1.5rem" aria-hidden />
              SakID: {sak.id}
            </ExpansionCard.Title>
            <ExpansionCard.Description>
              Siste endret: {formaterTilNorskDato(new Date())}
            </ExpansionCard.Description>
          </ExpansionCard.Header>

          <ExpansionCard.Content className={"p-4"}>
            <Table size="small" className={"tabell--subtil"} zebraStripes={true}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>Mottatt</Detail>
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>Type</Detail>
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>BehandlingId</Detail>
                  </Table.HeaderCell>
                  <Table.HeaderCell scope="col">
                    <Detail weight={"semibold"}>OppgaveId</Detail>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {sak.behandlinger.map((behandling) => (
                  <Table.Row key={behandling.id}>
                    <Table.DataCell>
                      <Detail>{formaterTilNorskDato(behandling.opprettet)}</Detail>
                    </Table.DataCell>
                    <Table.DataCell>
                      <Detail>
                        {hentBehandlingTypeTekstForVisning(behandling.behandlingType)}
                      </Detail>
                    </Table.DataCell>
                    <Table.DataCell>
                      <Detail>
                        <RemixLink to={`/behandling/${behandling.id}`}>{behandling.id}</RemixLink>
                      </Detail>
                    </Table.DataCell>
                    <Table.DataCell>
                      <Detail>
                        <RemixLink
                          to={`/oppgave/${behandling.oppgaveId}/dagpenger-rett/${behandling.id}`}
                        >
                          {behandling.oppgaveId}
                        </RemixLink>
                      </Detail>
                    </Table.DataCell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </ExpansionCard.Content>
        </ExpansionCard>
      ))}
    </>
  );
}
