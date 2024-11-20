import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// Localhost fungerer ikke MED trailing slash. GCP fungerer ikke UTEN trailing slash.
const baseName = process.env.IS_LOCALHOST ? "/saksbehandling" : "/saksbehandling/";

export default defineConfig({
  base: baseName,
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      basename: baseName,
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
  test: {
    environment: "jsdom",
  },
  build: {
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      external: ["./nais.js"],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});
