import {
  CheckmarkCircleFillIcon,
  DocPencilIcon,
  TasklistSendIcon,
  XMarkOctagonFillIcon,
} from "@navikt/aksel-icons";
import { Alert, Tabs } from "@navikt/ds-react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Outlet, useActionData } from "@remix-run/react";
import classnames from "classnames";
import { useState } from "react";

import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Vilkaar } from "~/components/vilkaar/Vilkaar";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { IOpplysning } from "~/models/behandling.server";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Oppgave() {
  const actionData = useActionData<typeof action>();
  const [aktivTab, setAktivTab] = useState("behandling");
  const { oppgave, behandling, meldingOmVedtak } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  const harKravDagpengerOpplysning = finnOpplysningMedNavn(
    "Krav på dagpenger",
    behandling.opplysning,
  );

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
                <Tabs.Tab value="behandling" label="Behandlingsoversikt" icon={<DocPencilIcon />} />

                <Tabs.Tab
                  value="melding-om-vedtak"
                  label="Melding om vedtak"
                  icon={<TasklistSendIcon />}
                />
                <div
                  className={classnames(styles.kravPaaDagpenger, {
                    [styles.kravPaaDagpengerSuccess]: harKravDagpengerOpplysning?.verdi === "true",
                    [styles.kravPaaDagpengerError]:
                      !harKravDagpengerOpplysning || harKravDagpengerOpplysning?.verdi === "false",
                  })}
                >
                  {harKravDagpengerOpplysning?.verdi === "true" && (
                    <>
                      <CheckmarkCircleFillIcon color={"var(--a-green-500)"} />
                      Bruker har rett til dagpenger
                    </>
                  )}

                  {(!harKravDagpengerOpplysning ||
                    harKravDagpengerOpplysning.verdi === "false") && (
                    <>
                      <XMarkOctagonFillIcon color={"var(--a-red-500)"} />
                      Bruker har ikke rett til dagpenger
                    </>
                  )}
                </div>
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              <Vilkaar />
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

function finnOpplysningMedNavn(navn: string, opplysninger: IOpplysning[]) {
  return opplysninger.find((opplysning) => opplysning.navn === navn);
}
