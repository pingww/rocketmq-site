"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2256],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,g=c["".concat(i,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(g,p(p({ref:t},k),{},{components:a})):r.createElement(g,p({ref:t},k))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28558:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},p="\u53d1\u5e03\u624b\u518c",o={unversionedId:"contributionGuide/32release-manual",id:"version-5.0/contributionGuide/32release-manual",title:"\u53d1\u5e03\u624b\u518c",description:"1. \u524d\u8a00",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/09-contributionGuide/32release-manual.md",sourceDirName:"09-contributionGuide",slug:"/contributionGuide/32release-manual",permalink:"/docs/contributionGuide/32release-manual",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/09-contributionGuide/32release-manual.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"GitHub Submit PR",permalink:"/docs/contributionGuide/31pull-request"}},i={},s=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"1.1 Apache \u7248\u672c\u53d1\u5e03\u6587\u6863",id:"11-apache-\u7248\u672c\u53d1\u5e03\u6587\u6863",level:4},{value:"1.2 PGP \u7b7e\u540d",id:"12-pgp-\u7b7e\u540d",level:4},{value:"1.3 POM \u914d\u7f6e",id:"13-pom-\u914d\u7f6e",level:4},{value:"1.4 \u5904\u7406 issues",id:"14-\u5904\u7406-issues",level:4},{value:"1.5 \u53d1\u5e03 Release Notes",id:"15-\u53d1\u5e03-release-notes",level:4},{value:"2.\u6784\u5efa Source Release",id:"2\u6784\u5efa-source-release",level:2},{value:"2.1 \u68c0\u67e5 RocketMQ  \u7248\u672c",id:"21-\u68c0\u67e5-rocketmq--\u7248\u672c",level:4},{value:"2.2 \u6682\u5b58\u81f3 ASF Nexus \u4ed3\u5e93",id:"22-\u6682\u5b58\u81f3-asf-nexus-\u4ed3\u5e93",level:4},{value:"2.3 rc \u7248\u672c\u6587\u4ef6",id:"23-rc-\u7248\u672c\u6587\u4ef6",level:4},{value:"2.4 \u56de\u6eda\u5e76\u91cd\u8bd5",id:"24-\u56de\u6eda\u5e76\u91cd\u8bd5",level:4},{value:"3.\u6784\u5efa binary release",id:"3\u6784\u5efa-binary-release",level:2},{value:"4. \u7248\u672c\u9a8c\u8bc1",id:"4-\u7248\u672c\u9a8c\u8bc1",level:2},{value:"4.1 binary release \u9a8c\u8bc1\u6e05\u5355",id:"41-binary-release-\u9a8c\u8bc1\u6e05\u5355",level:4},{value:"4.2 source release \u9a8c\u8bc1\u6e05\u5355",id:"42-source-release-\u9a8c\u8bc1\u6e05\u5355",level:4},{value:"4.3 \u9a8c\u8bc1\u5de5\u5177",id:"43-\u9a8c\u8bc1\u5de5\u5177",level:4},{value:"5. \u5173\u95ed staging repo",id:"5-\u5173\u95ed-staging-repo",level:2},{value:"6. \u7248\u672c\u9009\u4e3e",id:"6-\u7248\u672c\u9009\u4e3e",level:2},{value:"6.1 \u793e\u533a\u6295\u7968",id:"61-\u793e\u533a\u6295\u7968",level:3},{value:"6.2 \u7ed3\u679c\u516c\u793a",id:"62-\u7ed3\u679c\u516c\u793a",level:3},{value:"7. \u7248\u672c\u53d1\u5e03",id:"7-\u7248\u672c\u53d1\u5e03",level:2},{value:"8. \u7248\u672c\u516c\u793a",id:"8-\u7248\u672c\u516c\u793a",level:2}],k={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u53d1\u5e03\u624b\u518c"},"\u53d1\u5e03\u624b\u518c"),(0,n.kt)("h2",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,n.kt)("h4",{id:"11-apache-\u7248\u672c\u53d1\u5e03\u6587\u6863"},"1.1 Apache \u7248\u672c\u53d1\u5e03\u6587\u6863"),(0,n.kt)("p",null,"\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\uff0c\u4e86\u89e3 ASF \u7248\u672c\u53d1\u5e03\u6d41\u7a0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/release-publishing"},"Apache Release Guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/release.html"},"Apache Release Policy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/publishing-maven-artifacts.html"},"Maven Release Info"))),(0,n.kt)("h4",{id:"12-pgp-\u7b7e\u540d"},"1.2 PGP \u7b7e\u540d"),(0,n.kt)("p",null,"\u9075\u5faa Apache \u7248\u672c\u53d1\u5e03\u6307\u5357\uff0c\u5bf9\u53d1\u5e03\u7248\u672c\u7b7e\u540d\uff0c\u7528\u6237\u4e5f\u53ef\u636e\u6b64\u5224\u65ad\u4e0b\u8f7d\u7684\u7248\u672c\u662f\u5426\u88ab\u7be1\u6539\u3002"),(0,n.kt)("p",null,"\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"p"},"pgp")," \u5bc6\u94a5\u7528\u4e8e\u7248\u672c\u7b7e\u540d\uff0c\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"p"},"\\<your Apache ID",">","@apache.org")," \u4f5c\u4e3a\u5bc6\u94a5 USER-ID"),(0,n.kt)("p",null,"\u8be6\u60c5\u53ef\u53c2\u8003  ",(0,n.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-signing"},"Apache Releases Signing documentation"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/dev/openpgp.html"},"Cryptography with OpenPGP")),(0,n.kt)("p",null,"\u751f\u6210\u5bc6\u94a5\u7684\u7b80\u8981\u6d41\u7a0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"gpg --gen-key")," \u751f\u6210\u4e00\u4e2a\u65b0\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"gpg")," \u5bc6\u94a5, \u8bbe\u7f6e\u5bc6\u94a5\u957f\u5ea6\u4e3a 4096 \u5e76\u8bbe\u7f6e\u6c38\u4e0d\u8fc7\u671f"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"gpg --keyserver keys.openpgp.org --send-key <your key id>")," \u4e0a\u4f20\u5bc6\u94a5\u5230\u516c\u94a5\u670d\u52a1\u5668"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"gpg --armor --export <your key id> >> gpgapachekey.txt")," \u5bfc\u51fa\u516c\u94a5\u5230\u6587\u672c\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u83b7\u5f97\u5176\u4ed6 committer \u7b7e\u540d\u7684\u5bc6\u94a5 ( \u53ef\u9009 )"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u751f\u6210\u7684\u5bc6\u94a5\u6dfb\u52a0\u5230 ",(0,n.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/KEYS"},"KEYS file")," (\u7531 release manager \u4e0a\u4f20\u81f3 svn \u4ed3\u5e93)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tips:")," \u9700\u8981\u8bbe\u7f6e\u9ed8\u8ba4\u516c\u94a5, \u82e5\u6709\u591a\u4e2a\u516c\u94a5\uff0c\u8bf7\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.gnupg/gpg.conf")," "),(0,n.kt)("p",null,"\u53c2\u8003\u793a\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@localhost ~]# gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\n...\n# \u5bc6\u94a5\u751f\u6210\u76ee\u5f55\ngpg: directory `/root/.gnupg' created\ngpg: new configuration file `/root/.gnupg/gpg.conf' created\ngpg: WARNING: options in `/root/.gnupg/gpg.conf' are not yet active during this run\ngpg: keyring `/root/.gnupg/secring.gpg' created\ngpg: keyring `/root/.gnupg/pubring.gpg' created\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection?\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n# \u8bbe\u7f6e USER-ID\nReal name: rocketmq\nEmail address: rocketmq@apache.org\nComment: rocketmq\nYou selected this USER-ID:\n    \"rocketmq (rocketmq) <rocketmq@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key.\n\n...\ngpg: /root/.gnupg/trustdb.gpg: trustdb created\ngpg: key 7DE280AF marked as ultimately trusted\npublic and secret key created and signed.\n\ngpg: checking the trustdb\ngpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model\ngpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u\npub   4096R/7DE280AF 2022-07-05\n      Key fingerprint = 421D C10E 9CC3 D261 9F89  C777 86BB 17AA 7DE2 80AF\nuid                  rocketmq (rocketmq) <rocketmq@apache.org>\nsub   4096R/65B9828A 2022-07-05\n")),(0,n.kt)("p",null,"\u751f\u6210\u7684\u516c\u94a5\u548c\u79c1\u94a5\u5730\u5740\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg: keyring `/root/.gnupg/secring.gpg' created\ngpg: keyring `/root/.gnupg/pubring.gpg' created\n")),(0,n.kt)("p",null,"\u5c06\u751f\u6210\u7684\u516c\u94a5\u548c\u79c1\u94a5\u8f6c\u5316\u4e3a ASCII \u5f62\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --armor --output /root/gpgtest/public-key.txt --export 7DE280AF\ngpg --armor --output /root/gpgtest/private-key.txt --export-secret-keys 7DE280AF\n")),(0,n.kt)("p",null,"\u67e5\u770b\u5bc6\u94a5\u5217\u8868\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@localhost ~]# gpg --list-keys\n/root/.gnupg/pubring.gpg\n------------------------\npub   4096R/7DE280AF 2022-07-05\nuid                  rocketmq (rocketmq) <rocketmq@apache.org>\nsub   4096R/65B9828A 2022-07-05\n")),(0,n.kt)("p",null,"\u4e0a\u4f20\u516c\u94a5\u5230\u516c\u94a5\u670d\u52a1\u5668"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"[root@localhost gpgtest]# gpg --keyserver keys.openpgp.org --send-key 7DE280AF\ngpg: sending key 7DE280AF to hkp server keys.openpgp.org\n")),(0,n.kt)("h4",{id:"13-pom-\u914d\u7f6e"},"1.3 POM \u914d\u7f6e"),(0,n.kt)("p",null,"\u914d\u7f6e POM \u6587\u4ef6\uff0c\u4ee5\u4fbf\u5c06\u7248\u672c\u90e8\u7f72\u5230 ASF Nexus \u4ed3\u5e93\u3002"),(0,n.kt)("p",null,"\u2460 \u6dfb\u52a0 Apache POM \u7ee7\u627f\u9ed8\u8ba4\u8bbe\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-XML"},"<parent>\n    <groupId>org.apache</groupId>\n    <artifactId>apache</artifactId>\n    <version>XX</version>\n</parent>\n")),(0,n.kt)("p",null,"\u2461 Maven \u914d\u7f6e\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"p"},"settings.xml")," \u4e2d\u6dfb\u52a0\u5bc6\u94a5\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<settings>\n    <profiles>\n        <profile>\n            <id>signed_release</id>\n            <properties>\n                <mavenExecutorId>forked-path</mavenExecutorId>\n                <gpg.keyname>yourKeyName</gpg.keyname>\n                <deploy.url>https://dist.apache.org/repos/dist/dev/rocketmq/</deploy.url>\n            </properties>\n        </profile>\n    </profiles>\n    <servers>\n        \x3c!-- To publish a snapshot of some part of Maven --\x3e\n        <server>\n            <id>apache.snapshots.https</id>\n            <username>yourApacheID</username>\n            \x3c!-- Use the password encryption by maven --\x3e\n            <password>yourApachePassword</password>\n        </server>\n        \x3c!-- To stage a release of some part of Maven --\x3e\n        <server>\n            <id>apache.releases.https</id>\n            <username>yourApacheID</username>\n            <password>yourApachePassword</password>\n        </server>\n        <server>\n            <id>gpg.passphrase</id>\n            <passphrase>yourKeyPassword</passphrase>\n        </server>\n    </servers>\n</settings>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tips:")," \u63a8\u8350\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"http://maven.apache.org/guides/mini/guide-encryption.html"},"Maven's password encryption capabilities")," \u52a0\u5bc6 ",(0,n.kt)("inlineCode",{parentName:"p"},"gpg.passphrase")," "),(0,n.kt)("p",null,"\u2462 \u6784\u5efa Artifacts \u5e76\u7b7e\u540d"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean install -Papache-release\n")),(0,n.kt)("h4",{id:"14-\u5904\u7406-issues"},"1.4 \u5904\u7406 issues"),(0,n.kt)("p",null,"\u89e3\u51b3\u4e0e\u8be5\u53d1\u5e03\u7248\u672c\u76f8\u5173\u7684 JIRA issues \u548c GitHub issues"),(0,n.kt)("p",null,"\u68c0\u67e5 MQVsersion \u662f\u5426\u4e0e\u53d1\u5e03\u7248\u672c\u4e00\u81f4\u3002"),(0,n.kt)("h4",{id:"15-\u53d1\u5e03-release-notes"},"1.5 \u53d1\u5e03 Release Notes"),(0,n.kt)("p",null,"\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/ROCKETMQ/"},"RocketMQ JIRA")," \u751f\u6210 Release Notes\uff0c\u63a8\u9001\u5230 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-site"},"rocketmq-site"),", \u5e76\u6dfb\u52a0\u94fe\u63a5\u81f3\u7248\u672c\u9009\u4e3e\u90ae\u4ef6\u3002"),(0,n.kt)("h2",{id:"2\u6784\u5efa-source-release"},"2.\u6784\u5efa Source Release"),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://maven.apache.org/maven-release/maven-release-plugin/"},"Maven Release plugin")," \u7248\u672c\u53d1\u5e03\u63d2\u4ef6\uff0c\u53d1\u5e03 Artifact \u81f3 ASF Nexus \u6682\u5b58\u5e93\uff0c\u5b8c\u6210\u7248\u672c\u9a8c\u8bc1\u548c\u7248\u672c\u6295\u7968\u540e\uff0c\u62f7\u8d1d\u81f3 Apache SVN \u7248\u672c\u5e93\u3002"),(0,n.kt)("h4",{id:"21-\u68c0\u67e5-rocketmq--\u7248\u672c"},"2.1 \u68c0\u67e5 RocketMQ  \u7248\u672c"),(0,n.kt)("p",null,"\u786e\u8ba4 MQVersion \u7248\u672c\uff0c\u82e5\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},"release-4.5.0")," \u5f62\u5f0f\u4e0d\u7b26\u6216\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u4fee\u6539\u81f3\u6b63\u786e\u5e76\u63a8\u9001\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"develop  "),"\u5206\u652f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public static final int CURRENT_VERSION = Version.V4_5_0.ordinal();\n")),(0,n.kt)("h4",{id:"22-\u6682\u5b58\u81f3-asf-nexus-\u4ed3\u5e93"},"2.2 \u6682\u5b58\u81f3 ASF Nexus \u4ed3\u5e93"),(0,n.kt)("p",null,"\u5207\u6362\u81f3 ",(0,n.kt)("inlineCode",{parentName:"p"},"develop")," \u5206\u652f\uff0c\u786e\u8ba4\u4e0e\u8be5\u7248\u672c\u76f8\u5173\u7684 GitHub PRs \u5747\u5df2\u5408\u5e76\u3002"),(0,n.kt)("p",null,"\u2460 \u914d\u7f6e pom.xml \u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<scm>\n    <url>git@github.com:apache/rocketmq.git</url>\n    <connection>scm:git:git@github.com:apache/rocketmq.git</connection>\n    <developerConnection>scm:git:git@github.com:apache/rocketmq.git</developerConnection>\n    <tag>rocketmq-all-x.x.x</tag>\n</scm>\n")),(0,n.kt)("p",null,"\u2461 maven release plugin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mvn release:clean\nmvn release:prepare\nmvn release:perform\n")),(0,n.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u6d41\u7a0b\u5c06\u751f\u6210\u7684 Artifacts \u653e\u5165\u6682\u5b58\u5e93\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"mvn clean release:clean"),"\uff1a\u6e05\u9664\u6784\u5efa\u5931\u8d25\u53ca\u4e22\u5f03\u7684\u7248\u672c"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},'mvn release:prepare -Psigned_release -Darguments="-DskipTests"'),"\uff1a\u6839\u636e ",(0,n.kt)("inlineCode",{parentName:"li"},"SCM")," \u5c5e\u6027\u66f4\u65b0 tag"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},'mvn -Psigned_release release:perform -Darguments="-DskipTests"'),"\uff1a\u5c06\u751f\u6210 artifacts \u6682\u5b58\u5230 ",(0,n.kt)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"Nexus repo"),"\u3002\u53ef\u6dfb\u52a0 ",(0,n.kt)("inlineCode",{parentName:"li"},"-DdryRun=true")," \u53c2\u6570\u6267\u884c\u9884\u6f14")),(0,n.kt)("p",null,"\u6267\u884c\u5b8c\u4e0a\u8ff0\u6d41\u7a0b\u53ef\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"Nexus staging repo")," \u6216\u672c\u5730\u5206\u652f\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," \u76ee\u5f55\u4e0b\u627e\u5230\u9884\u53d1\u5e03\u7248\u672c\u7684 Artifacts "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tips:")," \u53ea\u53d1\u5e03\u6e90\u7801\u7248\u672c\uff0c\u4ec5\u9700\u8981\u4fdd\u7559\u6e90\u7801\u548c\u76f8\u5173 jar \u6587\u4ef6\uff0cNexus GUI \u4e2d\u53f3\u952e ",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," \u5176\u4f59 artifact"),(0,n.kt)("h4",{id:"23-rc-\u7248\u672c\u6587\u4ef6"},"2.3 rc \u7248\u672c\u6587\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9884\u53d1\u5e03\u7248\u672c\u6295\u7968\u901a\u8fc7\u524d\u4f1a\u6682\u5b58\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/rocketmq/"},"/dev/rocketmq")," \uff0c\u5b58\u653e\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"x.x.x-rcx/")," \u76ee\u5f55\u4e0b\uff0c\u9700\u8981\u63d0\u4f9b\u7684\u6587\u4ef6\u5982\u4e0b\uff1a")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-bin-release.zip  "),(0,n.kt)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-bin-release.zip.asc  "),(0,n.kt)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-bin-release.zip.sha512  "),(0,n.kt)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-source-release.zip  "),(0,n.kt)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-source-release.zip.asc  "),(0,n.kt)("p",{parentName:"blockquote"},"rocketmq-all-x1.x2.x3-source-release.zip.sha512  ")),(0,n.kt)("p",null,"\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"gpg")," \u6307\u4ee4\u751f\u6210\u7b7e\u540d\u6587\u4ef6\u548c\u9a8c\u8bc1\u6587\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 ",(0,n.kt)("inlineCode",{parentName:"li"},"asc")," \u6587\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"gpg --clearsign rocketmq-all-x1.x2.x3-bin-release.zip\ngpg --clearsign rocketmq-all-x1.x2.x3-source-release.zip\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u751f\u6210 ",(0,n.kt)("inlineCode",{parentName:"li"},"sha512")," \u6587\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"gpg --print-md SHA512 rocketmq-all-x1.x2.x3-bin-release.zip > rocketmq-all-x1.x2.x3-bin-release.zip.sha512\ngpg --print-md SHA512 rocketmq-all-x1.x2.x3-source-release.zip >  rocketmq-all-x1.x2.x3-source-release.zip.sha512\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tips:")," \u6e90\u7801\u7248\u672c\u548c\u4e8c\u8fdb\u5236\u7248\u672c\u5e94\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"rocketmq-all")," \u5f00\u5934\uff0c\u4ee5\u4fbf\u4f7f\u7528 Docker \u6784\u5efa ",(0,n.kt)("a",{target:"_blank",href:"https://github.com/apache/rocketmq-docker/blob/a2672f62cc5171263ffc856ab5657291efba1912/image-build/Dockerfile-centos#L58-L59"},"RocketMQ Docker Build")),(0,n.kt)("h4",{id:"24-\u56de\u6eda\u5e76\u91cd\u8bd5"},"2.4 \u56de\u6eda\u5e76\u91cd\u8bd5"),(0,n.kt)("p",null,"\u82e5\u6267\u884c staging \u8fc7\u7a0b\u51fa\u73b0\u95ee\u9898\uff0c\u6309\u7167\u5982\u4e0b\u6d41\u7a0b\u8fdb\u884c\u56de\u6eda\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664\u5728 2.2 \u6b65\u9aa4\u4e2d\u521b\u5efa\u7684 tag"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5217\u51fa\u6240\u6709 tag \uff0c\u5e76\u627e\u5230\u6700\u65b0\u521b\u5efa\u7684")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git tag -ln\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664\u672c\u5730\u4ed3\u5e93\u7684 tag, ")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git tag -d rocketmq-all-x1.x2.x3\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63a8\u9001\u66f4\u65b0\u81f3 GitHub")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git push origin :refs/tags/rocketmq-all-x1.x2.x3\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 2.2 \u6b65\u9aa4\u4e2d\u5f00\u53d1\u5206\u652f\u7684\u63d0\u4ea4\u8bb0\u5f55"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5217\u51fa git \u65e5\u5fd7")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git log\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u627e\u5230\u6700\u65b0\u7684\u63d0\u4ea4\u8bb0\u5f55\uff0c\u6807\u6ce8\u7c7b\u4f3c\u5982\u4e0b\uff1a")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"des1: ","[maven-release-plugin]"," prepare release rocketmq-all-4.9.2]  "),(0,n.kt)("p",{parentName:"blockquote"},"des2: ","[maven-release-plugin]"," prepare for next development iteration]")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5220\u9664 commits")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git reset --hard commit-id\ngit push origin HEAD --force\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5220\u9664 ",(0,n.kt)("a",{parentName:"p",href:"https://repository.apache.org/#welcome"},"Nexus")," \u4e2d\u5f85\u56de\u9000\u7248\u672c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u56de\u9000\u81f3\u6b65\u9aa4 2.1 \u91cd\u505a"))),(0,n.kt)("h2",{id:"3\u6784\u5efa-binary-release"},"3.\u6784\u5efa binary release"),(0,n.kt)("p",null,"\u4e8c\u8fdb\u5236\u7248\u672c\u548c\u6e90\u7801\u7248\u672c\u4f7f\u7528\u76f8\u540c\u7684\u4ee3\u7801\u5206\u652f\u6784\u5efa\uff0c\u9700\u8981\u6ce8\u610f\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u3002"),(0,n.kt)("p",null,"\u6709\u4e9b\u4f9d\u8d56\uff0c\u6bd4\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"netty tc-native")," \u5bf9\u64cd\u4f5c\u7cfb\u7edf\u654f\u611f\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd checkout \u81f3\u9884\u53d1\u5e03\u7248\u672c\u5206\u652f"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6240\u6709\u5355\u5143\u6d4b\u8bd5\u5747\u53ef\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"mvn clean install")),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6240\u6709\u96c6\u6210\u6d4b\u8bd5\u5747\u53ef\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"mvn clean install -Pit-test"))),(0,n.kt)("p",null,"\u6210\u529f\u6784\u5efa\u540e\uff0c\u540c\u6837\u9700\u8981\u751f\u6210 .asc \u6587\u4ef6\u548c .sha512 \u6587\u4ef6\uff0c\u5b8c\u6210\u9a8c\u8bc1\u548c\u6295\u7968\u540e\uff0c\u6700\u7ec8\u5e76\u62f7\u8d1d\u5230 ",(0,n.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/rocketmq/"},"svn")," \u4ed3\u5e93\u3002"),(0,n.kt)("h2",{id:"4-\u7248\u672c\u9a8c\u8bc1"},"4. \u7248\u672c\u9a8c\u8bc1"),(0,n.kt)("h4",{id:"41-binary-release-\u9a8c\u8bc1\u6e05\u5355"},"4.1 binary release \u9a8c\u8bc1\u6e05\u5355"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u6784\u5efa\u4f9d\u8d56\u5305\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0cnetty-tcnative \u64cd\u4f5c\u7cfb\u7edf\u654f\u611f"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u8bb8\u53ef\u8bc1\u4e3a Apache V2   "),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u5f15\u5165\u4e86\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u9700\u8981\u66f4\u65b0 NOTICE"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u538b\u7f29\u6587\u4ef6\u68c0\u67e5\u7248\u672c\u662f\u5426\u6b63\u786e"),(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1 ASC \u7b7e\u540d, SHA512 \u6458\u8981"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c Quick-Start \u542f\u52a8 nameserver \u548c broker"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c clusterList \u547d\u4ee4\u68c0\u67e5\u7248\u672c\u662f\u5426\u6b63\u786e"),(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6ca1\u6709 nohup.out \u6587\u4ef6")),(0,n.kt)("h4",{id:"42-source-release-\u9a8c\u8bc1\u6e05\u5355"},"4.2 source release \u9a8c\u8bc1\u6e05\u5355"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u8bb8\u53ef\u8bc1\u4e3a Apache V2   "),(0,n.kt)("li",{parentName:"ul"},"\u82e5\u5f15\u5165\u4e86\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u9700\u8981\u66f4\u65b0 NOTICE"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u538b\u7f29\u6587\u4ef6\u68c0\u67e5\u7248\u672c\u662f\u5426\u6b63\u786e"),(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1 ASC \u7b7e\u540d, SHA512 \u6458\u8981"),(0,n.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u6e90\u7801\uff0c\u8fd0\u884c Quick-Start \u542f\u52a8 nameserver \u548c broker"),(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c clusterList \u547d\u4ee4\u5224\u65ad\u7248\u672c\u662f\u5426\u6b63\u786e")),(0,n.kt)("h4",{id:"43-\u9a8c\u8bc1\u5de5\u5177"},"4.3 \u9a8c\u8bc1\u5de5\u5177"),(0,n.kt)("p",null,"\u6309\u7167\u4e0b\u9762\u7684\u6d41\u7a0b\u9a8c\u8bc1 GPG \u7b7e\u540d\u3001SHA512 \u6458\u8981"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u53d1\u5e03\u7248\u672c\u7684\u4f9d\u8d56\u5305, ",(0,n.kt)("inlineCode",{parentName:"p"},".asc")," \u6587\u4ef6\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},".sha512")," \u6587\u4ef6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728 Unix \u7cfb\u7edf\u4e0a\u6267\u884c\u5982\u4e0b\u6307\u4ee4\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"for file in `find . -type f -iname '*.asc'`\ndo\n    gpg --verify ${file} \ndone\n")),(0,n.kt)("p",{parentName:"li"},"or"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify rocketmq-all-%version-number%-source-release.zip.asc rocketmq-all-%version-number%-bin-release.zip\n")))),(0,n.kt)("p",null,"\u51fa\u73b0 ",(0,n.kt)("inlineCode",{parentName:"p"},"Good signature")," \u8bf4\u660e\u7b7e\u540d\u6b63\u786e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"gpg: Good signature from ... gpg: Signature made ...\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6839\u636e SHA512 \u8fdb\u884c\u7248\u672c\u4e00\u81f4\u6027\u9a8c\u8bc1"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --print-md SHA512 rocketmq-all-%version-number%-source-release.zip \ngpg --print-md SHA512 rocketmq-all-%version-number%-bin-release.zip \n")))),(0,n.kt)("h2",{id:"5-\u5173\u95ed-staging-repo"},"5. \u5173\u95ed staging repo"),(0,n.kt)("p",null,"\u9884\u53d1\u5e03\u7248\u672c\u5b8c\u6210\u6e05\u5355\u9a8c\u8bc1\u540e, \u5173\u95ed Nexus \u6682\u5b58\u5e93\uff0c\u51c6\u5907\u8fdb\u884c\u7248\u672c\u9009\u4e3e\u3002"),(0,n.kt)("p",null,"\u9009\u62e9 Nexus \u4e0a\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"orgapacherocketmq-XXX")," \u5f85\u53d1\u5e03\u7248\u672c\uff0c\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Close")," \u56fe\u6807\uff0c\u5173\u95ed\u6682\u5b58\u5e93\u3002"),(0,n.kt)("p",null,"\u5173\u95ed\u4e4b\u524d\uff0cNexus \u4f1a\u8fdb\u884c\u4e00\u4e9b\u7cfb\u5217\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u6587\u672c\u6821\u9a8c\u3002"),(0,n.kt)("p",null,"\u6821\u9a8c\u901a\u8fc7, Nexus \u4f1a\u5173\u95ed\u4ed3\u5e93\u5e76\u63d0\u4f9b\u6682\u5b58\u5e93URL\uff0c\u5728\u9009\u4e3e\u90ae\u4ef6\u4e2d\u6807\u6ce8\u4e3a\uff1aThe staging repo"),(0,n.kt)("p",null,"\u82e5\u6821\u9a8c\u5931\u8d25\uff0c\u4fee\u590d issues \u56de\u6eda\u5e76\u91cd\u65b0\u6267\u884c\u7248\u672c\u53d1\u5e03\u6d41\u7a0b\u3002"),(0,n.kt)("p",null,"\u82e5\u4ee5\u4e0a\u5de5\u4f5c\u5747\u5df2\u5b8c\u5907\uff0c\u4f7f\u7528 SVN \u62f7\u8d1d\u81f3 ",(0,n.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/rocketmq/"},"/dev/rocketmq")," Apache \u8fdc\u7a0b\u4ed3\u5e93\u3002"),(0,n.kt)("h2",{id:"6-\u7248\u672c\u9009\u4e3e"},"6. \u7248\u672c\u9009\u4e3e"),(0,n.kt)("p",null,"RocketMQ \u793e\u533a\u901a\u8fc7 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:dev@rocketmq.apache.org"},"dev@rocketmq.apache.org"))," \u90ae\u4ef6\u5217\u8868\u8fdb\u884c\u7248\u672c\u9009\u4e3e\u3002"),(0,n.kt)("p",null,"\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/foundation/voting.html"},"voting process"),"\uff0c\u4e86\u89e3Apache \u6295\u7968\u6d41\u7a0b\u3002"),(0,n.kt)("h3",{id:"61-\u793e\u533a\u6295\u7968"},"6.1 \u793e\u533a\u6295\u7968"),(0,n.kt)("p",null,"\u90ae\u4ef6\u5217\u8868\uff1a",(0,n.kt)("a",{parentName:"p",href:"mailto:dev@rocketmq.apache.org"},"dev list")),(0,n.kt)("p",null,"\u90ae\u4ef6\u4e3b\u9898\uff1a",(0,n.kt)("strong",{parentName:"p"},"[VOTE]",": Release Apache RocketMQ \\<release-version",">"," RC\\<RC Number",">")," "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hello RocketMQ Community,  "),(0,n.kt)("p",{parentName:"blockquote"},"This is the vote for \\<release version",">"," of Apache RocketMQ.  "),(0,n.kt)("p",{parentName:"blockquote"},"${A brief introduction to RocketMQ and the features of this release.}"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"The artifacts:"),"  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/rocketmq/$%7Brelease"},"https://dist.apache.org/repos/dist/dev/rocketmq/${release")," version}"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"The staging repo:"),"  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://repository.apache.org/content/repositories/orgapacherocketmq-XXX/"},"https://repository.apache.org/content/repositories/orgapacherocketmq-XXX/")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Git tag for the release:"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"\\<link to the tag of GitHub repo",">","  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Hash for the release tag:"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"\\<Hash value of the release tag",">","  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Release Notes:"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"\\<insert link to the rocketmq release notes",">","  "),(0,n.kt)("p",{parentName:"blockquote"},"The artifacts have been signed with Key : \\<ID of signing key",">",", which can be found in the keys file:  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/rocketmq/KEYS"},"https://dist.apache.org/repos/dist/dev/rocketmq/KEYS"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"The vote will be open for at least 72 hours or until necessary number of votes are reached.  "),(0,n.kt)("p",{parentName:"blockquote"},"Please vote accordingly:  "),(0,n.kt)("p",{parentName:"blockquote"},"[ ]"," +1  approve    "),(0,n.kt)("p",{parentName:"blockquote"},"[ ]"," +0  no opinion    "),(0,n.kt)("p",{parentName:"blockquote"},"[ ]"," -1  disapprove with the reason    "),(0,n.kt)("p",{parentName:"blockquote"},"Thanks,  "),(0,n.kt)("p",{parentName:"blockquote"},"The Apache RocketMQ Team  ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tips:")," Hash for the release tag:  \u53ef\u4f7f\u7528 commit id "),(0,n.kt)("h3",{id:"62-\u7ed3\u679c\u516c\u793a"},"6.2 \u7ed3\u679c\u516c\u793a"),(0,n.kt)("p",null,"72 \u5c0f\u65f6\u540e\uff0c\u82e5\u81f3\u5c11\u6709 3 \u7968\u901a\u8fc7\u800c\u6ca1\u6709\u53cd\u5bf9\u7968\uff0c\u5219\u53d1\u9001\u5982\u4e0b\u90ae\u4ef6\u5e86\u795d\u7248\u672c\u53d1\u5e03"),(0,n.kt)("p",null,"\u90ae\u4ef6\u4e3b\u9898\uff1a",(0,n.kt)("strong",{parentName:"p"},"[RESULT][VOTE]",": Release Apache RocketMQ \\<release-version",">"," RC\\<RC Number",">")," "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hello RocketMQ Community,  "),(0,n.kt)("p",{parentName:"blockquote"},"The Apache RocketMQ ",(0,n.kt)("inlineCode",{parentName:"p"},"<release version>")," vote is now closed and has passed with ","[number]"," binding +1s, ","[number]"," non-binding +1s and no 0 or -1:  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Binding votes +1s:"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"User Name (Apache ID)    "),(0,n.kt)("p",{parentName:"blockquote"},"User Name (Apache ID)    "),(0,n.kt)("p",{parentName:"blockquote"},"User Name (Apache ID)    "),(0,n.kt)("p",{parentName:"blockquote"},"...."),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Non-binding votes +1s:"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"User Name (Apache ID) "),(0,n.kt)("p",{parentName:"blockquote"},"....  "),(0,n.kt)("p",{parentName:"blockquote"},"The release will be published soon.  "),(0,n.kt)("p",{parentName:"blockquote"},"Thanks,   "),(0,n.kt)("p",{parentName:"blockquote"},"The Apache RocketMQ Team")),(0,n.kt)("p",null,"\u82e5\u6295\u7968\u672a\u901a\u8fc7, \u4fee\u590d issues, \u56de\u6eda, \u589e\u52a0 RC \u7684\u7f16\u53f7\uff0c\u91cd\u65b0\u542f\u52a8\u7248\u672c\u53d1\u5e03\u6d41\u7a0b\uff0c\u91cd\u65b0\u53d1\u8d77\u7248\u672c\u6295\u7968\u6d41\u7a0b"),(0,n.kt)("p",null,"\u66f4\u65b0\u90ae\u4ef6\u4e3b\u9898\uff1a",(0,n.kt)("strong",{parentName:"p"},"[RESTART][VOTE]","[#","]",": Release Apache RocketMQ \\<release-version",">"," RC\\<RC Number",">")),(0,n.kt)("h2",{id:"7-\u7248\u672c\u53d1\u5e03"},"7. \u7248\u672c\u53d1\u5e03"),(0,n.kt)("p",null,"Apache RocketMQ PPMC \u6295\u7968\u901a\u8fc7\u540e, \u53d1\u5e03\u7248\u672c\u5230 Maven Nexus \u4ed3\u5e93\u548c Apache \u7248\u672c\u4ed3\u5e93"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u53d1\u5e03\u5230 Nexus \u4ed3\u5e93, \u9009\u62e9\u6682\u5b58\u533a\u7684  ",(0,n.kt)("strong",{parentName:"li"},"orgapacherocketmq-XXX")," \u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Release")," \u56fe\u6807\u53d1\u5e03"),(0,n.kt)("li",{parentName:"ol"},"\u53d1\u5e03\u5230 Apache \u7248\u672c\u4ed3\u5e93, \u4f7f\u7528 SVN \u62f7\u8d1d\u7248\u672c\u81f3 ",(0,n.kt)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/"},"/release/rocketmq")," "),(0,n.kt)("li",{parentName:"ol"},"\u5408\u5e76 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq"},"Apache RocketMQ")," ",(0,n.kt)("inlineCode",{parentName:"li"},"develop")," \u5206\u652f\u81f3 ",(0,n.kt)("inlineCode",{parentName:"li"},"master")," \u5206\u652f"),(0,n.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 release notes \u5230 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq/releases"},"Releases \xb7 apache/rocketmq")," "),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u5206\u652f\uff0c\u5e76\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"release-x.x.x")," "),(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-site"},"apache/rocketmq-site")," \u5b98\u7f51\u4e3b\u9875",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 release note\uff0c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-site/commit/4b662a197a0a77fd460614df9e231e6ffdd7c622"},"4.9.3 release notes")," "),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u65b0 release note\uff0c\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-site/commit/0fd4d231c06f1d641a0cc30f8ffe22775043e89d"},"docs updates for 4.9.3"))))),(0,n.kt)("h2",{id:"8-\u7248\u672c\u516c\u793a"},"8. \u7248\u672c\u516c\u793a"),(0,n.kt)("p",null,"\u90ae\u4ef6\u5217\u8868\uff1a",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:announce@apache.org"},"announce@apache.org")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:users@rocketmq.apache.org"},"users@rocketmq.apache.org")),", "),(0,n.kt)("p",null,"\u200b\t\t\t\t ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:private@rocketmq.apache.org"},"private@rocketmq.apache.org")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"mailto:dev@rocketmq.apache.org"},"dev@rocketmq.apache.org"))," "),(0,n.kt)("p",null,"\u90ae\u4ef6\u4e3b\u9898\uff1a ",(0,n.kt)("strong",{parentName:"p"},"[ANNOUNCE]"," Release Apache RocketMQ \\<release-version",">")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hi all,"),(0,n.kt)("p",{parentName:"blockquote"},"The Apache RocketMQ team would like to announce the release of Apache RocketMQ \\<release version",">",".  "),(0,n.kt)("p",{parentName:"blockquote"},"${A brief introduction to RocketMQ and the features of this release.}"),(0,n.kt)("p",{parentName:"blockquote"},"More details regarding Apache RocketMQ can be found at:  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"http://rocketmq.apache.org/"},"http://rocketmq.apache.org/"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"The release artifacts can be downloaded here:  "),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/rocketmq/$%7Brelease-version%7D"},"https://dist.apache.org/repos/dist/release/rocketmq/${release-version}"),"  "),(0,n.kt)("p",{parentName:"blockquote"},"The release notes can be found here:  "),(0,n.kt)("p",{parentName:"blockquote"},"\\<insert link to the rocketmq release notes",">","  "),(0,n.kt)("p",{parentName:"blockquote"},"Thanks,  "),(0,n.kt)("p",{parentName:"blockquote"},"The Apache RocketMQ Team")))}c.isMDXComponent=!0}}]);