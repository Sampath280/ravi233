import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['sampath-a0b9gaaqhndgadcm.canadacentral-01.azurewebsites.net'],
  },
})
