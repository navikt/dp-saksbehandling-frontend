import { createOpenApiHttp } from "openapi-msw";

import { logger } from "~/utils/logger.utils";

import { components, paths } from "../openapi/saksbehandling-typer";
import { mockListeOppgaver, mockOppgaver } from "./data/mock-oppgaver";
import { mockStatistikk } from "./data/mock-statistikk";

const apiError = false;
const http = createOpenApiHttp<paths>({ baseUrl: process.env.DP_SAKSBEHANDLING_URL });

const defaultError: components["schemas"]["HttpProblem"] = {
  type: "500",
  title: "Default MSW feilmelding",
  status: 500,
  instance: "dp-saksbehandling",
};

const error404: components["schemas"]["HttpProblem"] = {
  type: "404",
  title: "Fant ikke data",
  status: 404,
  instance: "dp-saksbehandling",
};

export const mockDpSaksbehandling = [
  // Hent alle oppgaver
  http.get(`/oppgave`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(200).json({
      oppgaver: mockListeOppgaver,
      totaltAntallOppgaver: mockListeOppgaver.length,
    });
  }),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.put(`/oppgave/neste`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(200).json(mockOppgaver[0]);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`/oppgave/{oppgaveId}`, ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(200).json(mockOppgave);
    }

    return response(404).json(error404);
  }),

  // Tildel en oppgave med oppgaveId
  http.put(`/oppgave/{oppgaveId}/tildel`, ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    if (apiError) {
      return response(500).json(defaultError);
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      if (mockOppgave.tilstand === "KLAR_TIL_BEHANDLING") {
        return response(200).json({ nyTilstand: "UNDER_BEHANDLING" });
      }
      if (mockOppgave.tilstand === "KLAR_TIL_KONTROLL") {
        return response(200).json({ nyTilstand: "UNDER_KONTROLL" });
      }
      return response(200).json({ nyTilstand: mockOppgave.tilstand });
    }

    return response(404).json(error404);
  }),

  // Legg oppgave med oppgaveId tilbake i køen
  http.put(`/oppgave/{oppgaveId}/legg-tilbake`, ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    if (apiError) {
      return response(500).json(defaultError);
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(204).empty();
    }

    return response(404).json(error404);
  }),

  // Ferdigstille oppgave med melding om vedtak generert i Arena.
  http.put(`/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak-arena`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(204).empty();
  }),

  // Ferdigstille oppgave med melding om vedtak generert i frontend.
  http.put(`/oppgave/{oppgaveId}/ferdigstill/melding-om-vedtak`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(204).empty();
  }),

  // Utsett oppgave med oppgaveId
  http.put(`/oppgave/{oppgaveId}/utsett`, ({ request, response, params }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return response(200).empty();
    }

    return response(404).json(error404);
  }),

  // Send oppgave til kontroll
  http.put(`/oppgave/{oppgaveId}/send-til-kontroll`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(204).empty();
  }),

  // Send oppgave tilbake til saksbehandler fra kontroll
  http.put(`/oppgave/{oppgaveId}/returner-til-saksbehandler`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(204).empty();
  }),

  // Lagre notat på oppgave
  http.put(`/oppgave/{oppgaveId}/notat`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
  }),

  // Slett notat på oppgave
  http.delete(`/oppgave/{oppgaveId}/notat`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(200).json({ sistEndretTidspunkt: new Date().toISOString() });
  }),

  // Hent alle oppgaver til en person
  http.post(`/person/oppgaver`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(200).json(mockListeOppgaver);
  }),

  // Hent statistikk
  http.get(`/statistikk`, ({ request, response }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    if (apiError) {
      return response(500).json(defaultError);
    }

    return response(200).json(mockStatistikk);
  }),
];
