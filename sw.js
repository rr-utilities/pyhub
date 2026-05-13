const CACHE_NAME = 'pyhub-v1';
const urlsToCache = [
  'index.html',
  // 'assets/styles.css',
  'favicon.jpg'
];

// Installation & Caching
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Netzwerk-Anfragen abfangen (Offline-Fähigkeit)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});