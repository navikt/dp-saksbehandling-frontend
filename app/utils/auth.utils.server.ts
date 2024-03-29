import type { GetSessionWithOboProvider, SessionWithOboProvider } from "@navikt/oasis";
import { makeSession } from "@navikt/oasis";
import { azure } from "@navikt/oasis/identity-providers";
import { azure as azureOBO, withInMemoryCache } from "@navikt/oasis/obo-providers";
import { withPrometheus } from "@navikt/oasis/obo-providers/withPrometheus";

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
    oboProvider: withInMemoryCache(withPrometheus(azureOBO)),
  });
}

export async function getRapporteringOboToken(session: SessionWithOboProvider) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_RAPPORTERING_TOKEN || fallbackToken;
  } else {
    const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-rapportering/.default`;
    return await session.apiToken(audience);
  }
}

export async function getBehandlingOboToken(session: SessionWithOboProvider) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_SAKSBEHANDLING_TOKEN || fallbackToken;
  } else {
    const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-saksbehandling/.default`;
    return await session.apiToken(audience);
  }
}

export async function getVedtakOboToken(session: SessionWithOboProvider) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.DP_VEDTAK_TOKEN || fallbackToken;
  } else {
    const audience = `api://${process.env.NAIS_CLUSTER_NAME}.teamdagpenger.dp-vedtak/.default`;
    return await session.apiToken(audience);
  }
}

export async function getPDLOboToken(session: SessionWithOboProvider) {
  // TODO Bytt ut dev-fss med NAIS_CLUSTER_NAME?
  const audience = `api://dev-fss.pdl.pdl-api/.default`;
  return await session.apiToken(audience);
}

export async function getVeilarbregistreringOboToken(session: SessionWithOboProvider) {
  if (process.env.IS_LOCALHOST === "true") {
    return process.env.VEILARBPROXY_TOKEN || fallbackToken;
  } else {
    const audience = `api://${process.env.NAIS_CLUSTER_NAME}.paw.veilarbregistrering/.default`;
    return await session.apiToken(audience);
  }
}
