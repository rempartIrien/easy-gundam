// eslint-disable-next-line import/named
import dotenv from "dotenv";

dotenv.config();

if (!process.env.VITE_API) {
	throw new Error(
		"Env variable VITE_API should be defined to generate GraphQL types",
	);
}

const config = {
	overwrite: true,
	schema: `${process.env.VITE_API}/graphql`,
	documents: "./src/graphql/**/*.ts",
	generates: {
		["src/graphql/generated/types.d.ts"]: {
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

export default config;
