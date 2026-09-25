import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Une page HTML par URL : chaque page a ses propres balises <title>, description et aperçu
    rollupOptions: {
      input: {
        accueil: resolve(import.meta.dirname, 'index.html'),
        cgu: resolve(import.meta.dirname, 'cgu.html'),
        confidentialite: resolve(import.meta.dirname, 'politique-de-confidentialite.html'),
        introuvable: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
});
