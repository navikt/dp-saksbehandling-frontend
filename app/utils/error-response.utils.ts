import { IAlert } from "~/context/alert-context";
import { logger } from "~/utils/logger.utils";

import { components as behandlingComponent } from "../../openapi/behandling-typer";
import { components as meldingOmVedtakComponent } from "../../openapi/melding-om-vedtak-typer";
import { components as saksbehandlingComponent } from "../../openapi/saksbehandling-typer";

export function handleErrorResponse(response: Response): void {
  logger.warn(`${response.status} - Feil ved kall til ${response.url}`);

  throw new Response(`Feil ved kall til ${response.url}`, {
    status: response.status,
    statusText: response.statusText,
  });
}

export function handleHttpProblem(
  problem:
    | meldingOmVedtakComponent["schemas"]["HttpProblem"]
    | saksbehandlingComponent["schemas"]["HttpProblem"]
    | behandlingComponent["schemas"]["HttpProblem"],
): void {
  logger.warn(`${problem.status} - ${problem.title}: ${problem.detail}`);

  throw new Response(problem.title, {
    status: problem.status,
    statusText: problem.detail,
  });
}

export function getHttpProblemAlert(
  problem:
    | meldingOmVedtakComponent["schemas"]["HttpProblem"]
    | saksbehandlingComponent["schemas"]["HttpProblem"]
    | behandlingComponent["schemas"]["HttpProblem"],
): IAlert {
  logger.warn(`${problem.status} - ${problem.title}: ${problem.detail}`);

  console.log(problem);

  return {
    variant: "error",
    title: problem.title || "Ukjent feil",
    body: problem.detail,
    service: problem.instance,
  };
}
