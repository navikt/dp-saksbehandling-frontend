import type { IPerson } from "~/models/person.server";
import styles from "./Brodsmuler.module.css";
import { CopyButton } from "@navikt/ds-react";
import { type HentPersonResponsData } from "~/models/pdl.server";

interface IProps {
  data: HentPersonResponsData;
  ident: string;
}

export function Brodsmuler({ data, ident }: IProps) {
  //const navn = `${person.forNavn} ${person.mellomNavn} ${person.etterNavn}`;

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <strong>?{ident}</strong>
        </li>
        <li>
          <CopyButton copyText={ident} text={ident} activeText="Kopierte bruker ident" />
        </li>
      </ul>
    </div>
  );
}
