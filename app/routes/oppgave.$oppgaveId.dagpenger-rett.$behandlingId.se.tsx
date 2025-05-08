import { DocPencilIcon, PersonPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Outlet } from "react-router";

import { Begrunnelse } from "~/components/begrunnelse/Begrunnelse";
import { Behandling } from "~/components/behandling/Behandling";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
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

                <Tabs.Tab
                  value="begrunnelse"
                  label="Saksbehandlers begrunnelse"
                  icon={<PersonPencilIcon />}
                />

                <Tabs.Tab
                  value="melding-om-vedtak"
                  label="Melding om vedtak"
                  icon={<TasklistSendIcon />}
                />
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              <Behandling readOnly={true} />
            </Tabs.Panel>

            <Tabs.Panel value="begrunnelse">
              <Begrunnelse readOnly={true} />
            </Tabs.Panel>

            <Tabs.Panel value="melding-om-vedtak">
              <MeldingOmVedtak readOnly={true} />
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
