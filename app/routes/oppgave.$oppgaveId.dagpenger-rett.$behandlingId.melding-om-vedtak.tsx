import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useLocation,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { UtvidedeBeskrivelserProvider } from "~/context/melding-om-vedtak-context";
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

  return {
    oppgave,
    sanityBrevMaler,
    meldingOmVedtak,
  };
}
export default function MeldingOmVedtakRoute() {
  const { meldingOmVedtak } = useLoaderData<typeof loader>();
  const location = useLocation();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <UtvidedeBeskrivelserProvider
      utvidedeBeskrivelser={isAlert(meldingOmVedtak) ? [] : meldingOmVedtak?.utvidedeBeskrivelser}
      key={location.key}
    >
      <MeldingOmVedtak meldingOmVedtak={meldingOmVedtak} />
    </UtvidedeBeskrivelserProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
