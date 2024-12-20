import type { IListeOppgave } from "~/models/oppgave.server";
import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

export async function hentOppgaverForPerson(
  request: Request,
  ident: string,
): Promise<IListeOppgave[]> {
  const onBehalfOfToken = await getSaksbehandlingOboToken(request);

  const url = `${getEnv("DP_SAKSBEHANDLING_URL")}/person/oppgaver`;
  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(onBehalfOfToken),
    body: JSON.stringify({ ident }),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return (await response.json()) as IListeOppgave[];
}
