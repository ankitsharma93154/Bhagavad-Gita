import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Emit .vite/manifest.json so scripts/prerender.mjs can add <link rel="modulepreload">
  // for each route's lazy page chunk (+ its shared imports) to the prerendered HTML,
  // keeping the split-out route chunk on the initial critical path instead of a second wave.
  build: { manifest: true },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
