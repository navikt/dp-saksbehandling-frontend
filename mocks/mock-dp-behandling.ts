import { http, HttpResponse } from "msw";
import { mockOppgaver } from "./data/mock-oppgaver";

export const mockDpBehandling = [
  // Hent alle oppgaver
  http.get(`${process.env.DP_BEHANDLING_URL}/oppgave`, () => {
    return HttpResponse.json(mockOppgaver);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId`, ({ params }) => {
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
  http.put(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/steg/:stegId`, () => {
    return new HttpResponse(null, {
      status: 201,
    });
  }),
];
