import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import { IOppgaveBehandler } from "~/models/oppgave.server";
import { getMeldingOmVedtakOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

export interface IMeldingOmVedtak {
  html: string;
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
}

export interface IBrevOpplysning {
  tekstId: string;
  datatype: string;
  verdi: string;
}

export interface ILagreUtvidetBeskrivelseResponse {
  sistEndretTidspunkt: string;
}

export interface IMeldingOmVedtakBody {
  fornavn: string;
  mellomnavn?: string;
  etternavn: string;
  fodselsnummer: string;
  saksbehandler?: IOppgaveBehandler; // TODO DENNE SKAL IKKE VÆRE OPTIONAL. Må fikse oppgavetilstand type
  beslutter?: IOppgaveBehandler;
}

export async function hentMeldingOmVedtak(
  request: Request,
  behandlingId: string,
  body: IMeldingOmVedtakBody,
): Promise<IMeldingOmVedtak> {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);

  const url = `${getEnv("DP_MELDING_OM_VEDTAK_URL")}/melding-om-vedtak/${behandlingId}/html`;
  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}

export async function lagreUtvidetBeskrivelse(
  request: Request,
  behandlingId: string,
  brevblokkId: string,
  utvidetBeskrivelse: string,
): Promise<ILagreUtvidetBeskrivelseResponse> {
  const onBehalfOfToken = await getMeldingOmVedtakOboToken(request);

  const url = `${getEnv("DP_MELDING_OM_VEDTAK_URL")}/melding-om-vedtak/${behandlingId}/${brevblokkId}/utvidet-beskrivelse`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { ...getHeaders(onBehalfOfToken), "Content-Type": "text/plain" },
    body: utvidetBeskrivelse,
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}
