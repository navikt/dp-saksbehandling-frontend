import { http, HttpResponse } from "msw";
import { mockBehandling } from "./data/mock-behandling";

export const mockDpBehandling = [
  http.get(`${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId`, () => {
    return HttpResponse.json(mockBehandling);
  }),

  http.post(`${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId/avbryt`, () => {
    return new HttpResponse(null, {
      status: 204,
    });
  }),

  http.post(`${process.env.DP_BEHANDLING_URL}/behandling/:behandlingId/godkjenn`, () => {
    return new HttpResponse(null, {
      status: 204,
    });
  }),
];
