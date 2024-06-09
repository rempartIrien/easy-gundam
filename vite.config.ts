import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// Waiting for Vanilla-extract to handle frameworks without vite.config.ts file.
// See https://github.com/vanilla-extract-css/vanilla-extract/issues/1336
// See https://github.com/vanilla-extract-css/vanilla-extract/pull/1395
export default defineConfig({
	plugins: [tsconfigPaths(), vanillaExtractPlugin()],
});
