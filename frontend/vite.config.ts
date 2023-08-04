import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/user": {
        target: "https://audiophile-e-commerce-c69f98c367cc.herokuapp.com",
        changeOrigin: true,
      },
      "/api/orders": {
        target: "https://audiophile-e-commerce-c69f98c367cc.herokuapp.com",
        changeOrigin: true,
      },
      "/api/cart": {
        target: "https://audiophile-e-commerce-c69f98c367cc.herokuapp.com",
        changeOrigin: true,
      },
    },
  },
});
