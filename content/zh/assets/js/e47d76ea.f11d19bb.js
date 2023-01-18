"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[56],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var c=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,c)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,c,o=function(e,n){if(null==e)return{};var t,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)t=r[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=c.createContext({}),i=function(e){var n=c.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=i(e.components);return c.createElement(s.Provider,{value:n},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},m=c.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=i(t),m=o,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||r;return t?c.createElement(d,a(a({ref:n},p),{},{components:t})):c.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[k]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<r;i++)a[i]=t[i];return c.createElement.apply(null,a)}return c.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var c=t(87462),o=(t(67294),t(3905));const r={},a="RocketMQ Connect\u5b9e\u62185",l={unversionedId:"\u6570\u636e\u96c6\u6210/32RocketMQ  Connect In Action5-ES",id:"\u6570\u636e\u96c6\u6210/32RocketMQ  Connect In Action5-ES",title:"RocketMQ Connect\u5b9e\u62185",description:"Elsticsearch Source  -  >RocketMQ Connect  ->  Elasticsearch Sink",source:"@site/docs/08-\u6570\u636e\u96c6\u6210/32RocketMQ  Connect In Action5-ES.md",sourceDirName:"08-\u6570\u636e\u96c6\u6210",slug:"/\u6570\u636e\u96c6\u6210/32RocketMQ  Connect In Action5-ES",permalink:"/zh/docs/4.x/\u6570\u636e\u96c6\u6210/32RocketMQ  Connect In Action5-ES",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/08-\u6570\u636e\u96c6\u6210/32RocketMQ  Connect In Action5-ES.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect\u5b9e\u62184",permalink:"/zh/docs/4.x/\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4"},next:{title:"\u5982\u4f55\u8d21\u732e",permalink:"/zh/docs/4.x/contributionGuide/29how-to-contribute"}},s={},i=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u542f\u52a8RocketMQ",id:"\u542f\u52a8rocketmq",level:3},{value:"\u542f\u52a8Connect",id:"\u542f\u52a8connect",level:3},{value:"Connector\u63d2\u4ef6\u7f16\u8bd1",id:"connector\u63d2\u4ef6\u7f16\u8bd1",level:4},{value:"\u542f\u52a8Connect Runtime",id:"\u542f\u52a8connect-runtime",level:4},{value:"Elasticsearch\u955c\u50cf",id:"elasticsearch\u955c\u50cf",level:3},{value:"Kibana\u955c\u50cf",id:"kibana\u955c\u50cf",level:3},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:3},{value:"\u542f\u52a8Connector",id:"\u542f\u52a8connector",level:2},{value:"\u542f\u52a8Elasticsearch source connector",id:"\u542f\u52a8elasticsearch-source-connector",level:3},{value:"\u542f\u52a8 Elasticsearch sink connector",id:"\u542f\u52a8-elasticsearch-sink-connector",level:3}],p={toc:i};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,c.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rocketmq-connect\u5b9e\u62185"},"RocketMQ Connect\u5b9e\u62185"),(0,o.kt)("p",null,"Elsticsearch Source  -  >RocketMQ Connect  ->  Elasticsearch Sink"),(0,o.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,o.kt)("h3",{id:"\u542f\u52a8rocketmq"},"\u542f\u52a8RocketMQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,o.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,o.kt)("li",{parentName:"ol"},"Maven 3.2.x\u6216\u4ee5\u4e0a\u7248\u672c;"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,o.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tips")," : ${ROCKETMQ_HOME} \u4f4d\u7f6e\u8bf4\u660e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"bin-release.zip \u7248\u672c\uff1a/rocketmq-all-4.9.4-bin-release"),(0,o.kt)("p",{parentName:"blockquote"},"source-release.zip \u7248\u672c\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,o.kt)("h3",{id:"\u542f\u52a8connect"},"\u542f\u52a8Connect"),(0,o.kt)("h4",{id:"connector\u63d2\u4ef6\u7f16\u8bd1"},"Connector\u63d2\u4ef6\u7f16\u8bd1"),(0,o.kt)("p",null,"Elasticsearch RocketMQ Connector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-elasticsearch/\n$ mvn clean package -Dmaven.test.skip=true\n")),(0,o.kt)("p",null,"\u5c06 Elasticsearch RocketMQ Connector \u7f16\u8bd1\u597d\u7684\u5305\u653e\u5165Runtime\u52a0\u8f7d\u76ee\u5f55\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p /usr/local/connector-plugins\ncp rocketmq-connect-elasticsearch/target/rocketmq-connect-elasticsearch-1.0.0-jar-with-dependencies.jar /usr/local/connector-plugins\n")),(0,o.kt)("h4",{id:"\u542f\u52a8connect-runtime"},"\u542f\u52a8Connect Runtime"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,o.kt)("p",null,"\u4fee\u6539\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"connect-standalone.conf")," \uff0c\u91cd\u70b9\u914d\u7f6e\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/tmp/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\naccessKey=rocketmq\nsecretKey=12345678\n\nautoCreateGroupEnable=false\nclusterName="DefaultCluster"\n\n# \u6838\u5fc3\u914d\u7f6e\uff0c\u5c06\u4e4b\u524d\u7f16\u8bd1\u597delasticsearch\u5305\u7684\u63d2\u4ef6\u76ee\u5f55\u914d\u7f6e\u5728\u6b64\uff1b\n# Source or sink connector jar file dir,The default value is rocketmq-connect-sample\npluginPaths=/usr/local/connector-plugins\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,o.kt)("h3",{id:"elasticsearch\u955c\u50cf"},"Elasticsearch\u955c\u50cf"),(0,o.kt)("p",null,"\u4f7f\u7528 docker \u642d\u5efa\u73af\u5883 Elasticsearch \u6570\u636e\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# starting a elasticsearch instance\ndocker run --name my-elasticsearch -p 9200:9200 -p 9300:9300 -e  "ES_JAVA_OPTS=-Xms1g -Xmx1g"  -d 74c2e0ec249c\n')),(0,o.kt)("h3",{id:"kibana\u955c\u50cf"},"Kibana\u955c\u50cf"),(0,o.kt)("p",null,"\u4f7f\u7528 docker \u642d\u5efa\u73af\u5883 Kibana"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --name my-kibana -e ELASTICSEARCH_URL=http://192.168.0.101:9200 -p 5601:5601 -d 5dca66b41943\n")),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,o.kt)("p",null,"\u901a\u8fc7 kibana Dev Tools \u521b\u5efa\u6d4b\u8bd5\u6570\u636e\uff1a\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/kibana/8.5/console-kibana.html#console-kibana"},"console-ibana"),";"),(0,o.kt)("p",null,"\u6e90\u7d22\u5f15\uff1aconnect_es"),(0,o.kt)("h2",{id:"\u542f\u52a8connector"},"\u542f\u52a8Connector"),(0,o.kt)("h3",{id:"\u542f\u52a8elasticsearch-source-connector"},"\u542f\u52a8Elasticsearch source connector"),(0,o.kt)("p",null,"\u540c\u6b65\u6e90\u7d22\u5f15\u6570\u636e\uff1aconnect_es\n\u4f5c\u7528\uff1a\u901a\u8fc7\u89e3\u6790 Elasticsearch \u6587\u6863\u6570\u636e\u5c01\u88c5\u6210\u901a\u7528\u7684ConnectRecord\u5bf9\u8c61\uff0c\u53d1\u9001\u7684RocketMQ Topic\u5f53\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/elasticsearchSourceConnector -d  \'{\n  "connector.class":"org.apache.rocketmq.connect.elasticsearch.connector.ElasticsearchSourceConnector",\n    "elasticsearchHost":"localhost",\n    "elasticsearchPort":9200,\n    "index":{\n        "connect_es": {\n            "primaryShards":1,\n            "id":1\n        }\n    },\n    "max.tasks":2,\n    "connect.topicname":"ConnectEsTopic",\n    "value.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n    "key.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,o.kt)("h3",{id:"\u542f\u52a8-elasticsearch-sink-connector"},"\u542f\u52a8 Elasticsearch sink connector"),(0,o.kt)("p",null,"\u4f5c\u7528\uff1a\u901a\u8fc7\u6d88\u8d39Topic\u4e2d\u7684\u6570\u636e\uff0c\u5199\u5165\u5230\u76ee\u6807\u7d22\u5f15\u5f53\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/ElasticsearchSinkConnector -d \'{\n  "connector.class":"org.apache.rocketmq.connect.elasticsearch.connector.ElasticsearchSinkConnector",\n    "elasticsearchHost":"localhost",\n    "elasticsearchPort":9202,\n    "max.tasks":2,\n    "connect.topicnames":"ConnectEsTopic",\n    "value.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n    "key.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n\n')),(0,o.kt)("p",null,"note\uff1a\u672c\u5730\u6d4b\u8bd5\u9700\u8981\u542f\u52a8\u4e24\u4e2a\u4e0d\u540c\u7aef\u53e3\u7684Elasticsearch\u8fdb\u7a0b"),(0,o.kt)("p",null,"\u4ee5\u4e0a\u4e24\u4e2aConnector\u4efb\u52a1\u521b\u5efa\u6210\u529f\u4ee5\u540e\n\u901a\u8fc7\u8bbf\u95eesink\u6307\u5b9a\u7684Elasticsearch\u662f\u5426\u5305\u542b\u6570\u636e"),(0,o.kt)("p",null,"\u5bf9\u6e90\u7d22\u5f15\u7684\u65b0\u589e\u6570\u636e\n\u5373\u53ef\u540c\u6b65\u5230\u76ee\u6807\u7d22\u5f15\u5f53\u4e2d"))}k.isMDXComponent=!0}}]);