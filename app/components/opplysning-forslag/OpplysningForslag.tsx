import { BodyLong, Heading, Table } from "@navikt/ds-react";
import { CheckmarkCircleIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import { parse, format } from "date-fns";
import type { IOpplysning } from "~/models/behandling.server";
import styles from "./OpplysningForslag.module.css";

interface IProps {
  opplysninger: IOpplysning[];
}

function finnOpplysningMedNavn(navn: string, opplysninger: IOpplysning[]) {
  return opplysninger.filter((opplysning) => {
    return opplysning.navn === navn;
  })[0];
}

export function OpplysningForslag(props: IProps) {
  const harKravDagpenger = finnOpplysningMedNavn("Krav på dagpenger", props.opplysninger);
  const resultStyle = harKravDagpenger.verdi === "true" ? styles.approved : styles.denied;

  const kravTilArbeidssoker = finnOpplysningMedNavn("Krav til arbeidssøker", props.opplysninger);
  const kravTilInntekt = finnOpplysningMedNavn("Krav til minsteinntekt", props.opplysninger);
  const beregnetVirkningstidspunkt = finnOpplysningMedNavn(
    "EttBeregnetVirkningstidspunkt",
    props.opplysninger,
  );

  return (
    <div className={styles.container}>
      <Heading size={"large"}>Behandlingsoversikt</Heading>

      <BodyLong className={styles.forslagBody}>
        Etter opplysningene som er tilgjengelig har regelmotoren landet på et resultat av
        behandlingen. Se nøkkelpunkter for å få en oversikt.
      </BodyLong>

      <Table zebraStripes>
        <Table.Header>
          <Table.Row className={resultStyle}>
            <Table.HeaderCell colSpan={3}>
              {harKravDagpenger.verdi === "true" ? (
                <span className={styles.result}>
                  <CheckmarkCircleIcon />
                  Bruker har rett til dagpenger
                </span>
              ) : (
                <span className={styles.result}>
                  <XMarkOctagonIcon />
                  Bruker har fått avslag på dagpenger
                </span>
              )}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell scope="row">Dagpenger</Table.HeaderCell>
            <Table.DataCell>Ordinær</Table.DataCell>
            <Table.DataCell>Søknad</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">§4-16 Gjenoppptak</Table.HeaderCell>
            <Table.DataCell>Nei</Table.DataCell>
            <Table.DataCell>Søknad</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">§4-4 Krav til minsteinntekt</Table.HeaderCell>
            <Table.DataCell>{kravTilInntekt?.verdi === "true" ? "Ja" : "Nei"}</Table.DataCell>
            <Table.DataCell>Søknad</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">§4-Reel arbeidssøker</Table.HeaderCell>
            <Table.DataCell>{kravTilArbeidssoker?.verdi === "true" ? "Ja" : "Nei"}</Table.DataCell>
            <Table.DataCell>Søknad</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell scope="row">§3A-1 Søknadstidspunkt</Table.HeaderCell>
            <Table.DataCell>
              Virkningstidspunkt{" "}
              {format(
                parse(beregnetVirkningstidspunkt?.verdi, "yyyy-MM-dd", new Date()),
                "dd.MM.yyyy",
              )}
            </Table.DataCell>
            <Table.DataCell>Søknad</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
