import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:"https://homework-server-gzii.onrender.com",
        changeOrigin: true,
      },
      "/auth": {
        target:"https://homework-server-gzii.onrender.com",
        changeOrigin: true,
      },
    }
  }
})