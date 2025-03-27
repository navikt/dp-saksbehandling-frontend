import { HttpResponse } from "msw";
import { paths } from "openapi/soknad-orkestrator-typer";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";
import { logger } from "~/utils/logger.utils";

import { mockOrkestratorBarn } from "./data/mock-orkestrator-barn";
import { mockOrkestratorLandListe } from "./data/mock-orkestrator-land-lister";

const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_SOKNAD_ORKESTRATOR_URL") });

export const mockDpSoknadOrkestrator = [
  http.get(`/opplysninger/{soknadId}/barn`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (mockOrkestratorBarn) {
      return response(200).json(mockOrkestratorBarn);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),

  http.put(`/opplysninger/{soknadId}/barn/oppdater`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    return new HttpResponse(null, {
      status: 200,
    });
  }),

  http.get(`/land`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (mockOrkestratorLandListe) {
      return HttpResponse.json(mockOrkestratorLandListe);
    }

    return new HttpResponse(null, {
      status: 200,
    });
  }),
];
