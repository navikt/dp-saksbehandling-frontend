import { http, HttpResponse } from "msw";
import { mockSaksbehandler } from "./data/mock-saksbehandler";
import { mockSanity } from "./data/mock-sanity";
import { mockOppgaver } from "./data/mock-oppgaver";

export const mswHandlers = [
  // Hent saksbehandler
  http.get("https://graph.microsoft.com/v1.0/me/", () => {
    return HttpResponse.json(mockSaksbehandler);
  }),

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

  // Hent sanity tekster
  http.get("https://rt6o382n.apicdn.sanity.io/v2021-06-06/data/query/production", () => {
    return HttpResponse.json(mockSanity);
  }),
];
