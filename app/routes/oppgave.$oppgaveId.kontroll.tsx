import { DocPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Alert, Tabs } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "react-router";
import { Outlet, useActionData } from "react-router";

import { KravPaaDagpenger } from "~/components/krav-paa-dagpenger/KravPaaDagpenger";
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
                  <KravPaaDagpenger />
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
