var C='nika-planner-v20',FC='nika-fonts',F=['./','index.html','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C&&n!==FC}).map(function(n){return caches.delete(n)}))}))});
self.addEventListener('fetch',function(e){var q=e.request;if(q.method!=='GET')return;var u=new URL(q.url);
if(u.origin!==location.origin){
 /* Google Fonts: cache after first load so the name fonts also work offline */
 if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){e.respondWith(caches.open(FC).then(function(c){return c.match(q).then(function(m){return m||fetch(q).then(function(r){c.put(q,r.clone());return r})})}))}
 return}
e.respondWith(fetch(q).then(function(r){var c2=r.clone();caches.open(C).then(function(c){c.put(q,c2)});return r}).catch(function(){return caches.match(q)}))});
