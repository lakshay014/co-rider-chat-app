import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        id: "corider",
        name: "CoRider Chat",
        short_name: "CoRiderChat",
        description: "A Chat interface of CoRider Application",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/screenshot1.png",
            type: "image/png",
            sizes: "1125x2436",
            form_factor: "narrow",
          },
          {
            src: "/screenshot2.png",
            type: "image/jpg",
            sizes: "1125x2436",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
