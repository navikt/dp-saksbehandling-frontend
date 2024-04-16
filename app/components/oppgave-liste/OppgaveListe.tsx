import { Table, Tag } from "@navikt/ds-react";
import React from "react";
import { hentFormattertDato } from "~/utils/dato.utils";
import { RemixLink } from "../RemixLink";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { useNavigation } from "@remix-run/react";

export function OppgaveListe() {
  const { state } = useNavigation();
  const { oppgaver } = useTypedRouteLoaderData("routes/_index");

  return (
    <Table zebraStripes={true}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Opprettet</Table.HeaderCell>
          <Table.HeaderCell scope="col">Oppgave</Table.HeaderCell>
          <Table.HeaderCell scope="col">Status</Table.HeaderCell>
          <Table.HeaderCell scope="col">Personnummer</Table.HeaderCell>
          <Table.HeaderCell scope="col"></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {oppgaver?.map((oppgave) => {
          const { oppgaveId, personIdent, tidspunktOpprettet, tilstand, emneknagger } = oppgave;
          return (
            <Table.Row key={oppgave.oppgaveId}>
              <Table.DataCell>{hentFormattertDato(tidspunktOpprettet)}</Table.DataCell>
              <Table.DataCell>
                {emneknagger.map((emneknagg) => (
                  <Tag key={emneknagg} size={"xsmall"} variant="alt2-filled">
                    {emneknagg}
                  </Tag>
                ))}
              </Table.DataCell>
              <Table.DataCell>{tilstand}</Table.DataCell>
              <Table.DataCell>
                <RemixLink to={`person/${oppgaveId}/oversikt`}>{personIdent}</RemixLink>
              </Table.DataCell>
              <Table.DataCell>
                <RemixLink
                  to={`/oppgave/${oppgaveId}/behandling`}
                  asButtonVariant="primary"
                  loading={state !== "idle"}
                >
                  Behandle
                </RemixLink>
              </Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
