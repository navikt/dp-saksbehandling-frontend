import { delay } from "msw";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";

import { components, paths } from "../openapi/melding-om-vedtak-typer";
import { mockMeldingerOmVedtak } from "./data/melding-om-vedtak/mock-melding-om-vedtak";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_MELDING_OM_VEDTAK_URL") });

const defaultError: components["schemas"]["HttpProblem"] = {
  type: "500",
  title: "Default MSW feilmelding",
  detail: "En feil har oppstått",
  status: 500,
  instance: "dp-melding-om-vedtak",
};

function getError404(detail: string): components["schemas"]["HttpProblem"] {
  return {
    type: "404",
    title: "Fant ikke data",
    detail,
    status: 404,
    instance: "dp-melding-om-vedtak",
  };
}

export const mockDpMeldingOmVedtak = [
  // Hent melding om vedtak for behandlingId
  http.post("/melding-om-vedtak/{behandlingId}/html", async ({ params, response }) => {
    await delay();

    const meldingOmVedtak = mockMeldingerOmVedtak.find(
      (melding) => melding.behandlingId === params.behandlingId,
    );

    if (!meldingOmVedtak) {
      return response(404).json(
        getError404(`Fant ikke melding om vedtak for ${params.behandlingId}`),
      );
    }

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(meldingOmVedtak.melding);
  }),

  // Lagre utvidet beskrivelse tekst
  http.put(
    "/melding-om-vedtak/{behandlingId}/{brevblokkId}/utvidet-beskrivelse-json",
    async ({ response }) => {
      await delay();

      if (apiError) {
        return response("default").json(defaultError, { status: 500 });
      }

      return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
    },
  ),

  // Lagre brev variant
  http.put("/melding-om-vedtak/{behandlingId}/brev-variant", async ({ response }) => {
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),
];
