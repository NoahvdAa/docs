(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"d0d025515b6078a6a67c8d6ed852eb57","url":"__docusaurus/debug.html"},{"revision":"a42e40725ce78bb02063215b5ef16979","url":"__docusaurus/debug/config.html"},{"revision":"709ce0c5cae5ebea9f39594bc714ed91","url":"__docusaurus/debug/content.html"},{"revision":"1fa44773c3707647e33bd5ca411943e8","url":"__docusaurus/debug/globalData.html"},{"revision":"0caa1afc18e6940c6e9cadfb75e7936e","url":"__docusaurus/debug/metadata.html"},{"revision":"6479f8971566fd8a1fbd7f50668a3571","url":"__docusaurus/debug/registry.html"},{"revision":"8ab488c6e27f9395b251e4755265bb90","url":"__docusaurus/debug/routes.html"},{"revision":"cd22d1e06d57493d1f2e92fe25fd9fab","url":"404.html"},{"revision":"4833a5a05abc75da3279c18be35b8f3f","url":"assets/css/styles.8a1d17ea.css"},{"revision":"3a0c964fb23d6dcc1383dab7f1f9247f","url":"assets/js/08c91acd.2445e7a4.js"},{"revision":"c5562db403a1c3f9e1a793bb92233bd5","url":"assets/js/0b6e09e2.e4ecd109.js"},{"revision":"4860cdbd6371c3eb1c722ce96188cf77","url":"assets/js/14eb3368.38153dbd.js"},{"revision":"ef6427c9f566ff06dc7e6370a5666e39","url":"assets/js/17896441.12f9fbc9.js"},{"revision":"21b935134a4067d26a3585c25be97404","url":"assets/js/19c9239f.cbafbaa7.js"},{"revision":"ca880fb8158f54b0e4750de21d3cb5fa","url":"assets/js/1a4e3797.96c1cb78.js"},{"revision":"41dd0ada364152515dfa9d1f2002ee9a","url":"assets/js/1be78505.3da92d80.js"},{"revision":"7d4a59a549b2a3eff8e8dd76d68abc03","url":"assets/js/1df93b7f.f1eaa535.js"},{"revision":"c8df6bb74845a7bb5948c513effa50cd","url":"assets/js/230.025153b6.js"},{"revision":"e5022ddf02bd044b87ed754220f32c0b","url":"assets/js/23374ca6.e280cf8c.js"},{"revision":"e9f5480b1b769c2cc77af87534e04bfe","url":"assets/js/23abe487.e0e553df.js"},{"revision":"6c4d0b6735d0632801bc49bc3cc530ec","url":"assets/js/246f2c6f.c51909c7.js"},{"revision":"a09610f20e0340e626db506e654c4795","url":"assets/js/278d831b.375cb4cf.js"},{"revision":"6dcc26b594acec22838389fdb348cad3","url":"assets/js/27da239e.b4341720.js"},{"revision":"a61f249c288c2b73890a79fbf7b10993","url":"assets/js/2c700dca.bd04f183.js"},{"revision":"916be28f9353f9bb06802b6dfb330143","url":"assets/js/2c714a47.95a1c5e0.js"},{"revision":"6a86bf0c21f9cb02c05b764aad989de9","url":"assets/js/3450.9b3ef2c5.js"},{"revision":"3db9ca148d2c198c3c354243bfcf0605","url":"assets/js/3bd92c1c.f8a8712a.js"},{"revision":"1ba427a11c8058c3c57b9a062761aac4","url":"assets/js/3ca010ae.680dd3d3.js"},{"revision":"44e26c1a7618a7313766150a904cca48","url":"assets/js/417802b6.8b1fc840.js"},{"revision":"9c0d2768f21a7c74dfdb31569d3458f7","url":"assets/js/444147dc.92e96f6b.js"},{"revision":"6599068a112f0cee9ad4138a5107e353","url":"assets/js/4542f1aa.ef68acc8.js"},{"revision":"dfd134438991290e406feaf501a20bc3","url":"assets/js/45c35fe9.cbbaec91.js"},{"revision":"6150536220c3fc6a840930f351d4bc31","url":"assets/js/4608.7f3155ed.js"},{"revision":"72a6a4e8492ac0abece65193a150c0d3","url":"assets/js/4735cba8.b92d1766.js"},{"revision":"5f6fc5d18da7e30d3c70024c239174fd","url":"assets/js/5131.023cfe0f.js"},{"revision":"b634454a0456d9950c4e61cedee94a10","url":"assets/js/5283.2c52b05b.js"},{"revision":"fccdbf66f8de644c7185c92b922c1e02","url":"assets/js/59b20312.958a3ab6.js"},{"revision":"2322386d44a15460ba63aa052cc242df","url":"assets/js/64240ec8.9a0cfb7f.js"},{"revision":"eef3abd3a7ec7deaac69d2c8e5138ba5","url":"assets/js/6794d4cd.d8b7ef14.js"},{"revision":"ce7f72eee5e0653199ab25bcdc86e81c","url":"assets/js/6815.8f5a7408.js"},{"revision":"bd4bdbee6b4dfa240bf87f299bd42bb5","url":"assets/js/6856bc5e.039e2b30.js"},{"revision":"6ff6425450112c91f94f5e0478135a70","url":"assets/js/68e633d4.ea9b947b.js"},{"revision":"5a0aafccc443095b70527b12cb815750","url":"assets/js/6945.7e7c6451.js"},{"revision":"e2e10bb73b597c94f598bd5e2ea471f5","url":"assets/js/7109fcb9.c189380a.js"},{"revision":"eec4cfea032bf601212e98be97c1046a","url":"assets/js/7556a661.2e63f791.js"},{"revision":"6e418399e14fd570c5af493bc905088e","url":"assets/js/8894.8579f5eb.js"},{"revision":"2e2c6375275f0393198f05e94d9ef084","url":"assets/js/93426447.6ed340a6.js"},{"revision":"e9e1ccc30cbefc79bf085715282628f5","url":"assets/js/935f2afb.f0c89f3f.js"},{"revision":"7a322fd8821db2872e2dc206d2062d6c","url":"assets/js/946bd85a.f5ef0c45.js"},{"revision":"25c6d215cd683c8e29202abfb7779d75","url":"assets/js/9720aa09.953ecbb8.js"},{"revision":"1aeeb50c9eab3356de220d12aca893d8","url":"assets/js/b0dd63e9.469b9e57.js"},{"revision":"bd4d2f1f3ba4168d13db326ede2e4ca4","url":"assets/js/b326c38e.2fc7b644.js"},{"revision":"815c6b76658f682a036df9dab50c1391","url":"assets/js/b56a856c.e7a28af8.js"},{"revision":"40dab1979c06cd42a636d9d3a760798a","url":"assets/js/b8c60b87.ee38a876.js"},{"revision":"9d08d5c415a3142e54071647792def17","url":"assets/js/ba8b3534.be981aca.js"},{"revision":"9a0b4be4999650507187c7d1db0eeae7","url":"assets/js/bd0ab364.a6dba2bc.js"},{"revision":"8ef78e8aadac0d9cf852fb87310661cc","url":"assets/js/c18f6375.5674e5bb.js"},{"revision":"171c0425ea3faf84b29018470e288343","url":"assets/js/c19b4e8e.81a31c4f.js"},{"revision":"03daacb23cd7984e110a2fd1a5c1d014","url":"assets/js/cf08fff7.0e0686df.js"},{"revision":"dd9ae03bea5b87e62b566f3821f47a99","url":"assets/js/d50d5676.c61409f0.js"},{"revision":"a7817477caf03fb7fbf4e6bca5bca611","url":"assets/js/d70a5677.89651493.js"},{"revision":"79a71bb458822b6eb140b57fb1818841","url":"assets/js/d8af3d6e.e3640716.js"},{"revision":"9a241f884e9b7934c981de30515aa277","url":"assets/js/de48decc.a65d58f5.js"},{"revision":"6e1f661a22ca000c9393f54af08de8c3","url":"assets/js/decc4105.6bb97aec.js"},{"revision":"83275941647161d69d1c3331205d5cf1","url":"assets/js/df759228.107fc8d9.js"},{"revision":"ac84abe558c4a2886db70c0c8ddbdf25","url":"assets/js/e36987ae.8457f601.js"},{"revision":"733b6131d30bcf1dc8326ee80072709d","url":"assets/js/ede3a018.f4472f61.js"},{"revision":"79f8b509a269040558ea9d0c5a7bf016","url":"assets/js/f92d365d.1f031020.js"},{"revision":"527d1a28d5a5f916b7468ffe89e0b058","url":"assets/js/fdb945e9.a400f3a7.js"},{"revision":"d25f46f59c17663dae0aeeab4b1ef9b3","url":"assets/js/fe4828cc.dbfa37e8.js"},{"revision":"1ff52b38f628d1fb67bd678f4d924796","url":"assets/js/ff7bed0d.58e38c5c.js"},{"revision":"5c7b273fe34ababd294dce91b81717ef","url":"assets/js/main.ae130132.js"},{"revision":"79195d74d0e066b2e639fa2e98afb877","url":"assets/js/runtime~main.883fa208.js"},{"revision":"29bb0f04eae709c2577d1a713c8b3998","url":"category/how-to-guides-1.html"},{"revision":"bd4d06f146b3ceca3897ef2b2c27c682","url":"category/how-to-guides.html"},{"revision":"480a777911bb51da33f270d700efe729","url":"category/reference-1.html"},{"revision":"f10e05979f0ced108aedd7d70b06a2fd","url":"category/reference.html"},{"revision":"492b81de44389c8509f134c0bce542e6","url":"index.html"},{"revision":"30ef027062bc060f1aec53c8f6f2766e","url":"intro.html"},{"revision":"02dad282dee436b36544d9fc2a8c7b82","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"61390821f518e27ca4c7c683f1458139","url":"paper.html"},{"revision":"5ac606f41891f85efd4eec5fb7d81597","url":"paper/getting-started.html"},{"revision":"41cb219db215171bb45e41f7bf8175fe","url":"paper/how-to-update.html"},{"revision":"4fa505ab4d61f0e5abde8f0fdc2424cf","url":"paper/how-to-use-aikars-flags.html"},{"revision":"a9561ed1c5267eec47eaa76c37c74f68","url":"paper/how-to-use-per-world-configuration.html"},{"revision":"853ffd67550b592314f5ba1a3ce345d2","url":"paper/reference/paper-global-configuration.html"},{"revision":"919768041964fd5c42de0f2b39da9d94","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"56bbcc6c57dce829ab8e1d724c7d1871","url":"papermc/assets.html"},{"revision":"b837a110aea6c185a79a1e772539332e","url":"papermc/contact.html"},{"revision":"2122b7de08bb8f64e63c47dbffbb5ef3","url":"papermc/downloads-api.html"},{"revision":"4fe517bf2d6801ed2d92491112b4a75e","url":"search.html"},{"revision":"fb040feab5094c3fb99b82af3fe1fd22","url":"velocity.html"},{"revision":"0d1b2928e75f8566f901625daba37f20","url":"velocity/built-in-commands.html"},{"revision":"b4a0561ab9056cd06c760ae6d81bd728","url":"velocity/comparison-to-other-proxies.html"},{"revision":"15a9b78ea03de967a16efe86e9f6337d","url":"velocity/configuration.html"},{"revision":"708bddc8594bd81daf7a6b015fafa4a4","url":"velocity/credits.html"},{"revision":"fd9e3b2031b78cfab2eafc009ba47546","url":"velocity/developers.html"},{"revision":"a1344fc177242eff852ec718ea6a28fe","url":"velocity/developers/api-basics.html"},{"revision":"7dcadfbc21dd89a9c0fe0973e3ba6b47","url":"velocity/developers/command-api.html"},{"revision":"8109390d6aafaed0c3e2ae91700bd1c7","url":"velocity/developers/common-pitfalls.html"},{"revision":"735f1c60f57bd73120a03aa52910fdb6","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"cd0b67555b2434b1d06a518b74108fea","url":"velocity/developers/event-api.html"},{"revision":"8a93e9665515431a8e74053a01ab1638","url":"velocity/developers/how-to-manage-dependencies.html"},{"revision":"55920ebb2fd7f0c0cc9fa6fe44888d82","url":"velocity/developers/how-to-port-from-velocity-1.html"},{"revision":"aed7b0a039b377c69a7702dda406787e","url":"velocity/developers/scheduler-api.html"},{"revision":"76a8b57cae4ff216f763c995181a6525","url":"velocity/frequently-asked-questions.html"},{"revision":"af80a9259caeb3550c8f87cd84dfba61","url":"velocity/getting-started.html"},{"revision":"508ec6b1c560773d16537bac6e590b68","url":"velocity/how-to-migrate.html"},{"revision":"71a29ebea6f6056a1495c50cc329a064","url":"velocity/how-to-secure-your-servers.html"},{"revision":"b86102a01f735b67343fffbd3871e8cd","url":"velocity/how-to-tune-velocity.html"},{"revision":"1e885b494f75904ceccd3443e8528175","url":"velocity/player-information-forwarding.html"},{"revision":"f20f19bb09f3205ffd7b0e1b38b61064","url":"velocity/server-compatibility.html"},{"revision":"83cb1d8721bbaf20c6937c6b99703fbe","url":"velocity/why-velocity.html"},{"revision":"71bb76e71838899d1d2c50f9450641a1","url":"waterfall.html"},{"revision":"1522c39f5fb5f809a9752cefdba9c474","url":"waterfall/configuration.html"},{"revision":"f4b342b5006274518039db9e41c0e1f8","url":"waterfall/getting-started.html"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"a9da426ad5475220ef18653219fd74de","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();