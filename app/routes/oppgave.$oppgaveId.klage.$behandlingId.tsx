import { DocPencilIcon, EnvelopeClosedIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { Alert, Heading, Tabs } from "@navikt/ds-react";
import { useState } from "react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { KlageBehandling } from "~/components/klage/klage-behandling/KlageBehandling";
import { KlageUtfall } from "~/components/klage/klage-utfall/KlageUtfall";
import { MeldingOmVedtakKlage } from "~/components/melding-om-vedtak-klage/MeldingOmVedtakKlage";
import { OppgaveOversikt } from "~/components/oppgave-oversikt/OppgaveOversikt";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { UtvidedeBeskrivelserProvider } from "~/context/melding-om-vedtak-context";
import { OppgaveProvider } from "~/context/oppgave-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentKlage, hentOppgave } from "~/models/saksbehandling.server";
import { sanityClient } from "~/sanity/sanity.config";
import { brevMalQuery } from "~/sanity/sanity-queries";
import { ISanityBrevMal } from "~/sanity/sanity-types";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const [oppgave, klage, sanityBrevMaler] = await Promise.all([
    hentOppgave(request, params.oppgaveId),
    hentKlage(request, params.behandlingId),
    sanityClient.fetch<ISanityBrevMal[]>(brevMalQuery),
  ]);

  const journalposterPromises = Promise.all(
    oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
  );

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
      sanityBrevMaler,
      journalposterPromises,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave, meldingOmVedtak, klage, alert, sanityBrevMaler, journalposterPromises } =
    useLoaderData<typeof loader>();
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
    <OppgaveProvider oppgave={oppgave} saksbehandler={saksbehandler}>
      <PersonBoks person={oppgave.person} oppgave={oppgave} />
      <div className={`main flex gap-4`}>
        <OppgaveOversikt journalposterPromises={journalposterPromises} />

        <main className={"card flex-1"}>
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
                <UtvidedeBeskrivelserProvider
                  utvidedeBeskrivelser={
                    isAlert(meldingOmVedtak) ? [] : meldingOmVedtak?.utvidedeBeskrivelser
                  }
                >
                  <MeldingOmVedtakKlage
                    meldingOmVedtak={meldingOmVedtak}
                    sanityBrevMaler={sanityBrevMaler}
                    oppgave={oppgave}
                  />
                </UtvidedeBeskrivelserProvider>
              ) : (
                <Alert size={"small"} variant={"info"} className={"m-2"}>
                  <Heading size={"small"}>Du må sette utfall i behandlingen</Heading>
                </Alert>
              )}
            </Tabs.Panel>
          </Tabs>
        </main>
      </div>
    </OppgaveProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
