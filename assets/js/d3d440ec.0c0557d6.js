"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"stir-shaken",title:"STIR/SHAKEN Certificates"},o=void 0,c={unversionedId:"features/stir-shaken",id:"features/stir-shaken",title:"STIR/SHAKEN Certificates",description:"STIR/SHAKEN is a telephony standard for caller ID authentication. It is used to help prevent caller ID spoofing. Certify The Web v6.0 onwards supports requesting STIR/SHAKEN certificates from any CA which supports the Authority Token extensions for ACME (and TNAuthList identifiers), such as Martini Security  which are a built in CA, or you can manually add a new CA.",source:"@site/docs/features/stir-shaken.md",sourceDirName:"features",slug:"/features/stir-shaken",permalink:"/docs/features/stir-shaken",draft:!1,editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/features/stir-shaken.md",tags:[],version:"current",frontMatter:{id:"stir-shaken",title:"STIR/SHAKEN Certificates"},sidebar:"docSiderbar",previous:{title:"CSV Bulk Import",permalink:"/docs/csv-import"},next:{title:"Best Practices",permalink:"/docs/guides/best-practices"}},s={},l=[{value:"Setup your ACME account and SPC token with the CA",id:"setup-your-acme-account-and-spc-token-with-the-ca",level:2},{value:"How to request a STIR/SHAKEN certificate:",id:"how-to-request-a-stirshaken-certificate",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"STIR/SHAKEN is a telephony standard for caller ID authentication. It is used to help prevent caller ID spoofing. ",(0,a.kt)("em",{parentName:"p"},"Certify The Web")," v6.0 onwards supports requesting STIR/SHAKEN certificates from any CA which supports the Authority Token extensions for ACME (and TNAuthList identifiers), such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.martinisecurity.com/"},"Martini Security"),"  which are a built in CA, or you can manually add a new CA. "),(0,a.kt)("h2",{id:"setup-your-acme-account-and-spc-token-with-the-ca"},"Setup your ACME account and SPC token with the CA"),(0,a.kt)("p",null,"In Certify The Web:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For first use, register an ACME account (on a new install selecting New Certificate will also prompt you to do the same):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under Settings > Certificate Authorities, add an account for the CA (e.g. Martini Security (STIR/SHAKEN)).",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- Select *Add Account*\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Select the Certificate Authority from the dropdown list."),(0,a.kt)("li",{parentName:"ul"},"Enter your account email address to register with the CA for important notifications."),(0,a.kt)("li",{parentName:"ul"},"Agree to the CA terms and conditions."),(0,a.kt)("li",{parentName:"ul"},"Under the Advanced tab:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  - Select *Use Staging (Test) Mode* if this account is against a staging/test acme services. \n  - Enter your EAB Key ID and Key. \n  - It's also possible to import account details if you have previously registered against the CA with a different client app.\n"))),(0,a.kt)("li",{parentName:"ul"},'Select "Register Contact" to complete the ACME account registration'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Click the account details to copy the details to the clipboard and paste into a text editor for reference.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Acquire your SPC code token using the ACME account thumbprint")," (copied from the step above).")),(0,a.kt)("h2",{id:"how-to-request-a-stirshaken-certificate"},"How to request a STIR/SHAKEN certificate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("em",{parentName:"li"},"New Certificate"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On the Certificate > Identifiers tab, select Add Authority Tokens."),(0,a.kt)("li",{parentName:"ul"},"Browse to spc json file or supply token and crl details. Click ",(0,a.kt)("em",{parentName:"li"},"Add")," to add the token to the Authority Token List."),(0,a.kt)("li",{parentName:"ul"},'Under Certificate > Advanced, Certificate Authority, select the CA account (e.g. Martini Security) and check "Use Staging Mode" if using the CAs testing URL.'),(0,a.kt)("li",{parentName:"ul"},"Click Request Certificate to order the new certificate.")))),(0,a.kt)("p",null,"Once you have your new certificate you can deploy it using a deployment task or custom script, or distribute it as required. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/deployment/tasks_intro"},"Tasks")," feature for more information. Certificates will automatically renew according to your preferences configured under Settings."))}d.isMDXComponent=!0}}]);