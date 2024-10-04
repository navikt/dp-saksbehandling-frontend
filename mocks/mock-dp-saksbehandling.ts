import { http, HttpResponse } from "msw";
import { mockListeOppgaver, mockOppgaver } from "./data/mock-oppgaver";
import { logger } from "~/utils/logger.utils";

export const mockDpSaksbehandling = [
  // Hent alle oppgaver
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave`, () => {
    logger.info(`[MSW]-GET ${process.env.DP_SAKSBEHANDLING_URL}/oppgave`);
    return HttpResponse.json(mockListeOppgaver);
  }),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/neste`, () => {
    logger.info(`[MSW]-PUT ${process.env.DP_SAKSBEHANDLING_URL}/oppgave/neste`);
    // return HttpResponse.json(
    //   {
    //     type: "",
    //     title: "",
    //     status: 404,
    //     detail: "",
    //     instance: "",
    //   },
    //   { status: 404 },
    // );

    return HttpResponse.json(mockOppgaver[0]);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId`, ({ params }) => {
    const { oppgaveId } = params;
    logger.info(`[MSW]-GET ${process.env.DP_SAKSBEHANDLING_URL}/oppgave/${oppgaveId}`);
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return HttpResponse.json(mockOppgave);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),

  // Tildel en oppgave med oppgaveId
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/tildel`, ({ params }) => {
    const { oppgaveId } = params;
    logger.info(`[MSW]-PUT ${process.env.DP_SAKSBEHANDLING_URL}/oppgave/${oppgaveId}/tildel`);

    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return HttpResponse.json(mockOppgave);
    }

    return new HttpResponse("Oppgaven er allerede tatt til behandling", {
      status: 423,
    });

    // return new HttpResponse(null, {
    //   status: 404,
    // });
  }),

  // Legg oppgave med oppgaveId tilbake i køen
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/legg-tilbake`, ({ params }) => {
    const { oppgaveId } = params;
    logger.info(`[MSW]-PUT ${process.env.DP_SAKSBEHANDLING_URL}/oppgave/${oppgaveId}/legg-tilbake`);
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

  // Ferdigstille oppgave med melding om vedtak generert i Arena.
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/ferdigstill/melding-om-vedtak-arena`,
    ({ params }) => {
      const { oppgaveId } = params;
      logger.info(
        `[MSW]-PUT ${process.env.DP_SAKSBEHANDLING_URL}/oppgave/${oppgaveId}/ferdigstill/melding-om-vedtak-arena`,
      );

      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),

  // Ferdigstille oppgave med melding om vedtak generert i frontend.
  http.put(
    `${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/ferdigstill/melding-om-vedtak`,
    ({ params }) => {
      const { oppgaveId } = params;
      logger.info(
        `[MSW]-PUT ${process.env.DP_SAKSBEHANDLING_URL}/oppgave/${oppgaveId}/ferdigstill/melding-om-vedtak`,
      );

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

  // Hent alle oppgaver til en person
  http.post(`${process.env.DP_SAKSBEHANDLING_URL}/person/oppgaver`, async () => {
    logger.info(`[MSW]-POST ${process.env.DP_SAKSBEHANDLING_URL}/person/oppgaver`);
    return HttpResponse.json(mockOppgaver);
  }),

  // Send brev for oppgave
  http.post(
    `${process.env.DP_SAKSBEHANDLING_URL}/utsending/:oppgaveId/send-brev`,
    async ({ params }) => {
      const { oppgaveId } = params;
      logger.info(
        `[MSW]-POST ${process.env.DP_SAKSBEHANDLING_URL}/utsending/${oppgaveId}/send-brev`,
      );

      return new HttpResponse(null, {
        status: 202,
      });
    },
  ),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/statistikk`, () => {
    logger.info(`[MSW]-PUT ${process.env.DP_SAKSBEHANDLING_URL}/statistikk`);

    return HttpResponse.json({ dag: 4, uke: 12, totalt: 623 });
  }),
];
