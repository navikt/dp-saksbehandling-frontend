import { delay } from "msw";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";
import { logger } from "~/utils/logger.utils";

import { paths } from "../openapi/rapportering-personregister-typer";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_RAPPORTERING_PERSONREGISTER_URL") });

export const mockDpRapporteringPersonregister = [
  http.post(`/hentPersonId`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response(404).empty();
    }

    return response(200).json({ personId: 12345678910 });
  }),
];
