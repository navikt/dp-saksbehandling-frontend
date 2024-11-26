import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { useNavigation } from "@remix-run/react";

import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { OppgaveFilterMineOppgaver } from "~/components/oppgave-filter-mine-oppgaver/OppgaveFilterMineOppgaver";
import { OppgaveFilterStatus } from "~/components/oppgave-filter-status/OppgaveFilterStatus";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/index.module.css";

export default function Saksbehandling() {
  const { state } = useNavigation();
  const { oppgaver } = useTypedRouteLoaderData("routes/_oppgaver");
  return (
    <div className={styles.container}>
      <aside className={styles.venstreMeny}>
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
            <OppgaveFilterEmneknagger />
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <OppgaveListe
          oppgaver={oppgaver}
          visAntallOppgaver={true}
          lasterOppgaver={state !== "idle"}
        />
      </main>
    </div>
  );
}
