import { DocPencilIcon, EnvelopeClosedIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Alert, Heading, Tabs } from "@navikt/ds-react";
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
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
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
  const [aktivTab, setAktivTab] = useState("behandling");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  const harUtfallOpplysninger = klage.utfallOpplysninger.length > 0;

  const tabs = [
    { value: "behandling", label: "Behandling", icon: <DocPencilIcon /> },
    ...(harUtfallOpplysninger
      ? [{ value: "utfall", label: "Utfall", icon: <TasklistSendIcon /> }]
      : []),
    { value: "melding-om-vedtak", label: "Melding om vedtak", icon: <EnvelopeClosedIcon /> },
  ];

  return (
    <Fragment key={klage.behandlingId}>
      <OppgaveHandlinger />
      <div className={styles.behandling}>
        <div className={"card"}>
          <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
            <Tabs.List>
              {tabs.map(({ value, label, icon }, index) => (
                <Tabs.Tab key={value} value={value} label={`${index + 1}. ${label}`} icon={icon} />
              ))}
            </Tabs.List>

            <Tabs.Panel value="behandling">
              <KlageBehandling klage={klage} readonly={oppgave.tilstand !== "UNDER_BEHANDLING"} />
            </Tabs.Panel>

            <Tabs.Panel value="utfall">
              <KlageUtfall klage={klage} readonly={oppgave.tilstand !== "UNDER_BEHANDLING"} />
            </Tabs.Panel>

            <Tabs.Panel value="melding-om-vedtak">
              {klage.utfall.verdi !== "IKKE_SATT" ? (
                <MeldingOmVedtak readOnly={oppgave.tilstand !== "UNDER_BEHANDLING"} />
              ) : (
                <Alert size={"small"} variant={"info"} className={"m-2"}>
                  <Heading size={"small"}>Du må sette utfall i behandlingen</Heading>
                </Alert>
              )}
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
