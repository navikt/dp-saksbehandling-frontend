import { NavLink } from "@remix-run/react";
import { HeaderUtloggingMeny } from "~/components/header-meny/HeaderUtloggingMeny";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import { PersonSok } from "../person-sok/PersonSok";
import styles from "./HeaderMeny.module.css";
import classnames from "classnames";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export function HeaderMeny({ saksbehandler }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            classnames(styles.linkItem, { [styles.linkItemActive]: isActive })
          }
        >
          Oppgaver til behandling
        </NavLink>
        <NavLink
          to={"/mine-oppgaver"}
          className={({ isActive }) =>
            classnames(styles.linkItem, { [styles.linkItemActive]: isActive })
          }
        >
          Mine oppgaver
        </NavLink>

        <NavLink
          to={"/alle-oppgaver"}
          className={({ isActive }) =>
            classnames(styles.linkItem, { [styles.linkItemActive]: isActive })
          }
        >
          Alle oppgaver
        </NavLink>
      </div>

      <div className={styles.searchAndSaksbehandlerContainer}>
        <PersonSok />
        <HeaderUtloggingMeny saksbehandler={saksbehandler} />
      </div>
    </div>
  );
}
