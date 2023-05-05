import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import styles from "./BehandleSoknadMeny.module.css";
import type { TOppgaveTilstand } from "~/models/oppgave.server";

interface IProps {
  tilstand: TOppgaveTilstand;
  muligetilstander: TOppgaveTilstand[];
}

export function BehandleSoknadMeny({ tilstand, muligetilstander }: IProps) {
  console.log(muligetilstander);
  return (
    <div className={styles.container}>
      <ul>
        {(tilstand === "TilBehandling" || tilstand === "VentPåMangelbrev") && (
          <li>
            <NavLink
              to="mangelbrev"
              className={({ isActive }) => {
                return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
              }}
            >
              Mangelbrev
            </NavLink>
          </li>
        )}
        {tilstand === "TilBehandling" && (
          <li>
            <NavLink
              to="vedtaksbrev"
              className={({ isActive }) => {
                return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
              }}
            >
              Lag vedtaksbrev
            </NavLink>
          </li>
        )}

        {tilstand === "Innstilt" && (
          <li>
            <NavLink
              to="vurder-saksbehandling"
              className={({ isActive }) => {
                return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
              }}
            >
              Vurder saksbehandling
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
