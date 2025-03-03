import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockOrkestratorOpplysningBarn } from "./data/mock-orkestrator-opplysning-barn";

export const mockDpSoknadOrkestratorBarn = [
  http.get(`${process.env.DP_SOKNAD_ORKESTRATOR_URL}/opplysninger/barn`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (mockOrkestratorOpplysningBarn) {
      return HttpResponse.json(mockOrkestratorOpplysningBarn);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),
];
