import { http, HttpResponse } from "msw";
import { mockOppgaver } from "./data/mock-oppgaver";

export const mockDpSaksbehandling = [
  // Hent alle oppgaver
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave`, () => {
    return HttpResponse.json(mockOppgaver);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId`, ({ params }) => {
    const { oppgaveId } = params;
    const mockOppgave = mockOppgaver.find((oppgave) => oppgave.uuid === oppgaveId);

    if (mockOppgave) {
      return HttpResponse.json(mockOppgave);
    }

    return new HttpResponse(null, {
      status: 404,
    });
  }),

  // Svar på et oppgave steg med oppgaveId og stegId
  http.put(`${process.env.DP_SAKSBEHANDLING_URL}/oppgave/:oppgaveId/steg/:stegId`, () => {
    return new HttpResponse(null, {
      status: 201,
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
