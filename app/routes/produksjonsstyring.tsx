import { BarChart } from "@mui/x-charts/BarChart";
import { Heading } from "@navikt/ds-react";
import {
  type ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "react-router";

import { OppgaveRettighetVelger } from "~/components/produksjonsstyring/oppgave-rettighet-velger/oppgaveRettighetVelger";
import { OppgaveStatusVelger } from "~/components/produksjonsstyring/oppgave-status-velger/OppgaveStatusVelger";
import { OppgaveTypeVelger } from "~/components/produksjonsstyring/oppgave-type-velger/OppgaveTypeVelger";
import { PeriodeVelger } from "~/components/produksjonsstyring/periode-velger/PeriodeVelger";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgaver } from "~/models/saksbehandling.server";
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

  const [oppgaverResponse] = await Promise.all([hentOppgaver(request, url.searchParams)]);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      oppgaver: oppgaverResponse.oppgaver,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Produksjonsstyring() {
  const actionData = useActionData<typeof action>();
  const { alert } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const valgtRettighetstyper = searchParams.getAll("rettighetstype");
  const valgteOppgavetyper = searchParams.getAll("oppgavetype");

  // Filtrer rettighetstyper basert på searchParams, vis alle hvis ikke noe er satt
  const filtrerteRettighetstyper =
    valgtRettighetstyper.length > 0
      ? mockBackend.rettighetstyper.filter((type) => valgtRettighetstyper.includes(type))
      : mockBackend.rettighetstyper;

  // Filtrer oppgavetyper basert på searchParams
  const filtrerteOppgavetyper =
    valgteOppgavetyper.length > 0
      ? mockBackend.oppgavetyper.filter((oppgave) => valgteOppgavetyper.includes(oppgave.type))
      : mockBackend.oppgavetyper;

  // Bygg chart series med filtrerte data
  const chartSeries = filtrerteOppgavetyper.map((oppgave) => ({
    data: filtrerteRettighetstyper.map((rettighet) => oppgave.antallPerRettighet[rettighet]),
    label: oppgave.type,
  }));

  return (
    <main className={"m-4 flex flex-col gap-2"}>
      <div className={"card flex flex-col gap-6 p-4"}>
        <Heading level={"1"} size={"medium"}>
          Statistikk
        </Heading>

        <PeriodeVelger />
        <OppgaveStatusVelger />

        <div className={"border-l-10 border-(--ax-border-accent) pl-8"}>
          <OppgaveRettighetVelger />
        </div>

        <div className={"ml-8 border-l-10 border-(--ax-border-accent) pl-8"}>
          <OppgaveTypeVelger />
        </div>
      </div>

      <div className="card flex flex-col gap-6 p-4">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: filtrerteRettighetstyper,
            },
          ]}
          series={chartSeries}
          height={500}
        />
      </div>
    </main>
  );
}

type Rettighetstype =
  | "Ordinære"
  | "Permitering"
  | "Verneplikt"
  | "Fiske-permitering"
  | "Konkurs"
  | "Utdanning"
  | "Etablering"
  | "Eøs";

const mockBackend: {
  rettighetstyper: Rettighetstype[];
  oppgavetyper: { type: string; antallPerRettighet: Record<Rettighetstype, number> }[];
} = {
  rettighetstyper: [
    "Ordinære",
    "Permitering",
    "Verneplikt",
    "Fiske-permitering",
    "Konkurs",
    "Utdanning",
    "Etablering",
    "Eøs",
  ],
  oppgavetyper: [
    {
      type: "Søknader",
      antallPerRettighet: {
        Ordinære: 4,
        Permitering: 3,
        Verneplikt: 5,
        "Fiske-permitering": 2,
        Konkurs: 5,
        Utdanning: 2,
        Etablering: 5,
        Eøs: 1,
      },
    },
    {
      type: "Klager",
      antallPerRettighet: {
        Ordinære: 1,
        Permitering: 6,
        Verneplikt: 3,
        "Fiske-permitering": 1,
        Konkurs: 5,
        Utdanning: 7,
        Etablering: 10,
        Eøs: 5,
      },
    },
    {
      type: "Innsendinger",
      antallPerRettighet: {
        Ordinære: 2,
        Permitering: 5,
        Verneplikt: 6,
        "Fiske-permitering": 9,
        Konkurs: 2,
        Utdanning: 9,
        Etablering: 1,
        Eøs: 4,
      },
    },
    {
      type: "Meldekort",
      antallPerRettighet: {
        Ordinære: 3,
        Permitering: 2,
        Verneplikt: 4,
        "Fiske-permitering": 1,
        Konkurs: 3,
        Utdanning: 5,
        Etablering: 2,
        Eøs: 6,
      },
    },
    {
      type: "Manuelle",
      antallPerRettighet: {
        Ordinære: 1,
        Permitering: 1,
        Verneplikt: 2,
        "Fiske-permitering": 3,
        Konkurs: 1,
        Utdanning: 2,
        Etablering: 3,
        Eøs: 2,
      },
    },
  ],
};
