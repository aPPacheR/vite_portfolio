import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 8080
  }
})