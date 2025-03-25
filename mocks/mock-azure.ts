import { delay, http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockSaksbehandler } from "./data/mock-saksbehandler";

export const mockAzure = [
  // Hent saksbehandler
  http.get("https://graph.microsoft.com/v1.0/me/", async ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();
    return HttpResponse.json(mockSaksbehandler);
  }),
];
