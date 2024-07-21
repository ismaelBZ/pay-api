import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pay-api/',
  server: {
    host: 'localhost'
  },
  plugins: [react()],
})
