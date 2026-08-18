const CACHE_NAME = 'aegis-offline-v14';
const ASSETS_TO_CACHE = [
  './citizen-app.html',
  './rescue-app.html',
  './offline-styles.css',
  './citizen.png',
  './rescue.png',
  './citizen-icon.png',
  './rescue-icon.png',
  './manifest-citizen.json',
  './manifest-rescue.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
