(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"313696840930115440bded89a44480a5","url":"__docusaurus/debug.html"},{"revision":"58f01eef51260a473428859acdccacfd","url":"__docusaurus/debug/config.html"},{"revision":"eac4fb3e39fc9a60f630c49289853fd5","url":"__docusaurus/debug/content.html"},{"revision":"fe295db44a52325549e2fea0ebd0aaa0","url":"__docusaurus/debug/globalData.html"},{"revision":"f11926053870a4fb3ec7b8266a48ed61","url":"__docusaurus/debug/metadata.html"},{"revision":"58d1fad0496d2200db2f322c6b789d52","url":"__docusaurus/debug/registry.html"},{"revision":"b26cfa94d9f3d391e43dccda9f350d12","url":"__docusaurus/debug/routes.html"},{"revision":"e4e3b085b4500418d50d864687e4a9ef","url":"404.html"},{"revision":"4833a5a05abc75da3279c18be35b8f3f","url":"assets/css/styles.8a1d17ea.css"},{"revision":"3a0c964fb23d6dcc1383dab7f1f9247f","url":"assets/js/08c91acd.2445e7a4.js"},{"revision":"c5562db403a1c3f9e1a793bb92233bd5","url":"assets/js/0b6e09e2.e4ecd109.js"},{"revision":"4860cdbd6371c3eb1c722ce96188cf77","url":"assets/js/14eb3368.38153dbd.js"},{"revision":"ef6427c9f566ff06dc7e6370a5666e39","url":"assets/js/17896441.12f9fbc9.js"},{"revision":"21b935134a4067d26a3585c25be97404","url":"assets/js/19c9239f.cbafbaa7.js"},{"revision":"ca880fb8158f54b0e4750de21d3cb5fa","url":"assets/js/1a4e3797.96c1cb78.js"},{"revision":"41dd0ada364152515dfa9d1f2002ee9a","url":"assets/js/1be78505.3da92d80.js"},{"revision":"7d4a59a549b2a3eff8e8dd76d68abc03","url":"assets/js/1df93b7f.f1eaa535.js"},{"revision":"c8df6bb74845a7bb5948c513effa50cd","url":"assets/js/230.025153b6.js"},{"revision":"e5022ddf02bd044b87ed754220f32c0b","url":"assets/js/23374ca6.e280cf8c.js"},{"revision":"e9f5480b1b769c2cc77af87534e04bfe","url":"assets/js/23abe487.e0e553df.js"},{"revision":"9f3bac56ad646722770c9c31b44d9608","url":"assets/js/246f2c6f.c2271d65.js"},{"revision":"a09610f20e0340e626db506e654c4795","url":"assets/js/278d831b.375cb4cf.js"},{"revision":"6dcc26b594acec22838389fdb348cad3","url":"assets/js/27da239e.b4341720.js"},{"revision":"a61f249c288c2b73890a79fbf7b10993","url":"assets/js/2c700dca.bd04f183.js"},{"revision":"916be28f9353f9bb06802b6dfb330143","url":"assets/js/2c714a47.95a1c5e0.js"},{"revision":"6a86bf0c21f9cb02c05b764aad989de9","url":"assets/js/3450.9b3ef2c5.js"},{"revision":"3db9ca148d2c198c3c354243bfcf0605","url":"assets/js/3bd92c1c.f8a8712a.js"},{"revision":"1ba427a11c8058c3c57b9a062761aac4","url":"assets/js/3ca010ae.680dd3d3.js"},{"revision":"44e26c1a7618a7313766150a904cca48","url":"assets/js/417802b6.8b1fc840.js"},{"revision":"9c0d2768f21a7c74dfdb31569d3458f7","url":"assets/js/444147dc.92e96f6b.js"},{"revision":"6599068a112f0cee9ad4138a5107e353","url":"assets/js/4542f1aa.ef68acc8.js"},{"revision":"1bd453f6a2b4f6a4e4d482db5875afeb","url":"assets/js/45c35fe9.2facfb80.js"},{"revision":"6150536220c3fc6a840930f351d4bc31","url":"assets/js/4608.7f3155ed.js"},{"revision":"72a6a4e8492ac0abece65193a150c0d3","url":"assets/js/4735cba8.b92d1766.js"},{"revision":"5f6fc5d18da7e30d3c70024c239174fd","url":"assets/js/5131.023cfe0f.js"},{"revision":"b634454a0456d9950c4e61cedee94a10","url":"assets/js/5283.2c52b05b.js"},{"revision":"2322386d44a15460ba63aa052cc242df","url":"assets/js/64240ec8.9a0cfb7f.js"},{"revision":"eef3abd3a7ec7deaac69d2c8e5138ba5","url":"assets/js/6794d4cd.d8b7ef14.js"},{"revision":"ce7f72eee5e0653199ab25bcdc86e81c","url":"assets/js/6815.8f5a7408.js"},{"revision":"bd4bdbee6b4dfa240bf87f299bd42bb5","url":"assets/js/6856bc5e.039e2b30.js"},{"revision":"6ff6425450112c91f94f5e0478135a70","url":"assets/js/68e633d4.ea9b947b.js"},{"revision":"5a0aafccc443095b70527b12cb815750","url":"assets/js/6945.7e7c6451.js"},{"revision":"e2e10bb73b597c94f598bd5e2ea471f5","url":"assets/js/7109fcb9.c189380a.js"},{"revision":"eec4cfea032bf601212e98be97c1046a","url":"assets/js/7556a661.2e63f791.js"},{"revision":"6e418399e14fd570c5af493bc905088e","url":"assets/js/8894.8579f5eb.js"},{"revision":"2e2c6375275f0393198f05e94d9ef084","url":"assets/js/93426447.6ed340a6.js"},{"revision":"9eef9ed8866f8ac6dffdb9f62459f1b0","url":"assets/js/935f2afb.a22cdcc6.js"},{"revision":"7a322fd8821db2872e2dc206d2062d6c","url":"assets/js/946bd85a.f5ef0c45.js"},{"revision":"25c6d215cd683c8e29202abfb7779d75","url":"assets/js/9720aa09.953ecbb8.js"},{"revision":"1aeeb50c9eab3356de220d12aca893d8","url":"assets/js/b0dd63e9.469b9e57.js"},{"revision":"815c6b76658f682a036df9dab50c1391","url":"assets/js/b56a856c.e7a28af8.js"},{"revision":"40dab1979c06cd42a636d9d3a760798a","url":"assets/js/b8c60b87.ee38a876.js"},{"revision":"9d08d5c415a3142e54071647792def17","url":"assets/js/ba8b3534.be981aca.js"},{"revision":"9a0b4be4999650507187c7d1db0eeae7","url":"assets/js/bd0ab364.a6dba2bc.js"},{"revision":"171c0425ea3faf84b29018470e288343","url":"assets/js/c19b4e8e.81a31c4f.js"},{"revision":"a355bdda06c672091987d0008a70d273","url":"assets/js/cf08fff7.ee4f265f.js"},{"revision":"dd9ae03bea5b87e62b566f3821f47a99","url":"assets/js/d50d5676.c61409f0.js"},{"revision":"a7817477caf03fb7fbf4e6bca5bca611","url":"assets/js/d70a5677.89651493.js"},{"revision":"331802b417ca348a20d2c13be7add1d1","url":"assets/js/de48decc.05ac7a44.js"},{"revision":"6e1f661a22ca000c9393f54af08de8c3","url":"assets/js/decc4105.6bb97aec.js"},{"revision":"83275941647161d69d1c3331205d5cf1","url":"assets/js/df759228.107fc8d9.js"},{"revision":"ac84abe558c4a2886db70c0c8ddbdf25","url":"assets/js/e36987ae.8457f601.js"},{"revision":"733b6131d30bcf1dc8326ee80072709d","url":"assets/js/ede3a018.f4472f61.js"},{"revision":"79f8b509a269040558ea9d0c5a7bf016","url":"assets/js/f92d365d.1f031020.js"},{"revision":"527d1a28d5a5f916b7468ffe89e0b058","url":"assets/js/fdb945e9.a400f3a7.js"},{"revision":"d25f46f59c17663dae0aeeab4b1ef9b3","url":"assets/js/fe4828cc.dbfa37e8.js"},{"revision":"1ff52b38f628d1fb67bd678f4d924796","url":"assets/js/ff7bed0d.58e38c5c.js"},{"revision":"a87e615f26fd7ef59341240193c1d9b7","url":"assets/js/main.4414a369.js"},{"revision":"ba3d372c2d182a21446191eba74ffa31","url":"assets/js/runtime~main.7ed500a7.js"},{"revision":"f0fcc42991ce495b49c34bf6a6b94396","url":"category/how-to-guides-1.html"},{"revision":"58e3e9b451a20f8bed6bf84509c35f9c","url":"category/how-to-guides.html"},{"revision":"3befac90384e1d3bb0f3826784fc8bee","url":"category/reference-1.html"},{"revision":"f0e03652b9721ea37ac8cf066cf0e555","url":"category/reference.html"},{"revision":"5d907c2a97f15872ea7fe3318a4b286a","url":"index.html"},{"revision":"31046a444a9d92e7dee748856c18298a","url":"intro.html"},{"revision":"8187954ebcbfb6ce0239f9175930acf8","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"b7233e9b54f9c7018d1ccef2942480c3","url":"paper.html"},{"revision":"f63859fe95f90a2addb3d76f4b82aa2c","url":"paper/getting-started.html"},{"revision":"fd0905d1b303f2e61ec6d600cefa24c2","url":"paper/how-to-update.html"},{"revision":"6e39e7f2c0b8a50043bd4ab1f6e62d09","url":"paper/how-to-use-aikars-flags.html"},{"revision":"82e9669c8c037560874a48ad41031282","url":"paper/how-to-use-per-world-configuration.html"},{"revision":"b9e59a9f1f440e15074eaf0324cc6197","url":"paper/reference/paper-global-configuration.html"},{"revision":"d32113e6cd27bbec0d073fd60adf0e3d","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"7aafc1c2c2abf62c25a5857eb1a2bc2c","url":"search.html"},{"revision":"df9b63d289de839b95e6c2f710f3eae8","url":"velocity.html"},{"revision":"db74cb21daefabcc767e0109fe0c4681","url":"velocity/built-in-commands.html"},{"revision":"321d6ac22284e3678340689a5ea3e51c","url":"velocity/comparison-to-other-proxies.html"},{"revision":"d04145ac75ad670bbd13e3a1a7059770","url":"velocity/configuration.html"},{"revision":"06d466610c718380de8428813705d52b","url":"velocity/credits.html"},{"revision":"90de1984fb58761f9839626cd14b0116","url":"velocity/developers.html"},{"revision":"2b907079f12ff22612bdf5337bef6fd6","url":"velocity/developers/api-basics.html"},{"revision":"e2055a373bb1f112935589c58bece5fa","url":"velocity/developers/command-api.html"},{"revision":"034ecc93841bf547459bcb91cecf65e9","url":"velocity/developers/common-pitfalls.html"},{"revision":"9f1e0d7f3688bd6977961f775e75920e","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"51779929923b39e940f83daaa037dff9","url":"velocity/developers/event-api.html"},{"revision":"6e26f6d55bc6be2841e3b47887ed1dfa","url":"velocity/developers/how-to-manage-dependencies.html"},{"revision":"c2cb6e8ae7fbbca5378073f2260727ae","url":"velocity/developers/how-to-port-from-velocity-1.html"},{"revision":"c64bccc57e5d4c537869f8baf2b10253","url":"velocity/developers/scheduler-api.html"},{"revision":"800e173bfed31fe3212925df2444aaad","url":"velocity/frequently-asked-questions.html"},{"revision":"23f04a9103217dedcfd19dccb230c229","url":"velocity/getting-started.html"},{"revision":"379fec68743562e5fdbe8734fe87cfb1","url":"velocity/how-to-migrate.html"},{"revision":"b0bcb8d18f368b3cb0d8f730075b5cd6","url":"velocity/how-to-secure-your-servers.html"},{"revision":"b9f08ef48f6e8825bb458e604d67f5bf","url":"velocity/how-to-tune-velocity.html"},{"revision":"1e30de415f7643976bdcf24d5302749e","url":"velocity/player-information-forwarding.html"},{"revision":"91c55833b4523910e1ad6a1385d4262b","url":"velocity/server-compatibility.html"},{"revision":"efd21ef1d5360a02ad24fbfb7ad9626e","url":"velocity/why-velocity.html"},{"revision":"89e516a1f51588b15f8c085f16549881","url":"waterfall.html"},{"revision":"873c71aac18d57c7efcaa40116861da1","url":"waterfall/configuration.html"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"a9da426ad5475220ef18653219fd74de","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();