var C='nika-planner-v18',F=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}))});
self.addEventListener('fetch',function(e){var q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
e.respondWith(fetch(q).then(function(r){var c2=r.clone();caches.open(C).then(function(c){c.put(q,c2)});return r}).catch(function(){return caches.match(q)}))});
