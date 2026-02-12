/*
  Entry-point for Remix på serversiden.
  Dette er boilerplate fra Remix.
*/

import { PassThrough } from "node:stream";

import { faro } from "@grafana/faro-web-sdk";
import { createReadableStreamFromReadable } from "@react-router/node";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import type { EntryContext } from "react-router";
import { isRouteErrorResponse, ServerRouter } from "react-router";

import { logger } from "~/utils/logger.utils";

import { unleash } from "./unleash";
import { getEnv } from "./utils/env.utils";

// Reject all pending promises from handler functions after 10 seconds
export const streamTimeout = 10000;

if (getEnv("USE_MSW") === "true") {
  const { startMockServer } = await import("../mocks/mock-server");
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
let cspString = `connect-src ${csp["connect-src"].join(" ")}; img-src ${csp["img-src"].join(" ")};`;

if (getEnv("IS_LOCALHOST") === "true") {
  cspString =
    "default-src * 'unsafe-inline' 'unsafe-eval'; script-src * blob: 'unsafe-inline' 'unsafe-eval'; connect-src * blob: 'unsafe-inline'; img-src * 'self' blob: data:; frame-src * data: blob:; style-src * 'unsafe-inline'; object-src blob:;";
}

unleash.on("synchronized", () => {
  logger.info("Unleash is ready");
});

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext,
) {
  return isbot(request.headers.get("user-agent") || "")
    ? handleBotRequest(request, responseStatusCode, responseHeaders, reactRouterContext)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, reactRouterContext);
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={reactRouterContext} url={request.url} />,
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");
          responseHeaders.set("Content-Security-Policy", cspString);

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            logger.error(error);
          }
        },
      },
    );
    // Abort the streaming render pass after 11 seconds to allow the rejected
    // boundaries to be flushed
    setTimeout(abort, streamTimeout + 1000);
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  reactRouterContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={reactRouterContext} url={request.url} />,
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");
          responseHeaders.set("Content-Security-Policy", cspString);

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            logger.error(error);
          }
        },
      },
    );

    // Abort the streaming render pass after 11 seconds to allow the rejected
    // boundaries to be flushed
    setTimeout(abort, streamTimeout + 1000);
  });
}

export function handleError(error: unknown) {
  logger.error(error);

  if (isRouteErrorResponse(error)) {
    faro.api?.pushError(new Error(error.data), { type: `${error.status} ${error.statusText}` });
  }

  if (error instanceof Error) {
    faro.api?.pushError(error);
  }
}
