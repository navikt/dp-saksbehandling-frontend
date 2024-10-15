import { Outlet } from "@remix-run/react";
import { Tabs } from "@navikt/ds-react";
import { DocPencilIcon, TasklistIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { getEnv } from "~/utils/env.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { ValidatedForm } from "remix-validated-form";
import { hentValideringRegler } from "~/utils/validering.util";
import { OpplysningTabell } from "~/components/opplysning-tabell/OpplysningTabell";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OpplysningForslag } from "~/components/opplysning-forslag/OpplysningForslag";
import styles from "~/route-styles/oppgave.module.css";

export default function Oppgave() {
  const { oppgave, behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <MeldingOmVedtakProvider>
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

                <Tabs.Tab value="oversikt" label="Behandlingsoversikt" icon={<TasklistIcon />} />

                {(getEnv("GCP_ENV") !== "prod" || oppgave.saksbehandlerIdent === "G151133") && (
                  <Tabs.Tab
                    value="melding-om-vedtak"
                    label="Melding om vedtak"
                    icon={<TasklistSendIcon />}
                  />
                )}
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              <ValidatedForm
                validator={hentValideringRegler(behandling.opplysning)}
                method="post"
                className={styles.opplysninger}
              >
                <OpplysningTabell />
              </ValidatedForm>
            </Tabs.Panel>

            <Tabs.Panel value="oversikt">
              <OpplysningForslag opplysninger={behandling.opplysning} />
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
