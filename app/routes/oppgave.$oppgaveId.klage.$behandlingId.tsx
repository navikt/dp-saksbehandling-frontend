import { DocPencilIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { Fragment, useState } from "react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { KlageBehandling } from "~/components/klage-behandling/KlageBehandling";
import { KlageUtfall } from "~/components/klage-utfall/KlageUtfall";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentKlage } from "~/models/saksbehandling.server";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const klage = await hentKlage(request, params.behandlingId);
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      klage,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { klage, alert } = useLoaderData<typeof loader>();
  const [aktivTab, setAktivTab] = useState("utfall");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  return (
    <Fragment key={klage.behandlingId}>
      <OppgaveHandlinger />
      <div className={styles.behandling}>
        <div className={"card"}>
          <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
            <Tabs.List>
              <Tabs.Tab value="behandling" label="Behandling" icon={<DocPencilIcon />} />
              <Tabs.Tab value="utfall" label="Utfall" icon={<TasklistSendIcon />} />
            </Tabs.List>

            <Tabs.Panel value="behandling">
              <KlageBehandling klage={klage} />
            </Tabs.Panel>

            <Tabs.Panel value="utfall">
              <KlageUtfall klage={klage} />
            </Tabs.Panel>
          </Tabs>
        </div>

        <div className={"card"}>
          <OppgaveInformasjon defaultTab={oppgave.beslutter ? "historikk" : "dokumenter"} />
        </div>

        <Outlet />
      </div>
    </Fragment>
  );
}
