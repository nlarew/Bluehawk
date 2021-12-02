"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"intro",title:"Bluehawk",sidebar_label:"Intro",sidebar_position:-1,slug:"/"},l=void 0,c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Bluehawk",description:"Bluehawk is a markup processor for extracting and manipulating arbitrary code.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/bluehawk/",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:-1,frontMatter:{id:"intro",title:"Bluehawk",sidebar_label:"Intro",sidebar_position:-1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/bluehawk/getting-started"}},s=[{value:"Example",id:"example",children:[{value:"Videos",id:"videos",children:[],level:3}],level:2},{value:"Contributing",id:"contributing",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bluehawk is a markup processor for extracting and manipulating arbitrary code.\nWith Bluehawk, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extract code examples for use in documentation"),(0,a.kt)("li",{parentName:"ul"},"Generate formatted code examples for use in documentation"),(0,a.kt)("li",{parentName:"ul"},'Replace "finished" code with "todo" code for a branch in a tutorial repo')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 See our ",(0,a.kt)("a",{parentName:"p",href:"https://mongodb-university.github.io/Bluehawk/"},"API Documentation")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mongodb-university/Bluehawk/issues/new"},"open an issue"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Say you're documenting a library. To provide code examples for library functionality,\nyou're forced to copy & paste snippets of code from test cases you've written into\nyour documentation. Every time an API changes, or you want to improve an example, or\nyou want to fix a bug, you have to copy & paste those snippets again. Sooner or later\nyou'll miss a line, or forget to copy and paste a change from your tests to the\ndocumentation, or forget to update a line highlight... because you're trying to\nmaintain equivalent code snippets in two places at once."),(0,a.kt)("p",null,"What if there was a better way? What if you could write your examples in one place,\nand let a tool take care of removing your assertions and setup and copying the\nexamples into your documentation? Bluehawk does exactly that."),(0,a.kt)("h3",{id:"videos"},"Videos"),(0,a.kt)("p",null,"How do you use Bluehawk in workflows? Here are a couple of short video\noverviews of how the MongoDB Developer Education team uses Bluehawk to create\ncode examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/4G2n3Ps7qUY"},"Bluehawk: Extract & Generate Code Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/DyF4tOxS0zU"},"Bluehawk: Generate Code for Tutorial Apps"))),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"For more information about how to run, build, or test Bluehawk yourself, see ",(0,a.kt)("a",{parentName:"p",href:"CONTRIBUTING.md"},"CONTRIBUTING.md"),"."))}d.isMDXComponent=!0}}]);