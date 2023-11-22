import React from "react";
import styles from "./InntektTabell.module.css";
import { BodyShort, Link, Table } from "@navikt/ds-react";
import type {
  IInntekt,
  IInntektPeriode,
} from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";
import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from "@navikt/aksel-icons";

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
            <Table.HeaderCell scope="col">Oppfyller kravene</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body className={"inntektTabell"}>
          {props.inntekter.map(({ perioder, id, inntekt, oppfyllerKrav, fra, til }) => (
            <Table.ExpandableRow
              key={id}
              content={perioder.map((periode) => (
                <Inntektperiode key={periode.periode} {...periode} />
              ))}
            >
              <Table.DataCell scope="row">{id}</Table.DataCell>
              <Table.DataCell>{`${fra} - ${til}`}</Table.DataCell>
              <Table.DataCell>{inntekt.toLocaleString("no-nb")}</Table.DataCell>
              <Table.DataCell>
                {oppfyllerKrav ? (
                  <CheckmarkCircleFillIcon
                    title="a11y-title"
                    fontSize="1.5rem"
                    className={styles.checkmark}
                  />
                ) : (
                  <XMarkOctagonFillIcon
                    title="a11y-title"
                    fontSize="1.5rem"
                    className={styles.error}
                  />
                )}
              </Table.DataCell>
            </Table.ExpandableRow>
          ))}
        </Table.Body>
      </Table>

      <Link href="#">Endre opplysninger om inntekt</Link>
    </div>
  );
}

function Inntektperiode(props: IInntektPeriode) {
  return (
    <div className={styles.inntektPeriode}>
      <span className={styles.inntektPeriodeDate}> {props.periode}</span>
      {props.inntekt.toLocaleString("no-nb")}
    </div>
  );
}
