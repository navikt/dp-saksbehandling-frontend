import { LayersIcon } from "@navikt/aksel-icons";
import {
  type ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router";

import { useOppgaverQuery } from "~/api/oppgave";
import EmneknaggFilter from "~/components/oppgave-filter/EmneknaggFilter";
import { OppgaveFilterDato } from "~/components/oppgave-filter/OppgaveFilterDato";
import { OppgaveFilterStatus } from "~/components/oppgave-filter/OppgaveFilterStatus";
import { OppgaveFilterUtløstAv } from "~/components/oppgave-filter/OppgaveFilterUtløstAv";
import SwitchFilter from "~/components/oppgave-filter/SwitchFilter";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import styles from "~/route-styles/index.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";
import { appendSearchParamIfNotExists } from "~/utils/url.utils";

export const alleOppgaverDefaultParams = [
  { key: "side", value: "1" },
  { key: "antallOppgaver", value: "50" },
  { key: "sorteringsfelt", value: "opprettet" },
  { key: "sortering", value: "DESC" },
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

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      search: url.search,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Saksbehandling() {
  const actionData = useActionData<typeof action>();
  const { alert, search } = useLoaderData<typeof loader>();
  const { oppgaver, totaltAntallOppgaver, isFetching } = useOppgaverQuery(
    new URLSearchParams(search),
  );
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className={styles.container}>
      <nav className={styles.venstreMeny}>
        <div>
          <SwitchFilter param="mineOppgaver">Vis kun mine oppgaver</SwitchFilter>
          <SwitchFilter param="harDpSak">Vis kun DP-saker</SwitchFilter>
        </div>
        <OppgaveFilterDato />
        <OppgaveFilterStatus />
        <OppgaveFilterUtløstAv />
        <EmneknaggFilter />
      </nav>

      <main>
        <div className={"card"}>
          <OppgaveListe
            tittel={"Alle oppgaver"}
            icon={<LayersIcon fontSize="1.5rem" aria-hidden />}
            oppgaver={oppgaver}
            totaltAntallOppgaver={totaltAntallOppgaver}
            lasterOppgaver={isFetching}
          />
        </div>
      </main>
    </div>
  );
}
