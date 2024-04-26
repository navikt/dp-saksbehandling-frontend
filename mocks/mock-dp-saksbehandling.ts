import { http, HttpResponse } from "msw";
import { mockOppgaver } from "./data/mock-oppgaver";

export const mockDpSaksbehandling = [
  // Hent alle oppgaver
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave`, () => {
    return HttpResponse.json(mockOppgaver);
  }),

  // Hent neste oppgave og tildel denne til saksbehandler
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/neste`, () => {
    return new HttpResponse(null, {
      status: 404,
    });

    return HttpResponse.json(mockOppgaver[0]);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId`, ({ params }) => {
    const { oppgaveId } = params;
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
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.oppgaveId === oppgaveId);

    if (mockOppgave) {
      return HttpResponse.json(mockOppgave);
    }

    // return new HttpResponse("Oppgaven er allerede tatt til behandling", {
    //   status: 423,
    // });

    return new HttpResponse(null, {
      status: 404,
    });
  }),

  // Legg oppgave med oppgaveId tilbake i køen
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/legg-tilbake`, ({ params }) => {
    const { oppgaveId } = params;
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

  // Lukk en oppgave for å fortsette saksbehandling i Arena
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/lukk`, () => {
    return new HttpResponse(null, {
      status: 204,
    });
  }),

  // Gi avslag på en oppgave
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/avslag`, () => {
    return new HttpResponse(null, {
      status: 204,
    });
  }),
];
