import { createOpenApiHttp } from "openapi-msw";

import { logger } from "~/utils/logger.utils";

import { components, paths } from "../openapi/behandling-typer";
import { mockBehandlinger } from "./data/mock-behandling";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: process.env.DP_BEHANDLING_URL });

const defaultError: components["schemas"]["HttpProblem"] = {
  type: "500",
  title: "Default feilmelding dp-behandling",
  status: 500,
};

const error404: components["schemas"]["HttpProblem"] = {
  type: "404",
  title: "Fant ikke data i dp-behandling",
  status: 404,
};

export const mockDpBehandling = [
  http.get("/behandling/{behandlingId}", ({ request, params, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    const { behandlingId } = params;
    const mockBehandling = mockBehandlinger.find(
      (behandling) => behandling.behandlingId === behandlingId,
    );

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    if (mockBehandling) {
      return response(200).json(mockBehandling);
    }

    return response("default").json(error404, { status: 404 });
  }),

  http.post(`/behandling/{behandlingId}/avbryt`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.post(`/behandling/{behandlingId}/godkjenn`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.post(`/behandling/{behandlingId}/rekjor`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.put(
    `/behandling/{behandlingId}/opplysning/{opplysningId}`,
    ({ request, response, params }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      if (apiError) {
        return response("default").json(defaultError, { status: 500 });
      }

      return response(200).json({ behandlingId: params.behandlingId });
    },
  ),

  http.put(`/behandling/{behandlingId}/avklaring/{avklaringId}`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(400).empty();
    }

    return response(204).empty();
  }),
];
