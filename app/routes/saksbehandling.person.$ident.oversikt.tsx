import { Outlet } from "@remix-run/react";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import { DagpengerStatus } from "~/components/person/DagpengerStatus";
import { PersonOversiktTabs } from "~/components/personOversiktTabs/PersonOversiktTabs";

import styles from "~/route-styles/person.module.css";

export default function PersonOversikt() {
  return (
    <div className={styles.personOversiktKontainer}>
      <DagpengerStatus />
      <DagpengerTidslinje />
      <PersonOversiktTabs />
      <Outlet />
    </div>
  );
}
