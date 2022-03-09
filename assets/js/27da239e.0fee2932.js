"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9803],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={slug:"/paper/updating"},s="Updating Paper",l={unversionedId:"paper/how-to/update",id:"paper/how-to/update",title:"Updating Paper",description:"Updating Paper is an important part of running every server. With new features and fixes coming",source:"@site/docs/paper/how-to/update.md",sourceDirName:"paper/how-to",slug:"/paper/updating",permalink:"/paper/updating",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/paper/how-to/update.md",tags:[],version:"current",lastUpdatedBy:"Evan McCarthy",lastUpdatedAt:1646787673,formattedLastUpdatedAt:"3/9/2022",frontMatter:{slug:"/paper/updating"},sidebar:"docs",previous:{title:"Per World Configuration",permalink:"/paper/per-world-configuration"},next:{title:"Aikar's Flags",permalink:"/paper/aikars-flags"}},u={},d=[{value:"Step 1. Backup",id:"step-1-backup",level:2},{value:"Step 2. Update Plugins",id:"step-2-update-plugins",level:2},{value:"Step 3. Update Paper",id:"step-3-update-paper",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-paper"},"Updating Paper"),(0,o.kt)("p",null,"Updating Paper is an important part of running every server. With new features and fixes coming\nevery day, we recommend updating at least once per week to keep your server patched for the latest\nbugs. Installing updates is very simple, but it's important to know how to do it correctly."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Don't replace any JAR in a running server")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Unless you know exactly what and why you're doing what you're doing, it's never a good idea to\nreplace any JAR in a running server, be that plugins, or Paper itself."))),(0,o.kt)("h2",{id:"step-1-backup"},"Step 1. Backup"),(0,o.kt)("p",null,"This is the most important step, and yet the most frequently skipped. While it is unlikely that\nupdating Paper itself will cause any issues requiring you to restore from a backup, plugin\nmalfunctions or other accidents might! Updating is a great time to work in a backup. Having\nfunctioning backups is essential to every server, big or small."),(0,o.kt)("p",null,"If you don't already have a backup plan in place, see ","[Backup and Recovery]"," where we walk through\nmultiple different backup or recovery strategies."),(0,o.kt)("h2",{id:"step-2-update-plugins"},"Step 2. Update Plugins"),(0,o.kt)("p",null,"Just like it's important to update Paper, it's equally important to keep plugins up to date. You\nnever know what plugin authors may be working on, be it bugfixes or new features."),(0,o.kt)("p",null,"A little known feature of Paper servers is the ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," folder. Here's how you use it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a folder called ",(0,o.kt)("inlineCode",{parentName:"li"},"update")," within the ",(0,o.kt)("inlineCode",{parentName:"li"},"plugins")," folder."),(0,o.kt)("li",{parentName:"ol"},"One by one, download plugins you would like to update and put them in the ",(0,o.kt)("inlineCode",{parentName:"li"},"update")," folder."),(0,o.kt)("li",{parentName:"ol"},"Restart your server, do not remove or modify any plugins outside the ",(0,o.kt)("inlineCode",{parentName:"li"},"update")," folder.")),(0,o.kt)("p",null,"By doing this, you are able to update all of your plugins at the same time without having the server\noff, or replacing plugin JARs while the server is running. You do not need to restart your server\nbefore updating Paper itself. This feature allows you to update both Paper and plugins all at the\nsame time, without needing any additional downtime."),(0,o.kt)("h2",{id:"step-3-update-paper"},"Step 3. Update Paper"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using a shared host, your host may provide a built-in way to update! Consult their\ndocumentation before continuing."))),(0,o.kt)("p",null,"Updating Paper itself is very simple."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download a new JAR from ",(0,o.kt)("a",{parentName:"li",href:"https://papermc.io/downloads"},"our downloads page")),(0,o.kt)("li",{parentName:"ol"},"Stop your server. It is not recommended and may cause issues to replace your Paper JAR while the\nserver is running."),(0,o.kt)("li",{parentName:"ol"},"Replace your old Paper JAR file with the new one."),(0,o.kt)("li",{parentName:"ol"},"Start your server. Watch the startup log to ensure everything goes to plan. If there are any\nplugin conflicts or issues, you will see them here.")),(0,o.kt)("p",null,"To minimize downtime caused by updates, some server owners will, rather than replacing their server\nJAR, upload a new one and set their start script to use the new one on the next restart. Both of\nthese are valid update strategies."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Automatic Updates")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While it may be convenient to install updates automatically (and Paper's ","[downloads api]"," allows you\nto with ease), doing so is not recommended by Paper due to the possibility of plugin conflicts or\nother issues that you may not know about. Always be present during updates, and keep a careful watch\non your server's log after the fact."),(0,o.kt)("p",{parentName:"div"},"If you do choose to automatically install updates, ensure you have a functioning backup strategy in\nplace!"))))}m.isMDXComponent=!0}}]);