const CACHE="usd-mid-fx-v4-2-2";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html","./manifest.webmanifest"])))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;const u=new URL(e.request.url);if(u.origin===location.origin){e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)))}});