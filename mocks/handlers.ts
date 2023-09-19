import { rest } from "msw";
import { oppgaverResponse } from "./api-routes/oppgaverResponse";
import { sanityResponse } from "./api-routes/sanityResponse";
import { mockRapporteringsperioder } from "./api-routes/rapporteringsperiodeResponse";
import { mockKorrigeringsperiode } from "./api-routes/korrigeringsperiodeResponse";
import { vedtakResponse } from "./api-routes/vedtakResponse";
import { mockSaksbehandler } from "mock-data/mock-saksbehandler";

export const handlers = [
  // Hent saksbehandler
  rest.get("https://graph.microsoft.com/v1.0/me/", (req, res, ctx) => {
    return res(ctx.json(mockSaksbehandler));
  }),

  // Hent alle oppgaver
  rest.get(`${process.env.DP_BEHANDLING_URL}/oppgave`, (req, res, ctx) => {
    return res(ctx.json(oppgaverResponse));
  }),

  // Hent en oppgave med oppgaveId
  rest.get(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId`, (req, res, ctx) => {
    const oppgaveResponse = oppgaverResponse.find(
      (oppgave) => oppgave.uuid === req.params.oppgaveId,
    );

    return res(ctx.json(oppgaveResponse));
  }),

  // Svar på et oppgave steg med oppgaveId og stegId
  rest.put(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/steg/:stegId`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Endre status
  rest.post(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/tilstand`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Lag en rapporteringsperiode
  rest.post(`${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder`, (req, res, ctx) => {
    return res(ctx.json(mockRapporteringsperioder[0]));
  }),

  // Hent ut rapporteringsperioder
  rest.post(`${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/sok`, (req, res, ctx) => {
    return res(ctx.json(mockRapporteringsperioder));
  }),

  // Hent ut en enkelt rapporteringsperiode
  rest.get(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6`,
    (req, res, ctx) => {
      return res(ctx.json(mockRapporteringsperioder[0]));
    },
  ),

  // Hent ut en enkelt korrigeringsperiode
  rest.get(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa66`,
    (req, res, ctx) => {
      return res(ctx.json(mockKorrigeringsperiode));
    },
  ),

  // Hent ut en korrigeringsperiode
  rest.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/korrigering`,
    (req, res, ctx) => {
      return res(ctx.json(mockKorrigeringsperiode));
    },
  ),

  // Godkjenn en rapporteringsperiode
  rest.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/godkjenn`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),

  // Avgodkjenn en rapporteringsperiode
  rest.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/avgodkjenn`,
    (req, res, ctx) => {
      return res(ctx.status(200));
    },
  ),

  // Lagre en aktivitet
  rest.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/aktivitet`,
    (req, res, ctx) => {
      return res(ctx.status(204));
    },
  ),

  // Slett en aktivitet
  rest.delete(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/aktivitet/4a49e571-6384-4eab-9c2e-3f4d48d30b9a`,
    (req, res, ctx) => {
      return res(ctx.status(204));
    },
  ),

  // Hent vedtak
  rest.post(`${process.env.DP_VEDTAK_URL}/vedtak`, (__, res, ctx) => {
    return res(ctx.json(vedtakResponse));
  }),

  // Hent sanity tekster
  rest.get(
    "https://rt6o382n.apicdn.sanity.io/v2021-06-06/data/query/production",
    (req, res, ctx) => {
      return res(ctx.json(sanityResponse));
    },
  ),
];
