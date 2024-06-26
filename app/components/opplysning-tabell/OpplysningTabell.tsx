import React from "react";
import styles from "./OpplysningTabell.module.css";
import type { IOpplysning } from "~/models/behandling.server";
import { OpplysningTabellSidebar } from "./OpplysningTabellSidebar";
import { OpplysningTabellContent } from "./OpplysningTabellContent";

interface IProps {
  opplysninger: IOpplysning[];
  readonly: boolean;
}

export function OpplysningTabell(props: IProps) {
  const [selectedKategori, setSelectedKategori] = React.useState("virkningstidspunkt");

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <OpplysningTabellSidebar kategori={selectedKategori} onChange={setSelectedKategori} />
      </div>
      <div className={styles.content}>
        <OpplysningTabellContent
          componentType={selectedKategori}
          opplysninger={props.opplysninger}
          readonly={props.readonly}
        />
      </div>
    </div>
  );
}
