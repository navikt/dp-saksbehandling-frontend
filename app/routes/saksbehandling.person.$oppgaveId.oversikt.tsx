import { Outlet } from "@remix-run/react";
import { DagpengerStatus } from "~/components/dagpenger-status/DagpengerStatus";
import { PersonOversiktTabs } from "~/components/person-oversikt-tabs/PersonOversiktTabs";

import styles from "~/route-styles/person.module.css";

export default function PersonOversikt() {
  return (
    <div className={styles.personOversiktKontainer}>
      <DagpengerStatus />
      <PersonOversiktTabs />
      <Outlet />
    </div>
  );
}
