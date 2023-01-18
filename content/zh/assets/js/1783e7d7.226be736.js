"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,k=u["".concat(l,".").concat(h)]||u[h]||m[h]||n;return r?a.createElement(k,s(s({ref:t},p),{},{components:r})):a.createElement(k,s({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},32428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ - Version 5.0.0-ALPHA",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},s=void 0,i={permalink:"/zh/release-notes/2022/03/15/5.0.0-ALPHA",source:"@site/release-notes/2022-03-15-5.0.0-ALPHA.md",title:"Release Notes - Apache RocketMQ - Version 5.0.0-ALPHA",description:"* Binary: rocketmq-all-5.0.0-ALPHA-bin-release.zip [PGP] [SHA512]",date:"2022-03-15T00:00:00.000Z",formattedDate:"2022\u5e743\u670815\u65e5",tags:[{label:"Release_Notes",permalink:"/zh/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/zh/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/zh/release-notes/tags/version"}],readingTime:.585,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 5.0.0-ALPHA",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.2.2",permalink:"/zh/release-notes/2022/04/05/release-notes-rocketmq-spring-2.2.2"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.9.3",permalink:"/zh/release-notes/2022/03/04/4.9.3"}},l={authorsImageUrls:[]},c=[{value:"Feature",id:"feature",level:2},{value:"Improvement",id:"improvement",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Binary: ",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/5.0.0-ALPHA-rc2/rocketmq-all-5.0.0-ALPHA-bin-release.zip"},"rocketmq-all-5.0.0-ALPHA-bin-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/5.0.0-ALPHA-rc2/rocketmq-all-5.0.0-ALPHA-bin-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/5.0.0-ALPHA-rc2/rocketmq-all-5.0.0-ALPHA-bin-release.zip.sha512"},"SHA512"),"]"),(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/5.0.0-ALPHA-rc2/rocketmq-all-5.0.0-ALPHA-source-release.zip"},"rocketmq-all-5.0.0-ALPHA-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/5.0.0-ALPHA-rc2/rocketmq-all-5.0.0-ALPHA-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/5.0.0-ALPHA-rc2/rocketmq-all-5.0.0-ALPHA-source-release.zip.sha512"},"SHA512"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the 5.0.0-ALPHA release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{href:"/docs/quickStart/02quickstart//"},"Quick Start"),"."),(0,o.kt)("h2",{id:"feature"},"Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/wiki/RIP-26-Improve-Batch-Message-Processing-Throughput"},"RIP-26"),"] - Improve Batch Message Processing Throughput."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/tree/5.0.0-alpha/docs/cn/statictopic"},"RIP-21"),"] - Support static topic.")),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3521"},"ISSUE-3521"),"] - Fix the risk of memory overflow caused by excessive popShareQueueNum"),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3755"},"ISSUE-3755"),"] - Change the log level to warn when ack failed"),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3498"},"ISSUE-3498"),"] - Make messages in reviveTopic more evenly written to different queues"),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/3708"},"ISSUE-3708"),"] - Add CorrectLogicOffsetService to periodically correct min logic offset")))}u.isMDXComponent=!0}}]);