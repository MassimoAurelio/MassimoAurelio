import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsTypes from 'vite-plugin-ts-types'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), tsTypes()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
