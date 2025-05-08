import { type LoaderFunctionArgs, Outlet } from "react-router";
import invariant from "tiny-invariant";

import { hentBehandling, hentVurderinger } from "~/models/behandling.server";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import { hentOppgave } from "~/models/saksbehandling.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandlingPromise = hentBehandling(request, params.behandlingId);
  const vurderingerPromise = hentVurderinger(request, params.behandlingId);
  const oppgave = await hentOppgave(request, params.oppgaveId);

  let meldingOmVedtakPromise;
  if (oppgave.saksbehandler) {
    meldingOmVedtakPromise = hentMeldingOmVedtak(request, params.behandlingId, {
      fornavn: oppgave.person.fornavn,
      mellomnavn: oppgave.person.mellomnavn,
      etternavn: oppgave.person.etternavn,
      fodselsnummer: oppgave.person.ident,
      saksbehandler: oppgave.saksbehandler,
      beslutter: oppgave.beslutter,
    });
  }

  return {
    behandlingPromise,
    vurderingerPromise,
    meldingOmVedtakPromise,
  };
}

export default function Oppgave() {
  return <Outlet />;
}
