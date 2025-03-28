import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    // "graphql/generated/pdl/": {
    //   preset: "client",
    //   schema: "graphql/pdl.graphqls",
    //   documents: ["app/models/pdl.server.ts"],
    //   plugins: [],
    // },
    "graphql/generated/saf/": {
      preset: "client",
      schema: "graphql/saf.graphql",
      documents: ["app/models/saf.server.ts"],
      plugins: [],
    },
  },
};

export default config;
