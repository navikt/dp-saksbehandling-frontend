import { LayersIcon } from "@navikt/aksel-icons";
import {
  type ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";

import { OppgaveFilterDato } from "~/components/oppgave-filter/OppgaveFilterDato";
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

  const { oppgaver, totaltAntallOppgaver } = await hentOppgaver(request, url.searchParams);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      oppgaver,
      totaltAntallOppgaver,
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
        <OppgaveFilterDato />
        <OppgaveFilterStatus />
        <OppgaveFilterUtløstAv />
        <OppgaveFilterRettighetstype />
      </aside>

      <main>
        <div className={"card"}>
          <OppgaveListe
            tittel={"Mine oppgaver"}
            icon={<LayersIcon fontSize="1.5rem" aria-hidden />}
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
