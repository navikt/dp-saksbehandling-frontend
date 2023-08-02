import type { IPerson } from "~/models/person.server";
import styles from "./Brodsmuler.module.css";
import { CopyButton } from "@navikt/ds-react";

interface IProps {
  person: IPerson;
}

export function Brodsmuler({ person }: IProps) {
  //const navn = `${person.forNavn} ${person.mellomNavn} ${person.etterNavn}`;

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <strong>?</strong>
        </li>
        <li>
          <CopyButton
            copyText={person.ident}
            text={person.ident}
            activeText="Kopierte bruker ident"
          />
        </li>
      </ul>
    </div>
  );
}
