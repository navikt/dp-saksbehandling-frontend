import { DocPencilIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Outlet } from "react-router";

import { KravPaaDagpenger } from "~/components/krav-paa-dagpenger/KravPaaDagpenger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Vilkaar } from "~/components/vilkaar/Vilkaar";
import styles from "~/route-styles/oppgave.module.css";

export default function Oppgave() {
  return (
    <div className={styles.behandling}>
      <div className={"card"}>
        <Tabs size="medium" defaultValue="behandling">
          <div className={styles.tabMeny}>
            <Tabs.List>
              <Tabs.Tab value="behandling" label="Redigere opplysninger" icon={<DocPencilIcon />} />
              <KravPaaDagpenger />
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
  );
}
