import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

vi.stubEnv("DP_SAKSBEHANDLING_URL", "https://dp-saksbehandling.intern.dev.nav.no");

if (typeof window !== "undefined") {
  window.env = window.env || {};
  window.env.DP_SAKSBEHANDLING_URL = "https://dp-saksbehandling.intern.dev.nav.no";
}
