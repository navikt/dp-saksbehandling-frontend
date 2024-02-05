import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import type { IOppgaveSteg } from "~/models/oppgave.server";
import styles from "./OppgaveStegMenyPunkt.module.css";

export function OppgaveStegMenyPunkt(behandlingSteg: IOppgaveSteg) {
  const kulepunktKlasser = classNames(styles.kulepunkt, {
    [styles.kulepunktGroenn]: behandlingSteg.tilstand === "Groenn",
    [styles.kulepunktGul]: behandlingSteg.tilstand === "Gul",
    [styles.kulepunktMaaRoed]: behandlingSteg.tilstand === "Roed",
  });

  return (
    <li>
      <NavLink
        to={`${behandlingSteg.uuid}`}
        className={({ isActive }) =>
          isActive ? classNames(styles.kulepunktActive, kulepunktKlasser) : kulepunktKlasser
        }
      >
        {TektstForStegNavn(behandlingSteg.stegNavn)}
      </NavLink>
    </li>
  );
}

function TektstForStegNavn(stegNavn: string) {
  switch (stegNavn) {
    case "gjenopptak-eller-lukket-sak-8uker":
      return "Gjenopptak eller lukket sak";
    case "minste-arbeidsinntekt":
      return "Minste arbeidsinntekt";
    default:
      return stegNavn;
  }
}
