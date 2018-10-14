"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4959:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(9960),i=r(4477),o=r(2263);const s=function(e){var t=e.to,r=e.children,s=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning?n.createElement(a.default,{to:"/api/"+t},r):n.createElement(a.default,{to:"/api/"+("current"===s.version?"next":s.version)+"/"+t},r)}},2812:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(1435),s=r(4959);var l=["components"],p={id:"skip-navigation",title:"Skipping navigations for certain requests"},c=void 0,u={unversionedId:"examples/skip-navigation",id:"examples/skip-navigation",title:"Skipping navigations for certain requests",description:"While crawling a website, you may encounter certain resources you'd like to save, but don't need the full power of a crawler to do so (like images delivered through a CDN).",source:"@site/../docs/examples/skip-navigation.mdx",sourceDirName:"examples",slug:"/examples/skip-navigation",permalink:"/docs/examples/skip-navigation",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1658358693,formattedLastUpdatedAt:"Jul 20, 2022",frontMatter:{id:"skip-navigation",title:"Skipping navigations for certain requests"},sidebar:"docs",previous:{title:"Puppeteer with proxy",permalink:"/docs/examples/puppeteer-with-proxy"},next:{title:"Upgrading",permalink:"/docs/upgrading"}},d={},g=[],m={toc:g};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While crawling a website, you may encounter certain resources you'd like to save, but don't need the full power of a crawler to do so (like images delivered through a CDN)."),(0,i.kt)("p",null,"By combining the ",(0,i.kt)(s.Z,{to:"core/class/Request#skipNavigation",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"Request#skipNavigation"))," option with ",(0,i.kt)(s.Z,{to:"basic-crawler/interface/BasicCrawlingContext#sendRequest",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"sendRequest")),", we can fetch the image from the CDN, and save it to our key-value store without needing to use the full crawler."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For this example, we are using the ",(0,i.kt)(s.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"))," to showcase this, but this is available on all the crawlers we provide.")),(0,i.kt)(o.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PlaywrightCrawler, KeyValueStore } from 'crawlee';\n\n// Create a key value store for all images we find\nconst imageStore = await KeyValueStore.open('images');\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, sendRequest }) {\n        // The request should have the navigation skipped\n        if (request.skipNavigation) {\n            // Request the image and get its buffer back\n            const imageBuffer = await sendRequest({ responseType: 'buffer' });\n\n            // Save the image in the key-value store\n            await imageStore.setValue(`${request.userData.key}.png`, imageBuffer);\n\n            // Prevent executing the rest of the code as we do not need it\n            return;\n        }\n\n        // Get all the image sources in the current page\n        const images = await page.$$eval('img', (imgs) => imgs.map((img) => img.src));\n\n        // Add all the urls as requests for the crawler, giving each image a key\n        await crawler.addRequests(images.map((url, i) => ({ url, skipNavigation: true, userData: { key: i } })));\n    },\n});\n\nawait crawler.addRequests(['https://crawlee.dev']);\n\n// Run the crawler\nawait crawler.run();\n"))}f.isMDXComponent=!0}}]);