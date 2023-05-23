import { NavLink } from "@remix-run/react";
import styles from "./PersonOversiktTabs.module.css";
import classNames from "classnames";

const tabsKonfig = [
  {
    url: "vilkaar",
    label: "Vilkår",
  },
  {
    url: "rapportering-og-utbetaling",
    label: "Rapportering og Utbetaling",
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
