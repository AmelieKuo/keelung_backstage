import { createApp } from 'vue';
import * as Icons from '@element-plus/icons-vue';
import { setupStore } from './stores';
import { setupPlugins } from './plugins';
import { setupRouter } from './router';

import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import '@/assets/style.css';
import App from './App.vue';

async function setupApp() {
  const AppInstance = createApp(App);

  setupStore(AppInstance);

  setupPlugins(AppInstance);

  await setupRouter(AppInstance);

  Object.keys(Icons).forEach((key) => {
    AppInstance.component(key, Icons[key]);
  });

  AppInstance.mount('#app');
}

setupApp();
