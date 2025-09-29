import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
     VitePWA({
      registerType: "autoUpdate",
      manifest: true, // uses your manifest.json
    })
  ],
   base: '/converter1/' // 👈 must match your repo name for GitHub Pages
});
