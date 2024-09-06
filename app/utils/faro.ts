import { type Faro, initializeFaro } from "@grafana/faro-web-sdk";
import { getEnv } from "~/utils/env.utils";

let faro: Faro | null = null;

export function initFaro() {
  if (typeof document === "undefined" || faro !== null || getEnv("IS_LOCALHOST") === "true") {
    return;
  }

  // nais.js filen blir injected direkte i poden.
  faro = initializeFaro({
    // @ts-ignore
    url: nais.telemetryCollectorURL,
    // @ts-ignore
    app: nais.app,
  });
}
