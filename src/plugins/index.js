import { setupSweetAlert, Swal } from './sweetAlert2';
import { setupElementPlus } from './element-plus';

export function setupPlugins(AppInstance) {
  setupSweetAlert(AppInstance);
  setupElementPlus(AppInstance);
}

export { Swal };
