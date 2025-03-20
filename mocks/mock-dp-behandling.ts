import { delay } from "msw";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";
import { logger } from "~/utils/logger.utils";

import { components, paths } from "../openapi/behandling-typer";
import { mockBehandlinger } from "./data/mock-behandling";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_BEHANDLING_URL") });

const defaultError: components["schemas"]["HttpProblem"] = {
  type: "500",
  title: "Default MSW feilmelding",
  status: 500,
  instance: "dp-behandling",
};

const error404: components["schemas"]["HttpProblem"] = {
  type: "404",
  title: "Fant ikke data",
  status: 404,
  instance: "dp-behandling",
};

export const mockDpBehandling = [
  http.get("/behandling/{behandlingId}", async ({ request, params, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

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

  http.post(`/behandling/{behandlingId}/avbryt`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.post(`/behandling/{behandlingId}/godkjenn`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.post(`/behandling/{behandlingId}/rekjor`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.put(
    `/behandling/{behandlingId}/opplysning/{opplysningId}`,
    async ({ request, response, params }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);
      await delay();
      if (apiError) {
        return response("default").json(defaultError, { status: 500 });
      }

      return response(200).json({ behandlingId: params.behandlingId });
    },
  ),

  http.put(`/behandling/{behandlingId}/avklaring/{avklaringId}`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response(400).json(defaultError);
    }

    return response(204).empty();
  }),
];
