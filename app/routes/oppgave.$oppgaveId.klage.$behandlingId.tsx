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
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { KlageBehandling } from "~/components/klage-behandling/KlageBehandling";
import { KlageUtfall } from "~/components/klage-utfall/KlageUtfall";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { hentKlage, hentOppgave } from "~/models/saksbehandling.server";
import styles from "~/route-styles/oppgave.module.css";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const klage = await hentKlage(request, params.behandlingId);
  let meldingOmVedtak;

  if (oppgave.saksbehandler) {
    meldingOmVedtak = await hentMeldingOmVedtak(request, oppgave.behandlingId, {
      fornavn: oppgave.person.fornavn,
      mellomnavn: oppgave.person.mellomnavn,
      etternavn: oppgave.person.etternavn,
      fodselsnummer: oppgave.person.ident,
      saksbehandler: oppgave.saksbehandler,
      beslutter: oppgave.beslutter,
      behandlingstype: oppgave.behandlingType,
    });
  }

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      oppgave,
      klage,
      meldingOmVedtak,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const { oppgave, meldingOmVedtak, klage, alert } = useLoaderData<typeof loader>();
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
                <MeldingOmVedtak meldingOmVedtak={meldingOmVedtak} />
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

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
