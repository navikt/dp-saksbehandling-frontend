import { BarChart } from "@mui/x-charts/BarChart";
import { Heading, Tabs } from "@navikt/ds-react";
import {
  type ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  redirect,
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
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const produksjonsstyringDefaultParams = [
  { key: "side", value: "1" },
  { key: "antallOppgaver", value: "99999" },
];

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  if (!url.search) {
    let appended = false;
    for (const { key, value } of produksjonsstyringDefaultParams) {
      appended = appendSearchParamIfNotExists(url.searchParams, key, value) || appended;
    }

    if (appended) {
      return redirect(url.toString());
    }
  }

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
      searchParams.set("oppgavetype", "søknad");
      setSearchParams(searchParams);
    } else {
      searchParams.delete("oppgavetype");
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
            <OppgaveStatusVelger />
            <OppgaveTypeVelger />
          </Tabs.Panel>
          <Tabs.Panel value="søknader" className={"flex flex-col gap-4 py-4"}>
            <PeriodeVelger />
            <OppgaveStatusVelger />
            <OppgaveRettighetVelger />
          </Tabs.Panel>
        </Tabs>
      </div>

      <div className="card flex flex-col gap-6 p-4">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: statistikk.grupper.map((gruppe) => gruppe.navn),
            },
          ]}
          series={statistikk.serier.map((serie) => ({
            data: serie.verdier,
            label: serie.navn,
            stack: "total",
          }))}
          height={500}
        />
      </div>
    </main>
  );
}
