"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[225],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||a;return t?i.createElement(y,r(r({ref:n},c),{},{components:t})):i.createElement(y,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5850:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return m}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],l={},d="Dependency Management",p={unversionedId:"velocity/developers/dependencies",id:"velocity/developers/dependencies",title:"Dependency Management",description:"Dependencies are common. You need to hook into another plugin. You don't want to write the same code",source:"@site/docs/velocity/developers/dependencies.md",sourceDirName:"velocity/developers",slug:"/velocity/developers/dependencies",permalink:"/velocity/developers/dependencies",editUrl:"https://github.com/PaperMC/docs/blob/main/docs/velocity/developers/dependencies.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",frontMatter:{},sidebar:"docs",previous:{title:"Using the Scheduler",permalink:"/velocity/developers/task-scheduling"},next:{title:"Common Pitfalls",permalink:"/velocity/developers/pitfalls"}},c={},s=[{value:"Plugin dependencies",id:"plugin-dependencies",level:2},{value:"Optional plugin dependencies",id:"optional-plugin-dependencies",level:2},{value:"External dependencies",id:"external-dependencies",level:2}],u={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dependency-management"},"Dependency Management"),(0,a.kt)("p",null,"Dependencies are common. You need to hook into another plugin. You don't want to write the same code\nsomeone else has already solved. Whatever you do, you need a way to manage your dependencies\neffectively."),(0,a.kt)("h2",{id:"plugin-dependencies"},"Plugin dependencies"),(0,a.kt)("p",null,"Adding a dependency on another plugin is done with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation in your main class.\nLet's revisit that briefly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0"\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,a.kt)("p",null,"Say we have a dependency on another plugin, call it ",(0,a.kt)("inlineCode",{parentName:"p"},"wonderplugin"),". To add it as a dependency, do\nthe following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin")\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,a.kt)("p",null,"The id of the dependency is the same as the other plugin's ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," from its ",(0,a.kt)("inlineCode",{parentName:"p"},"@Plugin")," annotation. This\nis why having a stable plugin ID is important."),(0,a.kt)("p",null,"That's it! Now, your plugin will require wonderplugin to load, and when it does, it will load\n",(0,a.kt)("em",{parentName:"p"},"after")," wonderplugin."),(0,a.kt)("p",null,"To specify multiple dependencies, separate them by commas:\n",(0,a.kt)("inlineCode",{parentName:"p"},'dependencies = {@Dependency(id = "wonderplugin"), @Dependency(id = "otherplugin")}')),(0,a.kt)("h2",{id:"optional-plugin-dependencies"},"Optional plugin dependencies"),(0,a.kt)("p",null,"To make a dependency optional, add ",(0,a.kt)("inlineCode",{parentName:"p"},"optional = true"),", like shown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(\n  id = "myfirstplugin",\n  name = "My Plugin",\n  version = "0.1.0",\n  dependencies = {\n    @Dependency(id = "wonderplugin", optional = true)\n  }\n)\npublic class VelocityTest {\n  // ...\n}\n')),(0,a.kt)("h2",{id:"external-dependencies"},"External dependencies"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please remember to relocate any dependencies you shade. Failure to relocate will lead to dependency\nconflicts with other plugins."))),(0,a.kt)("p",null,"Dependencies on other libraries aren't handled by Velocity. You will need to add them using your\nbuild system."),(0,a.kt)("p",null,"If your plugin does not shade its dependencies, but rather attaches them from a directory, you may\nuse the PluginManager's ",(0,a.kt)("inlineCode",{parentName:"p"},"addToClasspath")," method instead of using reflection to access the\nClassLoader."))}m.isMDXComponent=!0}}]);