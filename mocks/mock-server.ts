import type { SetupServer } from "msw/node";
import { setupServer } from "msw/node";
import { mockDpSaksbehandling } from "./mock-dp-saksbehandling";
import { mockSanityServer } from "./mock-sanity-server";
import { mockAzure } from "./mock-azure";
import { mockPdl } from "./mock-pdl";

const mswHandlers = [...mockAzure, ...mockDpSaksbehandling, ...mockPdl, ...mockSanityServer];

export const mockServer = setupServer(...mswHandlers);

export function setupMockServer() {
  return setupServer(...mswHandlers);
}

export function startMockServer(server: SetupServer) {
  server.listen({ onUnhandledRequest: "bypass" });

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());

  console.info("🔶 Mock api kjører");
}
