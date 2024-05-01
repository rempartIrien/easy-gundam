/// <reference types="vitest" />
import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [solid()],
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
