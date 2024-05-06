import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { Button, Detail, Tabs } from "@navikt/ds-react";
import { BarChartIcon, FunnelIcon } from "@navikt/aksel-icons";
import { OppgaveFilterDato } from "~/components/oppgave-filter-dato/OppgaveFilterDato";
import { OppgaveFilterType } from "~/components/oppgave-filter-type/OppgaveFilterType";
import { OppgaveFilterEmneknagger } from "~/components/oppgave-filter-emneknagger/OppgaveFilterEmneknagger";
import { useFetcher, useNavigation } from "@remix-run/react";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentNesteOppgave, leggTilbakeOppgave } from "~/models/oppgave.server";
import styles from "~/route-styles/index.module.css";
import tabStyles from "~/components/oppgave-liste-meny/OppgaveListeMeny.module.css";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const aksjon = formData.get("aksjon");

  switch (aksjon) {
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
  const { oppgaver } = useTypedRouteLoaderData("routes/_oppgaver");
  const fetcher = useFetcher<typeof action>();
  const { state } = useNavigation();
  const loading = state !== "idle";

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
          <Detail textColor="subtle">
            {!loading && `Antall oppgaver ${oppgaver.length}`}
            {loading && "Laster oppgaver..."}
          </Detail>
          <fetcher.Form method="post">
            <Button
              variant="primary"
              size="small"
              name="aksjon"
              value="tildel-neste-oppave"
              loading={state !== "idle"}
            >
              Tildel neste oppgave
            </Button>
          </fetcher.Form>
        </div>
        <OppgaveListe />
      </main>
    </div>
  );
}
