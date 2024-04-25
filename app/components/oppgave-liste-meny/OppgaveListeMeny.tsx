import { Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterStatus } from "../oppgave-filter-status/OppgaveFilterStatus";
import { OppgaveFilterMineOppgaver } from "../oppgave-filter-mine-oppgaver/OppgaveFilterMineOppgaver";
import { OppgaveFilterEmneknagger } from "../oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import styles from "./OppgaveListeMeny.module.css";

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
        <OppgaveFilterMineOppgaver />
        <OppgaveFilterDato />
        <OppgaveFilterStatus />
        <OppgaveFilterEmneknagger />
        <OppgaveFilterType />
      </Tabs.Panel>

      <Tabs.Panel value="statistikk" className={styles.tabPanel}>
        Statistikk
      </Tabs.Panel>
    </Tabs>
  );
}
