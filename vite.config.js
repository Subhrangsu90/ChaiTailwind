import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.js"),
			name: "ChaiTailwind",
			fileName: (format) =>
				`chaitailwind.${format === "es" ? "esm" : format}.js`,
			formats: ["es", "iife"],
		},
	},
});
