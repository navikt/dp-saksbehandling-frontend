import { paths } from "openapi/soknad-orkestrator-typer";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";

import { mockOrkestratorBarn } from "./data/mock-orkestrator/mock-orkestrator-barn";
import { mockOrkestratorLandListe } from "./data/mock-orkestrator/mock-orkestrator-land-lister";

const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_SOKNAD_ORKESTRATOR_URL") });

export const mockDpSoknadOrkestrator = [
  http.get(`/opplysninger/barn/{soknadbarnId}`, ({ response }) => {
    if (mockOrkestratorBarn) {
      return response(200).json(mockOrkestratorBarn);
    }

    return response(400).empty();
  }),

  http.put(`/opplysninger/barn/{soknadbarnId}`, ({ response }) => {
    return response(200).empty();
  }),

  http.post(`/opplysninger/barn/{soknadbarnId}`, ({ response }) => {
    return response(201).json(mockOrkestratorBarn);
  }),

  http.get(`/land`, ({ response }) => {
    return response(200).json(mockOrkestratorLandListe);
  }),
];
