import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { OppgaveFilterStatus } from "~/components/oppgave-filter-status/OppgaveFilterStatus";
import styles from "~/route-styles/index.module.css";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { OppgaveFilterMineOppgaver } from "~/components/oppgave-filter-mine-oppgaver/OppgaveFilterMineOppgaver";

export default function Saksbehandling() {
  const { oppgaver } = useTypedRouteLoaderData("routes/_oppgaver");
  return (
    <div className={styles.container}>
      <aside className={styles.leftColumn}>
        <Tabs defaultValue="filter" size="small" className={tabStyles.stickyTabs}>
          <Tabs.List>
            <Tabs.Tab
              value="filter"
              label="Filter"
              icon={<FunnelIcon title="filter" aria-hidden />}
            />
            <Tabs.Tab
              value="statistikk"
              label="Statistikk"
              icon={<BarChartIcon title="statistikk" aria-hidden />}
            />
          </Tabs.List>

          <Tabs.Panel value="filter" className={tabStyles.tabPanel}>
            <OppgaveFilterMineOppgaver />
            <OppgaveFilterDato />
            <OppgaveFilterStatus />
            <OppgaveFilterType />
            <OppgaveFilterEmneknagger />
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <OppgaveListe oppgaver={oppgaver} visAntallOppgaver={true} />
      </main>
    </div>
  );
}
