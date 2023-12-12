import { type Faro, initializeFaro } from "@grafana/faro-web-sdk";
import { getEnv } from "~/utils/env.utils";

let faro: Faro | null = null;

export function initInstrumentation(): void {
  if (typeof window === "undefined" || faro !== null) return;

  getFaro();
}

export function getFaro(): Faro | null {
  if (faro != null) {
    return faro;
  }

  faro = initializeFaro({
    url: "https://telemetry.ekstern.dev.nav.no/collect", // required, see below
    paused: !!getEnv("IS_LOCALHOST"),
    app: {
      name: "dp-saksbehandling-frontend", // required
      version: "0.1", // optional; useful in Grafana to get diff between versions
    },
  });
  return faro;
}
