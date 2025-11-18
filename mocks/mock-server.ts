import { setupServer } from "msw/node";

import { logger } from "~/utils/logger.utils";

import { mockPdl } from "./data/mock-pdl/mock-pdl";
import { mockAzure } from "./mock-azure";
import { mockDpBehandling } from "./mock-dp-behandling";
import { mockDpMeldingOmVedtak } from "./mock-dp-melding-om-vedtak";
import { mockDpRapporteringPersonregister } from "./mock-dp-rapportering-personregister";
import { mockDpSaksbehandling } from "./mock-dp-saksbehandling";
import { mockDpSoknadOrkestrator } from "./mock-dp-soknad-orkestrator";
import { mockSaf } from "./mock-saf";
import { mockSanity } from "./mock-sanity";

const mswHandlers = [
  ...mockSanity,
  ...mockAzure,
  ...mockDpBehandling,
  ...mockDpSaksbehandling,
  ...mockDpMeldingOmVedtak,
  ...mockPdl,
  ...mockSaf,
  ...mockDpSoknadOrkestrator,
  ...mockDpRapporteringPersonregister,
];

export async function startMockServer() {
  const server = setupServer(...mswHandlers);

  server.listen({ onUnhandledRequest: "warn" });
  server.events.on("request:start", ({ request }) => {
    logger.info(`[MSW INTERCEPTED]: ${request.method} ${request.url}`);
  });

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());
}
