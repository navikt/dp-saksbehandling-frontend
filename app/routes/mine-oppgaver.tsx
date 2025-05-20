import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import {
  type ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";

import { OppgaveFilterAvslagsgrunner } from "~/components/oppgave-filter-avslagsgrunner/OppgaveFilterAvslagsgrunner";
import { OppgaveFilterBehandlingType } from "~/components/oppgave-filter-behandling-type/OppgaveFilterBehandlingType";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterRettighetstype } from "~/components/oppgave-filter-rettighetstype/OppgaveFilterUtfall";
import { OppgaveFilterStatus } from "~/components/oppgave-filter-status/OppgaveFilterStatus";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { Statistikk } from "~/components/statistikk/Statistikk";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgaver, hentStatistikkForSaksbehandler } from "~/models/saksbehandling.server";
import styles from "~/route-styles/index.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const mineOppgaverDefaultParams = [
  { key: "mineOppgaver", value: "true" },
  { key: "tilstand", value: "KLAR_TIL_KONTROLL" },
  { key: "tilstand", value: "KLAR_TIL_BEHANDLING" },
  { key: "tilstand", value: "UNDER_KONTROLL" },
  { key: "tilstand", value: "UNDER_BEHANDLING" },
  { key: "side", value: "1" },
  { key: "antallOppgaver", value: "50" },
];

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.search) {
    let appended = false;
    for (const { key, value } of mineOppgaverDefaultParams) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }

    if (appended) {
      return redirect(url.toString());
    }
  }

  const oppgaverResponse = await hentOppgaver(request, url.searchParams);
  const statistikk = await hentStatistikkForSaksbehandler(request);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      statistikk,
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
  const actionData = useActionData<typeof action>();
  const { alert, oppgaver, totaltAntallOppgaver, statistikk } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

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
            <OppgaveFilterBehandlingType />
            <OppgaveFilterStatus />
            <OppgaveFilterRettighetstype />
            <OppgaveFilterAvslagsgrunner />
          </Tabs.Panel>

          <Tabs.Panel value="statistikk">
            <Statistikk statistikk={statistikk} />
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <div className={"card"}>
          <OppgaveListe
            tittel={"Mine oppgaver"}
            oppgaver={oppgaver}
            visPersonIdent={true}
            totaltAntallOppgaver={totaltAntallOppgaver}
            lasterOppgaver={state !== "idle"}
          />
        </div>
      </main>
    </div>
  );
}
