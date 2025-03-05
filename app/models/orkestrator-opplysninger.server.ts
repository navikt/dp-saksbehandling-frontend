import { getSoknadOrkestratorOboToken } from "~/utils/auth.utils.server";
import { getEnv } from "~/utils/env.utils";
import { handleErrorResponse } from "~/utils/error-response.server";
import { getHeaders } from "~/utils/fetch.utils";

import { IOrkestratorOpplysningBarn } from "../../mocks/data/mock-orkestrator-barn-opplysning";


export async function hentOrkestratorBarnOpplysning(
  request: Request,
  oppgaveId: string
): Promise<IOrkestratorOpplysningBarn[]> {
  const onBehalfOfToken = await getSoknadOrkestratorOboToken(request);
  const url = `${getEnv("DP_SOKNAD_ORKESTRATOR_URL")}/opplysninger/${oppgaveId}/barn`;

  const response = await fetch(url, {
    method: "GET",
    headers: getHeaders(onBehalfOfToken),
  });

  if (!response.ok) {
    handleErrorResponse(response);
  }

  return await response.json();
}