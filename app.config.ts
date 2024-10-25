import { defineConfig } from "@solidjs/start/config";
import solidSvg from "vite-plugin-solid-svg";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	vite: {
		// vite options
		plugins: [tsconfigPaths(), solidSvg()],
	},
});
