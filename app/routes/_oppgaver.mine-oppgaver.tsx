import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OppgaveFilterStatus } from "~/components/oppgave-filter-status/OppgaveFilterStatus";
import { Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import styles from "~/route-styles/index.module.css";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.searchParams.has("mineOppgaver")) {
    url.searchParams.set("mineOppgaver", "true");
    throw redirect(url.toString());
  }

  return {};
}

export default function Saksbehandling() {
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
            <OppgaveFilterDato />
            <OppgaveFilterStatus />
            <OppgaveFilterType />
            <OppgaveFilterEmneknagger />
          </Tabs.Panel>

          <Tabs.Panel value="statistikk" className={tabStyles.tabPanel}>
            Statistikk
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <OppgaveListe />
      </main>
    </div>
  );
}
