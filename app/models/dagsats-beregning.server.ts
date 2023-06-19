import { getAzureSession } from "~/utils/auth.utils";
import { v4 as uuidv4 } from "uuid";

export async function sendMelding(json: string, request: Request) {
  const url = `http://dp-iverksett/api/iverksetting`;

  const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-iverksett/.default`;
  const session = await getAzureSession(request);
  const oboToken = await session.apiToken(audience);

  if (!oboToken) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const callId = uuidv4();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${oboToken}`,
      "Nav-Callid": callId,
      "Nav-Consumer-Id": "dp-saksbehandling-frontend",
    },
    body: json,
  });

  return response;
}
