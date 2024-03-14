import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import type { ISteg } from "~/models/oppgave.server";
import styles from "./OppgaveStegMenyPunkt.module.css";
import { useStegTekst } from "~/hooks/useStegTekst";

export function OppgaveStegMenyPunkt(steg: ISteg) {
  const stegTekst = useStegTekst(steg.beskrivendeId);

  const kulepunktKlasser = classNames(styles.kulepunkt, {
    [styles.kulepunktGroenn]: steg.tilstand === "OPPFYLT",
    [styles.kulepunktRoed]: steg.tilstand === "IKKE_OPPFYLT",
    [styles.kulepunktGul]: steg.tilstand === "MANUELL_BEHANDLING",
  });

  return (
    <li>
      <NavLink
        to={`${steg.beskrivendeId}`}
        className={({ isActive }) =>
          isActive ? classNames(styles.kulepunktActive, kulepunktKlasser) : kulepunktKlasser
        }
      >
        {stegTekst.tittel}
      </NavLink>
    </li>
  );
}
