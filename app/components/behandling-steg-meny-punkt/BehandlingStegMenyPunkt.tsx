import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import type { IBehandlingSteg } from "~/models/oppgave.server";

import styles from "./BehandlingStegMenyPunkt.module.css";

export function BehandlingStegMenyPunkt(behandlingSteg: IBehandlingSteg) {
  const kulepunktKlasser = classNames(styles.kulepunkt, {
    [styles.kulepunktUtfort]: behandlingSteg.tilstand === "Utført",
    [styles.kulepunktIkkeUtfort]: behandlingSteg.tilstand === "IkkeUtført",
    [styles.kulepunktMaaGodkjennes]: behandlingSteg.tilstand === "MåGodkjennes",
  });

  return (
    <li>
      <NavLink
        to={`${behandlingSteg.uuid}`}
        className={({ isActive }) => {
          return isActive ? classNames(styles.kulepunktActive, kulepunktKlasser) : kulepunktKlasser;
        }}
      >
        {behandlingSteg.id}
      </NavLink>
    </li>
  );
}
