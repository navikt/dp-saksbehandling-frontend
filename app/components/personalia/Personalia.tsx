import React from "react";
import styles from "./Personalia.module.css";
import { BodyShort } from "@navikt/ds-react";
import type { IPerson, Kontaktadresse } from "~/models/pdl.server";

function visAdresse(kontaktadresse: Kontaktadresse) {
  if (kontaktadresse.vegadresse) {
    return `${kontaktadresse.vegadresse?.adressenavn} ${kontaktadresse.vegadresse?.husnummer} ${kontaktadresse.vegadresse?.postnummer}`;
  }
  if (kontaktadresse.utenlandskAdresse) {
    return `${kontaktadresse.utenlandskAdresse?.adressenavnNummer} ${kontaktadresse.utenlandskAdresse?.bygningEtasjeLeilighet} ${kontaktadresse.utenlandskAdresse?.postkode}  ${kontaktadresse.utenlandskAdresse?.landkode}`;
  }
  if (kontaktadresse.utenlandskAdresseIFrittFormat) {
    return `${kontaktadresse.utenlandskAdresseIFrittFormat?.adresselinje1} ${kontaktadresse.utenlandskAdresseIFrittFormat?.adresselinje1} ${kontaktadresse.utenlandskAdresseIFrittFormat?.adresselinje1} ${kontaktadresse.utenlandskAdresseIFrittFormat?.postkode}  ${kontaktadresse.utenlandskAdresseIFrittFormat?.landkode}`;
  }
  return "-";
}

export function Personalia(person: IPerson) {
  return (
    <div className={styles.container}>
      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Telefon
        </BodyShort>
        <BodyShort>{person.telefon}</BodyShort>
      </div>
      {person.kontaktadresse && (
        <div>
          <BodyShort size={"small"} textColor={"subtle"}>
            Kontaktadresse
          </BodyShort>
          <BodyShort>{visAdresse(person.kontaktadresse)}</BodyShort>
        </div>
      )}

      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Statsborgerskap
        </BodyShort>
        <BodyShort>{person.statsborgerskap}</BodyShort>
      </div>

      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Utflytting fra Norge
        </BodyShort>
        <BodyShort>{person.utflyttingFraNorge ? person.utflyttingFraNorge : "-"}</BodyShort>
      </div>
      {person.antallBarn && (
        <div>
          <BodyShort size={"small"} textColor={"subtle"}>
            Antall barn
          </BodyShort>
          <BodyShort>{person.antallBarn}</BodyShort>
        </div>
      )}
    </div>
  );
}
