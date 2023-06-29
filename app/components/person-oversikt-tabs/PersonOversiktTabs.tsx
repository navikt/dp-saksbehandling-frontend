import { NavLink, useLocation } from "@remix-run/react";
import classNames from "classnames";

import styles from "./PersonOversiktTabs.module.css";

export function PersonOversiktTabs() {
  const location = useLocation();
  const aktivTab = location.pathname.split("/")[5] || "";

  return (
    <div className={styles.kontainer}>
      {tabsKonfig.map((tab) => {
        return (
          <NavLink
            key={tab.url}
            to={tab.url}
            className={() => {
              return aktivTab === tab.url ? classNames(styles.tabAktiv, styles.tab) : styles.tab;
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
    url: "",
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
