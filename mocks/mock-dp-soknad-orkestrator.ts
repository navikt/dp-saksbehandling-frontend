import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockOrkestratorOpplysning } from "./data/mock-orkestrator-opplysning";

export const mockDpSoknadOrkestratorBarn = [
  http.get(`${process.env.DP_SOKNAD_ORKESTRATOR_URL}/`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (mockOrkestratorOpplysning) {
      return HttpResponse.json(mockOrkestratorOpplysning);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),
];
