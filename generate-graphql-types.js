import { generate } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config = {
  overwrite: true,
  schema: process.env.API,
  documents: "./src/graphql/**/*.ts",
  generates: {
    "src/graphql/generated/types.d.ts": {
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
