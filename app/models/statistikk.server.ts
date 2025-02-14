import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

export interface IStatistikk {
  dag: number;
  uke: number;
  totalt: number;
}

export interface ISaksbehandlerStatistikk {
  individuellStatistikk: IStatistikk;
  generellStatistikk: IStatistikk;
  beholdningsinfo: {
    antallOppgaverKlarTilBehandling: number;
    antallOppgaverKlarTilKontroll: number;
    datoEldsteUbehandledeOppgave: string;
  };
}

export async function hentStatistikkForSaksbehandler(
  request: Request,
): Promise<ISaksbehandlerStatistikk> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/statistikk`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }
  return await response.json();
}
