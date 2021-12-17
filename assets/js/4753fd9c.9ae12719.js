"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[104],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,h=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5067:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],l={id:"ListStatesArgs",title:"Interface: ListStatesArgs",sidebar_label:"ListStatesArgs",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/ListStatesArgs",id:"api/interfaces/ListStatesArgs",isDocsHomePage:!1,title:"Interface: ListStatesArgs",description:"Hierarchy",source:"@site/docs/api/interfaces/ListStatesArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ListStatesArgs",permalink:"/Bluehawk/api/interfaces/ListStatesArgs",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ListStatesArgs",title:"Interface: ListStatesArgs",sidebar_label:"ListStatesArgs",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ListCommandArgs",permalink:"/Bluehawk/api/interfaces/ListCommandArgs"},next:{title:"ParseResult",permalink:"/Bluehawk/api/interfaces/ParseResult"}},c=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"ignore",id:"ignore",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"json",id:"json",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"paths",id:"paths",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"waitForListeners",id:"waitforlisteners",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"ActionArgs"},(0,a.kt)("inlineCode",{parentName:"a"},"ActionArgs"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ListStatesArgs"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"ignore"},"ignore"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"ignore"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mongodben/Bluehawk/blob/3777ace/src/bluehawk/actions/listStates.ts#L8"},"src/bluehawk/actions/listStates.ts:8")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"json"},"json"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"json"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mongodben/Bluehawk/blob/3777ace/src/bluehawk/actions/listStates.ts#L7"},"src/bluehawk/actions/listStates.ts:7")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paths"},"paths"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"paths"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mongodben/Bluehawk/blob/3777ace/src/bluehawk/actions/listStates.ts#L6"},"src/bluehawk/actions/listStates.ts:6")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"waitforlisteners"},"waitForListeners"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"waitForListeners"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"ActionArgs"},"ActionArgs"),".",(0,a.kt)("a",{parentName:"p",href:"ActionArgs#waitforlisteners"},"waitForListeners")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mongodben/Bluehawk/blob/3777ace/src/bluehawk/actions/ActionArgs.ts#L2"},"src/bluehawk/actions/ActionArgs.ts:2")))}d.isMDXComponent=!0}}]);