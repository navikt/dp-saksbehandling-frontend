import { graphql, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockPdlPerson } from "./data/mock-pdl-person";

export const mockPdl = [
  graphql.query("hentPerson", ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return HttpResponse.json({
      data: {
        hentPerson: mockPdlPerson,
      },
    });
  }),
];
