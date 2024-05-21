import { getSaksbehandlingOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { getHeaders } from "~/utils/fetch.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import type { IOppgave } from "~/models/oppgave.server";

export async function hentOppgaverForPerson(request: Request, ident: string): Promise<IOppgave[]> {
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

  return (await response.json()) as IOppgave[];
}
