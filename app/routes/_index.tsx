import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { useEffect } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { useActionData, useLoaderData, useNavigation, useSearchParams } from "react-router";

import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterRettighetstype } from "~/components/oppgave-filter-rettighetstype/OppgaveFilterUtfall";
import { OppgaveFilterAvslagsgrunner } from "~/components/oppgave-filter-utfall/OppgaveFilterAvslagsgrunner";
import { OppgaveFilterUtfall } from "~/components/oppgave-filter-utfall/OppgaveFilterUtfall";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { OppgaveListePaginering } from "~/components/oppgave-liste-paginering/OppgaveListePaginering";
import { Statistikk } from "~/components/statistikk/Statistikk";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentOppgaver } from "~/models/saksbehandling.server";
import { hentStatistikkForSaksbehandler } from "~/models/saksbehandling.server";
import styles from "~/route-styles/index.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const oppgaverTilBehandlingDefaultParams = [
  { key: "tilstand", value: "KLAR_TIL_KONTROLL" },
  { key: "tilstand", value: "KLAR_TIL_BEHANDLING" },
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
    for (const { key, value } of oppgaverTilBehandlingDefaultParams) {
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

  return {
    alert,
    statistikk,
    oppgaver: oppgaverResponse.oppgaver,
    totaltAntallOppgaver: oppgaverResponse.totaltAntallOppgaver,
  };
}

export default function Saksbehandling() {
  const { state } = useNavigation();
  const [searchParams] = useSearchParams();
  const actionData = useActionData<typeof action>();
  const { alert, oppgaver, statistikk, totaltAntallOppgaver } = useLoaderData<typeof loader>();
  const { setAktivtOppgaveSok } = useSaksbehandler();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  useEffect(() => {
    setAktivtOppgaveSok(searchParams.toString());
  }, []);

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
            <OppgaveFilterUtfall />
            <OppgaveFilterRettighetstype />
            <OppgaveFilterAvslagsgrunner />
          </Tabs.Panel>

          <Tabs.Panel value="statistikk">
            <Statistikk statistikk={statistikk} />
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
