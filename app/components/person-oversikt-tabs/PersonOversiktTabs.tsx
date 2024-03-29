import { NavLink, useLocation } from "@remix-run/react";
import classNames from "classnames";

import styles from "./PersonOversiktTabs.module.css";

export function PersonOversiktTabs() {
  const location = useLocation();
  const activeTab = location.pathname.split("/")[5] || "";

  return (
    <div className={styles.container}>
      {tabsConfig.map((tab) => (
        <NavLink
          key={tab.url}
          to={tab.url}
          className={() =>
            activeTab === tab.url ? classNames(styles.tabActive, styles.tab) : styles.tab
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}

const tabsConfig = [
  {
    url: "#1",
    label: "Rapportering og utbetaling",
  },
  {
    url: "#2",
    label: "Vedtak",
  },
];
