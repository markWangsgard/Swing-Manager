import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["Rye", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [tailwindcss()],
});
