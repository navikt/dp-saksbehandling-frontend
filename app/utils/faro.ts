import { type Faro, initializeFaro } from "@grafana/faro-web-sdk";
import { getEnv } from "~/utils/env.utils";
import nais from "../../nais.js";

let faro: Faro | null = null;

export function initFaro() {
  if (typeof document === "undefined" || faro !== null) {
    return;
  }

  faro = initializeFaro({
    url: nais.telemetryCollectorURL,
    paused: !!getEnv("IS_LOCALHOST"),
    app: {
      name: "dp-saksbehandling-frontend", // required
      version: "1.0.0", // optional; useful in Grafana to get diff between versions
    },
  });
}
