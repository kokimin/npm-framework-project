import { createApp } from 'vue';
// import { defineRule } from '@kokimin/vue-framework';
import '@kokimin/vue-framework/style.css';
import mitt from 'mitt';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';

// 필요시 커스텀 규칙 추가
// defineRule('customRule', (value) => {
//   return true;
// });

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const emitter = mitt();
app.provide('emitter', emitter);

// 앱에 플러그인 등록
app.use(pinia);
app.use(router);

app.mount('#app');
