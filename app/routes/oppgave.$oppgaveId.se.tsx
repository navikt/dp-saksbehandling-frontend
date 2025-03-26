import { DocPencilIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Outlet } from "react-router";

import { Behandling } from "~/components/behandling/Behandling";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import styles from "~/route-styles/oppgave.module.css";

export default function Oppgave() {
  return (
    <>
      <OppgaveHandlinger />
      <div className={styles.behandling}>
        <div className={"card"}>
          <Tabs size="medium" defaultValue="behandling">
            <div>
              <Tabs.List>
                <Tabs.Tab
                  value="behandling"
                  label="Redigere opplysninger"
                  icon={<DocPencilIcon />}
                />
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              <Behandling readOnly={true} />
            </Tabs.Panel>
          </Tabs>
        </div>

        <div className={"card"}>
          <OppgaveInformasjon defaultTab={"dokumenter"} />
        </div>

        <Outlet />
      </div>
    </>
  );
}
