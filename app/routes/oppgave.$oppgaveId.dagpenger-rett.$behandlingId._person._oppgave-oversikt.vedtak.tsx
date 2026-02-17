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
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { sanityClient } from "~/sanity/sanity.config";
import { brevMalQuery, regelmotorOpplysningQuery } from "~/sanity/sanity-queries";
import { ISanityBrevMal, ISanityRegelmotorOpplysning } from "~/sanity/sanity-types";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const [oppgave, sanityBrevMaler, sanityRegelmotorOpplysninger] = await Promise.all([
    hentOppgave(request, params.oppgaveId),
    sanityClient.fetch<ISanityBrevMal[]>(brevMalQuery),
    sanityClient.fetch<ISanityRegelmotorOpplysning[]>(regelmotorOpplysningQuery),
  ]);
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

  return { sanityBrevMaler, sanityRegelmotorOpplysninger, meldingOmVedtak };
}
export default function Behandle() {
  const location = useLocation();
  const { behandling, vurderinger } = useBehandling();
  const { sanityBrevMaler, sanityRegelmotorOpplysninger, meldingOmVedtak } =
    useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  const { sistePrøvingsdato } = useBehandling();

  const sisteRettighetsperiode = behandling.rettighetsperioder.at(-1);
  const sisteRettighetsperiodeIndex = behandling.rettighetsperioder.length - 1;

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
            {sistePrøvingsdato && (
              <OpplysningerPåPrøvingsdato
                behandling={behandling}
                prøvingsdato={sistePrøvingsdato}
              />
            )}

            {sisteRettighetsperiode && (
              <OpplysningerForRettighetsperiode
                index={sisteRettighetsperiodeIndex}
                rettighetsperiode={sisteRettighetsperiode}
                opplysninger={behandling.opplysninger}
              />
            )}

            <div className={"card p-4"} key={location.key}>
              <Heading size={"small"} level={"2"} className={"mb-4"}>
                Melding om vedtak
              </Heading>

              {meldingOmVedtak && (
                <MeldingOmVedtakProvider
                  meldingOmVedtak={meldingOmVedtak}
                  sanityBrevMaler={sanityBrevMaler}
                  sanityRegelmotorOpplysninger={sanityRegelmotorOpplysninger}
                >
                  <MeldingOmVedtak />
                </MeldingOmVedtakProvider>
              )}
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
