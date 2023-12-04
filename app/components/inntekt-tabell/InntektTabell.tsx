import React from "react";
import { BodyShort, Table } from "@navikt/ds-react";
import type { IInntekt } from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";

export function InntektTabell(props: { inntekter: IInntekt[] }) {
  return (
    <div>
      <BodyShort>Inntektsopplysninger</BodyShort>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell scope="col">Type vurdering</Table.HeaderCell>
            <Table.HeaderCell scope="col">Periode</Table.HeaderCell>
            <Table.HeaderCell scope="col">Inntekt</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className={"inntektTabell"}>
          {props.inntekter.map(({ periodeType, inntekt, fra, til }) => (
            <Table.ExpandableRow
              key={periodeType}
              content={"TEST-MOCK Kanskje noe informasjon her? :shrug:"}
            >
              <Table.DataCell scope="row">{periodeType}</Table.DataCell>
              <Table.DataCell>{`${fra} - ${til}`}</Table.DataCell>
              <Table.DataCell>{inntekt.toLocaleString("no-nb")}</Table.DataCell>
            </Table.ExpandableRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
