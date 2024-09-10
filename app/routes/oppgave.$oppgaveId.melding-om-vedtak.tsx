import invariant from "tiny-invariant";
import { Tabs } from "@navikt/ds-react";
import { sanityClient } from "~/sanity/sanity-client";
import type { ISanityBrevBlokk } from "~/sanity/sanity-types";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { hentBrevBlokkerMedId } from "~/sanity/sanity-queries";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { useRouteError } from "@remix-run/react";
import { hentOppgave } from "~/models/oppgave.server";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const meldingOmVedtak = await hentMeldingOmVedtak(request, oppgave.behandlingId);

  const sanityBrevBlokker = await sanityClient.fetch<ISanityBrevBlokk[]>(
    hentBrevBlokkerMedId(meldingOmVedtak.brevblokkIder),
  );

  return json({ sanityBrevBlokker, meldingOmVedtakOpplysninger: meldingOmVedtak.opplysninger });
}

export default function Oppgave() {
  return (
    <Tabs.Panel value="melding-om-vedtak">
      <MeldingOmVedtak />
    </Tabs.Panel>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
