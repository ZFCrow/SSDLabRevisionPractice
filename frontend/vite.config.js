import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   
    allowedHosts: [
      'localhost', 
      'host.docker.internal', 
      'testweb-server',
    ],
    proxy: {
      '/api': {
        target: 'http://testbackend:3000', // Adjust the target to your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      } 
    },
    watch: {
      usePolling: true, // Use polling to detect changes in files
      interval: 1000 // Polling interval in milliseconds
    }
  }
})
