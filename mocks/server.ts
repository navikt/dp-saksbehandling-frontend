import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export function startMockServer() {
  const server = setupServer(...handlers);
  server.listen({ onUnhandledRequest: "bypass" });

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());

  console.info("🔶 Mock server running");

  return server;
}
