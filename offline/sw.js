const CACHE_NAME = 'aegis-offline-v4';
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
