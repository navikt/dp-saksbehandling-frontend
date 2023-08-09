import styles from "./Brodsmuler.module.css";
import { CopyButton } from "@navikt/ds-react";
import { type HentPersonResponsData } from "~/models/pdl.server";

interface IProps {
  data: HentPersonResponsData;
  ident: string;
}

export function Brodsmuler({ data, ident }: IProps) {
  let navn;

  if (data.hentPerson.navn) {
    const { fornavn, mellomnavn, etternavn } = data.hentPerson.navn[0];

    navn = `${fornavn} ${mellomnavn} ${etternavn}`;
  }

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
