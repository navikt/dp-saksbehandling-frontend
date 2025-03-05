import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockOrkestratorOpplysningBarn } from "./data/mock-orkestrator-barn-opplysning";

export const mockDpSoknadOrkestratorBarn = [
  http.get(`${process.env.DP_SOKNAD_ORKESTRATOR_URL}/opplysninger/:oppgaveId/barn`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (mockOrkestratorOpplysningBarn) {
      return HttpResponse.json(mockOrkestratorOpplysningBarn);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),
];