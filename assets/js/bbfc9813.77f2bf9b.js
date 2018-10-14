"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4959:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(9960),i=n(4477),o=n(2263);const l=function(e){var t=e.to,n=e.children,l=(0,i.E)();return(0,o.default)().siteConfig.presets[0][1].docs.disableVersioning?r.createElement(a.default,{to:"/api/"+t},n):r.createElement(a.default,{to:"/api/"+("current"===l.version?"next":l.version)+"/"+t},n)}},2463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4959),l=["components"],s={id:"cheerio-crawler",title:"CheerioCrawler aka jQuery crawler",sidebar_label:"CheerioCrawler",description:"Your first steps into the world of scraping with Crawlee"},u=void 0,p={unversionedId:"introduction/cheerio-crawler",id:"introduction/cheerio-crawler",title:"CheerioCrawler aka jQuery crawler",description:"Your first steps into the world of scraping with Crawlee",source:"@site/../docs/introduction/03-cheerio-crawler.mdx",sourceDirName:"introduction",slug:"/introduction/cheerio-crawler",permalink:"/docs/introduction/cheerio-crawler",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1658358693,formattedLastUpdatedAt:"Jul 20, 2022",sidebarPosition:3,frontMatter:{id:"cheerio-crawler",title:"CheerioCrawler aka jQuery crawler",sidebar_label:"CheerioCrawler",description:"Your first steps into the world of scraping with Crawlee"},sidebar:"docs",previous:{title:"First crawler",permalink:"/docs/introduction/first-crawler"},next:{title:"Enqueuing links",permalink:"/docs/introduction/enqueue-links"}},c={},h=[{value:"Overview",id:"overview",level:3},{value:"When to use <code>CheerioCrawler</code>",id:"when-to-use-cheeriocrawler",level:3},{value:"Basic use of <code>CheerioCrawler</code>",id:"basic-use-of-cheeriocrawler",level:3},{value:"Refresher",id:"refresher",level:4},{value:"Finding new links",id:"finding-new-links",level:4},{value:"Filtering links to same domain",id:"filtering-links-to-same-domain",level:4},{value:"Enqueueing links to <code>RequestQueue</code>",id:"enqueueing-links-to-requestqueue",level:4},{value:"Scrape the newly enqueued links",id:"scrape-the-newly-enqueued-links",level:4},{value:"The <code>maxRequestsPerCrawl</code> limit",id:"the-maxrequestspercrawl-limit",level:5},{value:"Putting it all together",id:"putting-it-all-together",level:4}],d={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the crawler that we used in our earlier example. Our simplest and also the fastest crawling solution. If you're familiar with ",(0,i.kt)("inlineCode",{parentName:"p"},"jQuery"),", you'll understand ",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},"CheerioCrawler")," in minutes. ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"Cheerio"))," is essentially ",(0,i.kt)("inlineCode",{parentName:"p"},"jQuery")," for Node.js. It offers the same API, including the familiar ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," object. You can use it, as you would use ",(0,i.kt)("inlineCode",{parentName:"p"},"jQuery"),", for manipulating the DOM of an HTML page. In crawling, you'll mostly use it to select the right elements and extract their text values - the data you're interested in. But ",(0,i.kt)("inlineCode",{parentName:"p"},"jQuery")," runs in a browser and attaches directly to the browser's DOM. Where does ",(0,i.kt)("inlineCode",{parentName:"p"},"cheerio")," get its HTML? This is where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Crawler")," part of ",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," comes in."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"\u200b",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," crawls by making plain HTTP requests to the provided URLs. As you remember from the previous section, the URLs are fed to the crawler using either the ",(0,i.kt)(o.Z,{to:"core/class/RequestList",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestList"))," or the ",(0,i.kt)(o.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")),". The HTTP responses it gets back are HTML pages, the same pages you would get in your browser when you first load a URL."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note, however, that modern web pages often do not serve all of their content in the first HTML response, but rather the first HTML contains links to other resources such as CSS and JavaScript that get downloaded afterwards, and together they create the final page. See ",(0,i.kt)(o.Z,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," and ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"))," to crawl those.")),(0,i.kt)("p",null,"Once the page's HTML is retrieved, the crawler will pass it to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio")," for parsing. The result is the typical ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," function, which should be familiar to ",(0,i.kt)("inlineCode",{parentName:"p"},"jQuery")," users. You can use this ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," to do all sorts of lookups and manipulation of the page's HTML, but in scraping, you will mostly use it to find specific HTML elements and extract their data."),(0,i.kt)("p",null,"Example use of Cheerio and its ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," function in comparison to browser JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Return the text content of the <title> element.\ndocument.querySelector('title').textContent; // plain JS\n$('title').text(); // Cheerio\n\n// Return an array of all 'href' links on the page.\nArray.from(document.querySelectorAll('[href]')).map(el => el.href); // plain JS\n$('[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get(); // Cheerio\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is not to show that Cheerio is better than plain browser JavaScript. Some might actually prefer the more expressive way plain JS provides. Unfortunately, the browser JavaScript methods are not available in Node.js, so Cheerio is your best bet to do the parsing.")),(0,i.kt)("h3",{id:"when-to-use-cheeriocrawler"},"When to use ",(0,i.kt)("inlineCode",{parentName:"h3"},"CheerioCrawler")),(0,i.kt)("p",null,"Even though using ",(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," is extremely easy, it probably will not be your first choice for most kinds of crawling or scraping in production environments. Since most websites nowadays use modern JavaScript to create rich, responsive and data-driven user experiences, the plain HTTP requests the crawler uses may just fall short of your needs."),(0,i.kt)("p",null,"But ",(0,i.kt)(o.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," is far from useless! It really shines when you need to cope with extremely high workloads. With just 4 GBs of memory and a single CPU core, you can scrape 500 or more pages a minute! ",(0,i.kt)("em",{parentName:"p"},"(assuming each page contains approximately 400KB of HTML)"),". To scrape this fast with a full browser scraper, such as the ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),", you'd need significantly more computing power."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advantages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extremely fast"),(0,i.kt)("li",{parentName:"ul"},"Easy to set up"),(0,i.kt)("li",{parentName:"ul"},"Familiar for jQuery users"),(0,i.kt)("li",{parentName:"ul"},"Super cheap to run"),(0,i.kt)("li",{parentName:"ul"},"Each request can go through a different proxy")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Disadvantages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does not work for all websites"),(0,i.kt)("li",{parentName:"ul"},"May easily overload the target website with requests"),(0,i.kt)("li",{parentName:"ul"},"Does not enable any manipulation of the website before scraping")),(0,i.kt)("h3",{id:"basic-use-of-cheeriocrawler"},"Basic use of ",(0,i.kt)("inlineCode",{parentName:"h3"},"CheerioCrawler")),(0,i.kt)("p",null,"Now that you have an idea of the crawler's inner workings, let's build one. We'll use the example from the previous section and improve on it by letting it truly crawl the page, finding new links as it goes, enqueuing them into the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue")," and then scraping them."),(0,i.kt)("h4",{id:"refresher"},"Refresher"),(0,i.kt)("p",null,"Just to refresh your memory, in the previous section you built a very simple crawler that downloads the HTML of a single page, reads its title and prints\nit to the console. This is the original source code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { CheerioCrawler } from 'crawlee';\n\n// Set up the crawler, passing a single options object as an argument.\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, $ }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n    },\n});\n\n// Enqueue the initial request and run the crawler\nawait crawler.run(['https://apify.com']);\n")),(0,i.kt)("p",null,"Earlier we said that we would let the crawler:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find new links on the page"),(0,i.kt)("li",{parentName:"ol"},"Filter only those pointing to the same hostname, in this case ",(0,i.kt)("inlineCode",{parentName:"li"},"apify.com")),(0,i.kt)("li",{parentName:"ol"},"Enqueue them to the ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestQueue")),(0,i.kt)("li",{parentName:"ol"},"Scrape the newly enqueued links")),(0,i.kt)("p",null,"So let's get to it!"),(0,i.kt)("h4",{id:"finding-new-links"},"Finding new links"),(0,i.kt)("p",null,"There are numerous approaches to finding links to follow when crawling the web. For our purposes, we will be looking for ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," elements that contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute. For example ",(0,i.kt)("inlineCode",{parentName:"p"},'<a href="https://apify.com/store">This is a link to Apify Store</a>'),". To do this, we need to update our Cheerio function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const links = $('a[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get();\n")),(0,i.kt)("p",null,"Our new function finds all the ",(0,i.kt)("inlineCode",{parentName:"p"},"<a>")," elements that contain the ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," attribute and extracts the attributes into an array of strings. But there's a problem. There could be relative links in the list and those can't be used on their own. We need to resolve them using our domain as base URL and we will use one of Node.js' standard libraries to do this."),(0,i.kt)("p",null,"Crawlee exposes two URL properties: ",(0,i.kt)(o.Z,{to:"core/class/Request#url",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"request.url"))," and ",(0,i.kt)(o.Z,{to:"core/class/Request#loadedUrl",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"request.loadedUrl")),". What's the difference? Well, ",(0,i.kt)("inlineCode",{parentName:"p"},"request.url")," is the URL of the first request. In case of redirects, the URL changes. The final one is stored as ",(0,i.kt)("inlineCode",{parentName:"p"},"request.loadedUrl"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// At the top of the file:\nimport { URL } from 'url';\n\n// ...\n\nconst { hostname } = new URL(request.loadedUrl);\nconst absoluteUrls = links.map(link => new URL(link, request.loadedUrl));\n")),(0,i.kt)("h4",{id:"filtering-links-to-same-domain"},"Filtering links to same domain"),(0,i.kt)("p",null,"Websites typically contain a lot of links that lead away from the original page. This is normal, but when crawling a website, we usually want to crawl that one site and not let our crawler wander away to Google, Facebook and Twitter. Therefore, we need to filter out the off-domain links and only keep the ones that lead to the same domain."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Don't worry, we'll soon learn about much easier way to handle this.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// At the top of the file:\nimport { URL } from 'url';\n\n// ...\n\nconst links = $('a[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get();\n\nconst { hostname } = new URL(request.loadedUrl);\nconst absoluteUrls = links.map(link => new URL(link, request.loadedUrl));\n\nconst sameDomainLinks = absoluteUrls.filter(url => url.hostname.endsWith(hostname));\n\n// ...\n")),(0,i.kt)("p",null,"This includes subdomains. In order to filter the same origin, simply compare the ",(0,i.kt)("inlineCode",{parentName:"p"},"url.origin")," property instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const { origin } = new URL(request.loadedUrl);\nconst absoluteUrls = links.map(link => new URL(link, request.loadedUrl));\n\nconst sameDomainLinks = absoluteUrls.filter(url => url.origin === origin);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," class contains many other useful properties. You can read more about ",(0,i.kt)("inlineCode",{parentName:"p"},"url.origin")," ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/origin",target:"_blank",rel:"noopener"},"here"),".")),(0,i.kt)("h4",{id:"enqueueing-links-to-requestqueue"},"Enqueueing links to ",(0,i.kt)("inlineCode",{parentName:"h4"},"RequestQueue")),(0,i.kt)("p",null,"This should be easy, because we already did that ",(0,i.kt)("a",{parentName:"p",href:"#putting-it-all-together",target:null,rel:null},"earlier"),", remember? Just call ",(0,i.kt)("inlineCode",{parentName:"p"},"requestQueue.addRequests()")," for all the new links. This will add them to the end of the queue for processing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// At the top of the file:\nimport { URL } from 'url';\n\n// ...\n\nconst links = $('a[href]')\n    .map((i, el) => $(el).attr('href'))\n    .get();\n\nconst { origin } = new URL(request.loadedUrl);\nconst absoluteUrls = links.map(link => new URL(link, request.loadedUrl));\n\nconst sameDomainLinks = absoluteUrls\n    .filter(url => url.origin === origin)\n    .map(url => ({ url: url.href }));\n\n// Add the requests in series. There's of course room for speed\n// improvement by parallelization. Try to implement it, if you wish.\nconsole.log(`Enqueueing ${sameDomainLinks.length} URLs.`);\nawait requestQueue.addRequests(sameDomainLinks);\n\n// ...\n")),(0,i.kt)("h4",{id:"scrape-the-newly-enqueued-links"},"Scrape the newly enqueued links"),(0,i.kt)("p",null,"And we're approaching the finishing line. All we need to do now is to integrate the new code into our original crawler. It will be easy, because almost everything needs to go into the ",(0,i.kt)("inlineCode",{parentName:"p"},"requestHandler"),". But just before we do that, let's introduce the first crawler configuration option that is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"requestHandler")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"requestQueue"),". It's called ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRequestsPerCrawl"),"."),(0,i.kt)("h5",{id:"the-maxrequestspercrawl-limit"},"The ",(0,i.kt)("inlineCode",{parentName:"h5"},"maxRequestsPerCrawl")," limit"),(0,i.kt)("p",null,"This configuration option is available in all crawler classes, and you can use it to limit the number of requests the crawler should process. It's very useful when you're just testing your code or when your crawler could potentially crawl millions of pages, and you want to save resources. You can add it to the crawler options like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 20,\n    requestHandler,\n});\n")),(0,i.kt)("p",null,"This limits the number of successfully handled requests to 20. Bear in mind that the actual number of processed requests might be a little higher and that's because usually there are multiple requests processed at the same time and once the 20th ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," finishes, the other running requests will be allowed to finish too."),(0,i.kt)("h4",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { URL } from 'url'; // <------ This is new.\nimport { CheerioCrawler } from 'crawlee';\n\n// Set up the crawler, passing a single options object as an argument.\nconst crawler = new CheerioCrawler({\n    maxRequestsPerCrawl: 20, // <------ This is new too.\n    async requestHandler({ request, $ }) {\n        const title = $('title').text();\n        console.log(`The title of \"${request.url}\" is: ${title}.`);\n\n        // Here starts the new part of requestHandler.\n        const links = $('a[href]')\n            .map((i, el) => $(el).attr('href'))\n            .get();\n\n        const { origin } = new URL(request.loadedUrl);\n        const absoluteUrls = links.map(link => new URL(link, request.loadedUrl));\n\n        const sameDomainLinks = absoluteUrls\n            .filter(url => url.origin === origin)\n            .map(url => ({ url: url.href} ));\n\n        console.log(`Enqueueing ${sameDomainLinks.length} URLs.`);\n        await crawler.addRequests(sameDomainLinks);\n    },\n});\n\nawait crawler.run(['https://apify.com']);\n")),(0,i.kt)("p",null,"No matter if you followed along with your coding or just copy-pasted the resulting source, try running it now, perhaps even in both environments. You should see the crawler log the ",(0,i.kt)("strong",{parentName:"p"},"title")," of the first page, then the ",(0,i.kt)("strong",{parentName:"p"},"enqueueing")," message showing number of URLs, followed by the ",(0,i.kt)("strong",{parentName:"p"},"title")," of the first enqueued page and so on and so on."))}m.isMDXComponent=!0}}]);