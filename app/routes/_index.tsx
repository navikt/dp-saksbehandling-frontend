import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";

import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { OppgaveListePaginering } from "~/components/oppgave-liste-paginering/OppgaveListePaginering";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgaver } from "~/models/oppgave.server";
import styles from "~/route-styles/index.module.css";
import { commitSession, getSession } from "~/sessions";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const oppgaverTilBehandlingDefaultParams = [
  { key: "tilstand", value: "KLAR_TIL_KONTROLL" },
  { key: "tilstand", value: "KLAR_TIL_BEHANDLING" },
  { key: "emneknagg", value: "Avslag minsteinntekt" },
  { key: "side", value: "1" },
  { key: "antallOppgaver", value: "50" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.search) {
    let appended = false;
    for (const { key, value } of oppgaverTilBehandlingDefaultParams) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }

    if (appended) {
      return redirect(url.toString());
    }
  }

  const oppgaverResponse = await hentOppgaver(request, url.search);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return json(
    {
      alert,
      oppgaver: oppgaverResponse.oppgaver,
      totaltAntallOppgaver: oppgaverResponse.totaltAntallOppgaver,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Saksbehandling() {
  const { state } = useNavigation();
  const { alert, oppgaver, totaltAntallOppgaver } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);

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
          totaltAntallOppgaver={totaltAntallOppgaver}
          visNesteOppgaveKnapp={true}
          visAntallOppgaver={true}
          lasterOppgaver={state !== "idle"}
        />
        <OppgaveListePaginering totaltAntallOppgaver={totaltAntallOppgaver} />
      </main>
    </div>
  );
}
