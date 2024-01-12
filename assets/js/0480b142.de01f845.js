"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>y});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(i),h=n,y=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return i?a.createElement(y,o(o({ref:t},p),{},{components:i})):a.createElement(y,o({ref:t},p))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3584:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=i(7462),n=(i(7294),i(3905));const r={id:"faq",title:"Frequently Asked Questions"},o=void 0,s={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Introduction",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/webprofusion/certify-docs/edit/master/docs/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions"},sidebar:"docSiderbar",previous:{title:"Licensing",permalink:"/docs/guides/licensing"},next:{title:"Support Options",permalink:"/docs/support"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"What is Certify The Web?",id:"what-is-certify-the-web",level:3},{value:"Is this application commercially supported?",id:"is-this-application-commercially-supported",level:3},{value:"License Registration",id:"license-registration",level:2},{value:"What do I need to know about the certificates this app provides?",id:"what-do-i-need-to-know-about-the-certificates-this-app-provides",level:3},{value:"Help Getting Started",id:"help-getting-started",level:2},{value:"I can&#39;t register my email with Let&#39;s Encrypt",id:"i-cant-register-my-email-with-lets-encrypt",level:3},{value:"Which outgoing https connections/IPs does the app connect to?",id:"which-outgoing-https-connectionsips-does-the-app-connect-to",level:3},{value:"Do I Need to Keep the App Running?",id:"do-i-need-to-keep-the-app-running",level:3},{value:"&quot;Service Not Started&quot; message",id:"service-not-started-message",level:3},{value:"I get an error when trying to request my certificate",id:"i-get-an-error-when-trying-to-request-my-certificate",level:3},{value:"How do I know which bindings will be updated when my certificate next auto-renews?",id:"how-do-i-know-which-bindings-will-be-updated-when-my-certificate-next-auto-renews",level:3},{value:"I have one or more IP specific bindings on the same IIS server, how do I manage these?",id:"i-have-one-or-more-ip-specific-bindings-on-the-same-iis-server-how-do-i-manage-these",level:3},{value:"My existing wildcard certificate is showing up instead of a Let&#39;s Encrypt certificate",id:"my-existing-wildcard-certificate-is-showing-up-instead-of-a-lets-encrypt-certificate",level:3},{value:"The wrong SSL certificate is suddenly being served, making my site inaccessible",id:"the-wrong-ssl-certificate-is-suddenly-being-served-making-my-site-inaccessible",level:3},{value:"The browser says my certificate is OK but my site has some insecure content",id:"the-browser-says-my-certificate-is-ok-but-my-site-has-some-insecure-content",level:3},{value:"The browser says <code>This site can\u2019t provide a secure connection</code>",id:"the-browser-says-this-site-cant-provide-a-secure-connection",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Where are log files kept?",id:"where-are-log-files-kept",level:3},{value:"Where does Certify The Web store certificates?",id:"where-does-certify-the-web-store-certificates",level:3},{value:"What is the PFX password?",id:"what-is-the-pfx-password",level:3},{value:"If I upgrade or re-install will I lose my settings and certificates?",id:"if-i-upgrade-or-re-install-will-i-lose-my-settings-and-certificates",level:3},{value:"Is it ok to ignore File In Use warnings when updating?",id:"is-it-ok-to-ignore-file-in-use-warnings-when-updating",level:3},{value:"Oops, I upgraded and lost my custom scripts",id:"oops-i-upgraded-and-lost-my-custom-scripts",level:3},{value:"My certificate is renewing OK but the IIS site bindings are not updated",id:"my-certificate-is-renewing-ok-but-the-iis-site-bindings-are-not-updated",level:3},{value:"The certificate is renewing automatically but the browser is seeing an expired certificate",id:"the-certificate-is-renewing-automatically-but-the-browser-is-seeing-an-expired-certificate",level:3},{value:"I have 2 servers running the app.  Can the contact email can be the same on both?",id:"i-have-2-servers-running-the-app--can-the-contact-email-can-be-the-same-on-both",level:3},{value:"I have an email from Let&#39;s Encrypt Expiry Bot saying my certificate is about to expire",id:"i-have-an-email-from-lets-encrypt-expiry-bot-saying-my-certificate-is-about-to-expire",level:3},{value:"When trying to use BuyPass Go (or other CA) I get the error &quot;Failed to build certificate as PFX.&quot;",id:"when-trying-to-use-buypass-go-or-other-ca-i-get-the-error-failed-to-build-certificate-as-pfx",level:3},{value:"My Let&#39;s Encrypt certificate chain is invalid after the &quot;DST Root CA X3&quot; expiry.",id:"my-lets-encrypt-certificate-chain-is-invalid-after-the-dst-root-ca-x3-expiry",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("h3",{id:"what-is-certify-the-web"},"What is Certify The Web?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Certify The Web is a GUI to manage, request and renew certificates from Let's Encrypt and other popular (or custom) certificate authorities who support the ACME (Automated Certificate Management Environment) standard. Automatic certificate management means that you no longer have to worry about certificates because they are being automatically managed in a reliable way. Deployment of certificates to the services that require them can also be extensively automated.")),(0,n.kt)("p",null,"Our aim is to ensure that the app is easy to use and that you get setup with your TLS/SSL certificates as quickly as possible. Unlike other more basic tools, if a problem develops that prevents your certificate renewing Certify The Web will let you know by sending you a notification via our API (with no additional configuration)."),(0,n.kt)("p",null,"Web hosting configurations vary and sometimes securing your site can be harder than expected, but the good news is that thousands of other users have succeeded before you. There are a few things that are good to know should you run into any problems. If you encounter a problem you can't resolve, check out our ",(0,n.kt)("a",{parentName:"p",href:"/docs/support"},"support options"),"."),(0,n.kt)("h3",{id:"is-this-application-commercially-supported"},"Is this application commercially supported?"),(0,n.kt)("p",null,"Yes, full time ",(0,n.kt)("a",{parentName:"p",href:"/docs/support"},"email support")," is available for registered users who have purchased a license key (or those who are evaluating the software) for the Professional or Enterprise editions ",(0,n.kt)("a",{parentName:"p",href:"https://certifytheweb.com/upgrade/"},"https://certifytheweb.com/upgrade/"),". This makes the application ideal for organisations or professionals who need a dependable support option. Support operates weekdays (Australian Western Standard Time) with some coverage on weekends. Telephone support and general consultancy is not currently available but we will try to help where we can for all questions. Users of the free Community Edition are also supported via our community forum and other ",(0,n.kt)("a",{parentName:"p",href:"/docs/support"},"support options"),". "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"You are encouraged to test out the software yourself as an evaluation before purchasing as not all usage scenarios will be supported.")," "),(0,n.kt)("h2",{id:"license-registration"},"License Registration"),(0,n.kt)("p",null,"Certify The Web has a free Community Edition which is limited to 5 different managed certificates (with unlimited renewals) and is intended for evaluation only. This limit may vary across updates and is designed to provide a free way for individuals and hobbyists to use the app and for commercial evaluation and testing. You can upgrade to licensed version (which includes access to the support helpdesk email) at ",(0,n.kt)("a",{parentName:"p",href:"https://certifytheweb.com/register"},"https://certifytheweb.com/register")," - you will then receive a license key. To activate your license key open the app and navigate to the About tab, then click Enter Key to apply your license. You can also deactivate the usage of a key within the app or from the ",(0,n.kt)("a",{parentName:"p",href:"https://certifytheweb.com"},"https://certifytheweb.com")," License Keys tab."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If you are using this application within a business or funded organisation (beyond a temporary evaluation) you are required to purchase a license key.")),(0,n.kt)("p",null,"For more information about licensing see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/licensing"},"licensing guide"),"."),(0,n.kt)("h3",{id:"what-do-i-need-to-know-about-the-certificates-this-app-provides"},"What do I need to know about the certificates this app provides?"),(0,n.kt)("p",null,"We are not a Certificate Authority. This app primarily makes managing certificates easier. The actual certificates are issued by the Certificate Authority of your choice (the default is Let's Encrypt) and various limitations apply including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Let's Encrypt certificates are limited to a 90 day expiry (which is why auto-renewal is very important). "),(0,n.kt)("li",{parentName:"ul"},"Let's Encrypt support up to 100 domains per certificate."),(0,n.kt)("li",{parentName:"ul"},"Rate Limits apply when talking to the ACME/Let's Encrypt ACME API (number of certificates issued per week etc) ",(0,n.kt)("a",{parentName:"li",href:"https://letsencrypt.org/docs/rate-limits/"},"https://letsencrypt.org/docs/rate-limits/")),(0,n.kt)("li",{parentName:"ul"},"Usage of the app to acquire certificates from Let's Encrypt requires agreement to the current Let's Encrypt service terms and conditions"),(0,n.kt)("li",{parentName:"ul"},"Certificates must be for public domains. Local intranet hostnames are not supported.")),(0,n.kt)("h2",{id:"help-getting-started"},"Help Getting Started"),(0,n.kt)("h3",{id:"i-cant-register-my-email-with-lets-encrypt"},"I can't register my email with Let's Encrypt"),(0,n.kt)("p",null,"Check your server allows outgoing https requests. This is essential for talking to the API of the Certificate Authority being used (e.g. Let's Encrypt)."),(0,n.kt)("h3",{id:"which-outgoing-https-connectionsips-does-the-app-connect-to"},"Which outgoing https connections/IPs does the app connect to?"),(0,n.kt)("p",null,"If you block outgoing https connections from the machine running the app you will block access to the APIs it requires. These include Let's Encrypt (the Certificate Authority) and may include api.certifytheweb.com if auto config diagnostics or status reporting is enabled."),(0,n.kt)("p",null,"Blocking outgoing https connections is not compatible with this application, or with Let's Encrypts API - they do not publish a list of IPs."),(0,n.kt)("p",null,"The app does not officially support proxied internet connections. Users have managed to use proxies successfully but it's the responsibility of the user to diagnose issues with outgoing https API calls when a proxy or firewall is in use."),(0,n.kt)("h3",{id:"do-i-need-to-keep-the-app-running"},"Do I Need to Keep the App Running?"),(0,n.kt)("p",null,"No, you can close then app UI when you don't need it. ",(0,n.kt)("em",{parentName:"p"},"Certify The Web")," installs a background ",(0,n.kt)("em",{parentName:"p"},"Certify Certificate Manager")," service which will run in the background and manage your certificates. ",(0,n.kt)("strong",{parentName:"p"},"You can close the app and the service will continue to run.")," The app is just used to manage and request new certificates. "),(0,n.kt)("h3",{id:"service-not-started-message"},'"Service Not Started" message'),(0,n.kt)("p",null,"By default the background service runs an internal API bound to localhost and various conditions can cause conflicts or failures. Read more to find out how to ",(0,n.kt)("a",{parentName:"p",href:"/docs/backgroundservice"},"configure or troubleshoot the background service"),". The service will auto-negotiate an available port to listen on."),(0,n.kt)("h3",{id:"i-get-an-error-when-trying-to-request-my-certificate"},"I get an error when trying to request my certificate"),(0,n.kt)("p",null,"Read the error carefully and check the log for your managed site. Assuming your server has direct access to the internet without a proxy (required), you can use the 'Test' option to see if there are any problems the app can diagnose. Alternatively you can also try using the awesome ",(0,n.kt)("a",{parentName:"p",href:"https://letsdebug.net"},"Let's Debug")," service."),(0,n.kt)("h3",{id:"how-do-i-know-which-bindings-will-be-updated-when-my-certificate-next-auto-renews"},"How do I know which bindings will be updated when my certificate next auto-renews?"),(0,n.kt)("p",null,"Check the ",(0,n.kt)("em",{parentName:"p"},"Preview")," tab of your managed certificate, scroll down to the bottom Deployment section and review the bindings which will be updated when the next renewal occurs."),(0,n.kt)("h3",{id:"i-have-one-or-more-ip-specific-bindings-on-the-same-iis-server-how-do-i-manage-these"},"I have one or more IP specific bindings on the same IIS server, how do I manage these?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Do not use IP specific bindings unless you have a specific requirement for them.")," "),(0,n.kt)("p",null,"If someone else configured existing IP specific bindings ",(0,n.kt)("em",{parentName:"p"},"determine if they are absolutely necessary for your requirements"),". "),(0,n.kt)("p",null,"On Windows, if you specify a certificate binding to an IP address then that IP is bound only to that certificate (per port, usually 443 for https) and this binding will take precedence over any other less specific bindings. "),(0,n.kt)("p",null,"The default setting for bindings created by the app is to use IP 'All Unassigned' and enable SNI (Server Name Indication), this is ideal for many sites."),(0,n.kt)("p",null,"If you require IP specific bindings (to support legacy non-SNI capable clients etc) the recommended approach is to run your first certificate request with Deployment set to 'Certificate Store'. You can then manually setup the https binding in IIS against the website, then set Deployment back to Auto and look at the Preview tab to ensure the next update will apply the binding update you expect. "),(0,n.kt)("h3",{id:"my-existing-wildcard-certificate-is-showing-up-instead-of-a-lets-encrypt-certificate"},"My existing wildcard certificate is showing up instead of a Let's Encrypt certificate"),(0,n.kt)("p",null,"Check the existing bindings you have on your sites. If you are binding to a specific (shared) IP address with a wildcard cert as your default fallback for https requests it will take precedence over other bindings on the same server on the same IP address (even if they are using SNI etc)."),(0,n.kt)("h3",{id:"the-wrong-ssl-certificate-is-suddenly-being-served-making-my-site-inaccessible"},"The wrong SSL certificate is suddenly being served, making my site inaccessible"),(0,n.kt)("p",null,"As above, one or more of your sites likely has an IP specific https binding."),(0,n.kt)("h3",{id:"the-browser-says-my-certificate-is-ok-but-my-site-has-some-insecure-content"},"The browser says my certificate is OK but my site has some insecure content"),(0,n.kt)("p",null,"Your site is still referencing some content as ",(0,n.kt)("inlineCode",{parentName:"p"},"http")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"https")," - you can view these requests in the browser developer tools. You need to update your website or content management system to use https urls."),(0,n.kt)("h3",{id:"the-browser-says-this-site-cant-provide-a-secure-connection"},"The browser says ",(0,n.kt)("inlineCode",{parentName:"h3"},"This site can\u2019t provide a secure connection")),(0,n.kt)("p",null,"Your server is not configured to support current TLS Cipher suites by default. This requires registry changes on your server. A great tool to apply best practice configuration on Windows is IISCrypto by Nartac ",(0,n.kt)("a",{href:"https://www.nartac.com/Products/IISCrypto"},(0,n.kt)("a",{parentName:"p",href:"https://www.nartac.com/Products/IISCrypto"},"https://www.nartac.com/Products/IISCrypto"))),(0,n.kt)("h2",{id:"maintenance"},"Maintenance"),(0,n.kt)("h3",{id:"where-are-log-files-kept"},"Where are log files kept?"),(0,n.kt)("p",null,"Each Managed Certificate has it's own log file which you can open using the View Log File option when viewing the details. By default, log files are kept at ",(0,n.kt)("inlineCode",{parentName:"p"},"%ProgramData%\\Certify\\logs"),"."),(0,n.kt)("h3",{id:"where-does-certify-the-web-store-certificates"},"Where does Certify The Web store certificates?"),(0,n.kt)("p",null,"Certificate assets are stored under ",(0,n.kt)("inlineCode",{parentName:"p"},"%ProgramData%\\Certify\\assets"),". You should normally permission this location so that only administrators and Local System can access it. Certificate files names are random after each renewal and to use a certificate file directly you should instead use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/deployment/tasks_intro"},"Deployment Task"),". For normal deployments the certificates are installed into the local machine certificate store under the My/Personal store."),(0,n.kt)("h3",{id:"what-is-the-pfx-password"},"What is the PFX password?"),(0,n.kt)("p",null,'The default PFX password is blank ("") but is configurable under Certificate > Advanced > Signing and Security. You can centrally manage this password so if many certs use the same password you don\'t have to edit each one individually.'),(0,n.kt)("h3",{id:"if-i-upgrade-or-re-install-will-i-lose-my-settings-and-certificates"},"If I upgrade or re-install will I lose my settings and certificates?"),(0,n.kt)("p",null,"Your settings are kept under ",(0,n.kt)("inlineCode",{parentName:"p"},"%ProgramData%\\Certify")," and you should consider backing up this location regularly. Settings are preserved and upgraded when new versions are installed. Settings are ",(0,n.kt)("em",{parentName:"p"},"not")," removed if you Uninstall the app. ",(0,n.kt)("strong",{parentName:"p"},"Do not store custom scripts under the %ProgramFiles%\\CertifyTheWeb folder as these will deleted on upgrade.")),(0,n.kt)("h3",{id:"is-it-ok-to-ignore-file-in-use-warnings-when-updating"},"Is it ok to ignore File In Use warnings when updating?"),(0,n.kt)("p",null,"No, you should close the app before updating and if the installer cannot stop the service for you then you should manually stop the service before updating. If you ignore the warning and continue the update you may end up with a broken installation. You can however fix a broken installation by installing the app again (settings will be preserved)."),(0,n.kt)("h3",{id:"oops-i-upgraded-and-lost-my-custom-scripts"},"Oops, I upgraded and lost my custom scripts"),(0,n.kt)("p",null,"All content under the applications program files folder is removed on upgrade, ",(0,n.kt)("em",{parentName:"p"},"do not store scripts there"),". Instead, store your scripts in a dedicated folder such as C:\\Scripts or together with the other Certify The Web settings as C:\\ProgramData\\Certify\\Scripts (for example)."),(0,n.kt)("h3",{id:"my-certificate-is-renewing-ok-but-the-iis-site-bindings-are-not-updated"},"My certificate is renewing OK but the IIS site bindings are not updated"),(0,n.kt)("p",null,"Check the ",(0,n.kt)("em",{parentName:"p"},"Preview")," tab for your managed certificate and ensure that the ",(0,n.kt)("em",{parentName:"p"},"Deployment")," section will specifically update the expected https bindings. If they are not shown here your https binding will ",(0,n.kt)("em",{parentName:"p"},"not")," be updated. "),(0,n.kt)("p",null,"The most common reason for this is when the Deployment mode is set to ",(0,n.kt)("em",{parentName:"p"},"Single Site")," and you have re-deployed your IIS Site resulting in it having a new internal SiteID within IIS. Change your Deployment mode to 'Auto' and review the ",(0,n.kt)("em",{parentName:"p"},"Preview")," tab to ensure your bindings are being properly targeted."),(0,n.kt)("h3",{id:"the-certificate-is-renewing-automatically-but-the-browser-is-seeing-an-expired-certificate"},"The certificate is renewing automatically but the browser is seeing an expired certificate"),(0,n.kt)("p",null,"Check the 'Preview' tab in the app for your site to ensure the https binding of your site is targeted for updates. Ensure you only have one https binding in IIS which will respond to https requests. Also investigate if you have any IP specific bindings (as above)."),(0,n.kt)("h3",{id:"i-have-2-servers-running-the-app--can-the-contact-email-can-be-the-same-on-both"},"I have 2 servers running the app.  Can the contact email can be the same on both?"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Yes, the contact email can be the same on all servers, or you can vary it as required.")," There is only one contact per server. The contact email used at the time of requesting a certificate remains fixed until that certificate expires. The email address is generally used by Let's Encrypt to warn you of expiring certificates you have not yet renewed. "),(0,n.kt)("h3",{id:"i-have-an-email-from-lets-encrypt-expiry-bot-saying-my-certificate-is-about-to-expire"},"I have an email from Let's Encrypt Expiry Bot saying my certificate is about to expire"),(0,n.kt)("p",null,"If Let's Encrypt think you haven't renewed a certificate they will let you know using the email address registered as a contact when you installed the app. If your receive an expiry warning, check your certificate is renewing OK. If it all looks good you probably changed the list of domains in your certificate at some point (perhaps adding www. or adding/removing domains) and LE is reminding you about the old version of your certificate, so you can ignore the notification."),(0,n.kt)("h3",{id:"when-trying-to-use-buypass-go-or-other-ca-i-get-the-error-failed-to-build-certificate-as-pfx"},'When trying to use BuyPass Go (or other CA) I get the error "Failed to build certificate as PFX."'),(0,n.kt)("p",null,"Normally Certificate Authority root certificates are installed into Windows as part of windows updates but in some cases you may need to import the root certificate for a CA yourself. You should ensure that your servers are all receiving updates normally. See general instructions here:  ",(0,n.kt)("a",{parentName:"p",href:"http://woshub.com/updating-trusted-root-certificates-in-windows-10/"},"http://woshub.com/updating-trusted-root-certificates-in-windows-10/")),(0,n.kt)("p",null,"For example, you can manually import the BuyPass root certificate by downloading it (Buypass Class 2 Root CA) from  ",(0,n.kt)("a",{parentName:"p",href:"https://www.buypass.com/security/buypass-root-certificates"},"https://www.buypass.com/security/buypass-root-certificates")," then importing it using the windows certificate UI (certlm.msc, import it into the Trusted Root Certification Authorities store)."),(0,n.kt)("p",null,"V5.5.4 onwards of the Certify The Web app performs basic trust store maintenance for known ACME certificate authorities."),(0,n.kt)("h3",{id:"my-lets-encrypt-certificate-chain-is-invalid-after-the-dst-root-ca-x3-expiry"},'My Let\'s Encrypt certificate chain is invalid after the "DST Root CA X3" expiry.'),(0,n.kt)("p",null,"See our ",(0,n.kt)("a",{parentName:"p",href:"/docs/kb/kb-202109-letsencrypt"},"knowledge base article")," for more details and solutions."))}d.isMDXComponent=!0}}]);