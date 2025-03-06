import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";
import { mockOrkestratorBarnOpplysninger } from "./data/mock-orkestrator-barn-opplysninger";

export const mockDpSoknadOrkestratorBarn = [
  http.get(
    `${process.env.DP_SOKNAD_ORKESTRATOR_URL}/opplysninger/:oppgaveId/barn`,
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      if (mockOrkestratorBarnOpplysninger) {
        return HttpResponse.json(mockOrkestratorBarnOpplysninger);
      }

      return new HttpResponse(null, {
        status: 404,
      });
    },
  ),
];
