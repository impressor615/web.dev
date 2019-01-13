export default () => {
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const vapidPublicKey = 'BH82ZgxeaWvaSRbO5aBiVBjs0iQUEQakVEp97X5mqIprhTABiDKKzPFV_5UTAojh9tAU0NVdVTDmNSfJ1Y07nnk';
  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
        if ('PusManager' in window) {
          registration.pushManager.subscribe(
            {
              userVisibleOnly: true,
              applicationServerKey: convertedVapidKey
            },
          );
        }
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
};
