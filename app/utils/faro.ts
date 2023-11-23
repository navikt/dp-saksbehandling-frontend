import { type Faro, getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

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
    paused: !!process.env.IS_LOCALHOST,
    app: {
      name: "dp-saksbehandling-frontend", // required
      version: "0.1", // optional; useful in Grafana to get diff between versions
    },
    instrumentations: [
      ...getWebInstrumentations({
        captureConsole: true,
      }),
      new TracingInstrumentation(),
    ],
  });
  return faro;
}
