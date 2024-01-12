"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={id:"renewals",title:"Certificate Renewals"},o=void 0,s={unversionedId:"renewals",id:"renewals",title:"Certificate Renewals",description:"All certificates have an expiry date, after which they cannot be used to secure communication. Certificates from Let's Encrypt expire after 90 days, so for that reason renewals need to happen often, and if there's going to be a problem with validation that will prevent the renewal, you need to know in advance of the certificate expiry.",source:"@site/docs/renewals.md",sourceDirName:".",slug:"/renewals",permalink:"/docs/renewals",draft:!1,editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/renewals.md",tags:[],version:"current",frontMatter:{id:"renewals",title:"Certificate Renewals"},sidebar:"docSiderbar",previous:{title:"Requesting a Certificate",permalink:"/docs/certificate-process"},next:{title:"Certificate Authorities",permalink:"/docs/guides/certificate-authorities"}},c={},l=[{value:"Dashboard",id:"dashboard",level:2},{value:"Certificate Cleanup",id:"certificate-cleanup",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All certificates have an expiry date, after which they cannot be used to secure communication. Certificates from Let's Encrypt expire after 90 days, so for that reason renewals need to happen often, and if there's going to be a problem with validation that will prevent the renewal, you need to know in advance of the certificate expiry."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"By default, Certify will attempt to auto-renew your certificates and tell you if something goes wrong")),(0,n.kt)("p",null,"If the renewal process fails repeatedly, ",(0,n.kt)("strong",{parentName:"p"},"it will try to notify you")," via our API before certificate expiration becomes a problem, unless you have disabled the ",(0,n.kt)("em",{parentName:"p"},"Enable Status Reports to Dashboard")," option under Settings. ",(0,n.kt)("strong",{parentName:"p"},"Ensure that your 'Certificate Authority Account' under Settings > Certificate Authorities is set to a real, monitored, email address")," preferably accessible by others if you are a group of site administrators. You do not need to configure anything else like SMTP relays etc. to use this feature, it's all automatic by default."),(0,n.kt)("p",null,"In addition, as your certificate approaches expiration, the certificate authority (such as Let's Encrypt) will also email you. This can also happen if you have changed a certificate (for instance to add more domains to it) so you may get emails for expiring certificates you have since replaced."),(0,n.kt)("h2",{id:"dashboard"},"Dashboard"),(0,n.kt)("p",null,"You can optionally send a notification to the ",(0,n.kt)("a",{parentName:"p",href:"https://certifytheweb.com"},"https://certifytheweb.com")," dashboard when a renewal is successful or fails. This is useful if you have multiple administrators and want to be notified when a renewal fails. You can also see the status of all your certificates on the dashboard. To get started with sending reports to the Dashboard, select the ",(0,n.kt)("em",{parentName:"p"},"Add to Dashboard")," option from the start up screen of the app on your machine."),(0,n.kt)("h2",{id:"certificate-cleanup"},"Certificate Cleanup"),(0,n.kt)("p",null,"By default the app will remove certificates it has created (which have ",(0,n.kt)("inlineCode",{parentName:"p"},"[Certify]")," in the 'friendly name') once they have been expired for over a month. This is to allow users who have manually allocated the certificate to other services to switch to the latest certificate before we delete the old one."),(0,n.kt)("p",null,"If you are renewing certificates regularly this means you may notice your server stores several duplicate certificates with different expiration dates at any one time, but they will eventually be cleaned up automatically once the app is sure they have expired and are unlikely to be in continued use."))}f.isMDXComponent=!0}}]);