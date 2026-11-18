import { DocPencilIcon, EnvelopeClosedIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Alert, Heading, Loader, Tabs } from "@navikt/ds-react";
import { Suspense, useEffect, useState } from "react";
import {
  type ActionFunctionArgs,
  Await,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { KlageBehandling } from "~/components/klage/klage-behandling/KlageBehandling";
import KlageOppgaveMeny from "~/components/klage/klage-oppgave-meny/KlageOppgaveMeny";
import { KlageUtfall } from "~/components/klage/klage-utfall/KlageUtfall";
import { MeldingOmVedtakKlage } from "~/components/melding-om-vedtak-klage/MeldingOmVedtakKlage";
import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentKlage, hentOppgaveForBehandlingId } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { erMedholdEllerDelvisMedhold } from "~/utils/klage.utils";
import { isAlert } from "~/utils/type-guards";

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const klage = await hentKlage(request, params.behandlingId);

  return { klage };
}

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const oppgave = await hentOppgaveForBehandlingId(request, params.behandlingId);

  return await handleActions(request, { ...params, oppgaveId: oppgave.oppgaveId });
}

export default function Klage() {
  const { klage } = useLoaderData<typeof loader>();
  const { meldingOmVedtakPromise } = useTypedRouteLoaderData("routes/behandling.$behandlingId");
  const { oppgave, readonly: readOnly } = useOppgave();
  invariant(oppgave.behandlingType === "KLAGE", "Oppgaven må være av typen KLAGE");
  const [aktivTab, setAktivTab] = useState("behandling");
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const harUtfallOpplysninger = klage.utfallOpplysninger.length > 0;
  const skjulMeldingOmVedtak = erMedholdEllerDelvisMedhold(klage.utfall.verdi);

  useEffect(() => {
    if (skjulMeldingOmVedtak && aktivTab === "melding-om-vedtak") {
      setAktivTab("behandling");
    }
  }, [skjulMeldingOmVedtak, aktivTab]);

  const tabs = [
    { value: "behandling", label: "Behandling", icon: <DocPencilIcon /> },
    ...(harUtfallOpplysninger
      ? [{ value: "utfall", label: "Utfall", icon: <TasklistSendIcon /> }]
      : []),
    ...(skjulMeldingOmVedtak
      ? []
      : [{ value: "melding-om-vedtak", label: "Melding om vedtak", icon: <EnvelopeClosedIcon /> }]),
  ];

  return (
    <div className={`flex gap-4`}>
      <OppgaveOversikt klageinstansUtfall={klage.klageinstansBehandling?.utfall} />
      <main className={"card flex flex-1 flex-col gap-4 p-2"}>
        <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
          <div className="flex items-center justify-between gap-6">
            <Tabs.List>
              {tabs.map(({ value, label, icon }, index) => (
                <Tabs.Tab key={value} value={value} label={`${index + 1}. ${label}`} icon={icon} />
              ))}
            </Tabs.List>
            <KlageOppgaveMeny klage={klage} />
          </div>
          <Tabs.Panel value="behandling">
            <KlageBehandling klage={klage} readonly={readOnly} setAktivTab={setAktivTab} />
          </Tabs.Panel>

          <Tabs.Panel value="utfall">
            <KlageUtfall klage={klage} readonly={readOnly} setAktivTab={setAktivTab} />
          </Tabs.Panel>

          <Tabs.Panel value="melding-om-vedtak">
            {klage.utfall.verdi !== "IKKE_SATT" ? (
              <Suspense fallback={<Loader size="large" title="Henter melding om vedtak" />}>
                <Await resolve={meldingOmVedtakPromise}>
                  {(meldingOmVedtak) =>
                    meldingOmVedtak ? (
                      <MeldingOmVedtakProvider meldingOmVedtak={meldingOmVedtak}>
                        <MeldingOmVedtakKlage />
                      </MeldingOmVedtakProvider>
                    ) : (
                      <Alert size={"small"} variant={"info"} className={"m-2"}>
                        <Heading size={"small"}>Du må sette utfall i behandlingen</Heading>
                      </Alert>
                    )
                  }
                </Await>
              </Suspense>
            ) : (
              <Alert size={"small"} variant={"info"} className={"m-2"}>
                <Heading size={"small"}>Du må sette utfall i behandlingen</Heading>
              </Alert>
            )}
          </Tabs.Panel>
        </Tabs>
      </main>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
