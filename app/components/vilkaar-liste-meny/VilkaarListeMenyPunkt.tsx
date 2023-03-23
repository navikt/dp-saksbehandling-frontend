import React from "react";
import type { IVilkaar } from "~/models/vilkaar.server";
import styles from "./VilkaarListeMeny.module.css";
import { NavLink } from "@remix-run/react";
import classNames from "classnames";

export function VilkaarListeMenyPunkt(vilkaar: IVilkaar) {
  const kulepunktKlasser = classNames(styles.kulepunkt, {
    [styles.kulepunktGodkjent]: vilkaar.status === "Godkjent",
    [styles.kulepunktAvslag]: vilkaar.status === "Avslag",
    [styles.kulepunktManuell]: vilkaar.status === "Manuell",
  });

  return (
    <li>
      <NavLink
        to={`steg/${vilkaar.id}`}
        className={({ isActive }) => {
          return isActive ? classNames(styles.kulepunktActive, kulepunktKlasser) : kulepunktKlasser;
        }}
      >
        {vilkaar.navn}
      </NavLink>
    </li>
  );
}
