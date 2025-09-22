import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";

import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterUtløstAv } from "~/components/oppgave-filter-utløst-av/OppgaveFilterUtløstAv";

import { OppgaveFilterEmneknagger } from "../oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { OppgaveFilterMineOppgaver } from "../oppgave-filter-mine-oppgaver/OppgaveFilterMineOppgaver";
import { OppgaveFilterStatus } from "../oppgave-filter-status/OppgaveFilterStatus";
import styles from "./OppgaveListeMeny.module.css";

export function OppgaveListeMeny() {
  return (
    <Tabs defaultValue="filter" size="small" className={styles.stickyTabs}>
      <Tabs.List>
        <Tabs.Tab value="filter" label="Filter" icon={<FunnelIcon title="filter" aria-hidden />} />
        <Tabs.Tab
          value="statistikk"
          label="Statistikk"
          icon={<BarChartIcon title="statistikk" aria-hidden />}
        />
      </Tabs.List>

      <Tabs.Panel value="filter" className={styles.tabPanel}>
        <OppgaveFilterMineOppgaver />
        <OppgaveFilterDato />
        <OppgaveFilterStatus />
        <OppgaveFilterUtløstAv />
        <OppgaveFilterEmneknagger />
      </Tabs.Panel>

      <Tabs.Panel value="statistikk" className={styles.tabPanel}>
        Statistikk
      </Tabs.Panel>
    </Tabs>
  );
}
