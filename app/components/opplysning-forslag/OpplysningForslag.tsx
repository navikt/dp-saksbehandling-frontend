import { CheckmarkCircleIcon, XMarkOctagonIcon } from "@navikt/aksel-icons";
import { BodyLong, Heading, Table } from "@navikt/ds-react";

import type { IOpplysning } from "~/models/behandling.server";
import { formaterNorskDato } from "~/utils/dato.utils";
import { formaterTallMedTusenSeperator } from "~/utils/number.utils";

import styles from "./OpplysningForslag.module.css";

interface IProps {
  opplysninger: IOpplysning[];
}

function finnOpplysningMedNavn(navn: string, opplysninger: IOpplysning[]) {
  return opplysninger.find((opplysning) => opplysning.navn === navn);
}

export function OpplysningForslag(props: IProps) {
  const harKravDagpengerOpplysning = finnOpplysningMedNavn("Krav på dagpenger", props.opplysninger);
  const kravTilAlderOpplysning = finnOpplysningMedNavn(
    "Oppfyller kravet til alder",
    props.opplysninger,
  );
  const kravTilInntektOpplysning = finnOpplysningMedNavn(
    "Krav til minsteinntekt",
    props.opplysninger,
  );
  const beregnetVirkningsTidspunktOpplysning = finnOpplysningMedNavn(
    "EttBeregnetVirkningstidspunkt",
    props.opplysninger,
  );
  const soknadsDatoOpplysning = finnOpplysningMedNavn("Søknadsdato", props.opplysninger);
  const kravTilArbeidssokerOpplysning = finnOpplysningMedNavn(
    "Krav til arbeidssøker",
    props.opplysninger,
  );
  const registrertSomArbeidssokerOpplysning = finnOpplysningMedNavn(
    "Registrert som arbeidssøker på søknadstidspunktet",
    props.opplysninger,
  );

  const arbeidsInntekstSiste12MndOpplysning = finnOpplysningMedNavn(
    "Arbeidsinntekt siste 12 mnd",
    props.opplysninger,
  );
  const arbeidsInntekstSiste36MndOpplysning = finnOpplysningMedNavn(
    "Arbeidsinntekt siste 36 mnd",
    props.opplysninger,
  );

  const resultStyle =
    harKravDagpengerOpplysning?.verdi === "true" ? styles.approved : styles.denied;

  return (
    <div className={styles.container}>
      <Heading size={"large"}>Behandlingsoversikt</Heading>

      <BodyLong className={styles.forslagBody}>
        Etter opplysningene som er tilgjengelig har regelmotoren landet på et resultat av
        behandlingen. Se nøkkelpunkter for å få en oversikt.
      </BodyLong>

      <Table className={"table--subtle-zebra"}>
        <Table.Body>
          <Table.Row className={resultStyle}>
            <Table.DataCell colSpan={2}>
              {harKravDagpengerOpplysning && (
                <>
                  {harKravDagpengerOpplysning?.verdi === "true" ? (
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
                </>
              )}

              {!harKravDagpengerOpplysning && (
                <span>Kunne ikke hente opplysning "Krav på dagpenger"</span>
              )}
            </Table.DataCell>
          </Table.Row>

          <Table.Row>
            <Table.DataCell>Et Beregnet Virkningstidspunkt</Table.DataCell>
            <Table.DataCell>
              {formaterOpplysningVerdi(beregnetVirkningsTidspunktOpplysning)}
            </Table.DataCell>
          </Table.Row>

          <Table.Row>
            <Table.DataCell>Søknadsdato</Table.DataCell>
            <Table.DataCell>{formaterOpplysningVerdi(soknadsDatoOpplysning)}</Table.DataCell>
          </Table.Row>

          <Table.Row>
            <Table.DataCell>Krav til alder</Table.DataCell>
            <Table.DataCell>{formaterOpplysningVerdi(kravTilAlderOpplysning)}</Table.DataCell>
          </Table.Row>

          <Table.Row>
            <Table.DataCell>Krav til Minsteinntekt</Table.DataCell>
            <Table.DataCell>{formaterOpplysningVerdi(kravTilInntektOpplysning)}</Table.DataCell>
          </Table.Row>

          {kravTilInntektOpplysning?.verdi === "false" && (
            <>
              <Table.Row>
                <Table.DataCell>Arbeidsinntekt siste 12 mnd</Table.DataCell>
                <Table.DataCell>
                  {formaterOpplysningVerdi(arbeidsInntekstSiste12MndOpplysning)}
                </Table.DataCell>
              </Table.Row>

              <Table.Row>
                <Table.DataCell>Arbeidsinntekt siste 36 mnd</Table.DataCell>
                <Table.DataCell>
                  {formaterOpplysningVerdi(arbeidsInntekstSiste36MndOpplysning)}
                </Table.DataCell>
              </Table.Row>
            </>
          )}

          <Table.Row>
            <Table.DataCell>Krav til Arbeidssøker</Table.DataCell>
            <Table.DataCell>
              {formaterOpplysningVerdi(kravTilArbeidssokerOpplysning)}
            </Table.DataCell>
          </Table.Row>

          <Table.Row>
            <Table.DataCell>Registrert som arbeidssøker på søknadstidspunktet</Table.DataCell>
            <Table.DataCell>
              {formaterOpplysningVerdi(registrertSomArbeidssokerOpplysning)}
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

function formaterOpplysningVerdi(opplysning?: IOpplysning) {
  if (!opplysning) {
    return "Kan ikke hente opplysning";
  }

  switch (opplysning.datatype) {
    case "boolsk":
      return opplysning.verdi === "true" ? "Ja" : "Nei";

    case "dato":
      return formaterNorskDato(opplysning.verdi);

    case "penger":
      return <>{formaterTallMedTusenSeperator(opplysning.verdi)} kr</>;

    case "heltall":
    case "desimaltall":
      return <>{formaterTallMedTusenSeperator(opplysning.verdi)}</>;

    default:
      return opplysning.verdi;
  }
}
