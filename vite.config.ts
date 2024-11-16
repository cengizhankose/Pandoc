import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import commonjs from "vite-plugin-commonjs";
// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), basicSsl(), commonjs()],
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
