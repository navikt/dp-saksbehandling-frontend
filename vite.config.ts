import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import * as path from "jsr:@std/path";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production"
    ? "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client/"
    : "/",
  server: {
    port: 3000,
  },
  plugins: [reactRouter(), tailwindcss()],
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
