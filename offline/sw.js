const CACHE_NAME = 'aegis-offline-v2';
const ASSETS_TO_CACHE = [
  './citizen-app.html',
  './rescue-app.html',
  './offline-styles.css',
  './citizen.jpg',
  './rescue.jpg',
  './manifest-citizen.json',
  './manifest-rescue.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
