import type { GetSessionWithOboProvider } from "@navikt/dp-auth";
import { makeSession } from "@navikt/dp-auth";
import { azure } from "@navikt/dp-auth/identity-providers";
import { azure as azureOBO } from "@navikt/dp-auth/obo-providers";

const getAzureSession: GetSessionWithOboProvider = makeSession({
  identityProvider: azure,
  oboProvider: azureOBO,
});

export { getAzureSession };
