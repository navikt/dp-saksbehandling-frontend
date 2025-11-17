import { Detail, Table } from "@navikt/ds-react";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { hentOppgaveUrl } from "~/routes/person.$personUuid.oversikt";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentUtløstAvTekstForVisning } from "~/utils/tekst.utils";

import { components } from "../../../openapi/saksbehandling-typer";

interface IProps {
  behandlinger: components["schemas"]["Behandling"][];
}

export function BehandlingListe({ behandlinger }: IProps) {
  return (
    <Table size="small" className={"tabell--subtil"} zebraStripes={true}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" className={"w-1/8"}>
            <Detail weight={"semibold"}>Mottatt</Detail>
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" className={"w-6/8"}>
            <Detail weight={"semibold"}>Utløst av</Detail>
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" className={"w-1/8"}>
            <Detail weight={"semibold"}>Valg</Detail>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {behandlinger.map((behandling) => (
          <Table.Row key={behandling.id}>
            <Table.DataCell className={"w-1/8"}>
              <Detail textColor={"subtle"}>{formaterTilNorskDato(behandling.opprettet)}</Detail>
            </Table.DataCell>
            <Table.DataCell className={"w-6/8"}>
              <Detail>{hentUtløstAvTekstForVisning(behandling.utlostAv, true)}</Detail>
            </Table.DataCell>

            <Table.DataCell className={"w-1/8"}>
              <LoadingLink
                asButtonVariant={"tertiary"}
                buttonSize={"xsmall"}
                to={
                  behandling.oppgaveId ? hentOppgaveUrl(behandling) : `/behandling/${behandling.id}`
                }
              >
                {behandling.oppgaveId ? "Se oppgave" : "Se behandling"}
              </LoadingLink>
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
