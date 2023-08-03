import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    include: ["tests/vitest/**/*.spec.ts"],
    setupFiles: ["tests/vitest/helpers/setup.ts"],
    coverage: {
      provider: "v8",
      all: true,
      exclude: ["mocks/**/*", "mock-data/**/*", "tests/**/*", "public/build/**/*", "build/**/*"],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});
