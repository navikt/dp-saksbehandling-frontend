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

    return response(400).empty();
  }),

  http.put(`/opplysninger/{soknadId}/barn/oppdater`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    return response(200).empty();
  }),

  http.get(`/land`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    return response(200).json(mockOrkestratorLandListe);
  }),
];
