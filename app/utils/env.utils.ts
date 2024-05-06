declare global {
  interface Window {
    env: IEnv;
  }
}

interface IEnv {
  BASE_PATH: string;
  DP_BEHANDLING_URL: string;
  DP_SAKSBEHANDLING_URL: string;
  DP_RAPPORTERING_URL: string;
  DP_VEDTAK_URL: string;
  VEILARBPROXY_URL: string;
  IS_LOCALHOST: string;
  USE_MSW: string;
  DP_RAPPORTERING_TOKEN: string;
  DP_SAKSBEHANDLING_TOKEN: string;
  DP_VEDTAK_TOKEN: string;
  VEILARBPROXY_TOKEN: string;
  ARBEID_INNTEKT_URL: string;
  GOSYS_URL: string;
  MODIA_URL: string;
  MELDEKORT_URL: string;
  INNTEKTREDIGERING_URL: string;
  GRISEN_URL: string;
  DAGPENGER_NORGE_URL: string;
}

export function getEnv(value: keyof IEnv) {
  const env = typeof document === "undefined" ? process.env : window.env;

  return env[value] || "";
}
