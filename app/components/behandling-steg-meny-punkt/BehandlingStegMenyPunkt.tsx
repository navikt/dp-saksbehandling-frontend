import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import type { IBehandlingSteg } from "~/models/oppgave.server";
import { hentStegTekst } from "~/tekster/stegTekster";

import styles from "./BehandlingStegMenyPunkt.module.css";

export function BehandlingStegMenyPunkt(behandlingSteg: IBehandlingSteg) {
  const kulepunktKlasser = classNames(styles.kulepunkt, {
    [styles.kulepunktBehandlet]: behandlingSteg.tilstand === "FerdigBehandlet",
    [styles.kulepunktTilBehandlet]: behandlingSteg.tilstand === "TilBehandling",
  });

  const stegLabel = hentStegTekst(behandlingSteg.id)?.label ?? behandlingSteg.id;
  return (
    <li>
      <NavLink
        to={`${behandlingSteg.uuid}`}
        className={({ isActive }) => {
          return isActive ? classNames(styles.kulepunktActive, kulepunktKlasser) : kulepunktKlasser;
        }}
      >
        {stegLabel}
      </NavLink>
    </li>
  );
}
