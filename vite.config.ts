import { reactRouter } from "@react-router/dev/vite";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "https://cdn.nav.no/teamdagpenger/dp-saksbehandling-frontend/client/"
      : "/saksbehandling",
  server: {
    port: 3000,
  },
  plugins: [reactRouter(), tsconfigPaths()],
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
