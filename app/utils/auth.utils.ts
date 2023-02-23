import type { GetSessionWithOboProvider } from "@navikt/dp-auth";
import { makeSession } from "@navikt/dp-auth";
import { azure, idporten } from "@navikt/dp-auth/identity-providers";
import { tokenX, azure as azureOBO, withInMemoryCache } from "@navikt/dp-auth/obo-providers";

let getSession: GetSessionWithOboProvider;
const getAzureSession: GetSessionWithOboProvider = makeSession({
  identityProvider: azure,
  oboProvider: azureOBO,
});

if (process.env.AUTH_PROVIDER == "local") {
  const staticToken = process.env.LOCAL_TOKEN || "";

  getSession = makeSession({
    identityProvider: async () => staticToken,
    oboProvider: process.env.LOCAL_TOKEN
      ? tokenX
      : async (token: string, audience: string) => token + audience,
  });
} else {
  getSession = makeSession({
    identityProvider: idporten,
    oboProvider: withInMemoryCache(tokenX),
  });
}

export { getSession, getAzureSession };
