import { getAzureSession } from "~/utils/auth.utils";

export async function sendMelding(json: string, request: Request) {
  const url = `http://dp-iverksett/api/iverksetting`;

  const audience = `${process.env.NAIS_CLUSTER_NAME}:teamdagpenger:dp-iverksett`;
  const session = await getAzureSession(request);
  const oboToken = await session.apiToken(audience);

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${oboToken}` },
    body: json,
  });

  return response;
}
