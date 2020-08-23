// Este es el punto de entrada de tu aplicacion

import { router } from './router/index.router.js';

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
