import { Table } from "@navikt/ds-react";
import styles from "./OpplysningForslag.module.css";
import { CheckmarkCircleIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import type { IOpplysning } from "~/models/behandling.server";

interface IProps {
  opplysninger: IOpplysning[];
}

const finnOpplysningMedNavn = (navn: string, opplysninger: IOpplysning[]) => {
  return opplysninger.filter((opplysning) => {
    return opplysning.navn === navn;
  })[0];
};

export default function OpplysningForslag(props: IProps) {
  const harKravDagpenger = finnOpplysningMedNavn("Krav på dagpenger", props.opplysninger);
  const kravTilAlder = finnOpplysningMedNavn("Oppfyller kravet til alder", props.opplysninger);
  const kravTilInntekt = finnOpplysningMedNavn("Krav til minsteinntekt", props.opplysninger);
  const beregnetVirkningsTidspunkt = finnOpplysningMedNavn(
    "EttBeregnetVirkningstidspunkt",
    props.opplysninger,
  );
  const soknadsDato = finnOpplysningMedNavn("Søknadsdato", props.opplysninger);
  const kravTilArbeidssøker = finnOpplysningMedNavn("Krav til arbeidssøker", props.opplysninger);
  const registrertSomArbeidssoker = finnOpplysningMedNavn(
    "Registrert som arbeidssøker på søknadstidspunktet",
    props.opplysninger,
  );

  console.log(kravTilInntekt.verdi);

  const resultStyle = harKravDagpenger.verdi === "true" ? styles.approved : styles.denied;
  return (
    <div className={styles.container}>
      <h1>Behandlingsoversikt</h1>
      <p>
        Etter opplysningene som er tilgjengelig har regelmotoren landet på et resultat av
        behandlingen. Se nøkkelpunkter for å få en oversikt.
      </p>
      <Table>
        <Table.Row className={resultStyle}>
          <Table.DataCell>
            {harKravDagpenger.verdi === "true" ? (
              <>
                <CheckmarkCircleIcon />
                Bruker har rett til dagpenger
              </>
            ) : (
              <>
                <XMarkOctagonIcon />
                Bruker har fått avslag på dagpenger
              </>
            )}
          </Table.DataCell>
          <Table.DataCell></Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Et Beregnet Virkningstidspunkt</Table.DataCell>
          <Table.DataCell>{beregnetVirkningsTidspunkt?.verdi}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Søknadsdato</Table.DataCell>
          <Table.DataCell>{soknadsDato?.verdi}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Krav til alder</Table.DataCell>
          <Table.DataCell>{kravTilAlder?.verdi === "true" ? "Ja" : "Nei"}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Krav til Minsteinntekt</Table.DataCell>
          <Table.DataCell>{kravTilInntekt?.verdi === "true" ? "Ja" : "Nei"}</Table.DataCell>
        </Table.Row>
        {kravTilInntekt?.verdi === "false" && (
          <>
            <Table.Row>
              <Table.DataCell>Arbeidsinntekt siste 12 mnd</Table.DataCell>
              <Table.DataCell>
                {parseFloat(
                  finnOpplysningMedNavn("Arbeidsinntekt siste 12 mnd", props.opplysninger).verdi,
                )}{" "}
                Kr
              </Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>Arbeidsinntekt siste 36 mnd</Table.DataCell>
              <Table.DataCell>
                {parseFloat(
                  finnOpplysningMedNavn("Arbeidsinntekt siste 36 mnd", props.opplysninger).verdi,
                )}{" "}
                Kr
              </Table.DataCell>
            </Table.Row>
          </>
        )}
        <Table.Row>
          <Table.DataCell>Krav til Arbeidssøker</Table.DataCell>
          <Table.DataCell>{kravTilArbeidssøker?.verdi === "true" ? "Ja" : "Nei"}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>Registrert som arbeidssøker på søknadstidspunktet</Table.DataCell>
          <Table.DataCell>
            {registrertSomArbeidssoker.verdi === "true" ? "Ja" : "Nei"}
          </Table.DataCell>
        </Table.Row>
      </Table>
    </div>
  );
}
