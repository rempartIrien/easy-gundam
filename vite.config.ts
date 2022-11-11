import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), solid(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup-test-env.ts"],
    globals: true,
    transformMode: {
      web: [/\.tsx?$/],
    },
    coverage: {
      reporter: ["json", "html"],
    },
  },
});
