function Sv(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var pm={exports:{}},Sl={},mm={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),Mv=Symbol.for("react.portal"),Ev=Symbol.for("react.fragment"),bv=Symbol.for("react.strict_mode"),Tv=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),Av=Symbol.for("react.context"),Pv=Symbol.for("react.forward_ref"),Lv=Symbol.for("react.suspense"),Rv=Symbol.for("react.memo"),Dv=Symbol.for("react.lazy"),Sf=Symbol.iterator;function Iv(n){return n===null||typeof n!="object"?null:(n=Sf&&n[Sf]||n["@@iterator"],typeof n=="function"?n:null)}var gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,xm={};function Ls(n,e,t){this.props=n,this.context=e,this.refs=xm,this.updater=t||gm}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ls.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _m(){}_m.prototype=Ls.prototype;function dh(n,e,t){this.props=n,this.context=e,this.refs=xm,this.updater=t||gm}var ph=dh.prototype=new _m;ph.constructor=dh;vm(ph,Ls.prototype);ph.isPureReactComponent=!0;var wf=Array.isArray,ym=Object.prototype.hasOwnProperty,mh={current:null},Sm={key:!0,ref:!0,__self:!0,__source:!0};function wm(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ym.call(e,i)&&!Sm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bo,type:n,key:s,ref:o,props:r,_owner:mh.current}}function Nv(n,e){return{$$typeof:Bo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function gh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bo}function kv(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Mf=/\/+/g;function Yl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?kv(""+n.key):e.toString(36)}function Ia(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bo:case Mv:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Yl(o,0):i,wf(r)?(t="",n!=null&&(t=n.replace(Mf,"$&/")+"/"),Ia(r,e,t,"",function(u){return u})):r!=null&&(gh(r)&&(r=Nv(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Mf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Yl(s,a);o+=Ia(s,e,t,l,r)}else if(l=Iv(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Yl(s,a++),o+=Ia(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(n,e,t){if(n==null)return n;var i=[],r=0;return Ia(n,i,"","",function(s){return e.call(t,s,r++)}),i}function zv(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xt={current:null},Na={transition:null},Fv={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Na,ReactCurrentOwner:mh};function Mm(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Xo,forEach:function(n,e,t){Xo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Xo(n,function(){e++}),e},toArray:function(n){return Xo(n,function(e){return e})||[]},only:function(n){if(!gh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Oe.Component=Ls;Oe.Fragment=Ev;Oe.Profiler=Tv;Oe.PureComponent=dh;Oe.StrictMode=bv;Oe.Suspense=Lv;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;Oe.act=Mm;Oe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=vm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ym.call(e,l)&&!Sm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Bo,type:n.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(n){return n={$$typeof:Av,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Cv,_context:n},n.Consumer=n};Oe.createElement=wm;Oe.createFactory=function(n){var e=wm.bind(null,n);return e.type=n,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(n){return{$$typeof:Pv,render:n}};Oe.isValidElement=gh;Oe.lazy=function(n){return{$$typeof:Dv,_payload:{_status:-1,_result:n},_init:zv}};Oe.memo=function(n,e){return{$$typeof:Rv,type:n,compare:e===void 0?null:e}};Oe.startTransition=function(n){var e=Na.transition;Na.transition={};try{n()}finally{Na.transition=e}};Oe.unstable_act=Mm;Oe.useCallback=function(n,e){return Xt.current.useCallback(n,e)};Oe.useContext=function(n){return Xt.current.useContext(n)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(n){return Xt.current.useDeferredValue(n)};Oe.useEffect=function(n,e){return Xt.current.useEffect(n,e)};Oe.useId=function(){return Xt.current.useId()};Oe.useImperativeHandle=function(n,e,t){return Xt.current.useImperativeHandle(n,e,t)};Oe.useInsertionEffect=function(n,e){return Xt.current.useInsertionEffect(n,e)};Oe.useLayoutEffect=function(n,e){return Xt.current.useLayoutEffect(n,e)};Oe.useMemo=function(n,e){return Xt.current.useMemo(n,e)};Oe.useReducer=function(n,e,t){return Xt.current.useReducer(n,e,t)};Oe.useRef=function(n){return Xt.current.useRef(n)};Oe.useState=function(n){return Xt.current.useState(n)};Oe.useSyncExternalStore=function(n,e,t){return Xt.current.useSyncExternalStore(n,e,t)};Oe.useTransition=function(){return Xt.current.useTransition()};Oe.version="18.3.1";mm.exports=Oe;var Ee=mm.exports;const Em=wv(Ee),Ov=Sv({__proto__:null,default:Em},[Ee]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv=Ee,Bv=Symbol.for("react.element"),Vv=Symbol.for("react.fragment"),Gv=Object.prototype.hasOwnProperty,Hv=Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wv={key:!0,ref:!0,__self:!0,__source:!0};function bm(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Gv.call(e,i)&&!Wv.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Bv,type:n,key:s,ref:o,props:r,_owner:Hv.current}}Sl.Fragment=Vv;Sl.jsx=bm;Sl.jsxs=bm;pm.exports=Sl;var V=pm.exports,ac={},Tm={exports:{}},gn={},Cm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,G){var H=D.length;D.push(G);e:for(;0<H;){var ie=H-1>>>1,k=D[ie];if(0<r(k,G))D[ie]=G,D[H]=k,H=ie;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var G=D[0],H=D.pop();if(H!==G){D[0]=H;e:for(var ie=0,k=D.length,Q=k>>>1;ie<Q;){var se=2*(ie+1)-1,F=D[se],ce=se+1,he=D[ce];if(0>r(F,H))ce<k&&0>r(he,F)?(D[ie]=he,D[ce]=H,ie=ce):(D[ie]=F,D[se]=H,ie=se);else if(ce<k&&0>r(he,H))D[ie]=he,D[ce]=H,ie=ce;else break e}}return G}function r(D,G){var H=D.sortIndex-G.sortIndex;return H!==0?H:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,m=!1,_=!1,d=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=D)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function y(D){if(d=!1,v(D),!_)if(t(l)!==null)_=!0,Z(w);else{var G=t(u);G!==null&&ee(y,G.startTime-D)}}function w(D,G){_=!1,d&&(d=!1,g(S),S=-1),m=!0;var H=f;try{for(v(G),h=t(l);h!==null&&(!(h.expirationTime>G)||D&&!W());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,f=h.priorityLevel;var k=ie(h.expirationTime<=G);G=n.unstable_now(),typeof k=="function"?h.callback=k:h===t(l)&&i(l),v(G)}else i(l);h=t(l)}if(h!==null)var Q=!0;else{var se=t(u);se!==null&&ee(y,se.startTime-G),Q=!1}return Q}finally{h=null,f=H,m=!1}}var T=!1,A=null,S=-1,b=5,L=-1;function W(){return!(n.unstable_now()-L<b)}function K(){if(A!==null){var D=n.unstable_now();L=D;var G=!0;try{G=A(!0,D)}finally{G?U():(T=!1,A=null)}}else T=!1}var U;if(typeof x=="function")U=function(){x(K)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,X=N.port2;N.port1.onmessage=K,U=function(){X.postMessage(null)}}else U=function(){p(K,0)};function Z(D){A=D,T||(T=!0,U())}function ee(D,G){S=p(function(){D(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||m||(_=!0,Z(w))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var H=f;f=G;try{return D()}finally{f=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=f;f=D;try{return G()}finally{f=H}},n.unstable_scheduleCallback=function(D,G,H){var ie=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,D){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=H+k,D={id:c++,callback:G,priorityLevel:D,startTime:H,expirationTime:k,sortIndex:-1},H>ie?(D.sortIndex=H,e(u,D),t(l)===null&&D===t(u)&&(d?(g(S),S=-1):d=!0,ee(y,H-ie))):(D.sortIndex=k,e(l,D),_||m||(_=!0,Z(w))),D},n.unstable_shouldYield=W,n.unstable_wrapCallback=function(D){var G=f;return function(){var H=f;f=G;try{return D.apply(this,arguments)}finally{f=H}}}})(Am);Cm.exports=Am;var jv=Cm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv=Ee,mn=jv;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pm=new Set,vo={};function Tr(n,e){xs(n,e),xs(n+"Capture",e)}function xs(n,e){for(vo[n]=e,n=0;n<e.length;n++)Pm.add(e[n])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=Object.prototype.hasOwnProperty,qv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ef={},bf={};function $v(n){return lc.call(bf,n)?!0:lc.call(Ef,n)?!1:qv.test(n)?bf[n]=!0:(Ef[n]=!0,!1)}function Yv(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Zv(n,e,t,i){if(e===null||typeof e>"u"||Yv(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Pt[n]=new qt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Pt[e]=new qt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Pt[n]=new qt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Pt[n]=new qt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Pt[n]=new qt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Pt[n]=new qt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Pt[n]=new qt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Pt[n]=new qt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Pt[n]=new qt(n,5,!1,n.toLowerCase(),null,!1,!1)});var vh=/[\-:]([a-z])/g;function xh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(vh,xh);Pt[e]=new qt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(vh,xh);Pt[e]=new qt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(vh,xh);Pt[e]=new qt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Pt[n]=new qt(n,1,!1,n.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Pt[n]=new qt(n,1,!1,n.toLowerCase(),null,!0,!0)});function _h(n,e,t,i){var r=Pt.hasOwnProperty(e)?Pt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zv(e,t,r,i)&&(t=null),i||r===null?$v(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var xi=Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),qr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Sh=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),Dm=Symbol.for("react.offscreen"),Tf=Symbol.iterator;function zs(n){return n===null||typeof n!="object"?null:(n=Tf&&n[Tf]||n["@@iterator"],typeof n=="function"?n:null)}var lt=Object.assign,Zl;function Js(n){if(Zl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+n}var Kl=!1;function Jl(n,e){if(!n||Kl)return"";Kl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Js(n):""}function Kv(n){switch(n.tag){case 5:return Js(n.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return n=Jl(n.type,!1),n;case 11:return n=Jl(n.type.render,!1),n;case 1:return n=Jl(n.type,!0),n;default:return""}}function fc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $r:return"Fragment";case qr:return"Portal";case uc:return"Profiler";case yh:return"StrictMode";case cc:return"Suspense";case hc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Rm:return(n.displayName||"Context")+".Consumer";case Lm:return(n._context.displayName||"Context")+".Provider";case Sh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wh:return e=n.displayName||null,e!==null?e:fc(n.type)||"Memo";case Ei:e=n._payload,n=n._init;try{return fc(n(e))}catch{}}return null}function Jv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Im(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qv(n){var e=Im(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function $o(n){n._valueTracker||(n._valueTracker=Qv(n))}function Nm(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Im(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function qa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dc(n,e){var t=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Cf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Gi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(n,e){e=e.checked,e!=null&&_h(n,"checked",e,!1)}function pc(n,e){km(n,e);var t=Gi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?mc(n,e.type,t):e.hasOwnProperty("defaultValue")&&mc(n,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Af(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function mc(n,e,t){(e!=="number"||qa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Qs=Array.isArray;function as(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Gi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function gc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pf(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(Qs(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Gi(t)}}function zm(n,e){var t=Gi(e.value),i=Gi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Lf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Fm(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Fm(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Yo,Om=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function xo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ex=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(n){ex.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),so[e]=so[n]})});function Um(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||so.hasOwnProperty(n)&&so[n]?(""+e).trim():e+"px"}function Bm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Um(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var tx=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xc(n,e){if(e){if(tx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function _c(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yc=null;function Mh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sc=null,ls=null,us=null;function Rf(n){if(n=Ho(n)){if(typeof Sc!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Tl(e),Sc(n.stateNode,n.type,e))}}function Vm(n){ls?us?us.push(n):us=[n]:ls=n}function Gm(){if(ls){var n=ls,e=us;if(us=ls=null,Rf(n),e)for(n=0;n<e.length;n++)Rf(e[n])}}function Hm(n,e){return n(e)}function Wm(){}var Ql=!1;function jm(n,e,t){if(Ql)return n(e,t);Ql=!0;try{return Hm(n,e,t)}finally{Ql=!1,(ls!==null||us!==null)&&(Wm(),Gm())}}function _o(n,e){var t=n.stateNode;if(t===null)return null;var i=Tl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var wc=!1;if(pi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){wc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{wc=!1}function nx(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var oo=!1,$a=null,Ya=!1,Mc=null,ix={onError:function(n){oo=!0,$a=n}};function rx(n,e,t,i,r,s,o,a,l){oo=!1,$a=null,nx.apply(ix,arguments)}function sx(n,e,t,i,r,s,o,a,l){if(rx.apply(this,arguments),oo){if(oo){var u=$a;oo=!1,$a=null}else throw Error(ne(198));Ya||(Ya=!0,Mc=u)}}function Cr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Xm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Df(n){if(Cr(n)!==n)throw Error(ne(188))}function ox(n){var e=n.alternate;if(!e){if(e=Cr(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Df(r),n;if(s===i)return Df(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function qm(n){return n=ox(n),n!==null?$m(n):null}function $m(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$m(n);if(e!==null)return e;n=n.sibling}return null}var Ym=mn.unstable_scheduleCallback,If=mn.unstable_cancelCallback,ax=mn.unstable_shouldYield,lx=mn.unstable_requestPaint,ft=mn.unstable_now,ux=mn.unstable_getCurrentPriorityLevel,Eh=mn.unstable_ImmediatePriority,Zm=mn.unstable_UserBlockingPriority,Za=mn.unstable_NormalPriority,cx=mn.unstable_LowPriority,Km=mn.unstable_IdlePriority,wl=null,Zn=null;function hx(n){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(wl,n,void 0,(n.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:px,fx=Math.log,dx=Math.LN2;function px(n){return n>>>=0,n===0?32:31-(fx(n)/dx|0)|0}var Zo=64,Ko=4194304;function eo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ka(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=eo(a):(s&=o,s!==0&&(i=eo(s)))}else o=t&~r,o!==0?i=eo(o):s!==0&&(i=eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Fn(e),r=1<<t,i|=n[t],e&=~r;return i}function mx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=mx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ec(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Jm(){var n=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),n}function eu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Fn(e),n[e]=t}function vx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Fn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function bh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Fn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ye=0;function Qm(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var eg,Th,tg,ng,ig,bc=!1,Jo=[],Ii=null,Ni=null,ki=null,yo=new Map,So=new Map,Ti=[],xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(n,e){switch(n){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Os(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&Th(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function _x(n,e,t,i,r){switch(e){case"focusin":return Ii=Os(Ii,n,e,t,i,r),!0;case"dragenter":return Ni=Os(Ni,n,e,t,i,r),!0;case"mouseover":return ki=Os(ki,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,Os(yo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,So.set(s,Os(So.get(s)||null,n,e,t,i,r)),!0}return!1}function rg(n){var e=sr(n.target);if(e!==null){var t=Cr(e);if(t!==null){if(e=t.tag,e===13){if(e=Xm(t),e!==null){n.blockedOn=e,ig(n.priority,function(){tg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ka(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Tc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);yc=i,t.target.dispatchEvent(i),yc=null}else return e=Ho(t),e!==null&&Th(e),n.blockedOn=t,!1;e.shift()}return!0}function kf(n,e,t){ka(n)&&t.delete(e)}function yx(){bc=!1,Ii!==null&&ka(Ii)&&(Ii=null),Ni!==null&&ka(Ni)&&(Ni=null),ki!==null&&ka(ki)&&(ki=null),yo.forEach(kf),So.forEach(kf)}function Us(n,e){n.blockedOn===e&&(n.blockedOn=null,bc||(bc=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,yx)))}function wo(n){function e(r){return Us(r,n)}if(0<Jo.length){Us(Jo[0],n);for(var t=1;t<Jo.length;t++){var i=Jo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ii!==null&&Us(Ii,n),Ni!==null&&Us(Ni,n),ki!==null&&Us(ki,n),yo.forEach(e),So.forEach(e),t=0;t<Ti.length;t++)i=Ti[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ti.length&&(t=Ti[0],t.blockedOn===null);)rg(t),t.blockedOn===null&&Ti.shift()}var cs=xi.ReactCurrentBatchConfig,Ja=!0;function Sx(n,e,t,i){var r=Ye,s=cs.transition;cs.transition=null;try{Ye=1,Ch(n,e,t,i)}finally{Ye=r,cs.transition=s}}function wx(n,e,t,i){var r=Ye,s=cs.transition;cs.transition=null;try{Ye=4,Ch(n,e,t,i)}finally{Ye=r,cs.transition=s}}function Ch(n,e,t,i){if(Ja){var r=Tc(n,e,t,i);if(r===null)cu(n,e,i,Qa,t),Nf(n,i);else if(_x(r,n,e,t,i))i.stopPropagation();else if(Nf(n,i),e&4&&-1<xx.indexOf(n)){for(;r!==null;){var s=Ho(r);if(s!==null&&eg(s),s=Tc(n,e,t,i),s===null&&cu(n,e,i,Qa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(n,e,i,null,t)}}var Qa=null;function Tc(n,e,t,i){if(Qa=null,n=Mh(i),n=sr(n),n!==null)if(e=Cr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Xm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Qa=n,null}function sg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ux()){case Eh:return 1;case Zm:return 4;case Za:case cx:return 16;case Km:return 536870912;default:return 16}default:return 16}}var Ai=null,Ah=null,za=null;function og(){if(za)return za;var n,e=Ah,t=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return za=r.slice(n,1<i?1-i:void 0)}function Fa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qo(){return!0}function zf(){return!1}function vn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:zf,this.isPropagationStopped=zf,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=vn(Rs),Go=lt({},Rs,{view:0,detail:0}),Mx=vn(Go),tu,nu,Bs,Ml=lt({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Bs&&(Bs&&n.type==="mousemove"?(tu=n.screenX-Bs.screenX,nu=n.screenY-Bs.screenY):nu=tu=0,Bs=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),Ff=vn(Ml),Ex=lt({},Ml,{dataTransfer:0}),bx=vn(Ex),Tx=lt({},Go,{relatedTarget:0}),iu=vn(Tx),Cx=lt({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=vn(Cx),Px=lt({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Lx=vn(Px),Rx=lt({},Rs,{data:0}),Of=vn(Rx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Nx[n])?!!e[n]:!1}function Lh(){return kx}var zx=lt({},Go,{key:function(n){if(n.key){var e=Dx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ix[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lh,charCode:function(n){return n.type==="keypress"?Fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fx=vn(zx),Ox=lt({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=vn(Ox),Ux=lt({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lh}),Bx=vn(Ux),Vx=lt({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=vn(Vx),Hx=lt({},Ml,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wx=vn(Hx),jx=[9,13,27,32],Rh=pi&&"CompositionEvent"in window,ao=null;pi&&"documentMode"in document&&(ao=document.documentMode);var Xx=pi&&"TextEvent"in window&&!ao,ag=pi&&(!Rh||ao&&8<ao&&11>=ao),Bf=" ",Vf=!1;function lg(n,e){switch(n){case"keyup":return jx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ug(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Yr=!1;function qx(n,e){switch(n){case"compositionend":return ug(e);case"keypress":return e.which!==32?null:(Vf=!0,Bf);case"textInput":return n=e.data,n===Bf&&Vf?null:n;default:return null}}function $x(n,e){if(Yr)return n==="compositionend"||!Rh&&lg(n,e)?(n=og(),za=Ah=Ai=null,Yr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ag&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Yx[n.type]:e==="textarea"}function cg(n,e,t,i){Vm(i),e=el(e,"onChange"),0<e.length&&(t=new Ph("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var lo=null,Mo=null;function Zx(n){Sg(n,0)}function El(n){var e=Jr(n);if(Nm(e))return n}function Kx(n,e){if(n==="change")return e}var hg=!1;if(pi){var ru;if(pi){var su="oninput"in document;if(!su){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),su=typeof Hf.oninput=="function"}ru=su}else ru=!1;hg=ru&&(!document.documentMode||9<document.documentMode)}function Wf(){lo&&(lo.detachEvent("onpropertychange",fg),Mo=lo=null)}function fg(n){if(n.propertyName==="value"&&El(Mo)){var e=[];cg(e,Mo,n,Mh(n)),jm(Zx,e)}}function Jx(n,e,t){n==="focusin"?(Wf(),lo=e,Mo=t,lo.attachEvent("onpropertychange",fg)):n==="focusout"&&Wf()}function Qx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return El(Mo)}function e_(n,e){if(n==="click")return El(e)}function t_(n,e){if(n==="input"||n==="change")return El(e)}function n_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Un=typeof Object.is=="function"?Object.is:n_;function Eo(n,e){if(Un(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!lc.call(e,r)||!Un(n[r],e[r]))return!1}return!0}function jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xf(n,e){var t=jf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=jf(t)}}function dg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?dg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function pg(){for(var n=window,e=qa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=qa(n.document)}return e}function Dh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function i_(n){var e=pg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&dg(t.ownerDocument.documentElement,t)){if(i!==null&&Dh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Xf(t,s);var o=Xf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r_=pi&&"documentMode"in document&&11>=document.documentMode,Zr=null,Cc=null,uo=null,Ac=!1;function qf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ac||Zr==null||Zr!==qa(i)||(i=Zr,"selectionStart"in i&&Dh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uo&&Eo(uo,i)||(uo=i,i=el(Cc,"onSelect"),0<i.length&&(e=new Ph("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Zr)))}function ea(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Kr={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ou={},mg={};pi&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function bl(n){if(ou[n])return ou[n];if(!Kr[n])return n;var e=Kr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in mg)return ou[n]=e[t];return n}var gg=bl("animationend"),vg=bl("animationiteration"),xg=bl("animationstart"),_g=bl("transitionend"),yg=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(n,e){yg.set(n,e),Tr(e,[n])}for(var au=0;au<$f.length;au++){var lu=$f[au],s_=lu.toLowerCase(),o_=lu[0].toUpperCase()+lu.slice(1);ji(s_,"on"+o_)}ji(gg,"onAnimationEnd");ji(vg,"onAnimationIteration");ji(xg,"onAnimationStart");ji("dblclick","onDoubleClick");ji("focusin","onFocus");ji("focusout","onBlur");ji(_g,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Yf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,sx(i,e,void 0,n),n.currentTarget=null}function Sg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,a,u),s=l}}}if(Ya)throw n=Mc,Ya=!1,Mc=null,n}function Qe(n,e){var t=e[Ic];t===void 0&&(t=e[Ic]=new Set);var i=n+"__bubble";t.has(i)||(wg(e,n,2,!1),t.add(i))}function uu(n,e,t){var i=0;e&&(i|=4),wg(t,n,i,e)}var ta="_reactListening"+Math.random().toString(36).slice(2);function bo(n){if(!n[ta]){n[ta]=!0,Pm.forEach(function(t){t!=="selectionchange"&&(a_.has(t)||uu(t,!1,n),uu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ta]||(e[ta]=!0,uu("selectionchange",!1,e))}}function wg(n,e,t,i){switch(sg(e)){case 1:var r=Sx;break;case 4:r=wx;break;default:r=Ch}t=r.bind(null,e,t,n),r=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function cu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=sr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jm(function(){var u=s,c=Mh(t),h=[];e:{var f=yg.get(n);if(f!==void 0){var m=Ph,_=n;switch(n){case"keypress":if(Fa(t)===0)break e;case"keydown":case"keyup":m=Fx;break;case"focusin":_="focus",m=iu;break;case"focusout":_="blur",m=iu;break;case"beforeblur":case"afterblur":m=iu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Bx;break;case gg:case vg:case xg:m=Ax;break;case _g:m=Gx;break;case"scroll":m=Mx;break;case"wheel":m=Wx;break;case"copy":case"cut":case"paste":m=Lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Uf}var d=(e&4)!==0,p=!d&&n==="scroll",g=d?f!==null?f+"Capture":null:f;d=[];for(var x=u,v;x!==null;){v=x;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,g!==null&&(y=_o(x,g),y!=null&&d.push(To(x,y,v)))),p)break;x=x.return}0<d.length&&(f=new m(f,_,null,t,c),h.push({event:f,listeners:d}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",f&&t!==yc&&(_=t.relatedTarget||t.fromElement)&&(sr(_)||_[mi]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=t.relatedTarget||t.toElement,m=u,_=_?sr(_):null,_!==null&&(p=Cr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(d=Ff,y="onMouseLeave",g="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(d=Uf,y="onPointerLeave",g="onPointerEnter",x="pointer"),p=m==null?f:Jr(m),v=_==null?f:Jr(_),f=new d(y,x+"leave",m,t,c),f.target=p,f.relatedTarget=v,y=null,sr(c)===u&&(d=new d(g,x+"enter",_,t,c),d.target=v,d.relatedTarget=p,y=d),p=y,m&&_)t:{for(d=m,g=_,x=0,v=d;v;v=Lr(v))x++;for(v=0,y=g;y;y=Lr(y))v++;for(;0<x-v;)d=Lr(d),x--;for(;0<v-x;)g=Lr(g),v--;for(;x--;){if(d===g||g!==null&&d===g.alternate)break t;d=Lr(d),g=Lr(g)}d=null}else d=null;m!==null&&Zf(h,f,m,d,!1),_!==null&&p!==null&&Zf(h,p,_,d,!0)}}e:{if(f=u?Jr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var w=Kx;else if(Gf(f))if(hg)w=t_;else{w=Qx;var T=Jx}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=e_);if(w&&(w=w(n,u))){cg(h,w,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&mc(f,"number",f.value)}switch(T=u?Jr(u):window,n){case"focusin":(Gf(T)||T.contentEditable==="true")&&(Zr=T,Cc=u,uo=null);break;case"focusout":uo=Cc=Zr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,qf(h,t,c);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":qf(h,t,c)}var A;if(Rh)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Yr?lg(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(ag&&t.locale!=="ko"&&(Yr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Yr&&(A=og()):(Ai=c,Ah="value"in Ai?Ai.value:Ai.textContent,Yr=!0)),T=el(u,S),0<T.length&&(S=new Of(S,n,null,t,c),h.push({event:S,listeners:T}),A?S.data=A:(A=ug(t),A!==null&&(S.data=A)))),(A=Xx?qx(n,t):$x(n,t))&&(u=el(u,"onBeforeInput"),0<u.length&&(c=new Of("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=A))}Sg(h,e)})}function To(n,e,t){return{instance:n,listener:e,currentTarget:t}}function el(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_o(n,t),s!=null&&i.unshift(To(n,s,r)),s=_o(n,e),s!=null&&i.push(To(n,s,r))),n=n.return}return i}function Lr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Zf(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=_o(t,s),l!=null&&o.unshift(To(t,l,a))):r||(l=_o(t,s),l!=null&&o.push(To(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var l_=/\r\n?/g,u_=/\u0000|\uFFFD/g;function Kf(n){return(typeof n=="string"?n:""+n).replace(l_,`
`).replace(u_,"")}function na(n,e,t){if(e=Kf(e),Kf(n)!==e&&t)throw Error(ne(425))}function tl(){}var Pc=null,Lc=null;function Rc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,c_=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,h_=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(n){return Jf.resolve(null).then(n).catch(f_)}:Dc;function f_(n){setTimeout(function(){throw n})}function hu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),wo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);wo(e)}function zi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Qf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ds,Co="__reactProps$"+Ds,mi="__reactContainer$"+Ds,Ic="__reactEvents$"+Ds,d_="__reactListeners$"+Ds,p_="__reactHandles$"+Ds;function sr(n){var e=n[Yn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[mi]||t[Yn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Qf(n);n!==null;){if(t=n[Yn])return t;n=Qf(n)}return e}n=t,t=n.parentNode}return null}function Ho(n){return n=n[Yn]||n[mi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Jr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Tl(n){return n[Co]||null}var Nc=[],Qr=-1;function Xi(n){return{current:n}}function tt(n){0>Qr||(n.current=Nc[Qr],Nc[Qr]=null,Qr--)}function Ke(n,e){Qr++,Nc[Qr]=n.current,n.current=e}var Hi={},Ft=Xi(Hi),Jt=Xi(!1),pr=Hi;function _s(n,e){var t=n.type.contextTypes;if(!t)return Hi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(n){return n=n.childContextTypes,n!=null}function nl(){tt(Jt),tt(Ft)}function ed(n,e,t){if(Ft.current!==Hi)throw Error(ne(168));Ke(Ft,e),Ke(Jt,t)}function Mg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Jv(n)||"Unknown",r));return lt({},t,i)}function il(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hi,pr=Ft.current,Ke(Ft,n),Ke(Jt,Jt.current),!0}function td(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=Mg(n,e,pr),i.__reactInternalMemoizedMergedChildContext=n,tt(Jt),tt(Ft),Ke(Ft,n)):tt(Jt),Ke(Jt,t)}var li=null,Cl=!1,fu=!1;function Eg(n){li===null?li=[n]:li.push(n)}function m_(n){Cl=!0,Eg(n)}function qi(){if(!fu&&li!==null){fu=!0;var n=0,e=Ye;try{var t=li;for(Ye=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}li=null,Cl=!1}catch(r){throw li!==null&&(li=li.slice(n+1)),Ym(Eh,qi),r}finally{Ye=e,fu=!1}}return null}var es=[],ts=0,rl=null,sl=0,yn=[],Sn=0,mr=null,ci=1,hi="";function er(n,e){es[ts++]=sl,es[ts++]=rl,rl=n,sl=e}function bg(n,e,t){yn[Sn++]=ci,yn[Sn++]=hi,yn[Sn++]=mr,mr=n;var i=ci;n=hi;var r=32-Fn(i)-1;i&=~(1<<r),t+=1;var s=32-Fn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-Fn(e)+r|t<<r|i,hi=s+n}else ci=1<<s|t<<r|i,hi=n}function Ih(n){n.return!==null&&(er(n,1),bg(n,1,0))}function Nh(n){for(;n===rl;)rl=es[--ts],es[ts]=null,sl=es[--ts],es[ts]=null;for(;n===mr;)mr=yn[--Sn],yn[Sn]=null,hi=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null}var hn=null,cn=null,nt=!1,Nn=null;function Tg(n,e){var t=Mn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function nd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,hn=n,cn=zi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,hn=n,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=mr!==null?{id:ci,overflow:hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Mn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,hn=n,cn=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(nt){var e=cn;if(e){var t=e;if(!nd(n,e)){if(kc(n))throw Error(ne(418));e=zi(t.nextSibling);var i=hn;e&&nd(n,e)?Tg(i,t):(n.flags=n.flags&-4097|2,nt=!1,hn=n)}}else{if(kc(n))throw Error(ne(418));n.flags=n.flags&-4097|2,nt=!1,hn=n}}}function id(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hn=n}function ia(n){if(n!==hn)return!1;if(!nt)return id(n),nt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Rc(n.type,n.memoizedProps)),e&&(e=cn)){if(kc(n))throw Cg(),Error(ne(418));for(;e;)Tg(n,e),e=zi(e.nextSibling)}if(id(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){cn=zi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}cn=null}}else cn=hn?zi(n.stateNode.nextSibling):null;return!0}function Cg(){for(var n=cn;n;)n=zi(n.nextSibling)}function ys(){cn=hn=null,nt=!1}function kh(n){Nn===null?Nn=[n]:Nn.push(n)}var g_=xi.ReactCurrentBatchConfig;function Vs(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function ra(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function rd(n){var e=n._init;return e(n._payload)}function Ag(n){function e(g,x){if(n){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function t(g,x){if(!n)return null;for(;x!==null;)e(g,x),x=x.sibling;return null}function i(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function r(g,x){return g=Bi(g,x),g.index=0,g.sibling=null,g}function s(g,x,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,x,v,y){return x===null||x.tag!==6?(x=_u(v,g.mode,y),x.return=g,x):(x=r(x,v),x.return=g,x)}function l(g,x,v,y){var w=v.type;return w===$r?c(g,x,v.props.children,y,v.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ei&&rd(w)===x.type)?(y=r(x,v.props),y.ref=Vs(g,x,v),y.return=g,y):(y=Wa(v.type,v.key,v.props,null,g.mode,y),y.ref=Vs(g,x,v),y.return=g,y)}function u(g,x,v,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=yu(v,g.mode,y),x.return=g,x):(x=r(x,v.children||[]),x.return=g,x)}function c(g,x,v,y,w){return x===null||x.tag!==7?(x=fr(v,g.mode,y,w),x.return=g,x):(x=r(x,v),x.return=g,x)}function h(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_u(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qo:return v=Wa(x.type,x.key,x.props,null,g.mode,v),v.ref=Vs(g,null,x),v.return=g,v;case qr:return x=yu(x,g.mode,v),x.return=g,x;case Ei:var y=x._init;return h(g,y(x._payload),v)}if(Qs(x)||zs(x))return x=fr(x,g.mode,v,null),x.return=g,x;ra(g,x)}return null}function f(g,x,v,y){var w=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return w!==null?null:a(g,x,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return v.key===w?l(g,x,v,y):null;case qr:return v.key===w?u(g,x,v,y):null;case Ei:return w=v._init,f(g,x,w(v._payload),y)}if(Qs(v)||zs(v))return w!==null?null:c(g,x,v,y,null);ra(g,v)}return null}function m(g,x,v,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(v)||null,a(x,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qo:return g=g.get(y.key===null?v:y.key)||null,l(x,g,y,w);case qr:return g=g.get(y.key===null?v:y.key)||null,u(x,g,y,w);case Ei:var T=y._init;return m(g,x,v,T(y._payload),w)}if(Qs(y)||zs(y))return g=g.get(v)||null,c(x,g,y,w,null);ra(x,y)}return null}function _(g,x,v,y){for(var w=null,T=null,A=x,S=x=0,b=null;A!==null&&S<v.length;S++){A.index>S?(b=A,A=null):b=A.sibling;var L=f(g,A,v[S],y);if(L===null){A===null&&(A=b);break}n&&A&&L.alternate===null&&e(g,A),x=s(L,x,S),T===null?w=L:T.sibling=L,T=L,A=b}if(S===v.length)return t(g,A),nt&&er(g,S),w;if(A===null){for(;S<v.length;S++)A=h(g,v[S],y),A!==null&&(x=s(A,x,S),T===null?w=A:T.sibling=A,T=A);return nt&&er(g,S),w}for(A=i(g,A);S<v.length;S++)b=m(A,g,S,v[S],y),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?S:b.key),x=s(b,x,S),T===null?w=b:T.sibling=b,T=b);return n&&A.forEach(function(W){return e(g,W)}),nt&&er(g,S),w}function d(g,x,v,y){var w=zs(v);if(typeof w!="function")throw Error(ne(150));if(v=w.call(v),v==null)throw Error(ne(151));for(var T=w=null,A=x,S=x=0,b=null,L=v.next();A!==null&&!L.done;S++,L=v.next()){A.index>S?(b=A,A=null):b=A.sibling;var W=f(g,A,L.value,y);if(W===null){A===null&&(A=b);break}n&&A&&W.alternate===null&&e(g,A),x=s(W,x,S),T===null?w=W:T.sibling=W,T=W,A=b}if(L.done)return t(g,A),nt&&er(g,S),w;if(A===null){for(;!L.done;S++,L=v.next())L=h(g,L.value,y),L!==null&&(x=s(L,x,S),T===null?w=L:T.sibling=L,T=L);return nt&&er(g,S),w}for(A=i(g,A);!L.done;S++,L=v.next())L=m(A,g,S,L.value,y),L!==null&&(n&&L.alternate!==null&&A.delete(L.key===null?S:L.key),x=s(L,x,S),T===null?w=L:T.sibling=L,T=L);return n&&A.forEach(function(K){return e(g,K)}),nt&&er(g,S),w}function p(g,x,v,y){if(typeof v=="object"&&v!==null&&v.type===$r&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:e:{for(var w=v.key,T=x;T!==null;){if(T.key===w){if(w=v.type,w===$r){if(T.tag===7){t(g,T.sibling),x=r(T,v.props.children),x.return=g,g=x;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ei&&rd(w)===T.type){t(g,T.sibling),x=r(T,v.props),x.ref=Vs(g,T,v),x.return=g,g=x;break e}t(g,T);break}else e(g,T);T=T.sibling}v.type===$r?(x=fr(v.props.children,g.mode,y,v.key),x.return=g,g=x):(y=Wa(v.type,v.key,v.props,null,g.mode,y),y.ref=Vs(g,x,v),y.return=g,g=y)}return o(g);case qr:e:{for(T=v.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(g,x.sibling),x=r(x,v.children||[]),x.return=g,g=x;break e}else{t(g,x);break}else e(g,x);x=x.sibling}x=yu(v,g.mode,y),x.return=g,g=x}return o(g);case Ei:return T=v._init,p(g,x,T(v._payload),y)}if(Qs(v))return _(g,x,v,y);if(zs(v))return d(g,x,v,y);ra(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(g,x.sibling),x=r(x,v),x.return=g,g=x):(t(g,x),x=_u(v,g.mode,y),x.return=g,g=x),o(g)):t(g,x)}return p}var Ss=Ag(!0),Pg=Ag(!1),ol=Xi(null),al=null,ns=null,zh=null;function Fh(){zh=ns=al=null}function Oh(n){var e=ol.current;tt(ol),n._currentValue=e}function Fc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function hs(n,e){al=n,zh=ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Yt=!0),n.firstContext=null)}function Tn(n){var e=n._currentValue;if(zh!==n)if(n={context:n,memoizedValue:e,next:null},ns===null){if(al===null)throw Error(ne(308));ns=n,al.dependencies={lanes:0,firstContext:n}}else ns=ns.next=n;return e}var or=null;function Uh(n){or===null?or=[n]:or.push(n)}function Lg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Uh(e)):(t.next=r.next,r.next=t),e.interleaved=t,gi(n,i)}function gi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var bi=!1;function Bh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(n,t)}return r=i.interleaved,r===null?(e.next=e,Uh(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(n,t)}function Oa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bh(n,t)}}function sd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ll(n,e,t,i){var r=n.updateQueue;bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,d=a;switch(f=e,m=t,d.tag){case 1:if(_=d.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=d.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=lt({},h,f);break e;case 2:bi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vr|=o,n.lanes=o,n.memoizedState=h}}function od(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Wo={},Kn=Xi(Wo),Ao=Xi(Wo),Po=Xi(Wo);function ar(n){if(n===Wo)throw Error(ne(174));return n}function Vh(n,e){switch(Ke(Po,e),Ke(Ao,n),Ke(Kn,Wo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=vc(e,n)}tt(Kn),Ke(Kn,e)}function ws(){tt(Kn),tt(Ao),tt(Po)}function Dg(n){ar(Po.current);var e=ar(Kn.current),t=vc(e,n.type);e!==t&&(Ke(Ao,n),Ke(Kn,t))}function Gh(n){Ao.current===n&&(tt(Kn),tt(Ao))}var rt=Xi(0);function ul(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Hh(){for(var n=0;n<du.length;n++)du[n]._workInProgressVersionPrimary=null;du.length=0}var Ua=xi.ReactCurrentDispatcher,pu=xi.ReactCurrentBatchConfig,gr=0,ot=null,xt=null,bt=null,cl=!1,co=!1,Lo=0,v_=0;function Lt(){throw Error(ne(321))}function Wh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Un(n[t],e[t]))return!1;return!0}function jh(n,e,t,i,r,s){if(gr=s,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=n===null||n.memoizedState===null?S_:w_,n=t(i,r),co){s=0;do{if(co=!1,Lo=0,25<=s)throw Error(ne(301));s+=1,bt=xt=null,e.updateQueue=null,Ua.current=M_,n=t(i,r)}while(co)}if(Ua.current=hl,e=xt!==null&&xt.next!==null,gr=0,bt=xt=ot=null,cl=!1,e)throw Error(ne(300));return n}function Xh(){var n=Lo!==0;return Lo=0,n}function jn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ot.memoizedState=bt=n:bt=bt.next=n,bt}function Cn(){if(xt===null){var n=ot.alternate;n=n!==null?n.memoizedState:null}else n=xt.next;var e=bt===null?ot.memoizedState:bt.next;if(e!==null)bt=e,xt=n;else{if(n===null)throw Error(ne(310));xt=n,n={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},bt===null?ot.memoizedState=bt=n:bt=bt.next=n}return bt}function Ro(n,e){return typeof e=="function"?e(n):e}function mu(n){var e=Cn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=xt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ot.lanes|=c,vr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Un(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ot.lanes|=s,vr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function gu(n){var e=Cn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Un(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ig(){}function Ng(n,e){var t=ot,i=Cn(),r=e(),s=!Un(i.memoizedState,r);if(s&&(i.memoizedState=r,Yt=!0),i=i.queue,qh(Fg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(t.flags|=2048,Do(9,zg.bind(null,t,i,r,e),void 0,null),Tt===null)throw Error(ne(349));gr&30||kg(t,e,r)}return r}function kg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function zg(n,e,t,i){e.value=t,e.getSnapshot=i,Og(e)&&Ug(n)}function Fg(n,e,t){return t(function(){Og(e)&&Ug(n)})}function Og(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Un(n,t)}catch{return!0}}function Ug(n){var e=gi(n,1);e!==null&&On(e,n,1,-1)}function ad(n){var e=jn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},e.queue=n,n=n.dispatch=y_.bind(null,ot,n),[e.memoizedState,n]}function Do(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Bg(){return Cn().memoizedState}function Ba(n,e,t,i){var r=jn();ot.flags|=n,r.memoizedState=Do(1|e,t,void 0,i===void 0?null:i)}function Al(n,e,t,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(xt!==null){var o=xt.memoizedState;if(s=o.destroy,i!==null&&Wh(i,o.deps)){r.memoizedState=Do(e,t,s,i);return}}ot.flags|=n,r.memoizedState=Do(1|e,t,s,i)}function ld(n,e){return Ba(8390656,8,n,e)}function qh(n,e){return Al(2048,8,n,e)}function Vg(n,e){return Al(4,2,n,e)}function Gg(n,e){return Al(4,4,n,e)}function Hg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Wg(n,e,t){return t=t!=null?t.concat([n]):null,Al(4,4,Hg.bind(null,e,n),t)}function $h(){}function jg(n,e){var t=Cn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Wh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Xg(n,e){var t=Cn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Wh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function qg(n,e,t){return gr&21?(Un(t,e)||(t=Jm(),ot.lanes|=t,vr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=t)}function x_(n,e){var t=Ye;Ye=t!==0&&4>t?t:4,n(!0);var i=pu.transition;pu.transition={};try{n(!1),e()}finally{Ye=t,pu.transition=i}}function $g(){return Cn().memoizedState}function __(n,e,t){var i=Ui(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Yg(n))Zg(e,t);else if(t=Lg(n,e,t,i),t!==null){var r=Wt();On(t,n,i,r),Kg(t,e,i)}}function y_(n,e,t){var i=Ui(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Yg(n))Zg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Un(a,o)){var l=e.interleaved;l===null?(r.next=r,Uh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Lg(n,e,r,i),t!==null&&(r=Wt(),On(t,n,i,r),Kg(t,e,i))}}function Yg(n){var e=n.alternate;return n===ot||e!==null&&e===ot}function Zg(n,e){co=cl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Kg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bh(n,t)}}var hl={readContext:Tn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},S_={readContext:Tn,useCallback:function(n,e){return jn().memoizedState=[n,e===void 0?null:e],n},useContext:Tn,useEffect:ld,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ba(4194308,4,Hg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ba(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ba(4,2,n,e)},useMemo:function(n,e){var t=jn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=jn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=__.bind(null,ot,n),[i.memoizedState,n]},useRef:function(n){var e=jn();return n={current:n},e.memoizedState=n},useState:ad,useDebugValue:$h,useDeferredValue:function(n){return jn().memoizedState=n},useTransition:function(){var n=ad(!1),e=n[0];return n=x_.bind(null,n[1]),jn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ot,r=jn();if(nt){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Tt===null)throw Error(ne(349));gr&30||kg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,ld(Fg.bind(null,i,s,n),[n]),i.flags|=2048,Do(9,zg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=jn(),e=Tt.identifierPrefix;if(nt){var t=hi,i=ci;t=(i&~(1<<32-Fn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Lo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=v_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},w_={readContext:Tn,useCallback:jg,useContext:Tn,useEffect:qh,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:Xg,useReducer:mu,useRef:Bg,useState:function(){return mu(Ro)},useDebugValue:$h,useDeferredValue:function(n){var e=Cn();return qg(e,xt.memoizedState,n)},useTransition:function(){var n=mu(Ro)[0],e=Cn().memoizedState;return[n,e]},useMutableSource:Ig,useSyncExternalStore:Ng,useId:$g,unstable_isNewReconciler:!1},M_={readContext:Tn,useCallback:jg,useContext:Tn,useEffect:qh,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:Xg,useReducer:gu,useRef:Bg,useState:function(){return gu(Ro)},useDebugValue:$h,useDeferredValue:function(n){var e=Cn();return xt===null?e.memoizedState=n:qg(e,xt.memoizedState,n)},useTransition:function(){var n=gu(Ro)[0],e=Cn().memoizedState;return[n,e]},useMutableSource:Ig,useSyncExternalStore:Ng,useId:$g,unstable_isNewReconciler:!1};function Dn(n,e){if(n&&n.defaultProps){e=lt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Oc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:lt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Pl={isMounted:function(n){return(n=n._reactInternals)?Cr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wt(),r=Ui(n),s=fi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Fi(n,s,r),e!==null&&(On(e,n,r,i),Oa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wt(),r=Ui(n),s=fi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Fi(n,s,r),e!==null&&(On(e,n,r,i),Oa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wt(),i=Ui(n),r=fi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(n,r,i),e!==null&&(On(e,n,i,t),Oa(e,n,i))}};function ud(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(t,i)||!Eo(r,s):!0}function Jg(n,e,t){var i=!1,r=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=Qt(e)?pr:Ft.current,i=e.contextTypes,s=(i=i!=null)?_s(n,r):Hi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function cd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Pl.enqueueReplaceState(e,e.state,null)}function Uc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Bh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=Qt(e)?pr:Ft.current,r.context=_s(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pl.enqueueReplaceState(r,r.state,null),ll(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ms(n,e){try{var t="",i=e;do t+=Kv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function vu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Bc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var E_=typeof WeakMap=="function"?WeakMap:Map;function Qg(n,e,t){t=fi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){dl||(dl=!0,Zc=i),Bc(n,e)},t}function e0(n,e,t){t=fi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Bc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bc(n,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function hd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new E_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=O_.bind(null,n,e,t),e.then(n,n))}function fd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function dd(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=fi(-1,1),e.tag=2,Fi(t,e,1))),t.lanes|=1),n)}var b_=xi.ReactCurrentOwner,Yt=!1;function Gt(n,e,t,i){e.child=n===null?Pg(e,null,t,i):Ss(e,n.child,t,i)}function pd(n,e,t,i,r){t=t.render;var s=e.ref;return hs(e,r),i=jh(n,e,t,i,s,r),t=Xh(),n!==null&&!Yt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vi(n,e,r)):(nt&&t&&Ih(e),e.flags|=1,Gt(n,e,i,r),e.child)}function md(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!nf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,t0(n,e,s,i,r)):(n=Wa(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Eo,t(o,i)&&n.ref===e.ref)return vi(n,e,r)}return e.flags|=1,n=Bi(s,i),n.ref=e.ref,n.return=e,e.child=n}function t0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Eo(s,i)&&n.ref===e.ref)if(Yt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Yt=!0);else return e.lanes=n.lanes,vi(n,e,r)}return Vc(n,e,t,i,r)}function n0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(rs,ln),ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ke(rs,ln),ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ke(rs,ln),ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ke(rs,ln),ln|=i;return Gt(n,e,r,t),e.child}function i0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Vc(n,e,t,i,r){var s=Qt(t)?pr:Ft.current;return s=_s(e,s),hs(e,r),t=jh(n,e,t,i,s,r),i=Xh(),n!==null&&!Yt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,vi(n,e,r)):(nt&&i&&Ih(e),e.flags|=1,Gt(n,e,t,r),e.child)}function gd(n,e,t,i,r){if(Qt(t)){var s=!0;il(e)}else s=!1;if(hs(e,r),e.stateNode===null)Va(n,e),Jg(e,t,i),Uc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Tn(u):(u=Qt(t)?pr:Ft.current,u=_s(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&cd(e,o,i,u),bi=!1;var f=e.memoizedState;o.state=f,ll(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Jt.current||bi?(typeof c=="function"&&(Oc(e,t,c,i),l=e.memoizedState),(a=bi||ud(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rg(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=Qt(t)?pr:Ft.current,l=_s(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&cd(e,o,i,l),bi=!1,f=e.memoizedState,o.state=f,ll(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||Jt.current||bi?(typeof m=="function"&&(Oc(e,t,m,i),_=e.memoizedState),(u=bi||ud(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Gc(n,e,t,i,s,r)}function Gc(n,e,t,i,r,s){i0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&td(e,t,!1),vi(n,e,s);i=e.stateNode,b_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ss(e,n.child,null,s),e.child=Ss(e,null,a,s)):Gt(n,e,a,s),e.memoizedState=i.state,r&&td(e,t,!0),e.child}function r0(n){var e=n.stateNode;e.pendingContext?ed(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ed(n,e.context,!1),Vh(n,e.containerInfo)}function vd(n,e,t,i,r){return ys(),kh(r),e.flags|=256,Gt(n,e,t,i),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Wc(n){return{baseLanes:n,cachePool:null,transitions:null}}function s0(n,e,t){var i=e.pendingProps,r=rt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ke(rt,r&1),n===null)return zc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,i,0,null),n=fr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Wc(t),e.memoizedState=Hc,n):Yh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return T_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=fr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Wc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Hc,i}return s=n.child,n=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Yh(n,e){return e=Dl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function sa(n,e,t,i){return i!==null&&kh(i),Ss(e,n.child,null,t),n=Yh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function T_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=vu(Error(ne(422))),sa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=fr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,n.child,null,o),e.child.memoizedState=Wc(o),e.memoizedState=Hc,s);if(!(e.mode&1))return sa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=vu(s,i,void 0),sa(n,e,o,i)}if(a=(o&n.childLanes)!==0,Yt||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(n,r),On(i,n,r,-1))}return tf(),i=vu(Error(ne(421))),sa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=U_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,cn=zi(r.nextSibling),hn=e,nt=!0,Nn=null,n!==null&&(yn[Sn++]=ci,yn[Sn++]=hi,yn[Sn++]=mr,ci=n.id,hi=n.overflow,mr=e),e=Yh(e,i.children),e.flags|=4096,e)}function xd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Fc(n.return,e,t)}function xu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function o0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(n,e,i.children,t),i=rt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xd(n,t,e);else if(n.tag===19)xd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ke(rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ul(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),xu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ul(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}xu(e,!0,t,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Va(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function vi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),vr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Bi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Bi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function C_(n,e,t){switch(e.tag){case 3:r0(e),ys();break;case 5:Dg(e);break;case 1:Qt(e.type)&&il(e);break;case 4:Vh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(rt,rt.current&1),e.flags|=128,null):t&e.child.childLanes?s0(n,e,t):(Ke(rt,rt.current&1),n=vi(n,e,t),n!==null?n.sibling:null);Ke(rt,rt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return o0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(rt,rt.current),i)break;return null;case 22:case 23:return e.lanes=0,n0(n,e,t)}return vi(n,e,t)}var a0,jc,l0,u0;a0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};jc=function(){};l0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ar(Kn.current);var s=null;switch(t){case"input":r=dc(n,r),i=dc(n,i),s=[];break;case"select":r=lt({},r,{value:void 0}),i=lt({},i,{value:void 0}),s=[];break;case"textarea":r=gc(n,r),i=gc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=tl)}xc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Qe("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};u0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Gs(n,e){if(!nt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Rt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function A_(n,e,t){var i=e.pendingProps;switch(Nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Qt(e.type)&&nl(),Rt(e),null;case 3:return i=e.stateNode,ws(),tt(Jt),tt(Ft),Hh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ia(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Qc(Nn),Nn=null))),jc(n,e),Rt(e),null;case 5:Gh(e);var r=ar(Po.current);if(t=e.type,n!==null&&e.stateNode!=null)l0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Rt(e),null}if(n=ar(Kn.current),ia(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Co]=s,n=(e.mode&1)!==0,t){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<to.length;r++)Qe(to[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":Cf(i,s),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qe("invalid",i);break;case"textarea":Pf(i,s),Qe("invalid",i)}xc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&na(i.textContent,a,n),r=["children",""+a]):vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qe("scroll",i)}switch(t){case"input":$o(i),Af(i,s,!0);break;case"textarea":$o(i),Lf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Fm(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Yn]=e,n[Co]=i,a0(n,e,!1,!1),e.stateNode=n;e:{switch(o=_c(t,i),t){case"dialog":Qe("cancel",n),Qe("close",n),r=i;break;case"iframe":case"object":case"embed":Qe("load",n),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)Qe(to[r],n);r=i;break;case"source":Qe("error",n),r=i;break;case"img":case"image":case"link":Qe("error",n),Qe("load",n),r=i;break;case"details":Qe("toggle",n),r=i;break;case"input":Cf(n,i),r=dc(n,i),Qe("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=lt({},i,{value:void 0}),Qe("invalid",n);break;case"textarea":Pf(n,i),r=gc(n,i),Qe("invalid",n);break;default:r=i}xc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Om(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&xo(n,l):typeof l=="number"&&xo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qe("scroll",n):l!=null&&_h(n,s,l,o))}switch(t){case"input":$o(n),Af(n,i,!1);break;case"textarea":$o(n),Lf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Gi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?as(n,!!i.multiple,s,!1):i.defaultValue!=null&&as(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=tl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(n&&e.stateNode!=null)u0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ar(Po.current),ar(Kn.current),ia(e)){if(i=e.stateNode,t=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==t)&&(n=hn,n!==null))switch(n.tag){case 3:na(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&na(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Rt(e),null;case 13:if(tt(rt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nt&&cn!==null&&e.mode&1&&!(e.flags&128))Cg(),ys(),e.flags|=98560,s=!1;else if(s=ia(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Yn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else Nn!==null&&(Qc(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||rt.current&1?_t===0&&(_t=3):tf())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return ws(),jc(n,e),n===null&&bo(e.stateNode.containerInfo),Rt(e),null;case 10:return Oh(e.type._context),Rt(e),null;case 17:return Qt(e.type)&&nl(),Rt(e),null;case 19:if(tt(rt),s=e.memoizedState,s===null)return Rt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Gs(s,!1);else{if(_t!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ul(n),o!==null){for(e.flags|=128,Gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ke(rt,rt.current&1|2),e.child}n=n.sibling}s.tail!==null&&ft()>Es&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(n=ul(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Rt(e),null}else 2*ft()-s.renderingStartTime>Es&&t!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ft(),e.sibling=null,t=rt.current,Ke(rt,i?t&1|2:t&1),e):(Rt(e),null);case 22:case 23:return ef(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function P_(n,e){switch(Nh(e),e.tag){case 1:return Qt(e.type)&&nl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ws(),tt(Jt),tt(Ft),Hh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Gh(e),null;case 13:if(tt(rt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ys()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return tt(rt),null;case 4:return ws(),null;case 10:return Oh(e.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var oa=!1,Nt=!1,L_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function is(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){ut(n,e,i)}else t.current=null}function Xc(n,e,t){try{t()}catch(i){ut(n,e,i)}}var _d=!1;function R_(n,e){if(Pc=Ja,n=pg(),Dh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var m;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Lc={focusedElem:n,selectionRange:t},Ja=!1,xe=e;xe!==null;)if(e=xe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,xe=n;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var d=_.memoizedProps,p=_.memoizedState,g=e.stateNode,x=g.getSnapshotBeforeUpdate(e.elementType===e.type?d:Dn(e.type,d),p);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){ut(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}return _=_d,_d=!1,_}function ho(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xc(e,t,s)}r=r.next}while(r!==i)}}function Ll(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function qc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function c0(n){var e=n.alternate;e!==null&&(n.alternate=null,c0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Yn],delete e[Co],delete e[Ic],delete e[d_],delete e[p_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function h0(n){return n.tag===5||n.tag===3||n.tag===4}function yd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||h0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $c(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=tl));else if(i!==4&&(n=n.child,n!==null))for($c(n,e,t),n=n.sibling;n!==null;)$c(n,e,t),n=n.sibling}function Yc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Yc(n,e,t),n=n.sibling;n!==null;)Yc(n,e,t),n=n.sibling}var Ct=null,In=!1;function _i(n,e,t){for(t=t.child;t!==null;)f0(n,e,t),t=t.sibling}function f0(n,e,t){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(wl,t)}catch{}switch(t.tag){case 5:Nt||is(t,e);case 6:var i=Ct,r=In;Ct=null,_i(n,e,t),Ct=i,In=r,Ct!==null&&(In?(n=Ct,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ct.removeChild(t.stateNode));break;case 18:Ct!==null&&(In?(n=Ct,t=t.stateNode,n.nodeType===8?hu(n.parentNode,t):n.nodeType===1&&hu(n,t),wo(n)):hu(Ct,t.stateNode));break;case 4:i=Ct,r=In,Ct=t.stateNode.containerInfo,In=!0,_i(n,e,t),Ct=i,In=r;break;case 0:case 11:case 14:case 15:if(!Nt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xc(t,e,o),r=r.next}while(r!==i)}_i(n,e,t);break;case 1:if(!Nt&&(is(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){ut(t,e,a)}_i(n,e,t);break;case 21:_i(n,e,t);break;case 22:t.mode&1?(Nt=(i=Nt)||t.memoizedState!==null,_i(n,e,t),Nt=i):_i(n,e,t);break;default:_i(n,e,t)}}function Sd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new L_),e.forEach(function(i){var r=B_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function An(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,In=!1;break e;case 3:Ct=a.stateNode.containerInfo,In=!0;break e;case 4:Ct=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(Ct===null)throw Error(ne(160));f0(s,o,r),Ct=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ut(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d0(e,n),e=e.sibling}function d0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(An(e,n),Hn(n),i&4){try{ho(3,n,n.return),Ll(3,n)}catch(d){ut(n,n.return,d)}try{ho(5,n,n.return)}catch(d){ut(n,n.return,d)}}break;case 1:An(e,n),Hn(n),i&512&&t!==null&&is(t,t.return);break;case 5:if(An(e,n),Hn(n),i&512&&t!==null&&is(t,t.return),n.flags&32){var r=n.stateNode;try{xo(r,"")}catch(d){ut(n,n.return,d)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),_c(a,o);var u=_c(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Bm(r,h):c==="dangerouslySetInnerHTML"?Om(r,h):c==="children"?xo(r,h):_h(r,c,h,u)}switch(a){case"input":pc(r,s);break;case"textarea":zm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?as(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[Co]=s}catch(d){ut(n,n.return,d)}}break;case 6:if(An(e,n),Hn(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(d){ut(n,n.return,d)}}break;case 3:if(An(e,n),Hn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(d){ut(n,n.return,d)}break;case 4:An(e,n),Hn(n);break;case 13:An(e,n),Hn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jh=ft())),i&4&&Sd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Nt=(u=Nt)||c,An(e,n),Nt=u):An(e,n),Hn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(xe=n,c=n.child;c!==null;){for(h=xe=c;xe!==null;){switch(f=xe,m=f.child,f.tag){case 0:case 11:case 14:case 15:ho(4,f,f.return);break;case 1:is(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(d){ut(i,t,d)}}break;case 5:is(f,f.return);break;case 22:if(f.memoizedState!==null){Md(h);continue}}m!==null?(m.return=f,xe=m):Md(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Um("display",o))}catch(d){ut(n,n.return,d)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(d){ut(n,n.return,d)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:An(e,n),Hn(n),i&4&&Sd(n);break;case 21:break;default:An(e,n),Hn(n)}}function Hn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(h0(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=yd(n);Yc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=yd(n);$c(n,a,o);break;default:throw Error(ne(161))}}catch(l){ut(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function D_(n,e,t){xe=n,p0(n)}function p0(n,e,t){for(var i=(n.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||oa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=oa;var u=Nt;if(oa=o,(Nt=l)&&!u)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Ed(r):l!==null?(l.return=o,xe=l):Ed(r);for(;s!==null;)xe=s,p0(s),s=s.sibling;xe=r,oa=a,Nt=u}wd(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):wd(n)}}function wd(n){for(;xe!==null;){var e=xe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Dn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&od(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}od(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&wo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Nt||e.flags&512&&qc(e)}catch(f){ut(e,e.return,f)}}if(e===n){xe=null;break}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}}function Md(n){for(;xe!==null;){var e=xe;if(e===n){xe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,xe=t;break}xe=e.return}}function Ed(n){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ll(4,e)}catch(l){ut(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{qc(e)}catch(l){ut(e,s,l)}break;case 5:var o=e.return;try{qc(e)}catch(l){ut(e,o,l)}}}catch(l){ut(e,e.return,l)}if(e===n){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var I_=Math.ceil,fl=xi.ReactCurrentDispatcher,Zh=xi.ReactCurrentOwner,bn=xi.ReactCurrentBatchConfig,je=0,Tt=null,gt=null,At=0,ln=0,rs=Xi(0),_t=0,Io=null,vr=0,Rl=0,Kh=0,fo=null,$t=null,Jh=0,Es=1/0,ai=null,dl=!1,Zc=null,Oi=null,aa=!1,Pi=null,pl=0,po=0,Kc=null,Ga=-1,Ha=0;function Wt(){return je&6?ft():Ga!==-1?Ga:Ga=ft()}function Ui(n){return n.mode&1?je&2&&At!==0?At&-At:g_.transition!==null?(Ha===0&&(Ha=Jm()),Ha):(n=Ye,n!==0||(n=window.event,n=n===void 0?16:sg(n.type)),n):1}function On(n,e,t,i){if(50<po)throw po=0,Kc=null,Error(ne(185));Vo(n,t,i),(!(je&2)||n!==Tt)&&(n===Tt&&(!(je&2)&&(Rl|=t),_t===4&&Ci(n,At)),en(n,i),t===1&&je===0&&!(e.mode&1)&&(Es=ft()+500,Cl&&qi()))}function en(n,e){var t=n.callbackNode;gx(n,e);var i=Ka(n,n===Tt?At:0);if(i===0)t!==null&&If(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&If(t),e===1)n.tag===0?m_(bd.bind(null,n)):Eg(bd.bind(null,n)),h_(function(){!(je&6)&&qi()}),t=null;else{switch(Qm(i)){case 1:t=Eh;break;case 4:t=Zm;break;case 16:t=Za;break;case 536870912:t=Km;break;default:t=Za}t=w0(t,m0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function m0(n,e){if(Ga=-1,Ha=0,je&6)throw Error(ne(327));var t=n.callbackNode;if(fs()&&n.callbackNode!==t)return null;var i=Ka(n,n===Tt?At:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ml(n,i);else{e=i;var r=je;je|=2;var s=v0();(Tt!==n||At!==e)&&(ai=null,Es=ft()+500,hr(n,e));do try{z_();break}catch(a){g0(n,a)}while(!0);Fh(),fl.current=s,je=r,gt!==null?e=0:(Tt=null,At=0,e=_t)}if(e!==0){if(e===2&&(r=Ec(n),r!==0&&(i=r,e=Jc(n,r))),e===1)throw t=Io,hr(n,0),Ci(n,i),en(n,ft()),t;if(e===6)Ci(n,i);else{if(r=n.current.alternate,!(i&30)&&!N_(r)&&(e=ml(n,i),e===2&&(s=Ec(n),s!==0&&(i=s,e=Jc(n,s))),e===1))throw t=Io,hr(n,0),Ci(n,i),en(n,ft()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:tr(n,$t,ai);break;case 3:if(Ci(n,i),(i&130023424)===i&&(e=Jh+500-ft(),10<e)){if(Ka(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Dc(tr.bind(null,n,$t,ai),e);break}tr(n,$t,ai);break;case 4:if(Ci(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Fn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*I_(i/1960))-i,10<i){n.timeoutHandle=Dc(tr.bind(null,n,$t,ai),i);break}tr(n,$t,ai);break;case 5:tr(n,$t,ai);break;default:throw Error(ne(329))}}}return en(n,ft()),n.callbackNode===t?m0.bind(null,n):null}function Jc(n,e){var t=fo;return n.current.memoizedState.isDehydrated&&(hr(n,e).flags|=256),n=ml(n,e),n!==2&&(e=$t,$t=t,e!==null&&Qc(e)),n}function Qc(n){$t===null?$t=n:$t.push.apply($t,n)}function N_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Un(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(n,e){for(e&=~Kh,e&=~Rl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Fn(e),i=1<<t;n[t]=-1,e&=~i}}function bd(n){if(je&6)throw Error(ne(327));fs();var e=Ka(n,0);if(!(e&1))return en(n,ft()),null;var t=ml(n,e);if(n.tag!==0&&t===2){var i=Ec(n);i!==0&&(e=i,t=Jc(n,i))}if(t===1)throw t=Io,hr(n,0),Ci(n,e),en(n,ft()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,tr(n,$t,ai),en(n,ft()),null}function Qh(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(Es=ft()+500,Cl&&qi())}}function xr(n){Pi!==null&&Pi.tag===0&&!(je&6)&&fs();var e=je;je|=1;var t=bn.transition,i=Ye;try{if(bn.transition=null,Ye=1,n)return n()}finally{Ye=i,bn.transition=t,je=e,!(je&6)&&qi()}}function ef(){ln=rs.current,tt(rs)}function hr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,c_(t)),gt!==null)for(t=gt.return;t!==null;){var i=t;switch(Nh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nl();break;case 3:ws(),tt(Jt),tt(Ft),Hh();break;case 5:Gh(i);break;case 4:ws();break;case 13:tt(rt);break;case 19:tt(rt);break;case 10:Oh(i.type._context);break;case 22:case 23:ef()}t=t.return}if(Tt=n,gt=n=Bi(n.current,null),At=ln=e,_t=0,Io=null,Kh=Rl=vr=0,$t=fo=null,or!==null){for(e=0;e<or.length;e++)if(t=or[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}or=null}return n}function g0(n,e){do{var t=gt;try{if(Fh(),Ua.current=hl,cl){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cl=!1}if(gr=0,bt=xt=ot=null,co=!1,Lo=0,Zh.current=null,t===null||t.return===null){_t=1,Io=e,gt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=fd(o);if(m!==null){m.flags&=-257,dd(m,o,a,s,e),m.mode&1&&hd(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var d=new Set;d.add(l),e.updateQueue=d}else _.add(l);break e}else{if(!(e&1)){hd(s,u,e),tf();break e}l=Error(ne(426))}}else if(nt&&a.mode&1){var p=fd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),dd(p,o,a,s,e),kh(Ms(l,a));break e}}s=l=Ms(l,a),_t!==4&&(_t=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Qg(s,l,e);sd(s,g);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Oi===null||!Oi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=e0(s,a,e);sd(s,y);break e}}s=s.return}while(s!==null)}_0(t)}catch(w){e=w,gt===t&&t!==null&&(gt=t=t.return);continue}break}while(!0)}function v0(){var n=fl.current;return fl.current=hl,n===null?hl:n}function tf(){(_t===0||_t===3||_t===2)&&(_t=4),Tt===null||!(vr&268435455)&&!(Rl&268435455)||Ci(Tt,At)}function ml(n,e){var t=je;je|=2;var i=v0();(Tt!==n||At!==e)&&(ai=null,hr(n,e));do try{k_();break}catch(r){g0(n,r)}while(!0);if(Fh(),je=t,fl.current=i,gt!==null)throw Error(ne(261));return Tt=null,At=0,_t}function k_(){for(;gt!==null;)x0(gt)}function z_(){for(;gt!==null&&!ax();)x0(gt)}function x0(n){var e=S0(n.alternate,n,ln);n.memoizedProps=n.pendingProps,e===null?_0(n):gt=e,Zh.current=null}function _0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=P_(t,e),t!==null){t.flags&=32767,gt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,gt=null;return}}else if(t=A_(t,e,ln),t!==null){gt=t;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=n}while(e!==null);_t===0&&(_t=5)}function tr(n,e,t){var i=Ye,r=bn.transition;try{bn.transition=null,Ye=1,F_(n,e,t,i)}finally{bn.transition=r,Ye=i}return null}function F_(n,e,t,i){do fs();while(Pi!==null);if(je&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(vx(n,s),n===Tt&&(gt=Tt=null,At=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||aa||(aa=!0,w0(Za,function(){return fs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=Ye;Ye=1;var a=je;je|=4,Zh.current=null,R_(n,t),d0(t,n),i_(Lc),Ja=!!Pc,Lc=Pc=null,n.current=t,D_(t),lx(),je=a,Ye=o,bn.transition=s}else n.current=t;if(aa&&(aa=!1,Pi=n,pl=r),s=n.pendingLanes,s===0&&(Oi=null),hx(t.stateNode),en(n,ft()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(dl)throw dl=!1,n=Zc,Zc=null,n;return pl&1&&n.tag!==0&&fs(),s=n.pendingLanes,s&1?n===Kc?po++:(po=0,Kc=n):po=0,qi(),null}function fs(){if(Pi!==null){var n=Qm(pl),e=bn.transition,t=Ye;try{if(bn.transition=null,Ye=16>n?16:n,Pi===null)var i=!1;else{if(n=Pi,Pi=null,pl=0,je&6)throw Error(ne(331));var r=je;for(je|=4,xe=n.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var c=xe;switch(c.tag){case 0:case 11:case 15:ho(8,c,s)}var h=c.child;if(h!==null)h.return=c,xe=h;else for(;xe!==null;){c=xe;var f=c.sibling,m=c.return;if(c0(c),c===u){xe=null;break}if(f!==null){f.return=m,xe=f;break}xe=m}}}var _=s.alternate;if(_!==null){var d=_.child;if(d!==null){_.child=null;do{var p=d.sibling;d.sibling=null,d=p}while(d!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,xe=g;break e}xe=s.return}}var x=n.current;for(xe=x;xe!==null;){o=xe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,xe=v;else e:for(o=x;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(w){ut(a,a.return,w)}if(a===o){xe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,xe=y;break e}xe=a.return}}if(je=r,qi(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(wl,n)}catch{}i=!0}return i}finally{Ye=t,bn.transition=e}}return!1}function Td(n,e,t){e=Ms(t,e),e=Qg(n,e,1),n=Fi(n,e,1),e=Wt(),n!==null&&(Vo(n,1,e),en(n,e))}function ut(n,e,t){if(n.tag===3)Td(n,n,t);else for(;e!==null;){if(e.tag===3){Td(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){n=Ms(t,n),n=e0(e,n,1),e=Fi(e,n,1),n=Wt(),e!==null&&(Vo(e,1,n),en(e,n));break}}e=e.return}}function O_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wt(),n.pingedLanes|=n.suspendedLanes&t,Tt===n&&(At&t)===t&&(_t===4||_t===3&&(At&130023424)===At&&500>ft()-Jh?hr(n,0):Kh|=t),en(n,e)}function y0(n,e){e===0&&(n.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var t=Wt();n=gi(n,e),n!==null&&(Vo(n,e,t),en(n,t))}function U_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),y0(n,t)}function B_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),y0(n,t)}var S0;S0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jt.current)Yt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Yt=!1,C_(n,e,t);Yt=!!(n.flags&131072)}else Yt=!1,nt&&e.flags&1048576&&bg(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Va(n,e),n=e.pendingProps;var r=_s(e,Ft.current);hs(e,t),r=jh(null,e,i,n,r,t);var s=Xh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bh(e),r.updater=Pl,e.stateNode=r,r._reactInternals=e,Uc(e,i,n,t),e=Gc(null,e,i,!0,s,t)):(e.tag=0,nt&&s&&Ih(e),Gt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Va(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=G_(i),n=Dn(i,n),r){case 0:e=Vc(null,e,i,n,t);break e;case 1:e=gd(null,e,i,n,t);break e;case 11:e=pd(null,e,i,n,t);break e;case 14:e=md(null,e,i,Dn(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Vc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),gd(n,e,i,r,t);case 3:e:{if(r0(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rg(n,e),ll(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(ne(423)),e),e=vd(n,e,i,t,r);break e}else if(i!==r){r=Ms(Error(ne(424)),e),e=vd(n,e,i,t,r);break e}else for(cn=zi(e.stateNode.containerInfo.firstChild),hn=e,nt=!0,Nn=null,t=Pg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ys(),i===r){e=vi(n,e,t);break e}Gt(n,e,i,t)}e=e.child}return e;case 5:return Dg(e),n===null&&zc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Rc(i,r)?o=null:s!==null&&Rc(i,s)&&(e.flags|=32),i0(n,e),Gt(n,e,o,t),e.child;case 6:return n===null&&zc(e),null;case 13:return s0(n,e,t);case 4:return Vh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ss(e,null,i,t):Gt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),pd(n,e,i,r,t);case 7:return Gt(n,e,e.pendingProps,t),e.child;case 8:return Gt(n,e,e.pendingProps.children,t),e.child;case 12:return Gt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ke(ol,i._currentValue),i._currentValue=o,s!==null)if(Un(s.value,o)){if(s.children===r.children&&!Jt.current){e=vi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Fc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,t),r=Tn(r),i=i(r),e.flags|=1,Gt(n,e,i,t),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),md(n,e,i,r,t);case 15:return t0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Va(n,e),e.tag=1,Qt(i)?(n=!0,il(e)):n=!1,hs(e,t),Jg(e,i,r),Uc(e,i,r,t),Gc(null,e,i,!0,n,t);case 19:return o0(n,e,t);case 22:return n0(n,e,t)}throw Error(ne(156,e.tag))};function w0(n,e){return Ym(n,e)}function V_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(n,e,t,i){return new V_(n,e,t,i)}function nf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G_(n){if(typeof n=="function")return nf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Sh)return 11;if(n===wh)return 14}return 2}function Bi(n,e){var t=n.alternate;return t===null?(t=Mn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Wa(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")nf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case $r:return fr(t.children,r,s,e);case yh:o=8,r|=8;break;case uc:return n=Mn(12,t,e,r|2),n.elementType=uc,n.lanes=s,n;case cc:return n=Mn(13,t,e,r),n.elementType=cc,n.lanes=s,n;case hc:return n=Mn(19,t,e,r),n.elementType=hc,n.lanes=s,n;case Dm:return Dl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Lm:o=10;break e;case Rm:o=9;break e;case Sh:o=11;break e;case wh:o=14;break e;case Ei:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Mn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function fr(n,e,t,i){return n=Mn(7,n,i,e),n.lanes=t,n}function Dl(n,e,t,i){return n=Mn(22,n,i,e),n.elementType=Dm,n.lanes=t,n.stateNode={isHidden:!1},n}function _u(n,e,t){return n=Mn(6,n,null,e),n.lanes=t,n}function yu(n,e,t){return e=Mn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function H_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rf(n,e,t,i,r,s,o,a,l){return n=new H_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),n}function W_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function M0(n){if(!n)return Hi;n=n._reactInternals;e:{if(Cr(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(Qt(t))return Mg(n,t,e)}return e}function E0(n,e,t,i,r,s,o,a,l){return n=rf(t,i,!0,n,r,s,o,a,l),n.context=M0(null),t=n.current,i=Wt(),r=Ui(t),s=fi(i,r),s.callback=e??null,Fi(t,s,r),n.current.lanes=r,Vo(n,r,i),en(n,i),n}function Il(n,e,t,i){var r=e.current,s=Wt(),o=Ui(r);return t=M0(t),e.context===null?e.context=t:e.pendingContext=t,e=fi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Fi(r,e,o),n!==null&&(On(n,r,o,s),Oa(n,r,o)),o}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function sf(n,e){Cd(n,e),(n=n.alternate)&&Cd(n,e)}function j_(){return null}var b0=typeof reportError=="function"?reportError:function(n){console.error(n)};function of(n){this._internalRoot=n}Nl.prototype.render=of.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Il(n,e,null,null)};Nl.prototype.unmount=of.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;xr(function(){Il(null,n,null,null)}),e[mi]=null}};function Nl(n){this._internalRoot=n}Nl.prototype.unstable_scheduleHydration=function(n){if(n){var e=ng();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ti.length&&e!==0&&e<Ti[t].priority;t++);Ti.splice(t,0,n),t===0&&rg(n)}};function af(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function X_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=gl(o);s.call(u)}}var o=E0(e,i,n,0,null,!1,!1,"",Ad);return n._reactRootContainer=o,n[mi]=o.current,bo(n.nodeType===8?n.parentNode:n),xr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=gl(l);a.call(u)}}var l=rf(n,0,!1,null,null,!1,!1,"",Ad);return n._reactRootContainer=l,n[mi]=l.current,bo(n.nodeType===8?n.parentNode:n),xr(function(){Il(e,l,t,i)}),l}function zl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gl(o);a.call(l)}}Il(e,o,n,r)}else o=X_(t,e,n,r,i);return gl(o)}eg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=eo(e.pendingLanes);t!==0&&(bh(e,t|1),en(e,ft()),!(je&6)&&(Es=ft()+500,qi()))}break;case 13:xr(function(){var i=gi(n,1);if(i!==null){var r=Wt();On(i,n,1,r)}}),sf(n,1)}};Th=function(n){if(n.tag===13){var e=gi(n,134217728);if(e!==null){var t=Wt();On(e,n,134217728,t)}sf(n,134217728)}};tg=function(n){if(n.tag===13){var e=Ui(n),t=gi(n,e);if(t!==null){var i=Wt();On(t,n,e,i)}sf(n,e)}};ng=function(){return Ye};ig=function(n,e){var t=Ye;try{return Ye=n,e()}finally{Ye=t}};Sc=function(n,e,t){switch(e){case"input":if(pc(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Tl(i);if(!r)throw Error(ne(90));Nm(i),pc(i,r)}}}break;case"textarea":zm(n,t);break;case"select":e=t.value,e!=null&&as(n,!!t.multiple,e,!1)}};Hm=Qh;Wm=xr;var q_={usingClientEntryPoint:!1,Events:[Ho,Jr,Tl,Vm,Gm,Qh]},Hs={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$_={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qm(n),n===null?null:n.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||j_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{wl=la.inject($_),Zn=la}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_;gn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(e))throw Error(ne(200));return W_(n,e,null,t)};gn.createRoot=function(n,e){if(!af(n))throw Error(ne(299));var t=!1,i="",r=b0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rf(n,1,!1,null,null,t,!1,i,r),n[mi]=e.current,bo(n.nodeType===8?n.parentNode:n),new of(e)};gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=qm(e),n=n===null?null:n.stateNode,n};gn.flushSync=function(n){return xr(n)};gn.hydrate=function(n,e,t){if(!kl(e))throw Error(ne(200));return zl(null,n,e,!0,t)};gn.hydrateRoot=function(n,e,t){if(!af(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=b0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=E0(e,null,n,1,t??null,r,!1,s,o),n[mi]=e.current,bo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nl(e)};gn.render=function(n,e,t){if(!kl(e))throw Error(ne(200));return zl(null,n,e,!1,t)};gn.unmountComponentAtNode=function(n){if(!kl(n))throw Error(ne(40));return n._reactRootContainer?(xr(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[mi]=null})}),!0):!1};gn.unstable_batchedUpdates=Qh;gn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!kl(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return zl(n,e,t,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function T0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T0)}catch(n){console.error(n)}}T0(),Tm.exports=gn;var Y_=Tm.exports,Pd=Y_;ac.createRoot=Pd.createRoot,ac.hydrateRoot=Pd.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},vl.apply(this,arguments)}var Li;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Li||(Li={}));const Ld="popstate";function Z_(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return eh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:A0(r)}return J_(e,t,null,n)}function tn(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function C0(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function K_(){return Math.random().toString(36).substr(2,8)}function Rd(n,e){return{usr:n.state,key:n.key,idx:e}}function eh(n,e,t,i){return t===void 0&&(t=null),vl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Fl(e):e,{state:t,key:e&&e.key||i||K_()})}function A0(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Fl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function J_(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Li.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(vl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Li.Pop;let p=c(),g=p==null?null:p-u;u=p,l&&l({action:a,location:d.location,delta:g})}function f(p,g){a=Li.Push;let x=eh(d.location,p,g);u=c()+1;let v=Rd(x,u),y=d.createHref(x);try{o.pushState(v,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(y)}s&&l&&l({action:a,location:d.location,delta:1})}function m(p,g){a=Li.Replace;let x=eh(d.location,p,g);u=c();let v=Rd(x,u),y=d.createHref(x);o.replaceState(v,"",y),s&&l&&l({action:a,location:d.location,delta:0})}function _(p){let g=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof p=="string"?p:A0(p);return x=x.replace(/ $/,"%20"),tn(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let d={get action(){return a},get location(){return n(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ld,h),l=p,()=>{r.removeEventListener(Ld,h),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let g=_(p);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(p){return o.go(p)}};return d}var Dd;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Dd||(Dd={}));function Q_(n,e,t){return t===void 0&&(t="/"),ey(n,e,t,!1)}function ey(n,e,t,i){let r=typeof e=="string"?Fl(e):e,s=R0(r.pathname||"/",t);if(s==null)return null;let o=P0(n);ty(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=fy(s);a=cy(o[l],u,i)}return a}function P0(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(tn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=ds([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(tn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),P0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ly(u,s.index),routesMeta:c})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of L0(s.path))r(s,o,l)}),e}function L0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=L0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function ty(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:uy(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const ny=/^:[\w-]+$/,iy=3,ry=2,sy=1,oy=10,ay=-2,Id=n=>n==="*";function ly(n,e){let t=n.split("/"),i=t.length;return t.some(Id)&&(i+=ay),e&&(i+=ry),t.filter(r=>!Id(r)).reduce((r,s)=>r+(ny.test(s)?iy:s===""?sy:oy),i)}function uy(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function cy(n,e,t){let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",h=Nd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),f=l.route;if(!h&&u&&t&&!i[i.length-1].route.index&&(h=Nd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:ds([s,h.pathname]),pathnameBase:dy(ds([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=ds([s,h.pathnameBase]))}return o}function Nd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=hy(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,h)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}const _=a[h];return m&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:n}}function hy(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),C0(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function fy(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return C0(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function R0(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}const ds=n=>n.join("/").replace(/\/\/+/g,"/"),dy=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/");function py(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const D0=["post","put","patch","delete"];new Set(D0);const my=["get",...D0];new Set(my);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},xl.apply(this,arguments)}const gy=Ee.createContext(null),vy=Ee.createContext(null),I0=Ee.createContext(null),Ol=Ee.createContext(null),Ul=Ee.createContext({outlet:null,matches:[],isDataRoute:!1}),N0=Ee.createContext(null);function lf(){return Ee.useContext(Ol)!=null}function xy(){return lf()||tn(!1),Ee.useContext(Ol).location}function _y(n,e){return yy(n,e)}function yy(n,e,t,i){lf()||tn(!1);let{navigator:r}=Ee.useContext(I0),{matches:s}=Ee.useContext(Ul),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=xy(),c;if(e){var h;let p=typeof e=="string"?Fl(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||tn(!1),c=p}else c=u;let f=c.pathname||"/",m=f;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Q_(n,{pathname:m}),d=by(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:ds([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:ds([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,t,i);return e&&d?Ee.createElement(Ol.Provider,{value:{location:xl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Li.Pop}},d):d}function Sy(){let n=Py(),e=py(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ee.createElement(Ee.Fragment,null,Ee.createElement("h2",null,"Unexpected Application Error!"),Ee.createElement("h3",{style:{fontStyle:"italic"}},e),t?Ee.createElement("pre",{style:r},t):null,null)}const wy=Ee.createElement(Sy,null);class My extends Ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Ee.createElement(Ul.Provider,{value:this.props.routeContext},Ee.createElement(N0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ey(n){let{routeContext:e,match:t,children:i}=n,r=Ee.useContext(gy);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),Ee.createElement(Ul.Provider,{value:e},i)}function by(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if((s=t)!=null&&s.errors)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);c>=0||tn(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:f,errors:m}=t,_=h.route.loader&&f[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,f)=>{let m,_=!1,d=null,p=null;t&&(m=a&&h.route.id?a[h.route.id]:void 0,d=h.route.errorElement||wy,l&&(u<0&&f===0?(_=!0,p=null):u===f&&(_=!0,p=h.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),x=()=>{let v;return m?v=d:_?v=p:h.route.Component?v=Ee.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=c,Ee.createElement(Ey,{match:h,routeContext:{outlet:c,matches:g,isDataRoute:t!=null},children:v})};return t&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?Ee.createElement(My,{location:t.location,revalidation:t.revalidation,component:d,error:m,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var th=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(th||{});function Ty(n){let e=Ee.useContext(vy);return e||tn(!1),e}function Cy(n){let e=Ee.useContext(Ul);return e||tn(!1),e}function Ay(n){let e=Cy(),t=e.matches[e.matches.length-1];return t.route.id||tn(!1),t.route.id}function Py(){var n;let e=Ee.useContext(N0),t=Ty(th.UseRouteError),i=Ay(th.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function no(n){tn(!1)}function Ly(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Li.Pop,navigator:s,static:o=!1,future:a}=n;lf()&&tn(!1);let l=e.replace(/^\/*/,"/"),u=Ee.useMemo(()=>({basename:l,navigator:s,static:o,future:xl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Fl(i));let{pathname:c="/",search:h="",hash:f="",state:m=null,key:_="default"}=i,d=Ee.useMemo(()=>{let p=R0(c,l);return p==null?null:{location:{pathname:p,search:h,hash:f,state:m,key:_},navigationType:r}},[l,c,h,f,m,_,r]);return d==null?null:Ee.createElement(I0.Provider,{value:u},Ee.createElement(Ol.Provider,{children:t,value:d}))}function Ry(n){let{children:e,location:t}=n;return _y(nh(e),t)}new Promise(()=>{});function nh(n,e){e===void 0&&(e=[]);let t=[];return Ee.Children.forEach(n,(i,r)=>{if(!Ee.isValidElement(i))return;let s=[...e,r];if(i.type===Ee.Fragment){t.push.apply(t,nh(i.props.children,s));return}i.type!==no&&tn(!1),!i.props.index||!i.props.children||tn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=nh(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Dy="6";try{window.__reactRouterVersion=Dy}catch{}const Iy="startTransition",kd=Ov[Iy];function Ny(n){let{basename:e,children:t,future:i,window:r}=n,s=Ee.useRef();s.current==null&&(s.current=Z_({window:r,v5Compat:!0}));let o=s.current,[a,l]=Ee.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=Ee.useCallback(h=>{u&&kd?kd(()=>l(h)):l(h)},[l,u]);return Ee.useLayoutEffect(()=>o.listen(c),[o,c]),Ee.createElement(Ly,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:i})}var zd;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(zd||(zd={}));var Fd;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Fd||(Fd={}));function ei({title:n,image:e,description:t,link:i,id:r,page:s}){const o=a=>{s?window.location.href=s:window.open(i,"_blank")};return V.jsxs("div",{children:[V.jsx("a",{onClick:o,children:V.jsx("img",{className:"coverPic",id:r,src:e,alt:n})}),V.jsx("h1",{className:"heavyMono inline",children:n}),V.jsx("br",{}),V.jsx("p",{className:"lightSans inline",children:t})]})}const ky="/assets/musicpic-CIjuZLbN.jpg",zy="/assets/apppic-wTbqP9mg.png",Fy="/assets/passgenpic-eWsfobIv.png",Oy="/assets/stencil-BWnAO7B4.png",Uy="/assets/videocrop-Cx5bD8VR.gif",k0="/assets/DSC07276-BvdFngG2.jpg",By="/assets/sandboxpic-CkuIGZWD.png",Vy="/assets/roverpic-DKQymvUg.jpg",Gy="/assets/go1pic-4keR3ekc.png";function Hy(){return V.jsxs("div",{children:[V.jsx(ei,{image:Uy,id:"video",title:"Motion Simulator Software & Platform",description:"Control your 2DOF Arduino motion simulator and view its corresponding telemetry.",link:"https://github.com/colemaring/Motion-Master"}),V.jsx(ei,{image:Vy,title:"RE-RASSOR rover",description:"Research and Education – Regolith Advanced Surface Systems Operational Robot.",link:"https://github.com/colemaring/RE-RASSOR-lightweight"}),V.jsx(ei,{image:ky,title:"Musical Scale Trainer",description:"Practice your scales for any instrument. (Hackathon project)",link:"https://devpost.com/software/scale-sense"}),V.jsx(ei,{image:Oy,title:"Stencil Creator",description:"Create custom text stencils in a 3D environment with real-time rendering.",page:"stencil"}),V.jsx(ei,{image:By,title:"Minecraft Sandbox Terrain Visualizer",description:"A real-time Minecraft terrain visualizer for augmented reality sandboxes using Xbox Kinect.",link:"https://github.com/colemaring/MC-AR-Sandbox"}),V.jsx(ei,{image:Gy,title:"Hand Gesture Controlled Robot Dog",description:"Controlling a Unitree Go1 using hand gestures using Google's MediaPipe engine.",link:"https://github.com/colemaring/go1-project"}),V.jsx(ei,{image:k0,title:"Voron 0.2",description:"DIY 3D printer.",page:"voron"}),V.jsx(ei,{image:zy,title:"Conversation Starter Generator",description:"Generate location relevant conversation starters from anywhere.",link:"https://github.com/colemaring/ConvoAI"}),V.jsx(ei,{image:Fy,title:"Password Generator",description:"Generate passwords given your choice of stength and security.",page:"passwordgen"})]})}function Wy(){return V.jsxs("div",{id:"header",children:[V.jsxs("div",{id:"headerText",children:[V.jsx("h1",{className:"heavyMono",children:"Colton Maring"}),V.jsx("h2",{className:"mediumMono",children:" CS Student"})]}),V.jsxs("div",{id:"headerButtons",children:[V.jsx("a",{href:"https://github.com/colemaring",target:"_blank",rel:"noopener noreferrer",children:V.jsx("button",{className:"headerButton heavyMono",id:"githubButton",children:"Github"})}),V.jsx("a",{href:"https://www.linkedin.com/in/coltonmaring/",target:"_blank",rel:"noopener noreferrer",children:V.jsx("button",{className:"headerButton heavyMono",id:"linkedinButton",children:"LinkedIn"})}),V.jsx("a",{href:"/ColtonMaringResume.pdf",target:"_blank",rel:"noopener noreferrer",children:V.jsx("button",{className:"headerButton heavyMono",id:"resumeButton",children:"Resume"})})]})]})}const jy="/assets/stadium-BGRTqGZU.jpg";function Xy(){return V.jsxs("div",{id:"content",children:[V.jsx(Wy,{}),V.jsx("img",{id:"stadiumpic",src:jy,alt:"UCF stadium"}),V.jsx("div",{className:"center",children:V.jsx("h1",{className:"heavyMono",children:"Projects"})}),V.jsx(Hy,{}),V.jsx("div",{id:"footer",className:"lightSans",children:"Up to date, September 2024"})]})}const qy="/assets/20240124_143929-CF9craqK.jpg",$y="/assets/20240124_143940-Bxlfh0Ee.jpg",Yy="/assets/20240126_230924-Bs6Kbli0.jpg",Zy="/assets/20240127_114500-BmF7HZ-a.jpg",Ky="/assets/20240128_160400-ry9XElfD.jpg",Jy="/assets/20240130_133854-7KXahReP.jpg",Qy="/assets/20240131_220246-SqPPHOGH.jpg",eS="/assets/20240201_165820-D2j4-f2l.jpg",tS="/assets/20240203_120609-Da6FCiQx.jpg",nS="/assets/20240213_210318-p4Y1lq7b.jpg",iS="/assets/20240213_210335-DmA1yo4-.jpg",rS="/assets/DSC07277-Gem3davb.jpg";function sS(){return V.jsxs("div",{id:"content",children:[V.jsx("h1",{children:"Voron 0.2"}),V.jsx("p",{children:"This page documents my experience with building a siboor voron 0.2."}),V.jsx("img",{src:qy,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("img",{src:$y,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("p",{children:"First I assembled the frame, triple checking that the extrusions are square using a known flat surface, such as a pane of glass. I also cleaned and lubricated the linear rails and trammed the z axis to ensure free movement and zero binding. Having a square frame and rails are extremebly important. My kit came with a kirigami bed."}),V.jsx("img",{src:Yy,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("img",{src:Zy,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("p",{children:'Next was putting together the stepper and belt pulleys. Then I installed the X-beam and the linear rail that sits atop. This X rail should be the "tighter" of the rails. I was happy I spent time squaring the frame, because at this point the beam could move freely with zero slop. The threaded Z rod in the back is what moved the bed up and down.'}),V.jsx("img",{src:Ky,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("p",{children:"Since this is a CoreXY printer, both belts need to be tensioned accurately. I used a insturment tuner on my phone and plucked the belts to ensure that each belt was resonating at the same frequency, which I believe was 110hz. I also installed the heated bed and magnetic sheet to hold the build plate."}),V.jsx("img",{src:Jy,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsxs("p",{children:["Next was assembling the toolhead and moutning it on the X rail which was a tedious process."," "]}),V.jsx("img",{src:Qy,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("p",{children:"Here is version 1 of the electronics wiring."}),V.jsx("img",{src:eS,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("img",{src:tS,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("p",{children:"Acrylic panels and finishing touches before the top hat."}),V.jsx("img",{src:nS,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("img",{src:iS,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("p",{children:"Mainboard wiring"}),V.jsx("img",{src:k0,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("img",{src:rS,alt:"Description of image 1",style:{width:"400px",height:"auto"}}),V.jsx("p",{children:"Glam shots. This build turned out well! I have 150+ hours on this machine and it prints like a beast. Some things I would like to upgrade is the electronics cooling fan, bowden drive, and raspberry pi camera."})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="150",Rr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oS=0,Od=1,aS=2,z0=1,lS=2,io=3,Wi=0,fn=1,Ri=2,Vi=0,ps=1,Ud=2,Bd=3,Vd=4,uS=5,Xr=100,cS=101,hS=102,Gd=103,Hd=104,fS=200,dS=201,pS=202,mS=203,F0=204,O0=205,gS=206,vS=207,xS=208,_S=209,yS=210,SS=0,wS=1,MS=2,ih=3,ES=4,bS=5,TS=6,CS=7,U0=0,AS=1,PS=2,di=0,LS=1,RS=2,DS=3,IS=4,NS=5,B0=300,bs=301,Ts=302,rh=303,sh=304,Bl=306,oh=1e3,kn=1001,ah=1002,Ht=1003,Wd=1004,Su=1005,wn=1006,kS=1007,No=1008,_r=1009,zS=1010,FS=1011,V0=1012,OS=1013,lr=1014,ur=1015,ko=1016,US=1017,BS=1018,ms=1020,VS=1021,zn=1023,GS=1024,HS=1025,dr=1026,Cs=1027,WS=1028,jS=1029,XS=1030,qS=1031,$S=1033,wu=33776,Mu=33777,Eu=33778,bu=33779,jd=35840,Xd=35841,qd=35842,$d=35843,YS=36196,Yd=37492,Zd=37496,Kd=37808,Jd=37809,Qd=37810,ep=37811,tp=37812,np=37813,ip=37814,rp=37815,sp=37816,op=37817,ap=37818,lp=37819,up=37820,cp=37821,Tu=36492,ZS=36283,hp=36284,fp=36285,dp=36286,yr=3e3,et=3001,KS=3200,JS=3201,cf=0,QS=1,Xn="srgb",zo="srgb-linear",G0="display-p3",Cu=7680,e1=519,pp=35044,mp="300 es",lh=1035;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,gp=180/Math.PI;function Is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function t1(n,e){return(n%e+e)%e}function Pu(n,e,t){return(1-t)*n+t*e}function vp(n){return(n&n-1)===0&&n!==0}function n1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],m=i[5],_=i[8],d=r[0],p=r[3],g=r[6],x=r[1],v=r[4],y=r[7],w=r[2],T=r[5],A=r[8];return s[0]=o*d+a*x+l*w,s[3]=o*p+a*v+l*T,s[6]=o*g+a*y+l*A,s[1]=u*d+c*x+h*w,s[4]=u*p+c*v+h*T,s[7]=u*g+c*y+h*A,s[2]=f*d+m*x+_*w,s[5]=f*p+m*v+_*T,s[8]=f*g+m*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,m=u*s-o*l,_=t*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=h*d,e[1]=(r*u-c*i)*d,e[2]=(a*i-r*o)*d,e[3]=f*d,e[4]=(c*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=m*d,e[7]=(i*l-u*t)*d,e[8]=(o*t-i*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lu.makeScale(e,t)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new zt;function H0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _l(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class Sr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(h!==d||l!==f||u!==m||c!==_){let p=1-a;const g=l*f+u*m+c*_+h*d,x=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,g*x);p=Math.sin(p*T)/w,a=Math.sin(a*T)/w}const y=a*x;if(l=l*p+f*y,u=u*p+m*y,c=c*p+_*y,h=h*p+d*y,p===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=w,u*=w,c*=w,h*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+c*h+l*m-u*f,e[t+1]=l*_+c*f+u*h-a*m,e[t+2]=u*_+c*m+a*f-l*h,e[t+3]=c*_-a*h-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h-f*m*_;break;case"YXZ":this._x=f*c*h+u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h+f*m*_;break;case"ZXY":this._x=f*c*h-u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h-f*m*_;break;case"ZYX":this._x=f*c*h-u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h+f*m*_;break;case"YZX":this._x=f*c*h+u*m*_,this._y=u*m*h+f*c*_,this._z=u*c*_-f*m*h,this._w=u*c*h-f*m*_;break;case"XZY":this._x=f*c*h-u*m*_,this._y=u*m*h-f*c*_,this._z=u*c*_+f*m*h,this._w=u*c*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-h*-o,this.y=c*l+f*-o+h*-s-u*-a,this.z=h*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new R,xp=new Sr;function gs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Du(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const i1=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),r1=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Di=new R;function s1(n){return n.convertSRGBToLinear(),Di.set(n.r,n.g,n.b).applyMatrix3(r1),n.setRGB(Di.x,Di.y,Di.z)}function o1(n){return Di.set(n.r,n.g,n.b).applyMatrix3(i1),n.setRGB(Di.x,Di.y,Di.z).convertLinearToSRGB()}const a1={[zo]:n=>n,[Xn]:n=>n.convertSRGBToLinear(),[G0]:s1},l1={[zo]:n=>n,[Xn]:n=>n.convertLinearToSRGB(),[G0]:o1},Bt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return zo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=a1[e],r=l1[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ir;class W0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ir===void 0&&(Ir=_l("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_l("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gs(t[i]/255)*255):t[i]=gs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class j0{constructor(e=null){this.isSource=!0,this.uuid=Is(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Iu(r[o].image)):s.push(Iu(r[o]))}else s=Iu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Iu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u1=0;class dn extends Ar{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,i=kn,r=kn,s=wn,o=No,a=zn,l=_r,u=dn.DEFAULT_ANISOTROPY,c=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Is(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=B0;dn.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+d)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(m+1)/2,w=(g+1)/2,T=(c+f)/4,A=(h+d)/4,S=(_+p)/4;return v>y&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=S/s),this.set(i,r,s,t),this}let x=Math.sqrt((p-_)*(p-_)+(h-d)*(h-d)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(h-d)/x,this.z=(f-c)/x,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wr extends Ar{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new j0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class X0 extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c1 extends dn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],h=e[l+1],f=e[l+2];c<t&&(t=c),h<i&&(i=h),f<r&&(r=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),h=e.getY(l),f=e.getZ(l);c<t&&(t=c),h<i&&(i=h),f<r&&(r=f),c>s&&(s=c),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ki.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ki)}else i.boundingBox===null&&i.computeBoundingBox(),Nu.copy(i.boundingBox),Nu.applyMatrix4(e.matrixWorld),this.union(Nu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),ca.subVectors(this.max,Ws),Nr.subVectors(e.a,Ws),kr.subVectors(e.b,Ws),zr.subVectors(e.c,Ws),yi.subVectors(kr,Nr),Si.subVectors(zr,kr),Ji.subVectors(Nr,zr);let t=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Ji.z,Ji.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Ji.z,0,-Ji.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Ji.y,Ji.x,0];return!ku(t,Nr,kr,zr,ca)||(t=[1,0,0,0,1,0,0,0,1],!ku(t,Nr,kr,zr,ca))?!1:(ha.crossVectors(yi,Si),t=[ha.x,ha.y,ha.z],ku(t,Nr,kr,zr,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new R,new R,new R,new R,new R,new R,new R,new R],Ki=new R,Nu=new jo,Nr=new R,kr=new R,zr=new R,yi=new R,Si=new R,Ji=new R,Ws=new R,ca=new R,ha=new R,Qi=new R;function ku(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qi.fromArray(n,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),u=t.dot(Qi),c=i.dot(Qi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const h1=new jo,js=new R,zu=new R;class Vl{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):h1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(zu)),this.expandByPoint(js.copy(e.center).sub(zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new R,Fu=new R,fa=new R,wi=new R,Ou=new R,da=new R,Uu=new R;class q0{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fu.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Fu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=wi.dot(this.direction),l=-wi.dot(fa),u=wi.lengthSq(),c=Math.abs(1-o*o);let h,f,m,_;if(c>0)if(h=o*l-a,f=o*a-l,_=s*c,h>=0)if(f>=-_)if(f<=_){const d=1/c;h*=d,f*=d,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fu).addScaledVector(fa,f),m}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,s){Ou.subVectors(t,e),da.subVectors(i,e),Uu.crossVectors(Ou,da);let o=this.direction.dot(Uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(da.crossVectors(wi,da));if(l<0)return null;const u=a*this.direction.dot(Ou.cross(wi));if(u<0||l+u>o)return null;const c=-a*wi.dot(Uu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,h,f,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*h,_=a*c,d=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=m+_*u,t[5]=f-d*u,t[9]=-a*l,t[2]=d-f*u,t[6]=_+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*h,_=u*c,d=u*h;t[0]=f+d*a,t[4]=_*a-m,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=m*a-_,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*h,_=u*c,d=u*h;t[0]=f-d*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*c,t[9]=d-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*h,_=a*c,d=a*h;t[0]=l*c,t[4]=_*u-m,t[8]=f*u+d,t[1]=l*h,t[5]=d*u+f,t[9]=m*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,_=a*l,d=a*u;t[0]=l*c,t[4]=d-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*h+_,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*u,_=a*l,d=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+d,t[5]=o*c,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*c,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f1,e,d1)}lookAt(e,t,i){const r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),pa.crossVectors(on,Mi),r[0]=Mi.x,r[4]=pa.x,r[8]=on.x,r[1]=Mi.y,r[5]=pa.y,r[9]=on.y,r[2]=Mi.z,r[6]=pa.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],m=i[13],_=i[2],d=i[6],p=i[10],g=i[14],x=i[3],v=i[7],y=i[11],w=i[15],T=r[0],A=r[4],S=r[8],b=r[12],L=r[1],W=r[5],K=r[9],U=r[13],N=r[2],X=r[6],Z=r[10],ee=r[14],D=r[3],G=r[7],H=r[11],ie=r[15];return s[0]=o*T+a*L+l*N+u*D,s[4]=o*A+a*W+l*X+u*G,s[8]=o*S+a*K+l*Z+u*H,s[12]=o*b+a*U+l*ee+u*ie,s[1]=c*T+h*L+f*N+m*D,s[5]=c*A+h*W+f*X+m*G,s[9]=c*S+h*K+f*Z+m*H,s[13]=c*b+h*U+f*ee+m*ie,s[2]=_*T+d*L+p*N+g*D,s[6]=_*A+d*W+p*X+g*G,s[10]=_*S+d*K+p*Z+g*H,s[14]=_*b+d*U+p*ee+g*ie,s[3]=x*T+v*L+y*N+w*D,s[7]=x*A+v*W+y*X+w*G,s[11]=x*S+v*K+y*Z+w*H,s[15]=x*b+v*U+y*ee+w*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*m-i*l*m)+d*(+t*l*m-t*u*f+s*o*f-r*o*m+r*u*c-s*l*c)+p*(+t*u*h-t*a*m-s*o*h+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],x=h*p*u-d*f*u+d*l*m-a*p*m-h*l*g+a*f*g,v=_*f*u-c*p*u-_*l*m+o*p*m+c*l*g-o*f*g,y=c*d*u-_*h*u+_*a*m-o*d*m-c*a*g+o*h*g,w=_*h*l-c*d*l-_*a*f+o*d*f+c*a*p-o*h*p,T=t*x+i*v+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(d*f*s-h*p*s-d*r*m+i*p*m+h*r*g-i*f*g)*A,e[2]=(a*p*s-d*l*s+d*r*u-i*p*u-a*r*g+i*l*g)*A,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(c*p*s-_*f*s+_*r*m-t*p*m-c*r*g+t*f*g)*A,e[6]=(_*l*s-o*p*s-_*r*u+t*p*u+o*r*g-t*l*g)*A,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*m+t*l*m)*A,e[8]=y*A,e[9]=(_*h*s-c*d*s-_*i*m+t*d*m+c*i*g-t*h*g)*A,e[10]=(o*d*s-_*a*s+_*i*u-t*d*u-o*i*g+t*a*g)*A,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*m-t*a*m)*A,e[12]=w*A,e[13]=(c*d*r-_*h*r+_*i*f-t*d*f-c*i*p+t*h*p)*A,e[14]=(_*a*r-o*d*r-_*i*l+t*d*l+o*i*p-t*a*p)*A,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,m=s*c,_=s*h,d=o*c,p=o*h,g=a*h,x=l*u,v=l*c,y=l*h,w=i.x,T=i.y,A=i.z;return r[0]=(1-(d+g))*w,r[1]=(m+y)*w,r[2]=(_-v)*w,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(f+g))*T,r[6]=(p+x)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(p-x)*A,r[10]=(1-(f+d))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const u=1/s,c=1/o,h=1/a;return Pn.elements[0]*=u,Pn.elements[1]*=u,Pn.elements[2]*=u,Pn.elements[4]*=c,Pn.elements[5]*=c,Pn.elements[6]*=c,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,t.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),h=(t+e)*l,f=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fr=new R,Pn=new at,f1=new R(0,0,0),d1=new R(1,1,1),Mi=new R,pa=new R,on=new R,_p=new at,yp=new Sr;class Gl{constructor(e=0,t=0,i=0,r=Gl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_p,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yp.setFromEuler(this),this.setFromQuaternion(yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gl.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p1=0;const Sp=new R,Or=new Sr,ii=new at,ma=new R,Xs=new R,m1=new R,g1=new Sr,wp=new R(1,0,0),Mp=new R(0,1,0),Ep=new R(0,0,1),v1={type:"added"},bp={type:"removed"};class jt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new R,t=new Gl,i=new Sr,r=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new zt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Mp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,t){return Sp.copy(e).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Mp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ma.copy(e):ma.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Xs,ma,this.up):ii.lookAt(ma,Xs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ii),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,m1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,g1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new R(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new R,ri=new R,Bu=new R,si=new R,Ur=new R,Br=new R,Tp=new R,Vu=new R,Gu=new R,Hu=new R;class ui{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ln.subVectors(e,t),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ln.subVectors(r,t),ri.subVectors(i,t),Bu.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot(ri),l=Ln.dot(Bu),u=ri.dot(ri),c=ri.dot(Bu),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,si),si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,si),l.set(0,0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l}static isFrontFacing(e,t,i,r){return Ln.subVectors(i,t),ri.subVectors(e,t),Ln.cross(ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ln.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ui.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Br.subVectors(s,i),Vu.subVectors(e,i);const l=Ur.dot(Vu),u=Br.dot(Vu);if(l<=0&&u<=0)return t.copy(i);Gu.subVectors(e,r);const c=Ur.dot(Gu),h=Br.dot(Gu);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ur,o);Hu.subVectors(e,s);const m=Ur.dot(Hu),_=Br.dot(Hu);if(_>=0&&m<=_)return t.copy(s);const d=m*u-l*_;if(d<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Br,a);const p=c*_-m*h;if(p<=0&&h-c>=0&&m-_>=0)return Tp.subVectors(s,r),a=(h-c)/(h-c+(m-_)),t.copy(r).addScaledVector(Tp,a);const g=1/(p+d+f);return o=d*g,a=f*g,t.copy(i).addScaledVector(Ur,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let x1=0;class Pr extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=ps,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=F0,this.blendDst=O0,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cu,this.stencilZFail=Cu,this.stencilZPass=Cu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Wu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Bt.workingColorSpace){if(e=t1(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wu(o,s,e+1/3),this.g=Wu(o,s,e),this.b=Wu(o,s,e-1/3)}return Bt.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const i=Y0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Du(e.r),this.g=Du(e.g),this.b=Du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Bt.fromWorkingColorSpace(It.copy(this),e),kt(It.r*255,0,255)<<16^kt(It.g*255,0,255)<<8^kt(It.b*255,0,255)<<0}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(It.copy(this),t);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Xn){Bt.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=i,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(ga);const i=Pu(Rn.h,ga.h,t),r=Pu(Rn.s,ga.s,t),s=Pu(Rn.l,ga.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new qe;qe.NAMES=Y0;class Z0 extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new R,va=new ue;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class K0 extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class J0 extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pn extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _1=0;const _n=new at,ju=new jt,Vr=new R,an=new jo,qs=new jo,Et=new R;class Bn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?J0:K0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(an.min,qs.min),an.expandByPoint(Et),Et.addVectors(an.max,qs.max),an.expandByPoint(Et)):(an.expandByPoint(qs.min),an.expandByPoint(qs.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Et.fromBufferAttribute(a,u),l&&(Vr.fromBufferAttribute(e,u),Et.add(Vr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new R,c[L]=new R;const h=new R,f=new R,m=new R,_=new ue,d=new ue,p=new ue,g=new R,x=new R;function v(L,W,K){h.fromArray(r,L*3),f.fromArray(r,W*3),m.fromArray(r,K*3),_.fromArray(o,L*2),d.fromArray(o,W*2),p.fromArray(o,K*2),f.sub(h),m.sub(h),d.sub(_),p.sub(_);const U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(U),x.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(U),u[L].add(g),u[W].add(g),u[K].add(g),c[L].add(x),c[W].add(x),c[K].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let L=0,W=y.length;L<W;++L){const K=y[L],U=K.start,N=K.count;for(let X=U,Z=U+N;X<Z;X+=3)v(i[X+0],i[X+1],i[X+2])}const w=new R,T=new R,A=new R,S=new R;function b(L){A.fromArray(s,L*3),S.copy(A);const W=u[L];w.copy(W),w.sub(A.multiplyScalar(A.dot(W))).normalize(),T.crossVectors(S,W);const U=T.dot(c[L])<0?-1:1;l[L*4]=w.x,l[L*4+1]=w.y,l[L*4+2]=w.z,l[L*4+3]=U}for(let L=0,W=y.length;L<W;++L){const K=y[L],U=K.start,N=K.count;for(let X=U,Z=U+N;X<Z;X+=3)b(i[X+0]),b(i[X+1]),b(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,u=new R,c=new R,h=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*c;for(let g=0;g<c;g++)f[_++]=u[m++]}return new Zt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,m=h.length;f<m;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cp=new at,Wn=new q0,xa=new Vl,Ap=new R,$s=new R,Ys=new R,Zs=new R,Xu=new R,_a=new R,ya=new ue,Sa=new ue,wa=new ue,qu=new R,Ma=new R;class En extends jt{constructor(e=new Bn,t=new Z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_a.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Xu.fromBufferAttribute(h,e),o?_a.addScaledVector(Xu,c):_a.addScaledVector(Xu.sub(t),c))}t.add(_a)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),xa.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(xa,Ap)===null||Wn.origin.distanceToSquared(Ap)>(e.far-e.near)**2))||(Cp.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Cp),i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,h=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){const d=h[m],p=r[d.materialIndex],g=Math.max(d.start,f.start),x=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let v=g,y=x;v<y;v+=3){const w=a.getX(v),T=a.getX(v+1),A=a.getX(v+2);o=Ea(this,p,e,Wn,u,c,w,T,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let d=m,p=_;d<p;d+=3){const g=a.getX(d),x=a.getX(d+1),v=a.getX(d+2);o=Ea(this,r,e,Wn,u,c,g,x,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=h.length;m<_;m++){const d=h[m],p=r[d.materialIndex],g=Math.max(d.start,f.start),x=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let v=g,y=x;v<y;v+=3){const w=v,T=v+1,A=v+2;o=Ea(this,p,e,Wn,u,c,w,T,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let d=m,p=_;d<p;d+=3){const g=d,x=d+1,v=d+2;o=Ea(this,r,e,Wn,u,c,g,x,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function y1(n,e,t,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ma);return u<t.near||u>t.far?null:{distance:u,point:Ma.clone(),object:n}}function Ea(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,$s),n.getVertexPosition(a,Ys),n.getVertexPosition(l,Zs);const u=y1(n,e,t,i,$s,Ys,Zs,qu);if(u){r&&(ya.fromBufferAttribute(r,o),Sa.fromBufferAttribute(r,a),wa.fromBufferAttribute(r,l),u.uv=ui.getUV(qu,$s,Ys,Zs,ya,Sa,wa,new ue)),s&&(ya.fromBufferAttribute(s,o),Sa.fromBufferAttribute(s,a),wa.fromBufferAttribute(s,l),u.uv2=ui.getUV(qu,$s,Ys,Zs,ya,Sa,wa,new ue));const c={a:o,b:a,c:l,normal:new R,materialIndex:0};ui.getNormal($s,Ys,Zs,c.normal),u.face=c}return u}class Mr extends Bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(h,2));function _(d,p,g,x,v,y,w,T,A,S,b){const L=y/A,W=w/S,K=y/2,U=w/2,N=T/2,X=A+1,Z=S+1;let ee=0,D=0;const G=new R;for(let H=0;H<Z;H++){const ie=H*W-U;for(let k=0;k<X;k++){const Q=k*L-K;G[d]=Q*x,G[p]=ie*v,G[g]=N,u.push(G.x,G.y,G.z),G[d]=0,G[p]=0,G[g]=T>0?1:-1,c.push(G.x,G.y,G.z),h.push(k/A),h.push(1-H/S),ee+=1}}for(let H=0;H<S;H++)for(let ie=0;ie<A;ie++){const k=f+ie+X*H,Q=f+ie+X*(H+1),se=f+(ie+1)+X*(H+1),F=f+(ie+1)+X*H;l.push(k,Q,F),l.push(Q,se,F),D+=6}a.addGroup(m,D,b),m+=D,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=As(n[t]);for(const r in i)e[r]=i[r]}return e}function S1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Q0(n){return n.getRenderTarget()===null&&n.outputEncoding===et?Xn:zo}const w1={clone:As,merge:Vt};var M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=S1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ev extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class un extends ev{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gp*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Au*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,Hr=1;class b1 extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new un(Gr,Hr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new un(Gr,Hr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new un(Gr,Hr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new un(Gr,Hr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new un(Gr,Hr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new un(Gr,Hr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=di,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class tv extends dn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T1 extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Vi});s.uniforms.tEquirect.value=t;const o=new En(r,s),a=t.minFilter;return t.minFilter===No&&(t.minFilter=wn),new b1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const $u=new R,C1=new R,A1=new zt;let nr=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$u.subVectors(i,t).cross(C1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||A1.getNormalMatrix(e),r=this.coplanarPoint($u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Wr=new Vl,ba=new R;class hf{constructor(e=new nr,t=new nr,i=new nr,r=new nr,s=new nr,o=new nr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],h=i[7],f=i[8],m=i[9],_=i[10],d=i[11],p=i[12],g=i[13],x=i[14],v=i[15];return t[0].setComponents(a-r,h-l,d-f,v-p).normalize(),t[1].setComponents(a+r,h+l,d+f,v+p).normalize(),t[2].setComponents(a+s,h+u,d+m,v+g).normalize(),t[3].setComponents(a-s,h-u,d-m,v-g).normalize(),t[4].setComponents(a-o,h-c,d-_,v-x).normalize(),t[5].setComponents(a+o,h+c,d+_,v+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function P1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,f=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,h,f),u.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const f=c.array,m=c.updateRange;n.bindBuffer(h,u),m.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:o,remove:a,update:l}}class ff extends Bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<c;g++){const x=g*f-o;for(let v=0;v<u;v++){const y=v*h-s;_.push(y,-x,0),d.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const v=x+u*g,y=x+u*(g+1),w=x+1+u*(g+1),T=x+1+u*g;m.push(v,y,T),m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.width,e.height,e.widthSegments,e.heightSegments)}}var L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,R1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z1="vec3 transformed = vec3( position );",F1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,U1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ow=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_w=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,yw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ww=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ew=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ow=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ww=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$w=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,tM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,yM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,SM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,wM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,MM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,EM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,TM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,NM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,BM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,oE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:L1,alphamap_pars_fragment:R1,alphatest_fragment:D1,alphatest_pars_fragment:I1,aomap_fragment:N1,aomap_pars_fragment:k1,begin_vertex:z1,beginnormal_vertex:F1,bsdfs:O1,iridescence_fragment:U1,bumpmap_pars_fragment:B1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:G1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:W1,color_fragment:j1,color_pars_fragment:X1,color_pars_vertex:q1,color_vertex:$1,common:Y1,cube_uv_reflection_fragment:Z1,defaultnormal_vertex:K1,displacementmap_pars_vertex:J1,displacementmap_vertex:Q1,emissivemap_fragment:ew,emissivemap_pars_fragment:tw,encodings_fragment:nw,encodings_pars_fragment:iw,envmap_fragment:rw,envmap_common_pars_fragment:sw,envmap_pars_fragment:ow,envmap_pars_vertex:aw,envmap_physical_pars_fragment:_w,envmap_vertex:lw,fog_vertex:uw,fog_pars_vertex:cw,fog_fragment:hw,fog_pars_fragment:fw,gradientmap_pars_fragment:dw,lightmap_fragment:pw,lightmap_pars_fragment:mw,lights_lambert_fragment:gw,lights_lambert_pars_fragment:vw,lights_pars_begin:xw,lights_toon_fragment:yw,lights_toon_pars_fragment:Sw,lights_phong_fragment:ww,lights_phong_pars_fragment:Mw,lights_physical_fragment:Ew,lights_physical_pars_fragment:bw,lights_fragment_begin:Tw,lights_fragment_maps:Cw,lights_fragment_end:Aw,logdepthbuf_fragment:Pw,logdepthbuf_pars_fragment:Lw,logdepthbuf_pars_vertex:Rw,logdepthbuf_vertex:Dw,map_fragment:Iw,map_pars_fragment:Nw,map_particle_fragment:kw,map_particle_pars_fragment:zw,metalnessmap_fragment:Fw,metalnessmap_pars_fragment:Ow,morphcolor_vertex:Uw,morphnormal_vertex:Bw,morphtarget_pars_vertex:Vw,morphtarget_vertex:Gw,normal_fragment_begin:Hw,normal_fragment_maps:Ww,normal_pars_fragment:jw,normal_pars_vertex:Xw,normal_vertex:qw,normalmap_pars_fragment:$w,clearcoat_normal_fragment_begin:Yw,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:Kw,iridescence_pars_fragment:Jw,output_fragment:Qw,packing:eM,premultiplied_alpha_fragment:tM,project_vertex:nM,dithering_fragment:iM,dithering_pars_fragment:rM,roughnessmap_fragment:sM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:lM,shadowmap_vertex:uM,shadowmask_pars_fragment:cM,skinbase_vertex:hM,skinning_pars_vertex:fM,skinning_vertex:dM,skinnormal_vertex:pM,specularmap_fragment:mM,specularmap_pars_fragment:gM,tonemapping_fragment:vM,tonemapping_pars_fragment:xM,transmission_fragment:_M,transmission_pars_fragment:yM,uv_pars_fragment:SM,uv_pars_vertex:wM,uv_vertex:MM,uv2_pars_fragment:EM,uv2_pars_vertex:bM,uv2_vertex:TM,worldpos_vertex:CM,background_vert:AM,background_frag:PM,backgroundCube_vert:LM,backgroundCube_frag:RM,cube_vert:DM,cube_frag:IM,depth_vert:NM,depth_frag:kM,distanceRGBA_vert:zM,distanceRGBA_frag:FM,equirect_vert:OM,equirect_frag:UM,linedashed_vert:BM,linedashed_frag:VM,meshbasic_vert:GM,meshbasic_frag:HM,meshlambert_vert:WM,meshlambert_frag:jM,meshmatcap_vert:XM,meshmatcap_frag:qM,meshnormal_vert:$M,meshnormal_frag:YM,meshphong_vert:ZM,meshphong_frag:KM,meshphysical_vert:JM,meshphysical_frag:QM,meshtoon_vert:eE,meshtoon_frag:tE,points_vert:nE,points_frag:iE,shadow_vert:rE,shadow_frag:sE,sprite_vert:oE,sprite_frag:aE},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},qn={basic:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Vt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Vt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Vt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Vt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Vt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Vt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Vt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Vt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Vt([fe.common,fe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Vt([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};qn.physical={uniforms:Vt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ta={r:0,b:0,g:0};function lE(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,h=null,f=0,m=null;function _(p,g){let x=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=n.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),x=!0),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Bl)?(c===void 0&&(c=new En(new Mr(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:As(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==et,(h!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new En(new ff(2,2),new Er({name:"BackgroundMaterial",uniforms:As(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function d(p,g){p.getRGB(Ta,Q0(n)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:_}}function uE(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function h(N,X,Z,ee,D){let G=!1;if(o){const H=d(ee,Z,X);u!==H&&(u=H,m(u.object)),G=g(N,ee,Z,D),G&&x(N,ee,Z,D)}else{const H=X.wireframe===!0;(u.geometry!==ee.id||u.program!==Z.id||u.wireframe!==H)&&(u.geometry=ee.id,u.program=Z.id,u.wireframe=H,G=!0)}D!==null&&t.update(D,34963),(G||c)&&(c=!1,S(N,X,Z,ee),D!==null&&n.bindBuffer(34963,t.get(D).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function d(N,X,Z){const ee=Z.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let G=D[X.id];G===void 0&&(G={},D[X.id]=G);let H=G[ee];return H===void 0&&(H=p(f()),G[ee]=H),H}function p(N){const X=[],Z=[],ee=[];for(let D=0;D<r;D++)X[D]=0,Z[D]=0,ee[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:ee,object:N,attributes:{},index:null}}function g(N,X,Z,ee){const D=u.attributes,G=X.attributes;let H=0;const ie=Z.getAttributes();for(const k in ie)if(ie[k].location>=0){const se=D[k];let F=G[k];if(F===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(F=N.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;H++}return u.attributesNum!==H||u.index!==ee}function x(N,X,Z,ee){const D={},G=X.attributes;let H=0;const ie=Z.getAttributes();for(const k in ie)if(ie[k].location>=0){let se=G[k];se===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),D[k]=F,H++}u.attributes=D,u.attributesNum=H,u.index=ee}function v(){const N=u.newAttributes;for(let X=0,Z=N.length;X<Z;X++)N[X]=0}function y(N){w(N,0)}function w(N,X){const Z=u.newAttributes,ee=u.enabledAttributes,D=u.attributeDivisors;Z[N]=1,ee[N]===0&&(n.enableVertexAttribArray(N),ee[N]=1),D[N]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),D[N]=X)}function T(){const N=u.newAttributes,X=u.enabledAttributes;for(let Z=0,ee=X.length;Z<ee;Z++)X[Z]!==N[Z]&&(n.disableVertexAttribArray(Z),X[Z]=0)}function A(N,X,Z,ee,D,G){i.isWebGL2===!0&&(Z===5124||Z===5125)?n.vertexAttribIPointer(N,X,Z,D,G):n.vertexAttribPointer(N,X,Z,ee,D,G)}function S(N,X,Z,ee){if(i.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=ee.attributes,G=Z.getAttributes(),H=X.defaultAttributeValues;for(const ie in G){const k=G[ie];if(k.location>=0){let Q=D[ie];if(Q===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const se=Q.normalized,F=Q.itemSize,ce=t.get(Q);if(ce===void 0)continue;const he=ce.buffer,_e=ce.type,ye=ce.bytesPerElement;if(Q.isInterleavedBufferAttribute){const Se=Q.data,Re=Se.stride,J=Q.offset;if(Se.isInstancedInterleavedBuffer){for(let te=0;te<k.locationSize;te++)w(k.location+te,Se.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let te=0;te<k.locationSize;te++)y(k.location+te);n.bindBuffer(34962,he);for(let te=0;te<k.locationSize;te++)A(k.location+te,F/k.locationSize,_e,se,Re*ye,(J+F/k.locationSize*te)*ye)}else{if(Q.isInstancedBufferAttribute){for(let Se=0;Se<k.locationSize;Se++)w(k.location+Se,Q.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Se=0;Se<k.locationSize;Se++)y(k.location+Se);n.bindBuffer(34962,he);for(let Se=0;Se<k.locationSize;Se++)A(k.location+Se,F/k.locationSize,_e,se,F*ye,F/k.locationSize*Se*ye)}}else if(H!==void 0){const se=H[ie];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(k.location,se);break;case 3:n.vertexAttrib3fv(k.location,se);break;case 4:n.vertexAttrib4fv(k.location,se);break;default:n.vertexAttrib1fv(k.location,se)}}}}T()}function b(){K();for(const N in a){const X=a[N];for(const Z in X){const ee=X[Z];for(const D in ee)_(ee[D].object),delete ee[D];delete X[Z]}delete a[N]}}function L(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const Z in X){const ee=X[Z];for(const D in ee)_(ee[D].object),delete ee[D];delete X[Z]}delete a[N.id]}function W(N){for(const X in a){const Z=a[X];if(Z[N.id]===void 0)continue;const ee=Z[N.id];for(const D in ee)_(ee[D].object),delete ee[D];delete Z[N.id]}}function K(){U(),c=!0,u!==l&&(u=l,m(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function cE(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,h){if(h===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,h),t.update(c,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function hE(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),_=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),x=n.getParameter(36349),v=f>0,y=o||e.has("OES_texture_float"),w=v&&y,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function fE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new nr,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,g=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?c(null):u();else{const x=s?0:i,v=x*4;let y=g.clippingState||null;l.value=y,y=c(_,f,v,m);for(let w=0;w!==v;++w)y[w]=t[w];g.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,m,_){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=m;v!==d;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function dE(n){let e=new WeakMap;function t(o,a){return a===rh?o.mapping=bs:a===sh&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===rh||a===sh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new T1(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pE extends ev{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Pp=[.125,.215,.35,.446,.526,.582],rr=20,Yu=new pE,Lp=new qe;let Zu=null;const ir=(1+Math.sqrt(5))/2,jr=1/ir,Rp=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ir,jr),new R(0,ir,-jr),new R(jr,0,ir),new R(-jr,0,ir),new R(ir,jr,0),new R(-ir,jr,0)];class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu),e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ko,format:zn,encoding:yr,depthBuffer:!1},r=Ip(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(s)),this._blurMaterial=gE(s,e,t)}return r}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,Yu)}_sceneToCubeUV(e,t,i,r){const a=new un(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Lp),c.toneMapping=di,c.autoClear=!1;const m=new Z0({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new En(new Mr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Lp),d=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;Ca(r,x*v,g>2?v:0,v,v),c.setRenderTarget(r),d&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bs||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new En(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ca(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rp[(r-1)%Rp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new En(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),d=s/_,p=isFinite(s)?1+Math.floor(c*d):rr;p>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const g=[];let x=0;for(let A=0;A<rr;++A){const S=A/d,b=Math.exp(-S*S/2);g.push(b),A===0?x+=b:A<p&&(x+=2*b)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],w=3*y*(r>v-ss?r-v+ss:0),T=4*(this._cubeSize-y);Ca(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Yu)}}function mE(n){const e=[],t=[],i=[];let r=n;const s=n-ss+1+Pp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ss?l=Pp[o-n+ss-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,_=6,d=3,p=2,g=1,x=new Float32Array(d*_*m),v=new Float32Array(p*_*m),y=new Float32Array(g*_*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,S=T>2?0:-1,b=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];x.set(b,d*_*T),v.set(f,p*_*T);const L=[T,T,T,T,T,T];y.set(L,g*_*T)}const w=new Bn;w.setAttribute("position",new Zt(x,d)),w.setAttribute("uv",new Zt(v,p)),w.setAttribute("faceIndex",new Zt(y,g)),e.push(w),r>ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ip(n,e,t){const i=new wr(n,e,t);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gE(n,e,t){const i=new Float32Array(rr),r=new R(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Np(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function kp(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===rh||l===sh,c=l===bs||l===Ts;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Dp(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new Dp(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _E(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function u(h){const f=[],m=h.index,_=h.attributes.position;let d=0;if(m!==null){const x=m.array;d=m.version;for(let v=0,y=x.length;v<y;v+=3){const w=x[v+0],T=x[v+1],A=x[v+2];f.push(w,T,T,A,A,w)}}else{const x=_.array;d=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const w=v+0,T=v+1,A=v+2;f.push(w,T,T,A,A,w)}}const p=new(H0(f)?J0:K0)(f,1);p.version=d;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function c(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function yE(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let d,p;if(r)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h}function SE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wE(n,e){return n[0]-e[0]}function ME(n,e){return Math.abs(e[1])-Math.abs(n[1])}function EE(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,d=_!==void 0?_.length:0;let p=s.get(c);if(p===void 0||p.count!==d){let X=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",X)};var m=X;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let b=0;v===!0&&(b=1),y===!0&&(b=2),w===!0&&(b=3);let L=c.attributes.position.count*b,W=1;L>e.maxTextureSize&&(W=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const K=new Float32Array(L*W*4*d),U=new X0(K,L,W,d);U.type=ur,U.needsUpdate=!0;const N=b*4;for(let Z=0;Z<d;Z++){const ee=T[Z],D=A[Z],G=S[Z],H=L*W*4*Z;for(let ie=0;ie<ee.count;ie++){const k=ie*N;v===!0&&(o.fromBufferAttribute(ee,ie),K[H+k+0]=o.x,K[H+k+1]=o.y,K[H+k+2]=o.z,K[H+k+3]=0),y===!0&&(o.fromBufferAttribute(D,ie),K[H+k+4]=o.x,K[H+k+5]=o.y,K[H+k+6]=o.z,K[H+k+7]=0),w===!0&&(o.fromBufferAttribute(G,ie),K[H+k+8]=o.x,K[H+k+9]=o.y,K[H+k+10]=o.z,K[H+k+11]=G.itemSize===4?o.w:1)}}p={count:d,texture:U,size:new ue(L,W)},s.set(c,p),c.addEventListener("dispose",X)}let g=0;for(let v=0;v<f.length;v++)g+=f[v];const x=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let d=i[c.id];if(d===void 0||d.length!==_){d=[];for(let y=0;y<_;y++)d[y]=[y,0];i[c.id]=d}for(let y=0;y<_;y++){const w=d[y];w[0]=y,w[1]=f[y]}d.sort(ME);for(let y=0;y<8;y++)y<_&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(wE);const p=c.morphAttributes.position,g=c.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],A=w[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&c.getAttribute("morphTarget"+y)!==p[T]&&c.setAttribute("morphTarget"+y,p[T]),g&&c.getAttribute("morphNormal"+y)!==g[T]&&c.setAttribute("morphNormal"+y,g[T]),r[y]=A,x+=A):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),g&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function bE(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);return r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const iv=new dn,rv=new X0,sv=new c1,ov=new tv,zp=[],Fp=[],Op=new Float32Array(16),Up=new Float32Array(9),Bp=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=zp[r];if(s===void 0&&(s=new Float32Array(r),zp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hl(n,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function CE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function AE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function PE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function LE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Bp.set(i),n.uniformMatrix2fv(this.addr,!1,Bp),St(t,i)}}function RE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Up.set(i),n.uniformMatrix3fv(this.addr,!1,Up),St(t,i)}}function DE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Op.set(i),n.uniformMatrix4fv(this.addr,!1,Op),St(t,i)}}function IE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function kE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function zE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function FE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function OE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function UE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function BE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function VE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||iv,r)}function GE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sv,r)}function HE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ov,r)}function WE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rv,r)}function jE(n){switch(n){case 5126:return TE;case 35664:return CE;case 35665:return AE;case 35666:return PE;case 35674:return LE;case 35675:return RE;case 35676:return DE;case 5124:case 35670:return IE;case 35667:case 35671:return NE;case 35668:case 35672:return kE;case 35669:case 35673:return zE;case 5125:return FE;case 36294:return OE;case 36295:return UE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return WE}}function XE(n,e){n.uniform1fv(this.addr,e)}function qE(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function $E(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function YE(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function ZE(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KE(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JE(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QE(n,e){n.uniform1iv(this.addr,e)}function eb(n,e){n.uniform2iv(this.addr,e)}function tb(n,e){n.uniform3iv(this.addr,e)}function nb(n,e){n.uniform4iv(this.addr,e)}function ib(n,e){n.uniform1uiv(this.addr,e)}function rb(n,e){n.uniform2uiv(this.addr,e)}function sb(n,e){n.uniform3uiv(this.addr,e)}function ob(n,e){n.uniform4uiv(this.addr,e)}function ab(n,e,t){const i=this.cache,r=e.length,s=Hl(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||iv,s[o])}function lb(n,e,t){const i=this.cache,r=e.length,s=Hl(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sv,s[o])}function ub(n,e,t){const i=this.cache,r=e.length,s=Hl(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ov,s[o])}function cb(n,e,t){const i=this.cache,r=e.length,s=Hl(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rv,s[o])}function hb(n){switch(n){case 5126:return XE;case 35664:return qE;case 35665:return $E;case 35666:return YE;case 35674:return ZE;case 35675:return KE;case 35676:return JE;case 5124:case 35670:return QE;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return sb;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return cb}}class fb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jE(t.type)}}class db{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=hb(t.type)}}class pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function Vp(n,e){n.seq.push(e),n.map[e.id]=e}function mb(n,e,t){const i=n.name,r=i.length;for(Ku.lastIndex=0;;){const s=Ku.exec(i),o=Ku.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vp(t,u===void 0?new fb(a,n,e):new db(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new pb(a),Vp(t,h)),t=h}}}class ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let gb=0;function vb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function xb(n){switch(n){case yr:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Hp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vb(n.getShaderSource(e),o)}else return r}function _b(n,e){const t=xb(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function yb(n,e){let t;switch(e){case LS:t="Linear";break;case RS:t="Reinhard";break;case DS:t="OptimizedCineon";break;case IS:t="ACESFilmic";break;case NS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ro).join(`
`)}function wb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mb(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ro(n){return n!==""}function Wp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(n){return n.replace(Eb,bb)}function bb(n,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return uh(t)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(n){return n.replace(Tb,Cb)}function Cb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ab(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===io&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case Ts:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Rb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case U0:e="ENVMAP_BLENDING_MULTIPLY";break;case AS:e="ENVMAP_BLENDING_MIX";break;case PS:e="ENVMAP_BLENDING_ADD";break}return e}function Db(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ib(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ab(t),u=Pb(t),c=Lb(t),h=Rb(t),f=Db(t),m=t.isWebGL2?"":Sb(t),_=wb(s),d=r.createProgram();let p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(ro).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(ro).join(`
`),g.length>0&&(g+=`
`)):(p=[qp(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),g=[m,qp(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ke.tonemapping_pars_fragment:"",t.toneMapping!==di?yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,_b("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),o=uh(o),o=Wp(o,t),o=jp(o,t),a=uh(a),a=Wp(a,t),a=jp(a,t),o=Xp(o),a=Xp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=x+p+o,y=x+g+a,w=Gp(r,35633,v),T=Gp(r,35632,y);if(r.attachShader(d,w),r.attachShader(d,T),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(w).trim(),W=r.getShaderInfoLog(T).trim();let K=!0,U=!0;if(r.getProgramParameter(d,35714)===!1){K=!1;const N=Hp(r,w,"vertex"),X=Hp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+b+`
`+N+`
`+X)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:K,programLog:b,vertexShader:{log:L,prefix:p},fragmentShader:{log:W,prefix:g}})}r.deleteShader(w),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new ja(r,d)),A};let S;return this.getAttributes=function(){return S===void 0&&(S=Mb(r,d)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=w,this.fragmentShader=T,this}let Nb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zb(e),t.set(e,i)),i}}class zb{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}}function Fb(n,e,t,i,r,s,o){const a=new $0,l=new kb,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(S,b,L,W,K){const U=W.fog,N=K.geometry,X=S.isMeshStandardMaterial?W.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),ee=Z&&Z.mapping===Bl?Z.image.height:null,D=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,H=G!==void 0?G.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let k,Q,se,F;if(D){const Re=qn[D];k=Re.vertexShader,Q=Re.fragmentShader}else k=S.vertexShader,Q=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),F=l.getFragmentShaderID(S);const ce=n.getRenderTarget(),he=S.alphaTest>0,_e=S.clearcoat>0,ye=S.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:S.type,vertexShader:k,fragmentShader:Q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ce===null?n.outputEncoding:ce.isXRRenderTarget===!0?ce.texture.encoding:yr,map:!!S.map,matcap:!!S.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:ee,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===QS,tangentSpaceNormalMap:S.normalMapType===cf,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===et,clearcoat:_e,clearcoatMap:_e&&!!S.clearcoatMap,clearcoatRoughnessMap:_e&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!S.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!S.iridescenceMap,iridescenceThicknessMap:ye&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===ps,alphaMap:!!S.alphaMap,alphaTest:he,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:di,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ri,flipSided:S.side===fn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(g(b,S),x(b,S),b.push(n.outputEncoding)),b.push(S.customProgramCacheKey),b.join()}function g(S,b){S.push(b.precision),S.push(b.outputEncoding),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.combine),S.push(b.vertexUvs),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),S.push(a.mask)}function v(S){const b=_[S.type];let L;if(b){const W=qn[b];L=w1.clone(W.uniforms)}else L=S.uniforms;return L}function y(S,b){let L;for(let W=0,K=u.length;W<K;W++){const U=u[W];if(U.cacheKey===b){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Ib(n,b,S,s),u.push(L)),L}function w(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function Ob(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ub(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $p(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,_,d,p){let g=n[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:d,group:p},n[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=d,g.group=p),e++,g}function a(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(h,f){t.length>1&&t.sort(h||Ub),i.length>1&&i.sort(f||$p),r.length>1&&r.sort(f||$p)}function c(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Bb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yp,n.set(i,[o])):r>=s.length?(o=new Yp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new qe};break;case"SpotLight":t={position:new R,direction:new R,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Gb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Hb=0;function Wb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jb(n,e){const t=new Vb,i=Gb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new R);const s=new R,o=new at,a=new at;function l(c,h){let f=0,m=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let d=0,p=0,g=0,x=0,v=0,y=0,w=0,T=0,A=0,S=0;c.sort(Wb);const b=h===!0?Math.PI:1;for(let W=0,K=c.length;W<K;W++){const U=c[W],N=U.color,X=U.intensity,Z=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=N.r*X*b,m+=N.g*X*b,_+=N.b*X*b;else if(U.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(U.sh.coefficients[D],X);else if(U.isDirectionalLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const G=U.shadow,H=i.get(U);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.directionalShadow[d]=H,r.directionalShadowMap[d]=ee,r.directionalShadowMatrix[d]=U.shadow.matrix,y++}r.directional[d]=D,d++}else if(U.isSpotLight){const D=t.get(U);D.position.setFromMatrixPosition(U.matrixWorld),D.color.copy(N).multiplyScalar(X*b),D.distance=Z,D.coneCos=Math.cos(U.angle),D.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),D.decay=U.decay,r.spot[g]=D;const G=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,G.updateMatrices(U),U.castShadow&&S++),r.spotLightMatrix[g]=G.matrix,U.castShadow){const H=i.get(U);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.spotShadow[g]=H,r.spotShadowMap[g]=ee,T++}g++}else if(U.isRectAreaLight){const D=t.get(U);D.color.copy(N).multiplyScalar(X),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=D,x++}else if(U.isPointLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*b),D.distance=U.distance,D.decay=U.decay,U.castShadow){const G=U.shadow,H=i.get(U);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,r.pointShadow[p]=H,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=U.shadow.matrix,w++}r.point[p]=D,p++}else if(U.isHemisphereLight){const D=t.get(U);D.skyColor.copy(U.color).multiplyScalar(X*b),D.groundColor.copy(U.groundColor).multiplyScalar(X*b),r.hemi[v]=D,v++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==x||L.hemiLength!==v||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==T||L.numSpotMaps!==A)&&(r.directional.length=d,r.spot.length=g,r.rectArea.length=x,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+A-S,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=S,L.directionalLength=d,L.pointLength=p,L.spotLength=g,L.rectAreaLength=x,L.hemiLength=v,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=T,L.numSpotMaps=A,r.version=Hb++)}function u(c,h){let f=0,m=0,_=0,d=0,p=0;const g=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){const y=c[x];if(y.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(y.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),_++}else if(y.isRectAreaLight){const w=r.rectArea[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function Zp(n,e){const t=new jb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Xb(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Zp(n,e),t.set(s,[l])):o>=a.length?(l=new Zp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class qb extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $b extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kb(n,e,t){let i=new hf;const r=new ue,s=new ue,o=new it,a=new qb({depthPacking:JS}),l=new $b,u={},c=t.maxTextureSize,h={[Wi]:fn,[fn]:Wi,[Ri]:Ri},f=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Yb,fragmentShader:Zb}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new En(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0,this.render=function(y,w,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const A=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Vi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let W=0,K=y.length;W<K;W++){const U=y[W],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null){const ee=this.type!==io?{minFilter:Ht,magFilter:Ht}:{};N.map=new wr(r.x,r.y,ee),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const Z=N.getViewportCount();for(let ee=0;ee<Z;ee++){const D=N.getViewport(ee);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),L.viewport(o),N.updateMatrices(U,ee),i=N.getFrustum(),v(w,T,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===io&&g(N,T),N.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(A,S,b)};function g(y,w){const T=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wr(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,T,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,T,m,d,null)}function x(y,w,T,A,S,b){let L=null;const W=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)L=W;else if(L=T.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=L.uuid,U=w.uuid;let N=u[K];N===void 0&&(N={},u[K]=N);let X=N[U];X===void 0&&(X=L.clone(),N[U]=X),L=X}return L.visible=w.visible,L.wireframe=w.wireframe,b===io?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:h[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=A,L.farDistance=S),L}function v(y,w,T,A,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===io)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const W=e.update(y),K=y.material;if(Array.isArray(K)){const U=W.groups;for(let N=0,X=U.length;N<X;N++){const Z=U[N],ee=K[Z.materialIndex];if(ee&&ee.visible){const D=x(y,ee,A,T.near,T.far,S);n.renderBufferDirect(T,null,W,D,y,Z)}}}else if(K.visible){const U=x(y,K,A,T.near,T.far,S);n.renderBufferDirect(T,null,W,U,y,null)}}const L=y.children;for(let W=0,K=L.length;W<K;W++)v(L[W],w,T,A,S)}}function Jb(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const $=new it;let re=null;const ve=new it(0,0,0,0);return{setMask:function(Me){re!==Me&&!I&&(n.colorMask(Me,Me,Me,Me),re=Me)},setLocked:function(Me){I=Me},setClear:function(Me,Je,wt,Ot,Vn){Vn===!0&&(Me*=Ot,Je*=Ot,wt*=Ot),$.set(Me,Je,wt,Ot),ve.equals($)===!1&&(n.clearColor(Me,Je,wt,Ot),ve.copy($))},reset:function(){I=!1,re=null,ve.set(-1,0,0,0)}}}function s(){let I=!1,$=null,re=null,ve=null;return{setTest:function(Me){Me?he(2929):_e(2929)},setMask:function(Me){$!==Me&&!I&&(n.depthMask(Me),$=Me)},setFunc:function(Me){if(re!==Me){switch(Me){case SS:n.depthFunc(512);break;case wS:n.depthFunc(519);break;case MS:n.depthFunc(513);break;case ih:n.depthFunc(515);break;case ES:n.depthFunc(514);break;case bS:n.depthFunc(518);break;case TS:n.depthFunc(516);break;case CS:n.depthFunc(517);break;default:n.depthFunc(515)}re=Me}},setLocked:function(Me){I=Me},setClear:function(Me){ve!==Me&&(n.clearDepth(Me),ve=Me)},reset:function(){I=!1,$=null,re=null,ve=null}}}function o(){let I=!1,$=null,re=null,ve=null,Me=null,Je=null,wt=null,Ot=null,Vn=null;return{setTest:function(ct){I||(ct?he(2960):_e(2960))},setMask:function(ct){$!==ct&&!I&&(n.stencilMask(ct),$=ct)},setFunc:function(ct,xn,Gn){(re!==ct||ve!==xn||Me!==Gn)&&(n.stencilFunc(ct,xn,Gn),re=ct,ve=xn,Me=Gn)},setOp:function(ct,xn,Gn){(Je!==ct||wt!==xn||Ot!==Gn)&&(n.stencilOp(ct,xn,Gn),Je=ct,wt=xn,Ot=Gn)},setLocked:function(ct){I=ct},setClear:function(ct){Vn!==ct&&(n.clearStencil(ct),Vn=ct)},reset:function(){I=!1,$=null,re=null,ve=null,Me=null,Je=null,wt=null,Ot=null,Vn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,d=[],p=null,g=!1,x=null,v=null,y=null,w=null,T=null,A=null,S=null,b=!1,L=null,W=null,K=null,U=null,N=null;const X=n.getParameter(35661);let Z=!1,ee=0;const D=n.getParameter(7938);D.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(D)[1]),Z=ee>=1):D.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Z=ee>=2);let G=null,H={};const ie=n.getParameter(3088),k=n.getParameter(2978),Q=new it().fromArray(ie),se=new it().fromArray(k);function F(I,$,re){const ve=new Uint8Array(4),Me=n.createTexture();n.bindTexture(I,Me),n.texParameteri(I,10241,9728),n.texParameteri(I,10240,9728);for(let Je=0;Je<re;Je++)n.texImage2D($+Je,0,6408,1,1,0,6408,5121,ve);return Me}const ce={};ce[3553]=F(3553,3553,1),ce[34067]=F(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),he(2929),l.setFunc(ih),de(!1),De(Od),he(2884),le(Vi);function he(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function _e(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function ye(I,$){return m[I]!==$?(n.bindFramebuffer(I,$),m[I]=$,i&&(I===36009&&(m[36160]=$),I===36160&&(m[36009]=$)),!0):!1}function Se(I,$){let re=d,ve=!1;if(I)if(re=_.get($),re===void 0&&(re=[],_.set($,re)),I.isWebGLMultipleRenderTargets){const Me=I.texture;if(re.length!==Me.length||re[0]!==36064){for(let Je=0,wt=Me.length;Je<wt;Je++)re[Je]=36064+Je;re.length=Me.length,ve=!0}}else re[0]!==36064&&(re[0]=36064,ve=!0);else re[0]!==1029&&(re[0]=1029,ve=!0);ve&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Re(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const J={[Xr]:32774,[cS]:32778,[hS]:32779};if(i)J[Gd]=32775,J[Hd]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(J[Gd]=I.MIN_EXT,J[Hd]=I.MAX_EXT)}const te={[fS]:0,[dS]:1,[pS]:768,[F0]:770,[yS]:776,[xS]:774,[gS]:772,[mS]:769,[O0]:771,[_S]:775,[vS]:773};function le(I,$,re,ve,Me,Je,wt,Ot){if(I===Vi){g===!0&&(_e(3042),g=!1);return}if(g===!1&&(he(3042),g=!0),I!==uS){if(I!==x||Ot!==b){if((v!==Xr||T!==Xr)&&(n.blendEquation(32774),v=Xr,T=Xr),Ot)switch(I){case ps:n.blendFuncSeparate(1,771,1,771);break;case Ud:n.blendFunc(1,1);break;case Bd:n.blendFuncSeparate(0,769,0,1);break;case Vd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ps:n.blendFuncSeparate(770,771,1,771);break;case Ud:n.blendFunc(770,1);break;case Bd:n.blendFuncSeparate(0,769,0,1);break;case Vd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,w=null,A=null,S=null,x=I,b=Ot}return}Me=Me||$,Je=Je||re,wt=wt||ve,($!==v||Me!==T)&&(n.blendEquationSeparate(J[$],J[Me]),v=$,T=Me),(re!==y||ve!==w||Je!==A||wt!==S)&&(n.blendFuncSeparate(te[re],te[ve],te[Je],te[wt]),y=re,w=ve,A=Je,S=wt),x=I,b=!1}function we(I,$){I.side===Ri?_e(2884):he(2884);let re=I.side===fn;$&&(re=!re),de(re),I.blending===ps&&I.transparent===!1?le(Vi):le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const ve=I.stencilWrite;u.setTest(ve),ve&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?he(32926):_e(32926)}function de(I){L!==I&&(I?n.frontFace(2304):n.frontFace(2305),L=I)}function De(I){I!==oS?(he(2884),I!==W&&(I===Od?n.cullFace(1029):I===aS?n.cullFace(1028):n.cullFace(1032))):_e(2884),W=I}function Pe(I){I!==K&&(Z&&n.lineWidth(I),K=I)}function Ie(I,$,re){I?(he(32823),(U!==$||N!==re)&&(n.polygonOffset($,re),U=$,N=re)):_e(32823)}function $e(I){I?he(3089):_e(3089)}function He(I){I===void 0&&(I=33984+X-1),G!==I&&(n.activeTexture(I),G=I)}function C(I,$,re){re===void 0&&(G===null?re=33984+X-1:re=G);let ve=H[re];ve===void 0&&(ve={type:void 0,texture:void 0},H[re]=ve),(ve.type!==I||ve.texture!==$)&&(G!==re&&(n.activeTexture(re),G=re),n.bindTexture(I,$||ce[I]),ve.type=I,ve.texture=$)}function M(){const I=H[G];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){Q.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function Ce(I){se.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function Ue(I,$){let re=h.get($);re===void 0&&(re=new WeakMap,h.set($,re));let ve=re.get(I);ve===void 0&&(ve=n.getUniformBlockIndex($,I.name),re.set(I,ve))}function We(I,$){const ve=h.get($).get(I);c.get($)!==ve&&(n.uniformBlockBinding($,ve,I.__bindingPointIndex),c.set($,ve))}function Ze(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},G=null,H={},m={},_=new WeakMap,d=[],p=null,g=!1,x=null,v=null,y=null,w=null,T=null,A=null,S=null,b=!1,L=null,W=null,K=null,U=null,N=null,Q.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:he,disable:_e,bindFramebuffer:ye,drawBuffers:Se,useProgram:Re,setBlending:le,setMaterial:we,setFlipSided:de,setCullFace:De,setLineWidth:Pe,setPolygonOffset:Ie,setScissorTest:$e,activeTexture:He,bindTexture:C,unbindTexture:M,compressedTexImage2D:j,compressedTexImage3D:oe,texImage2D:pe,texImage3D:be,updateUBOMapping:Ue,uniformBlockBinding:We,texStorage2D:z,texStorage3D:ge,texSubImage2D:ae,texSubImage3D:me,compressedTexSubImage2D:Te,compressedTexSubImage3D:P,scissor:Ae,viewport:Ce,reset:Ze}}function Qb(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return g?new OffscreenCanvas(C,M):_l("canvas")}function v(C,M,j,oe){let ae=1;if((C.width>oe||C.height>oe)&&(ae=oe/Math.max(C.width,C.height)),ae<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const me=M?n1:Math.floor,Te=me(ae*C.width),P=me(ae*C.height);d===void 0&&(d=x(Te,P));const z=j?x(Te,P):d;return z.width=Te,z.height=P,z.getContext("2d").drawImage(C,0,0,Te,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Te+"x"+P+")."),z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return vp(C.width)&&vp(C.height)}function w(C){return a?!1:C.wrapS!==kn||C.wrapT!==kn||C.minFilter!==Ht&&C.minFilter!==wn}function T(C,M){return C.generateMipmaps&&M&&C.minFilter!==Ht&&C.minFilter!==wn}function A(C){n.generateMipmap(C)}function S(C,M,j,oe,ae=!1){if(a===!1)return M;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me=M;return M===6403&&(j===5126&&(me=33326),j===5131&&(me=33325),j===5121&&(me=33321)),M===33319&&(j===5126&&(me=33328),j===5131&&(me=33327),j===5121&&(me=33323)),M===6408&&(j===5126&&(me=34836),j===5131&&(me=34842),j===5121&&(me=oe===et&&ae===!1?35907:32856),j===32819&&(me=32854),j===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function b(C,M,j){return T(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function L(C){return C===Ht||C===Wd||C===Su?9728:9729}function W(C){const M=C.target;M.removeEventListener("dispose",W),U(M),M.isVideoTexture&&_.delete(M)}function K(C){const M=C.target;M.removeEventListener("dispose",K),X(M)}function U(C){const M=i.get(C);if(M.__webglInit===void 0)return;const j=C.source,oe=p.get(j);if(oe){const ae=oe[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(C),Object.keys(oe).length===0&&p.delete(j)}i.remove(C)}function N(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const j=C.source,oe=p.get(j);delete oe[M.__cacheKey],o.memory.textures--}function X(C){const M=C.texture,j=i.get(C),oe=i.get(M);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)n.deleteFramebuffer(j.__webglFramebuffer[ae]),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ae]);else{if(n.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ae=0,me=M.length;ae<me;ae++){const Te=i.get(M[ae]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(M[ae])}i.remove(M),i.remove(C)}let Z=0;function ee(){Z=0}function D(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function G(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function H(C,M){const j=i.get(C);if(C.isVideoTexture&&$e(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(j,C,M);return}}t.bindTexture(3553,j.__webglTexture,33984+M)}function ie(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){_e(j,C,M);return}t.bindTexture(35866,j.__webglTexture,33984+M)}function k(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){_e(j,C,M);return}t.bindTexture(32879,j.__webglTexture,33984+M)}function Q(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){ye(j,C,M);return}t.bindTexture(34067,j.__webglTexture,33984+M)}const se={[oh]:10497,[kn]:33071,[ah]:33648},F={[Ht]:9728,[Wd]:9984,[Su]:9986,[wn]:9729,[kS]:9985,[No]:9987};function ce(C,M,j){if(j?(n.texParameteri(C,10242,se[M.wrapS]),n.texParameteri(C,10243,se[M.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,se[M.wrapR]),n.texParameteri(C,10240,F[M.magFilter]),n.texParameteri(C,10241,F[M.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(M.wrapS!==kn||M.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,L(M.magFilter)),n.texParameteri(C,10241,L(M.minFilter)),M.minFilter!==Ht&&M.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ht||M.minFilter!==Su&&M.minFilter!==No||M.type===ur&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ko&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function he(C,M){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",W));const oe=M.source;let ae=p.get(oe);ae===void 0&&(ae={},p.set(oe,ae));const me=G(M);if(me!==C.__cacheKey){ae[me]===void 0&&(ae[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[me].usedTimes++;const Te=ae[C.__cacheKey];Te!==void 0&&(ae[C.__cacheKey].usedTimes--,Te.usedTimes===0&&N(M)),C.__cacheKey=me,C.__webglTexture=ae[me].texture}return j}function _e(C,M,j){let oe=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(oe=35866),M.isData3DTexture&&(oe=32879);const ae=he(C,M),me=M.source;t.bindTexture(oe,C.__webglTexture,33984+j);const Te=i.get(me);if(me.version!==Te.__version||ae===!0){t.activeTexture(33984+j),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const P=w(M)&&y(M.image)===!1;let z=v(M.image,P,!1,c);z=He(M,z);const ge=y(z)||a,pe=s.convert(M.format,M.encoding);let be=s.convert(M.type),Ae=S(M.internalFormat,pe,be,M.encoding,M.isVideoTexture);ce(oe,M,ge);let Ce;const Ue=M.mipmaps,We=a&&M.isVideoTexture!==!0,Ze=Te.__version===void 0||ae===!0,I=b(M,z,ge);if(M.isDepthTexture)Ae=6402,a?M.type===ur?Ae=36012:M.type===lr?Ae=33190:M.type===ms?Ae=35056:Ae=33189:M.type===ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===dr&&Ae===6402&&M.type!==V0&&M.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=lr,be=s.convert(M.type)),M.format===Cs&&Ae===6402&&(Ae=34041,M.type!==ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ms,be=s.convert(M.type))),Ze&&(We?t.texStorage2D(3553,1,Ae,z.width,z.height):t.texImage2D(3553,0,Ae,z.width,z.height,0,pe,be,null));else if(M.isDataTexture)if(Ue.length>0&&ge){We&&Ze&&t.texStorage2D(3553,I,Ae,Ue[0].width,Ue[0].height);for(let $=0,re=Ue.length;$<re;$++)Ce=Ue[$],We?t.texSubImage2D(3553,$,0,0,Ce.width,Ce.height,pe,be,Ce.data):t.texImage2D(3553,$,Ae,Ce.width,Ce.height,0,pe,be,Ce.data);M.generateMipmaps=!1}else We?(Ze&&t.texStorage2D(3553,I,Ae,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,pe,be,z.data)):t.texImage2D(3553,0,Ae,z.width,z.height,0,pe,be,z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&Ze&&t.texStorage3D(35866,I,Ae,Ue[0].width,Ue[0].height,z.depth);for(let $=0,re=Ue.length;$<re;$++)Ce=Ue[$],M.format!==zn?pe!==null?We?t.compressedTexSubImage3D(35866,$,0,0,0,Ce.width,Ce.height,z.depth,pe,Ce.data,0,0):t.compressedTexImage3D(35866,$,Ae,Ce.width,Ce.height,z.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(35866,$,0,0,0,Ce.width,Ce.height,z.depth,pe,be,Ce.data):t.texImage3D(35866,$,Ae,Ce.width,Ce.height,z.depth,0,pe,be,Ce.data)}else{We&&Ze&&t.texStorage2D(3553,I,Ae,Ue[0].width,Ue[0].height);for(let $=0,re=Ue.length;$<re;$++)Ce=Ue[$],M.format!==zn?pe!==null?We?t.compressedTexSubImage2D(3553,$,0,0,Ce.width,Ce.height,pe,Ce.data):t.compressedTexImage2D(3553,$,Ae,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(3553,$,0,0,Ce.width,Ce.height,pe,be,Ce.data):t.texImage2D(3553,$,Ae,Ce.width,Ce.height,0,pe,be,Ce.data)}else if(M.isDataArrayTexture)We?(Ze&&t.texStorage3D(35866,I,Ae,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,pe,be,z.data)):t.texImage3D(35866,0,Ae,z.width,z.height,z.depth,0,pe,be,z.data);else if(M.isData3DTexture)We?(Ze&&t.texStorage3D(32879,I,Ae,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,pe,be,z.data)):t.texImage3D(32879,0,Ae,z.width,z.height,z.depth,0,pe,be,z.data);else if(M.isFramebufferTexture){if(Ze)if(We)t.texStorage2D(3553,I,Ae,z.width,z.height);else{let $=z.width,re=z.height;for(let ve=0;ve<I;ve++)t.texImage2D(3553,ve,Ae,$,re,0,pe,be,null),$>>=1,re>>=1}}else if(Ue.length>0&&ge){We&&Ze&&t.texStorage2D(3553,I,Ae,Ue[0].width,Ue[0].height);for(let $=0,re=Ue.length;$<re;$++)Ce=Ue[$],We?t.texSubImage2D(3553,$,0,0,pe,be,Ce):t.texImage2D(3553,$,Ae,pe,be,Ce);M.generateMipmaps=!1}else We?(Ze&&t.texStorage2D(3553,I,Ae,z.width,z.height),t.texSubImage2D(3553,0,0,0,pe,be,z)):t.texImage2D(3553,0,Ae,pe,be,z);T(M,ge)&&A(oe),Te.__version=me.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ye(C,M,j){if(M.image.length!==6)return;const oe=he(C,M),ae=M.source;t.bindTexture(34067,C.__webglTexture,33984+j);const me=i.get(ae);if(ae.version!==me.__version||oe===!0){t.activeTexture(33984+j),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,z=[];for(let $=0;$<6;$++)!Te&&!P?z[$]=v(M.image[$],!1,!0,u):z[$]=P?M.image[$].image:M.image[$],z[$]=He(M,z[$]);const ge=z[0],pe=y(ge)||a,be=s.convert(M.format,M.encoding),Ae=s.convert(M.type),Ce=S(M.internalFormat,be,Ae,M.encoding),Ue=a&&M.isVideoTexture!==!0,We=me.__version===void 0||oe===!0;let Ze=b(M,ge,pe);ce(34067,M,pe);let I;if(Te){Ue&&We&&t.texStorage2D(34067,Ze,Ce,ge.width,ge.height);for(let $=0;$<6;$++){I=z[$].mipmaps;for(let re=0;re<I.length;re++){const ve=I[re];M.format!==zn?be!==null?Ue?t.compressedTexSubImage2D(34069+$,re,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(34069+$,re,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+$,re,0,0,ve.width,ve.height,be,Ae,ve.data):t.texImage2D(34069+$,re,Ce,ve.width,ve.height,0,be,Ae,ve.data)}}}else{I=M.mipmaps,Ue&&We&&(I.length>0&&Ze++,t.texStorage2D(34067,Ze,Ce,z[0].width,z[0].height));for(let $=0;$<6;$++)if(P){Ue?t.texSubImage2D(34069+$,0,0,0,z[$].width,z[$].height,be,Ae,z[$].data):t.texImage2D(34069+$,0,Ce,z[$].width,z[$].height,0,be,Ae,z[$].data);for(let re=0;re<I.length;re++){const Me=I[re].image[$].image;Ue?t.texSubImage2D(34069+$,re+1,0,0,Me.width,Me.height,be,Ae,Me.data):t.texImage2D(34069+$,re+1,Ce,Me.width,Me.height,0,be,Ae,Me.data)}}else{Ue?t.texSubImage2D(34069+$,0,0,0,be,Ae,z[$]):t.texImage2D(34069+$,0,Ce,be,Ae,z[$]);for(let re=0;re<I.length;re++){const ve=I[re];Ue?t.texSubImage2D(34069+$,re+1,0,0,be,Ae,ve.image[$]):t.texImage2D(34069+$,re+1,Ce,be,Ae,ve.image[$])}}}T(M,pe)&&A(34067),me.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Se(C,M,j,oe,ae){const me=s.convert(j.format,j.encoding),Te=s.convert(j.type),P=S(j.internalFormat,me,Te,j.encoding);i.get(M).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,P,M.width,M.height,M.depth,0,me,Te,null):t.texImage2D(ae,0,P,M.width,M.height,0,me,Te,null)),t.bindFramebuffer(36160,C),Ie(M)?f.framebufferTexture2DMultisampleEXT(36160,oe,ae,i.get(j).__webglTexture,0,Pe(M)):(ae===3553||ae>=34069&&ae<=34074)&&n.framebufferTexture2D(36160,oe,ae,i.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(C,M,j){if(n.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let oe=33189;if(j||Ie(M)){const ae=M.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ur?oe=36012:ae.type===lr&&(oe=33190));const me=Pe(M);Ie(M)?f.renderbufferStorageMultisampleEXT(36161,me,oe,M.width,M.height):n.renderbufferStorageMultisample(36161,me,oe,M.width,M.height)}else n.renderbufferStorage(36161,oe,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const oe=Pe(M);j&&Ie(M)===!1?n.renderbufferStorageMultisample(36161,oe,35056,M.width,M.height):Ie(M)?f.renderbufferStorageMultisampleEXT(36161,oe,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const oe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ae=0;ae<oe.length;ae++){const me=oe[ae],Te=s.convert(me.format,me.encoding),P=s.convert(me.type),z=S(me.internalFormat,Te,P,me.encoding),ge=Pe(M);j&&Ie(M)===!1?n.renderbufferStorageMultisample(36161,ge,z,M.width,M.height):Ie(M)?f.renderbufferStorageMultisampleEXT(36161,ge,z,M.width,M.height):n.renderbufferStorage(36161,z,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function J(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const oe=i.get(M.depthTexture).__webglTexture,ae=Pe(M);if(M.depthTexture.format===dr)Ie(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,oe,0,ae):n.framebufferTexture2D(36160,36096,3553,oe,0);else if(M.depthTexture.format===Cs)Ie(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,oe,0,ae):n.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function te(C){const M=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");J(M.__webglFramebuffer,C)}else if(j){M.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,M.__webglFramebuffer[oe]),M.__webglDepthbuffer[oe]=n.createRenderbuffer(),Re(M.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Re(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function le(C,M,j){const oe=i.get(C);M!==void 0&&Se(oe.__webglFramebuffer,C,C.texture,36064,3553),j!==void 0&&te(C)}function we(C){const M=C.texture,j=i.get(C),oe=i.get(M);C.addEventListener("dispose",K),C.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=M.version,o.memory.textures++);const ae=C.isWebGLCubeRenderTarget===!0,me=C.isWebGLMultipleRenderTargets===!0,Te=y(C)||a;if(ae){j.__webglFramebuffer=[];for(let P=0;P<6;P++)j.__webglFramebuffer[P]=n.createFramebuffer()}else{if(j.__webglFramebuffer=n.createFramebuffer(),me)if(r.drawBuffers){const P=C.texture;for(let z=0,ge=P.length;z<ge;z++){const pe=i.get(P[z]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ie(C)===!1){const P=me?M:[M];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let z=0;z<P.length;z++){const ge=P[z];j.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,j.__webglColorRenderbuffer[z]);const pe=s.convert(ge.format,ge.encoding),be=s.convert(ge.type),Ae=S(ge.internalFormat,pe,be,ge.encoding,C.isXRRenderTarget===!0),Ce=Pe(C);n.renderbufferStorageMultisample(36161,Ce,Ae,C.width,C.height),n.framebufferRenderbuffer(36160,36064+z,36161,j.__webglColorRenderbuffer[z])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,oe.__webglTexture),ce(34067,M,Te);for(let P=0;P<6;P++)Se(j.__webglFramebuffer[P],C,M,36064,34069+P);T(M,Te)&&A(34067),t.unbindTexture()}else if(me){const P=C.texture;for(let z=0,ge=P.length;z<ge;z++){const pe=P[z],be=i.get(pe);t.bindTexture(3553,be.__webglTexture),ce(3553,pe,Te),Se(j.__webglFramebuffer,C,pe,36064+z,3553),T(pe,Te)&&A(3553)}t.unbindTexture()}else{let P=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?P=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,oe.__webglTexture),ce(P,M,Te),Se(j.__webglFramebuffer,C,M,36064,P),T(M,Te)&&A(P),t.unbindTexture()}C.depthBuffer&&te(C)}function de(C){const M=y(C)||a,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let oe=0,ae=j.length;oe<ae;oe++){const me=j[oe];if(T(me,M)){const Te=C.isWebGLCubeRenderTarget?34067:3553,P=i.get(me).__webglTexture;t.bindTexture(Te,P),A(Te),t.unbindTexture()}}}function De(C){if(a&&C.samples>0&&Ie(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,oe=C.height;let ae=16384;const me=[],Te=C.stencilBuffer?33306:36096,P=i.get(C),z=C.isWebGLMultipleRenderTargets===!0;if(z)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){me.push(36064+ge),C.depthBuffer&&me.push(Te);const pe=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(pe===!1&&(C.depthBuffer&&(ae|=256),C.stencilBuffer&&(ae|=1024)),z&&n.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[ge]),pe===!0&&(n.invalidateFramebuffer(36008,[Te]),n.invalidateFramebuffer(36009,[Te])),z){const be=i.get(M[ge]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,be,0)}n.blitFramebuffer(0,0,j,oe,0,0,j,oe,ae,9728),m&&n.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ge,36161,P.__webglColorRenderbuffer[ge]);const pe=i.get(M[ge]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ge,3553,pe,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(h,C.samples)}function Ie(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(C){const M=o.render.frame;_.get(C)!==M&&(_.set(C,M),C.update())}function He(C,M){const j=C.encoding,oe=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===lh||j!==yr&&(j===et?a===!1?e.has("EXT_sRGB")===!0&&oe===zn?(C.format=lh,C.minFilter=wn,C.generateMipmaps=!1):M=W0.sRGBToLinear(M):(oe!==zn||ae!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),M}this.allocateTextureUnit=D,this.resetTextureUnits=ee,this.setTexture2D=H,this.setTexture2DArray=ie,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=le,this.setupRenderTarget=we,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ie}function e3(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===_r)return 5121;if(s===US)return 32819;if(s===BS)return 32820;if(s===zS)return 5120;if(s===FS)return 5122;if(s===V0)return 5123;if(s===OS)return 5124;if(s===lr)return 5125;if(s===ur)return 5126;if(s===ko)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===VS)return 6406;if(s===zn)return 6408;if(s===GS)return 6409;if(s===HS)return 6410;if(s===dr)return 6402;if(s===Cs)return 34041;if(s===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===WS)return 6403;if(s===jS)return 36244;if(s===XS)return 33319;if(s===qS)return 33320;if(s===$S)return 36249;if(s===wu||s===Mu||s===Eu||s===bu)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Eu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jd||s===Xd||s===qd||s===$d)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$d)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===YS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yd||s===Zd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yd)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zd)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kd||s===Jd||s===Qd||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===up||s===cp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kd)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jd)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qd)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ep)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===np)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ip)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rp)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sp)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ap)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lp)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===up)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Tu)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ZS||s===hp||s===fp||s===dp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Tu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===hp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ms?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class t3 extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Aa extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n3={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,i),g=this._getHandJoint(u,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class i3 extends dn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:dr,c!==dr&&c!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===dr&&(i=lr),i===void 0&&c===Cs&&(i=ms),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1}}class r3 extends Ar{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,m=null,_=null;const d=t.getContextAttributes();let p=null,g=null;const x=[],v=[],y=new Set,w=new Map,T=new un;T.layers.enable(1),T.viewport=new it;const A=new un;A.layers.enable(2),A.viewport=new it;const S=[T,A],b=new t3;b.layers.enable(1),b.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=x[k];return Q===void 0&&(Q=new Ju,x[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=x[k];return Q===void 0&&(Q=new Ju,x[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=x[k];return Q===void 0&&(Q=new Ju,x[k]=Q),Q.getHandSpace()};function K(k){const Q=v.indexOf(k.inputSource);if(Q===-1)return;const se=x[Q];se!==void 0&&se.dispatchEvent({type:k.type,data:k.inputSource})}function U(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",N);for(let k=0;k<x.length;k++){const Q=v[k];Q!==null&&(v[k]=null,x[k].disconnect(Q))}L=null,W=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,g=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",U),r.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),g=new wr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:_r,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let Q=null,se=null,F=null;d.depth&&(F=d.stencil?35056:33190,Q=d.stencil?Cs:dr,se=d.stencil?ms:lr);const ce={colorFormat:32856,depthFormat:F,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),g=new wr(f.textureWidth,f.textureHeight,{format:zn,type:_r,depthTexture:new i3(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const he=e.properties.get(g);he.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(k){for(let Q=0;Q<k.removed.length;Q++){const se=k.removed[Q],F=v.indexOf(se);F>=0&&(v[F]=null,x[F].disconnect(se))}for(let Q=0;Q<k.added.length;Q++){const se=k.added[Q];let F=v.indexOf(se);if(F===-1){for(let he=0;he<x.length;he++)if(he>=v.length){v.push(se),F=he;break}else if(v[he]===null){v[he]=se,F=he;break}if(F===-1)break}const ce=x[F];ce&&ce.connect(se)}}const X=new R,Z=new R;function ee(k,Q,se){X.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const F=X.distanceTo(Z),ce=Q.projectionMatrix.elements,he=se.projectionMatrix.elements,_e=ce[14]/(ce[10]-1),ye=ce[14]/(ce[10]+1),Se=(ce[9]+1)/ce[5],Re=(ce[9]-1)/ce[5],J=(ce[8]-1)/ce[0],te=(he[8]+1)/he[0],le=_e*J,we=_e*te,de=F/(-J+te),De=de*-J;Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(De),k.translateZ(de),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Pe=_e+de,Ie=ye+de,$e=le-De,He=we+(F-De),C=Se*ye/Ie*Pe,M=Re*ye/Ie*Pe;k.projectionMatrix.makePerspective($e,He,C,M,Pe,Ie)}function D(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;b.near=A.near=T.near=k.near,b.far=A.far=T.far=k.far,(L!==b.near||W!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,W=b.far);const Q=k.parent,se=b.cameras;D(b,Q);for(let ce=0;ce<se.length;ce++)D(se[ce],Q);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),k.matrix.copy(b.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const F=k.children;for(let ce=0,he=F.length;ce<he;ce++)F[ce].updateMatrixWorld(!0);se.length===2?ee(b,T,A):b.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return y};let G=null;function H(k,Q){if(c=Q.getViewerPose(u||o),_=Q,c!==null){const se=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let F=!1;se.length!==b.cameras.length&&(b.cameras.length=0,F=!0);for(let ce=0;ce<se.length;ce++){const he=se[ce];let _e=null;if(m!==null)_e=m.getViewport(he);else{const Se=h.getViewSubImage(f,he);_e=Se.viewport,ce===0&&(e.setRenderTargetTextures(g,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(g))}let ye=S[ce];ye===void 0&&(ye=new un,ye.layers.enable(ce),ye.viewport=new it,S[ce]=ye),ye.matrix.fromArray(he.transform.matrix),ye.projectionMatrix.fromArray(he.projectionMatrix),ye.viewport.set(_e.x,_e.y,_e.width,_e.height),ce===0&&b.matrix.copy(ye.matrix),F===!0&&b.cameras.push(ye)}}for(let se=0;se<x.length;se++){const F=v[se],ce=x[se];F!==null&&ce!==void 0&&ce.update(F,Q,u||o)}if(G&&G(k,Q),Q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let se=null;for(const F of y)Q.detectedPlanes.has(F)||(se===null&&(se=[]),se.push(F));if(se!==null)for(const F of se)y.delete(F),w.delete(F),i.dispatchEvent({type:"planeremoved",data:F});for(const F of Q.detectedPlanes)if(!y.has(F))y.add(F),w.set(F,Q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:F});else{const ce=w.get(F);F.lastChangedTime>ce&&(w.set(F,F.lastChangedTime),i.dispatchEvent({type:"planechanged",data:F}))}}_=null}const ie=new nv;ie.setAnimationLoop(H),this.setAnimationLoop=function(k){G=k},this.dispose=function(){}}}function s3(n,e){function t(d,p){p.color.getRGB(d.fogColor.value,Q0(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,g,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),c(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p)):p.isMeshStandardMaterial?(r(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,x):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===fn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===fn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=x*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function c(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===fn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function o3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function u(x,v){let y=r[x.id];y===void 0&&(_(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",p));const w=v.program;i.updateUBOMapping(x,w);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function c(x){const v=h();x.__bindingPointIndex=v;const y=n.createBuffer(),w=x.__size,T=x.usage;return n.bindBuffer(35345,y),n.bufferData(35345,w,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],y=x.uniforms,w=x.__cache;n.bindBuffer(35345,v);for(let T=0,A=y.length;T<A;T++){const S=y[T];if(m(S,T,w)===!0){const b=S.__offset,L=Array.isArray(S.value)?S.value:[S.value];let W=0;for(let K=0;K<L.length;K++){const U=L[K],N=d(U);typeof U=="number"?(S.__data[0]=U,n.bufferSubData(35345,b+W,S.__data)):U.isMatrix3?(S.__data[0]=U.elements[0],S.__data[1]=U.elements[1],S.__data[2]=U.elements[2],S.__data[3]=U.elements[0],S.__data[4]=U.elements[3],S.__data[5]=U.elements[4],S.__data[6]=U.elements[5],S.__data[7]=U.elements[0],S.__data[8]=U.elements[6],S.__data[9]=U.elements[7],S.__data[10]=U.elements[8],S.__data[11]=U.elements[0]):(U.toArray(S.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,b,S.__data)}}n.bindBuffer(35345,null)}function m(x,v,y){const w=x.value;if(y[v]===void 0){if(typeof w=="number")y[v]=w;else{const T=Array.isArray(w)?w:[w],A=[];for(let S=0;S<T.length;S++)A.push(T[S].clone());y[v]=A}return!0}else if(typeof w=="number"){if(y[v]!==w)return y[v]=w,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(w)?w:[w];for(let S=0;S<T.length;S++){const b=T[S];if(b.equals(A[S])===!1)return b.copy(A[S]),!0}}return!1}function _(x){const v=x.uniforms;let y=0;const w=16;let T=0;for(let A=0,S=v.length;A<S;A++){const b=v[A],L={boundary:0,storage:0},W=Array.isArray(b.value)?b.value:[b.value];for(let K=0,U=W.length;K<U;K++){const N=W[K],X=d(N);L.boundary+=X.boundary,L.storage+=X.storage}if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,A>0){T=y%w;const K=w-T;T!==0&&K-L.boundary<0&&(y+=w-T,b.__offset=y)}y+=L.storage}return T=y%w,T>0&&(y+=w-T),x.__size=y,x.__cache={},this}function d(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function a3(){const n=_l("canvas");return n.style.display="block",n}function pf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:a3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yr,this.useLegacyLights=!0,this.toneMapping=di,this.toneMappingExposure=1;const d=this;let p=!1,g=0,x=0,v=null,y=-1,w=null;const T=new it,A=new it;let S=null,b=e.width,L=e.height,W=1,K=null,U=null;const N=new it(0,0,b,L),X=new it(0,0,b,L);let Z=!1;const ee=new hf;let D=!1,G=!1,H=null;const ie=new at,k=new R,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?W:1}let F=t;function ce(E,B){for(let q=0;q<E.length;q++){const O=E[q],Y=e.getContext(O,B);if(Y!==null)return Y}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uf}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),F===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),F=ce(B,E),F===null)throw ce(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,_e,ye,Se,Re,J,te,le,we,de,De,Pe,Ie,$e,He,C,M,j,oe,ae,me,Te,P,z;function ge(){he=new xE(F),_e=new hE(F,he,n),he.init(_e),Te=new e3(F,he,_e),ye=new Jb(F,he,_e),Se=new SE,Re=new Ob,J=new Qb(F,he,ye,Re,_e,Te,Se),te=new dE(d),le=new vE(d),we=new P1(F,_e),P=new uE(F,he,we,_e),de=new _E(F,we,Se,P),De=new bE(F,de,we,Se),oe=new EE(F,_e,J),C=new fE(Re),Pe=new Fb(d,te,le,he,_e,P,C),Ie=new s3(d,Re),$e=new Bb,He=new Xb(he,_e),j=new lE(d,te,le,ye,De,c,o),M=new Kb(d,De,_e),z=new o3(F,Se,_e,ye),ae=new cE(F,he,Se,_e),me=new yE(F,he,Se,_e),Se.programs=Pe.programs,d.capabilities=_e,d.extensions=he,d.properties=Re,d.renderLists=$e,d.shadowMap=M,d.state=ye,d.info=Se}ge();const pe=new r3(d,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(b,L,!1))},this.getSize=function(E){return E.set(b,L)},this.setSize=function(E,B,q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,L=B,e.width=Math.floor(E*W),e.height=Math.floor(B*W),q===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(b*W,L*W).floor()},this.setDrawingBufferSize=function(E,B,q){b=E,L=B,W=q,e.width=Math.floor(E*q),e.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,B,q,O){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,B,q,O),ye.viewport(T.copy(N).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,B,q,O){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,B,q,O),ye.scissor(A.copy(X).multiplyScalar(W).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ye.setScissorTest(Z=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(E=!0,B=!0,q=!0){let O=0;E&&(O|=16384),B&&(O|=256),q&&(O|=1024),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),$e.dispose(),He.dispose(),Re.dispose(),te.dispose(),le.dispose(),De.dispose(),P.dispose(),z.dispose(),Pe.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",re),pe.removeEventListener("sessionend",ve),H&&(H.dispose(),H=null),Me.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Se.autoReset,B=M.enabled,q=M.autoUpdate,O=M.needsUpdate,Y=M.type;ge(),Se.autoReset=E,M.enabled=B,M.autoUpdate=q,M.needsUpdate=O,M.type=Y}function Ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ue(E){const B=E.target;B.removeEventListener("dispose",Ue),We(B)}function We(E){Ze(E),Re.remove(E)}function Ze(E){const B=Re.get(E).programs;B!==void 0&&(B.forEach(function(q){Pe.releaseProgram(q)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,O,Y,Le){B===null&&(B=Q);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=vv(E,B,q,O,Y);ye.setMaterial(O,Ne);let Fe=q.index,Xe=1;O.wireframe===!0&&(Fe=de.getWireframeAttribute(q),Xe=2);const Be=q.drawRange,Ve=q.attributes.position;let dt=Be.start*Xe,nn=(Be.start+Be.count)*Xe;Le!==null&&(dt=Math.max(dt,Le.start*Xe),nn=Math.min(nn,(Le.start+Le.count)*Xe)),Fe!==null?(dt=Math.max(dt,0),nn=Math.min(nn,Fe.count)):Ve!=null&&(dt=Math.max(dt,0),nn=Math.min(nn,Ve.count));const Qn=nn-dt;if(Qn<0||Qn===1/0)return;P.setup(Y,O,ze,q,Fe);let $i,pt=ae;if(Fe!==null&&($i=we.get(Fe),pt=me,pt.setIndex($i)),Y.isMesh)O.wireframe===!0?(ye.setLineWidth(O.wireframeLinewidth*se()),pt.setMode(1)):pt.setMode(4);else if(Y.isLine){let Ge=O.linewidth;Ge===void 0&&(Ge=1),ye.setLineWidth(Ge*se()),Y.isLineSegments?pt.setMode(1):Y.isLineLoop?pt.setMode(2):pt.setMode(3)}else Y.isPoints?pt.setMode(0):Y.isSprite&&pt.setMode(4);if(Y.isInstancedMesh)pt.renderInstances(dt,Qn,Y.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,jl=Math.min(q.instanceCount,Ge);pt.renderInstances(dt,Qn,jl)}else pt.render(dt,Qn)},this.compile=function(E,B){function q(O,Y,Le){O.transparent===!0&&O.side===Ri&&O.forceSinglePass===!1?(O.side=fn,O.needsUpdate=!0,xn(O,Y,Le),O.side=Wi,O.needsUpdate=!0,xn(O,Y,Le),O.side=Ri):xn(O,Y,Le)}f=He.get(E),f.init(),_.push(f),E.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(d.useLegacyLights),E.traverse(function(O){const Y=O.material;if(Y)if(Array.isArray(Y))for(let Le=0;Le<Y.length;Le++){const Ne=Y[Le];q(Ne,E,O)}else q(Y,E,O)}),_.pop(),f=null};let I=null;function $(E){I&&I(E)}function re(){Me.stop()}function ve(){Me.start()}const Me=new nv;Me.setAnimationLoop($),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(E){I=E,pe.setAnimationLoop(E),E===null?Me.stop():Me.start()},pe.addEventListener("sessionstart",re),pe.addEventListener("sessionend",ve),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(B),B=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,B,v),f=He.get(E,_.length),f.init(),_.push(f),ie.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(ie),G=this.localClippingEnabled,D=C.init(this.clippingPlanes,G),h=$e.get(E,m.length),h.init(),m.push(h),Je(E,B,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(K,U),D===!0&&C.beginShadows();const q=f.state.shadowsArray;if(M.render(q,E,B),D===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(h,E),f.setupLights(d.useLegacyLights),B.isArrayCamera){const O=B.cameras;for(let Y=0,Le=O.length;Y<Le;Y++){const Ne=O[Y];wt(h,E,Ne,Ne.viewport)}}else wt(h,E,B);v!==null&&(J.updateMultisampleRenderTarget(v),J.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(d,E,B),P.resetDefaultState(),y=-1,w=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Je(E,B,q,O){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){O&&k.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Ne=De.update(E),ze=E.material;ze.visible&&h.push(E,Ne,ze,q,k.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Se.render.frame&&(E.skeleton.update(),E.skeleton.frame=Se.render.frame),!E.frustumCulled||ee.intersectsObject(E))){O&&k.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Ne=De.update(E),ze=E.material;if(Array.isArray(ze)){const Fe=Ne.groups;for(let Xe=0,Be=Fe.length;Xe<Be;Xe++){const Ve=Fe[Xe],dt=ze[Ve.materialIndex];dt&&dt.visible&&h.push(E,Ne,dt,q,k.z,Ve)}}else ze.visible&&h.push(E,Ne,ze,q,k.z,null)}}const Le=E.children;for(let Ne=0,ze=Le.length;Ne<ze;Ne++)Je(Le[Ne],B,q,O)}function wt(E,B,q,O){const Y=E.opaque,Le=E.transmissive,Ne=E.transparent;f.setupLightsView(q),D===!0&&C.setGlobalState(d.clippingPlanes,q),Le.length>0&&Ot(Y,B,q),O&&ye.viewport(T.copy(O)),Y.length>0&&Vn(Y,B,q),Le.length>0&&Vn(Le,B,q),Ne.length>0&&Vn(Ne,B,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ot(E,B,q){const O=_e.isWebGL2;H===null&&(H=new wr(1024,1024,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?ko:_r,minFilter:No,samples:O&&s===!0?4:0}));const Y=d.getRenderTarget();d.setRenderTarget(H),d.clear();const Le=d.toneMapping;d.toneMapping=di,Vn(E,B,q),d.toneMapping=Le,J.updateMultisampleRenderTarget(H),J.updateRenderTargetMipmap(H),d.setRenderTarget(Y)}function Vn(E,B,q){const O=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Le=E.length;Y<Le;Y++){const Ne=E[Y],ze=Ne.object,Fe=Ne.geometry,Xe=O===null?Ne.material:O,Be=Ne.group;ze.layers.test(q.layers)&&ct(ze,B,q,Fe,Xe,Be)}}function ct(E,B,q,O,Y,Le){E.onBeforeRender(d,B,q,O,Y,Le),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(d,B,q,O,E,Le),Y.transparent===!0&&Y.side===Ri&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,d.renderBufferDirect(q,B,O,Y,E,Le),Y.side=Wi,Y.needsUpdate=!0,d.renderBufferDirect(q,B,O,Y,E,Le),Y.side=Ri):d.renderBufferDirect(q,B,O,Y,E,Le),E.onAfterRender(d,B,q,O,Y,Le)}function xn(E,B,q){B.isScene!==!0&&(B=Q);const O=Re.get(E),Y=f.state.lights,Le=f.state.shadowsArray,Ne=Y.state.version,ze=Pe.getParameters(E,Y.state,Le,B,q),Fe=Pe.getProgramCacheKey(ze);let Xe=O.programs;O.environment=E.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(E.isMeshStandardMaterial?le:te).get(E.envMap||O.environment),Xe===void 0&&(E.addEventListener("dispose",Ue),Xe=new Map,O.programs=Xe);let Be=Xe.get(Fe);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===Ne)return Gn(E,ze),Be}else ze.uniforms=Pe.getUniforms(E),E.onBuild(q,ze,d),E.onBeforeCompile(ze,d),Be=Pe.acquireProgram(ze,Fe),Xe.set(Fe,Be),O.uniforms=ze.uniforms;const Ve=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=C.uniform),Gn(E,ze),O.needsLights=_v(E),O.lightsStateVersion=Ne,O.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix);const dt=Be.getUniforms(),nn=ja.seqWithValue(dt.seq,Ve);return O.currentProgram=Be,O.uniformsList=nn,Be}function Gn(E,B){const q=Re.get(E);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function vv(E,B,q,O,Y){B.isScene!==!0&&(B=Q),J.resetTextureUnits();const Le=B.fog,Ne=O.isMeshStandardMaterial?B.environment:null,ze=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:yr,Fe=(O.isMeshStandardMaterial?le:te).get(O.envMap||Ne),Xe=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!O.normalMap&&!!q.attributes.tangent,Ve=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,nn=!!q.morphAttributes.color,Qn=O.toneMapped?d.toneMapping:di,$i=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=$i!==void 0?$i.length:0,Ge=Re.get(O),jl=f.state.lights;if(D===!0&&(G===!0||E!==w)){const rn=E===w&&O.id===y;C.setState(O,E,rn)}let Mt=!1;O.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==jl.state.version||Ge.outputEncoding!==ze||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Fe||O.fog===!0&&Ge.fog!==Le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==C.numPlanes||Ge.numIntersection!==C.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==Be||Ge.morphTargets!==Ve||Ge.morphNormals!==dt||Ge.morphColors!==nn||Ge.toneMapping!==Qn||_e.isWebGL2===!0&&Ge.morphTargetsCount!==pt)&&(Mt=!0):(Mt=!0,Ge.__version=O.version);let Yi=Ge.currentProgram;Mt===!0&&(Yi=xn(O,B,Y));let _f=!1,ks=!1,Xl=!1;const Ut=Yi.getUniforms(),Zi=Ge.uniforms;if(ye.useProgram(Yi.program)&&(_f=!0,ks=!0,Xl=!0),O.id!==y&&(y=O.id,ks=!0),_f||w!==E){if(Ut.setValue(F,"projectionMatrix",E.projectionMatrix),_e.logarithmicDepthBuffer&&Ut.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,ks=!0,Xl=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const rn=Ut.map.cameraPosition;rn!==void 0&&rn.setValue(F,k.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ut.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Y.isSkinnedMesh)&&Ut.setValue(F,"viewMatrix",E.matrixWorldInverse)}if(Y.isSkinnedMesh){Ut.setOptional(F,Y,"bindMatrix"),Ut.setOptional(F,Y,"bindMatrixInverse");const rn=Y.skeleton;rn&&(_e.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Ut.setValue(F,"boneTexture",rn.boneTexture,J),Ut.setValue(F,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ql=q.morphAttributes;if((ql.position!==void 0||ql.normal!==void 0||ql.color!==void 0&&_e.isWebGL2===!0)&&oe.update(Y,q,Yi),(ks||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,Ut.setValue(F,"receiveShadow",Y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Zi.envMap.value=Fe,Zi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ks&&(Ut.setValue(F,"toneMappingExposure",d.toneMappingExposure),Ge.needsLights&&xv(Zi,Xl),Le&&O.fog===!0&&Ie.refreshFogUniforms(Zi,Le),Ie.refreshMaterialUniforms(Zi,O,W,L,H),ja.upload(F,Ge.uniformsList,Zi,J)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ja.upload(F,Ge.uniformsList,Zi,J),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ut.setValue(F,"center",Y.center),Ut.setValue(F,"modelViewMatrix",Y.modelViewMatrix),Ut.setValue(F,"normalMatrix",Y.normalMatrix),Ut.setValue(F,"modelMatrix",Y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const rn=O.uniformsGroups;for(let $l=0,yv=rn.length;$l<yv;$l++)if(_e.isWebGL2){const yf=rn[$l];z.update(yf,Yi),z.bind(yf,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function xv(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function _v(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,B,q){Re.get(E.texture).__webglTexture=B,Re.get(E.depthTexture).__webglTexture=q;const O=Re.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const q=Re.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){v=E,g=B,x=q;let O=!0,Y=null,Le=!1,Ne=!1;if(E){const Fe=Re.get(E);Fe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),O=!1):Fe.__webglFramebuffer===void 0?J.setupRenderTarget(E):Fe.__hasExternalTextures&&J.rebindTextures(E,Re.get(E.texture).__webglTexture,Re.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const Be=Re.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Y=Be[B],Le=!0):_e.isWebGL2&&E.samples>0&&J.useMultisampledRTT(E)===!1?Y=Re.get(E).__webglMultisampledFramebuffer:Y=Be,T.copy(E.viewport),A.copy(E.scissor),S=E.scissorTest}else T.copy(N).multiplyScalar(W).floor(),A.copy(X).multiplyScalar(W).floor(),S=Z;if(ye.bindFramebuffer(36160,Y)&&_e.drawBuffers&&O&&ye.drawBuffers(E,Y),ye.viewport(T),ye.scissor(A),ye.setScissorTest(S),Le){const Fe=Re.get(E.texture);F.framebufferTexture2D(36160,36064,34069+B,Fe.__webglTexture,q)}else if(Ne){const Fe=Re.get(E.texture),Xe=B||0;F.framebufferTextureLayer(36160,36064,Fe.__webglTexture,q||0,Xe)}y=-1},this.readRenderTargetPixels=function(E,B,q,O,Y,Le,Ne){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Re.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){ye.bindFramebuffer(36160,ze);try{const Fe=E.texture,Xe=Fe.format,Be=Fe.type;if(Xe!==zn&&Te.convert(Xe)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Be===ko&&(he.has("EXT_color_buffer_half_float")||_e.isWebGL2&&he.has("EXT_color_buffer_float"));if(Be!==_r&&Te.convert(Be)!==F.getParameter(35738)&&!(Be===ur&&(_e.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-O&&q>=0&&q<=E.height-Y&&F.readPixels(B,q,O,Y,Te.convert(Xe),Te.convert(Be),Le)}finally{const Fe=v!==null?Re.get(v).__webglFramebuffer:null;ye.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(E,B,q=0){const O=Math.pow(2,-q),Y=Math.floor(B.image.width*O),Le=Math.floor(B.image.height*O);J.setTexture2D(B,0),F.copyTexSubImage2D(3553,q,0,0,E.x,E.y,Y,Le),ye.unbindTexture()},this.copyTextureToTexture=function(E,B,q,O=0){const Y=B.image.width,Le=B.image.height,Ne=Te.convert(q.format),ze=Te.convert(q.type);J.setTexture2D(q,0),F.pixelStorei(37440,q.flipY),F.pixelStorei(37441,q.premultiplyAlpha),F.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?F.texSubImage2D(3553,O,E.x,E.y,Y,Le,Ne,ze,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(3553,O,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ne,B.mipmaps[0].data):F.texSubImage2D(3553,O,E.x,E.y,Ne,ze,B.image),O===0&&q.generateMipmaps&&F.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,B,q,O,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=E.max.x-E.min.x+1,Ne=E.max.y-E.min.y+1,ze=E.max.z-E.min.z+1,Fe=Te.convert(O.format),Xe=Te.convert(O.type);let Be;if(O.isData3DTexture)J.setTexture3D(O,0),Be=32879;else if(O.isDataArrayTexture)J.setTexture2DArray(O,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,O.flipY),F.pixelStorei(37441,O.premultiplyAlpha),F.pixelStorei(3317,O.unpackAlignment);const Ve=F.getParameter(3314),dt=F.getParameter(32878),nn=F.getParameter(3316),Qn=F.getParameter(3315),$i=F.getParameter(32877),pt=q.isCompressedTexture?q.mipmaps[0]:q.image;F.pixelStorei(3314,pt.width),F.pixelStorei(32878,pt.height),F.pixelStorei(3316,E.min.x),F.pixelStorei(3315,E.min.y),F.pixelStorei(32877,E.min.z),q.isDataTexture||q.isData3DTexture?F.texSubImage3D(Be,Y,B.x,B.y,B.z,Le,Ne,ze,Fe,Xe,pt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Be,Y,B.x,B.y,B.z,Le,Ne,ze,Fe,pt.data)):F.texSubImage3D(Be,Y,B.x,B.y,B.z,Le,Ne,ze,Fe,Xe,pt),F.pixelStorei(3314,Ve),F.pixelStorei(32878,dt),F.pixelStorei(3316,nn),F.pixelStorei(3315,Qn),F.pixelStorei(32877,$i),Y===0&&O.generateMipmaps&&F.generateMipmap(Be),ye.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){g=0,x=0,v=null,ye.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(pf.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class l3 extends pf{}l3.prototype.isWebGL1Renderer=!0;class u3 extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class av extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kp=new R,Jp=new R,Qp=new at,Qu=new q0,Pa=new Vl;class c3 extends jt{constructor(e=new Bn,t=new av){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Kp.fromBufferAttribute(t,r-1),Jp.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Kp.distanceTo(Jp);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(r),Pa.radius+=s,e.ray.intersectsSphere(Pa)===!1)return;Qp.copy(r).invert(),Qu.copy(e.ray).applyMatrix4(Qp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new R,c=new R,h=new R,f=new R,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const g=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=g,y=x-1;v<y;v+=m){const w=_.getX(v),T=_.getX(v+1);if(u.fromBufferAttribute(p,w),c.fromBufferAttribute(p,T),Qu.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=g,y=x-1;v<y;v+=m){if(u.fromBufferAttribute(p,v),c.fromBufferAttribute(p,v+1),Qu.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const em=new R,tm=new R;class h3 extends c3{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)em.fromBufferAttribute(t,r),tm.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+em.distanceTo(tm);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,m=(o-c)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,r=[],s=[],o=[],a=new R,l=new at;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new R)}s[0]=new R,o[0]=new R;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(kt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(kt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mf extends Jn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new ue,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=u-this.aY;l=f*c-m*h+this.aX,u=f*h+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class f3 extends mf{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gf(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+h)+(l-a)/h;f*=c,m*=c,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const La=new R,ec=new gf,tc=new gf,nc=new gf;class d3 extends Jn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(La.subVectors(r[0],r[1]).add(r[0]),u=La);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(La.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=La),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(h),m),d=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(c),m);d<1e-4&&(d=1),_<1e-4&&(_=d),p<1e-4&&(p=d),ec.initNonuniformCatmullRom(u.x,h.x,f.x,c.x,_,d,p),tc.initNonuniformCatmullRom(u.y,h.y,f.y,c.y,_,d,p),nc.initNonuniformCatmullRom(u.z,h.z,f.z,c.z,_,d,p)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(u.x,h.x,f.x,c.x,this.tension),tc.initCatmullRom(u.y,h.y,f.y,c.y,this.tension),nc.initCatmullRom(u.z,h.z,f.z,c.z,this.tension));return i.set(ec.calc(l),tc.calc(l),nc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nm(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function p3(n,e){const t=1-n;return t*t*e}function m3(n,e){return 2*(1-n)*n*e}function g3(n,e){return n*n*e}function mo(n,e,t,i){return p3(n,e)+m3(n,t)+g3(n,i)}function v3(n,e){const t=1-n;return t*t*t*e}function x3(n,e){const t=1-n;return 3*t*t*n*e}function _3(n,e){return 3*(1-n)*n*n*e}function y3(n,e){return n*n*n*e}function go(n,e,t,i,r){return v3(n,e)+x3(n,t)+_3(n,i)+y3(n,r)}class lv extends Jn{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(go(e,r.x,s.x,o.x,a.x),go(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S3 extends Jn{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(go(e,r.x,s.x,o.x,a.x),go(e,r.y,s.y,o.y,a.y),go(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vf extends Jn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w3 extends Jn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uv extends Jn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(mo(e,r.x,s.x,o.x),mo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M3 extends Jn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(mo(e,r.x,s.x,o.x),mo(e,r.y,s.y,o.y),mo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cv extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(nm(a,l.x,u.x,c.x,h.x),nm(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var hv=Object.freeze({__proto__:null,ArcCurve:f3,CatmullRomCurve3:d3,CubicBezierCurve:lv,CubicBezierCurve3:S3,EllipseCurve:mf,LineCurve:vf,LineCurve3:w3,QuadraticBezierCurve:uv,QuadraticBezierCurve3:M3,SplineCurve:cv});class E3 extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new vf(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new hv[r.type]().fromJSON(r))}return this}}class ch extends E3{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new vf(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new uv(this.currentPoint.clone(),new ue(e,t),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new lv(this.currentPoint.clone(),new ue(e,t),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new cv(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new mf(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xa extends ch{constructor(e){super(e),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ch().fromJSON(r))}return this}}const b3={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=fv(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,h,f,m;if(i&&(s=L3(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let _=t;_<r;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);m=Math.max(u-a,c-l),m=m!==0?32767/m:0}return Fo(s,o,t,a,l,m,0),o}};function fv(n,e,t,i,r){let s,o;if(r===V3(n,e,t,i)>0)for(s=e;s<t;s+=i)o=im(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=im(s,n[s],n[s+1],o);return o&&Wl(o,o.next)&&(Uo(o),o=o.next),o}function br(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Wl(t,t.next)||st(t.prev,t,t.next)===0)){if(Uo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fo(n,e,t,i,r,s,o){if(!n)return;!o&&s&&k3(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?C3(n,i,r,s):T3(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),Uo(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=A3(br(n),e,t),Fo(n,e,t,i,r,s,2)):o===2&&P3(n,e,t,i,r,s):Fo(br(n),e,t,i,r,s,1);break}}}function T3(n){const e=n.prev,t=n,i=n.next;if(st(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>u?a:u:l>u?l:u;let _=i.next;for(;_!==e;){if(_.x>=c&&_.x<=f&&_.y>=h&&_.y<=m&&os(r,a,s,l,o,u,_.x,_.y)&&st(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function C3(n,e,t,i){const r=n.prev,s=n,o=n.next;if(st(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,f=o.y,m=a<l?a<u?a:u:l<u?l:u,_=c<h?c<f?c:f:h<f?h:f,d=a>l?a>u?a:u:l>u?l:u,p=c>h?c>f?c:f:h>f?h:f,g=hh(m,_,e,t,i),x=hh(d,p,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=g&&y&&y.z<=x;){if(v.x>=m&&v.x<=d&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&os(a,c,l,h,u,f,v.x,v.y)&&st(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=m&&y.x<=d&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&os(a,c,l,h,u,f,y.x,y.y)&&st(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=m&&v.x<=d&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&os(a,c,l,h,u,f,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=m&&y.x<=d&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&os(a,c,l,h,u,f,y.x,y.y)&&st(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function A3(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Wl(r,s)&&dv(r,i,i.next,s)&&Oo(r,s)&&Oo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Uo(i),Uo(i.next),i=n=s),i=i.next}while(i!==n);return br(i)}function P3(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O3(o,a)){let l=pv(o,a);o=br(o,o.next),l=br(l,l.next),Fo(o,e,t,i,r,s,0),Fo(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function L3(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=fv(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(F3(u));for(r.sort(R3),s=0;s<r.length;s++)t=D3(r[s],t);return t}function R3(n,e){return n.x-e.x}function D3(n,e){const t=I3(n,e);if(!t)return e;const i=pv(t,n);return br(i,i.next),br(t,t.next)}function I3(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&os(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Oo(t,n)&&(h<c||h===c&&(t.x>r.x||t.x===r.x&&N3(r,t)))&&(r=t,c=h)),t=t.next;while(t!==a);return r}function N3(n,e){return st(n.prev,n,e.prev)<0&&st(e.next,n,n.next)<0}function k3(n,e,t,i){let r=n;do r.z===0&&(r.z=hh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,z3(r)}function z3(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function hh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function F3(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function os(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function O3(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!U3(n,e)&&(Oo(n,e)&&Oo(e,n)&&B3(n,e)&&(st(n.prev,n,e.prev)||st(n,e.prev,e))||Wl(n,e)&&st(n.prev,n,n.next)>0&&st(e.prev,e,e.next)>0)}function st(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Wl(n,e){return n.x===e.x&&n.y===e.y}function dv(n,e,t,i){const r=Da(st(n,e,t)),s=Da(st(n,e,i)),o=Da(st(t,i,n)),a=Da(st(t,i,e));return!!(r!==s&&o!==a||r===0&&Ra(n,t,e)||s===0&&Ra(n,i,e)||o===0&&Ra(t,n,i)||a===0&&Ra(t,e,i))}function Ra(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Da(n){return n>0?1:n<0?-1:0}function U3(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dv(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Oo(n,e){return st(n.prev,n,n.next)<0?st(n,e,n.next)>=0&&st(n,n.prev,e)>=0:st(n,e,n.prev)<0||st(n,n.next,e)<0}function B3(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pv(n,e){const t=new fh(n.i,n.x,n.y),i=new fh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function im(n,e,t,i){const r=new fh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Uo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V3(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class vs{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return vs.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];rm(e),sm(i,e);let o=e.length;t.forEach(rm);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,sm(i,t[l]);const a=b3.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function rm(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function sm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class xf extends Bn{constructor(e=new Xa([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new pn(r,3)),this.setAttribute("uv",new pn(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,d=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:G3;let v,y=!1,w,T,A,S;g&&(v=g.getSpacedPoints(c),y=!0,f=!1,w=g.computeFrenetFrames(c,!1),T=new R,A=new R,S=new R),f||(p=0,m=0,_=0,d=0);const b=a.extractPoints(u);let L=b.shape;const W=b.holes;if(!vs.isClockWise(L)){L=L.reverse();for(let J=0,te=W.length;J<te;J++){const le=W[J];vs.isClockWise(le)&&(W[J]=le.reverse())}}const U=vs.triangulateShape(L,W),N=L;for(let J=0,te=W.length;J<te;J++){const le=W[J];L=L.concat(le)}function X(J,te,le){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(te,le)}const Z=L.length,ee=U.length;function D(J,te,le){let we,de,De;const Pe=J.x-te.x,Ie=J.y-te.y,$e=le.x-J.x,He=le.y-J.y,C=Pe*Pe+Ie*Ie,M=Pe*He-Ie*$e;if(Math.abs(M)>Number.EPSILON){const j=Math.sqrt(C),oe=Math.sqrt($e*$e+He*He),ae=te.x-Ie/j,me=te.y+Pe/j,Te=le.x-He/oe,P=le.y+$e/oe,z=((Te-ae)*He-(P-me)*$e)/(Pe*He-Ie*$e);we=ae+Pe*z-J.x,de=me+Ie*z-J.y;const ge=we*we+de*de;if(ge<=2)return new ue(we,de);De=Math.sqrt(ge/2)}else{let j=!1;Pe>Number.EPSILON?$e>Number.EPSILON&&(j=!0):Pe<-Number.EPSILON?$e<-Number.EPSILON&&(j=!0):Math.sign(Ie)===Math.sign(He)&&(j=!0),j?(we=-Ie,de=Pe,De=Math.sqrt(C)):(we=Pe,de=Ie,De=Math.sqrt(C/2))}return new ue(we/De,de/De)}const G=[];for(let J=0,te=N.length,le=te-1,we=J+1;J<te;J++,le++,we++)le===te&&(le=0),we===te&&(we=0),G[J]=D(N[J],N[le],N[we]);const H=[];let ie,k=G.concat();for(let J=0,te=W.length;J<te;J++){const le=W[J];ie=[];for(let we=0,de=le.length,De=de-1,Pe=we+1;we<de;we++,De++,Pe++)De===de&&(De=0),Pe===de&&(Pe=0),ie[we]=D(le[we],le[De],le[Pe]);H.push(ie),k=k.concat(ie)}for(let J=0;J<p;J++){const te=J/p,le=m*Math.cos(te*Math.PI/2),we=_*Math.sin(te*Math.PI/2)+d;for(let de=0,De=N.length;de<De;de++){const Pe=X(N[de],G[de],we);he(Pe.x,Pe.y,-le)}for(let de=0,De=W.length;de<De;de++){const Pe=W[de];ie=H[de];for(let Ie=0,$e=Pe.length;Ie<$e;Ie++){const He=X(Pe[Ie],ie[Ie],we);he(He.x,He.y,-le)}}}const Q=_+d;for(let J=0;J<Z;J++){const te=f?X(L[J],k[J],Q):L[J];y?(A.copy(w.normals[0]).multiplyScalar(te.x),T.copy(w.binormals[0]).multiplyScalar(te.y),S.copy(v[0]).add(A).add(T),he(S.x,S.y,S.z)):he(te.x,te.y,0)}for(let J=1;J<=c;J++)for(let te=0;te<Z;te++){const le=f?X(L[te],k[te],Q):L[te];y?(A.copy(w.normals[J]).multiplyScalar(le.x),T.copy(w.binormals[J]).multiplyScalar(le.y),S.copy(v[J]).add(A).add(T),he(S.x,S.y,S.z)):he(le.x,le.y,h/c*J)}for(let J=p-1;J>=0;J--){const te=J/p,le=m*Math.cos(te*Math.PI/2),we=_*Math.sin(te*Math.PI/2)+d;for(let de=0,De=N.length;de<De;de++){const Pe=X(N[de],G[de],we);he(Pe.x,Pe.y,h+le)}for(let de=0,De=W.length;de<De;de++){const Pe=W[de];ie=H[de];for(let Ie=0,$e=Pe.length;Ie<$e;Ie++){const He=X(Pe[Ie],ie[Ie],we);y?he(He.x,He.y+v[c-1].y,v[c-1].x+le):he(He.x,He.y,h+le)}}}se(),F();function se(){const J=r.length/3;if(f){let te=0,le=Z*te;for(let we=0;we<ee;we++){const de=U[we];_e(de[2]+le,de[1]+le,de[0]+le)}te=c+p*2,le=Z*te;for(let we=0;we<ee;we++){const de=U[we];_e(de[0]+le,de[1]+le,de[2]+le)}}else{for(let te=0;te<ee;te++){const le=U[te];_e(le[2],le[1],le[0])}for(let te=0;te<ee;te++){const le=U[te];_e(le[0]+Z*c,le[1]+Z*c,le[2]+Z*c)}}i.addGroup(J,r.length/3-J,0)}function F(){const J=r.length/3;let te=0;ce(N,te),te+=N.length;for(let le=0,we=W.length;le<we;le++){const de=W[le];ce(de,te),te+=de.length}i.addGroup(J,r.length/3-J,1)}function ce(J,te){let le=J.length;for(;--le>=0;){const we=le;let de=le-1;de<0&&(de=J.length-1);for(let De=0,Pe=c+p*2;De<Pe;De++){const Ie=Z*De,$e=Z*(De+1),He=te+we+Ie,C=te+de+Ie,M=te+de+$e,j=te+we+$e;ye(He,C,M,j)}}}function he(J,te,le){l.push(J),l.push(te),l.push(le)}function _e(J,te,le){Se(J),Se(te),Se(le);const we=r.length/3,de=x.generateTopUV(i,r,we-3,we-2,we-1);Re(de[0]),Re(de[1]),Re(de[2])}function ye(J,te,le,we){Se(J),Se(te),Se(we),Se(te),Se(le),Se(we);const de=r.length/3,De=x.generateSideWallUV(i,r,de-6,de-3,de-2,de-1);Re(De[0]),Re(De[1]),Re(De[3]),Re(De[1]),Re(De[2]),Re(De[3])}function Se(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function Re(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return H3(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hv[r.type]().fromJSON(r)),new xf(i,e.options)}}const G3={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],f=e[r*3],m=e[r*3+1],_=e[r*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ue(o,1-l),new ue(u,1-h),new ue(f,1-_),new ue(d,1-g)]:[new ue(a,1-l),new ue(c,1-h),new ue(m,1-_),new ue(p,1-g)]}};function H3(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class om extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W3 extends Pr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const am={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class j3{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const m=u[h],_=u[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const X3=new j3;class mv{constructor(e){this.manager=e!==void 0?e:X3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const oi={};class q3 extends Error{constructor(e,t){super(e),this.response=t}}class $3 extends mv{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=am.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:i,onError:r});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=oi[e],h=u.body.getReader(),f=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let d=0;const p=new ReadableStream({start(g){x();function x(){h.read().then(({done:v,value:y})=>{if(v)g.close();else{d+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:d,total:m});for(let T=0,A=c.length;T<A;T++){const S=c[T];S.onProgress&&S.onProgress(w)}g.enqueue(y),x()}})}}});return new Response(p)}else throw new q3(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return u.arrayBuffer().then(_=>m.decode(_))}}}).then(u=>{am.add(e,u);const c=oi[e];delete oi[e];for(let h=0,f=c.length;h<f;h++){const m=c[h];m.onLoad&&m.onLoad(u)}}).catch(u=>{const c=oi[e];if(c===void 0)throw this.manager.itemError(e),u;delete oi[e];for(let h=0,f=c.length;h<f;h++){const m=c[h];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gv extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ic=new at,lm=new R,um=new R;class Y3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hf,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lm.setFromMatrixPosition(e.matrixWorld),t.position.copy(lm),um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(um),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cm=new at,Ks=new R,rc=new R;class Z3 extends Y3{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ks),rc.copy(i.position),rc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rc),i.updateMatrixWorld(),r.makeTranslation(-Ks.x,-Ks.y,-Ks.z),cm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cm)}}class K3 extends gv{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Z3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class J3 extends gv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hm{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Q3 extends h3{constructor(e=10,t=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const s=t/2,o=e/t,a=e/2,l=[],u=[];for(let f=0,m=0,_=-a;f<=t;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const d=f===s?i:r;d.toArray(u,m),m+=3,d.toArray(u,m),m+=3,d.toArray(u,m),m+=3,d.toArray(u,m),m+=3}const c=new Bn;c.setAttribute("position",new pn(l,3)),c.setAttribute("color",new pn(u,3));const h=new av({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class e2{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ch,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const x=[];for(let v=0,y=g.length;v<y;v++){const w=g[v],T=new Xa;T.curves=w.curves,x.push(T)}return x}function i(g,x){const v=x.length;let y=!1;for(let w=v-1,T=0;T<v;w=T++){let A=x[w],S=x[T],b=S.x-A.x,L=S.y-A.y;if(Math.abs(L)>Number.EPSILON){if(L<0&&(A=x[T],b=-b,S=x[w],L=-L),g.y<A.y||g.y>S.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const W=L*(g.x-A.x)-b*(g.y-A.y);if(W===0)return!0;if(W<0)continue;y=!y}}else{if(g.y!==A.y)continue;if(S.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=S.x)return!0}}return y}const r=vs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new Xa,l.curves=a.curves,u.push(l),u;let c=!r(s[0].getPoints());c=e?!c:c;const h=[],f=[];let m=[],_=0,d;f[_]=void 0,m[_]=[];for(let g=0,x=s.length;g<x;g++)a=s[g],d=a.getPoints(),o=r(d),o=e?!o:o,o?(!c&&f[_]&&_++,f[_]={s:new Xa,p:d},f[_].s.curves=a.curves,c&&_++,m[_]=[]):m[_].push({h:a,p:d[0]});if(!f[0])return t(s);if(f.length>1){let g=!1,x=0;for(let v=0,y=f.length;v<y;v++)h[v]=[];for(let v=0,y=f.length;v<y;v++){const w=m[v];for(let T=0;T<w.length;T++){const A=w[T];let S=!0;for(let b=0;b<f.length;b++)i(A.p,f[b].p)&&(v!==b&&x++,S?(S=!1,h[b].push(A)):g=!0);S&&h[v].push(A)}}x>0&&g===!1&&(m=h)}let p;for(let g=0,x=f.length;g<x;g++){l=f[g].s,u.push(l),p=m[g];for(let v=0,y=p.length;v<y;v++)l.holes.push(p[v].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);class t2 extends mv{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new $3(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new n2(e)}}class n2{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=i2(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function i2(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const c=i[u];if(c===`
`)a=0,l-=s;else{const h=r2(c,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function r2(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new e2;let a,l,u,c,h,f,m,_;if(s.o){const d=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,g=d.length;p<g;)switch(d[p++]){case"m":a=d[p++]*e+t,l=d[p++]*e+i,o.moveTo(a,l);break;case"l":a=d[p++]*e+t,l=d[p++]*e+i,o.lineTo(a,l);break;case"q":u=d[p++]*e+t,c=d[p++]*e+i,h=d[p++]*e+t,f=d[p++]*e+i,o.quadraticCurveTo(h,f,u,c);break;case"b":u=d[p++]*e+t,c=d[p++]*e+i,h=d[p++]*e+t,f=d[p++]*e+i,m=d[p++]*e+t,_=d[p++]*e+i,o.bezierCurveTo(h,f,m,_,u,c);break}}return{offsetX:s.ha*e,path:o}}class s2 extends xf{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const fm={type:"change"},sc={type:"start"},dm={type:"end"};class o2 extends Ar{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:Dr.ROTATE,TWO:Dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",He),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",He),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fm),i.update(),s=r.NONE},this.update=function(){const P=new R,z=new Sr().setFromUnitVectors(e.up,new R(0,1,0)),ge=z.clone().invert(),pe=new R,be=new Sr,Ae=2*Math.PI;return function(){const Ue=i.object.position;P.copy(Ue).sub(i.target),P.applyQuaternion(z),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&b(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let We=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;return isFinite(We)&&isFinite(Ze)&&(We<-Math.PI?We+=Ae:We>Math.PI&&(We-=Ae),Ze<-Math.PI?Ze+=Ae:Ze>Math.PI&&(Ze-=Ae),We<=Ze?a.theta=Math.max(We,Math.min(Ze,a.theta)):a.theta=a.theta>(We+Ze)/2?Math.max(We,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),P.setFromSpherical(a),P.applyQuaternion(ge),Ue.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,h||pe.distanceToSquared(i.object.position)>o||8*(1-be.dot(i.object.quaternion))>o?(i.dispatchEvent(fm),pe.copy(i.object.position),be.copy(i.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",le),i.domElement.removeEventListener("pointercancel",De),i.domElement.removeEventListener("wheel",$e),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",de),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",He),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new hm,l=new hm;let u=1;const c=new R;let h=!1;const f=new ue,m=new ue,_=new ue,d=new ue,p=new ue,g=new ue,x=new ue,v=new ue,y=new ue,w=[],T={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function b(P){l.theta-=P}function L(P){l.phi-=P}const W=function(){const P=new R;return function(ge,pe){P.setFromMatrixColumn(pe,0),P.multiplyScalar(-ge),c.add(P)}}(),K=function(){const P=new R;return function(ge,pe){i.screenSpacePanning===!0?P.setFromMatrixColumn(pe,1):(P.setFromMatrixColumn(pe,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ge),c.add(P)}}(),U=function(){const P=new R;return function(ge,pe){const be=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;P.copy(Ae).sub(i.target);let Ce=P.length();Ce*=Math.tan(i.object.fov/2*Math.PI/180),W(2*ge*Ce/be.clientHeight,i.object.matrix),K(2*pe*Ce/be.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(W(ge*(i.object.right-i.object.left)/i.object.zoom/be.clientWidth,i.object.matrix),K(pe*(i.object.top-i.object.bottom)/i.object.zoom/be.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(P){i.object.isPerspectiveCamera?u/=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*P)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(P){i.object.isPerspectiveCamera?u*=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/P)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(P){f.set(P.clientX,P.clientY)}function ee(P){x.set(P.clientX,P.clientY)}function D(P){d.set(P.clientX,P.clientY)}function G(P){m.set(P.clientX,P.clientY),_.subVectors(m,f).multiplyScalar(i.rotateSpeed);const z=i.domElement;b(2*Math.PI*_.x/z.clientHeight),L(2*Math.PI*_.y/z.clientHeight),f.copy(m),i.update()}function H(P){v.set(P.clientX,P.clientY),y.subVectors(v,x),y.y>0?N(S()):y.y<0&&X(S()),x.copy(v),i.update()}function ie(P){p.set(P.clientX,P.clientY),g.subVectors(p,d).multiplyScalar(i.panSpeed),U(g.x,g.y),d.copy(p),i.update()}function k(P){P.deltaY<0?X(S()):P.deltaY>0&&N(S()),i.update()}function Q(P){let z=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),z=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),z=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?b(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),z=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?b(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),z=!0;break}z&&(P.preventDefault(),i.update())}function se(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);f.set(P,z)}}function F(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);d.set(P,z)}}function ce(){const P=w[0].pageX-w[1].pageX,z=w[0].pageY-w[1].pageY,ge=Math.sqrt(P*P+z*z);x.set(0,ge)}function he(){i.enableZoom&&ce(),i.enablePan&&F()}function _e(){i.enableZoom&&ce(),i.enableRotate&&se()}function ye(P){if(w.length==1)m.set(P.pageX,P.pageY);else{const ge=Te(P),pe=.5*(P.pageX+ge.x),be=.5*(P.pageY+ge.y);m.set(pe,be)}_.subVectors(m,f).multiplyScalar(i.rotateSpeed);const z=i.domElement;b(2*Math.PI*_.x/z.clientHeight),L(2*Math.PI*_.y/z.clientHeight),f.copy(m)}function Se(P){if(w.length===1)p.set(P.pageX,P.pageY);else{const z=Te(P),ge=.5*(P.pageX+z.x),pe=.5*(P.pageY+z.y);p.set(ge,pe)}g.subVectors(p,d).multiplyScalar(i.panSpeed),U(g.x,g.y),d.copy(p)}function Re(P){const z=Te(P),ge=P.pageX-z.x,pe=P.pageY-z.y,be=Math.sqrt(ge*ge+pe*pe);v.set(0,be),y.set(0,Math.pow(v.y/x.y,i.zoomSpeed)),N(y.y),x.copy(v)}function J(P){i.enableZoom&&Re(P),i.enablePan&&Se(P)}function te(P){i.enableZoom&&Re(P),i.enableRotate&&ye(P)}function le(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",we),i.domElement.addEventListener("pointerup",de)),oe(P),P.pointerType==="touch"?C(P):Pe(P))}function we(P){i.enabled!==!1&&(P.pointerType==="touch"?M(P):Ie(P))}function de(P){ae(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",de)),i.dispatchEvent(dm),s=r.NONE}function De(P){ae(P)}function Pe(P){let z;switch(P.button){case 0:z=i.mouseButtons.LEFT;break;case 1:z=i.mouseButtons.MIDDLE;break;case 2:z=i.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Rr.DOLLY:if(i.enableZoom===!1)return;ee(P),s=r.DOLLY;break;case Rr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;D(P),s=r.PAN}else{if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}break;case Rr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;Z(P),s=r.ROTATE}else{if(i.enablePan===!1)return;D(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(sc)}function Ie(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(P);break;case r.DOLLY:if(i.enableZoom===!1)return;H(P);break;case r.PAN:if(i.enablePan===!1)return;ie(P);break}}function $e(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(sc),k(P),i.dispatchEvent(dm))}function He(P){i.enabled===!1||i.enablePan===!1||Q(P)}function C(P){switch(me(P),w.length){case 1:switch(i.touches.ONE){case Dr.ROTATE:if(i.enableRotate===!1)return;se(),s=r.TOUCH_ROTATE;break;case Dr.PAN:if(i.enablePan===!1)return;F(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Dr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;he(),s=r.TOUCH_DOLLY_PAN;break;case Dr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_e(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(sc)}function M(P){switch(me(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ye(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Se(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(P),i.update();break;default:s=r.NONE}}function j(P){i.enabled!==!1&&P.preventDefault()}function oe(P){w.push(P)}function ae(P){delete T[P.pointerId];for(let z=0;z<w.length;z++)if(w[z].pointerId==P.pointerId){w.splice(z,1);return}}function me(P){let z=T[P.pointerId];z===void 0&&(z=new ue,T[P.pointerId]=z),z.set(P.pageX,P.pageY)}function Te(P){const z=P.pointerId===w[0].pointerId?w[1]:w[0];return T[z.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",le),i.domElement.addEventListener("pointercancel",De),i.domElement.addEventListener("wheel",$e,{passive:!1}),this.update()}}class a2{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,r=[];let s=0;e.traverse(function(g){if(g.isMesh){const x=g.geometry,v=x.index,y=x.getAttribute("position");s+=v!==null?v.count/3:y.count/3,r.push({object3d:g,geometry:x})}});let o,a=80;if(i===!0){const g=s*2+s*3*4*4+80+4,x=new ArrayBuffer(g);o=new DataView(x),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new R,u=new R,c=new R,h=new R,f=new R,m=new R;for(let g=0,x=r.length;g<x;g++){const v=r[g].object3d,y=r[g].geometry,w=y.index,T=y.getAttribute("position");if(w!==null)for(let A=0;A<w.count;A+=3){const S=w.getX(A+0),b=w.getX(A+1),L=w.getX(A+2);_(S,b,L,T,v)}else for(let A=0;A<T.count;A+=3){const S=A+0,b=A+1,L=A+2;_(S,b,L,T,v)}}return i===!1&&(o+=`endsolid exported
`),o;function _(g,x,v,y,w){l.fromBufferAttribute(y,g),u.fromBufferAttribute(y,x),c.fromBufferAttribute(y,v),w.isSkinnedMesh===!0&&(w.boneTransform(g,l),w.boneTransform(x,u),w.boneTransform(v,c)),l.applyMatrix4(w.matrixWorld),u.applyMatrix4(w.matrixWorld),c.applyMatrix4(w.matrixWorld),d(l,u,c),p(l),p(u),p(c),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function d(g,x,v){h.subVectors(v,x),f.subVectors(g,x),h.cross(f).normalize(),m.copy(h).normalize(),i===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):(o+="	facet normal "+m.x+" "+m.y+" "+m.z+`
`,o+=`		outer loop
`)}function p(g){i===!0?(o.setFloat32(a,g.x,!0),a+=4,o.setFloat32(a,g.y,!0),a+=4,o.setFloat32(a,g.z,!0),a+=4):o+="			vertex "+g.x+" "+g.y+" "+g.z+`
`}}}class oc{constructor(e){this.top=0,this.array=new Float32Array(e)}write(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y,this.array[this.top++]=e.z}}class l2{constructor(e){this.top=0,this.array=new Float32Array(e)}write(e){this.array[this.top++]=e.x,this.array[this.top++]=e.y}}class $n{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygons=[],e&&this.build(e)}clone(){const e=new $n;return e.plane=this.plane&&this.plane.clone(),e.front=this.front&&this.front.clone(),e.back=this.back&&this.back.clone(),e.polygons=this.polygons.map(t=>t.clone()),e}invert(){for(let t=0;t<this.polygons.length;t++)this.polygons[t].flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();const e=this.front;this.front=this.back,this.back=e}clipPolygons(e){if(!this.plane)return e.slice();let t=new Array,i=new Array;for(let r=0;r<e.length;r++)this.plane.splitPolygon(e[r],t,i,t,i);return this.front&&(t=this.front.clipPolygons(t)),this.back?i=this.back.clipPolygons(i):i=[],t.concat(i)}clipTo(e){this.polygons=e.clipPolygons(this.polygons),this.front&&this.front.clipTo(e),this.back&&this.back.clipTo(e)}allPolygons(){let e=this.polygons.slice();return this.front&&(e=e.concat(this.front.allPolygons())),this.back&&(e=e.concat(this.back.allPolygons())),e}build(e){if(!e.length)return;this.plane||(this.plane=e[0].plane.clone());const t=[],i=[];for(let r=0;r<e.length;r++)this.plane.splitPolygon(e[r],this.polygons,this.polygons,t,i);t.length&&(this.front||(this.front=new $n),this.front.build(t)),i.length&&(this.back||(this.back=new $n),this.back.build(i))}}class Kt{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}clone(){return new Kt(this.x,this.y,this.z)}negate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}times(e){return this.x*=e,this.y*=e,this.z*=e,this}dividedBy(e){return this.x/=e,this.y/=e,this.z/=e,this}lerp(e,t){return this.add(new Kt().copy(e).sub(this).times(t))}unit(){return this.dividedBy(this.length())}length(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2))}normalize(){return this.unit()}cross(e){const t=this.clone(),i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}toVector3(){return new R(this.x,this.y,this.z)}}class cr{constructor(e,t){this.normal=e,this.w=t,this.normal=e,this.w=t}clone(){return new cr(this.normal.clone(),this.w)}flip(){this.normal.negate(),this.w=-this.w}splitPolygon(e,t,i,r,s){let c=0;const h=[];for(let f=0;f<e.vertices.length;f++){const m=this.normal.dot(e.vertices[f].pos)-this.w,_=m<-cr.EPSILON?2:m>cr.EPSILON?1:0;c|=_,h.push(_)}switch(c){case 0:(this.normal.dot(e.plane.normal)>0?t:i).push(e);break;case 1:r.push(e);break;case 2:s.push(e);break;case 3:{const f=[],m=[];for(let _=0;_<e.vertices.length;_++){const d=(_+1)%e.vertices.length,p=h[_],g=h[d],x=e.vertices[_],v=e.vertices[d];if(p!=2&&f.push(x),p!=1&&m.push(p!=2?x.clone():x),(p|g)==3){const y=(this.w-this.normal.dot(x.pos))/this.normal.dot(new Kt().copy(v.pos).sub(x.pos)),w=x.interpolate(v,y);f.push(w),m.push(w.clone())}}f.length>=3&&r.push(new Ps(f,e.shared)),m.length>=3&&s.push(new Ps(m,e.shared));break}}}static fromPoints(e,t,i){const r=new Kt().copy(t).sub(e).cross(new Kt().copy(i).sub(e)).normalize();return new cr(r.clone(),r.dot(e))}}cr.EPSILON=1e-5;class Ps{constructor(e,t){this.vertices=e,this.shared=t,this.plane=cr.fromPoints(e[0].pos,e[1].pos,e[2].pos)}clone(){return new Ps(this.vertices.map(e=>e.clone()),this.shared)}flip(){this.vertices.reverse().map(e=>e.flip()),this.plane.flip()}}class yl{constructor(e,t,i,r){this.pos=new Kt().copy(e),this.normal=new Kt().copy(t),this.uv=new Kt().copy(i),this.uv.z=0,r&&(this.color=new Kt().copy(r))}clone(){return new yl(this.pos,this.normal,this.uv,this.color)}flip(){this.normal.negate()}interpolate(e,t){return new yl(this.pos.clone().lerp(e.pos,t),this.normal.clone().lerp(e.normal,t),this.uv.clone().lerp(e.uv,t),this.color&&e.color&&this.color.clone().lerp(e.color,t))}}class ht{constructor(){this.polygons=[]}static fromPolygons(e){const t=new ht;return t.polygons=e,t}static fromGeometry(e,t){let i=[];const r=e.attributes.position,s=e.attributes.normal,o=e.attributes.uv,a=e.attributes.color,l=e.groups;let u;if(e.index)u=e.index.array;else{u=new Array(r.array.length/r.itemSize|0);for(let h=0;h<u.length;h++)u[h]=h}const c=u.length/3|0;i=new Array(c);for(let h=0,f=0,m=u.length;h<m;h+=3,f++){const _=new Array(3);for(let d=0;d<3;d++){const p=u[h+d],g=p*3,x=p*2,v=r.array[g],y=r.array[g+1],w=r.array[g+2],T=s.array[g],A=s.array[g+1],S=s.array[g+2],b=o==null?void 0:o.array[x],L=o==null?void 0:o.array[x+1];_[d]=new yl(new Kt(v,y,w),new Kt(T,A,S),new Kt(b,L,0),a&&new Kt(a.array[x],a.array[x+1],a.array[x+2]))}if(t===void 0&&l&&l.length>0)for(const d of l)h>=d.start&&h<d.start+d.count&&(i[f]=new Ps(_,d.materialIndex));else i[f]=new Ps(_,t)}return ht.fromPolygons(i.filter(h=>!Number.isNaN(h.plane.normal.x)))}static toGeometry(e,t){let i=0;const r=e.polygons;for(const m of r)i+=m.vertices.length-2;const s=new Bn,o=new oc(i*3*3),a=new oc(i*3*3),l=new l2(i*2*3);let u;const c=[],h=[];for(const m of r){const _=m.vertices,d=_.length;m.shared!==void 0&&(c[m.shared]||(c[m.shared]=[])),d&&_[0].color!==void 0&&(u||(u=new oc(i*3*3)));for(let p=3;p<=d;p++)(m.shared===void 0?h:c[m.shared]).push(o.top/3,o.top/3+1,o.top/3+2),o.write(_[0].pos),o.write(_[p-2].pos),o.write(_[p-1].pos),a.write(_[0].normal),a.write(_[p-2].normal),a.write(_[p-1].normal),l&&(l.write(_[0].uv),l.write(_[p-2].uv),l.write(_[p-1].uv)),u&&(u.write(_[0].color),u.write(_[p-2].color),u.write(_[p-1].color))}s.setAttribute("position",new Zt(o.array,3)),s.setAttribute("normal",new Zt(a.array,3)),l&&s.setAttribute("uv",new Zt(l.array,2)),u&&s.setAttribute("color",new Zt(u.array,3));for(let m=0;m<c.length;m++)c[m]===void 0&&(c[m]=[]);if(c.length){let m=[],_=0;for(let d=0;d<c.length;d++)s.addGroup(_,c[d].length,d),_+=c[d].length,m=m.concat(c[d]);s.addGroup(_,h.length,c.length),m=m.concat(h),s.setIndex(m)}const f=new at().copy(t).invert();return s.applyMatrix4(f),s.computeBoundingSphere(),s.computeBoundingBox(),s}static fromMesh(e,t){const i=ht.fromGeometry(e.geometry,t),r=new R,s=new zt;s.getNormalMatrix(e.matrix);for(let o=0;o<i.polygons.length;o++){const a=i.polygons[o];for(let l=0;l<a.vertices.length;l++){const u=a.vertices[l];u.pos.copy(r.copy(u.pos.toVector3()).applyMatrix4(e.matrix)),u.normal.copy(r.copy(u.normal.toVector3()).applyMatrix3(s))}}return i}static toMesh(e,t,i){const r=ht.toGeometry(e,t),s=new En(r,i);return s.matrix.copy(t),s.matrix.decompose(s.position,s.quaternion,s.scale),s.rotation.setFromQuaternion(s.quaternion),s.updateMatrixWorld(),s.castShadow=s.receiveShadow=!0,s}static union(e,t){const i=ht.fromMesh(e),r=ht.fromMesh(t);return ht.toMesh(i.union(r),e.matrix,e.material)}static subtract(e,t){const i=ht.fromMesh(e),r=ht.fromMesh(t);return ht.toMesh(i.subtract(r),e.matrix,e.material)}static intersect(e,t){const i=ht.fromMesh(e),r=ht.fromMesh(t);return ht.toMesh(i.intersect(r),e.matrix,e.material)}clone(){const e=new ht;return e.polygons=this.polygons.map(t=>t.clone()).filter(t=>Number.isFinite(t.plane.w)),e}toPolygons(){return this.polygons}union(e){const t=new $n(this.clone().polygons),i=new $n(e.clone().polygons);return t.clipTo(i),i.clipTo(t),i.invert(),i.clipTo(t),i.invert(),t.build(i.allPolygons()),ht.fromPolygons(t.allPolygons())}subtract(e){const t=new $n(this.clone().polygons),i=new $n(e.clone().polygons);return t.invert(),t.clipTo(i),i.clipTo(t),i.invert(),i.clipTo(t),i.invert(),t.build(i.allPolygons()),t.invert(),ht.fromPolygons(t.allPolygons())}intersect(e){const t=new $n(this.clone().polygons),i=new $n(e.clone().polygons);return t.invert(),i.clipTo(t),i.invert(),t.clipTo(i),i.clipTo(t),t.build(i.allPolygons()),t.invert(),ht.fromPolygons(t.allPolygons())}inverse(){const e=this.clone();for(const t of e.polygons)t.flip();return e}toMesh(e,t){return ht.toMesh(this,e,t)}toGeometry(e){return ht.toGeometry(this,e)}}let vt;const u2=()=>{const n=Ee.useRef(null),[e,t]=Ee.useState(10),[i,r]=Ee.useState("Stencilia-A"),[s,o]=Ee.useState(0),[a,l]=Ee.useState(0),[u,c]=Ee.useState("SampleText"),[h,f]=Ee.useState(120),[m,_]=Ee.useState(50),[d,p]=Ee.useState(1.3);Ee.useEffect(()=>{if(n.current){let w=function(){Z.render(vt,K),requestAnimationFrame(w)},T=function(){A(),b()},A=function(){S();for(let G=vt.children.length-1;G>=0;G--)if(vt.children[G].type==="Mesh"){if(vt.children[G].name==="temp")continue;vt.remove(vt.children[G])}},S=function(){const G=new Mr(h,m,d),H=new om({color:7897771}),ie=new En(G,H);ie.position.set(0,d/2,0),ie.rotation.set(Math.PI/2,Math.PI,Math.PI),ie.name="temp",vt.add(ie),setTimeout(()=>{vt.remove(ie)},5)},b=function(){const G="fonts/"+i+".json";L.load(G,H=>{const ie=new s2(u,{height:100,size:e,font:H}),k=new Mr(h,m,d),Q=new om({color:7897771}),se=new En(k,Q);se.position.set(0,d/2,0);const F=new W3,ce=new En(ie,F);ce.geometry.center(),ce.position.x=s-0,ce.position.y=a-0,ce.position.z=-1,ce.updateMatrix(),se.updateMatrix();const he=ht.subtract(se,ce);he.rotation.set(Math.PI/2,Math.PI,Math.PI),vt.add(he)},void 0,H=>{console.error("Error loading font:",H)})};const L=new t2,W=n.current;vt=new u3,vt.background=new qe(13948116);const K=new un(45,W.width/W.height,.1,1e3);K.position.set(0,150,100);const U=new J3(16777215,.5),N=new K3(16777215,.5);N.position.set(0,300,0),vt.add(U),vt.add(N);const X=new Q3(200,30);vt.add(X);const Z=new pf({canvas:n.current,antialias:!0});Z.setSize(W.width,W.height);const ee=new o2(K,Z.domElement);ee.target.set(0,0,0),ee.maxPolarAngle=Math.PI/2,ee.update();const D=()=>{const G=n.current.parentElement.clientWidth,H=n.current.parentElement.clientHeight;K.aspect=G/H,K.updateProjectionMatrix(),Z.setSize(G,H),ee.update()};return window.addEventListener("resize",D),D(),w(),T(),()=>{window.removeEventListener("resize",D)}}},[e,i,s,a,u,h,m,d]);var g=new a2;window.exporter=g;function x(){vt.rotation.set(-Math.PI/2,Math.PI,Math.PI),vt.updateMatrixWorld()}function v(){vt.rotation.set(Math.PI,Math.PI,Math.PI),vt.updateMatrixWorld()}function y(){x();const w=g.parse(vt);v();const T=new Blob([w],{type:"text/plain"}),A=document.createElement("a");A.style.display="none",document.body.appendChild(A),A.href=URL.createObjectURL(T),A.download=u+".stl",A.click()}return V.jsxs("div",{id:"mainContainer",children:[V.jsxs("div",{id:"leftSide",children:[V.jsx("div",{id:"boxContainer",children:V.jsxs("div",{id:"marginContainer",children:[V.jsxs("div",{id:"outerTextInputContainer",children:[V.jsx("p",{className:"headerFont",children:"Text options"}),V.jsx("br",{}),V.jsxs("div",{id:"textInputAndFontContainer",children:[V.jsx("input",{type:"text",value:u,onChange:w=>c(w.target.value)}),V.jsxs("select",{id:"fontSelection",value:i,onChange:w=>r(w.target.value),children:[V.jsx("option",{value:"Stencilia-A",children:"Stencilia-A"}),V.jsx("option",{value:"Bulletproof",children:"Bulletproof"}),V.jsx("option",{value:"Gunplay",children:"Gunplay"}),V.jsx("option",{value:"USAAF",children:"USAAF"}),V.jsx("option",{value:"OldSchoolUnitedStencil",children:"OldSchoolUnitedStencil"}),V.jsx("option",{value:"OldSchoolUnitedStencilItallic",children:"OldSchoolUnitedStencilItallic"}),V.jsx("option",{value:"MarbellaArmy",children:"MarbellaArmy"}),V.jsx("option",{value:"Pixel-7",children:"Pixel-7"}),V.jsx("option",{value:"PunkIsDead",children:"PunkIsDead"}),V.jsx("option",{value:"Revamped",children:"Revamped"}),V.jsx("option",{value:"Lordcorps",children:"Lordcorps"}),V.jsx("option",{value:"BOMBORA",children:"BOMBORA"}),V.jsx("option",{value:"Stencilia-Bold",children:"Stencilia-Bold"})]}),V.jsxs("div",{id:"fontSizeContainer",children:[V.jsx("label",{className:"descFont",htmlFor:"fontSlider",children:"Font Size"}),V.jsx("input",{type:"range",id:"fontSlider",value:e,min:"6",max:"38",onChange:w=>t(w.target.value)})]})]})]}),V.jsxs("div",{id:"fontPositionContainer",children:[V.jsx("p",{className:"headerFont",children:"Text position"}),V.jsx("br",{}),V.jsx("input",{type:"range",id:"textPosX",value:s,min:"-50",max:"50",onChange:w=>o(w.target.value)}),V.jsx("label",{htmlFor:"textPosX",className:"descFont",children:"X Offset"}),V.jsx("br",{}),V.jsx("input",{type:"range",id:"textPosY",value:a,min:"-50",max:"50",onChange:w=>l(w.target.value)}),V.jsx("label",{htmlFor:"textPosY",className:"descFont",children:"Y Offset"}),V.jsx("br",{})]}),V.jsxs("div",{id:"backPlateSizeContainer",children:[V.jsx("p",{className:"headerFont",children:"Backplate Size"}),V.jsx("br",{}),V.jsx("input",{type:"range",id:"backPlateX",value:h,min:"20",max:"200",onChange:w=>f(w.target.value)}),V.jsx("label",{htmlFor:"backPlateX",className:"descFont",children:"Length"}),V.jsx("br",{}),V.jsx("input",{type:"range",id:"backPlateY",value:m,min:"10",max:"80",onChange:w=>_(w.target.value)}),V.jsx("label",{htmlFor:"backPlateY",className:"descFont",children:"Width"}),V.jsx("br",{}),V.jsx("input",{type:"range",id:"backPlateZ",value:d,min:"0.5",max:"5",step:"0.5",onChange:w=>p(w.target.value)}),V.jsx("label",{htmlFor:"backPlateZ",className:"descFont",children:"Height"}),V.jsx("br",{})]})]})}),V.jsx("button",{id:"exportButton",className:"button",onClick:()=>{y()},children:"Export as STL"}),V.jsx("br",{})]}),V.jsx("div",{id:"rightSide",children:V.jsx("canvas",{ref:n,className:"webgl"})})]})},c2=()=>{const[n,e]=Ee.useState(16),[t,i]=Ee.useState(!0),[r,s]=Ee.useState(!0),[o,a]=Ee.useState(!0),[l,u]=Ee.useState(!1),[c,h]=Ee.useState(""),f="ABCDEFGHJKLMNPQRTUVWXYZ",m="abcdefghijkmnopqrstuvwxyz",_="2346789",d="!@#$%&",p=()=>{let v="";t&&(v+=f),r&&(v+=m),o&&(v+=_),l&&(v+=d);let y="";for(let w=0;w<n;w++)y+=v.charAt(Math.floor(Math.random()*v.length));h(y)},g=()=>{navigator.clipboard.writeText(c)},x=()=>{const v=document.getElementById("settings");v.style.display=v.style.display==="none"?"block":"none"};return V.jsx("div",{className:"pageContainer",children:V.jsxs("div",{id:"contentGen",children:[V.jsxs("div",{className:"window",id:"menu",children:[V.jsx("h1",{id:"headerTextGen",children:"Password Generator"}),V.jsx("label",{children:"Password Length: "}),V.jsx("input",{className:"textBox",type:"text",id:"passLength",value:n,readOnly:!0}),V.jsx("input",{type:"range",id:"lengthslider",name:"lengthslider",min:"8",max:"32",value:n,onChange:v=>e(v.target.value)}),V.jsx("button",{className:"buttonGen",id:"generateButton",onClick:p,children:"Generate"}),V.jsx("br",{}),V.jsx("br",{}),V.jsx("p",{children:"Generated Password:"}),V.jsx("input",{className:"textBox",id:"output",type:"text",name:"result",value:c,readOnly:!0}),V.jsx("button",{className:"buttonGen",id:"copyButton",onClick:g,children:"Copy"}),V.jsx("br",{}),V.jsx("br",{}),V.jsx("button",{className:"material-symbols-outlined",id:"settingsButton",onClick:x,children:"settings"})]}),V.jsxs("div",{className:"window",id:"settings",style:{display:"none"},children:[V.jsx("h1",{children:"Advanced Settings"}),V.jsxs("div",{id:"checkBoxes",children:[V.jsxs("span",{className:"checkBox",id:"numbers",children:["0-9",V.jsx("input",{type:"checkbox",id:"numberBox",checked:o,onChange:()=>a(!o)})]}),V.jsxs("span",{className:"checkBox",id:"lowercase",children:["a-z",V.jsx("input",{type:"checkbox",id:"lowercaseBox",checked:r,onChange:()=>s(!r)})]}),V.jsxs("span",{className:"checkBox",id:"uppercase",children:["A-Z",V.jsx("input",{type:"checkbox",id:"upperCaseBox",checked:t,onChange:()=>i(!t)})]}),V.jsxs("span",{className:"checkBox",id:"symbols",children:["!@#$%&",V.jsx("input",{type:"checkbox",id:"symbolsBox",checked:l,onChange:()=>u(!l)})]})]})]})]})})};ac.createRoot(document.getElementById("root")).render(V.jsx(Em.StrictMode,{children:V.jsx(Ny,{children:V.jsxs(Ry,{children:[V.jsx(no,{path:"/",element:V.jsx(Xy,{})}),V.jsx(no,{path:"/voron",element:V.jsx(sS,{})}),V.jsx(no,{path:"/stencil",element:V.jsx(u2,{})}),V.jsx(no,{path:"/passwordgen",element:V.jsx(c2,{})})]})})}));
