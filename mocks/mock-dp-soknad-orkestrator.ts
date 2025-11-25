import { createOpenApiHttp } from "openapi-msw";

import { paths } from "@/openapi/soknad-orkestrator-typer";
import { getEnv } from "~/utils/env.utils";

import { mockOrkestratorBarn } from "./data/mock-orkestrator/mock-orkestrator-barn";
import { mockOrkestratorLandListe } from "./data/mock-orkestrator/mock-orkestrator-land-lister";

const http = createOpenApiHttp<paths>({
  baseUrl: getEnv("DP_SOKNAD_ORKESTRATOR_URL"),
});

export const mockDpSoknadOrkestrator = [
  http.get(`/opplysninger/{soknadId}/barn`, ({ response }) => {
    if (mockOrkestratorBarn) {
      return response(200).json(mockOrkestratorBarn);
    }

    return response(400).empty();
  }),

  http.put(`/opplysninger/{soknadId}/barn/oppdater`, ({ response }) => {
    return response(200).empty();
  }),

  http.get(`/land`, ({ response }) => {
    return response(200).json(mockOrkestratorLandListe);
  }),
];
