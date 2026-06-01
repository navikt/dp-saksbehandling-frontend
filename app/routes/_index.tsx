import { LayersIcon } from "@navikt/aksel-icons";
import { Button } from "@navikt/ds-react";
import { useEffect } from "react";
import {
  ActionFunctionArgs,
  data,
  Form,
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLoaderData,
  useSearchParams,
} from "react-router";

import { useOppgaverQuery } from "~/api/oppgave";
import { OppgaveFilterAvslagsgrunner } from "~/components/oppgave-filter/OppgaveFilterAvslagsgrunner";
import { OppgaveFilterDato } from "~/components/oppgave-filter/OppgaveFilterDato";
import { OppgaveFilterGjenopptak } from "~/components/oppgave-filter/OppgaveFilterGjenopptak";
import { OppgaveFilterRettighetstype } from "~/components/oppgave-filter/OppgaveFilterRettighetstype";
import { OppgaveFilterSøknadresultat } from "~/components/oppgave-filter/OppgaveFilterSøknadresultat";
import { OppgaveFilterStatus } from "~/components/oppgave-filter/OppgaveFilterStatus";
import { OppgaveFilterUtløstAv } from "~/components/oppgave-filter/OppgaveFilterUtløstAv";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const { aktivtOppgaveSok } = useSaksbehandler();
  const actionData = useActionData<typeof action>();
  const { alert, search } = useLoaderData<typeof loader>();
  const { oppgaver, totaltAntallOppgaver, isFetching } = useOppgaverQuery(
    new URLSearchParams(search),
  );
  const { setAktivtOppgaveSok } = useSaksbehandler();
  useHandleAlertMessages(alert);
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const tidskritiskeOppgaver = {
    tilstand: "KLAR_TIL_BEHANDLING",
    side: "1",
    antallOppgaver: "50",
    utlostAv: ["MELDEKORT", "SAMORDNING", "OPPFØLGING", "ARBEIDSSØKERPERIODE"],
  };

  useEffect(() => {
    setAktivtOppgaveSok(searchParams.toString());
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <nav className={styles.venstreMeny}>
        <div>
          <Button
            variant="secondary"
            size="small"
            onClick={() => setSearchParams(tidskritiskeOppgaver)}
          >
            Vis kun tidskritiske oppgaver
          </Button>
        </div>
        <OppgaveFilterDato />
        <OppgaveFilterAvslagsgrunner />
        <OppgaveFilterStatus
          tilgjengeligTilstander={["KLAR_TIL_BEHANDLING", "KLAR_TIL_KONTROLL"]}
        />
        <OppgaveFilterUtløstAv />
        <OppgaveFilterGjenopptak />
        <OppgaveFilterRettighetstype />
        <OppgaveFilterSøknadresultat />
      </nav>

      <main>
        <Form method="post" className={"mb-2"}>
          <input hidden={true} readOnly={true} name="_action" value="hent-neste-oppgave" />
          <input name="aktivtOppgaveSok" value={aktivtOppgaveSok} hidden={true} readOnly={true} />
          <Button
            variant="primary"
            size="small"
            type="submit"
            loading={isFetching}
            disabled={isFetching}
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
            lasterOppgaver={isFetching}
          />
        </div>
      </main>
    </div>
  );
}
