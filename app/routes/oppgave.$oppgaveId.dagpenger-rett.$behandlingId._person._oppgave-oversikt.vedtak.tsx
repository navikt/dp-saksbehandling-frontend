import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useLocation,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import EndretOpplysninger from "~/components/endret-opplysninger/EndretOpplysninger";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { OppgaveMeny } from "~/components/oppgave-meny/OppgaveMeny";
import { OpplysningerForRettighetsperiode } from "~/components/opplysinger-for-rettighetsperiode/OpplysningerForRettighetsperiode";
import { OpplysningerPåPrøvingsdato } from "~/components/opplysninger-på-prøvingsdato/OpplysningerPåPrøvingsdato";
import { UtvidedeBeskrivelserProvider } from "~/context/melding-om-vedtak-context";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { sanityClient } from "~/sanity/sanity.config";
import { brevMalQuery } from "~/sanity/sanity-queries";
import { ISanityBrevMal } from "~/sanity/sanity-types";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const oppgave = await hentOppgave(request, params.oppgaveId);
  const sanityBrevMaler = await sanityClient.fetch<ISanityBrevMal[]>(brevMalQuery);
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

  return { sanityBrevMaler, meldingOmVedtak };
}
export default function Behandle() {
  const location = useLocation();
  const { behandling, vurderinger } = useBehandling();
  const { sanityBrevMaler, meldingOmVedtak } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  const { prøvingsdato } = useBehandling();

  return (
    <main>
      <div className={"card mb-4 p-4"}>
        <div className="flex justify-between gap-4">
          <LinkTabs className="flex-1" />
          <OppgaveMeny />
        </div>

        <div className="mt-4 flex gap-4">
          <div className={"flex w-[400px] flex-col gap-4"}>
            <Avklaringer
              avklaringer={[...behandling.avklaringer]}
              behandlingId={behandling.behandlingId}
            />
            <EndretOpplysninger vurderinger={vurderinger} />
          </div>

          <div className={"flex flex-1 flex-col gap-4"}>
            {prøvingsdato && (
              <OpplysningerPåPrøvingsdato behandling={behandling} prøvingsdato={prøvingsdato} />
            )}

            {behandling.rettighetsperioder.map((rettighetsperiode, index) => (
              <OpplysningerForRettighetsperiode
                key={index}
                index={index}
                rettighetsperiode={rettighetsperiode}
                opplysninger={behandling.opplysninger}
              />
            ))}

            <div className={"card p-4"} key={location.key}>
              <Heading size={"small"} level={"2"} className={"mb-4"}>
                Melding om vedtak
              </Heading>
              <UtvidedeBeskrivelserProvider
                utvidedeBeskrivelser={
                  isAlert(meldingOmVedtak) ? [] : meldingOmVedtak?.utvidedeBeskrivelser
                }
              >
                <MeldingOmVedtak
                  meldingOmVedtak={meldingOmVedtak}
                  sanityBrevMaler={sanityBrevMaler}
                />
              </UtvidedeBeskrivelserProvider>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
