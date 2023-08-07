import type { GetSessionWithOboProvider, SessionWithOboProvider } from "@navikt/dp-auth";
import { makeSession } from "@navikt/dp-auth";
import { azure } from "@navikt/dp-auth/identity-providers";
import { azure as azureOBO } from "@navikt/dp-auth/obo-providers";

const fallbackToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export let getAzureSession: GetSessionWithOboProvider;

if (process.env.IS_LOCALHOST === "true") {
  getAzureSession = makeSession({
    identityProvider: async () => fallbackToken,
    oboProvider: async (token: string, audience: string) => token + audience,
  });
} else {
  getAzureSession = makeSession({
    identityProvider: azure,
    oboProvider: azureOBO,
  });
}

export async function getRapporteringOboToken(session: SessionWithOboProvider) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_RAPPORTERING_TOKEN || fallbackToken;
  } else {
    const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-rapportering/.default`;
    const oboToken = await session.apiToken(audience);
    return oboToken;
  }
}

export async function getBehandlingOboToken(session: SessionWithOboProvider) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_BEHANDLING_TOKEN || fallbackToken;
  } else {
    const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-behandling/.default`;
    const oboToken = await session.apiToken(audience);
    return oboToken;
  }
}
