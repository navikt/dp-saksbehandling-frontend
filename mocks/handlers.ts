import { http, HttpResponse } from "msw";
import { mockSaksbehandler } from "mock-data/mock-saksbehandler";
import { sanityResponse } from "./api-routes/sanityResponse";
import { oppgaverResponse } from "./api-routes/oppgaverResponse";
import { mockRapporteringsperioder } from "./api-routes/rapporteringsperiodeResponse";
import { mockKorrigeringsperiode } from "./api-routes/korrigeringsperiodeResponse";
import { vedtakResponse } from "./api-routes/vedtakResponse";
import { arbeidsforholdResponse } from "./api-routes/arbeidsforholdResponse";

export const handlers = [
  // Hent saksbehandler
  http.get("https://graph.microsoft.com/v1.0/me/", () => {
    return HttpResponse.json(mockSaksbehandler);
  }),

  // Hent alle oppgaver
  http.get(`${process.env.DP_BEHANDLING_URL}/oppgave`, () => {
    return HttpResponse.json(oppgaverResponse);
  }),

  // Hent en oppgave med oppgaveId
  http.get(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId`, ({ params }) => {
    const { oppgaveId } = params;
    const oppgaveResponse = oppgaverResponse.find((oppgave) => oppgave.uuid === oppgaveId);

    return HttpResponse.json(oppgaveResponse);
  }),

  // Svar på et oppgave steg med oppgaveId og stegId
  http.put(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/steg/:stegId`, () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),

  // Endre status
  http.post(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/tilstand`, () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),

  // Lag en rapporteringsperiode
  http.post(`${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder`, () => {
    return HttpResponse.json(mockRapporteringsperioder[0]);
  }),

  // Hent ut en enkelt rapporteringsperiode
  http.get(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6`,
    () => {
      return HttpResponse.json(mockRapporteringsperioder[0]);
    },
  ),

  // Hent ut rapporteringsperioder
  http.post(`${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/sok`, () => {
    return HttpResponse.json(mockRapporteringsperioder);
  }),

  // Hent ut en enkelt korrigeringsperiode
  http.get(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa66`,
    () => {
      return HttpResponse.json(mockKorrigeringsperiode);
    },
  ),

  // Hent ut en korrigeringsperiode
  http.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/korrigering`,
    () => {
      return HttpResponse.json(mockKorrigeringsperiode);
    },
  ),

  // Godkjenn en rapporteringsperiode
  http.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/godkjenn`,
    () => {
      return new HttpResponse(null, {
        status: 200,
      });
    },
  ),

  // Avgodkjenn en rapporteringsperiode
  http.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/avgodkjenn`,
    () => {
      return new HttpResponse(null, {
        status: 200,
      });
    },
  ),

  // Lagre en aktivitet
  http.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/aktivitet`,
    () => {
      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),

  // Slett en aktivitet
  http.delete(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/aktivitet/4a49e571-6384-4eab-9c2e-3f4d48d30b9a`,
    () => {
      return new HttpResponse(null, {
        status: 204,
      });
    },
  ),

  // Hent vedtak
  http.post(`${process.env.DP_VEDTAK_URL}/vedtak`, () => {
    return HttpResponse.json(vedtakResponse);
  }),

  // Hent arbeidsforhold
  http.post(`${process.env.DP_BEHANDLING_URL}/arbeidsforhold`, () => {
    return HttpResponse.json(arbeidsforholdResponse);
  }),

  // Hent sanity tekster
  http.get("https://rt6o382n.apicdn.sanity.io/v2021-06-06/data/query/production", () => {
    return HttpResponse.json(sanityResponse);
  }),
];
