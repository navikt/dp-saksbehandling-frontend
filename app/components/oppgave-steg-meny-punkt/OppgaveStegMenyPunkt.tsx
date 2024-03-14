import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import type { ISteg } from "~/models/oppgave.server";
import styles from "./OppgaveStegMenyPunkt.module.css";

export function OppgaveStegMenyPunkt(behandlingSteg: ISteg) {
  const kulepunktKlasser = classNames(styles.kulepunkt, {
    [styles.kulepunktGroenn]: behandlingSteg.tilstand === "Groenn",
    [styles.kulepunktGul]: behandlingSteg.tilstand === "Gul",
    [styles.kulepunktMaaRoed]: behandlingSteg.tilstand === "Roed",
  });

  return (
    <li>
      <NavLink
        to={`${behandlingSteg.urn}`}
        className={({ isActive }) =>
          isActive ? classNames(styles.kulepunktActive, kulepunktKlasser) : kulepunktKlasser
        }
      >
        {behandlingSteg.urn}
      </NavLink>
    </li>
  );
}
