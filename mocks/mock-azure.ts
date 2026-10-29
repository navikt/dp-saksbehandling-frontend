import { http, HttpResponse } from "msw/http";
import { delay } from "msw/utils/delay";

import { mockSaksbehandler } from "./data/mock-saksbehandler";

export const mockAzure = [
  // Hent saksbehandler
  http.get("https://graph.microsoft.com/v1.0/me/", async () => {
    await delay();
    return HttpResponse.json(mockSaksbehandler);
  }),
];
