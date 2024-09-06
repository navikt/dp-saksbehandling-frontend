import { type Faro, initializeFaro } from "@grafana/faro-web-sdk";
import { getEnv } from "~/utils/env.utils";
import nais from "./nais.js";

let faro: Faro | null = null;

export function initFaro() {
  if (typeof document === "undefined" || faro !== null || getEnv("IS_LOCALHOST") === "true") {
    return;
  }

  faro = initializeFaro({
    url: nais.telemetryCollectorURL,
    app: nais.app,
  });
}
