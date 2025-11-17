import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_mixins.scss" as *;`
      },
    },
  },
  resolve: {
    alias: {
      // Define a path alias for cleaner imports within the config
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/portfolio/'
})
