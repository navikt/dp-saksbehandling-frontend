import { type Faro, getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { getEnv } from "~/utils/env.utils";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

let faro: Faro | null = null;

export function initFaro() {
  if (typeof document === "undefined" || faro !== null) {
    return;
  }
  const collectorUrl =
    getEnv("GCP_ENV") === "dev"
      ? "https://telemetry.ekstern.dev.nav.no/collect"
      : "https://telemetry.nav.no/collect";
  faro = initializeFaro({
    url: collectorUrl,
    paused: !!getEnv("IS_LOCALHOST"),
    app: {
      name: "dp-saksbehandling-frontend", // required
      version: "1.0.0", // optional; useful in Grafana to get diff between versions
    },
    instrumentations: [...getWebInstrumentations(), new TracingInstrumentation()],
  });
}
