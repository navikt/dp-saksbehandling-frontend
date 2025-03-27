import { DocPencilIcon, PersonPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "react-router";
import { Outlet, useActionData } from "react-router";

import { Begrunnelse } from "~/components/begrunnelse/Begrunnelse";
import { Behandling } from "~/components/behandling/Behandling";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Oppgave() {
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <>
      <OppgaveHandlinger />
      <div className={styles.behandling}>
        <div className={"card"}>
          <Tabs size="medium" defaultValue="begrunnelse">
            <Tabs.List>
              <Tabs.Tab value="behandling" label="Behandlingsoversikt" icon={<DocPencilIcon />} />
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
          <OppgaveInformasjon visKontrollFane={true} defaultTab={"kontroll"} />
        </div>

        <Outlet />
      </div>
    </>
  );
}
