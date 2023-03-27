import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import React from "react";
import styles from "./BehandleSoknadMeny.module.css";

export function BehandleSoknadMeny() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink
            to={"mangelbrev"}
            className={({ isActive }) => {
              return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
            }}
          >
            Lag mangelbrev
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"vedtaksbrev"}
            className={({ isActive }) => {
              return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
            }}
          >
            Lag vedtaksbrev
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"to-trinnskontroll"}
            className={({ isActive }) => {
              return isActive ? classNames(styles.lenkeAktiv, styles.lenke) : styles.lenke;
            }}
          >
            Send til to-trinnskontroll
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
