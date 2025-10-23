import classnames from "classnames";
import { useLocation } from "react-router";

import { LoadingLink } from "~/components/loading-link/LoadingLink";

import styles from "./LinkTabs.module.css";

interface IProps {
  tabs: Array<{ url: string; label: string; icon: React.ReactNode }>;
  className?: string;
}

export function LinkTabs(props: IProps) {
  const location = useLocation();

  return (
    <nav className={props.className}>
      <ol className={styles.container}>
        {props.tabs.map((tab) => (
          <li key={tab.url}>
            <LoadingLink
              to={`${tab.url}`}
              className={classnames(styles.lenke, {
                [styles.lenkeAktiv]: location.pathname === tab.url,
              })}
            >
              {tab.icon}
              {tab.label}
            </LoadingLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}
