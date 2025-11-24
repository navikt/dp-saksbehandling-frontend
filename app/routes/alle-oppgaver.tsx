import { FunnelIcon, LayersIcon } from "@navikt/aksel-icons";
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

import { OppgaveFilterAvslagsgrunner } from "~/components/oppgave-filter/OppgaveFilterAvslagsgrunner";
import { OppgaveFilterDato } from "~/components/oppgave-filter/OppgaveFilterDato";
import { OppgaveFilterMineOppgaver } from "~/components/oppgave-filter/OppgaveFilterMineOppgaver";
import { OppgaveFilterRettighetstype } from "~/components/oppgave-filter/OppgaveFilterRettighetstype";
import { OppgaveFilterStatus } from "~/components/oppgave-filter/OppgaveFilterStatus";
import { OppgaveFilterUtløstAv } from "~/components/oppgave-filter/OppgaveFilterUtløstAv";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgaver } from "~/models/saksbehandling.server";
import styles from "~/route-styles/index.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const alleOppgaverDefaultParams = [
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
    for (const { key, value } of alleOppgaverDefaultParams) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }

    if (appended) {
      return redirect(url.toString());
    }
  }

  const oppgaverResponse = await hentOppgaver(request, url.searchParams);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
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
  const actionData = useActionData<typeof action>();
  const { alert, oppgaver, totaltAntallOppgaver } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className={styles.container}>
      <aside className={styles.venstreMeny}>
        <Tabs defaultValue="filter" size="small" className={styles.stickyTabs}>
          <Tabs.List>
            <Tabs.Tab
              value="filter"
              label="Filter"
              icon={<FunnelIcon title="filter" aria-hidden />}
            />
          </Tabs.List>

          <Tabs.Panel value="filter" className={styles.tabPanel}>
            <OppgaveFilterMineOppgaver />
            <OppgaveFilterDato />
            <OppgaveFilterUtløstAv />
            <OppgaveFilterStatus />
            <OppgaveFilterRettighetstype />
            <OppgaveFilterAvslagsgrunner />
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <div className={"card"}>
          <OppgaveListe
            tittel={"Alle oppgaver"}
            icon={<LayersIcon fontSize="1.5rem" aria-hidden />}
            oppgaver={oppgaver}
            totaltAntallOppgaver={totaltAntallOppgaver}
            lasterOppgaver={state !== "idle"}
          />
        </div>
      </main>
    </div>
  );
}
