const staticCacheName = 'static-meetingroom-cache-v1';
const expectedCaches = [
  staticCacheName
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => cache.addAll([
      '/meeting-room-v2/index.html',
      '/meeting-room-v2/index.js',
      '/meeting-room-v2/scripts.js',
      '/meeting-room-v2/styles.css'
    ]))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!expectedCaches.includes(key)) return caches.delete(key);
      })
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(r => r || fetch(event.request))
    .catch(e => {
      console.log(e);
    })
  );
});
