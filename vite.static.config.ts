import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Standalone SPA build for shared hosting (cPanel/Hostinger/etc.)
// Outputs a plain index.html + /assets folder you can upload anywhere.
// Run with:  npx vite build --config vite.static.config.ts
export default defineConfig({
  root: path.resolve(__dirname, "static"),
  base: "./",
  plugins: [tsconfigPaths(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
});
