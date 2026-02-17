import { BarChart } from "@mui/x-charts/BarChart";
import { Heading, Tabs } from "@navikt/ds-react";
import {
  type ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "react-router";

import { OppgaveRettighetVelger } from "~/components/produksjonsstyring/oppgave-rettighet-velger/OppgaveRettighetVelger";
import { OppgaveStatusVelger } from "~/components/produksjonsstyring/oppgave-status-velger/OppgaveStatusVelger";
import { OppgaveTypeVelger } from "~/components/produksjonsstyring/oppgave-type-velger/OppgaveTypeVelger";
import { PeriodeVelger } from "~/components/produksjonsstyring/periode-velger/PeriodeVelger";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentStatistikk } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  const statistikk = await hentStatistikk(request, url.searchParams);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      statistikk,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Produksjonsstyring() {
  const [searchParams, setSearchParams] = useSearchParams();
  const actionData = useActionData<typeof action>();
  const { statistikk, alert } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  function toggleTab(tab: string) {
    if (tab === "søknader") {
      searchParams.set("grupperEtter", "RETTIGHETSTYPE");
      setSearchParams(searchParams);
    } else {
      searchParams.delete("grupperEtter");
      setSearchParams(searchParams);
    }
  }

  if (!statistikk.grupper || !statistikk.serier) {
    return <div>Ingen statistikk tilgjengelig</div>;
  }

  return (
    <main className={"m-4 flex flex-col gap-2"}>
      <div className={"card p-4"}>
        <Heading level={"1"} size={"medium"}>
          Statistikk
        </Heading>

        <Tabs defaultValue="alle" onChange={toggleTab}>
          <Tabs.List>
            <Tabs.Tab value="alle" label="Alle" />
            <Tabs.Tab value="søknader" label="Søknader" />
          </Tabs.List>
          <Tabs.Panel value="alle" className={"flex flex-col gap-4 py-4"}>
            <PeriodeVelger />
            <OppgaveStatusVelger grupper={statistikk.grupper} />
            <OppgaveTypeVelger serier={statistikk.serier} />
          </Tabs.Panel>
          <Tabs.Panel value="søknader" className={"flex flex-col gap-4 py-4"}>
            <PeriodeVelger />
            <OppgaveStatusVelger grupper={statistikk.grupper} />
            <OppgaveRettighetVelger serier={statistikk.serier} />
          </Tabs.Panel>
        </Tabs>
      </div>

      <div className="card flex flex-col gap-6 p-4">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: statistikk.resultat.grupper.map((gruppe) => gruppe.navn),
            },
          ]}
          series={statistikk.resultat.serier.map((serie) => ({
            data: serie.verdier.map((verdi) => verdi.antall),
            label: serie.navn,
            stack: "total",
          }))}
          height={500}
        />
      </div>
    </main>
  );
}
