import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import styles from "~/route-styles/index.module.css";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { commitSession, getSession } from "~/sessions";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.search) {
    const paramsToAppend = [
      { key: "tilstand", value: "KLAR_TIL_KONTROLL" },
      { key: "tilstand", value: "KLAR_TIL_BEHANDLING" },
    ];

    let appended = false;
    for (const { key, value } of paramsToAppend) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }

    if (appended) {
      return redirect(url.toString());
    }
  }

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  if (alert) {
    return json(
      { alert },
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      },
    );
  }

  return null;
}

export default function Saksbehandling() {
  const { state } = useNavigation();
  const loaderData = useLoaderData<typeof loader>();
  const { oppgaver } = useTypedRouteLoaderData("routes/_oppgaver");
  useHandleAlertMessages(loaderData?.alert);

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
            <OppgaveFilterType />
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
          visNesteOppgaveKnapp={true}
          visAntallOppgaver={true}
          lasterOppgaver={state !== "idle"}
        />
      </main>
    </div>
  );
}
