import { defineConfig } from "vitest/config";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    include: ["**/*.spec.ts", "**/*.spec.tsx"],
    exclude: ["tests/playwright", "node_modules/**/*"],
    setupFiles: ["tests/vitest/helpers/setup.ts"],
    watch: false,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      all: true,
      include: ["app/**/*"],
      exclude: ["**/*.spec.ts"],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
  plugins: [react()],
});
