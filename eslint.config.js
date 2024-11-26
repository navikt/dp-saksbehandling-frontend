import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import playwright from "eslint-plugin-playwright";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default [
  {
    name: "ignore",
    ignores: ["graphql/"],
  },
  {
    name: "eslint/recommended:",
    ...eslint.configs.recommended,
  },
  ...typescriptEslint.configs.recommended,
  {
    name: "react/recommended",
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    name: "react/hooks",
    plugins: { "react-hooks": reactHooks },
  },
  {
    name: "jsx-a11y/recommended",
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    name: "playwright/recommended",
    ...playwright.configs["flat/recommended"],
    files: ["tests/playwright/**"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
    },
  },

  {
    name: "simple-import-sort/recommended",
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    name: "prettier",
    ...eslintConfigPrettier,
  },
  {
    name: "globals",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
