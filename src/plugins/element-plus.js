import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhTw from 'element-plus/dist/locale/zh-tw.mjs';

export function setupElementPlus(AppInstance) {
  AppInstance.use(ElementPlus, {
    locale: zhTw,
  });
}
