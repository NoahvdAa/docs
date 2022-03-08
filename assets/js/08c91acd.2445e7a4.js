"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7833],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return y}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={slug:"/velocity/developers/common-pitfalls"},l="Common Pitfalls",c={unversionedId:"velocity/developers/getting-started/pitfalls",id:"velocity/developers/getting-started/pitfalls",title:"Common Pitfalls",description:"While we try to make the API a pleasure to use, there are the occasional rough edges, and you should",source:"@site/docs/velocity/developers/getting-started/pitfalls.md",sourceDirName:"velocity/developers/getting-started",slug:"/velocity/developers/common-pitfalls",permalink:"/velocity/developers/common-pitfalls",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/getting-started/pitfalls.md",tags:[],version:"current",lastUpdatedBy:"sulu5890",lastUpdatedAt:1646714966,formattedLastUpdatedAt:"3/8/2022",frontMatter:{slug:"/velocity/developers/common-pitfalls"},sidebar:"docs",previous:{title:"Velocity Plugin Basics",permalink:"/velocity/developers/api-basics"},next:{title:"Dependency Management",permalink:"/velocity/developers/how-to-manage-dependencies"}},u={},p=[{value:"Accessing the API at construction time",id:"accessing-the-api-at-construction-time",level:2},{value:"Audience operations not supported",id:"audience-operations-not-supported",level:2}],d={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"common-pitfalls"},"Common Pitfalls"),(0,i.kt)("p",null,"While we try to make the API a pleasure to use, there are the occasional rough edges, and you should\nbe aware of them."),(0,i.kt)("h2",{id:"accessing-the-api-at-construction-time"},"Accessing the API at construction time"),(0,i.kt)("p",null,"In Velocity, plugin loading is split into two steps: construction and initialization. The code in\nyour plugin's constructor is part of the construction phase. There is very little you can do safely\nduring construction, especially as the API does not specify which operations are safe to run during\nconstruction. Notably, you can't register an event listener in your constructor, because you need to\nhave a valid plugin registration, but Velocity can't register the plugin until the plugin has been\nconstructed."),(0,i.kt)("p",null,"To break this cycle, you should always wait for initialization, which is indicated when Velocity\nfires the ProxyInitializeEvent. We can do things on initialization by adding a listener for this\nevent, as shown below. Note that Velocity automatically registers your plugin main class as a\nlistener."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Subscribe\npublic void onProxyInitialization(ProxyInitializeEvent event) {\n    // Do some operation demanding access to the Velocity API here.\n    // For instance, we could register an event:\n    server.getEventManager().register(this, new PluginListener());\n}\n")),(0,i.kt)("h2",{id:"audience-operations-not-supported"},"Audience operations not supported"),(0,i.kt)("p",null,"Velocity only supports sending chat messages, action bar messages, titles, and boss bars through the\nAdventure API. No other operations are supported."))}y.isMDXComponent=!0}}]);