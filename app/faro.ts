import { type Faro, getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { getEnv } from "~/utils/env.utils";
import nais from "./nais.js";

let faro: Faro | null = null;

export function initFaro() {
  if (typeof document === "undefined" || faro !== null) {
    return;
  }

  faro = initializeFaro({
    paused: getEnv("IS_LOCALHOST") === "true",
    url: nais.telemetryCollectorURL,
    app: nais.app,
    sessionTracking: {
      enabled: true,
      persistent: true,
    },
    instrumentations: [
      ...getWebInstrumentations({ captureConsole: true }),

      new TracingInstrumentation({
        instrumentationOptions: {
          // Requests to these URLs have tracing headers attached.
          propagateTraceHeaderCorsUrls: [
            new RegExp(`${getEnv("DP_SAKSBEHANDLING_URL")}/*`),
            new RegExp(`${getEnv("DP_BEHANDLING_URL")}/*`),
            new RegExp(`${getEnv("DP_MELDING_OM_VEDTAK_URL")}/*`),
          ],
        },
      }),
    ],
  });
}
