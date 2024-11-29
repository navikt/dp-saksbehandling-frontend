import { bypass, http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

export const mockSanity = [
  http.get("https://rt6o382n.api.sanity.io/v2022-03-07/data/query*", async ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    const response = await fetch(bypass(request));
    const sanityData = await response.json();

    return HttpResponse.json(sanityData);
  }),
];
