import { IAlert } from "~/context/alert-context";
import { logger } from "~/utils/logger.utils";

import { components as behandlingComponent } from "../../openapi/behandling-typer";
import { components as saksbehandlingComponent } from "../../openapi/saksbehandling-typer";

type HttpProblem =
  saksbehandlingComponent["schemas"]["HttpProblem"] | behandlingComponent["schemas"]["HttpProblem"];
type LogLevel = "error" | "warn" | "info";

const fallbackMessage = "Kunne ikke fullføre forespørselen. Prøv igjen om litt.";

function logUnexpectedResponse(response: Response, logLevel: LogLevel) {
  logger[logLevel]({
    message: "Backend returned an unexpected error response",
    status: response.status,
    statusText: response.statusText,
    contentType: response.headers.get("content-type"),
  });
}

export function handleError(
  error: HttpProblem | string | undefined,
  response: Response,
  message = fallbackMessage,
): never {
  if (error) {
    if (typeof error === "string") {
      handleHtmlErrorResponse(response, message);
    }
    handleHttpProblem(error);
  }

  logUnexpectedResponse(response, "error");
  throw new Response(message, {
    status: response.ok ? 502 : response.status,
    statusText: response.ok ? "Bad Gateway" : response.statusText,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export function getErrorAlert(
  error: HttpProblem | string | undefined,
  response: Response,
  logLevel: LogLevel = "error",
  variant: IAlert["variant"] = "error",
): IAlert {
  if (error && typeof error !== "string") {
    return getHttpProblemAlert(error, logLevel, variant);
  }

  logUnexpectedResponse(response, logLevel);
  return { variant, title: "Noe gikk galt", body: fallbackMessage };
}

export function handleHtmlErrorResponse(response: Response, message: string): never {
  logger.error({
    message: "Backend returned HTML instead of an HTTP problem",
    status: response.status,
    statusText: response.statusText,
    contentType: response.headers.get("content-type"),
  });

  throw new Response(message, {
    status: response.status,
    statusText: response.statusText,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export function handleHttpProblem(
  problem:
    | saksbehandlingComponent["schemas"]["HttpProblem"]
    | behandlingComponent["schemas"]["HttpProblem"],
  logLevel: "error" | "warn" | "info" = "error",
): never {
  logger[logLevel](`${problem.status} - ${problem.title}: ${problem.detail}`);

  throw new Response(problem.title, {
    status: problem.status,
    statusText: problem.detail,
  });
}

export function getHttpProblemAlert(
  problem:
    | saksbehandlingComponent["schemas"]["HttpProblem"]
    | behandlingComponent["schemas"]["HttpProblem"],
  logLevel: "error" | "warn" | "info" = "error",
  variant: IAlert["variant"] = "error",
): IAlert {
  logger[logLevel](`${problem.status} - ${problem.title}: ${problem.detail}`);

  return {
    variant,
    title: problem.title || "Ukjent feil",
    body: problem.detail,
    service: problem.instance,
  };
}
