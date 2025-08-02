import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'bundle-report.html', // optional: sets output filename
      open: true, // automatically opens the report in your browser
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    host: true,
    allowedHosts: ['cf52ed230c0f.ngrok-free.app'],
  },
  build: {
    reportCompressedSize: true,
  },
})
