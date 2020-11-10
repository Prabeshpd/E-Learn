import 'izitoast/dist/css/iziToast.css';

import iziToast from 'izitoast';

iziToast.settings({
  timeout: 6000,
  resetOnHover: true,
  progressBar: false,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  position: 'bottomCenter',
  displayMode: 'replace',
});

export function success(message) {
  iziToast.success({
    title: 'Success',
    message,
  });
}

export function error(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

export function warning(message) {
  iziToast.warning({
    title: 'Warning',
    message,
  });
}

export function info(message) {
  iziToast.info({
    title: 'Info',
    message,
  });
}
