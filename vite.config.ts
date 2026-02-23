import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/product-owner-portfolio/", // GitHub Domain
  base: "/", // Custome Domain
});
