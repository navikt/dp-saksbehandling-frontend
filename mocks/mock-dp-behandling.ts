import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockBehandlinger, mockBehandlingInnvilgelse } from "./data/mock-behandling";

export const mockDpBehandling = [
  http.get(`${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId`, ({ request, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    const { behandlingId } = params;
    const mockBehandling = mockBehandlinger.find(
      (behandling) => behandling.behandlingId === behandlingId,
    );

    if (mockBehandling) {
      return HttpResponse.json(mockBehandling);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),

  http.post(`${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId/avbryt`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return new HttpResponse(null, {
      status: 201,
    });
  }),

  http.post(`${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId/godkjenn`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return new HttpResponse(null, {
      status: 201,
    });
  }),

  http.put(
    `${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId/opplysning/:opplysningId`,
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);
      return HttpResponse.json(mockBehandlingInnvilgelse);
    },
  ),

  http.put(
    `${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId/avklaring/:avklaringId`,
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),
];
