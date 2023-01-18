"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const c={},a="RocketMQ Connect in Action 4",i={unversionedId:"\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4",id:"\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4",title:"RocketMQ Connect in Action 4",description:"SFTP Server(file data) -> RocketMQ Connect",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/08-\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4.md",sourceDirName:"08-\u6570\u636e\u96c6\u6210",slug:"/\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/08-\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect in Action 3",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3"},next:{title:"RocketMQ Connect in Action 5",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/32RocketMQ  Connect In Action5-ES"}},l={},s=[{value:"Preparation",id:"preparation",level:2},{value:"Start RocketMQ",id:"start-rocketmq",level:3},{value:"Start Connect",id:"start-connect",level:3},{value:"<strong>Compiling Connector Plugin</strong>",id:"compiling-connector-plugin",level:4},{value:"Start Connect Runtime",id:"start-connect-runtime",level:4},{value:"Set up an SFTP server",id:"set-up-an-sftp-server",level:3},{value:"Test data",id:"test-data",level:3},{value:"Start Connector",id:"start-connector",level:2},{value:"Start SFTP source connector",id:"start-sftp-source-connector",level:3},{value:"Start SFTP sink connector",id:"start-sftp-sink-connector",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-connect-in-action-4"},"RocketMQ Connect in Action 4"),(0,r.kt)("p",null,"SFTP Server(file data) -> RocketMQ Connect"),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("h3",{id:"start-rocketmq"},"Start RocketMQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,r.kt)("li",{parentName:"ol"},"Maven 3.2.x+;"),(0,r.kt)("li",{parentName:"ol"},"Start ",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips")," : ${ROCKETMQ_HOME} locational instructions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"bin-release.zip version\uff1a/rocketmq-all-4.9.4-bin-release"),(0,r.kt)("p",{parentName:"blockquote"},"source-release.zip version\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,r.kt)("h3",{id:"start-connect"},"Start Connect"),(0,r.kt)("h4",{id:"compiling-connector-plugin"},(0,r.kt)("strong",{parentName:"h4"},"Compiling Connector Plugin")),(0,r.kt)("p",null,"RocketMQ Connector SFTP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-sftp/\n$ mvn clean package -Dmaven.test.skip=true\n")),(0,r.kt)("p",null,"Move the compiled RocketMQ Connector SFTP package into the Runtime loading directory. The command is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p /usr/local/connector-plugins\ncp target/rocketmq-connect-sftp-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n")),(0,r.kt)("h4",{id:"start-connect-runtime"},"Start Connect Runtime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,r.kt)("p",null,"Modify the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"connect-standalone.conf"),", the main configuration is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/tmp/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\naccessKey=rocketmq\nsecretKey=12345678\n\nautoCreateGroupEnable=false\nclusterName="DefaultCluster"\n\n# Core configuration, configure the plugin directory that was previously compiled here.\n# Source or sink connector jar file dir,The default value is rocketmq-connect-sample\npluginPaths=/usr/local/connector-plugins\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,r.kt)("h3",{id:"set-up-an-sftp-server"},"Set up an SFTP server"),(0,r.kt)("p",null,"Use the built-in SFTP server on MAC OS."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.apple.com/zh-cn/guide/mac-help/mchlp1066/mac"},"Allow remote computers to access your Mac")),(0,r.kt)("h3",{id:"test-data"},"Test data"),(0,r.kt)("p",null,"Log in to the SFTP server and place a file called source.txt with specific contents in the user directory, for example: /path/to/."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"zhangsan|100000202211290001|20221129001|30000.00|2022-11-28|03:00:00|7.00\nlisi|100000202211290002|20221129002|40000.00|2022-11-28|04:00:00|9.00\nzhaowu|100000202211290003|20221129003|50000.00|2022-11-28|05:00:00|12.00\n")),(0,r.kt)("h2",{id:"start-connector"},"Start Connector"),(0,r.kt)("h3",{id:"start-sftp-source-connector"},"Start SFTP source connector"),(0,r.kt)("p",null,"Synchronize the SFTP file: source.txt\nPurpose: by logging into the SFTP server, parsing the file and encapsulating it into a generic ConnectRecord object, sending it to the RocketMQ Topic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --location "http://localhost:8082/connectors/SftpSourceConnector" --http1.1 \\\n    -H "Host: localhost:8082" \\\n    -H "Content-Type: application/json" \\\n    -d "{\n          \\"connector.class\\": \\"org.apache.rocketmq.connect.http.sink.SftpSourceConnector\\",\n          \\"host\\": \\"127.0.0.1\\",\n          \\"port\\": 22,\n          \\"username\\": \\"wencheng\\",\n          \\"password\\": \\"1617\\",\n          \\"filePath\\": \\"/Users/wencheng/Documents/source.txt\\",\n          \\"connect.topicname\\": \\"sftpTopic\\",\n          \\"fieldSeparator\\": \\"|\\",\n          \\"fieldSchema\\": \\"username|idCardNo|orderNo|orderAmount|trxDate|trxTime|profit\\"\n        }"\n')),(0,r.kt)("p",null,"After running the above commands, the file data on the SFTP server will be organized into data in the specified format, and written to MQ. Afterwards, it can be consumed by the sink connector or other business systems."),(0,r.kt)("h3",{id:"start-sftp-sink-connector"},"Start SFTP sink connector"),(0,r.kt)("p",null,"Purpose: by consuming the data in the Topic, use the SFTP protocol to write to the target file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --location "http://localhost:8082/connectors/SftpSinkConnector" --http1.1 \\\n    -H "Host: localhost:8082" \\\n    -H "Content-Type: application/json" \\\n    -d "{\n          \\"connector.class\\": \\"org.apache.rocketmq.connect.http.sink.SftpSinkConnector\\",\n          \\"host\\": \\"127.0.0.1\\",\n          \\"port\\": 22,\n          \\"username\\": \\"wencheng\\",\n          \\"password\\": \\"1617\\",\n          \\"filePath\\": \\"/Users/wencheng/Documents/sink.txt\\",\n          \\"connect.topicnames\\": \\"sftpTopic\\",\n          \\"fieldSeparator\\": \\"|\\",\n          \\"fieldSchema\\": \\"username|idCardNo|orderNo|orderAmount|trxDate|trxTime|profit\\"\n        }"\n')))}u.isMDXComponent=!0}}]);