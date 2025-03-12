import { IAlert } from "~/context/alert-context";
import { logger } from "~/utils/logger.utils";

import { components } from "../../openapi/saksbehandling-typer";

export function handleErrorResponse(response: Response): void {
  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

  throw new Response(`Feil ved kall til ${response.url}`, {
    status: response.status,
    statusText: response.statusText,
  });
}

export function handleHttpProblem(problem: components["schemas"]["HttpProblem"]): void {
  logger.warn(`${problem.status} - ${problem.title}: ${problem.detail}`);

  throw new Response(problem.title, {
    status: problem.status,
    statusText: problem.detail,
  });
}

export function getHttpProblemAlert(problem: components["schemas"]["HttpProblem"]): IAlert {
  logger.warn(`${problem.status} - ${problem.title}: ${problem.detail}`);

  return {
    variant: "error",
    // @ts-expect-error TODO: Type skal endres i DP-saksbehandling
    title: problem.title,
    body: problem.detail,
  };
}
