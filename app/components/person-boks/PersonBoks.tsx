import { BodyShort, CopyButton } from "@navikt/ds-react";
import { FigureOutwardFillIcon, SilhouetteFillIcon } from "@navikt/aksel-icons";
import styles from "./PersonBoks.module.css";
import type { IPerson } from "~/models/oppgave.server";

interface IProps {
  person: IPerson;
}

export function PersonBoks({ person }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.navnContainer}>
        <span className={styles.iconContainer}>
          {person.kjonn === "MANN" && (
            <SilhouetteFillIcon title="" fontSize="1.5rem" color="white" />
          )}
          {person.kjonn === "KVINNE" && (
            <FigureOutwardFillIcon title="" fontSize="1.5rem" color="white" />
          )}
        </span>

        <BodyShort size="small" weight="semibold">
          {`${person.fornavn} ${person.mellomnavn || ""} ${person.etternavn}`}
        </BodyShort>
      </div>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Personnummer: <b>{person.ident}</b> <CopyButton copyText={person.ident} size="xsmall" />
      </BodyShort>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Alder: <b>{person.alder}</b>
      </BodyShort>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Kjønn: <b>{person.kjonn}</b>
      </BodyShort>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Statsborgerskap: <b>{person.statsborgerskap}</b>
      </BodyShort>
    </div>
  );
}
