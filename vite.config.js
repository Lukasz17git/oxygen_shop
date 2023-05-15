import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
   base: '/oxygen-shop/',
   plugins: [viteCompression()],
   build: {
      assetsInlineLimit: 0,
      outDir: './docs'
   }
})
