import { BodyShort, CopyButton } from "@navikt/ds-react";
import { SilhouetteFillIcon } from "@navikt/aksel-icons";
import styles from "./PersonBoks.module.css";

interface IProps {
  person: {
    navn: string;
    ident: string;
  };
}

export function PersonBoks({ person }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.navnContainer}>
        <span className={styles.iconContainer}>
          {/*<FigureOutwardFillIcon title="" fontSize="1.5rem" color="white" />*/}
          <SilhouetteFillIcon title="" fontSize="1.5rem" color="white" />
        </span>
        <BodyShort size="small" weight="semibold">
          {person.navn}
        </BodyShort>
      </div>

      <BodyShort size="small" textColor="subtle" className={styles.personnummerContainer}>
        Personnummer: {person.ident} <CopyButton copyText={person.ident} size="xsmall" />
      </BodyShort>
      <BodyShort size="small" textColor="subtle">
        Aktør-ID: {person.ident}
      </BodyShort>
    </div>
  );
}
