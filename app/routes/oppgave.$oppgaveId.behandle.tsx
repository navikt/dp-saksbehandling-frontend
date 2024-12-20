import { DocPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Alert, Tabs } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Outlet, useActionData } from "@remix-run/react";
import { useState } from "react";

import { KravPaaDagpenger } from "~/components/krav-paa-dagpenger/KravPaaDagpenger";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Vilkaar } from "~/components/vilkaar/Vilkaar";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Oppgave() {
  const actionData = useActionData<typeof action>();
  const [aktivTab, setAktivTab] = useState("behandling");
  const { oppgave, meldingOmVedtak } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  if (!meldingOmVedtak) {
    return (
      <Alert variant="error">
        Kan ikke hente melding om vedtak for oppgave i tilstand {oppgave.tilstand}. Ta kontakt med
        utviklere.
      </Alert>
    );
  }

  return (
    <MeldingOmVedtakProvider utvidedeBeskrivelser={meldingOmVedtak.utvidedeBeskrivelser}>
      <OppgaveHandlinger />
      <div className={styles.behandling}>
        <div className={"card"}>
          <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
            <div className={styles.tabMeny}>
              <Tabs.List>
                <Tabs.Tab value="behandling" label="Behandlingsoversikt" icon={<DocPencilIcon />} />

                <Tabs.Tab
                  value="melding-om-vedtak"
                  label="Melding om vedtak"
                  icon={<TasklistSendIcon />}
                />
                <KravPaaDagpenger />
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              <Vilkaar />
            </Tabs.Panel>

            <Tabs.Panel value="melding-om-vedtak">
              <MeldingOmVedtak />
            </Tabs.Panel>
          </Tabs>
        </div>

        <div className={"card"}>
          <OppgaveInformasjon />
        </div>

        <Outlet />
      </div>
    </MeldingOmVedtakProvider>
  );
}
