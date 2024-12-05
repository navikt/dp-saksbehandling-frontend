import { DocPencilIcon, TasklistIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Alert, Tabs } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useState } from "react";

import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { OpplysningForslag } from "~/components/opplysning-forslag/OpplysningForslag";
import { Vilkaar } from "~/components/vilkaar/Vilkaar";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Oppgave() {
  const { oppgave, behandling, meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );
  const [aktivTab, setAktivTab] = useState("behandling");

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
                <Tabs.Tab
                  value="behandling"
                  label="Redigere opplysninger"
                  icon={<DocPencilIcon />}
                />

                <Tabs.Tab value="oversikt" label="Behandlingsoversikt" icon={<TasklistIcon />} />

                <Tabs.Tab
                  value="melding-om-vedtak"
                  label="Melding om vedtak"
                  icon={<TasklistSendIcon />}
                />
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              <Vilkaar />
            </Tabs.Panel>

            <Tabs.Panel value="oversikt">
              <OpplysningForslag opplysninger={behandling.opplysning} />
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
