declare global {
  interface Window {
    env: IEnv;
  }
}

interface IEnv {
  BASE_PATH: string;
  DP_BEHANDLING_URL: string;
  DP_RAPPORTERING_URL: string;
  DP_VEDTAK_URL: string;
  VEILARBPROXY_URL: string;
  IS_LOCALHOST: string;
  USE_MSW: string;
  DP_RAPPORTERING_TOKEN: string;
  DP_BEHANDLING_TOKEN: string;
  DP_VEDTAK_TOKEN: string;
  VEILARBPROXY_TOKEN: string;
}

export function getEnv(value: keyof IEnv) {
  const env = typeof document === "undefined" ? process.env : window.env;

  return env[value] || "";
}
