import { NavLink } from "@remix-run/react";
import classNames from "classnames";

import styles from "./PersonOversiktTabs.module.css";

export function PersonOversiktTabs() {
  return (
    <div className={styles.kontainer}>
      {tabsKonfig.map((tab) => {
        return (
          <NavLink
            key={tab.url}
            to={tab.url}
            className={({ isActive }) => {
              return isActive ? classNames(styles.tabAktiv, styles.tab) : styles.tab;
            }}
          >
            {tab.label}
          </NavLink>
        );
      })}
    </div>
  );
}

const tabsKonfig = [
  {
    url: "vilkaar",
    label: "Vilkår",
  },
  {
    url: "rapportering-og-utbetaling",
    label: "Rapportering og utbetaling",
  },
  {
    url: "beslutning",
    label: "Beslutningslogg (Vedtak)",
  },
  {
    url: "dagsats-og-beregning",
    label: "Dagsats og beregning",
  },
];
