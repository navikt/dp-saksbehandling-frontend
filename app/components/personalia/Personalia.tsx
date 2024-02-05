import React from "react";
import styles from "./Personalia.module.css";
import { BodyShort } from "@navikt/ds-react";
import type { HentPersonQuery } from "../../../graphql/generated/pdl/graphql";

function visAdresse(person: HentPersonQuery["hentPerson"]) {
  if (person?.kontaktadresse[0]?.vegadresse) {
    return `${person.kontaktadresse[0].vegadresse?.adressenavn} ${person.kontaktadresse[0].vegadresse?.husnummer} ${person.kontaktadresse[0].vegadresse?.postnummer}`;
  }

  return "-";
}

export function Personalia(person: HentPersonQuery["hentPerson"]) {
  return (
    <div className={styles.container}>
      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Telefon
        </BodyShort>
        <BodyShort>{person?.telefonnummer.map((tlf) => tlf.nummer)}</BodyShort>
      </div>
      {person?.kontaktadresse[0] && (
        <div>
          <BodyShort size={"small"} textColor={"subtle"}>
            Kontaktadresse
          </BodyShort>
          <BodyShort>{visAdresse(person)}</BodyShort>
        </div>
      )}

      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Statsborgerskap
        </BodyShort>
        <BodyShort>{person?.statsborgerskap[0]?.land}</BodyShort>
      </div>

      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Utflytting fra Norge
        </BodyShort>
        <BodyShort>
          {person?.utflyttingFraNorge ? person.utflyttingFraNorge[0]?.utflyttingsdato : "-"}
        </BodyShort>
      </div>

      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Antall barn
        </BodyShort>
        <BodyShort>{0}</BodyShort>
      </div>
    </div>
  );
}
