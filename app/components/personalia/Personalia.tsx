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

      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Kontaktadresse
        </BodyShort>
        <BodyShort>{`${person.kontaktadresse.adressenavn} ${person.kontaktadresse.husnummer} ${person.kontaktadresse.postnummer}`}</BodyShort>
      </div>

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
        <BodyShort>
          {person.utflyttingFraNorge ? person.utflyttingFraNorge.toDateString() : "-"}
        </BodyShort>
      </div>

      <div>
        <BodyShort size={"small"} textColor={"subtle"}>
          Antall barn
        </BodyShort>
        <BodyShort>{person.antallBarn}</BodyShort>
      </div>
    </div>
  );
}
