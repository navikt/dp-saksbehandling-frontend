import { PersonEnvelopeIcon } from "@navikt/aksel-icons";
import styles from "./Navnestripe.module.css";
import { BodyShort, CopyButton } from "@navikt/ds-react";

interface IProps {
  navn: string;
  ident: string;
}

export function Navnestripe({ navn, ident }: IProps) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <PersonEnvelopeIcon fontSize="1.5rem" />
          <BodyShort size="small" weight="semibold">
            {navn}
          </BodyShort>
        </li>
        <li>
          <CopyButton
            copyText={ident}
            text={ident}
            activeText="Kopierte personnummer"
            size="xsmall"
          />
        </li>
      </ul>
    </div>
  );
}
