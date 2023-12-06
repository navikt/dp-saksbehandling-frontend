import React from "react";
import { Heading, Table } from "@navikt/ds-react";
import type { IInntekt } from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";

export function InntektTabell(props: { inntekter: IInntekt[] }) {
  return (
    <div>
      <Heading level="2" size={"medium"}>
        Inntektsopplysninger fra A-inntekt
      </Heading>
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
