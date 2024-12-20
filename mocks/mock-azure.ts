import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockSaksbehandler } from "./data/mock-saksbehandler";

export const mockAzure = [
  // Hent saksbehandler
  http.get("https://graph.microsoft.com/v1.0/me/", ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return HttpResponse.json(mockSaksbehandler);
  }),
];
