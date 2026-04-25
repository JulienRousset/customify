import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: { port: 5173, host: true },
  build: {
    chunkSizeWarningLimit: 1100, // model-viewer is intentionally a 1MB chunk, lazy-loaded
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor split — heavy deps cached separately, change rarely
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react']
          // model-viewer + recharts/xlsx already lazy/removed; no need to list
        }
      }
    }
  }
})
