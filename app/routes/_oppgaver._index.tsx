import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { Button, Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { useFetcher, useNavigation } from "@remix-run/react";
import { hentNesteOppgave, leggTilbakeOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/index.module.css";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

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

    case "tildel-neste-oppave":
      const oppgave = await hentNesteOppgave(request);
      return redirect(`/oppgave/${oppgave.oppgaveId}/behandle`);

    default:
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.searchParams.has("tilstand")) {
    url.searchParams.set("tilstand", "KLAR_TIL_BEHANDLING");
    throw redirect(url.toString());
  }

  return {};
}

export default function Saksbehandling() {
  const { state } = useNavigation();
  const { oppgaver } = useTypedRouteLoaderData("routes/_oppgaver");
  const fetcher = useFetcher<typeof action>();

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
        <div className={styles.oppgaveListeMeta}>
          <fetcher.Form method="post">
            <Button
              variant="primary"
              size="small"
              name="_action"
              value="tildel-neste-oppave"
              loading={state !== "idle"}
              disabled={state !== "idle"}
            >
              Tildel neste oppgave
            </Button>
          </fetcher.Form>
        </div>
        <OppgaveListe oppgaver={oppgaver} />
      </main>
    </div>
  );
}
