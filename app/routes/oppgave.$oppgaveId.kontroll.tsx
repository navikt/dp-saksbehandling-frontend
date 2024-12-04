import { DocPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Outlet, useActionData } from "@remix-run/react";

import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Vilkaar } from "~/components/vilkaar/Vilkaar";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
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
  const { oppgave, meldingOmVedtak } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <MeldingOmVedtakProvider utvidedeBeskrivelser={meldingOmVedtak.utvidedeBeskrivelser}>
      <BeslutterNotatProvider notat={oppgave.notat}>
        <OppgaveHandlinger />
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
