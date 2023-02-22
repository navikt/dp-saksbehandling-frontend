import type { GetSessionWithOboProvider, GetSessionWithoutOboProvider } from "@navikt/dp-auth";
import { makeSession } from "@navikt/dp-auth";
import { idporten, azure } from "@navikt/dp-auth/identity-providers";
import { tokenX, withInMemoryCache } from "@navikt/dp-auth/obo-providers";

let getSession: GetSessionWithOboProvider;
const getAzureSession: GetSessionWithoutOboProvider = makeSession({
  identityProvider: azure,
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
