const installEvent = () => {
    self.addEventListener('install', () => {
      console.log('stonecold-medusa-v1 service worker installed');
    });
  };
installEvent();
  
const activateEvent = () => {
    self.addEventListener('activate', () => {
        console.log('stonecold-medusa-v1 service worker activated');
    });
};
activateEvent();

// https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
// Implements stale-while-revalidate
self.addEventListener('fetch', event => {
    const cached = caches.match(event.request);
    const fetched = fetch(event.request);
    const fetchedCopy = fetched.then(resp => resp.clone());

    // Call respondWith() with whatever we get first.
    // If the fetch fails (e.g disconnected), wait for the cache.
    // If there’s nothing in cache, wait for the fetch. 
    // If neither yields a response, return a 404.
    event.respondWith(
        Promise.race([fetched.catch(_ => cached), cached])
        .then(resp => resp || fetched)
        .catch(_ => new Response(null, {status: 404}))
    );

    // Update the cache with the version we fetched
    event.waitUntil(
        Promise.all([fetchedCopy, caches.open('stonecold-medusa-v1')])
        .then(([response, cache]) => cache.put(event.request, response))
        .catch(err => {/* eat any errors */})
    );
});