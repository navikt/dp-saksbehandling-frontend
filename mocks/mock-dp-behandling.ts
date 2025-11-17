import { delay } from "msw";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";

import { components, paths } from "../openapi/behandling-typer";
import { mockBehandlinger } from "./data/mock-behandling/mock-behandling";
import { mockVurderinger } from "./data/mock-vurderinger";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_BEHANDLING_URL") });

const defaultError: components["schemas"]["HttpProblem"] = {
  type: "500",
  title: "Default MSW feilmelding",
  detail: "En feil har oppstått. Kan ikke hente behandling",
  status: 500,
  instance: "dp-behandling",
};

function getError404(detail: string): components["schemas"]["HttpProblem"] {
  return { type: "404", title: "Fant ikke data", detail, status: 404, instance: "dp-behandling" };
}

export const mockDpBehandling = [
  http.post("/person/behandling", async ({ response }) => {
    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockBehandlinger[0]);
  }),

  http.get("/behandling/{behandlingId}", async ({ params, response }) => {
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

    return response("default").json(getError404(`Fant ikke behandling med id: ${behandlingId}`), {
      status: 404,
    });
  }),

  http.post(`/behandling/{behandlingId}/avbryt`, async ({ response }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.post(`/behandling/{behandlingId}/godkjenn`, async ({ response }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.post(`/behandling/{behandlingId}/rekjor`, async ({ response }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(201).empty();
  }),

  http.post(`/behandling/{behandlingId}/opplysning/`, async ({ response, params }) => {
    await delay();
    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({ behandlingId: params.behandlingId });
  }),

  http.delete(
    `/behandling/{behandlingId}/opplysning/{opplysningId}`,
    async ({ response, params }) => {
      await delay();
      if (apiError) {
        return response("default").json(defaultError, { status: 500 });
      }

      return response(200).json({ behandlingId: params.behandlingId });
    },
  ),

  http.put(`/behandling/{behandlingId}/avklaring/{avklaringId}`, async ({ response }) => {
    await delay();

    if (apiError) {
      return response(400).json(defaultError);
    }

    return response(204).empty();
  }),

  http.get(`/behandling/{behandlingId}/vurderinger`, async ({ response }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockVurderinger);
  }),

  http.put(`/behandling/{behandlingId}/vurderinger/{opplysningId}`, async ({ response }) => {
    await delay();

    if (apiError) {
      return response(400).json(defaultError);
    }

    return response(204).empty();
  }),
];
