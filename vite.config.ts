import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import { viteRequire } from "vite-require";

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), basicSsl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "./docs",
    commonjsOptions: { transformMixedEsModules: true },
  },
  base: "./",
});
