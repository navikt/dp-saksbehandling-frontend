import type { SetupServer } from "msw/node";
import { setupServer } from "msw/node";
import { mockDpSaksbehandling } from "./mock-dp-saksbehandling";
import { mockAzure } from "./mock-azure";
import { mockPdl } from "./mock-pdl";
import { mockSaf } from "./mock-saf";
import { mockDpBehandling } from "./mock-dp-behandling";
import { mockSanity } from "./mock-sanity";
import { mockDpMeldingOmVedtak } from "./mock-dp-melding-om-vedtak";
import { logger } from "~/utils/logger.utils";

const mswHandlers = [
  ...mockSanity,
  ...mockAzure,
  ...mockDpBehandling,
  ...mockDpSaksbehandling,
  ...mockDpMeldingOmVedtak,
  ...mockPdl,
  ...mockSaf,
];

export const mockServer = setupServer(...mswHandlers);

export function setupMockServer() {
  return setupServer(...mswHandlers);
}

export function startMockServer(server: SetupServer) {
  server.listen({ onUnhandledRequest: "bypass" });

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());

  logger.info("🔶 Mock api kjører");
}
