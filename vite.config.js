import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  // 환경 변수가 있으면 GitHub Pages 경로, 없으면 루트 경로
  base: process.env.VITE_BASE_PATH || '/',
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
  build: {
    // 환경 변수로 출력 디렉토리 설정
    outDir: process.env.VITE_OUT_DIR || 'dist',
    rollupOptions: {
      output: {
        // 언더바(_)로 시작하는 chunk 파일 이름을 변경
        sanitizeFileName: (name) => {
          return name.replace(/^_/, '');
        },
      },
    },
  },
});
