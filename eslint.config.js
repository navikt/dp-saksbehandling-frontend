import eslint from "@eslint/js";
import { globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config([
  globalIgnores(["graphql/", "build/", ".react-router"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [eslint.configs.recommended, typescriptEslint.configs.recommended, pluginPrettier],
    plugins: {
      reactHooks,
      "jsx-a11y": jsxA11y,
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);
