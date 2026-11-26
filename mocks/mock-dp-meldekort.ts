import { delay } from "msw/utils/delay";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";

import { paths } from "../openapi/dp-meldekort-typer";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_MELDEKORT_URL") });

export const mockDpMeldekort = [
  http.post(`/hentPersonId`, async ({ response }) => {
    await delay(10);

    // hvis du vil simulere f.eks. ECONNREFUSED:
    // return HttpResponse.error()

    if (apiError) {
      return response(404).empty();
    }

    return response(200).json({ personId: 12345678910 });
  }),
];
