import { DocPencilIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Outlet } from "@remix-run/react";

import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Vilkaar } from "~/components/vilkaar/Vilkaar";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/oppgave.module.css";

export default function Oppgave() {
  const { meldingOmVedtak } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <MeldingOmVedtakProvider utvidedeBeskrivelser={meldingOmVedtak.utvidedeBeskrivelser}>
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
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              <Vilkaar readonly={true} />
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
