import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockBehandlingInnvilgelse } from "./data/mock-behandling";

export const mockDpBehandling = [
  http.get(`${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return HttpResponse.json(mockBehandlingInnvilgelse);
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
    ({ request, params }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      const oppdaterteAvklaringer = mockBehandlingInnvilgelse.avklaringer.map((avklaring) =>
        avklaring.id === params.avklaringId ? { ...avklaring, status: "Kvittert" } : avklaring,
      );

      return HttpResponse.json({
        ...mockBehandlingInnvilgelse,
        avklaringer: oppdaterteAvklaringer,
      });
    },
  ),
];
