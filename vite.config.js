import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html')
      }
    },
  }
})