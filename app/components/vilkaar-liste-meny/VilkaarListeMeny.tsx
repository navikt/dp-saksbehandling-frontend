import React from "react";
import styles from "./VilkaarListeMeny.module.css";
import type { IVilkaar } from "~/models/vilkaar.server";
import { VilkaarListeMenyPunkt } from "~/components/vilkaar-liste-meny/VilkaarListeMenyPunkt";

interface IProps {
  vilkaarListe: IVilkaar[];
}

export function VilkaarListeMeny({ vilkaarListe }: IProps) {
  return (
    <div className={styles.container}>
      <ul>
        {vilkaarListe.map((vilkaar) => (
          <VilkaarListeMenyPunkt key={vilkaar.id} {...vilkaar} />
        ))}
      </ul>
    </div>
  );
}
