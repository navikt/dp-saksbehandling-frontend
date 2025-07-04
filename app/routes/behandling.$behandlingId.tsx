import { DocPencilIcon, EnvelopeClosedIcon, PersonPencilIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { Begrunnelse } from "~/components/begrunnelse/Begrunnelse";
import { Behandling } from "~/components/behandling/Behandling";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OpplysningGruppePanel } from "~/components/opplysning-gruppe-panel/OpplysningGruppePanel";
import { ResizableColumns } from "~/components/resizable-columns/ResizableColumns";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling, hentVurderinger } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const behandlingPromise = hentBehandling(request, params.behandlingId);
  const vurderingerPromise = hentVurderinger(request, params.behandlingId);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      behandlingId: params.behandlingId,
      behandlingPromise,
      vurderingerPromise,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function BehandlingRoute() {
  const { behandlingId, behandlingPromise, vurderingerPromise } = useLoaderData<typeof loader>();
  const { aktivOpplysningsgruppeId } = useDagpengerRettBehandling();
  const actionData = useActionData<typeof action>();
  const [aktivTab, setAktivTab] = useState("behandling");
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
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
            {aktivOpplysningsgruppeId ? (
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 500 }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                }}
                key={aktivOpplysningsgruppeId}
              >
                <OpplysningGruppePanel
                  // @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router
                  behandlingPromise={behandlingPromise}
                  aktivOpplysningsgruppeId={aktivOpplysningsgruppeId}
                  behandlingId={behandlingId}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={aktivOpplysningsgruppeId}
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      </ResizableColumns.Right>
    </ResizableColumns>
  );
}
