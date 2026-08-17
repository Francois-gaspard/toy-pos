// pos/sw.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // You can add caching logic here later
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
    // You can add cache cleanup logic here later
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // This service worker currently does nothing with fetch events.
    // You would add caching strategies here for offline support.
    // For now, it just lets the browser handle the request normally.
});
