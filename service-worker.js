"use strict";var precacheConfig=[["/index.html","39d9da920b2f8066407c8c0be5eb4535"],["/static/css/main.001bc22a.css","3ce6b39a7a22455a032e8aa64b792cd5"],["/static/js/main.28838cf9.js","81026ddb66fb8dac9888cfe9632ef12d"],["/static/media/0.59b8b48d.png","59b8b48d46a9183b4a2dde97ff338f23"],["/static/media/1.c7f5e9c6.png","c7f5e9c6557506b263a1cdedc628748b"],["/static/media/10.a4b95f79.png","a4b95f79a5c14a5f76e386c2d62425ed"],["/static/media/11.7a76aa33.png","7a76aa33a952eb088cb10b8a6e10068c"],["/static/media/12.bf7ad7ba.png","bf7ad7bae367686970b82fe500e80632"],["/static/media/13.d0bb341d.png","d0bb341d72e66082c98a3fd2398fc897"],["/static/media/14.b878a23a.png","b878a23add9b5e96b64a6ef776c50d29"],["/static/media/15.e5d092aa.png","e5d092aa3c232e723159459e2e099b52"],["/static/media/16.3132476b.png","3132476b5574f1149a72150642043593"],["/static/media/17.0f47a4ec.png","0f47a4ec5ffd88a3793cf39574e92e8b"],["/static/media/2.0526b081.png","0526b081b1629159d4b476e90daefa85"],["/static/media/3.e30d49e1.png","e30d49e1fb9c4fdd57809c981af543cf"],["/static/media/4.652f7a21.png","652f7a21e25fdcf5a258a4d4b313fdb1"],["/static/media/5.089bc488.png","089bc48864869665735aa2bd7c786517"],["/static/media/6.a9589814.png","a9589814a5745131c174a92c43e40cdf"],["/static/media/7.f7634f4b.png","f7634f4bdc3b007c6204cea0a94e9087"],["/static/media/8.089bc488.png","089bc48864869665735aa2bd7c786517"],["/static/media/9.e6ff2d26.png","e6ff2d26e962240cf0c4b574edd714eb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});