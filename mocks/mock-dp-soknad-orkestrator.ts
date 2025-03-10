import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockOrkestratorBarn } from "./data/mock-orkestrator-barn";
import { mockOrkestratorLandListe } from "./data/mock-orkestrator-land-lister";

export const mockDpSoknadOrkestrator = [
  http.get(
    `${process.env.DP_SOKNAD_ORKESTRATOR_URL}/opplysninger/:oppgaveId/barn`,
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      if (mockOrkestratorBarn) {
        return HttpResponse.json(mockOrkestratorBarn);
      }

      return new HttpResponse(null, {
        status: 404,
      });
    },
  ),

  http.put(
    `${process.env.DP_SOKNAD_ORKESTRATOR_URL}/opplysninger/:oppgaveId/barn/oppdater`,
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      if (mockOrkestratorBarn) {
        return HttpResponse.json(mockOrkestratorBarn);
      }

      return new HttpResponse(null, {
        status: 404,
      });
    },
  ),

  http.get(`${process.env.DP_SOKNAD_ORKESTRATOR_URL}/land`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (mockOrkestratorLandListe) {
      return HttpResponse.json(mockOrkestratorLandListe);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),
];
