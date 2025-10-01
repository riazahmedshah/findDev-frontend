import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@modules":path.resolve(__dirname, "./src/modules"),
      "@ui":path.resolve(__dirname, "./src/components/ui"),
      "@mvpblocks":path.resolve(__dirname, "./src/components/mvpblocks"),
    },
  },
})