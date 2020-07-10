/*! For license information please see eff2904f.c37cda6e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{219:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(2),o=(t(231),t(230));const u={id:"create-mongodb-provider",title:"createMongoDbProvider",sidebar_label:"createMongoDbProvider"},c={id:"api/create-mongodb-provider",isDocsHomePage:!1,title:"createMongoDbProvider",description:"TODO",source:"@site/../docs/api/create-mongodb-provider.md",permalink:"/docs/next/api/create-mongodb-provider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/create-mongodb-provider.md",version:"next",sidebar_label:"createMongoDbProvider",sidebar:"docs",previous:{title:"createKnexDbProvider",permalink:"/docs/next/api/create-knexdb-provider"},next:{title:"GraphbackCRUDService",permalink:"/docs/next/api/graphback-crud-service"},latestVersionMainDocPermalink:"/docs/gettingstarted"},i=[{value:"TODO",id:"todo",children:[]}],a={rightToc:i};function l({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},a,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"todo"},"TODO"))}l.isMDXComponent=!0},230:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},y=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=f(t),y=n,d=p["".concat(c,".").concat(y)]||p[y]||s[y]||u;return t?o.a.createElement(d,i(i({ref:r},l),{},{components:t})):o.a.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,c=new Array(u);c[0]=y;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<u;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},231:function(e,r,t){"use strict";e.exports=t(232)},232:function(e,r,t){"use strict";var n=t(233),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function w(){}function j(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=O.prototype;var P=j.prototype=new w;P.constructor=j,n(P,O.prototype),P.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,r,t){var n,o={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)S.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);var a=arguments.length-2;if(1===a)o.children=t;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var C=/\/+/g,$=[];function D(e,r,t,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function T(e,r,t){return null==e?0:function e(r,t,n,o){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var a=!1;if(null===r)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(r.$$typeof){case u:case c:a=!0}}if(a)return n(o,r,""===t?"."+M(r,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(r))for(var l=0;l<r.length;l++){var f=t+M(i=r[l],l);a+=e(i,f,n,o)}else if(null===r||"object"!=typeof r?f=null:f="function"==typeof(f=m&&r[m]||r["@@iterator"])?f:null,"function"==typeof f)for(r=f.call(r),l=0;!(i=r.next()).done;)a+=e(i=i.value,f=t+M(i,l++),n,o);else if("object"===i)throw n=""+r,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return a}(e,"",r,t)}function M(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function A(e,r){e.func.call(e.context,r,e.count++)}function I(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?U(e,n,t,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function U(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(C,"$&/")+"/"),T(e,I,r=D(r,u,n,o)),R(r)}var N={current:null};function q(){var e=N.current;if(null===e)throw Error(v(321));return e}var F={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return U(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,A,r=D(null,null,r,t)),R(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return U(e,r,null,(function(e){return e})),r},only:function(e){if(!E(e))throw Error(v(143));return e}},r.Component=O,r.Fragment=i,r.Profiler=l,r.PureComponent=j,r.StrictMode=a,r.Suspense=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(v(267,e));var o=n({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,a=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)S.call(r,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=_,r.createFactory=function(e){var r=_.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},233:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,i,a=c(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(a[f]=t[f]);if(n){i=n(t);for(var p=0;p<i.length;p++)u.call(t,i[p])&&(a[i[p]]=t[i[p]])}}return a}}}]);