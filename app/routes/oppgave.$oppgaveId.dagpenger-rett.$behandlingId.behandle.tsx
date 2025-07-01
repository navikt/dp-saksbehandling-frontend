import { DocPencilIcon, EnvelopeClosedIcon, PersonPencilIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { ActionFunctionArgs } from "react-router";
import { Outlet, useActionData } from "react-router";

import { Begrunnelse } from "~/components/begrunnelse/Begrunnelse";
import { Behandling } from "~/components/behandling/Behandling";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { OpplysningGruppePanel } from "~/components/opplysning-gruppe-panel/OpplysningGruppePanel";
import { ResizableColumns } from "~/components/resizable-columns/ResizableColumns";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useAwaitPromise } from "~/hooks/useResolvedPromise";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Oppgave() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { aktivOpplysningsgruppe } = useDagpengerRettBehandling();
  const { behandlingPromise, vurderingerPromise } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId",
  );
  const { response } = useAwaitPromise(behandlingPromise);
  const actionData = useActionData<typeof action>();
  const [aktivTab, setAktivTab] = useState("behandling");
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <>
      <OppgaveHandlinger behandling={response?.data} />

      <ResizableColumns defaultLeftWidth={70}>
        <ResizableColumns.Left>
          <div className={"card h-[100%]"}>
            <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
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
                  icon={<EnvelopeClosedIcon />}
                />
              </Tabs.List>

              <Tabs.Panel value="behandling">
                {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
                <Behandling behandlingPromise={behandlingPromise} />
              </Tabs.Panel>

              <Tabs.Panel value="melding-om-vedtak">
                <MeldingOmVedtak />
              </Tabs.Panel>

              <Tabs.Panel value="begrunnelse">
                {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
                <Begrunnelse vurderingerPromise={vurderingerPromise} />
              </Tabs.Panel>
            </Tabs>
          </div>
        </ResizableColumns.Left>

        <ResizableColumns.Right>
          <div className={"card h-[100%]"}>
            <AnimatePresence mode="popLayout">
              {aktivOpplysningsgruppe ? (
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                  }}
                  key={aktivOpplysningsgruppe.opplysningTypeId}
                >
                  <OpplysningGruppePanel
                    // @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router
                    behandlingPromise={behandlingPromise}
                    opplysningGruppe={aktivOpplysningsgruppe}
                    behandlingId={oppgave.behandlingId}
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={aktivOpplysningsgruppe}
                >
                  <OppgaveInformasjon defaultTab={oppgave.beslutter ? "historikk" : "dokumenter"} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ResizableColumns.Right>
      </ResizableColumns>

      <Outlet />
    </>
  );
}
