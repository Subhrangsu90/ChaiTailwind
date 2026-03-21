import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		outDir: "dist-docs",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				docs: resolve(__dirname, "website/docs.html"),
			},
		},
	},
});
