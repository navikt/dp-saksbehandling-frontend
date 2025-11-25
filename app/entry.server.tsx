/*
  Entry-point for Remix på serversiden.
  Dette er boilerplate fra Remix.
*/

import { faro } from "@grafana/faro-core";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import type { EntryContext } from "react-router";
import { isRouteErrorResponse, ServerRouter } from "react-router";

import { unleash } from "~/unleash.ts";
import { getEnv } from "~/utils/env.utils.ts";
import { logger } from "~/utils/logger.utils.ts";

// Reject all pending promises from handler functions after 10 seconds
export const streamTimeout = 10000;

if (getEnv("USE_MSW") === "true") {
  const { startMockServer } = await import("../mocks/mock-server.ts");
  await startMockServer();
}

const csp = {
  "script-src": ["blob:"],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/",
  ],
  "connect-src": [
    "'self'",
    "*.nav.no",
    "https://telemetry.ekstern.dev.nav.no/collect",
    "https://telemetry.nav.no/collect",
  ],
};
let cspString = `connect-src ${csp["connect-src"].join(" ")}; img-src ${
  csp["img-src"].join(" ")
};`;

if (getEnv("IS_LOCALHOST") === "true") {
  cspString =
    "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * blob: 'unsafe-inline' 'unsafe-eval'; connect-src * blob: 'unsafe-inline'; img-src * 'self' blob: data:; frame-src * data: blob:; style-src * 'unsafe-inline'; object-src blob:;";
}

unleash.on("synchronized", () => {
  logger.info("Unleash is ready");
});

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext,
) {
  const bot = isbot(request.headers.get("user-agent") ?? "");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), streamTimeout + 1000);

  const stream = await renderToReadableStream(
    <ServerRouter context={reactRouterContext} url={request.url} />,
    {
      signal: controller.signal,
      onError(err) {
        console.error(err);
      },
    },
  );

  if (bot) {
    await stream.allReady;
  }

  clearTimeout(timeout);

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Content-Security-Policy", cspString);
  return new Response(stream, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

export function handleError(error: unknown) {
  logger.error(error);

  if (isRouteErrorResponse(error)) {
    faro.api?.pushError(new Error(error.data), {
      type: `${error.status} ${error.statusText}`,
    });
  }

  if (error instanceof Error) {
    faro.api?.pushError(error);
  }
}
