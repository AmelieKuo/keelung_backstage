import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routeItems';

const routerInstane = createRouter({
  history: createWebHashHistory(),
  routes, // routeItems: path、name 建在該檔案
  scrollBehavior() { // 使用 vue router scrollBehavior 函式每次切換頁面會在 top: 0
    return { top: 0 };
  },
});

export function setupRouter(AppInstance) {
  AppInstance.use(routerInstane);
}
