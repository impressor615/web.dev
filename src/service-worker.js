// workbox options
workbox.skipWaiting();
workbox.clientsClaim();

// runtime cahcing
// workbox.routing.registerRoute(
//   new RegExp('https://hacker-news.firebaseio.com'),
//   workbox.strategies.staleWhileRevalidate()
// );

// push listener
self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// precaching
workbox.precaching.precacheAndRoute(self.__precacheManifest);
