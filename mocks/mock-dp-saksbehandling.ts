import { delay } from "msw";
import { createOpenApiHttp } from "openapi-msw";

import { getEnv } from "~/utils/env.utils";
import { logger } from "~/utils/logger.utils";

import { components, paths } from "../openapi/saksbehandling-typer";
import { klager } from "./data/mock-klage";
import { konverterOppgaveTilListeOppgave, mockListeOppgaver } from "./data/mock-liste-oppgaver";
import { klageOppgave, mockOppgaver } from "./data/mock-oppgaver";
import { mockPersonOversikt } from "./data/mock-person-oversikt";
import { mockStatistikk } from "./data/mock-statistikk";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: getEnv("DP_SAKSBEHANDLING_URL") });

const defaultError: components["schemas"]["HttpProblem"] = {
  type: "500",
  title: "MSW 500 feilmelding",
  status: 500,
  instance: "dp-saksbehandling",
};

function get404Error(apiKall: string): components["schemas"]["HttpProblem"] {
  return {
    type: "404",
    title: `MSW 404 feilmelding for ${apiKall}`,
    status: 404,
    instance: "dp-saksbehandling",
  };
}

export const mockDpSaksbehandling = [
  // Hent alle oppgaver
  http.get(`/oppgave`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({
      oppgaver: mockListeOppgaver,
      totaltAntallOppgaver: mockListeOppgaver.length,
    });
  }),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.put(`/oppgave/neste`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockOppgaver[0]);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`/oppgave/{oppgaveId}`, async ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(200).json(mockOppgave);
    }

    return response(404).json(get404Error("/oppgave/{oppgaveId}"));
  }),

  // Tildel en oppgave med oppgaveId
  http.put(`/oppgave/{oppgaveId}/tildel`, async ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      if (mockOppgave.tilstand === "KLAR_TIL_BEHANDLING") {
        return response(200).json({
          nyTilstand: "UNDER_BEHANDLING",
          behandlingType: mockOppgave.behandlingType,
        });
      }
      if (mockOppgave.tilstand === "KLAR_TIL_KONTROLL") {
        return response(200).json({
          nyTilstand: "UNDER_KONTROLL",
          behandlingType: mockOppgave.behandlingType,
        });
      }

      return response(200).json({
        nyTilstand: mockOppgave.tilstand,
        behandlingType: mockOppgave.behandlingType,
      });
    }

    return response(404).json(get404Error("/oppgave/{oppgaveId}/tildel"));
  }),

  // Legg oppgave med oppgaveId tilbake i køen
  http.put(`/oppgave/{oppgaveId}/legg-tilbake`, async ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(204).empty();
    }

    return response(404).json(get404Error("oppgave/{oppgaveId}/legg-tilbake"));
  }),

  // Ferdigstille oppgave med melding om vedtak generert i Arena.
  http.put(
    `/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak-arena`,
    async ({ request, response }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);
      await delay();

      if (apiError) {
        return response("default").json(defaultError, { status: 500 });
      }

      return response(204).empty();
    },
  ),

  // Ferdigstille oppgave med melding om vedtak generert i frontend.
  http.put(`/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  // Utsett oppgave med oppgaveId
  http.put(`/oppgave/{oppgaveId}/utsett`, async ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(200).empty();
    }

    return response(404).json(get404Error("/oppgave/{oppgaveId}/utsett"));
  }),

  // Send oppgave til kontroll
  http.put(`/oppgave/{oppgaveId}/send-til-kontroll`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  // Send oppgave tilbake til saksbehandler fra kontroll
  http.put(`/oppgave/{oppgaveId}/returner-til-saksbehandler`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(204).empty();
  }),

  // Lagre notat på oppgave
  http.put(`/oppgave/{oppgaveId}/notat`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
  }),

  // Slett notat på oppgave
  http.delete(`/oppgave/{oppgaveId}/notat`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
  }),

  // Hent en klage med behandlingId
  http.get(`/klage/{behandlingId}`, async ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { behandlingId } = params;
    const klage = klager.find((klage) => klage.behandlingId === behandlingId);

    if (klage) {
      return response(200).json(klage);
    }

    return response(404).json(get404Error("/klage/{behandlingId}"));
  }),

  // Opprett en klage
  http.post(`/klage/opprett-manuelt`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(konverterOppgaveTilListeOppgave(klageOppgave));
  }),

  // Ferdigstill en klage med behandlingId
  http.put(`/klage/{behandlingId}/ferdigstill`, async ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { behandlingId } = params;
    const klage = klager.find((klage) => klage.behandlingId === behandlingId);

    if (klage) {
      return response(204).empty();
    }

    return response(404).json(get404Error("/klage/{behandlingId}/ferdigstill"));
  }),

  // Trekk en klage med behandlingId
  http.put(`/klage/{behandlingId}/trekk`, async ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    const { behandlingId } = params;
    const klage = klager.find((klage) => klage.behandlingId === behandlingId);

    if (klage) {
      return response(204).empty();
    }

    return response(404).json(get404Error("/klage/{behandlingId}/trekk"));
  }),

  // Lagre opplysning på klage
  http.put(`/klage/{behandlingId}/opplysning/{opplysningId}`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    return response(201).empty();
  }),

  // Hent person med fnr i body
  http.post(`/person`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockPersonOversikt);
  }),

  // Hent person med uuid i url
  http.get(`/person/{personId}`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockPersonOversikt);
  }),

  // Hent alle oppgaver til en person
  http.post(`/person/oppgaver`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockListeOppgaver);
  }),

  // Hent statistikk
  http.get(`/statistikk`, async ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    await delay();

    if (apiError) {
      return response("default").json(defaultError, { status: 500 });
    }

    return response(200).json(mockStatistikk);
  }),
];
