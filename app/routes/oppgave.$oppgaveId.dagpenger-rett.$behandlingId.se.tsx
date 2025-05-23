import { DocPencilIcon, EnvelopeClosedIcon, PersonPencilIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Outlet } from "react-router";

import { Begrunnelse } from "~/components/begrunnelse/Begrunnelse";
import { Behandling } from "~/components/behandling/Behandling";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/oppgave.module.css";

export default function Oppgave() {
  const { behandlingPromise, vurderingerPromise } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId",
  );
  const { response } = useAwaitPromise(behandlingPromise);

  return (
    <>
      <OppgaveHandlinger behandling={response?.data} />
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
                  icon={<EnvelopeClosedIcon />}
                />
              </Tabs.List>
            </div>

            <Tabs.Panel value="behandling">
              {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
              <Behandling behandlingPromise={behandlingPromise} readOnly={true} />
            </Tabs.Panel>

            <Tabs.Panel value="begrunnelse">
              {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
              <Begrunnelse vurderingerPromise={vurderingerPromise} readOnly={true} />
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
