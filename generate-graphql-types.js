const { generate } = require("@graphql-codegen/cli");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  overwrite: true,
  schema: process.env.API,
  documents: "./app/graphql/**/*.ts",
  generates: {
    "app/graphql/generated/types.d.ts": {
      plugins: [
        {
          add: {
            content: "// This file is generated: do not edit it manually!",
          },
        },
        "typescript",
        "typescript-operations",
      ],
    },
  },
};

generate(config, true);
