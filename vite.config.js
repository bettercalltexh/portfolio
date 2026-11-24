import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative paths so the build works on GitHub Pages under any repo name
  // (https://<user>.github.io/<repo>/) as well as at a domain root.
  base: './',
  server: {
    port: 3000,
    open: true,
  },
})
