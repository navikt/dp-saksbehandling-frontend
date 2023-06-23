import { rest } from "msw";
import { oppgaverResponse } from "./api-routes/oppgaverResponse";
import { sanityResponse } from "./api-routes/sanityResponse";
import { mockRapporteringsperioder } from "./api-routes/rapporteringsperiodeResponse";
import { mockKorrigeringsperiode } from "./api-routes/korrigeringsperiodeResponse";

export const handlers = [
  // Hent alle oppgaver
  rest.get(`${process.env.DP_BEHANDLING_URL}/oppgave`, (req, res, ctx) => {
    return res(ctx.json(oppgaverResponse));
  }),

  // Hent en oppgave med oppgaveId
  rest.get(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId`, (req, res, ctx) => {
    const oppgaveResponse = oppgaverResponse.find(
      (oppgave) => oppgave.uuid === req.params.oppgaveId
    );

    return res(ctx.json(oppgaveResponse));
  }),

  // Svar på et oppgave steg med oppgaveId og stegId
  rest.put(`${process.env.DP_BEHANDLING_URL}/oppgave/:oppgaveId/steg/:stegId`, (req, res, ctx) => {
    return res(ctx.status(200));
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
    }
  ),

  // Hent ut en enkelt korrigeringsperiode
  rest.get(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa66`,
    (req, res, ctx) => {
      return res(ctx.json(mockKorrigeringsperiode));
    }
  ),

  // Hent ut en korrigeringsperiode
  rest.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa6/korrigering`,
    (req, res, ctx) => {
      return res(ctx.json(mockKorrigeringsperiode));
    }
  ),

  // Lagre en aktivitet
  rest.post(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa66/aktivitet`,
    (req, res, ctx) => {
      return res(ctx.status(204));
    }
  ),

  // Slett en aktivitet
  rest.delete(
    `${process.env.DP_RAPPORTERING_URL}/rapporteringsperioder/3fa85f64-5717-4562-b3fc-2c963f66afa66/aktivitet/4a49e571-6384-4eab-9c2e-3f4d48d30b9a`,
    (req, res, ctx) => {
      return res(ctx.status(204));
    }
  ),

  // Hent sanity tekster
  rest.get(
    "https://rt6o382n.apicdn.sanity.io/v2021-06-06/data/query/production",
    (req, res, ctx) => {
      return res(ctx.json(sanityResponse));
    }
  ),
];
