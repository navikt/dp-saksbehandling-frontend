import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const oppgave = await hentOppgave(request, params.oppgaveId);

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
    meldingOmVedtak,
  };
}
export default function MeldingOmVedtakRoute() {
  const { oppgave, meldingOmVedtak } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  return (
    <MeldingOmVedtakProvider meldingOmVedtakKilde={oppgave.meldingOmVedtakKilde}>
      <MeldingOmVedtak meldingOmVedtak={meldingOmVedtak} />
    </MeldingOmVedtakProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
