// Days moved to app/. This replaces the old service worker at the top level: it clears its caches,
// unregisters itself and reloads open pages, so the old address no longer acts as an installed app.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("days-v")) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
  })());
});
