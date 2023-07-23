import Swal from 'sweetalert2';

export function setupSweetAlert(AppInstance) {
  AppInstance.provide('$swal', Swal);
}
export { Swal };
