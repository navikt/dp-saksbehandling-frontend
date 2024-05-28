import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { leggTilbakeOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/index.module.css";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";
import { useGlobalAlerts } from "~/hooks/useGlobalAlerts";
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import type { action as hentNesteOppgaveAction } from "~/routes/_oppgaver.hent-neste-oppgave";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("_action");

  switch (action) {
    case "legg-tilbake":
      const oppgaveId = formData.get("oppgaveId") as string;
      if (!oppgaveId) {
        throw new Error("Mangler oppgaveId");
      }
      return await leggTilbakeOppgave(request, oppgaveId);

    default:
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  const appended = appendSearchParamIfNotExists(
    url.searchParams,
    "tilstand",
    "KLAR_TIL_BEHANDLING",
  );

  if (appended) {
    return redirect(url.toString());
  }

  return null;
}

export default function Saksbehandling() {
  const { addAlert } = useGlobalAlerts();
  const { oppgaver } = useTypedRouteLoaderData("routes/_oppgaver");
  const nesteFetcher = useFetcher<typeof hentNesteOppgaveAction>({ key: "hent-neste-oppgave" });

  useEffect(() => {
    if (nesteFetcher.data?.alert) {
      addAlert({
        variant: "success",
        title: "Ingen flere oppgaver 🎉",
        body: "Alle oppgaver med dette søket er ferdig behandlet",
      });
    }
  }, [nesteFetcher.data, addAlert]);

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
            <OppgaveFilterType />
            <OppgaveFilterEmneknagger />
          </Tabs.Panel>

          <Tabs.Panel value="statistikk" className={tabStyles.tabPanel}>
            Statistikk
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <OppgaveListe oppgaver={oppgaver} nesteOppgaveKnapp={true} />
      </main>
    </div>
  );
}
