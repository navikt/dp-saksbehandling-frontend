import { CopyToClipboard } from "@navikt/ds-react-internal";
import type { IPerson } from "~/models/person.server";
import styles from "./Brodsmuler.module.css";

interface IProps {
  person: IPerson;
}

export function Brodsmuler({ person }: IProps) {
  const navn = `${person.forNavn} ${person.mellomNavn} ${person.etterNavn}`;

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <strong>{navn}</strong>
        </li>
        <li>
          <CopyToClipboard copyText={person.ident} popoverText="Kopierte bruker ident">
            {person.ident}
          </CopyToClipboard>
        </li>
      </ul>
    </div>
  );
}
