import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

installGlobals();

export default defineConfig({
  base: "/saksbehandling/",
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      basename: "/saksbehandling/",
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
