import React from "react";
import styles from "./OppgaveListeMeny.module.css";
import { Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterDato } from "../oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterStatus } from "~/components/oppgave-filter-status/OppgaveFilterStatus";

export function OppgaveListeMeny() {
  return (
    <Tabs defaultValue="filter" size="small">
      <Tabs.List>
        <Tabs.Tab value="filter" label="Filter" icon={<FunnelIcon title="filter" aria-hidden />} />
        <Tabs.Tab
          value="statistikk"
          label="Statistikk"
          icon={<BarChartIcon title="statistikk" aria-hidden />}
        />
      </Tabs.List>

      <Tabs.Panel value="filter" className={styles.tabPanel}>
        <OppgaveFilterDato />
        <OppgaveFilterType />
        <OppgaveFilterStatus />
      </Tabs.Panel>
      <Tabs.Panel value="statistikk" className={styles.tabPanel}>
        Statistikk
      </Tabs.Panel>
    </Tabs>
  );
}
