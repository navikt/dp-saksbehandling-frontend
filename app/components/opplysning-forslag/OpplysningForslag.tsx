import { BodyLong, Heading, Table } from "@navikt/ds-react";
import { CheckmarkCircleIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import type { IOpplysning } from "~/models/behandling.server";
import styles from "./OpplysningForslag.module.css";
import { formaterNorskDato } from "~/utils/dato.utils";

interface IProps {
  opplysninger: IOpplysning[];
}

function finnOpplysningMedNavn(navn: string, opplysninger: IOpplysning[]) {
  return opplysninger.filter((opplysning) => {
    return opplysning.navn === navn;
  })[0];
}

export function OpplysningForslag(props: IProps) {
  const harKravDagpenger = finnOpplysningMedNavn(
    "Har rett til ordinære dagpenger",
    props.opplysninger,
  );

  const kravTilInntekt = finnOpplysningMedNavn("Krav til minsteinntekt", props.opplysninger);
  const kravTilArbeidssoker = finnOpplysningMedNavn("Krav til arbeidssøker", props.opplysninger);
  const soknadstidspunkt = finnOpplysningMedNavn("Søknadstidspunkt", props.opplysninger);

  const resultStyle = harKravDagpenger?.verdi === "true" ? styles.approved : styles.denied;

  return (
    <div className={styles.container}>
      <Heading size={"large"}>Behandlingsoversikt</Heading>

      <BodyLong className={styles.forslagBody}>
        Etter opplysningene som er tilgjengelig har regelmotoren landet på et resultat av
        behandlingen. Se nøkkelpunkter for å få en oversikt.
      </BodyLong>

      <Table className={"table--subtle-zebra"}>
        <Table.Header>
          <Table.Row className={resultStyle}>
            <Table.HeaderCell colSpan={3}>
              {harKravDagpenger?.verdi === "true" ? (
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
              Søknadstidspunkt {formaterNorskDato(soknadstidspunkt?.verdi)}
            </Table.DataCell>
            <Table.DataCell>Søknad</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
