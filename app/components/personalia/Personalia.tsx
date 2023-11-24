import React from "react";
import styles from "./Personalia.module.css";
import { BodyShort } from "@navikt/ds-react";
import type { IPerson } from "~/models/pdl.server";

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
          <BodyShort>
            {person.kontaktadresse?.utenlandskAdresse
              ? `${person.kontaktadresse?.utenlandskAdresse.adressenavnNummer} ${person.kontaktadresse?.utenlandskAdresse.bygningEtasjeLeilighet} ${person.kontaktadresse?.utenlandskAdresse.postkode}  ${person.kontaktadresse?.utenlandskAdresse.landkode}`
              : `${person.kontaktadresse?.vegadresse?.adressenavn} ${person.kontaktadresse?.vegadresse?.husnummer} ${person.kontaktadresse?.vegadresse?.postnummer}`}
          </BodyShort>
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
