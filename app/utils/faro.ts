import { type Faro, getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { getEnv } from "~/utils/env.utils";
import nais from "../../nais.js";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { logger } from "~/utils/logger.utils";

let faro: Faro | null = null;

export function initFaro() {
  if (typeof document === "undefined" || faro !== null) {
    return;
  }
  logger.debug(`Nais telemetry greier: ${nais.telemetryCollectorURL}`);

  faro = initializeFaro({
    url: nais.telemetryCollectorURL,
    paused: !!getEnv("IS_LOCALHOST"),
    app: {
      name: "dp-saksbehandling-frontend", // required
      version: "1.0.0", // optional; useful in Grafana to get diff between versions
    },
    instrumentations: [...getWebInstrumentations(), new TracingInstrumentation()],
  });
}
