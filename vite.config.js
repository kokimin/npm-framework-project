import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
// command는 'serve'(dev) 또는 'build'를 나타내고, mode는 'development' 또는 'production'을 나타냅니다.
export default defineConfig(({ mode }) => {
  return {
    // 개발 모드(dev)일 때는 '/'를, 빌드(production)일 때는 프로젝트 경로를 사용합니다.
    base: mode === 'production' ? '/npm-framework-project/' : '/',

    plugins: [vue(), vueDevTools()],

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

    server: {
      // 로컬 dev 환경에서 접속 주소를 http://localhost:5173/ 로 유지합니다.
      open: true,
    },

    build: {
      outDir: 'dist',
    },
  };
});
