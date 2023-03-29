import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/": "http://localhost:4000",
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
