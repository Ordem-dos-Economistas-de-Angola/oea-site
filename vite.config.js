import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      const idx = resolve(dist, 'index.html')
      const fallback = resolve(dist, '404.html')
      if (existsSync(idx)) copyFileSync(idx, fallback)
    }
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  appType: 'spa',
  server: {
    port: 3001,
  },
})
