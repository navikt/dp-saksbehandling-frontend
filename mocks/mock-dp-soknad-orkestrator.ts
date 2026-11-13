import { createOpenApiHttp } from "openapi-msw";

import { paths } from "@/openapi/soknad-orkestrator-typer";
import { getEnv } from "~/utils/env.utils";

import { mockOrkestratorLandListe } from "./data/mock-orkestrator/mock-orkestrator-land-lister";

const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_SOKNAD_ORKESTRATOR_URL") });

export const mockDpSoknadOrkestrator = [
  http.get(`/land`, ({ response }) => {
    return response(200).json(mockOrkestratorLandListe);
  }),
];
