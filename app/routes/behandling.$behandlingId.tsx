import { DocPencilIcon, PersonPencilIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
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

export default function Oppgave() {
  const { behandlingPromise, vurderingerPromise } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const [aktivTab, setAktivTab] = useState("behandling");
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <>
      <div className={"card"}>
        <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
          <Tabs.List>
            <Tabs.Tab value="behandling" label="Behandlingsoversikt" icon={<DocPencilIcon />} />

            <Tabs.Tab
              value="begrunnelse"
              label="Saksbehandlers begrunnelse"
              icon={<PersonPencilIcon />}
            />
          </Tabs.List>

          <Tabs.Panel value="behandling">
            {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
            <Behandling behandlingPromise={behandlingPromise} />
          </Tabs.Panel>

          <Tabs.Panel value="begrunnelse">
            {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
            <Begrunnelse vurderingerPromise={vurderingerPromise} />
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
}
