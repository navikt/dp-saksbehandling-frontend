declare global {
  interface Window {
    env: IEnv;
  }
}

interface IEnv {
  BASE_PATH: string;
  DP_BEHANDLING_URL: string;
  DP_SAKSBEHANDLING_URL: string;
  DP_MELDING_OM_VEDTAK_URL: string;
  GCP_ENV: string;
  SAF_URL: string;
  IS_LOCALHOST: string;
  USE_MSW: string;
  DP_SAKSBEHANDLING_TOKEN: string;
  ARBEID_INNTEKT_URL: string;
  GOSYS_URL: string;
  MODIA_URL: string;
  MELDEKORT_URL: string;
  INNTEKTREDIGERING_URL: string;
  GRISEN_URL: string;
  DAGPENGER_NORGE_URL: string;
  NAIS_FRONTEND_TELEMETRY_COLLECTOR_URL: string;
  UNLEASH_SERVER_API_URL: string;
  UNLEASH_SERVER_API_TOKEN: string;
  FARO_URL: string;
  GITHUB_SHA: string;
}

export function getEnv(value: keyof IEnv) {
  const env = typeof document === "undefined" ? process.env : window.env;

  return env[value] || "";
}
