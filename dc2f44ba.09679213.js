(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),r=(n(0),n(87)),c={id:"custom-domains",title:"Custom Domains",sidebar_label:"Custom Domains",slug:"/custom-domains"},i={unversionedId:"custom-domains",id:"custom-domains",isDocsHomePage:!1,title:"Custom Domains",description:"You can use your own domains with localhost.run.",source:"@site/docs/custom-domains.md",slug:"/custom-domains",permalink:"/docs/custom-domains",editUrl:"https://github.com/localhost-run/site/edit/main/docs/custom-domains.md",version:"current",sidebar_label:"Custom Domains",sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/docs/cli"},next:{title:"HTTP Tunnels",permalink:"/docs/http-tunnels"}},s=[{value:"Plan your custom domain name around what you want to use your domain for",id:"plan-your-custom-domain-name-around-what-you-want-to-use-your-domain-for",children:[]},{value:"Setup DNS",id:"setup-dns",children:[{value:"CNAME vs A records",id:"cname-vs-a-records",children:[]}]},{value:"Subdomains are included in your custom domain plan",id:"subdomains-are-included-in-your-custom-domain-plan",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can use your own domains with localhost.run."),Object(r.b)("p",null,"To do this visit ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://admin.localhost.run"}),"https://admin.localhost.run"),", add your SSH key to your account for authentication and add a custom domain to your account."),Object(r.b)("p",null,"You will need to set up DNS records on your domain to both verify ownership and route traffic to the localhost.run service."),Object(r.b)("p",null,"Once setup is complete you can connect a tunnel to your domain by adding it to the ",Object(r.b)("inlineCode",{parentName:"p"},"-R")," cli argument like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"ssh -R yourdomain.com:80:localhost:8080 localhost.run\n")),Object(r.b)("h2",{id:"plan-your-custom-domain-name-around-what-you-want-to-use-your-domain-for"},"Plan your custom domain name around what you want to use your domain for"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"currently you can't change a domain name, so please choose carefully"))),Object(r.b)("p",null,"Will you be using your localhost.run tunnels for development? Will you be hosting other sites that are not behind tunnels on your domain?"),Object(r.b)("p",null,"In most cases we recommend using a subdomain for your tunnels, for example ",Object(r.b)("inlineCode",{parentName:"p"},"tunnel.yourdomain.com"),"."),Object(r.b)("h2",{id:"setup-dns"},"Setup DNS"),Object(r.b)("p",null,"Once you've added your custom domain you will need to set up DNS records with your DNS provider. Your DNS provider is usually the same as where you bought your domain name."),Object(r.b)("p",null,"Check how to add a TXT record to your DNS provider and add the record you see in the admin console for your domain name, it will have the format of ",Object(r.b)("inlineCode",{parentName:"p"},"_lhr.{your domain name}")," and a target of your domain ID in quotes."),Object(r.b)("p",null,"Some providers add the quotes for you, some expect you to add them. You can check your TXT record at ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://toolbox.googleapps.com/apps/dig/#TXT/"}),"https://toolbox.googleapps.com/apps/dig/#TXT/"),", you should see an answer that looks like ",Object(r.b)("inlineCode",{parentName:"p"},'_lhr.yourdomain.com. 299 IN TXT "630aa6d4-0294-4cf2-a0cf-843e30dd5b6b"'),"."),Object(r.b)("h3",{id:"cname-vs-a-records"},"CNAME vs A records"),Object(r.b)("p",null,"The next step is tricky, CNAMEs are the easiest to set up but can't live on apex domains."),Object(r.b)("p",null,"An apex domain is the top of your DNS, but it isn't the same as an internet TLD domain, I will offer four examples to illustrate this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Your DNS allows setting host names under example.com and you want to set your tunnels up on example.com."),Object(r.b)("p",{parentName:"li"},"This ",Object(r.b)("strong",{parentName:"p"},"is")," an apex, create A records on example.com.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Your DNS allows setting host names under example.com and you want to set your tunnels up on tunnel.example.com."),Object(r.b)("p",{parentName:"li"},"This ",Object(r.b)("strong",{parentName:"p"},"is not")," an apex create a CNAME record on example.com.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Your DNS allows setting host names under jane.example.com and you want to set your tunnels up on jane.example.com."),Object(r.b)("p",{parentName:"li"},"This ",Object(r.b)("strong",{parentName:"p"},"is")," an apex, create A records on jane.example.com.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Your DNS allows setting host names under jane.example.com and you want to set your tunnels up on tunnel.jane.example.com."),Object(r.b)("p",{parentName:"li"},"This ",Object(r.b)("strong",{parentName:"p"},"is not")," an apex create a CNAME record on jane.example.com."))),Object(r.b)("p",null,"If you are still not sure use A records."),Object(r.b)("p",null,"Set either a CNAME record on your custom domain targeting ",Object(r.b)("inlineCode",{parentName:"p"},"cd.localhost.run")," ",Object(r.b)("em",{parentName:"p"},"or")," 3 A records on your custom domain targeting ",Object(r.b)("inlineCode",{parentName:"p"},"54.161.197.247"),", ",Object(r.b)("inlineCode",{parentName:"p"},"54.82.85.249")," and ",Object(r.b)("inlineCode",{parentName:"p"},"35.171.254.69"),"."),Object(r.b)("h2",{id:"subdomains-are-included-in-your-custom-domain-plan"},"Subdomains are included in your custom domain plan"),Object(r.b)("p",null,"If you set up a custom domain on ",Object(r.b)("inlineCode",{parentName:"p"},"yourdomain.com")," you get the option to use subdomains as part of the plan."),Object(r.b)("p",null,"This means that you can not only connect tunnels to ",Object(r.b)("inlineCode",{parentName:"p"},"yourdomain.com"),", but ",Object(r.b)("em",{parentName:"p"},"also")," to any subdomain of your custom domain, like ",Object(r.b)("inlineCode",{parentName:"p"},"app1.yourdomain.com")," and ",Object(r.b)("inlineCode",{parentName:"p"},"anything-else.yourdomain.com")," for example."),Object(r.b)("p",null,"To enable this functionality follow the regular setup instructions for your custom domain, and once complete, add a CNAME record for ",Object(r.b)("inlineCode",{parentName:"p"},"*.yourdomain.com")," pointing at ",Object(r.b)("inlineCode",{parentName:"p"},"cd.localhost.run"),"."),Object(r.b)("p",null,"You can then connect a tunnel to subdomains:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"ssh -R app1.yourdomain.com:80:localhost:8081 localhost.run\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can connect up to 5 tunnels at the same time."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"the number of subdomains you can use in a month is limited by letsencrypt limits on certificate generation."))))}l.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);