import { IAlert } from "~/context/alert-context";
import { logger } from "~/utils/logger.utils";

import { components as behandlingComponent } from "../../openapi/behandling-typer";
import { components as meldingOmVedtakComponent } from "../../openapi/melding-om-vedtak-typer";
import { components as saksbehandlingComponent } from "../../openapi/saksbehandling-typer";

export function handleHttpProblem(
  problem:
    | meldingOmVedtakComponent["schemas"]["HttpProblem"]
    | saksbehandlingComponent["schemas"]["HttpProblem"]
    | behandlingComponent["schemas"]["HttpProblem"],
  logLevel: "error" | "warn" | "info" = "error",
): void {
  logger[logLevel](`${problem.status} - ${problem.title}: ${problem.detail}`);

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
