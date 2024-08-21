import { OpplysningTabellSidebar } from "./OpplysningTabellSidebar";
import type { IOpplysning } from "~/models/behandling.server";
import { opplysningsMap } from "./OpplysningMap";
import { BodyLong, Heading, Table } from "@navikt/ds-react";
import { OpplysningTabellLinje } from "./OpplysningTabellLinje";
import { useState } from "react";
import classNames from "classnames";
import styles from "./OpplysningTabell.module.css";

interface IProps {
  opplysninger: IOpplysning[];
}

export function OpplysningTabell(props: IProps) {
  const keys = Object.keys(opplysningsMap);
  const [selectedKategori, setSelectedKategori] = useState(keys[0]);

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
        <Heading size={"large"}>{opplysningsMap[selectedKategori].header}</Heading>
        <BodyLong className={styles.opplysningKategoriBody}>
          {opplysningsMap[selectedKategori].description}
        </BodyLong>
        <Table className={classNames("table--compact", "table--subtle-zebra", styles.table)}>
          <Table.Body>
            {filteredOpplysning.map((opplysning) => (
              <OpplysningTabellLinje key={opplysning.navn} opplysning={opplysning} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
