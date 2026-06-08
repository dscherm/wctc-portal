import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// WCTC portal — static SPA. Builds to dist/ for Firebase Hosting.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
