import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/user": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/api/orders": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
