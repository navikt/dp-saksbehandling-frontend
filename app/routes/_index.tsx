import { BarChartIcon, FunnelIcon, LayersIcon } from "@navikt/aksel-icons";
import { Button, Tabs } from "@navikt/ds-react";
import { useEffect } from "react";
import {
  ActionFunctionArgs,
  data,
  Form,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from "react-router";

import { OppgaveFilterAvslagsgrunner } from "~/components/oppgave-filter-avslagsgrunner/OppgaveFilterAvslagsgrunner";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterRettighetstype } from "~/components/oppgave-filter-rettighetstype/OppgaveFilterRettighetstype";
import { OppgaveFilterStatus } from "~/components/oppgave-filter-status/OppgaveFilterStatus";
import { OppgaveFilterUtløstAv } from "~/components/oppgave-filter-utløst-av/OppgaveFilterUtløstAv";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { Statistikk } from "~/components/statistikk/Statistikk";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentOppgaver, hentStatistikkForSaksbehandler } from "~/models/saksbehandling.server";
import styles from "~/route-styles/index.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const oppgaverTilBehandlingDefaultParams = [
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
  const [searchParams] = useSearchParams();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const actionData = useActionData<typeof action>();
  const { alert, oppgaver, statistikk, totaltAntallOppgaver } = useLoaderData<typeof loader>();
  const { setAktivtOppgaveSok } = useSaksbehandler();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  useEffect(() => {
    setAktivtOppgaveSok(searchParams.toString());
  }, [searchParams]);

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
            <Tabs.Tab
              value="statistikk"
              label="Statistikk"
              icon={<BarChartIcon title="statistikk" aria-hidden />}
            />
          </Tabs.List>

          <Tabs.Panel value="filter" className={styles.tabPanel}>
            <OppgaveFilterDato />
            <OppgaveFilterStatus
              tilgjengeligTilstander={["KLAR_TIL_BEHANDLING", "KLAR_TIL_KONTROLL"]}
            />
            <OppgaveFilterUtløstAv />
            <OppgaveFilterRettighetstype />
            <OppgaveFilterAvslagsgrunner />
          </Tabs.Panel>

          <Tabs.Panel value="statistikk">
            <Statistikk statistikk={statistikk} />
          </Tabs.Panel>
        </Tabs>
      </aside>

      <main>
        <Form method="post" className={"mb-2"}>
          <input hidden={true} readOnly={true} name="_action" value="hent-neste-oppgave" />
          <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
          <Button
            variant="primary"
            size="small"
            type="submit"
            loading={state !== "idle"}
            disabled={state !== "idle"}
          >
            Neste oppgave
          </Button>
        </Form>

        <div className={"card"}>
          <OppgaveListe
            tittel={"Oppgaver til behandling"}
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
