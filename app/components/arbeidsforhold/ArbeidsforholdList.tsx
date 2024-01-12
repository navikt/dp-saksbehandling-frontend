import React from "react";
import { Bleed, BodyShort, Heading, Table } from "@navikt/ds-react";
import styles from "./ArbeidsforholdList.module.css";
import { InfoCard } from "~/components/info-card/InfoCard";

interface IProps {
  arbeidsforholdSoknad: IArbeidsforhold2[];
  arbeidsforholdAAreg: IArbeidsforhold2[];
}
export interface IArbeidsforhold2 {
  navn: string;
  land: string;
  arbeidstimerUke: number;
  startDato: string;
  sluttDato: string;
  stillingsprosent: number;
}

export function ArbeidsforholdList(props: IProps) {
  return (
    <div className="my-4">
      <Bleed marginInline="4" asChild>
        <div className={styles.container}>
          <Heading size="small" className="my-4">
            Arbeidsforhold registert i Aa-registeret:{" "}
          </Heading>

          <Table size="small" className={styles.arbeidslistTable}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Navn
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    land
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Stillingsprosent
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Timer pr.uke
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Fra
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Til
                  </BodyShort>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.arbeidsforholdAAreg.map((arbeidsforhold) => (
                <ArbeidsforholdItem key={arbeidsforhold.navn} {...arbeidsforhold} />
              ))}
            </Table.Body>
          </Table>

          <Heading size="small" className="my-4">
            Rapporterte arbeidsforhold i søknad:
          </Heading>

          <Table size="small" className={styles.arbeidslistTable}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Navn
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    land
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Stillingsprosent
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Timer pr.uke
                  </BodyShort>{" "}
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Fra
                  </BodyShort>
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <BodyShort textColor="subtle" size="small">
                    Til
                  </BodyShort>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {props.arbeidsforholdSoknad.map((arbeidsforhold) => (
                <ArbeidsforholdItem key={arbeidsforhold.navn} {...arbeidsforhold} />
              ))}
            </Table.Body>
          </Table>

          <InfoCard>
            <BodyShort weight="semibold">Forslag til fastsatt vanlig arbeidstid</BodyShort>
            <BodyShort>Baser på data: 37,5 timer pr. uke</BodyShort>
          </InfoCard>
        </div>
      </Bleed>
    </div>
  );
}

export function ArbeidsforholdItem(arbeidsforhold: IArbeidsforhold2) {
  return (
    <Table.Row className={styles.arbeidslistItem}>
      <Table.DataCell>
        <BodyShort weight="semibold">{arbeidsforhold.navn}</BodyShort>
      </Table.DataCell>
      <Table.DataCell>{arbeidsforhold.land}</Table.DataCell>
      <Table.DataCell>{arbeidsforhold.stillingsprosent}</Table.DataCell>
      <Table.DataCell>{arbeidsforhold.arbeidstimerUke}</Table.DataCell>
      <Table.DataCell>{arbeidsforhold.startDato}</Table.DataCell>
      <Table.DataCell>{arbeidsforhold.sluttDato}</Table.DataCell>
    </Table.Row>
  );
}
