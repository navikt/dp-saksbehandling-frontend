import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

vi.stubEnv("DP_BEHANDLING_URL", "https://dp-behandling.intern.dev.nav.no");
vi.stubEnv("DP_RAPPORTERING_URL", "https://dp-rapportering.intern.dev.nav.no");

if (typeof window !== "undefined") {
  window.env = window.env || {};

  window.env.DP_BEHANDLING_URL = "https://dp-behandling.intern.dev.nav.no";
  window.env.DP_RAPPORTERING_URL = "https://dp-rapportering.intern.dev.nav.no";
}
