import { rest } from "msw";
import { oppgaverResponse } from "./api-routes/oppgaverResponse";
import { sanityResponse } from "./api-routes/sanityResponse";

const DP_BEHANDLING_URL = process.env.DP_BEHANDLING_URL;

export const handlers = [
  // Hent alle oppgaver
  rest.get(`${DP_BEHANDLING_URL}/oppgave`, (req, res, ctx) => {
    return res(ctx.json(oppgaverResponse));
  }),

  // Hent en oppgave med oppgaveId
  rest.get(`${DP_BEHANDLING_URL}/oppgave/:oppgaveId`, (req, res, ctx) => {
    const oppgaveResponse = oppgaverResponse.find(
      (oppgave) => oppgave.uuid === req.params.oppgaveId
    );

    return res(ctx.json(oppgaveResponse));
  }),

  // Svar på et oppgave steg med oppgaveId og stegId
  rest.put(`${DP_BEHANDLING_URL}/oppgave/:oppgaveId/steg/:stegId`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Hent sanity tekster
  rest.get(
    "https://rt6o382n.apicdn.sanity.io/v2021-06-06/data/query/production",
    (req, res, ctx) => {
      return res(ctx.json(sanityResponse));
    }
  ),
];
