import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom','react-icons/fa','react-icons/im','react-icons/ai','react-icons/rx'],
    }
  }
})
