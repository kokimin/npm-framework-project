import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: '/npm-framework-project/',
  resolve: {
    alias: [
      { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
      { find: '@router', replacement: fileURLToPath(new URL('./src/router', import.meta.url)) },
      { find: '@locale', replacement: fileURLToPath(new URL('./src/locale', import.meta.url)) },
      { find: '@libs', replacement: fileURLToPath(new URL('./src/libs', import.meta.url)) },
      { find: '@apis', replacement: fileURLToPath(new URL('./src/apis', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
    ],
  },
});
ko;
