import React from "react";
import type { IBruker } from "~/models/bruker.server";
import { Tag } from "@navikt/ds-react";
import styles from "./Brodsmuler.module.css";
import { CopyToClipboard } from "@navikt/ds-react-internal";

interface IProps {
  bruker: IBruker;
}

export function Brodsmuler({ bruker }: IProps) {
  const navn = `${bruker.forNavn} ${bruker.mellomNavn} ${bruker.etterNavn}`;

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <strong>{navn}</strong>
        </li>
        <li>
          <CopyToClipboard copyText={bruker.ident} popoverText="Kopierte bruker ident">
            {bruker.ident}
          </CopyToClipboard>
        </li>
        <li>
          <Tag variant={"warning"}>Kode 6</Tag>
        </li>
      </ul>
    </div>
  );
}
