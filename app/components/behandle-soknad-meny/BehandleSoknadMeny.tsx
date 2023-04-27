import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import styles from "./BehandleSoknadMeny.module.css";

interface IProps {
  tilstand: string;
}

export function BehandleSoknadMeny({ tilstand }: IProps) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink
            to="mangelbrev"
            className={({ isActive }) => {
              return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
            }}
          >
            Lag mangelbrev
          </NavLink>
        </li>
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

        {tilstand && tilstand === "Innstilt" && (
          <>
            <li>
              <NavLink
                to="godkjenne-vedtak"
                className={({ isActive }) => {
                  return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
                }}
              >
                Vurder saksbehandling
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
