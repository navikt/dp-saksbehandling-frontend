import { DocPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Outlet } from "@remix-run/react";

import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Vilkaar } from "~/components/vilkaar/Vilkaar";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/oppgave.module.css";

export default function Oppgave() {
  const { oppgave, meldingOmVedtak } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <MeldingOmVedtakProvider utvidedeBeskrivelser={meldingOmVedtak.utvidedeBeskrivelser}>
      <BeslutterNotatProvider notat={oppgave.notat}>
        <div className={styles.behandling}>
          <div className={"card"}>
            <Tabs size="medium" defaultValue="behandling">
              <div className={styles.tabMeny}>
                <Tabs.List>
                  <Tabs.Tab
                    value="behandling"
                    label="Redigere opplysninger"
                    icon={<DocPencilIcon />}
                  />
                  <Tabs.Tab
                    value="melding-om-vedtak"
                    label="Melding om vedtak"
                    icon={<TasklistSendIcon />}
                  />
                </Tabs.List>
              </div>

              <Tabs.Panel value="behandling">
                <Vilkaar readonly={true} />
              </Tabs.Panel>

              <Tabs.Panel value="melding-om-vedtak">
                <MeldingOmVedtak readOnly={true} />
              </Tabs.Panel>
            </Tabs>
          </div>

          <div className={"card"}>
            <OppgaveInformasjon visKontrollFane={true} />
          </div>

          <Outlet />
        </div>
      </BeslutterNotatProvider>
    </MeldingOmVedtakProvider>
  );
}
