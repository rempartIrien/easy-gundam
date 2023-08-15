/// <reference types="vitest" />
import { defineConfig } from "vite";

import viteConf from "./vite.config";

// We need to use separate config files for Vite and Vitest due to the use of
// `resolve.conditions` that are not compatible between dev and test builds.
export default defineConfig({
	// eslint-disable-next-line @typescript-eslint/await-thenable
	...(await viteConf),
	test: {
		environment: "jsdom",
		setupFiles: ["./test/setup-test-env.ts"],
		globals: true,
		coverage: {
			reporter: ["json", "html"],
		},
	},
	resolve: {
		conditions: ["development", "browser"],
	},
});
