import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  // omit
  server: {
    port: 3000,
  },
  plugins: [tailwindcss()],
});
