import styles from "./Navnestripe.module.css";
import { CopyButton } from "@navikt/ds-react";

interface IProps {
  navn: string;
  ident: string;
}

export function Navnestripe({ navn, ident }: IProps) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <strong>{navn}</strong>
        </li>
        <li>
          <CopyButton copyText={ident} text={ident} activeText="Kopierte bruker ident" />
        </li>
      </ul>
    </div>
  );
}
