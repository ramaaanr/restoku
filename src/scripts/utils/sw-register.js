import Swal from 'sweetalert2';
import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    Swal.fire({
      icon: 'warning',
      title: 'Your browser does not support some features',
      text: 'this application may not run properly if you use this browser',
    });
    return;
  }

  const wb = new Workbox('/sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Failed to register service worker',
      text: error,
    });
  }
};

export default swRegister;
