import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

/*export interface IStatistikk {
  dag: number;
  uke: number;
  totalt: number;
}*/

export interface IStatistikk {
  IndividuellStatistikk: {
    dag: number;
    uke: number;
    totalt: number;
  };
  GenerellStatistikk: {
    dag: number;
    uke: number;
    totalt: number;
  };
}

export async function hentStatistikkForSaksbehandler(request: Request): Promise<IStatistikk> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);
  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/statistikk`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }
  const jsonResponse = await response.json();
  const statistikk: IStatistikk = {
    IndividuellStatistikk: {
      dag: jsonResponse.individuellStatistikk.dag,
      uke: jsonResponse.individuellStatistikk.uke,
      totalt: jsonResponse.individuellStatistikk.totalt,
    },
    GenerellStatistikk: {
      dag: jsonResponse.generellStatistikk.dag,
      uke: jsonResponse.generellStatistikk.uke,
      totalt: jsonResponse.generellStatistikk.totalt,
    },
  };
  return statistikk;
}
