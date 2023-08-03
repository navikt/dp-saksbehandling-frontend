import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    include: ["tests/vitest/**/*.spec.ts"],
    setupFiles: ["tests/vitest/helpers/setup.ts"],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});
