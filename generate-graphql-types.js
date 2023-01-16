// eslint-disable-next-line import/named
import { generate } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config = {
	overwrite: true,
	schema: `${process.env.VITE_API}/graphql`,
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
			config: {
				avoidOptionals: true,
			},
		},
	},
};

generate(config, true);
