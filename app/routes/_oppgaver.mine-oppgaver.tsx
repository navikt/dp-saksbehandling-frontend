import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useNavigation } from "@remix-run/react";

import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { OppgaveFilterStatus } from "~/components/oppgave-filter-status/OppgaveFilterStatus";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/index.module.css";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.search) {
    const paramsToAppend = [
      { key: "mineOppgaver", value: "true" },
      { key: "tilstand", value: "KLAR_TIL_KONTROLL" },
      { key: "tilstand", value: "KLAR_TIL_BEHANDLING" },
      { key: "tilstand", value: "UNDER_KONTROLL" },
      { key: "tilstand", value: "UNDER_BEHANDLING" },
    ];

    let appended = false;
    for (const { key, value } of paramsToAppend) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }

    if (appended) {
      return redirect(url.toString());
    }
  }

  return null;
}

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
            <OppgaveFilterDato />
            <OppgaveFilterStatus />
            <OppgaveFilterEmneknagger />
          </Tabs.Panel>

          <Tabs.Panel value="statistikk" className={tabStyles.tabPanel}>
            Statistikk
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <OppgaveListe
          oppgaver={oppgaver}
          visAntallOppgaver={true}
          visPersonIdent={true}
          lasterOppgaver={state !== "idle"}
        />
      </main>
    </div>
  );
}
