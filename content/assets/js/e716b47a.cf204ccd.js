"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[3053],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(a),u=n,k=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return a?r.createElement(k,o(o({ref:t},c),{},{components:a})):r.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={},o="RocketMQ Streams Core Concept",l={unversionedId:"streams/31RocketMQ Streams Concept",id:"streams/31RocketMQ Streams Concept",title:"RocketMQ Streams Core Concept",description:"Domain model",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07-streams/31RocketMQ Streams Concept.md",sourceDirName:"07-streams",slug:"/streams/31RocketMQ Streams Concept",permalink:"/docs/4.x/streams/31RocketMQ Streams Concept",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/07-streams/31RocketMQ Streams Concept.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Streams overview",permalink:"/docs/4.x/streams/30RocketMQ Streams Overview"},next:{title:"RocketMQ Streams Quick Start",permalink:"/docs/4.x/streams/32RocketMQ Streams Quick Start"}},s={},m=[{value:"Domain model",id:"domain-model",level:2},{value:"StreamBuilder",id:"streambuilder",level:3},{value:"RocketMQStream",id:"rocketmqstream",level:3},{value:"Stream Processing Instance",id:"stream-processing-instance",level:3},{value:"StreamBuilder",id:"streambuilder-1",level:2},{value:"RStream",id:"rstream",level:2},{value:"GroupedStream",id:"groupedstream",level:2},{value:"WindowStream",id:"windowstream",level:2}],c={toc:m};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rocketmq-streams-core-concept"},"RocketMQ Streams Core Concept"),(0,n.kt)("h2",{id:"domain-model"},"Domain model"),(0,n.kt)("h3",{id:"streambuilder"},"StreamBuilder"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img_2.png",src:a(50172).Z,width:"771",height:"359"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An instance of StreamBuilder has 1 to N pipelines, where a pipeline represents a data processing path."),(0,n.kt)("li",{parentName:"ul"},"A pipeline can contain 1 to N processing nodes, called GroupNodes. "),(0,n.kt)("li",{parentName:"ul"},"An instance of StreamBuilder also has a TopologyBuilder, which can construct data processors. "),(0,n.kt)("li",{parentName:"ul"},"Each JobId corresponds to one instance of StreamBuilder.")),(0,n.kt)("h3",{id:"rocketmqstream"},"RocketMQStream"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img_2.png",src:a(22487).Z,width:"779",height:"606"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An instance of RocketMQStream has a TopologyBuilder for building topologies"),(0,n.kt)("li",{parentName:"ul"},"An instance of RocketMQStream can instantiate 1 to N worker threads"),(0,n.kt)("li",{parentName:"ul"},"Each thread, represented by a WorkerThread instance, contains an engine"),(0,n.kt)("li",{parentName:"ul"},"An engine contains all the logic for executing data processing and includes a consumer instance, a producer instance, and a StateStore instance.")),(0,n.kt)("h3",{id:"stream-processing-instance"},"Stream Processing Instance"),(0,n.kt)("p",null,"A Stream Processing Instance represents a process running RocketMQ Streams;"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An instance of Stream Processing contains one StreamBuilder, one RocketMQStream, one topology, and one or multiple pipelines.")),(0,n.kt)("h2",{id:"streambuilder-1"},"StreamBuilder"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"StreamBuilder(jobId)")," build instance\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> RStream<OUT> source(topicName, deserializer) ")," define source topic and deserialization method\uff1b")),(0,n.kt)("h2",{id:"rstream"},"RStream"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<K> GroupedStream<K, T> keyBy(selectAction)")," group the data by specific field\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<O> RStream<O> map(mapperAction)")," transform data one-to-one\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RStream<T> filter(predictor)")," filter the data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<VR> RStream<T> flatMap(mapper)"),"transform data one-to-many\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<T2> JoinedStream<T, T2> join(rightStream)")," Perform a two-stream join\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sink(topicName, serializer)")," output the results to a specific topic\uff1b")),(0,n.kt)("h2",{id:"groupedstream"},"GroupedStream"),(0,n.kt)("p",null,"Operations on data that has the same key"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> GroupedStream<K, Integer> count(selectAction)")," counts the number of data entries that contain a certain field."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> min(selectAction)")," calculates the minimum value of a certain field."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> max(selectAction)")," calculates the maximum value of a certain field."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, ? extends Number> sum(selectAction)")," calculates the sum of a certain field."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> filter(predictor)")," filters a certain field."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> GroupedStream<K, OUT> map(valueMapperAction)")," performs one-to-one data transformation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> GroupedStream<K, OUT> aggregate(accumulator)")," performs aggregate operations on the data, and supports second-order aggregation, such as adding data before a window triggers and calculating results when the window triggers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WindowStream<K, V> window(windowInfo)")," defines a window for the stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GroupedStream<K, V> addGraphNode(name, supplier)")," adds a custom operator to the stream processing topology at a low-level interface."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RStream<V> toRStream()")," converts to RStream, only converting in terms of interface and not affecting the data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sink(topicName, serializer)")," writes the results to a topic in a custom serialization format.")),(0,n.kt)("h2",{id:"windowstream"},"WindowStream"),(0,n.kt)("p",null,"Operations on data that has been divided into windows"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WindowStream<K, Integer> count()")," counts the number of data entries in the window."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WindowStream<K, V> filter(predictor)")," filters the data in the window."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> WindowStream<K, OUT> map(mapperAction)")," performs one-to-one data transformation on the data in the window."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> WindowStream<K, OUT> aggregate(aggregateAction)"),"  performs many-to-one data transformation on the data in the window."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<OUT> WindowStream<K, OUT> aggregate(accumulator)")," performs aggregate operations on the data in the window, and supports second-order aggregation, such as adding data before a window triggers and calculating results when the window triggers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"void sink(topicName, serializer)")," writes the results to a topic in a custom serialization format.")))}p.isMDXComponent=!0},50172:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/\u9886\u57df\u6a21\u578b-1-d0e1ee0b63e037d14c2ce13488a8eb65.png"},22487:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/\u9886\u57df\u6a21\u578b-2-4b2fc60e1b5ded400548aa3f25861dd8.png"}}]);