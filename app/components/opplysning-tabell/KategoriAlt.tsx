import type { KategoriProps } from "./OpplysningTabellContent";
import styles from "./OpplysningTabell.module.css";
import { Table } from "@navikt/ds-react";
import { OpplysningTabellLinje } from "./OpplysningTabellLinje";

export function KategoriAllInformasjon({ opplysninger, readonly }: KategoriProps) {
  return (
    <div>
      <div className={styles.kategoriHeader}>
        <h1>All Informasjon</h1>
        <p>All informasjon i en liste.</p>
      </div>
      <Table>
        {opplysninger.map((opplysning) => (
          <OpplysningTabellLinje
            key={opplysning.navn}
            opplysning={opplysning}
            readonly={readonly}
          />
        ))}
      </Table>
    </div>
  );
}
