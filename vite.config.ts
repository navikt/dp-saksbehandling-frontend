import { vitePlugin as remix } from "@remix-run/dev";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client/"
      : "/saksbehandling/",
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      basename: "/saksbehandling/",
      future: {
        v3_singleFetch: true,
        v3_fetcherPersist: true,
        v3_throwAbortReason: true,
        v3_relativeSplatPath: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    manifest: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});
