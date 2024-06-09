import { defineConfig } from "@solidjs/start/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import solidSvg from "vite-plugin-solid-svg";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	vite: {
		// vite options
		plugins: [tsconfigPaths(), vanillaExtractPlugin(), solidSvg()],
	},
});
