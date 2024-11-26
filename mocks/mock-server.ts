import { setupServer } from "msw/node";

import { logger } from "~/utils/logger.utils";

import { mockAzure } from "./mock-azure";
import { mockDpBehandling } from "./mock-dp-behandling";
import { mockDpMeldingOmVedtak } from "./mock-dp-melding-om-vedtak";
import { mockDpSaksbehandling } from "./mock-dp-saksbehandling";
import { mockPdl } from "./mock-pdl";
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
];

export async function startMockServer() {
  const server = setupServer(...mswHandlers);
  server.listen({ onUnhandledRequest: "bypass" });

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());

  logger.info("🔶 Mock api kjører");
}
