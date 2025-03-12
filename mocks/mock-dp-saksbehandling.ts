import { http, HttpResponse } from "msw";

import { logger } from "~/utils/logger.utils";

import { mockListeOppgaver, mockOppgaver } from "./data/mock-oppgaver";

export const mockDpSaksbehandling = [
  // Hent alle oppgaver
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return HttpResponse.json({
      oppgaver: mockListeOppgaver,
      totaltAntallOppgaver: mockListeOppgaver.length,
    });
  }),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/neste`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return HttpResponse.json(
      {
        type: "",
        title: "",
        status: 404,
        detail: "",
        instance: "",
      },
      { status: 404 },
    );

    return HttpResponse.json(mockOppgaver[0]);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId`, ({ request, params }) => {
    const { oppgaveId } = params;
    logger.info(`[MSW]-${request.method} ${request.url}`);
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return HttpResponse.json(mockOppgave);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),

  // Tildel en oppgave med oppgaveId
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/tildel`,
    ({ request, params }) => {
      const { oppgaveId } = params;
      logger.info(`[MSW]-${request.method} ${request.url}`);
      const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

      if (mockOppgave) {
        if (mockOppgave.tilstand === "KLAR_TIL_BEHANDLING") {
          return HttpResponse.text("UNDER_BEHANDLING");
        }
        if (mockOppgave.tilstand === "KLAR_TIL_KONTROLL") {
          return HttpResponse.text("UNDER_KONTROLL");
        }
        return HttpResponse.text(mockOppgave.tilstand);
      }

      return new HttpResponse("Oppgaven er allerede tatt til behandling", {
        status: 423,
      });

      // return new HttpResponse(null, {
      //   status: 404,
      // });
    },
  ),

  // Legg oppgave med oppgaveId tilbake i køen
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/legg-tilbake`,
    ({ request, params }) => {
      const { oppgaveId } = params;
      logger.info(`[MSW]-${request.method} ${request.url}`);
      const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

      if (mockOppgave) {
        return new HttpResponse(null, {
          status: 204,
        });
      }

      return new HttpResponse(null, {
        status: 404,
      });
    },
  ),

  // Ferdigstille oppgave med melding om vedtak generert i Arena.
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/ferdigstill/melding-om-vedtak-arena`,
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),

  // Ferdigstille oppgave med melding om vedtak generert i frontend.
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/ferdigstill/melding-om-vedtak`,
    ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),

  // Utsett oppgave med oppgaveId
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/utsett`, ({ params }) => {
    const { oppgaveId } = params;
    logger.info(`[MSW]-PUT ${process.env.DP_SAKSBEHANDLING_URL}/oppgave/${oppgaveId}/utsett`);
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return new HttpResponse(null, {
        status: 204,
      });
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),

  // Send oppgave til kontroll
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/send-til-kontroll`,
    async ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),

  // Send oppgave tilbake til saksbehandler fra kontroll
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/returner-til-saksbehandler`,
    async ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),

  // Lagre notat på oppgave
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/notat`, async ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    return HttpResponse.json({ sistEndretTidspunkt: new Date().toISOString() });
  }),

  // Slett notat på oppgave
  http.delete(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/notat`,
    async ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      return HttpResponse.json({ sistEndretTidspunkt: new Date().toISOString() });
    },
  ),

  // Hent alle oppgaver til en person
  http.post(`${process.env.DP_SAKSBEHANDLING_URL}/person/oppgaver`, async ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);
    return HttpResponse.json(mockListeOppgaver);
  }),

  // Send brev for oppgave
  http.post(
    `${process.env.DP_SAKSBEHANDLING_URL}/utsending/:oppgaveId/send-brev`,
    async ({ request }) => {
      logger.info(`[MSW]-${request.method} ${request.url}`);

      return new HttpResponse(null, {
        status: 202,
      });
    },
  ),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/statistikk`, ({ request }) => {
    logger.info(`[MSW]-${request.method} ${request.url}`);

    return HttpResponse.json({
      individuellStatistikk: { dag: 4, uke: 12, totalt: 623 },
      generellStatistikk: { dag: 400, uke: 1200, totalt: 6230 },
      beholdningsinfo: {
        antallOppgaverKlarTilBehandling: 1401,
        antallOppgaverKlarTilKontroll: 7,
        datoEldsteUbehandledeOppgave: "2025-02-12T13:26:19.548108",
      },
    });
  }),
];
