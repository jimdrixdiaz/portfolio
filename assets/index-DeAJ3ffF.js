(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ff={exports:{}},Mo={};var tx;function Hv(){if(tx)return Mo;tx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var ex;function Gv(){return ex||(ex=1,Ff.exports=Hv()),Ff.exports}var ze=Gv(),If={exports:{}},ae={};var nx;function Vv(){if(nx)return ae;nx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(L,it,vt){this.props=L,this.context=it,this.refs=M,this.updater=vt||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=v.prototype;function U(L,it,vt){this.props=L,this.context=it,this.refs=M,this.updater=vt||A}var F=U.prototype=new B;F.constructor=U,C(F,v.prototype),F.isPureReactComponent=!0;var X=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(L,it,vt){var Et=vt.ref;return{$$typeof:o,type:L,key:it,ref:Et!==void 0?Et:null,props:vt}}function R(L,it){return D(L.type,it,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function Y(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return it[vt]})}var st=/\/+/g;function ut(L,it){return typeof L=="object"&&L!==null&&L.key!=null?Y(""+L.key):it.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,it,vt,Et,Nt){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var lt=!1;if(L===null)lt=!0;else switch(nt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(L.$$typeof){case o:case e:lt=!0;break;case _:return lt=L._init,P(lt(L._payload),it,vt,Et,Nt)}}if(lt)return Nt=Nt(L),lt=Et===""?"."+ut(L,0):Et,X(Nt)?(vt="",lt!=null&&(vt=lt.replace(st,"$&/")+"/"),P(Nt,it,vt,"",function(Xt){return Xt})):Nt!=null&&(H(Nt)&&(Nt=R(Nt,vt+(Nt.key==null||L&&L.key===Nt.key?"":(""+Nt.key).replace(st,"$&/")+"/")+lt)),it.push(Nt)),1;lt=0;var Ct=Et===""?".":Et+":";if(X(L))for(var It=0;It<L.length;It++)Et=L[It],nt=Ct+ut(Et,It),lt+=P(Et,it,vt,nt,Nt);else if(It=y(L),typeof It=="function")for(L=It.call(L),It=0;!(Et=L.next()).done;)Et=Et.value,nt=Ct+ut(Et,It++),lt+=P(Et,it,vt,nt,Nt);else if(nt==="object"){if(typeof L.then=="function")return P(ft(L),it,vt,Et,Nt);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return lt}function j(L,it,vt){if(L==null)return L;var Et=[],Nt=0;return P(L,Et,"","",function(nt){return it.call(vt,nt,Nt++)}),Et}function W(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var pt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},_t={map:j,forEach:function(L,it,vt){j(L,function(){it.apply(this,arguments)},vt)},count:function(L){var it=0;return j(L,function(){it++}),it},toArray:function(L){return j(L,function(it){return it})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ae.Activity=g,ae.Children=_t,ae.Component=v,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=U,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ae.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},ae.cache=function(L){return function(){return L.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(L,it,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Et=C({},L.props),Nt=L.key;if(it!=null)for(nt in it.key!==void 0&&(Nt=""+it.key),it)!K.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(Et[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)Et.children=vt;else if(1<nt){for(var lt=Array(nt),Ct=0;Ct<nt;Ct++)lt[Ct]=arguments[Ct+2];Et.children=lt}return D(L.type,Nt,Et)},ae.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ae.createElement=function(L,it,vt){var Et,Nt={},nt=null;if(it!=null)for(Et in it.key!==void 0&&(nt=""+it.key),it)K.call(it,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Nt[Et]=it[Et]);var lt=arguments.length-2;if(lt===1)Nt.children=vt;else if(1<lt){for(var Ct=Array(lt),It=0;It<lt;It++)Ct[It]=arguments[It+2];Nt.children=Ct}if(L&&L.defaultProps)for(Et in lt=L.defaultProps,lt)Nt[Et]===void 0&&(Nt[Et]=lt[Et]);return D(L,nt,Nt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(L){return{$$typeof:h,render:L}},ae.isValidElement=H,ae.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:W}},ae.memo=function(L,it){return{$$typeof:p,type:L,compare:it===void 0?null:it}},ae.startTransition=function(L){var it=O.T,vt={};O.T=vt;try{var Et=L(),Nt=O.S;Nt!==null&&Nt(vt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(N,pt)}catch(nt){pt(nt)}finally{it!==null&&vt.types!==null&&(it.types=vt.types),O.T=it}},ae.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ae.use=function(L){return O.H.use(L)},ae.useActionState=function(L,it,vt){return O.H.useActionState(L,it,vt)},ae.useCallback=function(L,it){return O.H.useCallback(L,it)},ae.useContext=function(L){return O.H.useContext(L)},ae.useDebugValue=function(){},ae.useDeferredValue=function(L,it){return O.H.useDeferredValue(L,it)},ae.useEffect=function(L,it){return O.H.useEffect(L,it)},ae.useEffectEvent=function(L){return O.H.useEffectEvent(L)},ae.useId=function(){return O.H.useId()},ae.useImperativeHandle=function(L,it,vt){return O.H.useImperativeHandle(L,it,vt)},ae.useInsertionEffect=function(L,it){return O.H.useInsertionEffect(L,it)},ae.useLayoutEffect=function(L,it){return O.H.useLayoutEffect(L,it)},ae.useMemo=function(L,it){return O.H.useMemo(L,it)},ae.useOptimistic=function(L,it){return O.H.useOptimistic(L,it)},ae.useReducer=function(L,it,vt){return O.H.useReducer(L,it,vt)},ae.useRef=function(L){return O.H.useRef(L)},ae.useState=function(L){return O.H.useState(L)},ae.useSyncExternalStore=function(L,it,vt){return O.H.useSyncExternalStore(L,it,vt)},ae.useTransition=function(){return O.H.useTransition()},ae.version="19.2.0",ae}var ix;function ch(){return ix||(ix=1,If.exports=Vv()),If.exports}var Gn=ch(),Hf={exports:{}},yo={},Gf={exports:{}},Vf={};var ax;function Xv(){return ax||(ax=1,(function(o){function e(P,j){var W=P.length;P.push(j);t:for(;0<W;){var pt=W-1>>>1,_t=P[pt];if(0<l(_t,j))P[pt]=j,P[W]=_t,W=pt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],W=P.pop();if(W!==j){P[0]=W;t:for(var pt=0,_t=P.length,L=_t>>>1;pt<L;){var it=2*(pt+1)-1,vt=P[it],Et=it+1,Nt=P[Et];if(0>l(vt,W))Et<_t&&0>l(Nt,vt)?(P[pt]=Nt,P[Et]=W,pt=Et):(P[pt]=vt,P[it]=W,pt=it);else if(Et<_t&&0>l(Nt,W))P[pt]=Nt,P[Et]=W,pt=Et;else break t}}return j}function l(P,j){var W=P.sortIndex-j.sortIndex;return W!==0?W:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,S=3,y=!1,A=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function X(P){if(C=!1,F(P),!A)if(i(m)!==null)A=!0,N||(N=!0,Y());else{var j=i(p);j!==null&&ft(X,j.startTime-P)}}var N=!1,O=-1,K=5,D=-1;function R(){return M?!0:!(o.unstable_now()-D<K)}function H(){if(M=!1,N){var P=o.unstable_now();D=P;var j=!0;try{t:{A=!1,C&&(C=!1,B(O),O=-1),y=!0;var W=S;try{e:{for(F(P),g=i(m);g!==null&&!(g.expirationTime>P&&R());){var pt=g.callback;if(typeof pt=="function"){g.callback=null,S=g.priorityLevel;var _t=pt(g.expirationTime<=P);if(P=o.unstable_now(),typeof _t=="function"){g.callback=_t,F(P),j=!0;break e}g===i(m)&&r(m),F(P)}else r(m);g=i(m)}if(g!==null)j=!0;else{var L=i(p);L!==null&&ft(X,L.startTime-P),j=!1}}break t}finally{g=null,S=W,y=!1}j=void 0}}finally{j?Y():N=!1}}}var Y;if(typeof U=="function")Y=function(){U(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ut=st.port2;st.port1.onmessage=H,Y=function(){ut.postMessage(null)}}else Y=function(){v(H,0)};function ft(P,j){O=v(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var W=S;S=j;try{return P()}finally{S=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=S;S=P;try{return j()}finally{S=W}},o.unstable_scheduleCallback=function(P,j,W){var pt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?pt+W:pt):W=pt,P){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=W+_t,P={id:_++,callback:j,priorityLevel:P,startTime:W,expirationTime:_t,sortIndex:-1},W>pt?(P.sortIndex=W,e(p,P),i(m)===null&&P===i(p)&&(C?(B(O),O=-1):C=!0,ft(X,W-pt))):(P.sortIndex=_t,e(m,P),A||y||(A=!0,N||(N=!0,Y()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=S;return function(){var W=S;S=j;try{return P.apply(this,arguments)}finally{S=W}}}})(Vf)),Vf}var rx;function kv(){return rx||(rx=1,Gf.exports=Xv()),Gf.exports}var Xf={exports:{}},Cn={};var sx;function qv(){if(sx)return Cn;sx=1;var o=ch();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Cn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Cn.version="19.2.0",Cn}var ox;function Wv(){if(ox)return Xf.exports;ox=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=qv(),Xf.exports}var lx;function Yv(){if(lx)return yo;lx=1;var o=kv(),e=ch(),i=Wv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case N:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case U:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var ft=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},pt=[],_t=-1;function L(t){return{current:t}}function it(t){0>_t||(t.current=pt[_t],pt[_t]=null,_t--)}function vt(t,n){_t++,pt[_t]=t.current,t.current=n}var Et=L(null),Nt=L(null),nt=L(null),lt=L(null);function Ct(t,n){switch(vt(nt,n),vt(Nt,t),vt(Et,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?bm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=bm(n),t=Em(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(Et),vt(Et,t)}function It(){it(Et),it(Nt),it(nt)}function Xt(t){t.memoizedState!==null&&vt(lt,t);var n=Et.current,a=Em(n,t.type);n!==a&&(vt(Nt,t),vt(Et,a))}function oe(t){Nt.current===t&&(it(Et),it(Nt)),lt.current===t&&(it(lt),go._currentValue=W)}var $e,fe;function Te(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+fe}var I=!1;function de(t,n){if(!t||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(rt){var et=rt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(rt){et=rt}t.call(xt.prototype)}}else{try{throw Error()}catch(rt){et=rt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var z=x.split(`
`),$=E.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===$.length)for(s=z.length-1,c=$.length-1;1<=s&&0<=c&&z[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==$[c]){var dt=`
`+z[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Te(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return Te(t.type);case 16:return Te("Lazy");case 13:return t.child!==n&&n!==null?Te("Suspense Fallback"):Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return de(t.type,!1);case 11:return de(t.type.render,!1);case 1:return de(t.type,!0);case 31:return Te("Activity");default:return""}}function Ne(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ht=Object.prototype.hasOwnProperty,Xe=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,ie=o.unstable_shouldYield,w=o.unstable_requestPaint,b=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ot=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Kt=o.log,kt=o.unstable_setDisableYieldValue,Mt=null,bt=null;function Wt(t){if(typeof Kt=="function"&&kt(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Mt,t)}catch{}}var Gt=Math.clz32?Math.clz32:G,Ot=Math.log,ee=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ot(t)/ee|0)|0}var Dt=256,At=262144,Rt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=yt(s):(x&=E,x!==0?c=yt(x):a||(a=E&~t,a!==0&&(c=yt(a))))):(E=s&~f,E!==0?c=yt(E):x!==0?c=yt(x):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function zt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Rn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xn(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Gt(a),xt=1<<dt;E[dt]=0,z[dt]=-1;var et=$[dt];if(et!==null)for($[dt]=null,dt=0;dt<et.length;dt++){var rt=et[dt];rt!==null&&(rt.lane&=-536870913)}a&=~xt}s!==0&&Ho(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Ho(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Gt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Cs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Gt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ds(t,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(t.suspendedLanes|n))!==0?0:a}function hi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ja(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ws(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Ym(t.type))}function Us(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var kn=Math.random().toString(36).slice(2),rn="__reactFiber$"+kn,fn="__reactProps$"+kn,Li="__reactContainer$"+kn,Ar="__reactEvents$"+kn,Uc="__reactListeners$"+kn,Lc="__reactHandles$"+kn,Go="__reactResources$"+kn,Ka="__reactMarker$"+kn;function Ls(t){delete t[rn],delete t[fn],delete t[Ar],delete t[Uc],delete t[Lc]}function ha(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Li]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Um(t);t!==null;){if(a=t[rn])return a;t=Um(t)}return n}t=a,a=t.parentNode}return null}function T(t){if(t=t[rn]||t[Li]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function k(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function at(t){var n=t[Go];return n||(n=t[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tt(t){t[Ka]=!0}var Z=new Set,Tt={};function wt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Tt[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},te={};function Zt(t){return Ht.call(te,t)?!0:Ht.call(Jt,t)?!1:Bt.test(t)?te[t]=!0:(Jt[t]=!0,!1)}function le(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function be(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Re(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ke(t){if(!t._valueTracker){var n=Le(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Se(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Le(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function We(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ni(t,n,a,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ve(n)):t.value!==""+ve(n)&&(t.value=""+ve(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?_n(t,x,ve(n)):a!=null?_n(t,x,ve(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ve(E):t.removeAttribute("name")}function Ye(t,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ke(t);return}a=a!=null?""+ve(a):"",n=n!=null?""+ve(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),ke(t)}function _n(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ve(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+ve(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ve(a):""}function yn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ve(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ke(t)}function bi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Mh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Sh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Sh(t,f,n[f])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(t){return Bg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var Oc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rr=null,Cr=null;function yh(t){var n=T(t);if(n&&(t=n.stateNode)){var a=t[fn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ni(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+We(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[fn]||null;if(!c)throw Error(r(90));Ni(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Se(s)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&dn(t,!!a.multiple,n,!1)}}}var zc=!1;function bh(t,n,a){if(zc)return t(n,a);zc=!0;try{var s=t(n);return s}finally{if(zc=!1,(Rr!==null||Cr!==null)&&(Dl(),Rr&&(n=Rr,t=Cr,Cr=Rr=null,yh(n),t)))for(n=0;n<t.length;n++)yh(t[n])}}function Ns(t,n){var a=t.stateNode;if(a===null)return null;var s=a[fn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(zi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Bc=!1}var ma=null,Fc=null,Xo=null;function Eh(){if(Xo)return Xo;var t,n=Fc,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Xo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Th(){return!1}function On(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Th,this.isPropagationStopped=Th,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=On(Qa),Ps=g({},Qa,{view:0,detail:0}),Fg=On(Ps),Ic,Hc,zs,Yo=g({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Ic=t.screenX-zs.screenX,Hc=t.screenY-zs.screenY):Hc=Ic=0,zs=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Ah=On(Yo),Ig=g({},Yo,{dataTransfer:0}),Hg=On(Ig),Gg=g({},Ps,{relatedTarget:0}),Gc=On(Gg),Vg=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=On(Vg),kg=g({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qg=On(kg),Wg=g({},Qa,{data:0}),Rh=On(Wg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=jg[t])?!!n[t]:!1}function Vc(){return Kg}var Qg=g({},Ps,{key:function(t){if(t.key){var n=Yg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jg=On(Qg),$g=g({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=On($g),t_=g({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),e_=On(t_),n_=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),i_=On(n_),a_=g({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r_=On(a_),s_=g({},Qa,{newState:0,oldState:0}),o_=On(s_),l_=[9,13,27,32],Xc=zi&&"CompositionEvent"in window,Bs=null;zi&&"documentMode"in document&&(Bs=document.documentMode);var c_=zi&&"TextEvent"in window&&!Bs,Dh=zi&&(!Xc||Bs&&8<Bs&&11>=Bs),wh=" ",Uh=!1;function Lh(t,n){switch(t){case"keyup":return l_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function u_(t,n){switch(t){case"compositionend":return Nh(n);case"keypress":return n.which!==32?null:(Uh=!0,wh);case"textInput":return t=n.data,t===wh&&Uh?null:t;default:return null}}function f_(t,n){if(Dr)return t==="compositionend"||!Xc&&Lh(t,n)?(t=Eh(),Xo=Fc=ma=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dh&&n.locale!=="ko"?null:n.data;default:return null}}var d_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!d_[t.type]:n==="textarea"}function Ph(t,n,a,s){Rr?Cr?Cr.push(s):Cr=[s]:Rr=s,n=zl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Fs=null,Is=null;function h_(t){gm(t,0)}function Zo(t){var n=k(t);if(Se(n))return t}function zh(t,n){if(t==="change")return n}var Bh=!1;if(zi){var kc;if(zi){var qc="oninput"in document;if(!qc){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),qc=typeof Fh.oninput=="function"}kc=qc}else kc=!1;Bh=kc&&(!document.documentMode||9<document.documentMode)}function Ih(){Fs&&(Fs.detachEvent("onpropertychange",Hh),Is=Fs=null)}function Hh(t){if(t.propertyName==="value"&&Zo(Is)){var n=[];Ph(n,Is,t,Pc(t)),bh(h_,n)}}function p_(t,n,a){t==="focusin"?(Ih(),Fs=n,Is=a,Fs.attachEvent("onpropertychange",Hh)):t==="focusout"&&Ih()}function m_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Is)}function x_(t,n){if(t==="click")return Zo(n)}function g_(t,n){if(t==="input"||t==="change")return Zo(n)}function __(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:__;function Hs(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ht.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,n){var a=Gh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gh(a)}}function Xh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function Wc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var v_=zi&&"documentMode"in document&&11>=document.documentMode,wr=null,Yc=null,Gs=null,Zc=!1;function qh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||wr==null||wr!==gn(s)||(s=wr,"selectionStart"in s&&Wc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gs&&Hs(Gs,s)||(Gs=s,s=zl(Yc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=wr)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ur={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},jc={},Wh={};zi&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function $a(t){if(jc[t])return jc[t];if(!Ur[t])return t;var n=Ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wh)return jc[t]=n[a];return t}var Yh=$a("animationend"),Zh=$a("animationiteration"),jh=$a("animationstart"),S_=$a("transitionrun"),M_=$a("transitionstart"),y_=$a("transitioncancel"),Kh=$a("transitionend"),Qh=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function pi(t,n){Qh.set(t,n),wt(n,[t])}var jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Lr=0,Qc=0;function Ko(){for(var t=Lr,n=Qc=Lr=0;n<t;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&Jh(a,c,f)}}function Qo(t,n,a,s){ii[Lr++]=t,ii[Lr++]=n,ii[Lr++]=a,ii[Lr++]=s,Qc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Jc(t,n,a,s){return Qo(t,n,a,s),Jo(t)}function tr(t,n){return Qo(t,null,null,n),Jo(t)}function Jh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Gt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(t){if(50<co)throw co=0,lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function b_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new b_(t,n,a,s)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $h(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $o(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")$c(t)&&(x=1);else if(typeof t=="string")x=Cv(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Wn(31,a,n,c),t.elementType=D,t.lanes=f,t;case C:return er(a.children,c,f,n);case M:x=8,c|=24;break;case v:return t=Wn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case X:return t=Wn(13,a,n,c),t.elementType=X,t.lanes=f,t;case N:return t=Wn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:x=10;break t;case B:x=9;break t;case F:x=11;break t;case O:x=14;break t;case K:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function er(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function tu(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function tp(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function eu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ep=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=ep.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ne(n)},ep.set(t,n),n)}return{value:t,source:n,stack:Ne(n)}}var Or=[],Pr=0,tl=null,Vs=0,ri=[],si=0,xa=null,Ei=1,Ti="";function Fi(t,n){Or[Pr++]=Vs,Or[Pr++]=tl,tl=t,Vs=n}function np(t,n,a){ri[si++]=Ei,ri[si++]=Ti,ri[si++]=xa,xa=t;var s=Ei;t=Ti;var c=32-Gt(s)-1;s&=~(1<<c),a+=1;var f=32-Gt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ei=1<<32-Gt(n)+c|a<<c|s,Ti=f+t}else Ei=1<<f|a<<c|s,Ti=t}function nu(t){t.return!==null&&(Fi(t,1),np(t,1,0))}function iu(t){for(;t===tl;)tl=Or[--Pr],Or[Pr]=null,Vs=Or[--Pr],Or[Pr]=null;for(;t===xa;)xa=ri[--si],ri[si]=null,Ti=ri[--si],ri[si]=null,Ei=ri[--si],ri[si]=null}function ip(t,n){ri[si++]=Ei,ri[si++]=Ti,ri[si++]=xa,Ei=n.id,Ti=n.overflow,xa=t}var bn=null,Ze=null,Me=!1,ga=null,oi=!1,au=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ai(n,t)),au}function ap(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[fn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)xe(fo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ye(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Mm(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||_a(t,!0)}function rp(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:bn=bn.return}}function zr(t){if(t!==bn)return!1;if(!Me)return rp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bf(t.type,t.memoizedProps)),a=!a),a&&Ze&&_a(t),rp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=wm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=wm(t)}else n===27?(n=Ze,La(t.type)?(t=Cf,Cf=null,Ze=t):Ze=n):Ze=bn?ci(t.stateNode.nextSibling):null;return!0}function nr(){Ze=bn=null,Me=!1}function ru(){var t=ga;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),ga=null),t}function Xs(t){ga===null?ga=[t]:ga.push(t)}var su=L(null),ir=null,Ii=null;function va(t,n,a){vt(su,n._currentValue),n._currentValue=a}function Hi(t){t._currentValue=su.current,it(su)}function ou(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function lu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ou(f.return,a,t),s||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ou(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Br(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;qn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===lt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(go):t=[go])}c=c.return}t!==null&&lu(n,t,a,s),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return sp(ir,t)}function nl(t,n){return ir===null&&ar(t),sp(t,n)}function sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var E_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},T_=o.unstable_scheduleCallback,A_=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new E_,data:new Map,refCount:0}}function ks(t){t.refCount--,t.refCount===0&&T_(A_,function(){t.controller.abort()})}var qs=null,uu=0,Fr=0,Ir=null;function R_(t,n){if(qs===null){var a=qs=[];uu=0,Fr=pf(),Ir={status:"pending",value:void 0,then:function(s){a.push(s)}}}return uu++,n.then(op,op),n}function op(){if(--uu===0&&qs!==null){Ir!==null&&(Ir.status="fulfilled");var t=qs;qs=null,Fr=0,Ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function C_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var lp=P.S;P.S=function(t,n){q0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&R_(t,n),lp!==null&&lp(t,n)};var rr=L(null);function fu(){var t=rr.current;return t!==null?t:qe.pooledCache}function il(t,n){n===null?vt(rr,rr.current):vt(rr,n.pool)}function cp(){var t=fu();return t===null?null:{parent:sn._currentValue,pool:t}}var Hr=Error(r(460)),du=Error(r(474)),al=Error(r(542)),rl={then:function(){}};function up(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t}throw or=n,Hr}}function sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,Hr):a}}var or=null;function dp(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function hp(t){if(t===Hr||t===al)throw Error(r(483))}var Gr=null,Ws=0;function sl(t){var n=Ws;return Ws+=1,Gr===null&&(Gr=[]),fp(Gr,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ol(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function pp(t){function n(q,V){if(t){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=Bi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function x(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,V,Q,ht){return V===null||V.tag!==6?(V=tu(Q,q.mode,ht),V.return=q,V):(V=c(V,Q),V.return=q,V)}function z(q,V,Q,ht){var jt=Q.type;return jt===C?dt(q,V,Q.props.children,ht,Q.key):V!==null&&(V.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===K&&sr(jt)===V.type)?(V=c(V,Q.props),Ys(V,Q),V.return=q,V):(V=$o(Q.type,Q.key,Q.props,null,q.mode,ht),Ys(V,Q),V.return=q,V)}function $(q,V,Q,ht){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=eu(Q,q.mode,ht),V.return=q,V):(V=c(V,Q.children||[]),V.return=q,V)}function dt(q,V,Q,ht,jt){return V===null||V.tag!==7?(V=er(Q,q.mode,ht,jt),V.return=q,V):(V=c(V,Q),V.return=q,V)}function xt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=tu(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Q=$o(V.type,V.key,V.props,null,q.mode,Q),Ys(Q,V),Q.return=q,Q;case A:return V=eu(V,q.mode,Q),V.return=q,V;case K:return V=sr(V),xt(q,V,Q)}if(ft(V)||Y(V))return V=er(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return xt(q,sl(V),Q);if(V.$$typeof===U)return xt(q,nl(q,V),Q);ol(q,V)}return null}function et(q,V,Q,ht){var jt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return jt!==null?null:E(q,V,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===jt?z(q,V,Q,ht):null;case A:return Q.key===jt?$(q,V,Q,ht):null;case K:return Q=sr(Q),et(q,V,Q,ht)}if(ft(Q)||Y(Q))return jt!==null?null:dt(q,V,Q,ht,null);if(typeof Q.then=="function")return et(q,V,sl(Q),ht);if(Q.$$typeof===U)return et(q,V,nl(q,Q),ht);ol(q,Q)}return null}function rt(q,V,Q,ht,jt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(Q)||null,E(V,q,""+ht,jt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case y:return q=q.get(ht.key===null?Q:ht.key)||null,z(V,q,ht,jt);case A:return q=q.get(ht.key===null?Q:ht.key)||null,$(V,q,ht,jt);case K:return ht=sr(ht),rt(q,V,Q,ht,jt)}if(ft(ht)||Y(ht))return q=q.get(Q)||null,dt(V,q,ht,jt,null);if(typeof ht.then=="function")return rt(q,V,Q,sl(ht),jt);if(ht.$$typeof===U)return rt(q,V,Q,nl(V,ht),jt);ol(V,ht)}return null}function Ft(q,V,Q,ht){for(var jt=null,Ce=null,Vt=V,ce=V=0,_e=null;Vt!==null&&ce<Q.length;ce++){Vt.index>ce?(_e=Vt,Vt=null):_e=Vt.sibling;var De=et(q,Vt,Q[ce],ht);if(De===null){Vt===null&&(Vt=_e);break}t&&Vt&&De.alternate===null&&n(q,Vt),V=f(De,V,ce),Ce===null?jt=De:Ce.sibling=De,Ce=De,Vt=_e}if(ce===Q.length)return a(q,Vt),Me&&Fi(q,ce),jt;if(Vt===null){for(;ce<Q.length;ce++)Vt=xt(q,Q[ce],ht),Vt!==null&&(V=f(Vt,V,ce),Ce===null?jt=Vt:Ce.sibling=Vt,Ce=Vt);return Me&&Fi(q,ce),jt}for(Vt=s(Vt);ce<Q.length;ce++)_e=rt(Vt,q,ce,Q[ce],ht),_e!==null&&(t&&_e.alternate!==null&&Vt.delete(_e.key===null?ce:_e.key),V=f(_e,V,ce),Ce===null?jt=_e:Ce.sibling=_e,Ce=_e);return t&&Vt.forEach(function(Ba){return n(q,Ba)}),Me&&Fi(q,ce),jt}function $t(q,V,Q,ht){if(Q==null)throw Error(r(151));for(var jt=null,Ce=null,Vt=V,ce=V=0,_e=null,De=Q.next();Vt!==null&&!De.done;ce++,De=Q.next()){Vt.index>ce?(_e=Vt,Vt=null):_e=Vt.sibling;var Ba=et(q,Vt,De.value,ht);if(Ba===null){Vt===null&&(Vt=_e);break}t&&Vt&&Ba.alternate===null&&n(q,Vt),V=f(Ba,V,ce),Ce===null?jt=Ba:Ce.sibling=Ba,Ce=Ba,Vt=_e}if(De.done)return a(q,Vt),Me&&Fi(q,ce),jt;if(Vt===null){for(;!De.done;ce++,De=Q.next())De=xt(q,De.value,ht),De!==null&&(V=f(De,V,ce),Ce===null?jt=De:Ce.sibling=De,Ce=De);return Me&&Fi(q,ce),jt}for(Vt=s(Vt);!De.done;ce++,De=Q.next())De=rt(Vt,q,ce,De.value,ht),De!==null&&(t&&De.alternate!==null&&Vt.delete(De.key===null?ce:De.key),V=f(De,V,ce),Ce===null?jt=De:Ce.sibling=De,Ce=De);return t&&Vt.forEach(function(Iv){return n(q,Iv)}),Me&&Fi(q,ce),jt}function He(q,V,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var jt=Q.key;V!==null;){if(V.key===jt){if(jt=Q.type,jt===C){if(V.tag===7){a(q,V.sibling),ht=c(V,Q.props.children),ht.return=q,q=ht;break t}}else if(V.elementType===jt||typeof jt=="object"&&jt!==null&&jt.$$typeof===K&&sr(jt)===V.type){a(q,V.sibling),ht=c(V,Q.props),Ys(ht,Q),ht.return=q,q=ht;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===C?(ht=er(Q.props.children,q.mode,ht,Q.key),ht.return=q,q=ht):(ht=$o(Q.type,Q.key,Q.props,null,q.mode,ht),Ys(ht,Q),ht.return=q,q=ht)}return x(q);case A:t:{for(jt=Q.key;V!==null;){if(V.key===jt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),ht=c(V,Q.children||[]),ht.return=q,q=ht;break t}else{a(q,V);break}else n(q,V);V=V.sibling}ht=eu(Q,q.mode,ht),ht.return=q,q=ht}return x(q);case K:return Q=sr(Q),He(q,V,Q,ht)}if(ft(Q))return Ft(q,V,Q,ht);if(Y(Q)){if(jt=Y(Q),typeof jt!="function")throw Error(r(150));return Q=jt.call(Q),$t(q,V,Q,ht)}if(typeof Q.then=="function")return He(q,V,sl(Q),ht);if(Q.$$typeof===U)return He(q,V,nl(q,Q),ht);ol(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),ht=c(V,Q),ht.return=q,q=ht):(a(q,V),ht=tu(Q,q.mode,ht),ht.return=q,q=ht),x(q)):a(q,V)}return function(q,V,Q,ht){try{Ws=0;var jt=He(q,V,Q,ht);return Gr=null,jt}catch(Vt){if(Vt===Hr||Vt===al)throw Vt;var Ce=Wn(29,Vt,null,q.mode);return Ce.lanes=ht,Ce.return=q,Ce}finally{}}}var lr=pp(!0),mp=pp(!1),Sa=!1;function hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Jo(t),Jh(t,null,a),n}return Qo(t,s,n,a),Jo(t)}function Zs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Cs(t,a)}}function mu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xu=!1;function js(){if(xu){var t=Ir;if(t!==null)throw t}}function Ks(t,n,a,s){xu=!1;var c=t.updateQueue;Sa=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,$=z.next;z.next=null,x===null?f=$:x.next=$,x=z;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,E=dt.lastBaseUpdate,E!==x&&(E===null?dt.firstBaseUpdate=$:E.next=$,dt.lastBaseUpdate=z))}if(f!==null){var xt=c.baseState;x=0,dt=$=z=null,E=f;do{var et=E.lane&-536870913,rt=et!==E.lane;if(rt?(ge&et)===et:(s&et)===et){et!==0&&et===Fr&&(xu=!0),dt!==null&&(dt=dt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,$t=E;et=n;var He=a;switch($t.tag){case 1:if(Ft=$t.payload,typeof Ft=="function"){xt=Ft.call(He,xt,et);break t}xt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=$t.payload,et=typeof Ft=="function"?Ft.call(He,xt,et):Ft,et==null)break t;xt=g({},xt,et);break t;case 2:Sa=!0}}et=E.callback,et!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},dt===null?($=dt=rt,z=xt):dt=dt.next=rt,x|=et;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);dt===null&&(z=xt),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=dt,f===null&&(c.shared.lanes=0),Ra|=x,t.lanes=x,t.memoizedState=xt}}function xp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xp(a[t],n)}var Vr=L(null),ll=L(0);function _p(t,n){t=ji,vt(ll,t),vt(Vr,n),ji=t|n.baseLanes}function gu(){vt(ll,ji),vt(Vr,Vr.current)}function _u(){ji=ll.current,it(Vr),it(ll)}var Yn=L(null),li=null;function ba(t){var n=t.alternate;vt(tn,tn.current&1),vt(Yn,t),li===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(li=t)}function vu(t){vt(tn,tn.current),vt(Yn,t),li===null&&(li=t)}function vp(t){t.tag===22?(vt(tn,tn.current),vt(Yn,t),li===null&&(li=t)):Ea()}function Ea(){vt(tn,tn.current),vt(Yn,Yn.current)}function Zn(t){it(Yn),li===t&&(li=null),it(tn)}var tn=L(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Af(a)||Rf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,re=null,Fe=null,on=null,ul=!1,Xr=!1,cr=!1,fl=0,Qs=0,kr=null,D_=0;function Qe(){throw Error(r(321))}function Su(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Mu(t,n,a,s,c,f){return Gi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?n0:zu,cr=!1,f=a(s,c),cr=!1,Xr&&(f=Mp(n,a,s,c)),Sp(t),f}function Sp(t){P.H=to;var n=Fe!==null&&Fe.next!==null;if(Gi=0,on=Fe=re=null,ul=!1,Qs=0,kr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&el(t)&&(ln=!0))}function Mp(t,n,a,s){re=t;var c=0;do{if(Xr&&(kr=null),Qs=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,on=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=i0,f=n(a,s)}while(Xr);return f}function w_(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Js(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(re.flags|=1024),n}function yu(){var t=fl!==0;return fl=0,t}function bu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Eu(t){if(ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ul=!1}Gi=0,on=Fe=re=null,Xr=!1,Qs=fl=0,kr=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?re.memoizedState=on=t:on=on.next=t,on}function en(){if(Fe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=on===null?re.memoizedState:on.next;if(n!==null)on=n,Fe=t;else{if(t===null)throw re.alternate===null?Error(r(467)):Error(r(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},on===null?re.memoizedState=on=t:on=on.next=t}return on}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Js(t){var n=Qs;return Qs+=1,kr===null&&(kr=[]),t=fp(kr,t,n),n=re,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?n0:zu),t}function hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Js(t);if(t.$$typeof===U)return En(t)}throw Error(r(438,String(t)))}function Tu(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function pl(t){var n=en();return Au(n,Fe,t)}function Au(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,z=null,$=n,dt=!1;do{var xt=$.lane&-536870913;if(xt!==$.lane?(ge&xt)===xt:(Gi&xt)===xt){var et=$.revertLane;if(et===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xt===Fr&&(dt=!0);else if((Gi&et)===et){$=$.next,et===Fr&&(dt=!0);continue}else xt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=xt,x=f):z=z.next=xt,re.lanes|=et,Ra|=et;xt=$.action,cr&&a(f,xt),f=$.hasEagerState?$.eagerState:a(f,xt)}else et={lane:xt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(E=z=et,x=f):z=z.next=et,re.lanes|=xt,Ra|=xt;$=$.next}while($!==null&&$!==n);if(z===null?x=f:z.next=E,!qn(f,t.memoizedState)&&(ln=!0,dt&&(a=Ir,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ru(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);qn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function yp(t,n,a){var s=re,c=en(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!qn((Fe||c).memoizedState,a);if(x&&(c.memoizedState=a,ln=!0),c=c.queue,wu(Tp.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Ep.bind(null,s,c,a,n),null),qe===null)throw Error(r(349));f||(Gi&127)!==0||bp(s,n,a)}return a}function bp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=dl(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ep(t,n,a,s){n.value=a,n.getSnapshot=s,Ap(n)&&Rp(t)}function Tp(t,n,a){return a(function(){Ap(n)&&Rp(t)})}function Ap(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Rp(t){var n=tr(t,2);n!==null&&In(n,t,2)}function Cu(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),cr){Wt(!0);try{a()}finally{Wt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Cp(t,n,a,s){return t.baseState=a,Au(t,Fe,typeof s=="function"?s:Vi)}function U_(t,n,a,s,c){if(gl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var E=a(c,s),z=P.S;z!==null&&z(x,E),wp(t,n,E)}catch($){Du(t,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(c,s),wp(t,n,f)}catch($){Du(t,n,$)}}function wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Up(t,n,s)},function(s){return Du(t,n,s)}):Up(t,n,a)}function Up(t,n,a){n.status="fulfilled",n.value=a,Lp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Dp(t,a)))}function Du(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Lp(n),n=n.next;while(n!==s)}t.action=null}function Lp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Np(t,n){return n}function Op(t,n){if(Me){var a=qe.formState;if(a!==null){t:{var s=re;if(Me){if(Ze){e:{for(var c=Ze,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=ci(c.nextSibling),s=c.data==="F!";break t}}_a(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=s,a=$p.bind(null,re,s),s.dispatch=a,s=Cu(!1),f=Pu.bind(null,re,!1,s.queue),s=Un(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=U_.bind(null,re,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Pp(t){var n=en();return zp(n,Fe,t)}function zp(t,n,a){if(n=Au(t,n,Np)[0],t=pl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Js(n)}catch(x){throw x===Hr?al:x}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,qr(9,{destroy:void 0},L_.bind(null,c,a),null)),[s,f,t]}function L_(t,n){t.action=n}function Bp(t){var n=en(),a=Fe;if(a!==null)return zp(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function qr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=re.updateQueue,n===null&&(n=dl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Fp(){return en().memoizedState}function ml(t,n,a,s){var c=Un();re.flags|=t,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function xl(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Fe!==null&&s!==null&&Su(s,Fe.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(re.flags|=t,c.memoizedState=qr(1|n,f,a,s))}function Ip(t,n){ml(8390656,8,t,n)}function wu(t,n){xl(2048,8,t,n)}function N_(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=dl(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hp(t){var n=en().memoizedState;return N_({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Gp(t,n){return xl(4,2,t,n)}function Vp(t,n){return xl(4,4,t,n)}function Xp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function kp(t,n,a){a=a!=null?a.concat([t]):null,xl(4,4,Xp.bind(null,n,t),a)}function Uu(){}function qp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Su(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Wp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Su(n,s[1]))return s[0];if(s=t(),cr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s}function Lu(t,n,a){return a===void 0||(Gi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Y0(),re.lanes|=t,Ra|=t,a)}function Yp(t,n,a,s){return qn(a,n)?a:Vr.current!==null?(t=Lu(t,a,s),qn(t,n)||(ln=!0),t):(Gi&42)===0||(Gi&1073741824)!==0&&(ge&261930)===0?(ln=!0,t.memoizedState=a):(t=Y0(),re.lanes|=t,Ra|=t,n)}function Zp(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var x=P.T,E={};P.T=E,Pu(t,!1,n,a);try{var z=c(),$=P.S;if($!==null&&$(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=C_(z,s);$s(t,n,dt,Qn(t))}else $s(t,n,s,Qn(t))}catch(xt){$s(t,n,{then:function(){},status:"rejected",reason:xt},Qn())}finally{j.p=f,x!==null&&E.types!==null&&(x.types=E.types),P.T=x}}function O_(){}function Nu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=jp(t).queue;Zp(t,c,n,W,a===null?O_:function(){return Kp(t),a(s)})}function jp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kp(t){var n=jp(t);n.next===null&&(n=t.alternate.memoizedState),$s(t,n.next.queue,{},Qn())}function Ou(){return En(go)}function Qp(){return en().memoizedState}function Jp(){return en().memoizedState}function P_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ma(a);var s=ya(n,t,a);s!==null&&(In(s,n,a),Zs(s,n,a)),n={cache:cu()},t.payload=n;return}n=n.return}}function z_(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(t)?t0(n,a):(a=Jc(t,n,a,s),a!==null&&(In(a,t,s),e0(a,n,s)))}function $p(t,n,a){var s=Qn();$s(t,n,a,s)}function $s(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(t))t0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,qn(E,x))return Qo(t,n,c,0),qe===null&&Ko(),!1}catch{}finally{}if(a=Jc(t,n,c,s),a!==null)return In(a,t,s),e0(a,n,s),!0}return!1}function Pu(t,n,a,s){if(s={lane:2,revertLane:pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},gl(t)){if(n)throw Error(r(479))}else n=Jc(t,a,s,2),n!==null&&In(n,t,2)}function gl(t){var n=t.alternate;return t===re||n!==null&&n===re}function t0(t,n){Xr=ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function e0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Cs(t,a)}}var to={readContext:En,use:hl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};to.useEffectEvent=Qe;var n0={readContext:En,use:hl,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:Ip,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ml(4194308,4,Xp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ml(4194308,4,t,n)},useInsertionEffect:function(t,n){ml(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var s=t();if(cr){Wt(!0);try{t()}finally{Wt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Un();if(a!==void 0){var c=a(n);if(cr){Wt(!0);try{a(n)}finally{Wt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=z_.bind(null,re,t),[s.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=Cu(t);var n=t.queue,a=$p.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(t,n){var a=Un();return Lu(a,t,n)},useTransition:function(){var t=Cu(!1);return t=Zp.bind(null,re,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=re,c=Un();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(ge&127)!==0||bp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ip(Tp.bind(null,s,f,t),[t]),s.flags|=2048,qr(9,{destroy:void 0},Ep.bind(null,s,f,a,n),null),a},useId:function(){var t=Un(),n=qe.identifierPrefix;if(Me){var a=Ti,s=Ei;a=(s&~(1<<32-Gt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=D_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Op,useActionState:Op,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tu,useCacheRefresh:function(){return Un().memoizedState=P_.bind(null,re)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zu={readContext:En,use:hl,useCallback:qp,useContext:En,useEffect:wu,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:pl,useRef:Fp,useState:function(){return pl(Vi)},useDebugValue:Uu,useDeferredValue:function(t,n){var a=en();return Yp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=pl(Vi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Js(t),n]},useSyncExternalStore:yp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Pp,useActionState:Pp,useOptimistic:function(t,n){var a=en();return Cp(a,Fe,t,n)},useMemoCache:Tu,useCacheRefresh:Jp};zu.useEffectEvent=Hp;var i0={readContext:En,use:hl,useCallback:qp,useContext:En,useEffect:wu,useImperativeHandle:kp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Wp,useReducer:Ru,useRef:Fp,useState:function(){return Ru(Vi)},useDebugValue:Uu,useDeferredValue:function(t,n){var a=en();return Fe===null?Lu(a,t,n):Yp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Ru(Vi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:Js(t),n]},useSyncExternalStore:yp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=en();return Fe!==null?Cp(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Jp};i0.useEffectEvent=Hp;function Bu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Ma(s);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(In(n,t,s),Zs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=Ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(In(n,t,s),Zs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=Ma(a);s.tag=2,n!=null&&(s.callback=n),n=ya(t,s,a),n!==null&&(In(n,t,a),Zs(n,t,a))}};function a0(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Hs(a,s)||!Hs(c,f):!0}function r0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Fu.enqueueReplaceState(n,n.state,null)}function ur(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function s0(t){jo(t)}function o0(t){console.error(t)}function l0(t){jo(t)}function _l(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function c0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(t,n)},a}function u0(t){return t=Ma(t),t.tag=3,t}function f0(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){c0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){c0(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function B_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Br(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?wl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ff(t,s,c)),!1;case 22:return a.flags|=65536,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ff(t,s,c)),!1}throw Error(r(435,a.tag))}return ff(t,s,c),wl(),!1}if(Me)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==au&&(t=Error(r(422),{cause:s}),Xs(ai(t,a)))):(s!==au&&(n=Error(r(423),{cause:s}),Xs(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ai(s,a),c=Iu(t.stateNode,s,c),mu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),lo===null?lo=[f]:lo.push(f),Je!==4&&(Je=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Iu(a.stateNode,s,t),mu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=u0(c),f0(c,t,a,s),mu(a,c),!1}a=a.return}while(a!==null);return!1}var Hu=Error(r(461)),ln=!1;function Tn(t,n,a,s){n.child=t===null?mp(n,null,a,s):lr(n,t.child,a,s)}function d0(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return ar(n),s=Mu(t,n,a,x,f,c),E=yu(),t!==null&&!ln?(bu(t,n,c),Xi(t,n,c)):(Me&&E&&nu(n),n.flags|=1,Tn(t,n,s,c),n.child)}function h0(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!$c(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,p0(t,n,f,s,c)):(t=$o(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hs,a(x,s)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Bi(f,s),t.ref=n.ref,t.return=n,n.child=t}function p0(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Hs(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,Zu(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Gu(t,n,a,s,c)}function m0(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return x0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,f!==null?f.cachePool:null),f!==null?_p(n,f):gu(),vp(n);else return s=n.lanes=536870912,x0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(il(n,f.cachePool),_p(n,f),Ea(),n.memoizedState=null):(t!==null&&il(n,null),gu(),Ea());return Tn(t,n,c,a),n.child}function eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function x0(t,n,a,s,c){var f=fu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&il(n,null),gu(),vp(n),t!==null&&Br(t,n,s,!0),n.childLanes=c,null}function vl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function g0(t,n,a){return lr(n,t.child,null,a),t=vl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function F_(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=vl(n,s),n.lanes=536870912,eo(null,t);if(vu(n),(t=Ze)?(t=Dm(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return vl(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(vu(n),c)if(n.flags&256)n.flags&=-257,n=g0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Br(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=qe,s!==null&&(x=Ds(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,tr(t,x),In(s,t,x),Hu;wl(),n=g0(t,n,a)}else t=f.treeContext,Ze=ci(x.nextSibling),bn=n,Me=!0,ga=null,oi=!1,t!==null&&ip(n,t),n=vl(n,s),n.flags|=4096;return n}return t=Bi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gu(t,n,a,s,c){return ar(n),a=Mu(t,n,a,s,void 0,c),s=yu(),t!==null&&!ln?(bu(t,n,c),Xi(t,n,c)):(Me&&s&&nu(n),n.flags|=1,Tn(t,n,a,c),n.child)}function _0(t,n,a,s,c,f){return ar(n),n.updateQueue=null,a=Mp(n,s,a,c),Sp(t),s=yu(),t!==null&&!ln?(bu(t,n,f),Xi(t,n,f)):(Me&&s&&nu(n),n.flags|=1,Tn(t,n,a,f),n.child)}function v0(t,n,a,s,c){if(ar(n),n.stateNode===null){var f=Nr,x=a.contextType;typeof x=="object"&&x!==null&&(f=En(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},hu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?En(x):Nr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Bu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Ks(n,s,f,c),js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=ur(a,E);f.props=z;var $=f.context,dt=a.contextType;x=Nr,typeof dt=="object"&&dt!==null&&(x=En(dt));var xt=a.getDerivedStateFromProps;dt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==x)&&r0(n,f,s,x),Sa=!1;var et=n.memoizedState;f.state=et,Ks(n,s,f,c),js(),$=n.memoizedState,E||et!==$||Sa?(typeof xt=="function"&&(Bu(n,a,xt,s),$=n.memoizedState),(z=Sa||a0(n,a,z,s,et,$,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=x,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,pu(t,n),x=n.memoizedProps,dt=ur(a,x),f.props=dt,xt=n.pendingProps,et=f.context,$=a.contextType,z=Nr,typeof $=="object"&&$!==null&&(z=En($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xt||et!==z)&&r0(n,f,s,z),Sa=!1,et=n.memoizedState,f.state=et,Ks(n,s,f,c),js();var rt=n.memoizedState;x!==xt||et!==rt||Sa||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof E=="function"&&(Bu(n,a,E,s),rt=n.memoizedState),(dt=Sa||a0(n,a,dt,s,et,rt,z)||t!==null&&t.dependencies!==null&&el(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=z,s=dt):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Sl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=lr(n,t.child,null,c),n.child=lr(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function S0(t,n,a,s){return nr(),n.flags|=256,Tn(t,n,a,s),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(t){return{baseLanes:t,cachePool:cp()}}function ku(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function M0(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?ba(n):Ea(),(t=Ze)?(t=Dm(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,bn=n,Ze=null)):t=null,t===null)throw _a(n);return Rf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ea(),c=n.mode,E=Ml({mode:"hidden",children:E},c),s=er(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Xu(a),s.childLanes=ku(t,x,a),n.memoizedState=Vu,eo(null,s)):(ba(n),qu(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=Wu(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),E=s.fallback,c=n.mode,s=Ml({mode:"visible",children:s.children},c),E=er(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,lr(n,t.child,null,a),s=n.child,s.memoizedState=Xu(a),s.childLanes=ku(t,x,a),n.memoizedState=Vu,n=eo(null,s));else if(ba(n),Rf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var $=x.dgst;x=$,s=Error(r(419)),s.stack="",s.digest=x,Xs({value:s,source:null,stack:null}),n=Wu(t,n,a)}else if(ln||Br(t,n,a,!1),x=(a&t.childLanes)!==0,ln||x){if(x=qe,x!==null&&(s=Ds(x,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,tr(t,s),In(x,t,s),Hu;Af(E)||wl(),n=Wu(t,n,a)}else Af(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ze=ci(E.nextSibling),bn=n,Me=!0,ga=null,oi=!1,t!==null&&ip(n,t),n=qu(n,s.children),n.flags|=4096);return n}return c?(Ea(),E=s.fallback,c=n.mode,z=t.child,$=z.sibling,s=Bi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,$!==null?E=Bi($,E):(E=er(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,eo(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Xu(a):(c=E.cachePool,c!==null?(z=sn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=cp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=ku(t,x,a),n.memoizedState=Vu,eo(t.child,s)):(ba(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function qu(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function Wu(t,n,a){return lr(n,t.child,null,a),t=qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function y0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ou(t.return,n,a)}function Yu(t,n,a,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function b0(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=tn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,vt(tn,x),Tn(t,n,s,a),s=Me?Vs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,a,n);else if(t.tag===19)y0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&cl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Yu(n,!0,a,null,f,s);break;case"together":Yu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Br(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function I_(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),va(n,sn,t.memoizedState.cache),nr();break;case 27:case 5:Xt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?M0(t,n,a):(ba(n),t=Xi(t,n,a),t!==null?t.sibling:null);ba(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Br(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return b0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(tn,tn.current),s)break;return null;case 22:return n.lanes=0,m0(t,n,a,n.pendingProps);case 24:va(n,sn,t.memoizedState.cache)}return Xi(t,n,a)}function E0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!Zu(t,a)&&(n.flags&128)===0)return ln=!1,I_(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Me&&(n.flags&1048576)!==0&&np(n,Vs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=sr(n.elementType),n.type=t,typeof t=="function")$c(t)?(s=ur(t,s),n.tag=1,n=v0(null,n,t,s,a)):(n.tag=0,n=Gu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===F){n.tag=11,n=d0(null,n,t,s,a);break t}else if(c===O){n.tag=14,n=h0(null,n,t,s,a);break t}}throw n=ut(t)||t,Error(r(306,n,""))}}return n;case 0:return Gu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ur(s,n.pendingProps),v0(t,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,pu(t,n),Ks(n,s,null,a);var x=n.memoizedState;if(s=x.cache,va(n,sn,s),s!==f.cache&&lu(n,[sn],a,!0),js(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=S0(t,n,s,a);break t}else if(s!==c){c=ai(Error(r(424)),n),Xs(c),n=S0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=ci(t.firstChild),bn=n,Me=!0,ga=null,oi=!0,a=mp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nr(),s===c){n=Xi(t,n,a);break t}Tn(t,n,s,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=Pm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=Bl(nt.current).createElement(a),s[rn]=n,s[fn]=t,An(s,a,t),tt(s),n.stateNode=s):n.memoizedState=Pm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Me&&(s=n.stateNode=Lm(n.type,n.pendingProps,nt.current),bn=n,oi=!0,c=Ze,La(n.type)?(Cf=c,Ze=ci(s.firstChild)):Ze=c),Tn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=s=Ze)&&(s=mv(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,bn=n,Ze=ci(s.firstChild),oi=!1,c=!0):c=!1),c||_a(n)),Xt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,bf(c,f)?s=null:x!==null&&bf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Mu(t,n,w_,null,null,a),go._currentValue=c),Sl(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Ze)&&(a=xv(a,n.pendingProps,oi),a!==null?(n.stateNode=a,bn=n,Ze=null,t=!0):t=!1),t||_a(n)),null;case 13:return M0(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=lr(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return d0(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,va(n,n.type,s.value),Tn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ar(n),c=En(c),s=s(c),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return h0(t,n,n.type,n.pendingProps,a);case 15:return p0(t,n,n.type,n.pendingProps,a);case 19:return b0(t,n,a);case 31:return F_(t,n,a);case 22:return m0(t,n,a,n.pendingProps);case 24:return ar(n),s=En(sn),t===null?(c=fu(),c===null&&(c=qe,f=cu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},hu(n),va(n,sn,c)):((t.lanes&a)!==0&&(pu(t,n),Ks(n,null,null,a),js()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,sn,s)):(s=f.cache,va(n,sn,s),s!==c.cache&&lu(n,[sn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ki(t){t.flags|=4}function ju(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Q0())t.flags|=8192;else throw or=rl,du}else t.flags&=-16777217}function T0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hm(n))if(Q0())t.flags|=8192;else throw or=rl,du}function yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Be():536870912,t.lanes|=n,jr|=n)}function no(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function H_(t,n,a){var s=n.pendingProps;switch(iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Hi(sn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zr(n)?ki(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ru())),je(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ki(n),f!==null?(je(n),T0(n,f)):(je(n),ju(n,c,null,s,a))):f?f!==t.memoizedState?(ki(n),je(n),T0(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ki(n),je(n),ju(n,c,t,s,a)),null;case 27:if(oe(n),a=nt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}t=Et.current,zr(n)?ap(n):(t=Lm(c,s,a),n.stateNode=t,ki(n))}return je(n),null;case 5:if(oe(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(f=Et.current,zr(n))ap(n);else{var x=Bl(nt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[rn]=n,f[fn]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(An(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ki(n)}}return je(n),ju(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=nt.current,zr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Mm(t.nodeValue,a)),t||_a(n,!0)}else t=Bl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=zr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),c=!1}else c=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),je(n),null);case 4:return It(),t===null&&_f(n.stateNode.containerInfo),je(n),null;case 10:return Hi(n.type),je(n),null;case 19:if(it(tn),s=n.memoizedState,s===null)return je(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)no(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,no(s,!1),t=f.updateQueue,n.updateQueue=t,yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$h(a,t),a=a.sibling;return vt(tn,tn.current&1|2),Me&&Fi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>Rl&&(n.flags|=128,c=!0,no(s,!1),n.lanes=4194304)}else{if(!c)if(t=cl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,yl(n,t),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return je(n),null}else 2*b()-s.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,c=!0,no(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=tn.current,vt(tn,c?a&1|2:a&1),Me&&Fi(n,s.treeForkCount),t):(je(n),null);case 22:case 23:return Zn(n),_u(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&it(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(sn),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function G_(t,n){switch(iu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Hi(sn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(tn),null;case 4:return It(),null;case 10:return Hi(n.type),null;case 22:case 23:return Zn(n),_u(),t!==null&&it(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Hi(sn),null;case 25:return null;default:return null}}function A0(t,n){switch(iu(n),n.tag){case 3:Hi(sn),It();break;case 26:case 27:case 5:oe(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:it(tn);break;case 10:Hi(n.type);break;case 22:case 23:Zn(n),_u(),t!==null&&it(rr);break;case 24:Hi(sn)}}function io(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){Pe(n,n.return,E)}}function Ta(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var z=a,$=E;try{$()}catch(dt){Pe(c,z,dt)}}}s=s.next}while(s!==f)}}catch(dt){Pe(n,n.return,dt)}}function R0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gp(n,a)}catch(s){Pe(t,t.return,s)}}}function C0(t,n,a){a.props=ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function D0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function Ku(t,n,a){try{var s=t.stateNode;cv(s,t.type,a,n),s[fn]=n}catch(c){Pe(t,t.return,c)}}function w0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function Qu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ju(t,n,a),t=t.sibling;t!==null;)Ju(t,n,a),t=t.sibling}function bl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(bl(t,n,a),t=t.sibling;t!==null;)bl(t,n,a),t=t.sibling}function U0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[rn]=t,n[fn]=a}catch(f){Pe(t,t.return,f)}}var qi=!1,cn=!1,$u=!1,L0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function V_(t,n){if(t=t.containerInfo,Mf=kl,t=kh(t),Wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,z=-1,$=0,dt=0,xt=t,et=null;e:for(;;){for(var rt;xt!==a||c!==0&&xt.nodeType!==3||(E=x+c),xt!==f||s!==0&&xt.nodeType!==3||(z=x+s),xt.nodeType===3&&(x+=xt.nodeValue.length),(rt=xt.firstChild)!==null;)et=xt,xt=rt;for(;;){if(xt===t)break e;if(et===a&&++$===c&&(E=x),et===f&&++dt===s&&(z=x),(rt=xt.nextSibling)!==null)break;xt=et,et=xt.parentNode}xt=rt}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:t,selectionRange:a},kl=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ft=ur(a.type,c);t=s.getSnapshotBeforeUpdate(Ft,f),s.__reactInternalSnapshotBeforeUpdate=t}catch($t){Pe(a,a.return,$t)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function N0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&io(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Pe(a,a.return,x)}else{var c=ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Pe(a,a.return,x)}}s&64&&R0(a),s&512&&ao(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(t,n)}catch(x){Pe(a,a.return,x)}}break;case 27:n===null&&s&4&&U0(a);case 26:case 5:Yi(t,a),n===null&&s&4&&D0(a),s&512&&ao(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&z0(t,a);break;case 13:Yi(t,a),s&4&&B0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Q_.bind(null,a),gv(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||cn,c=qi;var f=cn;qi=s,(cn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):Yi(t,a),qi=c,cn=f}break;case 30:break;default:Yi(t,a)}}function O0(t){var n=t.alternate;n!==null&&(t.alternate=null,O0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ls(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,Pn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)P0(t,n,a),a=a.sibling}function P0(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:cn||Ai(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ai(a,n);var s=Ke,c=Pn;La(a.type)&&(Ke=a.stateNode,Pn=!1),Wi(t,n,a),po(a.stateNode),Ke=s,Pn=c;break;case 5:cn||Ai(a,n);case 6:if(s=Ke,c=Pn,Ke=null,Wi(t,n,a),Ke=s,Pn=c,Ke!==null)if(Pn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ke!==null&&(Pn?(t=Ke,Rm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),is(t)):Rm(Ke,a.stateNode));break;case 4:s=Ke,c=Pn,Ke=a.stateNode.containerInfo,Pn=!0,Wi(t,n,a),Ke=s,Pn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),cn||Ta(4,a,n),Wi(t,n,a);break;case 1:cn||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&C0(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Wi(t,n,a),cn=s;break;default:Wi(t,n,a)}}function z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{is(t)}catch(a){Pe(n,n.return,a)}}}function B0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{is(t)}catch(a){Pe(n,n.return,a)}}function X_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new L0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new L0),n;default:throw Error(r(435,t.tag))}}function El(t,n){var a=X_(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=J_.bind(null,t,s);s.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){Ke=E.stateNode,Pn=!1;break t}break;case 5:Ke=E.stateNode,Pn=!1;break t;case 3:case 4:Ke=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(Ke===null)throw Error(r(160));P0(f,x,c),Ke=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F0(n,t),n=n.sibling}var mi=null;function F0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Bn(t),s&4&&(Ta(3,t,t.return),io(3,t),Ta(5,t,t.return));break;case 1:zn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(zn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ka]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[rn]=t,tt(f),s=f;break t;case"link":var x=Fm("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Fm("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,tt(f),s=f}t.stateNode=s}else Im(c,t.type,t.stateNode);else t.stateNode=Bm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Im(c,t.type,t.stateNode):Bm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ku(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),a!==null&&s&4&&Ku(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Bn(t),s&512&&(cn||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{bi(c,"")}catch(Ft){Pe(t,t.return,Ft)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Ku(t,c,a!==null?a.memoizedProps:c)),s&1024&&($u=!0);break;case 6:if(zn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ft){Pe(t,t.return,Ft)}}break;case 3:if(Hl=null,c=mi,mi=Fl(n.containerInfo),zn(n,t),mi=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(Ft){Pe(t,t.return,Ft)}$u&&($u=!1,I0(t));break;case 4:s=mi,mi=Fl(t.stateNode.containerInfo),zn(n,t),Bn(t),mi=s;break;case 12:zn(n,t),Bn(t);break;case 31:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 13:zn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=qi,dt=cn;if(qi=$||c,cn=dt||z,zn(n,t),cn=dt,qi=$,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||qi||cn||fr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=z.stateNode;var xt=z.memoizedProps.style,et=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ft){Pe(z,z.return,Ft)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ft){Pe(z,z.return,Ft)}}}else if(n.tag===18){if(a===null){z=n;try{var rt=z.stateNode;c?Cm(rt,!0):Cm(z.stateNode,!1)}catch(Ft){Pe(z,z.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,El(t,a))));break;case 19:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,El(t,s)));break;case 30:break;case 21:break;default:zn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(w0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Qu(t);bl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(bi(x,""),a.flags&=-33);var E=Qu(t);bl(t,E,x);break;case 3:case 4:var z=a.stateNode.containerInfo,$=Qu(t);Ju(t,$,z);break;default:throw Error(r(161))}}catch(dt){Pe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function I0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;I0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)N0(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),fr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&C0(n,n.return,a),fr(n);break;case 27:po(n.stateNode);case 26:case 5:Ai(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),io(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Pe(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)xp(z[c],E)}catch($){Pe(s,s.return,$)}}a&&x&64&&R0(f),ao(f,f.return);break;case 27:U0(f);case 26:case 5:Zi(c,f,a),a&&s===null&&x&4&&D0(f),ao(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&x&4&&z0(c,f);break;case 13:Zi(c,f,a),a&&x&4&&B0(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),ao(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ks(a))}function ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ks(t))}function xi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(t,n,a,s),n=n.sibling}function H0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),c&2048&&io(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ks(t)));break;case 12:if(c&2048){xi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Pe(n,n.return,z)}}else xi(t,n,a,s);break;case 31:xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,s):ro(t,n):f._visibility&2?xi(t,n,a,s):(f._visibility|=2,Wr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&tf(x,n);break;case 24:xi(t,n,a,s),c&2048&&ef(n.alternate,n);break;default:xi(t,n,a,s)}}function Wr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,z=s,$=x.flags;switch(x.tag){case 0:case 11:case 15:Wr(f,x,E,z,c),io(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?Wr(f,x,E,z,c):ro(f,x):(dt._visibility|=2,Wr(f,x,E,z,c)),c&&$&2048&&tf(x.alternate,x);break;case 24:Wr(f,x,E,z,c),c&&$&2048&&ef(x.alternate,x);break;default:Wr(f,x,E,z,c)}n=n.sibling}}function ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ro(a,s),c&2048&&tf(s.alternate,s);break;case 24:ro(a,s),c&2048&&ef(s.alternate,s);break;default:ro(a,s)}n=n.sibling}}var so=8192;function Yr(t,n,a){if(t.subtreeFlags&so)for(t=t.child;t!==null;)G0(t,n,a),t=t.sibling}function G0(t,n,a){switch(t.tag){case 26:Yr(t,n,a),t.flags&so&&t.memoizedState!==null&&Dv(a,mi,t.memoizedState,t.memoizedProps);break;case 5:Yr(t,n,a);break;case 3:case 4:var s=mi;mi=Fl(t.stateNode.containerInfo),Yr(t,n,a),mi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=so,so=16777216,Yr(t,n,a),so=s):Yr(t,n,a));break;default:Yr(t,n,a)}}function V0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,k0(s,t)}V0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X0(t),t=t.sibling}function X0(t){switch(t.tag){case 0:case 11:case 15:oo(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:oo(t);break;case 12:oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Tl(t)):oo(t);break;default:oo(t)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,k0(s,t)}V0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}t=t.sibling}}function k0(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ks(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Sn=s;else t:for(a=t;Sn!==null;){s=Sn;var c=s.sibling,f=s.return;if(O0(s),s===a){Sn=null;break t}if(c!==null){c.return=f,Sn=c;break t}Sn=f}}}var k_={getCacheForType:function(t){var n=En(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(sn).controller.signal}},q_=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,me=null,ge=0,Oe=0,jn=null,Aa=!1,Zr=!1,nf=!1,ji=0,Je=0,Ra=0,dr=0,af=0,Kn=0,jr=0,lo=null,Fn=null,rf=!1,Al=0,q0=0,Rl=1/0,Cl=null,Ca=null,hn=0,Da=null,Kr=null,Ki=0,sf=0,of=null,W0=null,co=0,lf=null;function Qn(){return(Ue&2)!==0&&ge!==0?ge&-ge:P.T!==null?pf():ws()}function Y0(){if(Kn===0)if((ge&536870912)===0||Me){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function In(t,n,a){(t===qe&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),wa(t,ge,Kn,!1)),Rn(t,a),((Ue&2)===0||t!==qe)&&(t===qe&&((Ue&2)===0&&(dr|=a),Je===4&&wa(t,ge,Kn,!1)),Ri(t))}function Z0(t,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||zt(t,n),c=s?Z_(t,n):uf(t,n,!0),f=s;do{if(c===0){Zr&&!s&&wa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!W_(a)){c=uf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=lo;var z=E.current.memoizedState.isDehydrated;if(z&&(Qr(E,x).flags|=256),x=uf(E,x,!1),x!==2){if(nf&&!z){E.errorRecoveryDisabledLanes|=f,dr|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Qr(t,0),wa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(s,n,Kn,!Aa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Al+300-b(),10<c)){if(wa(s,n,Kn,!Aa),gt(s,0,!0)!==0)break t;Ki=n,s.timeoutHandle=Tm(j0.bind(null,s,a,Fn,Cl,rf,n,Kn,dr,jr,Aa,f,"Throttled",-0,0),c);break t}j0(s,a,Fn,Cl,rf,n,Kn,dr,jr,Aa,f,null,-0,0)}}break}while(!0);Ri(t)}function j0(t,n,a,s,c,f,x,E,z,$,dt,xt,et,rt){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},G0(n,f,xt);var Ft=(f&62914560)===f?Al-b():(f&4194048)===f?q0-b():0;if(Ft=wv(xt,Ft),Ft!==null){Ki=f,t.cancelPendingCommit=Ft(im.bind(null,t,n,f,a,s,c,x,E,z,dt,xt,null,et,rt)),wa(t,f,x,!$);return}}im(t,n,f,a,s,c,x,E,z)}function W_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(t,n,a,s){n&=~af,n&=~dr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Gt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Ho(t,a,n)}function Dl(){return(Ue&6)===0?(uo(0),!1):!0}function cf(){if(me!==null){if(Oe===0)var t=me.return;else t=me,Ii=ir=null,Eu(t),Gr=null,Ws=0,t=me;for(;t!==null;)A0(t.alternate,t),t=t.return;me=null}}function Qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,dv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,cf(),qe=t,me=a=Bi(t.current,null),ge=n,Oe=0,jn=null,Aa=!1,Zr=zt(t,n),nf=!1,jr=Kn=af=dr=Ra=Je=0,Fn=lo=null,rf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Gt(s),f=1<<c;n|=t[c],s&=~f}return ji=n,Ko(),a}function K0(t,n){re=null,P.H=to,n===Hr||n===al?(n=dp(),Oe=3):n===du?(n=dp(),Oe=4):Oe=n===Hu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(Je=1,_l(t,ai(n,t.current)))}function Q0(){var t=Yn.current;return t===null?!0:(ge&4194048)===ge?li===null:(ge&62914560)===ge||(ge&536870912)!==0?t===li:!1}function J0(){var t=P.H;return P.H=to,t===null?to:t}function $0(){var t=P.A;return P.A=k_,t}function wl(){Je=4,Aa||(ge&4194048)!==ge&&Yn.current!==null||(Zr=!0),(Ra&134217727)===0&&(dr&134217727)===0||qe===null||wa(qe,ge,Kn,!1)}function uf(t,n,a){var s=Ue;Ue|=2;var c=J0(),f=$0();(qe!==t||ge!==n)&&(Cl=null,Qr(t,n)),n=!1;var x=Je;t:do try{if(Oe!==0&&me!==null){var E=me,z=jn;switch(Oe){case 8:cf(),x=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var $=Oe;if(Oe=0,jn=null,Jr(t,E,z,$),a&&Zr){x=0;break t}break;default:$=Oe,Oe=0,jn=null,Jr(t,E,z,$)}}Y_(),x=Je;break}catch(dt){K0(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Ii=ir=null,Ue=s,P.H=c,P.A=f,me===null&&(qe=null,ge=0,Ko()),x}function Y_(){for(;me!==null;)tm(me)}function Z_(t,n){var a=Ue;Ue|=2;var s=J0(),c=$0();qe!==t||ge!==n?(Cl=null,Rl=b()+500,Qr(t,n)):Zr=zt(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=jn;e:switch(Oe){case 1:Oe=0,jn=null,Jr(t,n,f,1);break;case 2:case 9:if(up(f)){Oe=0,jn=null,em(n);break}n=function(){Oe!==2&&Oe!==9||qe!==t||(Oe=7),Ri(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:up(f)?(Oe=0,jn=null,em(n)):(Oe=0,jn=null,Jr(t,n,f,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var E=me;if(x?Hm(x):E.stateNode.complete){Oe=0,jn=null;var z=E.sibling;if(z!==null)me=z;else{var $=E.return;$!==null?(me=$,Ul($)):me=null}break e}}Oe=0,jn=null,Jr(t,n,f,5);break;case 6:Oe=0,jn=null,Jr(t,n,f,6);break;case 8:cf(),Je=6;break t;default:throw Error(r(462))}}j_();break}catch(dt){K0(t,dt)}while(!0);return Ii=ir=null,P.H=s,P.A=c,Ue=a,me!==null?0:(qe=null,ge=0,Ko(),Je)}function j_(){for(;me!==null&&!ie();)tm(me)}function tm(t){var n=E0(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Ul(t):me=n}function em(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_0(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=_0(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Eu(n);default:A0(a,n),n=me=$h(n,ji),n=E0(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Ul(t):me=n}function Jr(t,n,a,s){Ii=ir=null,Eu(n),Gr=null,Ws=0;var c=n.return;try{if(B_(t,c,n,a,ge)){Je=1,_l(t,ai(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Je=1,_l(t,ai(a,t.current)),me=null;return}n.flags&32768?(Me||s===1?t=!0:Zr||(ge&536870912)!==0?t=!1:(Aa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),nm(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){nm(n,Aa);return}t=n.return;var a=H_(n.alternate,n,ji);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Je===0&&(Je=5)}function nm(t,n){do{var a=G_(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Je=6,me=null}function im(t,n,a,s,c,f,x,E,z){t.cancelPendingCommit=null;do Ll();while(hn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Qc,Xn(t,a,f,x,E,z),t===qe&&(me=qe=null,ge=0),Kr=n,Da=t,Ki=a,sf=f,of=c,W0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$_(ot,function(){return lm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=j.p,j.p=2,x=Ue,Ue|=4;try{V_(t,n,a)}finally{Ue=x,j.p=c,P.T=s}}hn=1,am(),rm(),sm()}}function am(){if(hn===1){hn=0;var t=Da,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Ue;Ue|=4;try{F0(n,t);var f=yf,x=kh(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Xh(E.ownerDocument.documentElement,E)){if(z!==null&&Wc(E)){var $=z.start,dt=z.end;if(dt===void 0&&(dt=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(dt,E.value.length);else{var xt=E.ownerDocument||document,et=xt&&xt.defaultView||window;if(et.getSelection){var rt=et.getSelection(),Ft=E.textContent.length,$t=Math.min(z.start,Ft),He=z.end===void 0?$t:Math.min(z.end,Ft);!rt.extend&&$t>He&&(x=He,He=$t,$t=x);var q=Vh(E,$t),V=Vh(E,He);if(q&&V&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var Q=xt.createRange();Q.setStart(q.node,q.offset),rt.removeAllRanges(),$t>He?(rt.addRange(Q),rt.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),rt.addRange(Q))}}}}for(xt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&xt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xt.length;E++){var ht=xt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}kl=!!Mf,yf=Mf=null}finally{Ue=c,j.p=s,P.T=a}}t.current=n,hn=2}}function rm(){if(hn===2){hn=0;var t=Da,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Ue;Ue|=4;try{N0(t,n.alternate,n)}finally{Ue=c,j.p=s,P.T=a}}hn=3}}function sm(){if(hn===4||hn===3){hn=0,w();var t=Da,n=Kr,a=Ki,s=W0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,Kr=Da=null,om(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ca=null),ja(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=j.p,j.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{P.T=n,j.p=c}}(Ki&3)!==0&&Ll(),Ri(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===lf?co++:(co=0,lf=t):co=0,uo(0)}}function om(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ks(n)))}function Ll(){return am(),rm(),sm(),lm()}function lm(){if(hn!==5)return!1;var t=Da,n=sf;sf=0;var a=ja(Ki),s=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=of,of=null;var f=Da,x=Ki;if(hn=0,Kr=Da=null,Ki=0,(Ue&6)!==0)throw Error(r(331));var E=Ue;if(Ue|=4,X0(f.current),H0(f,f.current,x,a),Ue=E,uo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{j.p=c,P.T=s,om(t,n)}}function cm(t,n,a){n=ai(a,n),n=Iu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(Rn(t,2),Ri(t))}function Pe(t,n,a){if(t.tag===3)cm(t,t,a);else for(;n!==null;){if(n.tag===3){cm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){t=ai(a,t),a=u0(2),s=ya(n,a,2),s!==null&&(f0(a,s,n,t),Rn(s,2),Ri(s));break}}n=n.return}}function ff(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new q_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(nf=!0,c.add(a),t=K_.bind(null,t,n,a),n.then(t,t))}function K_(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(ge&a)===a&&(Je===4||Je===3&&(ge&62914560)===ge&&300>b()-Al?(Ue&2)===0&&Qr(t,0):af|=a,jr===ge&&(jr=0)),Ri(t)}function um(t,n){n===0&&(n=Be()),t=tr(t,n),t!==null&&(Rn(t,n),Ri(t))}function Q_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),um(t,a)}function J_(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),um(t,a)}function $_(t,n){return Xe(t,n)}var Nl=null,$r=null,df=!1,Ol=!1,hf=!1,Ua=0;function Ri(t){t!==$r&&t.next===null&&($r===null?Nl=$r=t:$r=$r.next=t),Ol=!0,df||(df=!0,ev())}function uo(t,n){if(!hf&&Ol){hf=!0;do for(var a=!1,s=Nl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Gt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pm(s,f))}else f=ge,f=gt(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||zt(s,f)||(a=!0,pm(s,f));s=s.next}while(a);hf=!1}}function tv(){fm()}function fm(){Ol=df=!1;var t=0;Ua!==0&&fv()&&(t=Ua);for(var n=b(),a=null,s=Nl;s!==null;){var c=s.next,f=dm(s,n);f===0?(s.next=null,a===null?Nl=c:a.next=c,c===null&&($r=a)):(a=s,(t!==0||(f&3)!==0)&&(Ol=!0)),s=c}hn!==0&&hn!==5||uo(t),Ua!==0&&(Ua=0)}function dm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Gt(f),E=1<<x,z=c[x];z===-1?((E&a)===0||(E&s)!==0)&&(c[x]=ne(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=qe,a=ge,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Yt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||zt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Yt(s),ja(a)){case 2:case 8:a=St;break;case 32:a=ot;break;case 268435456:a=Ut;break;default:a=ot}return s=hm.bind(null,t),a=Xe(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Yt(s),t.callbackPriority=2,t.callbackNode=null,2}function hm(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var s=ge;return s=gt(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Z0(t,s,n),dm(t,b()),t.callbackNode!=null&&t.callbackNode===a?hm.bind(null,t):null)}function pm(t,n){if(Ll())return null;Z0(t,n,!0)}function ev(){hv(function(){(Ue&6)!==0?Xe(mt,tv):fm()})}function pf(){if(Ua===0){var t=Fr;t===0&&(t=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Ua=t}return Ua}function mm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vo(""+t)}function xm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function nv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=mm((c[fn]||null).action),x=s.submitter;x&&(n=(n=x[fn]||null)?mm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Wo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ua!==0){var z=x?xm(c,x):new FormData(c);Nu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=x?xm(c,x):new FormData(c),Nu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var mf=0;mf<Kc.length;mf++){var xf=Kc[mf],iv=xf.toLowerCase(),av=xf[0].toUpperCase()+xf.slice(1);pi(iv,"on"+av)}pi(Yh,"onAnimationEnd"),pi(Zh,"onAnimationIteration"),pi(jh,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(S_,"onTransitionRun"),pi(M_,"onTransitionStart"),pi(y_,"onTransitionCancel"),pi(Kh,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function gm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],z=E.instance,$=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(dt){jo(dt)}c.currentTarget=null,f=z}else for(x=0;x<s.length;x++){if(E=s[x],z=E.instance,$=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(dt){jo(dt)}c.currentTarget=null,f=z}}}}function xe(t,n){var a=n[Ar];a===void 0&&(a=n[Ar]=new Set);var s=t+"__bubble";a.has(s)||(_m(n,t,2,!1),a.add(s))}function gf(t,n,a){var s=0;n&&(s|=4),_m(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function _f(t){if(!t[Pl]){t[Pl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(rv.has(a)||gf(a,!1,t),gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,gf("selectionchange",!1,n))}}function _m(t,n,a,s){switch(Ym(n)){case 2:var c=Nv;break;case 8:c=Ov;break;default:c=Nf}a=c.bind(null,n,a,t),c=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function vf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=ha(E),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){s=f=x;continue t}E=E.parentNode}}s=s.return}bh(function(){var $=f,dt=Pc(a),xt=[];t:{var et=Qh.get(t);if(et!==void 0){var rt=Wo,Ft=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":rt=Jg;break;case"focusin":Ft="focus",rt=Gc;break;case"focusout":Ft="blur",rt=Gc;break;case"beforeblur":case"afterblur":rt=Gc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=e_;break;case Yh:case Zh:case jh:rt=Xg;break;case Kh:rt=i_;break;case"scroll":case"scrollend":rt=Fg;break;case"wheel":rt=r_;break;case"copy":case"cut":case"paste":rt=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Ch;break;case"toggle":case"beforetoggle":rt=o_}var $t=(n&4)!==0,He=!$t&&(t==="scroll"||t==="scrollend"),q=$t?et!==null?et+"Capture":null:et;$t=[];for(var V=$,Q;V!==null;){var ht=V;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||q===null||(ht=Ns(V,q),ht!=null&&$t.push(ho(V,ht,Q))),He)break;V=V.return}0<$t.length&&(et=new rt(et,Ft,null,a,dt),xt.push({event:et,listeners:$t}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",et&&a!==Oc&&(Ft=a.relatedTarget||a.fromElement)&&(ha(Ft)||Ft[Li]))break t;if((rt||et)&&(et=dt.window===dt?dt:(et=dt.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(Ft=a.relatedTarget||a.toElement,rt=$,Ft=Ft?ha(Ft):null,Ft!==null&&(He=u(Ft),$t=Ft.tag,Ft!==He||$t!==5&&$t!==27&&$t!==6)&&(Ft=null)):(rt=null,Ft=$),rt!==Ft)){if($t=Ah,ht="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($t=Ch,ht="onPointerLeave",q="onPointerEnter",V="pointer"),He=rt==null?et:k(rt),Q=Ft==null?et:k(Ft),et=new $t(ht,V+"leave",rt,a,dt),et.target=He,et.relatedTarget=Q,ht=null,ha(dt)===$&&($t=new $t(q,V+"enter",Ft,a,dt),$t.target=Q,$t.relatedTarget=He,ht=$t),He=ht,rt&&Ft)e:{for($t=sv,q=rt,V=Ft,Q=0,ht=q;ht;ht=$t(ht))Q++;ht=0;for(var jt=V;jt;jt=$t(jt))ht++;for(;0<Q-ht;)q=$t(q),Q--;for(;0<ht-Q;)V=$t(V),ht--;for(;Q--;){if(q===V||V!==null&&q===V.alternate){$t=q;break e}q=$t(q),V=$t(V)}$t=null}else $t=null;rt!==null&&vm(xt,et,rt,$t,!1),Ft!==null&&He!==null&&vm(xt,He,Ft,$t,!0)}}t:{if(et=$?k($):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var Ce=zh;else if(Oh(et))if(Bh)Ce=g_;else{Ce=m_;var Vt=p_}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Nc($.elementType)&&(Ce=zh):Ce=x_;if(Ce&&(Ce=Ce(t,$))){Ph(xt,Ce,a,dt);break t}Vt&&Vt(t,et,$),t==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&_n(et,"number",et.value)}switch(Vt=$?k($):window,t){case"focusin":(Oh(Vt)||Vt.contentEditable==="true")&&(wr=Vt,Yc=$,Gs=null);break;case"focusout":Gs=Yc=wr=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,qh(xt,a,dt);break;case"selectionchange":if(v_)break;case"keydown":case"keyup":qh(xt,a,dt)}var ce;if(Xc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Dr?Lh(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Dh&&a.locale!=="ko"&&(Dr||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Dr&&(ce=Eh()):(ma=dt,Fc="value"in ma?ma.value:ma.textContent,Dr=!0)),Vt=zl($,_e),0<Vt.length&&(_e=new Rh(_e,t,null,a,dt),xt.push({event:_e,listeners:Vt}),ce?_e.data=ce:(ce=Nh(a),ce!==null&&(_e.data=ce)))),(ce=c_?u_(t,a):f_(t,a))&&(_e=zl($,"onBeforeInput"),0<_e.length&&(Vt=new Rh("onBeforeInput","beforeinput",null,a,dt),xt.push({event:Vt,listeners:_e}),Vt.data=ce)),nv(xt,t,$,a,dt)}gm(xt,n)})}function ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ns(t,a),c!=null&&s.unshift(ho(t,c,f)),c=Ns(t,n),c!=null&&s.push(ho(t,c,f))),t.tag===3)return s;t=t.return}return[]}function sv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,z=E.alternate,$=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||$===null||(z=$,c?($=Ns(a,f),$!=null&&x.unshift(ho(a,$,z))):c||($=Ns(a,f),$!=null&&x.push(ho(a,$,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var ov=/\r\n?/g,lv=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(ov,`
`).replace(lv,"")}function Mm(t,n){return n=Sm(n),Sm(t)===n}function Ie(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||bi(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&bi(t,""+s);break;case"className":be(t,"class",s);break;case"tabIndex":be(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":be(t,a,s);break;case"style":Mh(t,s,f);break;case"data":if(n!=="object"){be(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Vo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),le(t,"popover",s);break;case"xlinkActuate":Re(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Re(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Re(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Re(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Re(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Re(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Re(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":le(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zg.get(a)||a,le(t,a,s))}}function Sf(t,n,a,s,c,f){switch(a){case"style":Mh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?bi(t,s):(typeof s=="number"||typeof s=="bigint")&&bi(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[fn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):le(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,x,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var E=f=x=c=null,z=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":c=dt;break;case"type":x=dt;break;case"checked":z=dt;break;case"defaultChecked":$=dt;break;case"value":f=dt;break;case"defaultValue":E=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ie(t,n,s,dt,a,null)}}Ye(t,f,E,z,$,x,c,!1);return;case"select":xe("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ie(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!s,n!=null?dn(t,!!s,n,!1):a!=null&&dn(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ie(t,n,x,E,a,null)}yn(t,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(t,n,z,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<fo.length;s++)xe(fo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,$,s,a,null)}return;default:if(Nc(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Sf(t,n,dt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ie(t,n,E,s,a,null))}function cv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,z=null,$=null,dt=null;for(rt in a){var xt=a[rt];if(a.hasOwnProperty(rt)&&xt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=xt;default:s.hasOwnProperty(rt)||Ie(t,n,rt,null,s,xt)}}for(var et in s){var rt=s[et];if(xt=a[et],s.hasOwnProperty(et)&&(rt!=null||xt!=null))switch(et){case"type":f=rt;break;case"name":c=rt;break;case"checked":$=rt;break;case"defaultChecked":dt=rt;break;case"value":x=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==xt&&Ie(t,n,et,rt,s,xt)}}Ni(t,x,E,z,$,dt,f,c);return;case"select":rt=x=E=et=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==z&&Ie(t,n,c,f,s,z)}n=E,a=x,s=rt,et!=null?dn(t,!!a,et,!1):!!s!=!!a&&(n!=null?dn(t,!!a,n,!0):dn(t,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ie(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":et=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,x,c,s,f)}vn(t,et,rt);return;case"option":for(var Ft in a)if(et=a[Ft],a.hasOwnProperty(Ft)&&et!=null&&!s.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Ie(t,n,Ft,null,s,et)}for(z in s)if(et=s[z],rt=a[z],s.hasOwnProperty(z)&&et!==rt&&(et!=null||rt!=null))switch(z){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ie(t,n,z,et,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)et=a[$t],a.hasOwnProperty($t)&&et!=null&&!s.hasOwnProperty($t)&&Ie(t,n,$t,null,s,et);for($ in s)if(et=s[$],rt=a[$],s.hasOwnProperty($)&&et!==rt&&(et!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ie(t,n,$,et,s,rt)}return;default:if(Nc(n)){for(var He in a)et=a[He],a.hasOwnProperty(He)&&et!==void 0&&!s.hasOwnProperty(He)&&Sf(t,n,He,void 0,s,et);for(dt in s)et=s[dt],rt=a[dt],!s.hasOwnProperty(dt)||et===rt||et===void 0&&rt===void 0||Sf(t,n,dt,et,s,rt);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!s.hasOwnProperty(q)&&Ie(t,n,q,null,s,et);for(xt in s)et=s[xt],rt=a[xt],!s.hasOwnProperty(xt)||et===rt||et==null&&rt==null||Ie(t,n,xt,et,s,rt)}function ym(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&ym(x)){for(x=0,E=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],$=z.startTime;if($>E)break;var dt=z.transferSize,xt=z.initiatorType;dt&&ym(xt)&&(z=z.responseEnd,x+=dt*(z<E?1:(E-$)/(z-$)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Mf=null,yf=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function bm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function fv(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var Tm=typeof setTimeout=="function"?setTimeout:void 0,dv=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(pv)}:Tm;function pv(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function Rm(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),is(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,po(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Ka]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&po(t.ownerDocument.body);a=c}while(a);is(n)}function Cm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Ls(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function mv(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ka])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function xv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Dm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$?"||t.data==="$~"}function Rf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gv(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Cf=null;function wm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Um(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Lm(t,n,a){switch(n=Bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ls(t)}var ui=new Map,Nm=new Set;function Fl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=j.d;j.d={f:_v,r:vv,D:Sv,C:Mv,L:yv,m:bv,X:Tv,S:Ev,M:Av};function _v(){var t=Qi.f(),n=Dl();return t||n}function vv(t){var n=T(t);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Qi.r(t)}var ts=typeof document>"u"?null:document;function Om(t,n,a){var s=ts;if(s&&typeof n=="string"&&n){var c=We(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Nm.has(c)||(Nm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",t),tt(n),s.head.appendChild(n)))}}function Sv(t){Qi.D(t),Om("dns-prefetch",t,null)}function Mv(t,n){Qi.C(t,n),Om("preconnect",t,n)}function yv(t,n,a){Qi.L(t,n,a);var s=ts;if(s&&t&&n){var c='link[rel="preload"][as="'+We(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+We(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+We(a.imageSizes)+'"]')):c+='[href="'+We(t)+'"]';var f=c;switch(n){case"style":f=es(t);break;case"script":f=ns(t)}ui.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(mo(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),An(n,"link",t),tt(n),s.head.appendChild(n)))}}function bv(t,n){Qi.m(t,n);var a=ts;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+We(s)+'"][href="'+We(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ns(t)}if(!ui.has(f)&&(t=g({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),An(s,"link",t),tt(s),a.head.appendChild(s)}}}function Ev(t,n,a){Qi.S(t,n,a);var s=ts;if(s&&t){var c=at(s).hoistableStyles,f=es(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(mo(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Df(t,a);var z=x=s.createElement("link");tt(z),An(z,"link",t),z._p=new Promise(function($,dt){z.onload=$,z.onerror=dt}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Il(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Tv(t,n){Qi.X(t,n);var a=ts;if(a&&t){var s=at(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=g({src:t,async:!0},n),(n=ui.get(c))&&wf(t,n),f=a.createElement("script"),tt(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Av(t,n){Qi.M(t,n);var a=ts;if(a&&t){var s=at(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&wf(t,n),f=a.createElement("script"),tt(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Pm(t,n,a,s){var c=(c=nt.current)?Fl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=es(a.href),a=at(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=es(a.href);var f=at(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(mo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||Rv(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=at(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function es(t){return'href="'+We(t)+'"'}function mo(t){return'link[rel="stylesheet"]['+t+"]"}function zm(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Rv(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),tt(n),t.head.appendChild(n))}function ns(t){return'[src="'+We(t)+'"]'}function xo(t){return"script[async]"+t}function Bm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+We(a.href)+'"]');if(s)return n.instance=s,tt(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),tt(s),An(s,"style",c),Il(s,a.precedence,t),n.instance=s;case"stylesheet":c=es(a.href);var f=t.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,tt(f),f;s=zm(a),(c=ui.get(c))&&Df(s,c),f=(t.ownerDocument||t).createElement("link"),tt(f);var x=f;return x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),An(f,"link",s),n.state.loading|=4,Il(f,a.precedence,t),n.instance=f;case"script":return f=ns(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,tt(c),c):(s=a,(c=ui.get(f))&&(s=g({},a),wf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),tt(c),An(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Il(s,a.precedence,t));return n.instance}function Il(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hl=null;function Fm(t,n,a){if(Hl===null){var s=new Map,c=Hl=new Map;c.set(a,s)}else c=Hl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ka]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function Im(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Cv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Dv(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=es(s.href),f=n.querySelector(mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,tt(f);return}f=n.ownerDocument||n,s=zm(s),(c=ui.get(c))&&Df(s,c),f=f.createElement("link"),tt(f);var x=f;x._p=new Promise(function(E,z){x.onload=E,x.onerror=z}),An(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uf=0;function wv(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Uf===0&&(Uf=62500*uv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Uf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vl=new Map,n.forEach(Uv,t),Vl=null,Gl.call(t))}function Uv(t,n){if(!(n.state.loading&4)){var a=Vl.get(t);if(a)var s=a.get(null);else{a=new Map,Vl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var go={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Lv(t,n,a,s,c,f,x,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Gm(t,n,a,s,c,f,x,E,z,$,dt,xt){return t=new Lv(t,n,a,x,z,$,dt,xt,E),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},hu(f),t}function Vm(t){return t?(t=Nr,t):Nr}function Xm(t,n,a,s,c,f){c=Vm(c),s.context===null?s.context=c:s.pendingContext=c,s=Ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(t,s,n),a!==null&&(In(a,t,n),Zs(a,t,n))}function km(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Lf(t,n){km(t,n),(t=t.alternate)&&km(t,n)}function qm(t){if(t.tag===13||t.tag===31){var n=tr(t,67108864);n!==null&&In(n,t,67108864),Lf(t,67108864)}}function Wm(t){if(t.tag===13||t.tag===31){var n=Qn();n=hi(n);var a=tr(t,n);a!==null&&In(a,t,n),Lf(t,n)}}var kl=!0;function Nv(t,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=2,Nf(t,n,a,s)}finally{j.p=f,P.T=c}}function Ov(t,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=8,Nf(t,n,a,s)}finally{j.p=f,P.T=c}}function Nf(t,n,a,s){if(kl){var c=Of(s);if(c===null)vf(t,n,s,ql,a),Zm(t,s);else if(zv(c,t,n,a,s))s.stopPropagation();else if(Zm(t,s),n&4&&-1<Pv.indexOf(t)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=yt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var z=1<<31-Gt(x);E.entanglements[1]|=z,x&=~z}Ri(f),(Ue&6)===0&&(Rl=b()+500,uo(0))}}break;case 31:case 13:E=tr(f,2),E!==null&&In(E,f,2),Dl(),Lf(f,2)}if(f=Of(s),f===null&&vf(t,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else vf(t,n,s,null,a)}}function Of(t){return t=Pc(t),Pf(t)}var ql=null;function Pf(t){if(ql=null,t=ha(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function Ym(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case mt:return 2;case St:return 8;case ot:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var zf=!1,Na=null,Oa=null,Pa=null,_o=new Map,vo=new Map,za=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zm(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":_o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(n.pointerId)}}function So(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&qm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function zv(t,n,a,s,c){switch(n){case"focusin":return Na=So(Na,t,n,a,s,c),!0;case"dragenter":return Oa=So(Oa,t,n,a,s,c),!0;case"mouseover":return Pa=So(Pa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return _o.set(f,So(_o.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,vo.set(f,So(vo.get(f)||null,t,n,a,s,c)),!0}return!1}function jm(t){var n=ha(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Us(t.priority,function(){Wm(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Us(t.priority,function(){Wm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Of(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Oc=s,a.target.dispatchEvent(s),Oc=null}else return n=T(a),n!==null&&qm(n),t.blockedOn=a,!1;n.shift()}return!0}function Km(t,n,a){Wl(t)&&a.delete(n)}function Bv(){zf=!1,Na!==null&&Wl(Na)&&(Na=null),Oa!==null&&Wl(Oa)&&(Oa=null),Pa!==null&&Wl(Pa)&&(Pa=null),_o.forEach(Km),vo.forEach(Km)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,zf||(zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bv)))}var Zl=null;function Qm(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Pf(s||a)===null)continue;break}var f=T(a);f!==null&&(t.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function is(t){function n(z){return Yl(z,t)}Na!==null&&Yl(Na,t),Oa!==null&&Yl(Oa,t),Pa!==null&&Yl(Pa,t),_o.forEach(n),vo.forEach(n);for(var a=0;a<za.length;a++){var s=za[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)jm(a),a.blockedOn===null&&za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[fn]||null;if(typeof f=="function")x||Qm(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[fn]||null)E=x.formAction;else if(Pf(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Qm(a)}}}function Jm(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Bf(t){this._internalRoot=t}jl.prototype.render=Bf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();Xm(a,s,t,n,null,null)},jl.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Xm(t.current,2,null,t,null,null),Dl(),n[Li]=null}};function jl(t){this._internalRoot=t}jl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,t),a===0&&jm(t)}};var $m=e.version;if($m!=="19.2.0")throw Error(r(527,$m,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Fv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Mt=Kl.inject(Fv),bt=Kl}catch{}}return yo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=s0,f=o0,x=l0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Gm(t,1,!1,null,null,a,s,null,c,f,x,Jm),t[Li]=n.current,_f(t),new Bf(n)},yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=s0,x=o0,E=l0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Gm(t,1,!0,n,a??null,s,c,z,f,x,E,Jm),n.context=Vm(null),a=n.current,s=Qn(),s=hi(s),c=Ma(s),c.callback=null,ya(a,c,s),a=s,n.current.lanes=a,Rn(n,a),Ri(n),t[Li]=n.current,_f(t),new jl(n)},yo.version="19.2.0",yo}var cx;function Zv(){if(cx)return Hf.exports;cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Hf.exports=Yv(),Hf.exports}var jv=Zv();const uh="181",Kv=0,ux=1,Qv=2,rg=1,Jv=2,aa=3,Ya=0,Vn=1,ra=2,la=0,_s=1,fx=2,dx=3,hx=4,$v=5,Sr=100,tS=101,eS=102,nS=103,iS=104,aS=200,rS=201,sS=202,oS=203,Sd=204,Md=205,lS=206,cS=207,uS=208,fS=209,dS=210,hS=211,pS=212,mS=213,xS=214,yd=0,bd=1,Ed=2,Ss=3,Td=4,Ad=5,Rd=6,Cd=7,sg=0,gS=1,_S=2,Wa=0,vS=1,SS=2,MS=3,yS=4,bS=5,ES=6,TS=7,og=300,Ms=301,ys=302,Dd=303,wd=304,Rc=306,Ud=1e3,sa=1001,Ld=1002,ei=1003,AS=1004,Ql=1005,di=1006,kf=1007,yr=1008,ua=1009,lg=1010,cg=1011,wo=1012,fh=1013,Er=1014,oa=1015,Ts=1016,dh=1017,hh=1018,Uo=1020,ug=35902,fg=35899,dg=1021,hg=1022,yi=1023,Lo=1026,No=1027,pg=1028,ph=1029,mh=1030,xh=1031,gh=1033,_c=33776,vc=33777,Sc=33778,Mc=33779,Nd=35840,Od=35841,Pd=35842,zd=35843,Bd=36196,Fd=37492,Id=37496,Hd=37808,Gd=37809,Vd=37810,Xd=37811,kd=37812,qd=37813,Wd=37814,Yd=37815,Zd=37816,jd=37817,Kd=37818,Qd=37819,Jd=37820,$d=37821,th=36492,eh=36494,nh=36495,ih=36283,ah=36284,rh=36285,sh=36286,RS=3200,CS=3201,DS=0,wS=1,ka="",ti="srgb",bs="srgb-linear",Ec="linear",Ge="srgb",as=7680,px=519,US=512,LS=513,NS=514,mg=515,OS=516,PS=517,zS=518,BS=519,mx=35044,xx="300 es",Di=2e3,Tc=2001;function xg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ac(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function FS(){const o=Ac("canvas");return o.style.display="block",o}const gx={};function _x(...o){const e="THREE."+o.shift();console.log(e,...o)}function se(...o){const e="THREE."+o.shift();console.warn(e,...o)}function nn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Oo(...o){const e=o.join(" ");e in gx||(gx[e]=!0,se(...o))}function IS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class As{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,oh=180/Math.PI;function Po(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function HS(o,e){return(o%e+e)%e}function Wf(o,e,i){return(1-i)*o+i*e}function bo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,i=0){Ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=u[d+0],y=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(g!==C||m!==S||p!==y||_!==A){let M=m*S+p*y+_*A+g*C;M<0&&(S=-S,y=-y,A=-A,C=-C,M=-M);let v=1-h;if(M<.9995){const B=Math.acos(M),U=Math.sin(B);v=Math.sin(v*B)/U,h=Math.sin(h*B)/U,m=m*v+S*h,p=p*v+y*h,_=_*v+A*h,g=g*v+C*h}else{m=m*v+S*h,p=p*v+y*h,_=_*v+A*h,g=g*v+C*h;const B=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=B,p*=B,_*=B,g*=B}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return e[i]=h*A+_*g+m*y-p*S,e[i+1]=m*A+_*S+p*g-h*y,e[i+2]=p*A+_*y+h*S-m*g,e[i+3]=_*A-h*g-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(u/2),S=m(r/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*_*g+p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g-S*y*A;break;case"YXZ":this._x=S*_*g+p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g+S*y*A;break;case"ZXY":this._x=S*_*g-p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g-S*y*A;break;case"ZYX":this._x=S*_*g-p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g+S*y*A;break;case"YZX":this._x=S*_*g+p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g-S*y*A;break;case"XZY":this._x=S*_*g-p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g+S*y*A;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+h+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,i=0,r=0){ct.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(vx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(vx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),_=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*_,this.y=r+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yf.copy(this).projectOnVector(e),this.sub(Yf)}reflect(e){return this.sub(Yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new ct,vx=new zo;class ue{constructor(e,i,r,l,u,d,h,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],y=r[5],A=r[8],C=l[0],M=l[3],v=l[6],B=l[1],U=l[4],F=l[7],X=l[2],N=l[5],O=l[8];return u[0]=d*C+h*B+m*X,u[3]=d*M+h*U+m*N,u[6]=d*v+h*F+m*O,u[1]=p*C+_*B+g*X,u[4]=p*M+_*U+g*N,u[7]=p*v+_*F+g*O,u[2]=S*C+y*B+A*X,u[5]=S*M+y*U+A*N,u[8]=S*v+y*F+A*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*d-h*p,S=h*m-_*u,y=p*u-d*m,A=i*g+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(l*p-_*r)*C,e[2]=(h*r-l*d)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Zf.makeScale(e,i)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new ue,Sx=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const o={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=vs(l.r),l.g=vs(l.g),l.b=vs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Ec:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[bs]:{primaries:e,whitePoint:r,transfer:Ec,toXYZ:Sx,fromXYZ:Mx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Ge,toXYZ:Sx,fromXYZ:Mx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),o}const we=GS();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class VS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{rs===void 0&&(rs=Ac("canvas")),rs.width=e.width,rs.height=e.height;const l=rs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ac("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ca(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XS=0;class _h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(jf(l[d].image)):u.push(jf(l[d]))}else u=jf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?VS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let kS=0;const Kf=new ct;class Nn extends As{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=sa,l=sa,u=di,d=yr,h=yi,m=ua,p=Nn.DEFAULT_ANISOTROPY,_=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Po(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kf).x}get height(){return this.source.getSize(Kf).y}get depth(){return this.source.getSize(Kf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==og)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case sa:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case sa:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=og;Nn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],g=m[8],S=m[1],y=m[5],A=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,F=(y+1)/2,X=(v+1)/2,N=(_+S)/4,O=(g+C)/4,K=(A+M)/4;return U>F&&U>X?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=O/r):F>X?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=N/l,u=K/l):X<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),r=O/u,l=K/u),this.set(r,l,u,i),this}let B=Math.sqrt((M-A)*(M-A)+(g-C)*(g-C)+(S-_)*(S-_));return Math.abs(B)<.001&&(B=1),this.x=(M-A)/B,this.y=(g-C)/B,this.z=(S-_)/B,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qS extends As{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _h(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends qS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class gg extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WS extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jl.copy(r.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),$l.subVectors(this.max,Eo),ss.subVectors(e.a,Eo),os.subVectors(e.b,Eo),ls.subVectors(e.c,Eo),Fa.subVectors(os,ss),Ia.subVectors(ls,os),hr.subVectors(ss,ls);let i=[0,-Fa.z,Fa.y,0,-Ia.z,Ia.y,0,-hr.z,hr.y,Fa.z,0,-Fa.x,Ia.z,0,-Ia.x,hr.z,0,-hr.x,-Fa.y,Fa.x,0,-Ia.y,Ia.x,0,-hr.y,hr.x,0];return!Qf(i,ss,os,ls,$l)||(i=[1,0,0,0,1,0,0,0,1],!Qf(i,ss,os,ls,$l))?!1:(tc.crossVectors(Fa,Ia),i=[tc.x,tc.y,tc.z],Qf(i,ss,os,ls,$l))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],gi=new ct,Jl=new Bo,ss=new ct,os=new ct,ls=new ct,Fa=new ct,Ia=new ct,hr=new ct,Eo=new ct,$l=new ct,tc=new ct,pr=new ct;function Qf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){pr.fromArray(o,u);const h=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=e.dot(pr),p=i.dot(pr),_=r.dot(pr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const YS=new Bo,To=new ct,Jf=new ct;class vh{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):YS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(To,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Jf)),this.expandByPoint(To.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $i=new ct,$f=new ct,ec=new ct,Ha=new ct,td=new ct,nc=new ct,ed=new ct;class ZS{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=$i.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){$f.copy(e).add(i).multiplyScalar(.5),ec.copy(i).sub(e).normalize(),Ha.copy(this.origin).sub($f);const u=e.distanceTo(i)*.5,d=-this.direction.dot(ec),h=Ha.dot(this.direction),m=-Ha.dot(ec),p=Ha.lengthSq(),_=Math.abs(1-d*d);let g,S,y,A;if(_>0)if(g=d*m-h,S=d*h-m,A=u*_,g>=0)if(S>=-A)if(S<=A){const C=1/_;g*=C,S*=C,y=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy($f).addScaledVector(ec,S),y}intersectSphere(e,i){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(u=(e.min.y-S.y)*_,d=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,d=(e.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,i,r,l,u){td.subVectors(i,e),nc.subVectors(r,e),ed.crossVectors(td,nc);let d=this.direction.dot(ed),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ha.subVectors(this.origin,e);const m=h*this.direction.dot(nc.crossVectors(Ha,nc));if(m<0)return null;const p=h*this.direction.dot(td.cross(Ha));if(p<0||m+p>d)return null;const _=-h*Ha.dot(ed);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,i,r,l,u,d,h,m,p,_,g,S,y,A,C,M){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,_,g,S,y,A,C,M)}set(e,i,r,l,u,d,h,m,p,_,g,S,y,A,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=A,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/cs.setFromMatrixColumn(e,0).length(),u=1/cs.setFromMatrixColumn(e,1).length(),d=1/cs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*_,y=d*g,A=h*_,C=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+y*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*_,y=m*g,A=p*_,C=p*g;i[0]=S+C*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=y*h-A,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*_,y=m*g,A=p*_,C=p*g;i[0]=S-C*h,i[4]=-d*g,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*_,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*_,y=d*g,A=h*_,C=h*g;i[0]=m*_,i[4]=A*p-y,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=C-S*g,i[8]=A*g+y,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+A,i[10]=S-C*g}else if(e.order==="XZY"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+C,i[5]=d*_,i[9]=y*g-A,i[2]=A*g-y,i[6]=h*_,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jS,e,KS)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ga.crossVectors(r,Jn),Ga.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ga.crossVectors(r,Jn)),Ga.normalize(),ic.crossVectors(Jn,Ga),l[0]=Ga.x,l[4]=ic.x,l[8]=Jn.x,l[1]=Ga.y,l[5]=ic.y,l[9]=Jn.y,l[2]=Ga.z,l[6]=ic.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],y=r[13],A=r[2],C=r[6],M=r[10],v=r[14],B=r[3],U=r[7],F=r[11],X=r[15],N=l[0],O=l[4],K=l[8],D=l[12],R=l[1],H=l[5],Y=l[9],st=l[13],ut=l[2],ft=l[6],P=l[10],j=l[14],W=l[3],pt=l[7],_t=l[11],L=l[15];return u[0]=d*N+h*R+m*ut+p*W,u[4]=d*O+h*H+m*ft+p*pt,u[8]=d*K+h*Y+m*P+p*_t,u[12]=d*D+h*st+m*j+p*L,u[1]=_*N+g*R+S*ut+y*W,u[5]=_*O+g*H+S*ft+y*pt,u[9]=_*K+g*Y+S*P+y*_t,u[13]=_*D+g*st+S*j+y*L,u[2]=A*N+C*R+M*ut+v*W,u[6]=A*O+C*H+M*ft+v*pt,u[10]=A*K+C*Y+M*P+v*_t,u[14]=A*D+C*st+M*j+v*L,u[3]=B*N+U*R+F*ut+X*W,u[7]=B*O+U*H+F*ft+X*pt,u[11]=B*K+U*Y+F*P+X*_t,u[15]=B*D+U*st+F*j+X*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],S=e[10],y=e[14],A=e[3],C=e[7],M=e[11],v=e[15];return A*(+u*m*g-l*p*g-u*h*S+r*p*S+l*h*y-r*m*y)+C*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*_-u*m*_)+M*(+i*p*g-i*h*y-u*d*g+r*d*y+u*h*_-r*p*_)+v*(-l*h*_-i*m*g+i*h*S+l*d*g-r*d*S+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],S=e[10],y=e[11],A=e[12],C=e[13],M=e[14],v=e[15],B=g*M*p-C*S*p+C*m*y-h*M*y-g*m*v+h*S*v,U=A*S*p-_*M*p-A*m*y+d*M*y+_*m*v-d*S*v,F=_*C*p-A*g*p+A*h*y-d*C*y-_*h*v+d*g*v,X=A*g*m-_*C*m-A*h*S+d*C*S+_*h*M-d*g*M,N=i*B+r*U+l*F+u*X;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return e[0]=B*O,e[1]=(C*S*u-g*M*u-C*l*y+r*M*y+g*l*v-r*S*v)*O,e[2]=(h*M*u-C*m*u+C*l*p-r*M*p-h*l*v+r*m*v)*O,e[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*y-r*m*y)*O,e[4]=U*O,e[5]=(_*M*u-A*S*u+A*l*y-i*M*y-_*l*v+i*S*v)*O,e[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*v-i*m*v)*O,e[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*y+i*m*y)*O,e[8]=F*O,e[9]=(A*g*u-_*C*u-A*r*y+i*C*y+_*r*v-i*g*v)*O,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*v+i*h*v)*O,e[11]=(_*h*u-d*g*u-_*r*p+i*g*p+d*r*y-i*h*y)*O,e[12]=X*O,e[13]=(_*C*l-A*g*l+A*r*S-i*C*S-_*r*M+i*g*M)*O,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*M-i*h*M)*O,e[15]=(d*g*l-_*h*l+_*r*m-i*g*m-d*r*S+i*h*S)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,S=u*p,y=u*_,A=u*g,C=d*_,M=d*g,v=h*g,B=m*p,U=m*_,F=m*g,X=r.x,N=r.y,O=r.z;return l[0]=(1-(C+v))*X,l[1]=(y+F)*X,l[2]=(A-U)*X,l[3]=0,l[4]=(y-F)*N,l[5]=(1-(S+v))*N,l[6]=(M+B)*N,l[7]=0,l[8]=(A+U)*O,l[9]=(M-B)*O,l[10]=(1-(S+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const d=cs.set(l[4],l[5],l[6]).length(),h=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,_=1/d,g=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,i.setFromRotationMatrix(_i),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Di,m=!1){const p=this.elements,_=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),y=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Di)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Tc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Di,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),y=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Di)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Tc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const cs=new ct,_i=new pn,jS=new ct(0,0,0),KS=new ct(1,1,1),Ga=new ct,ic=new ct,Jn=new ct,yx=new pn,bx=new zo;class fa{constructor(e=0,i=0,r=0,l=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return yx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return bx.setFromEuler(this),this.setFromQuaternion(bx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class _g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const Ex=new ct,us=new zo,ta=new pn,ac=new ct,Ao=new ct,JS=new ct,$S=new zo,Tx=new ct(1,0,0),Ax=new ct(0,1,0),Rx=new ct(0,0,1),Cx={type:"added"},tM={type:"removed"},fs={type:"childadded",child:null},nd={type:"childremoved",child:null};class ni extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new ct,i=new fa,r=new zo,l=new ct(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new ue}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Tx,e)}rotateY(e){return this.rotateOnAxis(Ax,e)}rotateZ(e){return this.rotateOnAxis(Rx,e)}translateOnAxis(e,i){return Ex.copy(e).applyQuaternion(this.quaternion),this.position.add(Ex.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Tx,e)}translateY(e){return this.translateOnAxis(Ax,e)}translateZ(e){return this.translateOnAxis(Rx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ac.copy(e):ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Ao,ac,this.up):ta.lookAt(ac,Ao,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),us.setFromRotationMatrix(ta),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(nn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cx),fs.child=e,this.dispatchEvent(fs),fs.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(tM),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cx),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,$S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),g=d(e.shapes),S=d(e.skeletons),y=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new ct(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ct,ea=new ct,id=new ct,na=new ct,ds=new ct,hs=new ct,Dx=new ct,ad=new ct,rd=new ct,sd=new ct,od=new an,ld=new an,cd=new an;class Mi{constructor(e=new ct,i=new ct,r=new ct){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){vi.subVectors(l,i),ea.subVectors(r,i),id.subVectors(e,i);const d=vi.dot(vi),h=vi.dot(ea),m=vi.dot(id),p=ea.dot(ea),_=ea.dot(id),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,y=(p*m-h*_)*S,A=(d*_-h*m)*S;return u.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(e,i),ld.fromBufferAttribute(e,r),cd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(od,u.x),d.addScaledVector(ld,u.y),d.addScaledVector(cd,u.z),d}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),ea.subVectors(e,i),vi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),vi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ds.subVectors(l,r),hs.subVectors(u,r),ad.subVectors(e,r);const m=ds.dot(ad),p=hs.dot(ad);if(m<=0&&p<=0)return i.copy(r);rd.subVectors(e,l);const _=ds.dot(rd),g=hs.dot(rd);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(ds,d);sd.subVectors(e,u);const y=ds.dot(sd),A=hs.dot(sd);if(A>=0&&y<=A)return i.copy(u);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(hs,h);const M=_*A-y*g;if(M<=0&&g-_>=0&&y-A>=0)return Dx.subVectors(u,l),h=(g-_)/(g-_+(y-A)),i.copy(l).addScaledVector(Dx,h);const v=1/(M+C+S);return d=C*v,h=S*v,i.copy(r).addScaledVector(ds,d).addScaledVector(hs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},rc={h:0,s:0,l:0};function ud(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ve{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=we.workingColorSpace){if(e=HS(e,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=ud(d,u,e+1/3),this.g=ud(d,u,e),this.b=ud(d,u,e-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(e,i=ti){function r(u){u!==void 0&&parseFloat(u)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const r=vg[e.toLowerCase()];return r!==void 0?this.setHex(r,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return we.workingToColorSpace(wn.copy(this),e),Math.round(ye(wn.r*255,0,255))*65536+Math.round(ye(wn.g*255,0,255))*256+Math.round(ye(wn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ti){we.workingToColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+i,Va.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Va),e.getHSL(rc);const r=Wf(Va.h,rc.h,i),l=Wf(Va.s,rc.s,i),u=Wf(Va.l,rc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ve;Ve.NAMES=vg;let eM=0;class Cc extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=_s,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sd&&(r.blendSrc=this.blendSrc),this.blendDst!==Md&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==px&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sg extends Cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new ct,sc=new Ee;let nM=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=mx,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(e),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mx&&(e.usage=this.usage),e}}class Mg extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class yg extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class br extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let iM=0;const fi=new pn,fd=new ni,ps=new ct,$n=new Bo,Ro=new Bo,Mn=new ct;class Za extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?yg:Mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new br(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ro.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors($n.min,Ro.min),$n.expandByPoint(Mn),Mn.addVectors($n.max,Ro.max),$n.expandByPoint(Mn)):($n.expandByPoint(Ro.min),$n.expandByPoint(Ro.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Mn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Mn.fromBufferAttribute(h,p),m&&(ps.fromBufferAttribute(e,p),Mn.add(ps)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new ct,m[K]=new ct;const p=new ct,_=new ct,g=new ct,S=new Ee,y=new Ee,A=new Ee,C=new ct,M=new ct;function v(K,D,R){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,D),g.fromBufferAttribute(r,R),S.fromBufferAttribute(u,K),y.fromBufferAttribute(u,D),A.fromBufferAttribute(u,R),_.sub(p),g.sub(p),y.sub(S),A.sub(S);const H=1/(y.x*A.y-A.x*y.y);isFinite(H)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(g,-y.y).multiplyScalar(H),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-A.x).multiplyScalar(H),h[K].add(C),h[D].add(C),h[R].add(C),m[K].add(M),m[D].add(M),m[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let K=0,D=B.length;K<D;++K){const R=B[K],H=R.start,Y=R.count;for(let st=H,ut=H+Y;st<ut;st+=3)v(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const U=new ct,F=new ct,X=new ct,N=new ct;function O(K){X.fromBufferAttribute(l,K),N.copy(X);const D=h[K];U.copy(D),U.sub(X.multiplyScalar(X.dot(D))).normalize(),F.crossVectors(N,D);const H=F.dot(m[K])<0?-1:1;d.setXYZW(K,U.x,U.y,U.z,H)}for(let K=0,D=B.length;K<D;++K){const R=B[K],H=R.start,Y=R.count;for(let st=H,ut=H+Y;st<ut;st+=3)O(e.getX(st+0)),O(e.getX(st+1)),O(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new ct,u=new ct,d=new ct,h=new ct,m=new ct,p=new ct,_=new ct,g=new ct;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),C=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?y=m[C]*h.data.stride+h.offset:y=m[C]*_;for(let v=0;v<_;v++)S[A++]=p[y++]}return new wi(S,_,g)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Za,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=e(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wx=new pn,mr=new ZS,oc=new vh,Ux=new ct,lc=new ct,cc=new ct,uc=new ct,dd=new ct,fc=new ct,Lx=new ct,dc=new ct;class da extends ni{constructor(e=new Za,i=new Sg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){fc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(dd.fromBufferAttribute(g,e),d?fc.addScaledVector(dd,_):fc.addScaledVector(dd.sub(i),_))}i.add(fc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),oc.copy(r.boundingSphere),oc.applyMatrix4(u),mr.copy(e.ray).recast(e.near),!(oc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(oc,Ux)===null||mr.origin.distanceToSquared(Ux)>(e.far-e.near)**2))&&(wx.copy(u).invert(),mr.copy(e.ray).applyMatrix4(wx),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],v=d[M.materialIndex],B=Math.max(M.start,y.start),U=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let F=B,X=U;F<X;F+=3){const N=h.getX(F),O=h.getX(F+1),K=h.getX(F+2);l=hc(this,v,e,r,p,_,g,N,O,K),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let M=A,v=C;M<v;M+=3){const B=h.getX(M),U=h.getX(M+1),F=h.getX(M+2);l=hc(this,d,e,r,p,_,g,B,U,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const M=S[A],v=d[M.materialIndex],B=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let F=B,X=U;F<X;F+=3){const N=F,O=F+1,K=F+2;l=hc(this,v,e,r,p,_,g,N,O,K),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,v=C;M<v;M+=3){const B=M,U=M+1,F=M+2;l=hc(this,d,e,r,p,_,g,B,U,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function aM(o,e,i,r,l,u,d,h){let m;if(e.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ya,h),m===null)return null;dc.copy(h),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function hc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,lc),o.getVertexPosition(m,cc),o.getVertexPosition(p,uc);const _=aM(o,e,i,r,lc,cc,uc,Lx);if(_){const g=new ct;Mi.getBarycoord(Lx,lc,cc,uc,g),l&&(_.uv=Mi.getInterpolatedAttribute(l,h,m,p,g,new Ee)),u&&(_.uv1=Mi.getInterpolatedAttribute(u,h,m,p,g,new Ee)),d&&(_.normal=Mi.getInterpolatedAttribute(d,h,m,p,g,new ct),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ct,materialIndex:0};Mi.getNormal(lc,cc,uc,S.normal),_.face=S,_.barycoord=g}return _}class Fo extends Za{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new br(p,3)),this.setAttribute("normal",new br(_,3)),this.setAttribute("uv",new br(g,2));function A(C,M,v,B,U,F,X,N,O,K,D){const R=F/O,H=X/K,Y=F/2,st=X/2,ut=N/2,ft=O+1,P=K+1;let j=0,W=0;const pt=new ct;for(let _t=0;_t<P;_t++){const L=_t*H-st;for(let it=0;it<ft;it++){const vt=it*R-Y;pt[C]=vt*B,pt[M]=L*U,pt[v]=ut,p.push(pt.x,pt.y,pt.z),pt[C]=0,pt[M]=0,pt[v]=N>0?1:-1,_.push(pt.x,pt.y,pt.z),g.push(it/O),g.push(1-_t/K),j+=1}}for(let _t=0;_t<K;_t++)for(let L=0;L<O;L++){const it=S+L+ft*_t,vt=S+L+ft*(_t+1),Et=S+(L+1)+ft*(_t+1),Nt=S+(L+1)+ft*_t;m.push(it,vt,Nt),m.push(vt,Et,Nt),W+=6}h.addGroup(y,W,D),y+=W,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Ln(o){const e={};for(let i=0;i<o.length;i++){const r=Es(o[i]);for(const l in r)e[l]=r[l]}return e}function rM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function bg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const sM={clone:Es,merge:Ln};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Cc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=lM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Eg extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new ct,Nx=new Ee,Ox=new Ee;class Si extends Eg{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,Nx,Ox),i.subVectors(Ox,Nx)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,xs=1;class cM extends ni{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(ms,xs,e,i);l.layers=this.layers,this.add(l);const u=new Si(ms,xs,e,i);u.layers=this.layers,this.add(u);const d=new Si(ms,xs,e,i);d.layers=this.layers,this.add(d);const h=new Si(ms,xs,e,i);h.layers=this.layers,this.add(h);const m=new Si(ms,xs,e,i);m.layers=this.layers,this.add(m);const p=new Si(ms,xs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,S,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Tg extends Nn{constructor(e=[],i=Ms,r,l,u,d,h,m,p,_){super(e,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uM extends Tr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Tg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fo(5,5,5),u=new Ui({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:la});u.uniforms.tEquirect.value=i;const d=new da(l,u),h=i.minFilter;return i.minFilter===yr&&(i.minFilter=di),new cM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class pc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),v=this._getHandJoint(p,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new pc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class dM extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class hM extends Nn{constructor(e=null,i=1,r=1,l,u,d,h,m,p=ei,_=ei,g,S){super(null,d,h,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new ct,pM=new ct,mM=new ue;class vr{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=pd.subVectors(r,i).cross(pM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(pd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||mM.getNormalMatrix(e),l=this.coplanarPoint(pd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new vh,xM=new Ee(.5,.5),mc=new ct;class Ag{constructor(e=new vr,i=new vr,r=new vr,l=new vr,u=new vr,d=new vr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Di,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],y=u[7],A=u[8],C=u[9],M=u[10],v=u[11],B=u[12],U=u[13],F=u[14],X=u[15];if(l[0].setComponents(p-d,y-_,v-A,X-B).normalize(),l[1].setComponents(p+d,y+_,v+A,X+B).normalize(),l[2].setComponents(p+h,y+g,v+C,X+U).normalize(),l[3].setComponents(p-h,y-g,v-C,X-U).normalize(),r)l[4].setComponents(m,S,M,F).normalize(),l[5].setComponents(p-m,y-S,v-M,X-F).normalize();else if(l[4].setComponents(p-m,y-S,v-M,X-F).normalize(),i===Di)l[5].setComponents(p+m,y+S,v+M,X+F).normalize();else if(i===Tc)l[5].setComponents(m,S,M,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const i=xM.distanceTo(e.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mc.x=l.normal.x>0?e.max.x:e.min.x,mc.y=l.normal.y>0?e.max.y:e.min.y,mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rg extends Nn{constructor(e,i,r=Er,l,u,d,h=ei,m=ei,p,_=Lo,g=1){if(_!==Lo&&_!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cg extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Io extends Za{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=e/h,S=i/m,y=[],A=[],C=[],M=[];for(let v=0;v<_;v++){const B=v*S-d;for(let U=0;U<p;U++){const F=U*g-u;A.push(F,-B,0),C.push(0,0,1),M.push(U/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let B=0;B<h;B++){const U=B+p*v,F=B+p*(v+1),X=B+1+p*(v+1),N=B+1+p*v;y.push(U,F,N),y.push(F,X,N)}this.setIndex(y),this.setAttribute("position",new br(A,3)),this.setAttribute("normal",new br(C,3)),this.setAttribute("uv",new br(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.widthSegments,e.heightSegments)}}class gM extends Cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends Cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dg extends Eg{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class vM extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class SM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Px(o,e,i,r){const l=MM(r);switch(i){case dg:return o*e;case pg:return o*e/l.components*l.byteLength;case ph:return o*e/l.components*l.byteLength;case mh:return o*e*2/l.components*l.byteLength;case xh:return o*e*2/l.components*l.byteLength;case hg:return o*e*3/l.components*l.byteLength;case yi:return o*e*4/l.components*l.byteLength;case gh:return o*e*4/l.components*l.byteLength;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Od:case zd:return Math.max(o,16)*Math.max(e,8)/4;case Nd:case Pd:return Math.max(o,8)*Math.max(e,8)/2;case Bd:case Fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case th:case eh:case nh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ih:case ah:return Math.ceil(o/4)*Math.ceil(e/4)*8;case rh:case sh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MM(o){switch(o){case ua:case lg:return{byteLength:1,components:1};case wo:case cg:case Ts:return{byteLength:2,components:1};case dh:case hh:return{byteLength:2,components:4};case Er:case fh:case oa:return{byteLength:4,components:1};case ug:case fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function wg(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function yM(o){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<g.length;y++){const A=g[S],C=g[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,g[S]=C)}g.length=S+1;for(let y=0,A=g.length;y<A;y++){const C=g[y];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zM=`#ifdef USE_IRIDESCENCE
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
#endif`,BM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ZM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
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
}`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,my=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,My=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,yy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ly=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,By=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ib=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gb=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Db=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ub=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ib=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Gb=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,qb=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,$b=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,e3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:bM,alphahash_pars_fragment:EM,alphamap_fragment:TM,alphamap_pars_fragment:AM,alphatest_fragment:RM,alphatest_pars_fragment:CM,aomap_fragment:DM,aomap_pars_fragment:wM,batching_pars_vertex:UM,batching_vertex:LM,begin_vertex:NM,beginnormal_vertex:OM,bsdfs:PM,iridescence_fragment:zM,bumpmap_pars_fragment:BM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:GM,color_fragment:VM,color_pars_fragment:XM,color_pars_vertex:kM,color_vertex:qM,common:WM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:jM,displacementmap_vertex:KM,emissivemap_fragment:QM,emissivemap_pars_fragment:JM,colorspace_fragment:$M,colorspace_pars_fragment:ty,envmap_fragment:ey,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:ay,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:sy,fog_pars_vertex:oy,fog_fragment:ly,fog_pars_fragment:cy,gradientmap_pars_fragment:uy,lightmap_pars_fragment:fy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:hy,lights_pars_begin:py,lights_toon_fragment:xy,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:Sy,lights_physical_pars_fragment:My,lights_fragment_begin:yy,lights_fragment_maps:by,lights_fragment_end:Ey,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:Cy,map_fragment:Dy,map_pars_fragment:wy,map_particle_fragment:Uy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Oy,morphinstance_vertex:Py,morphcolor_vertex:zy,morphnormal_vertex:By,morphtarget_pars_vertex:Fy,morphtarget_vertex:Iy,normal_fragment_begin:Hy,normal_fragment_maps:Gy,normal_pars_fragment:Vy,normal_pars_vertex:Xy,normal_vertex:ky,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:jy,opaque_fragment:Ky,packing:Qy,premultiplied_alpha_fragment:Jy,project_vertex:$y,dithering_fragment:tb,dithering_pars_fragment:eb,roughnessmap_fragment:nb,roughnessmap_pars_fragment:ib,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:rb,shadowmap_vertex:sb,shadowmask_pars_fragment:ob,skinbase_vertex:lb,skinning_pars_vertex:cb,skinning_vertex:ub,skinnormal_vertex:fb,specularmap_fragment:db,specularmap_pars_fragment:hb,tonemapping_fragment:pb,tonemapping_pars_fragment:mb,transmission_fragment:xb,transmission_pars_fragment:gb,uv_pars_fragment:_b,uv_pars_vertex:vb,uv_vertex:Sb,worldpos_vertex:Mb,background_vert:yb,background_frag:bb,backgroundCube_vert:Eb,backgroundCube_frag:Tb,cube_vert:Ab,cube_frag:Rb,depth_vert:Cb,depth_frag:Db,distanceRGBA_vert:wb,distanceRGBA_frag:Ub,equirect_vert:Lb,equirect_frag:Nb,linedashed_vert:Ob,linedashed_frag:Pb,meshbasic_vert:zb,meshbasic_frag:Bb,meshlambert_vert:Fb,meshlambert_frag:Ib,meshmatcap_vert:Hb,meshmatcap_frag:Gb,meshnormal_vert:Vb,meshnormal_frag:Xb,meshphong_vert:kb,meshphong_frag:qb,meshphysical_vert:Wb,meshphysical_frag:Yb,meshtoon_vert:Zb,meshtoon_frag:jb,points_vert:Kb,points_frag:Qb,shadow_vert:Jb,shadow_frag:$b,sprite_vert:t3,sprite_frag:e3},Lt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ci={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ci.physical={uniforms:Ln([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const xc={r:0,b:0,g:0},gr=new fa,n3=new pn;function i3(o,e,i,r,l,u,d){const h=new Ve(0);let m=u===!0?0:1,p,_,g=null,S=0,y=null;function A(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?i:e).get(F)),F}function C(U){let F=!1;const X=A(U);X===null?v(h,m):X&&X.isColor&&(v(X,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,F){const X=A(F);X&&(X.isCubeTexture||X.mapping===Rc)?(_===void 0&&(_=new da(new Fo(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Es(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,O,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),gr.copy(F.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(n3.makeRotationFromEuler(gr)),_.material.toneMapped=we.getTransfer(X.colorSpace)!==Ge,(g!==X||S!==X.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new da(new Io(2,2),new Ui({name:"BackgroundMaterial",uniforms:Es(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=we.getTransfer(X.colorSpace)!==Ge,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||S!==X.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=X,S=X.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,F){U.getRGB(xc,bg(o)),r.buffers.color.setClear(xc.r,xc.g,xc.b,F,d)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,F=1){h.set(U),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:C,addToRenderList:M,dispose:B}}function a3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(R,H,Y,st,ut){let ft=!1;const P=g(st,Y,H);u!==P&&(u=P,p(u.object)),ft=y(R,st,Y,ut),ft&&A(R,st,Y,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,F(R,H,Y,st),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,H,Y){const st=Y.wireframe===!0;let ut=r[R.id];ut===void 0&&(ut={},r[R.id]=ut);let ft=ut[H.id];ft===void 0&&(ft={},ut[H.id]=ft);let P=ft[st];return P===void 0&&(P=S(m()),ft[st]=P),P}function S(R){const H=[],Y=[],st=[];for(let ut=0;ut<i;ut++)H[ut]=0,Y[ut]=0,st[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:st,object:R,attributes:{},index:null}}function y(R,H,Y,st){const ut=u.attributes,ft=H.attributes;let P=0;const j=Y.getAttributes();for(const W in j)if(j[W].location>=0){const _t=ut[W];let L=ft[W];if(L===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),_t===void 0||_t.attribute!==L||L&&_t.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==st}function A(R,H,Y,st){const ut={},ft=H.attributes;let P=0;const j=Y.getAttributes();for(const W in j)if(j[W].location>=0){let _t=ft[W];_t===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor));const L={};L.attribute=_t,_t&&_t.data&&(L.data=_t.data),ut[W]=L,P++}u.attributes=ut,u.attributesNum=P,u.index=st}function C(){const R=u.newAttributes;for(let H=0,Y=R.length;H<Y;H++)R[H]=0}function M(R){v(R,0)}function v(R,H){const Y=u.newAttributes,st=u.enabledAttributes,ut=u.attributeDivisors;Y[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),ut[R]!==H&&(o.vertexAttribDivisor(R,H),ut[R]=H)}function B(){const R=u.newAttributes,H=u.enabledAttributes;for(let Y=0,st=H.length;Y<st;Y++)H[Y]!==R[Y]&&(o.disableVertexAttribArray(Y),H[Y]=0)}function U(R,H,Y,st,ut,ft,P){P===!0?o.vertexAttribIPointer(R,H,Y,ut,ft):o.vertexAttribPointer(R,H,Y,st,ut,ft)}function F(R,H,Y,st){C();const ut=st.attributes,ft=Y.getAttributes(),P=H.defaultAttributeValues;for(const j in ft){const W=ft[j];if(W.location>=0){let pt=ut[j];if(pt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor)),pt!==void 0){const _t=pt.normalized,L=pt.itemSize,it=e.get(pt);if(it===void 0)continue;const vt=it.buffer,Et=it.type,Nt=it.bytesPerElement,nt=Et===o.INT||Et===o.UNSIGNED_INT||pt.gpuType===fh;if(pt.isInterleavedBufferAttribute){const lt=pt.data,Ct=lt.stride,It=pt.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<W.locationSize;Xt++)v(W.location+Xt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<W.locationSize;Xt++)M(W.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let Xt=0;Xt<W.locationSize;Xt++)U(W.location+Xt,L/W.locationSize,Et,_t,Ct*Nt,(It+L/W.locationSize*Xt)*Nt,nt)}else{if(pt.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)v(W.location+lt,pt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let lt=0;lt<W.locationSize;lt++)M(W.location+lt);o.bindBuffer(o.ARRAY_BUFFER,vt);for(let lt=0;lt<W.locationSize;lt++)U(W.location+lt,L/W.locationSize,Et,_t,L*Nt,L/W.locationSize*lt*Nt,nt)}}else if(P!==void 0){const _t=P[j];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(W.location,_t);break;case 3:o.vertexAttrib3fv(W.location,_t);break;case 4:o.vertexAttrib4fv(W.location,_t);break;default:o.vertexAttrib1fv(W.location,_t)}}}}B()}function X(){K();for(const R in r){const H=r[R];for(const Y in H){const st=H[Y];for(const ut in st)_(st[ut].object),delete st[ut];delete H[Y]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const Y in H){const st=H[Y];for(const ut in st)_(st[ut].object),delete st[ut];delete H[Y]}delete r[R.id]}function O(R){for(const H in r){const Y=r[H];if(Y[R.id]===void 0)continue;const st=Y[R.id];for(const ut in st)_(st[ut].object),delete st[ut];delete Y[R.id]}}function K(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function r3(o,e,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let A=0;A<g;A++)y+=_[A];i.update(y,r,1)}function m(p,_,g,S){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)d(p[A],_[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let A=0;for(let C=0;C<g;C++)A+=_[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function s3(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==yi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const K=O===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ua&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==oa&&!K)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(se("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:B,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:X,maxSamples:N}}function o3(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new vr,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||l;return l=S,r=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,y){const A=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,v=o.get(g);if(!l||A===null||A.length===0||u&&!M)u?_(null):p();else{const B=u?0:r,U=B*4;let F=v.clippingState||null;m.value=F,F=_(A,S,U,y);for(let X=0;X!==U;++X)F[X]=i[X];v.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,S,y,A){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const v=y+C*4,B=S.matrixWorldInverse;h.getNormalMatrix(B),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,F=y;U!==C;++U,F+=4)d.copy(g[U]).applyMatrix4(B,h),d.normal.toArray(M,F),M[F+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function l3(o){let e=new WeakMap;function i(d,h){return h===Dd?d.mapping=Ms:h===wd&&(d.mapping=ys),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Dd||h===wd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new uM(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const qa=4,zx=[.125,.215,.35,.446,.526,.582],Mr=20,c3=256,Co=new Dg,Bx=new Ve;let md=null,xd=0,gd=0,_d=!1;const u3=new ct;class Fx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=u3}=u;md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(md,xd,gd),this._renderer.xr.enabled=_d,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ts,format:yi,colorSpace:bs,depthBuffer:!1},l=Ix(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ix(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f3(u)),this._blurMaterial=h3(u,e,i)}return l}_compileMaterial(e){const i=new da(new Za,e);this._renderer.compile(i,Co)}_sceneToCubeUV(e,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Bx),g.toneMapping=Wa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new da(new Fo,new Sg({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const B=e.background;B?B.isColor&&(M.color.copy(B),e.background=null,v=!0):(M.color.copy(Bx),v=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):F===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const X=this._cubeSize;gs(l,F*X,U>2?X:0,X,X),g.setRenderTarget(l),v&&g.render(C,m),g.render(e,m)}g.toneMapping=y,g.autoClear=S,e.background=B}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;gs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Co)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const B=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=d3(this._lodMax,B,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=.05+p*.95,y=g*S,{_lodMax:A}=this,C=this._sizeLods[r],M=3*C*(r>A-qa?r-A+qa:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=A-i,gs(u,M,v,3*C,2*C),l.setRenderTarget(u),l.render(h,Co),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,gs(e,M,v,3*C,2*C),l.setRenderTarget(e),l.render(h,Co)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Mr-1),C=u/A,M=isFinite(u)?1+Math.floor(_*C):Mr;M>Mr&&se(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Mr}`);const v=[];let B=0;for(let O=0;O<Mr;++O){const K=O/C,D=Math.exp(-K*K/2);v.push(D),O===0?B+=D:O<M&&(B+=2*D)}for(let O=0;O<v.length;O++)v[O]=v[O]/B;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-r;const F=this._sizeLods[l],X=3*F*(l>U-qa?l-U+qa:0),N=4*(this._cubeSize-F);gs(i,X,N,3*F,2*F),m.setRenderTarget(i),m.render(g,Co)}}function f3(o){const e=[],i=[],r=[];let l=o;const u=o-qa+1+zx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-qa?m=zx[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,A=6,C=3,M=2,v=1,B=new Float32Array(C*A*y),U=new Float32Array(M*A*y),F=new Float32Array(v*A*y);for(let N=0;N<y;N++){const O=N%3*2/3-1,K=N>2?0:-1,D=[O,K,0,O+2/3,K,0,O+2/3,K+1,0,O,K,0,O+2/3,K+1,0,O,K+1,0];B.set(D,C*A*N),U.set(S,M*A*N);const R=[N,N,N,N,N,N];F.set(R,v*A*N)}const X=new Za;X.setAttribute("position",new wi(B,C)),X.setAttribute("uv",new wi(U,M)),X.setAttribute("faceIndex",new wi(F,v)),r.push(new da(X,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Ix(o,e,i){const r=new Tr(o,e,i);return r.texture.mapping=Rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function d3(o,e,i){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function h3(o,e,i){const r=new Float32Array(Mr),l=new ct(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function Hx(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function Gx(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function p3(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Dd||m===wd,_=m===Ms||m===ys;if(p||_){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Fx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Fx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function m3(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Oo("WebGLRenderer: "+r+" extension not supported."),l}}}function x3(o,e,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,A=g.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let U=0,F=B.length;U<F;U+=3){const X=B[U+0],N=B[U+1],O=B[U+2];S.push(X,N,N,O,O,X)}}else if(A!==void 0){const B=A.array;C=A.version;for(let U=0,F=B.length/3-1;U<F;U+=3){const X=U+0,N=U+1,O=U+2;S.push(X,N,N,O,O,X)}}else return;const M=new(xg(S)?yg:Mg)(S,1);M.version=C;const v=u.get(g);v&&e.remove(v),u.set(g,M)}function _(g){const S=u.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function g3(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function p(S,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,S*d,A),i.update(y,r,A))}function _(S,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,A);let M=0;for(let v=0;v<A;v++)M+=y[v];i.update(M,r,1)}function g(S,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<S.length;v++)p(S[v]/d,y[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,C,0,A);let v=0;for(let B=0;B<A;B++)v+=y[B]*C[B];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function _3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:nn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function v3(o,e,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let R=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let F=0;A===!0&&(F=1),C===!0&&(F=2),M===!0&&(F=3);let X=h.attributes.position.count*F,N=1;X>e.maxTextureSize&&(N=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const O=new Float32Array(X*N*4*g),K=new gg(O,X,N,g);K.type=oa,K.needsUpdate=!0;const D=F*4;for(let H=0;H<g;H++){const Y=v[H],st=B[H],ut=U[H],ft=X*N*4*H;for(let P=0;P<Y.count;P++){const j=P*D;A===!0&&(l.fromBufferAttribute(Y,P),O[ft+j+0]=l.x,O[ft+j+1]=l.y,O[ft+j+2]=l.z,O[ft+j+3]=0),C===!0&&(l.fromBufferAttribute(st,P),O[ft+j+4]=l.x,O[ft+j+5]=l.y,O[ft+j+6]=l.z,O[ft+j+7]=0),M===!0&&(l.fromBufferAttribute(ut,P),O[ft+j+8]=l.x,O[ft+j+9]=l.y,O[ft+j+10]=l.z,O[ft+j+11]=ut.itemSize===4?l.w:1)}}S={count:g,texture:K,size:new Ee(X,N)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function S3(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Ug=new Nn,Vx=new Rg(1,1),Lg=new gg,Ng=new WS,Og=new Tg,Xx=[],kx=[],qx=new Float32Array(16),Wx=new Float32Array(9),Yx=new Float32Array(4);function Rs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Xx[l];if(u===void 0&&(u=new Float32Array(l),Xx[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function wc(o,e){let i=kx[e];i===void 0&&(i=new Int32Array(e),kx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function M3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function y3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function b3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function E3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function T3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;Yx.set(r),o.uniformMatrix2fv(this.addr,!1,Yx),xn(i,r)}}function A3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;Wx.set(r),o.uniformMatrix3fv(this.addr,!1,Wx),xn(i,r)}}function R3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;qx.set(r),o.uniformMatrix4fv(this.addr,!1,qx),xn(i,r)}}function C3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function D3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function w3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function U3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function L3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function N3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function O3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function P3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function z3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Vx.compareFunction=mg,u=Vx):u=Ug,i.setTexture2D(e||u,l)}function B3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ng,l)}function F3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Og,l)}function I3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Lg,l)}function H3(o){switch(o){case 5126:return M3;case 35664:return y3;case 35665:return b3;case 35666:return E3;case 35674:return T3;case 35675:return A3;case 35676:return R3;case 5124:case 35670:return C3;case 35667:case 35671:return D3;case 35668:case 35672:return w3;case 35669:case 35673:return U3;case 5125:return L3;case 36294:return N3;case 36295:return O3;case 36296:return P3;case 35678:case 36198:case 36298:case 36306:case 35682:return z3;case 35679:case 36299:case 36307:return B3;case 35680:case 36300:case 36308:case 36293:return F3;case 36289:case 36303:case 36311:case 36292:return I3}}function G3(o,e){o.uniform1fv(this.addr,e)}function V3(o,e){const i=Rs(e,this.size,2);o.uniform2fv(this.addr,i)}function X3(o,e){const i=Rs(e,this.size,3);o.uniform3fv(this.addr,i)}function k3(o,e){const i=Rs(e,this.size,4);o.uniform4fv(this.addr,i)}function q3(o,e){const i=Rs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function W3(o,e){const i=Rs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Y3(o,e){const i=Rs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Z3(o,e){o.uniform1iv(this.addr,e)}function j3(o,e){o.uniform2iv(this.addr,e)}function K3(o,e){o.uniform3iv(this.addr,e)}function Q3(o,e){o.uniform4iv(this.addr,e)}function J3(o,e){o.uniform1uiv(this.addr,e)}function $3(o,e){o.uniform2uiv(this.addr,e)}function t1(o,e){o.uniform3uiv(this.addr,e)}function e1(o,e){o.uniform4uiv(this.addr,e)}function n1(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Ug,u[d])}function i1(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Ng,u[d])}function a1(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Og,u[d])}function r1(o,e,i){const r=this.cache,l=e.length,u=wc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Lg,u[d])}function s1(o){switch(o){case 5126:return G3;case 35664:return V3;case 35665:return X3;case 35666:return k3;case 35674:return q3;case 35675:return W3;case 35676:return Y3;case 5124:case 35670:return Z3;case 35667:case 35671:return j3;case 35668:case 35672:return K3;case 35669:case 35673:return Q3;case 5125:return J3;case 36294:return $3;case 36295:return t1;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return r1}}class o1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=H3(i.type)}}class l1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=s1(i.type)}}class c1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Zx(o,e){o.seq.push(e),o.map[e.id]=e}function u1(o,e,i){const r=o.name,l=r.length;for(vd.lastIndex=0;;){const u=vd.exec(r),d=vd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Zx(i,p===void 0?new o1(h,o,e):new l1(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new c1(h),Zx(i,g)),i=g}}}class yc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);u1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function jx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const f1=37297;let d1=0;function h1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Kx=new ue;function p1(o){we._getMatrix(Kx,we.workingColorSpace,o);const e=`mat3( ${Kx.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Qx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+h1(o.getShaderSource(e),h)}else return u}function m1(o,e){const i=p1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function x1(o,e){let i;switch(e){case vS:i="Linear";break;case SS:i="Reinhard";break;case MS:i="Cineon";break;case yS:i="ACESFilmic";break;case ES:i="AgX";break;case TS:i="Neutral";break;case bS:i="Custom";break;default:se("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gc=new ct;function g1(){we.getLuminanceCoefficients(gc);const o=gc.x.toFixed(4),e=gc.y.toFixed(4),i=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function v1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function S1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Do(o){return o!==""}function Jx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $x(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(o){return o.replace(M1,b1)}const y1=new Map;function b1(o,e){let i=he[e];if(i===void 0){const r=y1.get(e);if(r!==void 0)i=he[r],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lh(i)}const E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(o){return o.replace(E1,T1)}function T1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function eg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function A1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function R1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case ys:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function D1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case sg:e="ENVMAP_BLENDING_MULTIPLY";break;case gS:e="ENVMAP_BLENDING_MIX";break;case _S:e="ENVMAP_BLENDING_ADD";break}return e}function w1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function U1(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=A1(i),p=R1(i),_=C1(i),g=D1(i),S=w1(i),y=_1(i),A=v1(u),C=l.createProgram();let M,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(M=[eg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[eg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?he.tonemapping_pars_fragment:"",i.toneMapping!==Wa?x1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,m1("linearToOutputTexel",i.outputColorSpace),g1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),d=lh(d),d=Jx(d,i),d=$x(d,i),h=lh(h),h=Jx(h,i),h=$x(h,i),d=tg(d),h=tg(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=B+M+d,F=B+v+h,X=jx(l,l.VERTEX_SHADER,U),N=jx(l,l.FRAGMENT_SHADER,F);l.attachShader(C,X),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(H){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(C)||"",st=l.getShaderInfoLog(X)||"",ut=l.getShaderInfoLog(N)||"",ft=Y.trim(),P=st.trim(),j=ut.trim();let W=!0,pt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,N);else{const _t=Qx(l,X,"vertex"),L=Qx(l,N,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ft+`
`+_t+`
`+L)}else ft!==""?se("WebGLProgram: Program Info Log:",ft):(P===""||j==="")&&(pt=!1);pt&&(H.diagnostics={runnable:W,programLog:ft,vertexShader:{log:P,prefix:M},fragmentShader:{log:j,prefix:v}})}l.deleteShader(X),l.deleteShader(N),K=new yc(l,C),D=S1(l,C)}let K;this.getUniforms=function(){return K===void 0&&O(this),K};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,f1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=N,this}let L1=0;class N1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new O1(e),i.set(e,r)),r}}class O1{constructor(e){this.id=L1++,this.code=e,this.usedTimes=0}}function P1(o,e,i,r,l,u,d){const h=new _g,m=new N1,p=new Set,_=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,R,H,Y,st){const ut=Y.fog,ft=st.geometry,P=D.isMeshStandardMaterial?Y.environment:null,j=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),W=j&&j.mapping===Rc?j.image.height:null,pt=A[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&se("WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const _t=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=_t!==void 0?_t.length:0;let it=0;ft.morphAttributes.position!==void 0&&(it=1),ft.morphAttributes.normal!==void 0&&(it=2),ft.morphAttributes.color!==void 0&&(it=3);let vt,Et,Nt,nt;if(pt){const Ae=Ci[pt];vt=Ae.vertexShader,Et=Ae.fragmentShader}else vt=D.vertexShader,Et=D.fragmentShader,m.update(D),Nt=m.getVertexShaderID(D),nt=m.getFragmentShaderID(D);const lt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),It=st.isInstancedMesh===!0,Xt=st.isBatchedMesh===!0,oe=!!D.map,$e=!!D.matcap,fe=!!j,Te=!!D.aoMap,I=!!D.lightMap,de=!!D.bumpMap,pe=!!D.normalMap,Ne=!!D.displacementMap,Ht=!!D.emissiveMap,Xe=!!D.metalnessMap,Yt=!!D.roughnessMap,ie=D.anisotropy>0,w=D.clearcoat>0,b=D.dispersion>0,J=D.iridescence>0,mt=D.sheen>0,St=D.transmission>0,ot=ie&&!!D.anisotropyMap,qt=w&&!!D.clearcoatMap,Ut=w&&!!D.clearcoatNormalMap,Kt=w&&!!D.clearcoatRoughnessMap,kt=J&&!!D.iridescenceMap,Mt=J&&!!D.iridescenceThicknessMap,bt=mt&&!!D.sheenColorMap,Wt=mt&&!!D.sheenRoughnessMap,Gt=!!D.specularMap,Ot=!!D.specularColorMap,ee=!!D.specularIntensityMap,G=St&&!!D.transmissionMap,Dt=St&&!!D.thicknessMap,At=!!D.gradientMap,Rt=!!D.alphaMap,yt=D.alphaTest>0,gt=!!D.alphaHash,zt=!!D.extensions;let ne=Wa;D.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Be={shaderID:pt,shaderType:D.type,shaderName:D.name,vertexShader:vt,fragmentShader:Et,defines:D.defines,customVertexShaderID:Nt,customFragmentShaderID:nt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&st._colorsTexture!==null,instancing:It,instancingColor:It&&st.instanceColor!==null,instancingMorph:It&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:bs,alphaToCoverage:!!D.alphaToCoverage,map:oe,matcap:$e,envMap:fe,envMapMode:fe&&j.mapping,envMapCubeUVHeight:W,aoMap:Te,lightMap:I,bumpMap:de,normalMap:pe,displacementMap:S&&Ne,emissiveMap:Ht,normalMapObjectSpace:pe&&D.normalMapType===wS,normalMapTangentSpace:pe&&D.normalMapType===DS,metalnessMap:Xe,roughnessMap:Yt,anisotropy:ie,anisotropyMap:ot,clearcoat:w,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:J,iridescenceMap:kt,iridescenceThicknessMap:Mt,sheen:mt,sheenColorMap:bt,sheenRoughnessMap:Wt,specularMap:Gt,specularColorMap:Ot,specularIntensityMap:ee,transmission:St,transmissionMap:G,thicknessMap:Dt,gradientMap:At,opaque:D.transparent===!1&&D.blending===_s&&D.alphaToCoverage===!1,alphaMap:Rt,alphaTest:yt,alphaHash:gt,combine:D.combine,mapUv:oe&&C(D.map.channel),aoMapUv:Te&&C(D.aoMap.channel),lightMapUv:I&&C(D.lightMap.channel),bumpMapUv:de&&C(D.bumpMap.channel),normalMapUv:pe&&C(D.normalMap.channel),displacementMapUv:Ne&&C(D.displacementMap.channel),emissiveMapUv:Ht&&C(D.emissiveMap.channel),metalnessMapUv:Xe&&C(D.metalnessMap.channel),roughnessMapUv:Yt&&C(D.roughnessMap.channel),anisotropyMapUv:ot&&C(D.anisotropyMap.channel),clearcoatMapUv:qt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&C(D.sheenRoughnessMap.channel),specularMapUv:Gt&&C(D.specularMap.channel),specularColorMapUv:Ot&&C(D.specularColorMap.channel),specularIntensityMapUv:ee&&C(D.specularIntensityMap.channel),transmissionMapUv:G&&C(D.transmissionMap.channel),thicknessMapUv:Dt&&C(D.thicknessMap.channel),alphaMapUv:Rt&&C(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(pe||ie),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ft.attributes.uv&&(oe||Rt),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ct,skinning:st.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:it,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:oe&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ht&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:zt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&D.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function v(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(B(R,D),U(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function B(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function U(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function F(D){const R=A[D.type];let H;if(R){const Y=Ci[R];H=sM.clone(Y.uniforms)}else H=D.uniforms;return H}function X(D,R){let H;for(let Y=0,st=_.length;Y<st;Y++){const ut=_[Y];if(ut.cacheKey===R){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new U1(o,R,D,u),_.push(H)),H}function N(D){if(--D.usedTimes===0){const R=_.indexOf(D);_[R]=_[_.length-1],_.pop(),D.destroy()}}function O(D){m.remove(D)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:F,acquireProgram:X,releaseProgram:N,releaseShaderCache:O,programs:_,dispose:K}}function z1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function B1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ng(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ig(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g,S,y,A,C,M){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:A,renderOrder:g.renderOrder,z:C,group:M},o[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=A,v.renderOrder=g.renderOrder,v.z=C,v.group=M),e++,v}function h(g,S,y,A,C,M){const v=d(g,S,y,A,C,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,S,y,A,C,M){const v=d(g,S,y,A,C,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||B1),r.length>1&&r.sort(S||ng),l.length>1&&l.sort(S||ng)}function _(){for(let g=e,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function F1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new ig,o.set(r,[d])):l>=u.length?(d=new ig,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function I1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ct,color:new Ve};break;case"SpotLight":i={position:new ct,direction:new ct,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":i={color:new Ve,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function H1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let G1=0;function V1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function X1(o){const e=new I1,i=H1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const l=new ct,u=new pn,d=new pn;function h(p){let _=0,g=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,A=0,C=0,M=0,v=0,B=0,U=0,F=0,X=0,N=0,O=0;p.sort(V1);for(let D=0,R=p.length;D<R;D++){const H=p[D],Y=H.color,st=H.intensity,ut=H.distance,ft=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Y.r*st,g+=Y.g*st,S+=Y.b*st;else if(H.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(H.sh.coefficients[P],st);O++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const j=H.shadow,W=i.get(H);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=H.shadow.matrix,B++}r.directional[y]=P,y++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(Y).multiplyScalar(st),P.distance=ut,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,r.spot[C]=P;const j=H.shadow;if(H.map&&(r.spotLightMap[X]=H.map,X++,j.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[C]=j.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=ft,F++}C++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(Y).multiplyScalar(st),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=P,M++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const j=H.shadow,W=i.get(H);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,r.pointShadow[A]=W,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=H.shadow.matrix,U++}r.point[A]=P,A++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(st),P.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[v]=P,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==y||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==v||K.numDirectionalShadows!==B||K.numPointShadows!==U||K.numSpotShadows!==F||K.numSpotMaps!==X||K.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=F+X-N,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,K.directionalLength=y,K.pointLength=A,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=v,K.numDirectionalShadows=B,K.numPointShadows=U,K.numSpotShadows=F,K.numSpotMaps=X,K.numLightProbes=O,r.version=G1++)}function m(p,_){let g=0,S=0,y=0,A=0,C=0;const M=_.matrixWorldInverse;for(let v=0,B=p.length;v<B;v++){const U=p[v];if(U.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),g++}else if(U.isSpotLight){const F=r.spot[y];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const F=r.rectArea[A];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),d.identity(),u.copy(U.matrixWorld),u.premultiply(M),d.extractRotation(u),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(M),S++}else if(U.isHemisphereLight){const F=r.hemi[C];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:r}}function ag(o){const e=new X1(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function k1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new ag(o),e.set(l,[h])):u>=d.length?(h=new ag(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
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
}`;function Y1(o,e,i){let r=new Ag;const l=new Ee,u=new Ee,d=new an,h=new gM({depthPacking:CS}),m=new _M,p={},_=i.maxTextureSize,g={[Ya]:Vn,[Vn]:Ya,[ra]:ra},S=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:q1,fragmentShader:W1}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Za;A.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new da(A,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg;let v=this.type;this.render=function(N,O,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(la),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const st=v!==aa&&this.type===aa,ut=v===aa&&this.type!==aa;for(let ft=0,P=N.length;ft<P;ft++){const j=N[ft],W=j.shadow;if(W===void 0){se("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const pt=W.getFrameExtents();if(l.multiply(pt),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/pt.x),l.x=u.x*pt.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/pt.y),l.y=u.y*pt.y,W.mapSize.y=u.y)),W.map===null||st===!0||ut===!0){const L=this.type!==aa?{minFilter:ei,magFilter:ei}:{};W.map!==null&&W.map.dispose(),W.map=new Tr(l.x,l.y,L),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const _t=W.getViewportCount();for(let L=0;L<_t;L++){const it=W.getViewport(L);d.set(u.x*it.x,u.y*it.y,u.x*it.z,u.y*it.w),Y.viewport(d),W.updateMatrices(j,L),r=W.getFrustum(),F(O,K,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===aa&&B(W,K),W.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(D,R,H)};function B(N,O){const K=e.update(C);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Tr(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,K,S,C,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,K,y,C,null)}function U(N,O,K,D){let R=null;const H=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=K.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=R.uuid,st=O.uuid;let ut=p[Y];ut===void 0&&(ut={},p[Y]=ut);let ft=ut[st];ft===void 0&&(ft=R.clone(),ut[st]=ft,O.addEventListener("dispose",X)),R=ft}if(R.visible=O.visible,R.wireframe=O.wireframe,D===aa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=o.properties.get(R);Y.light=K}return R}function F(N,O,K,D,R){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===aa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const st=e.update(N),ut=N.material;if(Array.isArray(ut)){const ft=st.groups;for(let P=0,j=ft.length;P<j;P++){const W=ft[P],pt=ut[W.materialIndex];if(pt&&pt.visible){const _t=U(N,pt,D,R);N.onBeforeShadow(o,N,O,K,st,_t,W),o.renderBufferDirect(K,null,st,_t,N,W),N.onAfterShadow(o,N,O,K,st,_t,W)}}}else if(ut.visible){const ft=U(N,ut,D,R);N.onBeforeShadow(o,N,O,K,st,ft,null),o.renderBufferDirect(K,null,st,ft,N,null),N.onAfterShadow(o,N,O,K,st,ft,null)}}const Y=N.children;for(let st=0,ut=Y.length;st<ut;st++)F(Y[st],O,K,D,R)}function X(N){N.target.removeEventListener("dispose",X);for(const K in p){const D=p[K],R=N.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const Z1={[yd]:bd,[Ed]:Rd,[Td]:Cd,[Ss]:Ad,[bd]:yd,[Rd]:Ed,[Cd]:Td,[Ad]:Ss};function j1(o,e){function i(){let G=!1;const Dt=new an;let At=null;const Rt=new an(0,0,0,0);return{setMask:function(yt){At!==yt&&!G&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){G=yt},setClear:function(yt,gt,zt,ne,Be){Be===!0&&(yt*=ne,gt*=ne,zt*=ne),Dt.set(yt,gt,zt,ne),Rt.equals(Dt)===!1&&(o.clearColor(yt,gt,zt,ne),Rt.copy(Dt))},reset:function(){G=!1,At=null,Rt.set(-1,0,0,0)}}}function r(){let G=!1,Dt=!1,At=null,Rt=null,yt=null;return{setReversed:function(gt){if(Dt!==gt){const zt=e.get("EXT_clip_control");gt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Dt=gt;const ne=yt;yt=null,this.setClear(ne)}},getReversed:function(){return Dt},setTest:function(gt){gt?lt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(gt){At!==gt&&!G&&(o.depthMask(gt),At=gt)},setFunc:function(gt){if(Dt&&(gt=Z1[gt]),Rt!==gt){switch(gt){case yd:o.depthFunc(o.NEVER);break;case bd:o.depthFunc(o.ALWAYS);break;case Ed:o.depthFunc(o.LESS);break;case Ss:o.depthFunc(o.LEQUAL);break;case Td:o.depthFunc(o.EQUAL);break;case Ad:o.depthFunc(o.GEQUAL);break;case Rd:o.depthFunc(o.GREATER);break;case Cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=gt}},setLocked:function(gt){G=gt},setClear:function(gt){yt!==gt&&(Dt&&(gt=1-gt),o.clearDepth(gt),yt=gt)},reset:function(){G=!1,At=null,Rt=null,yt=null,Dt=!1}}}function l(){let G=!1,Dt=null,At=null,Rt=null,yt=null,gt=null,zt=null,ne=null,Be=null;return{setTest:function(Ae){G||(Ae?lt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ae){Dt!==Ae&&!G&&(o.stencilMask(Ae),Dt=Ae)},setFunc:function(Ae,Rn,Xn){(At!==Ae||Rt!==Rn||yt!==Xn)&&(o.stencilFunc(Ae,Rn,Xn),At=Ae,Rt=Rn,yt=Xn)},setOp:function(Ae,Rn,Xn){(gt!==Ae||zt!==Rn||ne!==Xn)&&(o.stencilOp(Ae,Rn,Xn),gt=Ae,zt=Rn,ne=Xn)},setLocked:function(Ae){G=Ae},setClear:function(Ae){Be!==Ae&&(o.clearStencil(Ae),Be=Ae)},reset:function(){G=!1,Dt=null,At=null,Rt=null,yt=null,gt=null,zt=null,ne=null,Be=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],A=null,C=!1,M=null,v=null,B=null,U=null,F=null,X=null,N=null,O=new Ve(0,0,0),K=0,D=!1,R=null,H=null,Y=null,st=null,ut=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=j>=2);let pt=null,_t={};const L=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),vt=new an().fromArray(L),Et=new an().fromArray(it);function Nt(G,Dt,At,Rt){const yt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(G,gt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let zt=0;zt<At;zt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Dt+zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return gt}const nt={};nt[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),lt(o.DEPTH_TEST),d.setFunc(Ss),de(!1),pe(ux),lt(o.CULL_FACE),Te(la);function lt(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Ct(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function It(G,Dt){return g[G]!==Dt?(o.bindFramebuffer(G,Dt),g[G]=Dt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Dt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(G,Dt){let At=y,Rt=!1;if(G){At=S.get(Dt),At===void 0&&(At=[],S.set(Dt,At));const yt=G.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,zt=yt.length;gt<zt;gt++)At[gt]=o.COLOR_ATTACHMENT0+gt;At.length=yt.length,Rt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(At)}function oe(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const $e={[Sr]:o.FUNC_ADD,[tS]:o.FUNC_SUBTRACT,[eS]:o.FUNC_REVERSE_SUBTRACT};$e[nS]=o.MIN,$e[iS]=o.MAX;const fe={[aS]:o.ZERO,[rS]:o.ONE,[sS]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[dS]:o.SRC_ALPHA_SATURATE,[uS]:o.DST_COLOR,[lS]:o.DST_ALPHA,[oS]:o.ONE_MINUS_SRC_COLOR,[Md]:o.ONE_MINUS_SRC_ALPHA,[fS]:o.ONE_MINUS_DST_COLOR,[cS]:o.ONE_MINUS_DST_ALPHA,[hS]:o.CONSTANT_COLOR,[pS]:o.ONE_MINUS_CONSTANT_COLOR,[mS]:o.CONSTANT_ALPHA,[xS]:o.ONE_MINUS_CONSTANT_ALPHA};function Te(G,Dt,At,Rt,yt,gt,zt,ne,Be,Ae){if(G===la){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(lt(o.BLEND),C=!0),G!==$v){if(G!==M||Ae!==D){if((v!==Sr||F!==Sr)&&(o.blendEquation(o.FUNC_ADD),v=Sr,F=Sr),Ae)switch(G){case _s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFunc(o.ONE,o.ONE);break;case dx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:nn("WebGLState: Invalid blending: ",G);break}else switch(G){case _s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dx:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hx:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",G);break}B=null,U=null,X=null,N=null,O.set(0,0,0),K=0,M=G,D=Ae}return}yt=yt||Dt,gt=gt||At,zt=zt||Rt,(Dt!==v||yt!==F)&&(o.blendEquationSeparate($e[Dt],$e[yt]),v=Dt,F=yt),(At!==B||Rt!==U||gt!==X||zt!==N)&&(o.blendFuncSeparate(fe[At],fe[Rt],fe[gt],fe[zt]),B=At,U=Rt,X=gt,N=zt),(ne.equals(O)===!1||Be!==K)&&(o.blendColor(ne.r,ne.g,ne.b,Be),O.copy(ne),K=Be),M=G,D=!1}function I(G,Dt){G.side===ra?Ct(o.CULL_FACE):lt(o.CULL_FACE);let At=G.side===Vn;Dt&&(At=!At),de(At),G.blending===_s&&G.transparent===!1?Te(la):Te(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Rt=G.stencilWrite;h.setTest(Rt),Rt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ht(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function de(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function pe(G){G!==Kv?(lt(o.CULL_FACE),G!==H&&(G===ux?o.cullFace(o.BACK):G===Qv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),H=G}function Ne(G){G!==Y&&(P&&o.lineWidth(G),Y=G)}function Ht(G,Dt,At){G?(lt(o.POLYGON_OFFSET_FILL),(st!==Dt||ut!==At)&&(o.polygonOffset(Dt,At),st=Dt,ut=At)):Ct(o.POLYGON_OFFSET_FILL)}function Xe(G){G?lt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Yt(G){G===void 0&&(G=o.TEXTURE0+ft-1),pt!==G&&(o.activeTexture(G),pt=G)}function ie(G,Dt,At){At===void 0&&(pt===null?At=o.TEXTURE0+ft-1:At=pt);let Rt=_t[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},_t[At]=Rt),(Rt.type!==G||Rt.texture!==Dt)&&(pt!==At&&(o.activeTexture(At),pt=At),o.bindTexture(G,Dt||nt[G]),Rt.type=G,Rt.texture=Dt)}function w(){const G=_t[pt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function mt(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function St(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ut(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Kt(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function kt(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Mt(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function bt(G){vt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),vt.copy(G))}function Wt(G){Et.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Et.copy(G))}function Gt(G,Dt){let At=p.get(Dt);At===void 0&&(At=new WeakMap,p.set(Dt,At));let Rt=At.get(G);Rt===void 0&&(Rt=o.getUniformBlockIndex(Dt,G.name),At.set(G,Rt))}function Ot(G,Dt){const Rt=p.get(Dt).get(G);m.get(Dt)!==Rt&&(o.uniformBlockBinding(Dt,Rt,G.__bindingPointIndex),m.set(Dt,Rt))}function ee(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},pt=null,_t={},g={},S=new WeakMap,y=[],A=null,C=!1,M=null,v=null,B=null,U=null,F=null,X=null,N=null,O=new Ve(0,0,0),K=0,D=!1,R=null,H=null,Y=null,st=null,ut=null,vt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:lt,disable:Ct,bindFramebuffer:It,drawBuffers:Xt,useProgram:oe,setBlending:Te,setMaterial:I,setFlipSided:de,setCullFace:pe,setLineWidth:Ne,setPolygonOffset:Ht,setScissorTest:Xe,activeTexture:Yt,bindTexture:ie,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:kt,texImage3D:Mt,updateUBOMapping:Gt,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:Kt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:ot,compressedTexSubImage3D:qt,scissor:bt,viewport:Wt,reset:ee}}function K1(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,b){return y?new OffscreenCanvas(w,b):Ac("canvas")}function C(w,b,J){let mt=1;const St=ie(w);if((St.width>J||St.height>J)&&(mt=J/Math.max(St.width,St.height)),mt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ot=Math.floor(mt*St.width),qt=Math.floor(mt*St.height);g===void 0&&(g=A(ot,qt));const Ut=b?A(ot,qt):g;return Ut.width=ot,Ut.height=qt,Ut.getContext("2d").drawImage(w,0,0,ot,qt),se("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ot+"x"+qt+")."),Ut}else return"data"in w&&se("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),w;return w}function M(w){return w.generateMipmaps}function v(w){o.generateMipmap(w)}function B(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(w,b,J,mt,St=!1){if(w!==null){if(o[w]!==void 0)return o[w];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot=b;if(b===o.RED&&(J===o.FLOAT&&(ot=o.R32F),J===o.HALF_FLOAT&&(ot=o.R16F),J===o.UNSIGNED_BYTE&&(ot=o.R8)),b===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ot=o.R8UI),J===o.UNSIGNED_SHORT&&(ot=o.R16UI),J===o.UNSIGNED_INT&&(ot=o.R32UI),J===o.BYTE&&(ot=o.R8I),J===o.SHORT&&(ot=o.R16I),J===o.INT&&(ot=o.R32I)),b===o.RG&&(J===o.FLOAT&&(ot=o.RG32F),J===o.HALF_FLOAT&&(ot=o.RG16F),J===o.UNSIGNED_BYTE&&(ot=o.RG8)),b===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ot=o.RG8UI),J===o.UNSIGNED_SHORT&&(ot=o.RG16UI),J===o.UNSIGNED_INT&&(ot=o.RG32UI),J===o.BYTE&&(ot=o.RG8I),J===o.SHORT&&(ot=o.RG16I),J===o.INT&&(ot=o.RG32I)),b===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),J===o.UNSIGNED_INT&&(ot=o.RGB32UI),J===o.BYTE&&(ot=o.RGB8I),J===o.SHORT&&(ot=o.RGB16I),J===o.INT&&(ot=o.RGB32I)),b===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),J===o.UNSIGNED_INT&&(ot=o.RGBA32UI),J===o.BYTE&&(ot=o.RGBA8I),J===o.SHORT&&(ot=o.RGBA16I),J===o.INT&&(ot=o.RGBA32I)),b===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),b===o.RGBA){const qt=St?Ec:we.getTransfer(mt);J===o.FLOAT&&(ot=o.RGBA32F),J===o.HALF_FLOAT&&(ot=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ot=qt===Ge?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function F(w,b){let J;return w?b===null||b===Er||b===Uo?J=o.DEPTH24_STENCIL8:b===oa?J=o.DEPTH32F_STENCIL8:b===wo&&(J=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Er||b===Uo?J=o.DEPTH_COMPONENT24:b===oa?J=o.DEPTH_COMPONENT32F:b===wo&&(J=o.DEPTH_COMPONENT16),J}function X(w,b){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==ei&&w.minFilter!==di?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function N(w){const b=w.target;b.removeEventListener("dispose",N),K(b),b.isVideoTexture&&_.delete(b)}function O(w){const b=w.target;b.removeEventListener("dispose",O),R(b)}function K(w){const b=r.get(w);if(b.__webglInit===void 0)return;const J=w.source,mt=S.get(J);if(mt){const St=mt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(w),Object.keys(mt).length===0&&S.delete(J)}r.remove(w)}function D(w){const b=r.get(w);o.deleteTexture(b.__webglTexture);const J=w.source,mt=S.get(J);delete mt[b.__cacheKey],d.memory.textures--}function R(w){const b=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let St=0;St<b.__webglFramebuffer[mt].length;St++)o.deleteFramebuffer(b.__webglFramebuffer[mt][St]);else o.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)o.deleteFramebuffer(b.__webglFramebuffer[mt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=w.textures;for(let mt=0,St=J.length;mt<St;mt++){const ot=r.get(J[mt]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),d.memory.textures--),r.remove(J[mt])}r.remove(w)}let H=0;function Y(){H=0}function st(){const w=H;return w>=l.maxTextures&&se("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),H+=1,w}function ut(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function ft(w,b){const J=r.get(w);if(w.isVideoTexture&&Xe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&J.__version!==w.version){const mt=w.image;if(mt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(J,w,b);return}}else w.isExternalTexture&&(J.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+b)}function P(w,b){const J=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&J.__version!==w.version){nt(J,w,b);return}else w.isExternalTexture&&(J.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+b)}function j(w,b){const J=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&J.__version!==w.version){nt(J,w,b);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+b)}function W(w,b){const J=r.get(w);if(w.version>0&&J.__version!==w.version){lt(J,w,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+b)}const pt={[Ud]:o.REPEAT,[sa]:o.CLAMP_TO_EDGE,[Ld]:o.MIRRORED_REPEAT},_t={[ei]:o.NEAREST,[AS]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[kf]:o.LINEAR_MIPMAP_NEAREST,[yr]:o.LINEAR_MIPMAP_LINEAR},L={[US]:o.NEVER,[BS]:o.ALWAYS,[LS]:o.LESS,[mg]:o.LEQUAL,[NS]:o.EQUAL,[zS]:o.GEQUAL,[OS]:o.GREATER,[PS]:o.NOTEQUAL};function it(w,b){if(b.type===oa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===di||b.magFilter===kf||b.magFilter===Ql||b.magFilter===yr||b.minFilter===di||b.minFilter===kf||b.minFilter===Ql||b.minFilter===yr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,pt[b.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,pt[b.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,pt[b.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,_t[b.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,_t[b.minFilter]),b.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ei||b.minFilter!==Ql&&b.minFilter!==yr||b.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function vt(w,b){let J=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",N));const mt=b.source;let St=S.get(mt);St===void 0&&(St={},S.set(mt,St));const ot=ut(b);if(ot!==w.__cacheKey){St[ot]===void 0&&(St[ot]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),St[ot].usedTimes++;const qt=St[w.__cacheKey];qt!==void 0&&(St[w.__cacheKey].usedTimes--,qt.usedTimes===0&&D(b)),w.__cacheKey=ot,w.__webglTexture=St[ot].texture}return J}function Et(w,b,J){return Math.floor(Math.floor(w/J)/b)}function Nt(w,b,J,mt){const ot=w.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,J,mt,b.data);else{ot.sort((Mt,bt)=>Mt.start-bt.start);let qt=0;for(let Mt=1;Mt<ot.length;Mt++){const bt=ot[qt],Wt=ot[Mt],Gt=bt.start+bt.count,Ot=Et(Wt.start,b.width,4),ee=Et(bt.start,b.width,4);Wt.start<=Gt+1&&Ot===ee&&Et(Wt.start+Wt.count-1,b.width,4)===Ot?bt.count=Math.max(bt.count,Wt.start+Wt.count-bt.start):(++qt,ot[qt]=Wt)}ot.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Mt=0,bt=ot.length;Mt<bt;Mt++){const Wt=ot[Mt],Gt=Math.floor(Wt.start/4),Ot=Math.ceil(Wt.count/4),ee=Gt%b.width,G=Math.floor(Gt/b.width),Dt=Ot,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ee),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,ee,G,Dt,At,J,mt,b.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,kt)}}function nt(w,b,J){let mt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=o.TEXTURE_3D);const St=vt(w,b),ot=b.source;i.bindTexture(mt,w.__webglTexture,o.TEXTURE0+J);const qt=r.get(ot);if(ot.version!==qt.__version||St===!0){i.activeTexture(o.TEXTURE0+J);const Ut=we.getPrimaries(we.workingColorSpace),Kt=b.colorSpace===ka?null:we.getPrimaries(b.colorSpace),kt=b.colorSpace===ka||Ut===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Mt=C(b.image,!1,l.maxTextureSize);Mt=Yt(b,Mt);const bt=u.convert(b.format,b.colorSpace),Wt=u.convert(b.type);let Gt=U(b.internalFormat,bt,Wt,b.colorSpace,b.isVideoTexture);it(mt,b);let Ot;const ee=b.mipmaps,G=b.isVideoTexture!==!0,Dt=qt.__version===void 0||St===!0,At=ot.dataReady,Rt=X(b,Mt);if(b.isDepthTexture)Gt=F(b.format===No,b.type),Dt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Gt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,bt,Wt,null));else if(b.isDataTexture)if(ee.length>0){G&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ee[0].width,ee[0].height);for(let yt=0,gt=ee.length;yt<gt;yt++)Ot=ee[yt],G?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,bt,Wt,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,Gt,Ot.width,Ot.height,0,bt,Wt,Ot.data);b.generateMipmaps=!1}else G?(Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height),At&&Nt(b,Mt,bt,Wt)):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,bt,Wt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,ee[0].width,ee[0].height,Mt.depth);for(let yt=0,gt=ee.length;yt<gt;yt++)if(Ot=ee[yt],b.format!==yi)if(bt!==null)if(G){if(At)if(b.layerUpdates.size>0){const zt=Px(Ot.width,Ot.height,b.format,b.type);for(const ne of b.layerUpdates){const Be=Ot.data.subarray(ne*zt/Ot.data.BYTES_PER_ELEMENT,(ne+1)*zt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ne,Ot.width,Ot.height,1,bt,Be)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Mt.depth,bt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Gt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Mt.depth,bt,Wt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Gt,Ot.width,Ot.height,Mt.depth,0,bt,Wt,Ot.data)}else{G&&Dt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ee[0].width,ee[0].height);for(let yt=0,gt=ee.length;yt<gt;yt++)Ot=ee[yt],b.format!==yi?bt!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,bt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Gt,Ot.width,Ot.height,0,Ot.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,bt,Wt,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,Gt,Ot.width,Ot.height,0,bt,Wt,Ot.data)}else if(b.isDataArrayTexture)if(G){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,Mt.width,Mt.height,Mt.depth),At)if(b.layerUpdates.size>0){const yt=Px(Mt.width,Mt.height,b.format,b.type);for(const gt of b.layerUpdates){const zt=Mt.data.subarray(gt*yt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,bt,Wt,zt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,Wt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Mt.width,Mt.height,Mt.depth,0,bt,Wt,Mt.data);else if(b.isData3DTexture)G?(Dt&&i.texStorage3D(o.TEXTURE_3D,Rt,Gt,Mt.width,Mt.height,Mt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,Wt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Mt.width,Mt.height,Mt.depth,0,bt,Wt,Mt.data);else if(b.isFramebufferTexture){if(Dt)if(G)i.texStorage2D(o.TEXTURE_2D,Rt,Gt,Mt.width,Mt.height);else{let yt=Mt.width,gt=Mt.height;for(let zt=0;zt<Rt;zt++)i.texImage2D(o.TEXTURE_2D,zt,Gt,yt,gt,0,bt,Wt,null),yt>>=1,gt>>=1}}else if(ee.length>0){if(G&&Dt){const yt=ie(ee[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,yt.width,yt.height)}for(let yt=0,gt=ee.length;yt<gt;yt++)Ot=ee[yt],G?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,bt,Wt,Ot):i.texImage2D(o.TEXTURE_2D,yt,Gt,bt,Wt,Ot);b.generateMipmaps=!1}else if(G){if(Dt){const yt=ie(Mt);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Wt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,bt,Wt,Mt);M(b)&&v(mt),qt.__version=ot.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function lt(w,b,J){if(b.image.length!==6)return;const mt=vt(w,b),St=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+J);const ot=r.get(St);if(St.version!==ot.__version||mt===!0){i.activeTexture(o.TEXTURE0+J);const qt=we.getPrimaries(we.workingColorSpace),Ut=b.colorSpace===ka?null:we.getPrimaries(b.colorSpace),Kt=b.colorSpace===ka||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let gt=0;gt<6;gt++)!kt&&!Mt?bt[gt]=C(b.image[gt],!0,l.maxCubemapSize):bt[gt]=Mt?b.image[gt].image:b.image[gt],bt[gt]=Yt(b,bt[gt]);const Wt=bt[0],Gt=u.convert(b.format,b.colorSpace),Ot=u.convert(b.type),ee=U(b.internalFormat,Gt,Ot,b.colorSpace),G=b.isVideoTexture!==!0,Dt=ot.__version===void 0||mt===!0,At=St.dataReady;let Rt=X(b,Wt);it(o.TEXTURE_CUBE_MAP,b);let yt;if(kt){G&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ee,Wt.width,Wt.height);for(let gt=0;gt<6;gt++){yt=bt[gt].mipmaps;for(let zt=0;zt<yt.length;zt++){const ne=yt[zt];b.format!==yi?Gt!==null?G?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,0,0,ne.width,ne.height,Gt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,ee,ne.width,ne.height,0,ne.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,0,0,ne.width,ne.height,Gt,Ot,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt,ee,ne.width,ne.height,0,Gt,Ot,ne.data)}}}else{if(yt=b.mipmaps,G&&Dt){yt.length>0&&Rt++;const gt=ie(bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ee,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,bt[gt].width,bt[gt].height,Gt,Ot,bt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ee,bt[gt].width,bt[gt].height,0,Gt,Ot,bt[gt].data);for(let zt=0;zt<yt.length;zt++){const Be=yt[zt].image[gt].image;G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,0,0,Be.width,Be.height,Gt,Ot,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,ee,Be.width,Be.height,0,Gt,Ot,Be.data)}}else{G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Ot,bt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ee,Gt,Ot,bt[gt]);for(let zt=0;zt<yt.length;zt++){const ne=yt[zt];G?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,0,0,Gt,Ot,ne.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,zt+1,ee,Gt,Ot,ne.image[gt])}}}M(b)&&v(o.TEXTURE_CUBE_MAP),ot.__version=St.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ct(w,b,J,mt,St,ot){const qt=u.convert(J.format,J.colorSpace),Ut=u.convert(J.type),Kt=U(J.internalFormat,qt,Ut,J.colorSpace),kt=r.get(b),Mt=r.get(J);if(Mt.__renderTarget=b,!kt.__hasExternalTextures){const bt=Math.max(1,b.width>>ot),Wt=Math.max(1,b.height>>ot);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ot,Kt,bt,Wt,b.depth,0,qt,Ut,null):i.texImage2D(St,ot,Kt,bt,Wt,0,qt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Ht(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,St,Mt.__webglTexture,0,Ne(b)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,St,Mt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(w,b,J){if(o.bindRenderbuffer(o.RENDERBUFFER,w),b.depthBuffer){const mt=b.depthTexture,St=mt&&mt.isDepthTexture?mt.type:null,ot=F(b.stencilBuffer,St),qt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Ne(b);Ht(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ot,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ot,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ot,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,w)}else{const mt=b.textures;for(let St=0;St<mt.length;St++){const ot=mt[St],qt=u.convert(ot.format,ot.colorSpace),Ut=u.convert(ot.type),Kt=U(ot.internalFormat,qt,Ut,ot.colorSpace),kt=Ne(b);J&&Ht(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,kt,Kt,b.width,b.height):Ht(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,kt,Kt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const St=mt.__webglTexture,ot=Ne(b);if(b.depthTexture.format===Lo)Ht(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(b.depthTexture.format===No)Ht(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function oe(w){const b=r.get(w),J=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const mt=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",St)};mt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=mt}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const mt=w.texture.mipmaps;mt&&mt.length>0?Xt(b.__webglFramebuffer[0],w):Xt(b.__webglFramebuffer,w)}else if(J){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=o.createRenderbuffer(),It(b.__webglDepthbuffer[mt],w,!1);else{const St=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ot)}}else{const mt=w.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),It(b.__webglDepthbuffer,w,!1);else{const St=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(w,b,J){const mt=r.get(w);b!==void 0&&Ct(mt.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&oe(w)}function fe(w){const b=w.texture,J=r.get(w),mt=r.get(b);w.addEventListener("dispose",O);const St=w.textures,ot=w.isWebGLCubeRenderTarget===!0,qt=St.length>1;if(qt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=b.version,d.memory.textures++),ot){J.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Ut]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)J.__webglFramebuffer[Ut][Kt]=o.createFramebuffer()}else J.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)J.__webglFramebuffer[Ut]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,Kt=St.length;Ut<Kt;Ut++){const kt=r.get(St[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&Ht(w)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ut=0;Ut<St.length;Ut++){const Kt=St[Ut];J.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Ut]);const kt=u.convert(Kt.format,Kt.colorSpace),Mt=u.convert(Kt.type),bt=U(Kt.internalFormat,kt,Mt,Kt.colorSpace,w.isXRRenderTarget===!0),Wt=Ne(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,bt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,J.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),It(J.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),it(o.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(J.__webglFramebuffer[Ut][Kt],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Kt);else Ct(J.__webglFramebuffer[Ut],w,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);M(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,Kt=St.length;Ut<Kt;Ut++){const kt=St[Ut],Mt=r.get(kt);let bt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(bt,Mt.__webglTexture),it(bt,kt),Ct(J.__webglFramebuffer,w,kt,o.COLOR_ATTACHMENT0+Ut,bt,0),M(kt)&&v(bt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ut=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,mt.__webglTexture),it(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Ct(J.__webglFramebuffer[Kt],w,b,o.COLOR_ATTACHMENT0,Ut,Kt);else Ct(J.__webglFramebuffer,w,b,o.COLOR_ATTACHMENT0,Ut,0);M(b)&&v(Ut),i.unbindTexture()}w.depthBuffer&&oe(w)}function Te(w){const b=w.textures;for(let J=0,mt=b.length;J<mt;J++){const St=b[J];if(M(St)){const ot=B(w),qt=r.get(St).__webglTexture;i.bindTexture(ot,qt),v(ot),i.unbindTexture()}}}const I=[],de=[];function pe(w){if(w.samples>0){if(Ht(w)===!1){const b=w.textures,J=w.width,mt=w.height;let St=o.COLOR_BUFFER_BIT;const ot=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(w),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Kt=w.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[kt]);const Mt=r.get(b[kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,J,mt,0,0,J,mt,St,o.NEAREST),m===!0&&(I.length=0,de.length=0,I.push(o.COLOR_ATTACHMENT0+kt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(I.push(ot),de.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,de)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[kt]);const Mt=r.get(b[kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+kt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const b=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ne(w){return Math.min(l.maxSamples,w.samples)}function Ht(w){const b=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xe(w){const b=d.render.frame;_.get(w)!==b&&(_.set(w,b),w.update())}function Yt(w,b){const J=w.colorSpace,mt=w.format,St=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||J!==bs&&J!==ka&&(we.getTransfer(J)===Ge?(mt!==yi||St!==ua)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",J)),b}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=Y,this.setTexture2D=ft,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=$e,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function Q1(o,e){function i(r,l=ka){let u;const d=we.getTransfer(l);if(r===ua)return o.UNSIGNED_BYTE;if(r===dh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===hh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ug)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===fg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===lg)return o.BYTE;if(r===cg)return o.SHORT;if(r===wo)return o.UNSIGNED_SHORT;if(r===fh)return o.INT;if(r===Er)return o.UNSIGNED_INT;if(r===oa)return o.FLOAT;if(r===Ts)return o.HALF_FLOAT;if(r===dg)return o.ALPHA;if(r===hg)return o.RGB;if(r===yi)return o.RGBA;if(r===Lo)return o.DEPTH_COMPONENT;if(r===No)return o.DEPTH_STENCIL;if(r===pg)return o.RED;if(r===ph)return o.RED_INTEGER;if(r===mh)return o.RG;if(r===xh)return o.RG_INTEGER;if(r===gh)return o.RGBA_INTEGER;if(r===_c||r===vc||r===Sc||r===Mc)if(d===Ge)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===_c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===_c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nd||r===Od||r===Pd||r===zd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Nd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Od)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bd||r===Fd||r===Id)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Bd||r===Fd)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Id)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hd||r===Gd||r===Vd||r===Xd||r===kd||r===qd||r===Wd||r===Yd||r===Zd||r===jd||r===Kd||r===Qd||r===Jd||r===$d)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Hd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$d)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===th||r===eh||r===nh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===th)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ih||r===ah||r===rh||r===sh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===ih)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Uo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const J1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Cg(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ui({vertexShader:J1,fragmentShader:$1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new da(new Io(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eE extends As{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,y=null,A=null;const C=typeof XRWebGLBinding<"u",M=new tE,v={},B=i.getContextAttributes();let U=null,F=null;const X=[],N=[],O=new Ee;let K=null;const D=new Si;D.viewport=new an;const R=new Si;R.viewport=new an;const H=[D,R],Y=new vM;let st=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=X[nt];return lt===void 0&&(lt=new hd,X[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=X[nt];return lt===void 0&&(lt=new hd,X[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=X[nt];return lt===void 0&&(lt=new hd,X[nt]=lt),lt.getHandSpace()};function ft(nt){const lt=N.indexOf(nt.inputSource);if(lt===-1)return;const Ct=X[lt];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,p||d),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function P(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",j);for(let nt=0;nt<X.length;nt++){const lt=N[nt];lt!==null&&(N[nt]=null,X[nt].disconnect(lt))}st=null,ut=null,M.reset();for(const nt in v)delete v[nt];e.setRenderTarget(U),y=null,S=null,g=null,l=null,F=null,Nt.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){u=nt,r.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,r.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",P),l.addEventListener("inputsourceschange",j),B.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,It=null,Xt=null;B.depth&&(Xt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=B.stencil?No:Lo,It=B.stencil?Uo:Er);const oe={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(oe),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),F=new Tr(S.textureWidth,S.textureHeight,{format:yi,type:ua,depthTexture:new Rg(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Tr(y.framebufferWidth,y.framebufferHeight,{format:yi,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(nt){for(let lt=0;lt<nt.removed.length;lt++){const Ct=nt.removed[lt],It=N.indexOf(Ct);It>=0&&(N[It]=null,X[It].disconnect(Ct))}for(let lt=0;lt<nt.added.length;lt++){const Ct=nt.added[lt];let It=N.indexOf(Ct);if(It===-1){for(let oe=0;oe<X.length;oe++)if(oe>=N.length){N.push(Ct),It=oe;break}else if(N[oe]===null){N[oe]=Ct,It=oe;break}if(It===-1)break}const Xt=X[It];Xt&&Xt.connect(Ct)}}const W=new ct,pt=new ct;function _t(nt,lt,Ct){W.setFromMatrixPosition(lt.matrixWorld),pt.setFromMatrixPosition(Ct.matrixWorld);const It=W.distanceTo(pt),Xt=lt.projectionMatrix.elements,oe=Ct.projectionMatrix.elements,$e=Xt[14]/(Xt[10]-1),fe=Xt[14]/(Xt[10]+1),Te=(Xt[9]+1)/Xt[5],I=(Xt[9]-1)/Xt[5],de=(Xt[8]-1)/Xt[0],pe=(oe[8]+1)/oe[0],Ne=$e*de,Ht=$e*pe,Xe=It/(-de+pe),Yt=Xe*-de;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Yt),nt.translateZ(Xe),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Xt[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ie=$e+Xe,w=fe+Xe,b=Ne-Yt,J=Ht+(It-Yt),mt=Te*fe/w*ie,St=I*fe/w*ie;nt.projectionMatrix.makePerspective(b,J,mt,St,ie,w),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let lt=nt.near,Ct=nt.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(Ct=M.depthFar)),Y.near=R.near=D.near=lt,Y.far=R.far=D.far=Ct,(st!==Y.near||ut!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),st=Y.near,ut=Y.far),Y.layers.mask=nt.layers.mask|6,D.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const It=nt.parent,Xt=Y.cameras;L(Y,It);for(let oe=0;oe<Xt.length;oe++)L(Xt[oe],It);Xt.length===2?_t(Y,D,R):Y.projectionMatrix.copy(D.projectionMatrix),it(nt,Y,It)};function it(nt,lt,Ct){Ct===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=oh*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(nt){m=nt,S!==null&&(S.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(nt){return v[nt]};let vt=null;function Et(nt,lt){if(_=lt.getViewerPose(p||d),A=lt,_!==null){const Ct=_.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let It=!1;Ct.length!==Y.cameras.length&&(Y.cameras.length=0,It=!0);for(let fe=0;fe<Ct.length;fe++){const Te=Ct[fe];let I=null;if(y!==null)I=y.getViewport(Te);else{const pe=g.getViewSubImage(S,Te);I=pe.viewport,fe===0&&(e.setRenderTargetTextures(F,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(F))}let de=H[fe];de===void 0&&(de=new Si,de.layers.enable(fe),de.viewport=new an,H[fe]=de),de.matrix.fromArray(Te.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Te.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(I.x,I.y,I.width,I.height),fe===0&&(Y.matrix.copy(de.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),It===!0&&Y.cameras.push(de)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const fe=g.getDepthInformation(Ct[0]);fe&&fe.isValid&&fe.texture&&M.init(fe,l.renderState)}if(Xt&&Xt.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let fe=0;fe<Ct.length;fe++){const Te=Ct[fe].camera;if(Te){let I=v[Te];I||(I=new Cg,v[Te]=I);const de=g.getCameraImage(Te);I.sourceTexture=de}}}}for(let Ct=0;Ct<X.length;Ct++){const It=N[Ct],Xt=X[Ct];It!==null&&Xt!==void 0&&Xt.update(It,lt,p||d)}vt&&vt(nt,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),A=null}const Nt=new wg;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}}const _r=new fa,nE=new pn;function iE(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,bg(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,B,U,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(M,v):v.isMeshToonMaterial?(u(M,v),g(M,v)):v.isMeshPhongMaterial?(u(M,v),_(M,v)):v.isMeshStandardMaterial?(u(M,v),S(M,v),v.isMeshPhysicalMaterial&&y(M,v,F)):v.isMeshMatcapMaterial?(u(M,v),A(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),C(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,B,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Vn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Vn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const B=e.get(v),U=B.envMap,F=B.envMapRotation;U&&(M.envMap.value=U,_r.copy(F),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),M.envMapRotation.value.setFromMatrix4(nE.makeRotationFromEuler(_r)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,B,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*B,M.scale.value=U*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function S(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,B){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const B=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function aE(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,U){const F=U.program;r.uniformBlockBinding(B,F)}function p(B,U){let F=l[B.id];F===void 0&&(A(B),F=_(B),l[B.id]=F,B.addEventListener("dispose",M));const X=U.program;r.updateUBOMapping(B,X);const N=e.render.frame;u[B.id]!==N&&(S(B),u[B.id]=N)}function _(B){const U=g();B.__bindingPointIndex=U;const F=o.createBuffer(),X=B.__size,N=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,X,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,F),F}function g(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const U=l[B.id],F=B.uniforms,X=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,O=F.length;N<O;N++){const K=Array.isArray(F[N])?F[N]:[F[N]];for(let D=0,R=K.length;D<R;D++){const H=K[D];if(y(H,N,D,X)===!0){const Y=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let ft=0;ft<st.length;ft++){const P=st[ft],j=C(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,Y+ut,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,ut),ut+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,U,F,X){const N=B.value,O=U+"_"+F;if(X[O]===void 0)return typeof N=="number"||typeof N=="boolean"?X[O]=N:X[O]=N.clone(),!0;{const K=X[O];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return X[O]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function A(B){const U=B.uniforms;let F=0;const X=16;for(let O=0,K=U.length;O<K;O++){const D=Array.isArray(U[O])?U[O]:[U[O]];for(let R=0,H=D.length;R<H;R++){const Y=D[R],st=Array.isArray(Y.value)?Y.value:[Y.value];for(let ut=0,ft=st.length;ut<ft;ut++){const P=st[ut],j=C(P),W=F%X,pt=W%j.boundary,_t=W+pt;F+=pt,_t!==0&&X-_t<j.storage&&(F+=X-_t),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=F,F+=j.storage}}}const N=F%X;return N>0&&(F+=X-N),B.__size=F,B.__cache={},this}function C(B){const U={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(U.boundary=4,U.storage=4):B.isVector2?(U.boundary=8,U.storage=8):B.isVector3||B.isColor?(U.boundary=16,U.storage=12):B.isVector4?(U.boundary=16,U.storage=16):B.isMatrix3?(U.boundary=48,U.storage=48):B.isMatrix4?(U.boundary=64,U.storage=64):B.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",B),U}function M(B){const U=B.target;U.removeEventListener("dispose",M);const F=d.indexOf(U.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const rE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ia=null;function sE(){return ia===null&&(ia=new hM(rE,32,32,mh,Ts),ia.minFilter=di,ia.magFilter=di,ia.wrapS=sa,ia.wrapT=sa,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class oE{constructor(e={}){const{canvas:i=FS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const A=new Set([gh,xh,ph]),C=new Set([ua,Er,wo,Uo,dh,hh]),M=new Uint32Array(4),v=new Int32Array(4);let B=null,U=null;const F=[],X=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1;this._outputColorSpace=ti;let K=0,D=0,R=null,H=-1,Y=null;const st=new an,ut=new an;let ft=null;const P=new Ve(0);let j=0,W=i.width,pt=i.height,_t=1,L=null,it=null;const vt=new an(0,0,W,pt),Et=new an(0,0,W,pt);let Nt=!1;const nt=new Ag;let lt=!1,Ct=!1;const It=new pn,Xt=new ct,oe=new an,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Te(){return R===null?_t:1}let I=r;function de(T,k){return i.getContext(T,k)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${uh}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",zt,!1),I===null){const k="webgl2";if(I=de(k,T),I===null)throw de(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let pe,Ne,Ht,Xe,Yt,ie,w,b,J,mt,St,ot,qt,Ut,Kt,kt,Mt,bt,Wt,Gt,Ot,ee,G,Dt;function At(){pe=new m3(I),pe.init(),ee=new Q1(I,pe),Ne=new s3(I,pe,e,ee),Ht=new j1(I,pe),Ne.reversedDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),Xe=new _3(I),Yt=new z1,ie=new K1(I,pe,Ht,Yt,Ne,ee,Xe),w=new l3(N),b=new p3(N),J=new yM(I),G=new a3(I,J),mt=new x3(I,J,Xe,G),St=new S3(I,mt,J,Xe),Wt=new v3(I,Ne,ie),kt=new o3(Yt),ot=new P1(N,w,b,pe,Ne,G,kt),qt=new iE(N,Yt),Ut=new F1,Kt=new k1(pe),bt=new i3(N,w,b,Ht,St,y,m),Mt=new Y1(N,St,Ne),Dt=new aE(I,Xe,Ne,Ht),Gt=new r3(I,pe,Xe),Ot=new g3(I,pe,Xe),Xe.programs=ot.programs,N.capabilities=Ne,N.extensions=pe,N.properties=Yt,N.renderLists=Ut,N.shadowMap=Mt,N.state=Ht,N.info=Xe}At();const Rt=new eE(N,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(W,pt,!1))},this.getSize=function(T){return T.set(W,pt)},this.setSize=function(T,k,at=!0){if(Rt.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,pt=k,i.width=Math.floor(T*_t),i.height=Math.floor(k*_t),at===!0&&(i.style.width=T+"px",i.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(W*_t,pt*_t).floor()},this.setDrawingBufferSize=function(T,k,at){W=T,pt=k,_t=at,i.width=Math.floor(T*at),i.height=Math.floor(k*at),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(st)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,k,at,tt){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,k,at,tt),Ht.viewport(st.copy(vt).multiplyScalar(_t).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,k,at,tt){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,k,at,tt),Ht.scissor(ut.copy(Et).multiplyScalar(_t).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){Ht.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,at=!0){let tt=0;if(T){let Z=!1;if(R!==null){const Tt=R.texture.format;Z=A.has(Tt)}if(Z){const Tt=R.texture.type,wt=C.has(Tt),Pt=bt.getClearColor(),Bt=bt.getClearAlpha(),Jt=Pt.r,te=Pt.g,Zt=Pt.b;wt?(M[0]=Jt,M[1]=te,M[2]=Zt,M[3]=Bt,I.clearBufferuiv(I.COLOR,0,M)):(v[0]=Jt,v[1]=te,v[2]=Zt,v[3]=Bt,I.clearBufferiv(I.COLOR,0,v))}else tt|=I.COLOR_BUFFER_BIT}k&&(tt|=I.DEPTH_BUFFER_BIT),at&&(tt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),bt.dispose(),Ut.dispose(),Kt.dispose(),Yt.dispose(),w.dispose(),b.dispose(),St.dispose(),G.dispose(),Dt.dispose(),ot.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Cs),Rt.removeEventListener("sessionend",Ds),hi.stop()};function yt(T){T.preventDefault(),_x("WebGLRenderer: Context Lost."),O=!0}function gt(){_x("WebGLRenderer: Context Restored."),O=!1;const T=Xe.autoReset,k=Mt.enabled,at=Mt.autoUpdate,tt=Mt.needsUpdate,Z=Mt.type;At(),Xe.autoReset=T,Mt.enabled=k,Mt.autoUpdate=at,Mt.needsUpdate=tt,Mt.type=Z}function zt(T){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){const k=T.target;k.removeEventListener("dispose",ne),Be(k)}function Be(T){Ae(T),Yt.remove(T)}function Ae(T){const k=Yt.get(T).programs;k!==void 0&&(k.forEach(function(at){ot.releaseProgram(at)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,at,tt,Z,Tt){k===null&&(k=$e);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,Pt=Uc(T,k,at,tt,Z);Ht.setMaterial(tt,wt);let Bt=at.index,Jt=1;if(tt.wireframe===!0){if(Bt=mt.getWireframeAttribute(at),Bt===void 0)return;Jt=2}const te=at.drawRange,Zt=at.attributes.position;let le=te.start*Jt,be=(te.start+te.count)*Jt;Tt!==null&&(le=Math.max(le,Tt.start*Jt),be=Math.min(be,(Tt.start+Tt.count)*Jt)),Bt!==null?(le=Math.max(le,0),be=Math.min(be,Bt.count)):Zt!=null&&(le=Math.max(le,0),be=Math.min(be,Zt.count));const Re=be-le;if(Re<0||Re===1/0)return;G.setup(Z,tt,Pt,at,Bt);let ve,Le=Gt;if(Bt!==null&&(ve=J.get(Bt),Le=Ot,Le.setIndex(ve)),Z.isMesh)tt.wireframe===!0?(Ht.setLineWidth(tt.wireframeLinewidth*Te()),Le.setMode(I.LINES)):Le.setMode(I.TRIANGLES);else if(Z.isLine){let Qt=tt.linewidth;Qt===void 0&&(Qt=1),Ht.setLineWidth(Qt*Te()),Z.isLineSegments?Le.setMode(I.LINES):Z.isLineLoop?Le.setMode(I.LINE_LOOP):Le.setMode(I.LINE_STRIP)}else Z.isPoints?Le.setMode(I.POINTS):Z.isSprite&&Le.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))Le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Qt=Z._multiDrawStarts,ke=Z._multiDrawCounts,Se=Z._multiDrawCount,gn=Bt?J.get(Bt).bytesPerElement:1,pa=Yt.get(tt).currentProgram.getUniforms();for(let We=0;We<Se;We++)pa.setValue(I,"_gl_DrawID",We),Le.render(Qt[We]/gn,ke[We])}else if(Z.isInstancedMesh)Le.renderInstances(le,Re,Z.count);else if(at.isInstancedBufferGeometry){const Qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ke=Math.min(at.instanceCount,Qt);Le.renderInstances(le,Re,ke)}else Le.render(le,Re)};function Rn(T,k,at){T.transparent===!0&&T.side===ra&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,fn(T,k,at),T.side=Ya,T.needsUpdate=!0,fn(T,k,at),T.side=ra):fn(T,k,at)}this.compile=function(T,k,at=null){at===null&&(at=T),U=Kt.get(at),U.init(k),X.push(U),at.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),T!==at&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(k.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),U.setupLights();const tt=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Tt=Z.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Pt=Tt[wt];Rn(Pt,at,Z),tt.add(Pt)}else Rn(Tt,at,Z),tt.add(Tt)}),U=X.pop(),tt},this.compileAsync=function(T,k,at=null){const tt=this.compile(T,k,at);return new Promise(Z=>{function Tt(){if(tt.forEach(function(wt){Yt.get(wt).currentProgram.isReady()&&tt.delete(wt)}),tt.size===0){Z(T);return}setTimeout(Tt,10)}pe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Xn=null;function Ho(T){Xn&&Xn(T)}function Cs(){hi.stop()}function Ds(){hi.start()}const hi=new wg;hi.setAnimationLoop(Ho),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){Xn=T,Rt.setAnimationLoop(T),T===null?hi.stop():hi.start()},Rt.addEventListener("sessionstart",Cs),Rt.addEventListener("sessionend",Ds),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(k),k=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,k,R),U=Kt.get(T,X.length),U.init(k),X.push(U),It.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(It,Di,k.reversedDepth),Ct=this.localClippingEnabled,lt=kt.init(this.clippingPlanes,Ct),B=Ut.get(T,F.length),B.init(),F.push(B),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&ja(Tt,k,-1/0,N.sortObjects)}ja(T,k,0,N.sortObjects),B.finish(),N.sortObjects===!0&&B.sort(L,it),fe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,fe&&bt.addToRenderList(B,T),this.info.render.frame++,lt===!0&&kt.beginShadows();const at=U.state.shadowsArray;Mt.render(at,T,k),lt===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=B.opaque,Z=B.transmissive;if(U.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(Z.length>0)for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Bt=Tt[wt];Us(tt,Z,T,Bt)}fe&&bt.render(T);for(let wt=0,Pt=Tt.length;wt<Pt;wt++){const Bt=Tt[wt];ws(B,T,Bt,Bt.viewport)}}else Z.length>0&&Us(tt,Z,T,k),fe&&bt.render(T),ws(B,T,k);R!==null&&D===0&&(ie.updateMultisampleRenderTarget(R),ie.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(N,T,k),G.resetDefaultState(),H=-1,Y=null,X.pop(),X.length>0?(U=X[X.length-1],lt===!0&&kt.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?B=F[F.length-1]:B=null};function ja(T,k,at,tt){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)at=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){tt&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);const wt=St.update(T),Pt=T.material;Pt.visible&&B.push(T,wt,Pt,at,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const wt=St.update(T),Pt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),oe.copy(wt.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(Pt)){const Bt=wt.groups;for(let Jt=0,te=Bt.length;Jt<te;Jt++){const Zt=Bt[Jt],le=Pt[Zt.materialIndex];le&&le.visible&&B.push(T,wt,le,at,oe.z,Zt)}}else Pt.visible&&B.push(T,wt,Pt,at,oe.z,null)}}const Tt=T.children;for(let wt=0,Pt=Tt.length;wt<Pt;wt++)ja(Tt[wt],k,at,tt)}function ws(T,k,at,tt){const{opaque:Z,transmissive:Tt,transparent:wt}=T;U.setupLightsView(at),lt===!0&&kt.setGlobalState(N.clippingPlanes,at),tt&&Ht.viewport(st.copy(tt)),Z.length>0&&kn(Z,k,at),Tt.length>0&&kn(Tt,k,at),wt.length>0&&kn(wt,k,at),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Us(T,k,at,tt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[tt.id]===void 0&&(U.state.transmissionRenderTarget[tt.id]=new Tr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Ts:ua,minFilter:yr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Tt=U.state.transmissionRenderTarget[tt.id],wt=tt.viewport||st;Tt.setSize(wt.z*N.transmissionResolutionScale,wt.w*N.transmissionResolutionScale);const Pt=N.getRenderTarget(),Bt=N.getActiveCubeFace(),Jt=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(P),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),fe&&bt.render(at);const te=N.toneMapping;N.toneMapping=Wa;const Zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),U.setupLightsView(tt),lt===!0&&kt.setGlobalState(N.clippingPlanes,tt),kn(T,at,tt),ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let be=0,Re=k.length;be<Re;be++){const ve=k[be],{object:Le,geometry:Qt,material:ke,group:Se}=ve;if(ke.side===ra&&Le.layers.test(tt.layers)){const gn=ke.side;ke.side=Vn,ke.needsUpdate=!0,rn(Le,at,tt,Qt,ke,Se),ke.side=gn,ke.needsUpdate=!0,le=!0}}le===!0&&(ie.updateMultisampleRenderTarget(Tt),ie.updateRenderTargetMipmap(Tt))}N.setRenderTarget(Pt,Bt,Jt),N.setClearColor(P,j),Zt!==void 0&&(tt.viewport=Zt),N.toneMapping=te}function kn(T,k,at){const tt=k.isScene===!0?k.overrideMaterial:null;for(let Z=0,Tt=T.length;Z<Tt;Z++){const wt=T[Z],{object:Pt,geometry:Bt,group:Jt}=wt;let te=wt.material;te.allowOverride===!0&&tt!==null&&(te=tt),Pt.layers.test(at.layers)&&rn(Pt,k,at,Bt,te,Jt)}}function rn(T,k,at,tt,Z,Tt){T.onBeforeRender(N,k,at,tt,Z,Tt),T.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(N,k,at,tt,T,Tt),Z.transparent===!0&&Z.side===ra&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,N.renderBufferDirect(at,k,tt,Z,T,Tt),Z.side=Ya,Z.needsUpdate=!0,N.renderBufferDirect(at,k,tt,Z,T,Tt),Z.side=ra):N.renderBufferDirect(at,k,tt,Z,T,Tt),T.onAfterRender(N,k,at,tt,Z,Tt)}function fn(T,k,at){k.isScene!==!0&&(k=$e);const tt=Yt.get(T),Z=U.state.lights,Tt=U.state.shadowsArray,wt=Z.state.version,Pt=ot.getParameters(T,Z.state,Tt,k,at),Bt=ot.getProgramCacheKey(Pt);let Jt=tt.programs;tt.environment=T.isMeshStandardMaterial?k.environment:null,tt.fog=k.fog,tt.envMap=(T.isMeshStandardMaterial?b:w).get(T.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Jt===void 0&&(T.addEventListener("dispose",ne),Jt=new Map,tt.programs=Jt);let te=Jt.get(Bt);if(te!==void 0){if(tt.currentProgram===te&&tt.lightsStateVersion===wt)return Ar(T,Pt),te}else Pt.uniforms=ot.getUniforms(T),T.onBeforeCompile(Pt,N),te=ot.acquireProgram(Pt,Bt),Jt.set(Bt,te),tt.uniforms=Pt.uniforms;const Zt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Zt.clippingPlanes=kt.uniform),Ar(T,Pt),tt.needsLights=Go(T),tt.lightsStateVersion=wt,tt.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=te,tt.uniformsList=null,te}function Li(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=yc.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Ar(T,k){const at=Yt.get(T);at.outputColorSpace=k.outputColorSpace,at.batching=k.batching,at.batchingColor=k.batchingColor,at.instancing=k.instancing,at.instancingColor=k.instancingColor,at.instancingMorph=k.instancingMorph,at.skinning=k.skinning,at.morphTargets=k.morphTargets,at.morphNormals=k.morphNormals,at.morphColors=k.morphColors,at.morphTargetsCount=k.morphTargetsCount,at.numClippingPlanes=k.numClippingPlanes,at.numIntersection=k.numClipIntersection,at.vertexAlphas=k.vertexAlphas,at.vertexTangents=k.vertexTangents,at.toneMapping=k.toneMapping}function Uc(T,k,at,tt,Z){k.isScene!==!0&&(k=$e),ie.resetTextureUnits();const Tt=k.fog,wt=tt.isMeshStandardMaterial?k.environment:null,Pt=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:bs,Bt=(tt.isMeshStandardMaterial?b:w).get(tt.envMap||wt),Jt=tt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,te=!!at.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Zt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,be=!!at.morphAttributes.color;let Re=Wa;tt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Re=N.toneMapping);const ve=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Le=ve!==void 0?ve.length:0,Qt=Yt.get(tt),ke=U.state.lights;if(lt===!0&&(Ct===!0||T!==Y)){const vn=T===Y&&tt.id===H;kt.setState(tt,T,vn)}let Se=!1;tt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==ke.state.version||Qt.outputColorSpace!==Pt||Z.isBatchedMesh&&Qt.batching===!1||!Z.isBatchedMesh&&Qt.batching===!0||Z.isBatchedMesh&&Qt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Qt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Qt.instancing===!1||!Z.isInstancedMesh&&Qt.instancing===!0||Z.isSkinnedMesh&&Qt.skinning===!1||!Z.isSkinnedMesh&&Qt.skinning===!0||Z.isInstancedMesh&&Qt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Qt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Qt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Qt.instancingMorph===!1&&Z.morphTexture!==null||Qt.envMap!==Bt||tt.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==kt.numPlanes||Qt.numIntersection!==kt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==Zt||Qt.morphNormals!==le||Qt.morphColors!==be||Qt.toneMapping!==Re||Qt.morphTargetsCount!==Le)&&(Se=!0):(Se=!0,Qt.__version=tt.version);let gn=Qt.currentProgram;Se===!0&&(gn=fn(tt,k,Z));let pa=!1,We=!1,Ni=!1;const Ye=gn.getUniforms(),_n=Qt.uniforms;if(Ht.useProgram(gn.program)&&(pa=!0,We=!0,Ni=!0),tt.id!==H&&(H=tt.id,We=!0),pa||Y!==T){Ht.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ye.setValue(I,"projectionMatrix",T.projectionMatrix),Ye.setValue(I,"viewMatrix",T.matrixWorldInverse);const yn=Ye.map.cameraPosition;yn!==void 0&&yn.setValue(I,Xt.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&Ye.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ye.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,We=!0,Ni=!0)}if(Z.isSkinnedMesh){Ye.setOptional(I,Z,"bindMatrix"),Ye.setOptional(I,Z,"bindMatrixInverse");const vn=Z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ye.setValue(I,"boneTexture",vn.boneTexture,ie))}Z.isBatchedMesh&&(Ye.setOptional(I,Z,"batchingTexture"),Ye.setValue(I,"batchingTexture",Z._matricesTexture,ie),Ye.setOptional(I,Z,"batchingIdTexture"),Ye.setValue(I,"batchingIdTexture",Z._indirectTexture,ie),Ye.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ye.setValue(I,"batchingColorTexture",Z._colorsTexture,ie));const dn=at.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Wt.update(Z,at,gn),(We||Qt.receiveShadow!==Z.receiveShadow)&&(Qt.receiveShadow=Z.receiveShadow,Ye.setValue(I,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(_n.envMap.value=Bt,_n.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=sE()),We&&(Ye.setValue(I,"toneMappingExposure",N.toneMappingExposure),Qt.needsLights&&Lc(_n,Ni),Tt&&tt.fog===!0&&qt.refreshFogUniforms(_n,Tt),qt.refreshMaterialUniforms(_n,tt,_t,pt,U.state.transmissionRenderTarget[T.id]),yc.upload(I,Li(Qt),_n,ie)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(yc.upload(I,Li(Qt),_n,ie),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ye.setValue(I,"center",Z.center),Ye.setValue(I,"modelViewMatrix",Z.modelViewMatrix),Ye.setValue(I,"normalMatrix",Z.normalMatrix),Ye.setValue(I,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const vn=tt.uniformsGroups;for(let yn=0,bi=vn.length;yn<bi;yn++){const Oi=vn[yn];Dt.update(Oi,gn),Dt.bind(Oi,gn)}}return gn}function Lc(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Go(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,k,at){const tt=Yt.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Yt.get(T.texture).__webglTexture=k,Yt.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:at,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const at=Yt.get(T);at.__webglFramebuffer=k,at.__useDefaultFramebuffer=k===void 0};const Ka=I.createFramebuffer();this.setRenderTarget=function(T,k=0,at=0){R=T,K=k,D=at;let tt=!0,Z=null,Tt=!1,wt=!1;if(T){const Bt=Yt.get(T);if(Bt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(I.FRAMEBUFFER,null),tt=!1;else if(Bt.__webglFramebuffer===void 0)ie.setupRenderTarget(T);else if(Bt.__hasExternalTextures)ie.rebindTextures(T,Yt.get(T.texture).__webglTexture,Yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Zt=T.depthTexture;if(Bt.__boundDepthTexture!==Zt){if(Zt!==null&&Yt.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(T)}}const Jt=T.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(wt=!0);const te=Yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(te[k])?Z=te[k][at]:Z=te[k],Tt=!0):T.samples>0&&ie.useMultisampledRTT(T)===!1?Z=Yt.get(T).__webglMultisampledFramebuffer:Array.isArray(te)?Z=te[at]:Z=te,st.copy(T.viewport),ut.copy(T.scissor),ft=T.scissorTest}else st.copy(vt).multiplyScalar(_t).floor(),ut.copy(Et).multiplyScalar(_t).floor(),ft=Nt;if(at!==0&&(Z=Ka),Ht.bindFramebuffer(I.FRAMEBUFFER,Z)&&tt&&Ht.drawBuffers(T,Z),Ht.viewport(st),Ht.scissor(ut),Ht.setScissorTest(ft),Tt){const Bt=Yt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,at)}else if(wt){const Bt=k;for(let Jt=0;Jt<T.textures.length;Jt++){const te=Yt.get(T.textures[Jt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Jt,te.__webglTexture,at,Bt)}}else if(T!==null&&at!==0){const Bt=Yt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,at)}H=-1},this.readRenderTargetPixels=function(T,k,at,tt,Z,Tt,wt,Pt=0){if(!(T&&T.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt){Ht.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const Jt=T.textures[Pt],te=Jt.format,Zt=Jt.type;if(!Ne.textureFormatReadable(te)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Zt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-tt&&at>=0&&at<=T.height-Z&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pt),I.readPixels(k,at,tt,Z,ee.convert(te),ee.convert(Zt),Tt))}finally{const Jt=R!==null?Yt.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(T,k,at,tt,Z,Tt,wt,Pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&wt!==void 0&&(Bt=Bt[wt]),Bt)if(k>=0&&k<=T.width-tt&&at>=0&&at<=T.height-Z){Ht.bindFramebuffer(I.FRAMEBUFFER,Bt);const Jt=T.textures[Pt],te=Jt.format,Zt=Jt.type;if(!Ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pt),I.readPixels(k,at,tt,Z,ee.convert(te),ee.convert(Zt),0);const be=R!==null?Yt.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,be);const Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await IS(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(le),I.deleteSync(Re),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,at=0){const tt=Math.pow(2,-at),Z=Math.floor(T.image.width*tt),Tt=Math.floor(T.image.height*tt),wt=k!==null?k.x:0,Pt=k!==null?k.y:0;ie.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,wt,Pt,Z,Tt),Ht.unbindTexture()};const Ls=I.createFramebuffer(),ha=I.createFramebuffer();this.copyTextureToTexture=function(T,k,at=null,tt=null,Z=0,Tt=null){Tt===null&&(Z!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Z,Z=0):Tt=0);let wt,Pt,Bt,Jt,te,Zt,le,be,Re;const ve=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(at!==null)wt=at.max.x-at.min.x,Pt=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,te=at.min.y,Zt=at.isBox3?at.min.z:0;else{const dn=Math.pow(2,-Z);wt=Math.floor(ve.width*dn),Pt=Math.floor(ve.height*dn),T.isDataArrayTexture?Bt=ve.depth:T.isData3DTexture?Bt=Math.floor(ve.depth*dn):Bt=1,Jt=0,te=0,Zt=0}tt!==null?(le=tt.x,be=tt.y,Re=tt.z):(le=0,be=0,Re=0);const Le=ee.convert(k.format),Qt=ee.convert(k.type);let ke;k.isData3DTexture?(ie.setTexture3D(k,0),ke=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ie.setTexture2DArray(k,0),ke=I.TEXTURE_2D_ARRAY):(ie.setTexture2D(k,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Se=I.getParameter(I.UNPACK_ROW_LENGTH),gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pa=I.getParameter(I.UNPACK_SKIP_PIXELS),We=I.getParameter(I.UNPACK_SKIP_ROWS),Ni=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const Ye=T.isDataArrayTexture||T.isData3DTexture,_n=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const dn=Yt.get(T),vn=Yt.get(k),yn=Yt.get(dn.__renderTarget),bi=Yt.get(vn.__renderTarget);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Oi=0;Oi<Bt;Oi++)Ye&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(T).__webglTexture,Z,Zt+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.get(k).__webglTexture,Tt,Re+Oi)),I.blitFramebuffer(Jt,te,wt,Pt,le,be,wt,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||Yt.has(T)){const dn=Yt.get(T),vn=Yt.get(k);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,Ls),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,ha);for(let yn=0;yn<Bt;yn++)Ye?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,Z,Zt+yn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,Z),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,Tt,Re+yn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,Tt),Z!==0?I.blitFramebuffer(Jt,te,wt,Pt,le,be,wt,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(ke,Tt,le,be,Re+yn,Jt,te,wt,Pt):I.copyTexSubImage2D(ke,Tt,le,be,Jt,te,wt,Pt);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(ke,Tt,le,be,Re,wt,Pt,Bt,Le,Qt,ve.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,Tt,le,be,Re,wt,Pt,Bt,Le,ve.data):I.texSubImage3D(ke,Tt,le,be,Re,wt,Pt,Bt,Le,Qt,ve):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,le,be,wt,Pt,Le,Qt,ve.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,le,be,ve.width,ve.height,Le,ve.data):I.texSubImage2D(I.TEXTURE_2D,Tt,le,be,wt,Pt,Le,Qt,ve);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pa),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ni),Tt===0&&k.generateMipmaps&&I.generateMipmap(ke),Ht.unbindTexture()},this.initRenderTarget=function(T){Yt.get(T).__webglFramebuffer===void 0&&ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ie.setTextureCube(T,0):T.isData3DTexture?ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ie.setTexture2DArray(T,0):ie.setTexture2D(T,0),Ht.unbindTexture()},this.resetState=function(){K=0,D=0,R=null,Ht.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}const bc=8,lE=`
#define MAX_COLORS ${bc}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,cE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function uE({className:o,style:e,rotation:i=45,speed:r=.2,colors:l=[],transparent:u=!0,autoRotate:d=0,scale:h=1,frequency:m=1,warpStrength:p=1,mouseInfluence:_=1,parallax:g=.5,noise:S=.1}){const y=Gn.useRef(null),A=Gn.useRef(null),C=Gn.useRef(null),M=Gn.useRef(null),v=Gn.useRef(null),B=Gn.useRef(i),U=Gn.useRef(d),F=Gn.useRef(new Ee(0,0)),X=Gn.useRef(new Ee(0,0)),N=Gn.useRef(8);return Gn.useEffect(()=>{const O=y.current,K=new dM,D=new Dg(-1,1,1,-1,0,1),R=new Io(2,2),H=Array.from({length:bc},()=>new ct(0,0,0)),Y=new Ui({vertexShader:cE,fragmentShader:lE,uniforms:{uCanvas:{value:new Ee(1,1)},uTime:{value:0},uSpeed:{value:r},uRot:{value:new Ee(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:u?1:0},uScale:{value:h},uFrequency:{value:m},uWarpStrength:{value:p},uPointer:{value:new Ee(0,0)},uMouseInfluence:{value:_},uParallax:{value:g},uNoise:{value:S}},premultipliedAlpha:!0,transparent:!0});M.current=Y;const st=new da(R,Y);K.add(st);const ut=new oE({antialias:!1,powerPreference:"high-performance",alpha:!0});A.current=ut,ut.outputColorSpace=ti,ut.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ut.setClearColor(0,u?0:1),ut.domElement.style.width="100%",ut.domElement.style.height="100%",ut.domElement.style.display="block",O.appendChild(ut.domElement);const ft=new SM,P=()=>{const W=O.clientWidth||1,pt=O.clientHeight||1;ut.setSize(W,pt,!1),Y.uniforms.uCanvas.value.set(W,pt)};if(P(),"ResizeObserver"in window){const W=new ResizeObserver(P);W.observe(O),v.current=W}else window.addEventListener("resize",P);const j=()=>{const W=ft.getDelta(),pt=ft.elapsedTime;Y.uniforms.uTime.value=pt;const L=(B.current%360+U.current*pt)*Math.PI/180,it=Math.cos(L),vt=Math.sin(L);Y.uniforms.uRot.value.set(it,vt);const Et=X.current,Nt=F.current,nt=Math.min(1,W*N.current);Et.lerp(Nt,nt),Y.uniforms.uPointer.value.copy(Et),ut.render(K,D),C.current=requestAnimationFrame(j)};return C.current=requestAnimationFrame(j),()=>{C.current!==null&&cancelAnimationFrame(C.current),v.current?v.current.disconnect():window.removeEventListener("resize",P),R.dispose(),Y.dispose(),ut.dispose(),ut.domElement&&ut.domElement.parentElement===O&&O.removeChild(ut.domElement)}},[m,_,S,g,h,r,u,p]),Gn.useEffect(()=>{const O=M.current,K=A.current;if(!O)return;B.current=i,U.current=d,O.uniforms.uSpeed.value=r,O.uniforms.uScale.value=h,O.uniforms.uFrequency.value=m,O.uniforms.uWarpStrength.value=p,O.uniforms.uMouseInfluence.value=_,O.uniforms.uParallax.value=g,O.uniforms.uNoise.value=S;const D=H=>{const Y=H.replace("#","").trim(),st=Y.length===3?[parseInt(Y[0]+Y[0],16),parseInt(Y[1]+Y[1],16),parseInt(Y[2]+Y[2],16)]:[parseInt(Y.slice(0,2),16),parseInt(Y.slice(2,4),16),parseInt(Y.slice(4,6),16)];return new ct(st[0]/255,st[1]/255,st[2]/255)},R=(l||[]).filter(Boolean).slice(0,bc).map(D);for(let H=0;H<bc;H++){const Y=O.uniforms.uColors.value[H];H<R.length?Y.copy(R[H]):Y.set(0,0,0)}O.uniforms.uColorCount.value=R.length,O.uniforms.uTransparent.value=u?1:0,K&&K.setClearColor(0,u?0:1)},[i,d,r,h,m,p,_,g,S,l,u]),Gn.useEffect(()=>{const O=M.current,K=y.current;if(!O||!K)return;const D=R=>{const H=K.getBoundingClientRect(),Y=(R.clientX-H.left)/(H.width||1)*2-1,st=-((R.clientY-H.top)/(H.height||1)*2-1);F.current.set(Y,st)};return K.addEventListener("pointermove",D),()=>{K.removeEventListener("pointermove",D)}},[]),ze.jsx("div",{ref:y,className:`color-bends-container ${o}`,style:e})}function Pg({className:o,children:e}){return ze.jsx("div",{className:"card "+o,children:e})}function fE({className:o,label:e,icon:i}){return ze.jsx("button",{className:o,children:ze.jsx("span",{children:e})})}const dE="/portfolio/assets/me-WbA8MyVs.png";function hE({className:o}){return ze.jsxs(Pg,{className:"profile-card "+o,children:[ze.jsxs("div",{className:"profile-card-content",children:[ze.jsx("h1",{children:"Jimdrix Diaz"}),ze.jsx("p",{children:"UI Designer and Developer"}),ze.jsxs("p",{className:"profile-quote",children:["Turning Complex Workflows ",ze.jsx("br",{}),"Into Effortless Experiences."]}),ze.jsx(fE,{label:"Get in Touch"})]}),ze.jsx("img",{src:dE,className:"profile-pic"})]})}function pE({className:o,work:e}){return ze.jsxs(Pg,{className:"work-card "+o,children:[ze.jsx("h3",{children:e.title}),ze.jsx("p",{className:"work-subtitle",children:e.subtitle}),ze.jsxs("div",{className:"work-details",children:[ze.jsxs("p",{children:["Role: ",e.role]}),ze.jsxs("p",{children:["Year: ",e.year]})]}),e.preview&&ze.jsx("div",{className:"work-preview",children:ze.jsx("img",{src:e.preview})})]})}const mE="/portfolio/assets/embark-preview-eEdIsEU7.png",xE="/portfolio/assets/apir-preview-D2CGz9Or.png",gE="/portfolio/assets/mybos-preview-DZ_vnbng.png",_E="/portfolio/assets/mystyle-preview-BAt38w-I.png",vE="/portfolio/assets/eatandrun-preview-qxSqpGPr.png",SE=[{title:"Embark",subtitle:"Employee Engagement B2B SaaS",role:"UI Designer & Developer",year:"2019 - 2025",preview:mE},{title:"APIR",subtitle:"Employee Recognition Platform",role:"UI Designer & Developer",year:"2023",preview:xE},{title:"My Customer Manager",subtitle:"Customer Support Portal",role:"UI/UX Designer & Developer",year:"2017 - 2019",preview:gE},{title:"MyStyle",subtitle:"E-commerce Fashion Blog",role:"UI Designer & Developer",year:"2016",preview:_E},{title:"Eat & Run",subtitle:"Personal Travel Blog",role:"UI/UX Designer & Developer",year:"2016 - 2022",preview:vE}];function ME(){return ze.jsx(ze.Fragment,{children:ze.jsxs("main",{children:[ze.jsx(uE,{className:"background",colors:["#ff5c7a","#8a5cff","#00ffd1"],rotation:0,speed:.2,scale:1.4,frequency:1,warpStrength:1,mouseInfluence:0,parallax:0,noise:.08,transparent:!0}),ze.jsxs("div",{className:"home grid",children:[ze.jsx(hE,{className:"item item-0"}),SE.map((o,e)=>ze.jsx(pE,{className:"item item-"+(e+1),work:o},e))]})]})})}jv.createRoot(document.getElementById("root")).render(ze.jsx(Gn.StrictMode,{children:ze.jsx(ME,{})}));
