import type { SetupServer } from "msw/node";
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

export function setup() {
  return setupServer(...handlers);
}

export function startMockServer(server: SetupServer) {
  server.listen({ onUnhandledRequest: "bypass" });

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());

  console.info("🔶 Mock server kjører");
}
