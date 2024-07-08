import React from "react";
import { OpplysningTabellSidebar } from "./OpplysningTabellSidebar";
import type { IOpplysning } from "~/models/behandling.server";
import styles from "./OpplysningTabell.module.css";
import { opplysningsMap } from "./OpplysningMap";
import { Table } from "@navikt/ds-react";
import { OpplysningTabellLinje } from "./OpplysningTabellLinje";
import classNames from "classnames";

interface IProps {
  opplysninger: IOpplysning[];
  readonly: boolean;
}

export function OpplysningTabell(props: IProps) {
  const keys = Object.keys(opplysningsMap);
  const [selectedKategori, setSelectedKategori] = React.useState(keys[0]);

  const filteredOpplysning = props.opplysninger.filter((opplysning) => {
    if (opplysningsMap[selectedKategori].values.length == 0) {
      return true;
    }
    return opplysningsMap[selectedKategori].values.includes(opplysning.navn);
  });

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <OpplysningTabellSidebar
          kategorier={opplysningsMap}
          kategori={selectedKategori}
          onChange={setSelectedKategori}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.kategoriHeader}>
          <h1>{opplysningsMap[selectedKategori].header}</h1>
          <p>{opplysningsMap[selectedKategori].description}</p>
          <Table className={classNames("kompakt-tabell", styles.table)}>
            <tbody>
              {filteredOpplysning.map((opplysning) => (
                <OpplysningTabellLinje
                  key={opplysning.navn}
                  opplysning={opplysning}
                  readonly={props.readonly}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
