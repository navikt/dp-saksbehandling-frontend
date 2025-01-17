import { DocPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Outlet, useActionData } from "@remix-run/react";
import { useState } from "react";

import { Behandling } from "~/components/behandling/Behandling";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
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
  const [aktivTab, setAktivTab] = useState("behandling");
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className={styles.behandling}>
      <div className={"card"}>
        <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
          <Tabs.List>
            <Tabs.Tab value="behandling" label="Behandlingsoversikt" icon={<DocPencilIcon />} />

            <Tabs.Tab
              value="melding-om-vedtak"
              label="Melding om vedtak"
              icon={<TasklistSendIcon />}
            />
          </Tabs.List>

          <Tabs.Panel value="behandling">
            <Behandling />
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
  );
}
