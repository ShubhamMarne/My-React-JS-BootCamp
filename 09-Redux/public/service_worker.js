const cacheName = "V2";

const cachedAssets = [
    'main.js',
    '../src/index.css'
];

//Install
self.addEventListener('install', (e) => {
    console.log("service worker installed....");

    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log("Service worker caching files...");
            cache.addAll(cachedAssets);
        }).then(() => self.skipWaiting())
    );
});

//Activate
self.addEventListener('activate', (e) => {
    console.log("service worker activated....");
    // Remove/ delete old caches    
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache != cacheName)
                    {
                        console.log("Service worker clearing cache...");
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});


// Fetch
self.addEventListener('fetch', (e) => {
    console.log("Service worker fetching...");
    e.respondWith(fetch(e.request).catch(() => {caches.match(e.request)}));
});