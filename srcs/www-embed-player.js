(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||la});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function u(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.X=b.prototype}
function wa(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.o=0;this.s=this.j=null}
function xa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
wa.prototype.M=function(a){this.i=a};
function ya(a,b){a.j={Yb:b,fc:!0};a.h=a.o||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function v(a,b,c){a.h=c;return{value:b}}
wa.prototype.u=function(a){this.h=a};
function za(a,b,c){a.o=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.o=0}
function Ba(a){a.o=0;var b=a.j.Yb;a.j=null;return b}
function Ca(a){a.s=[a.j];a.o=0;a.m=0}
function Da(a){var b=a.s.splice(0)[0];(b=a.j=a.j||b)?b.fc?a.h=a.o||a.m:void 0!=b.u&&a.m<b.u?(a.h=b.u,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new wa;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.fc)throw b.Yb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.M):(a.h.M(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.M):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return qa});
n("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.m)}};
b.prototype.K=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.P(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.o(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.T(h,g):this.o(g)};
b.prototype.m=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.O();this.s()};
b.prototype.O=function(){var g=this;e(function(){if(g.F()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.s=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.P=function(g){var h=this.l();g.eb(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(w,t){return"function"==typeof w?function(A){try{m(w(A))}catch(E){q(E)}}:t}
var m,q,r=new b(function(w,t){m=w;q=t});
this.eb(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.eb=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).eb(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(A){return function(E){w[A]=E;t--;0==t&&m(w)}}
var w=[],t=0;do w.push(void 0),t++,d(k.value).eb(r(w.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ka(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ha(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ka(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||va});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Na=Na||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Oa(a){a.zb=void 0;a.getInstance=function(){return a.zb?a.zb:a.zb=new a}}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ya=Va:Ya=Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.X=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.lr=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.j=Eb===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.toString=function(){return this.j+""};
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.j=b===Pb?a:""}
Ob.prototype.toString=function(){return this.j.toString()};
Ob.prototype.i=!0;Ob.prototype.h=function(){return this.j.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.j;Pa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Sb=new Ob("about:invalid#zClosurez",Pb);function Tb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Tb().indexOf(a)}
;function Ub(){return C("Trident")||C("MSIE")}
function Vb(){return C("Firefox")||C("FxiOS")}
function Wb(){return C("Safari")&&!(Xb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Vb()||C("Silk")||C("Android"))}
function Xb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Xb()||Vb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Tb();if("Internet Explorer"===a){if(Ub())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Xb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Vb()||"Safari"===a&&Wb()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var bc={};function ec(a){this.j=bc===bc?a:"";this.i=!0}
ec.prototype.h=function(){return this.j.toString()};
ec.prototype.toString=function(){return this.j.toString()};function fc(a,b){b instanceof Ob||b instanceof Ob||(b="object"==typeof b&&b.i?b.h():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Ob(b,Pb));a.href=Qb(b)}
function gc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=hc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function ic(){return hc("script[nonce]")}
var jc=/^[\w+/_-]+[=]{0,2}$/;function hc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&jc.test(a)?a:"":""}
;function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)rc(a[b],a[b+1],c);return c.join("&")}
function tc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function uc(a,b){var c=2==arguments.length?sc(arguments[1],0):sc(arguments,1);return qc(a,c)}
function vc(a,b){b=tc(b);return qc(a,b)}
function wc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return qc(a,b+c)}
function xc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var yc=/#|$/,Cc=/[?&]($|#)/;function Dc(a,b){for(var c=a.search(yc),d=0,e,f=[];0<=(e=xc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Cc,"$1")}
;function Ec(a){y.setTimeout(function(){throw a;},0)}
;function Fc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Gc(){var a=Tb(),b="";C("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Fc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=Tb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Kb(String(b||"")).split(".");for(var c=Kb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};var Ic=C("Opera"),Jc=Ub(),Kc=C("Edge"),Lc=C("Gecko")&&!(-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Mc=-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"),Nc=C("Android");function Oc(){var a=y.document;return a?a.documentMode:void 0}
var Pc;a:{var Qc="",Rc=function(){var a=Tb();if(Lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kc)return/Edge\/([\d\.]+)/.exec(a);if(Jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mc)return/WebKit\/(\S+)/.exec(a);if(Ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rc&&(Qc=Rc?Rc[1]:"");if(Jc){var Sc=Oc();if(null!=Sc&&Sc>parseFloat(Qc)){Pc=String(Sc);break a}}Pc=Qc}var Tc=Pc,Uc;if(y.document&&Jc){var Vc=Oc();Uc=Vc?Vc:parseInt(Tc,10)||void 0}else Uc=void 0;var Wc=Uc;var Xc=Fc()||C("iPod"),Yc=C("iPad");Yb();Xb();var Zc=Wb()&&!(Fc()||C("iPad")||C("iPod"));var $c={},ad=null;function bd(a,b){Qa(a);void 0===b&&(b=0);cd();b=$c[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+m+g+h+k}m=0;k=d;switch(a.length-e){case 2:m=a[e+1],k=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+k+d}return c.join("")}
function dd(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;ed(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ed(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),q=ad[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
cd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function cd(){if(!ad){ad={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));$c[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ad[f]&&(ad[f]=e)}}}}
;var fd="undefined"!==typeof Uint8Array;function gd(a){return fd&&null!=a&&a instanceof Uint8Array}
var hd={};var id;function jd(a){if(a!==hd)throw Error("illegal external caller");}
function kd(a,b){jd(b);this.ba=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function ld(){return id||(id=new kd(null,hd))}
kd.prototype.Oa=function(){return null==this.ba};
kd.prototype.sizeBytes=function(){jd(hd);var a=this.ba;null==a||gd(a)||("string"===typeof a?a=dd(a):(Pa(a),a=null));return(a=null==a?a:this.ba=a)?a.length:0};var md="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function nd(a,b){if(md)return a[md]|=b;if(void 0!==a.fa)return a.fa|=b;Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function od(a,b){md?a[md]&&(a[md]&=~b):void 0!==a.fa&&(a.fa&=~b)}
function pd(a){var b;md?b=a[md]:b=a.fa;return null==b?0:b}
function qd(a,b){md?a[md]=b:void 0!==a.fa?a.fa=b:Object.defineProperties(a,{fa:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function rd(a){nd(a,1);return a}
function wd(a){return!!(pd(a)&2)}
function xd(a){nd(a,16);return a}
function yd(a,b){qd(b,(a|0)&-51)}
function zd(a,b){qd(b,(a|18)&-41)}
function Ad(a,b){var c=pd(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),qd(a,c|b));return a}
;var Bd={};function Cd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Dd,Ed,Fd=[];qd(Fd,23);Ed=Object.freeze(Fd);function Gd(a){if(wd(a.C))throw Error("Cannot mutate an immutable Message");}
function Hd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Cd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Id(a){return a.displayName||a.name||"unknown type name"}
function Jd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Id(b)+" but got "+(a&&Id(a.constructor)));return a}
;var Kd;function Ld(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(pd(a)&128))return a=Array.prototype.slice.call(a),Hd(a),a}else{if(gd(a))return bd(a);if(a instanceof kd){var b=a.ba;return null==b?"":"string"===typeof b?b:a.ba=bd(b)}}}return a}
;function Md(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Nd(a,b,c,void 0!==d);else if(Cd(a)){var e={},f;for(f in a)e[f]=Md(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function Nd(a,b,c,d){var e=pd(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=Md(a[f],b,c,d);c(e,a);return a}
function Od(a){return a.jb===Bd?a.toJSON():Ld(a)}
function Pd(a){if(!a)return a;if("object"===typeof a){if(gd(a))return new Uint8Array(a);if(a.jb===Bd)return a.clone()}return a}
function Qd(a,b){a&128&&Hd(b)}
;function Rd(a){return a.j||(a.j=a.C[a.l+a.ta]={})}
function Sd(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:c&&a.j&&(c=a.j[b],null!=c)?c:a.C[b+a.ta]}
function D(a,b,c,d){Gd(a);return Td(a,b,c,d)}
function Td(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.l||d)return Rd(a)[b]=c,a;a.C[b+a.ta]=c;(c=a.j)&&b in c&&delete c[b];return a}
function Ud(a,b){a&&wd(b.C)&&wd(a.C);return a}
function Vd(a,b,c,d,e){var f=Sd(a,b,d);Array.isArray(f)||(f=Ed);var g=pd(f);g&1||rd(f);if(e)g&2||nd(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&od(f,16):(f=rd(Array.prototype.slice.call(f)),Td(a,b,f,d))}return f}
function Wd(a,b,c,d){Gd(a);(c=Xd(a,c))&&c!==b&&null!=d&&Td(a,c,void 0,!1);return Td(a,b,d)}
function Xd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Sd(a,e)&&(0!==c&&Td(a,c,void 0,!1),c=e)}return c}
function Yd(a,b,c,d){var e=d=void 0===d?!1:d,f=Sd(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.jb!==Bd?g?new b(f):void 0:f;h!==f&&null!=h&&(Td(a,c,h,e),nd(h.C,pd(a.C)&-33));b=Ud(h,a);if(null==b)return b;wd(a.C)||(e=Zd(b),e!==b&&(b=e,Td(a,c,b,d)));return Ud(b,a)}
function $d(a,b,c,d,e,f){a.h||(a.h={});var g=a.h[c],h=Vd(a,c,3,d,f);if(g)f||(Object.isFrozen(g)?e||(g=Array.prototype.slice.call(g),a.h[c]=g):e&&Object.freeze(g));else{g=[];var k=!!(pd(a.C)&16),m=wd(h);!f&&m&&(h=rd(Array.prototype.slice.call(h)),Td(a,c,h,d));d=m;for(var q=0;q<h.length;q++){var r=h[q];var w=b;var t=k,A=!1;A=void 0===A?!1:A;t=void 0===t?!1:t;w=Array.isArray(r)?new w(t?xd(r):r):A?new w:void 0;void 0!==w&&(d=d||wd(r),g.push(w),m&&nd(w.C,2))}a.h[c]=g;a=h;b=!d;Object.isFrozen(a)||(c=pd(a)|
33,qd(a,b?c|8:c&-9));(f||e&&m)&&nd(g,2);(f||e)&&Object.freeze(g)}return g}
function ae(a,b,c,d){var e=wd(a.C);b=$d(a,b,c,d,e,e);a=Vd(a,c,3,d,e);if(!e&&a&&!(pd(a)&8)){for(e=0;e<b.length;e++)c=b[e],d=Zd(c),c!==d&&(b[e]=d,a[e]=b[e].C);nd(a,8)}return b}
function G(a,b,c,d){Gd(a);null!=d?Jd(d,b):d=void 0;return Td(a,c,d)}
function be(a,b,c,d,e){Gd(a);null!=e?Jd(e,b):e=void 0;Wd(a,c,d,e)}
function ce(a,b,c,d,e){Gd(a);if(null!=d){var f=rd([]);for(var g=!1,h=0;h<d.length;h++)f[h]=Jd(d[h],b).C,g=g||wd(f[h]);a.h||(a.h={});a.h[c]=d;b=f;g?od(b,8):nd(b,8)}else a.h&&(a.h[c]=void 0),f=Ed;return Td(a,c,f,e)}
function de(a,b,c,d){Gd(a);var e=$d(a,c,b,void 0,!1,!1);c=null!=d?Jd(d,c):new c;a=Vd(a,b,2,void 0,!1);e.push(c);a.push(c.C);wd(c.C)&&od(a,8)}
function ee(a,b){return Sd(a,b)}
function fe(a,b){return null==a?b:a}
;function ge(a,b,c){c=void 0===c?zd:c;if(null!=a){if(fd&&a instanceof Uint8Array)return a.length?new kd(new Uint8Array(a),hd):ld();if(Array.isArray(a)){var d=pd(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return qd(a,d|2),a;a=Nd(a,ge,c,!0);b=pd(a);b&4&&b&2&&Object.freeze(a);return a}return a.jb===Bd?he(a):a}}
function ie(a,b,c,d,e,f,g){(a=a.h&&a.h[c])?(d=0<a.length?a[0].constructor:void 0,f=pd(a),f&2||(a=ib(a,he),zd(f,a),Object.freeze(a)),ce(b,d,c,a,e)):D(b,c,ge(d,f,g),e)}
function he(a){if(wd(a.C))return a;a=je(a,!0);nd(a.C,2);return a}
function je(a,b){var c=a.C,d=xd([]),e=a.constructor.h;e&&d.push(e);0!==(pd(c)&128)&&Hd(d);b=b||wd(a.C)?zd:yd;e=a.constructor;pd(d);Kd=d;d=new e(d);Kd=void 0;a.Na&&(d.Na=a.Na.slice());e=!!(pd(c)&16);for(var f=0;f<c.length;f++){var g=c[f];if(f===c.length-1&&Cd(g))for(var h in g){var k=+h;Number.isNaN(k)?Rd(d)[k]=g[k]:ie(a,d,k,g[h],!0,e,b)}else ie(a,d,f-a.ta,g,!1,e,b)}return d}
function Zd(a){if(!wd(a.C))return a;var b=je(a,!1);b.m=a;return b}
;function H(a,b,c){null==a&&(a=Kd);Kd=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=!0;qd(a,48)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var k=nd(a,0),m=k;if(h=0!==(16&m))(g=0!==(32&m))||(m|=32);if(e)if(128&m)d=0;else{if(0<a.length){var q=a[a.length-1];if(Cd(q)&&"g"in q){d=0;m|=128;delete q.g;var r=!0,w;for(w in q){r=!1;break}r&&a.pop()}}}else if(128&m)throw Error();k!==m&&qd(a,m)}this.ta=(f?0:-1)-d;this.h=void 0;this.C=
a;a:{f=this.C.length;d=f-1;if(f&&(f=this.C[d],Cd(f))){this.j=f;this.l=d-this.ta;break a}void 0!==b&&-1<b?(this.l=Math.max(b,d+1-this.ta),this.j=void 0):this.l=Number.MAX_VALUE}if(!e&&this.j&&"g"in this.j)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!g&&!0;e=this.l;var t;for(h=0;h<c.length;h++)g=c[h],g<e?(g+=this.ta,(d=a[g])?ke(d,b):a[g]=Ed):(t||(t=Rd(this)),(d=t[g])?ke(d,b):t[g]=Ed)}}
H.prototype.toJSON=function(){var a=this.C,b;Dd?b=a:b=Nd(a,Od,Qd);return b};
function le(a){Dd=!0;try{return JSON.stringify(a.toJSON(),me)}finally{Dd=!1}}
H.prototype.clone=function(){var a=Nd(this.C,Pd,yd);xd(a);Kd=a;a=new this.constructor(a);Kd=void 0;ne(a,this);return a};
function ke(a,b){if(Array.isArray(a)){var c=pd(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&qd(a,c|d)}}
H.prototype.jb=Bd;H.prototype.toString=function(){return this.C.toString()};
function me(a,b){return Ld(b)}
function ne(a,b){b.Na&&(a.Na=b.Na.slice());var c=b.h;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=ae(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ne(f[g],e[g])}else throw Error("unexpected object: type: "+Pa(e)+": "+e);}}}}
;function oe(a){var b=this.h,c=this.i;return this.isRepeated?ae(a,b,c,!0):Yd(a,b,c,!0)}
;function pe(a){this.Sb=a}
;function qe(a,b,c){this.i=a;this.l=b;this.h=c||[];this.Aa=new Map}
l=qe.prototype;l.Fc=function(a){var b=Ka.apply(1,arguments),c=this.ub(b);c?c.push(new pe(a)):this.sc(a,b)};
l.sc=function(a){this.Aa.set(this.Zb(Ka.apply(1,arguments)),[new pe(a)])};
l.ub=function(){var a=this.Zb(Ka.apply(0,arguments));return this.Aa.has(a)?this.Aa.get(a):void 0};
l.Rc=function(){var a=this.ub(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.Aa.clear()};
l.Zb=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function re(a,b){qe.call(this,a,3,b)}
u(re,qe);re.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.Rc(b);d&&(c=d.Sb);this.sc(c+a,b)};function se(a,b){qe.call(this,a,2,b)}
u(se,qe);se.prototype.j=function(a){this.Fc(a,Ka.apply(1,arguments))};function te(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ue(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?ue.apply(null,d):te(d)}}
;function J(){this.M=this.M;this.v=this.v}
J.prototype.M=!1;J.prototype.h=function(){return this.M};
J.prototype.dispose=function(){this.M||(this.M=!0,this.B())};
function ve(a,b){we(a,Za(te,b))}
function we(a,b){a.M?b():(a.v||(a.v=[]),a.v.push(b))}
J.prototype.B=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function xe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
xe.prototype.stopPropagation=function(){this.j=!0};
xe.prototype.preventDefault=function(){this.defaultPrevented=!0};function ye(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ze(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ae[c])c=Ae[c];else{c=String(c);if(!Ae[c]){var f=/function\s+([^\(]+)/m.exec(c);Ae[c]=f?f[1]:"[Anonymous]"}c=Ae[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ze(a,b){b||(b={});b[Be(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Be(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ze(a,b));return c}
function Be(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ae={};var Ce=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function De(a,b){xe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(De,xe);var Je={2:"touch",3:"pen",4:"mouse"};
De.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Lc){a:{try{Hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Je[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&De.X.preventDefault.call(this)};
De.prototype.stopPropagation=function(){De.X.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
De.prototype.preventDefault=function(){De.X.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ke="closure_listenable_"+(1E6*Math.random()|0);var Le=0;function Me(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hb=e;this.key=++Le;this.Pa=this.cb=!1}
function Ne(a){a.Pa=!0;a.listener=null;a.proxy=null;a.src=null;a.hb=null}
;function Oe(a){this.src=a;this.listeners={};this.h=0}
Oe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Pe(a,b,d,e);-1<g?(b=a[g],c||(b.cb=!1)):(b=new Me(b,this.src,f,!!d,e),b.cb=c,a.push(b));return b};
Oe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Pe(e,b,c,d);return-1<b?(Ne(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Qe(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Ne(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Pe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Pa&&f.listener==b&&f.capture==!!c&&f.hb==d)return e}return-1}
;var Re="closure_lm_"+(1E6*Math.random()|0),Se={},Te=0;function Ue(a,b,c,d,e){if(d&&d.once)Ve(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ue(a,b[f],c,d,e);else c=We(c),a&&a[Ke]?a.ha(b,c,Ra(d)?!!d.capture:!!d,e):Xe(a,b,c,!1,d,e)}
function Xe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Ye(a);h||(a[Re]=h=new Oe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ze();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ce||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent($e(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Te++}}
function Ze(){function a(c){return b.call(a.src,a.listener,c)}
var b=af;return a}
function Ve(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ve(a,b[f],c,d,e);else c=We(c),a&&a[Ke]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Xe(a,b,c,!0,d,e)}
function bf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)bf(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=We(c),a&&a[Ke])?a.l.remove(String(b),c,d,e):a&&(a=Ye(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Pe(b,c,d,e)),(c=-1<a?b[a]:null)&&cf(c))}
function cf(a){if("number"!==typeof a&&a&&!a.Pa){var b=a.src;if(b&&b[Ke])Qe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent($e(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Te--;(c=Ye(b))?(Qe(c,a),0==c.h&&(c.src=null,b[Re]=null)):Ne(a)}}}
function $e(a){return a in Se?Se[a]:Se[a]="on"+a}
function af(a,b){if(a.Pa)a=!0;else{b=new De(b,this);var c=a.listener,d=a.hb||a.src;a.cb&&cf(a);a=c.call(d,b)}return a}
function Ye(a){a=a[Re];return a instanceof Oe?a:null}
var df="__closure_events_fn_"+(1E9*Math.random()>>>0);function We(a){if("function"===typeof a)return a;a[df]||(a[df]=function(b){return a.handleEvent(b)});
return a[df]}
;function ef(){J.call(this);this.l=new Oe(this);this.Cc=this;this.ja=null}
$a(ef,J);ef.prototype[Ke]=!0;ef.prototype.addEventListener=function(a,b,c,d){Ue(this,a,b,c,d)};
ef.prototype.removeEventListener=function(a,b,c,d){bf(this,a,b,c,d)};
function ff(a,b){var c=a.ja;if(c){var d=[];for(var e=1;c;c=c.ja)d.push(c),++e}a=a.Cc;c=b.type||b;"string"===typeof b?b=new xe(b,a):b instanceof xe?b.target=b.target||a:(e=b,b=new xe(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=gf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=gf(g,c,!0,b)&&e,b.j||(e=gf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=gf(g,c,!1,b)&&e}
ef.prototype.B=function(){ef.X.B.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ne(d[e]);delete a.listeners[c];a.h--}}this.ja=null};
ef.prototype.ha=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function gf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Pa&&g.capture==c){var h=g.listener,k=g.hb||g.src;g.cb&&Qe(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function hf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
hf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function jf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function kf(a,b){return a+Math.random()*(b-a)}
;function lf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=lf.prototype;l.clone=function(){return new lf(this.x,this.y)};
l.equals=function(a){return a instanceof lf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function mf(a,b){this.width=a;this.height=b}
l=mf.prototype;l.clone=function(){return new mf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.Oa=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function nf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function of(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function pf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var qf;function rf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=of("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Rb;c.Rb=null;e()}};
return function(e){d.next={Rb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function sf(){this.i=this.h=null}
sf.prototype.add=function(a,b){var c=tf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
sf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var tf=new hf(function(){return new uf},function(a){return a.reset()});
function uf(){this.next=this.scope=this.h=null}
uf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
uf.prototype.reset=function(){this.next=this.scope=this.h=null};var vf,wf=!1,xf=new sf;function yf(a,b){vf||zf();wf||(vf(),wf=!0);xf.add(a,b)}
function zf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);vf=function(){a.then(Af)}}else vf=function(){var b=Af;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(qf||(qf=rf()),qf(b)):y.setImmediate(b)}}
function Af(){for(var a;a=xf.remove();){try{a.h.call(a.scope)}catch(b){Ec(b)}jf(tf,a)}wf=!1}
;function Bf(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Cf(b,2,c)},function(c){Cf(b,3,c)})}catch(c){Cf(this,3,c)}}
function Df(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Df.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Ef=new hf(function(){return new Df},function(a){a.reset()});
function Ff(a,b,c){var d=Ef.get();d.j=a;d.i=b;d.context=c;return d}
function Gf(a){return new Bf(function(b,c){c(a)})}
Bf.prototype.then=function(a,b,c){return Hf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Bf.prototype.$goog_Thenable=!0;l=Bf.prototype;l.qb=function(a,b){return Hf(this,null,a,b)};
l.catch=Bf.prototype.qb;l.cancel=function(a){if(0==this.h){var b=new If(a);yf(function(){Jf(this,b)},this)}};
function Jf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Jf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Kf(c),Lf(c,e,3,b)))}a.j=null}else Cf(a,3,b)}
function Mf(a,b){a.i||2!=a.h&&3!=a.h||Nf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Hf(a,b,c,d){var e=Ff(null,null,null);e.h=new Bf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof If?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Mf(a,e);return e.h}
l.Ad=function(a){this.h=0;Cf(this,2,a)};
l.Bd=function(a){this.h=0;Cf(this,3,a)};
function Cf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Ad,f=a.Bd;if(d instanceof Bf){Mf(d,Ff(e||db,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){Of(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,Nf(a),3!=b||c instanceof If||Pf(a,c))}}
function Of(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Nf(a){a.o||(a.o=!0,yf(a.Pc,a))}
function Kf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
l.Pc=function(){for(var a;a=Kf(this);)Lf(this,a,this.h,this.v);this.o=!1};
function Lf(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Qf(b,c,d);else try{b.l?b.j.call(b.context):Qf(b,c,d)}catch(e){Rf.call(null,e)}jf(Ef,b)}
function Qf(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Pf(a,b){a.m=!0;yf(function(){a.m&&Rf.call(null,b)})}
var Rf=Ec;function If(a){bb.call(this,a)}
$a(If,bb);If.prototype.name="cancel";function Sf(a,b){ef.call(this);this.j=a||1;this.i=b||y;this.m=Ya(this.yd,this);this.o=Date.now()}
$a(Sf,ef);l=Sf.prototype;l.enabled=!1;l.aa=null;function Tf(a,b){a.j=b;a.aa&&a.enabled?(a.stop(),a.start()):a.aa&&a.stop()}
l.yd=function(){if(this.enabled){var a=Date.now()-this.o;0<a&&a<.8*this.j?this.aa=this.i.setTimeout(this.m,this.j-a):(this.aa&&(this.i.clearTimeout(this.aa),this.aa=null),ff(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.aa||(this.aa=this.i.setTimeout(this.m,this.j),this.o=Date.now())};
l.stop=function(){this.enabled=!1;this.aa&&(this.i.clearTimeout(this.aa),this.aa=null)};
l.B=function(){Sf.X.B.call(this);this.stop();delete this.i};
function Uf(a,b,c){if("function"===typeof a)c&&(a=Ya(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ya(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Vf(a){this.v=a;this.h=new Map;this.o=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new Sf(this.flushInterval);this.i.ha("tick",this.tb,!1,this);this.m=!1}
l=Vf.prototype;l.pc=function(a){this.m=a;this.l=1};
function Wf(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.tb()}
l.tb=function(){var a=this.h.values();a=[].concat(ja(a)).filter(function(b){return b.Aa.size});
a.length&&this.v.flush(a,this.m);Xf(a);this.j=0;this.i.enabled&&this.i.stop()};
l.Ob=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new re(a,b))};
l.Pb=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new se(a,b))};
function Yf(a,b){return a.o.has(b)?void 0:a.h.get(b)}
l.rb=function(a){this.Ac.apply(this,[a,1].concat(ja(Ka.apply(1,arguments))))};
l.Ac=function(a,b){var c=Ka.apply(2,arguments),d=Yf(this,a);d&&d instanceof re&&(d.j(b,c),Wf(this))};
l.sb=function(a,b){var c=Ka.apply(2,arguments),d=Yf(this,a);d&&d instanceof se&&(d.j(b,c),Wf(this))};
function Xf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Zf(a){this.h=a;this.h.Ob("/client_streamz/bg/fiec",{Ma:3,La:"rk"},{Ma:2,La:"ec"})}
function $f(a){this.h=a;this.h.Pb("/client_streamz/bg/fil",{Ma:3,La:"rk"})}
function ag(a){this.h=a;this.h.Ob("/client_streamz/bg/fsc",{Ma:3,La:"rk"})}
function bg(a){this.h=a;this.h.Pb("/client_streamz/bg/fsl",{Ma:3,La:"rk"})}
;function cg(a){H.call(this,a,-1,dg)}
u(cg,H);function eg(a){H.call(this,a,-1,fg)}
u(eg,H);function gg(a){H.call(this,a)}
u(gg,H);function hg(a){H.call(this,a)}
u(hg,H);var dg=[3,6,4],fg=[1],ig=[1,2,3],jg=[1,2,3];function kg(a){H.call(this,a,-1,lg)}
u(kg,H);var lg=[1];function mg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ng(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var w=g,t=0;64>t;t+=4)w[t/4]=r[t]<<24|r[t+1]<<16|r[t+2]<<8|r[t+3];for(t=16;80>t;t++)r=w[t-3]^w[t-8]^w[t-14]^w[t-16],w[t]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],E=e[2],F=e[3],O=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var N=F^A&(E^F);var R=1518500249}else N=A^E^F,R=1859775393;else 60>t?(N=A&E|F&(A|E),R=2400959708):(N=A^E^F,R=3395469782);N=((r<<5|r>>>27)&4294967295)+N+O+R+w[t]&4294967295;O=F;F=E;E=(A<<30|A>>>2)&4294967295;A=r;r=N}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(r,w){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var t=[],A=0,E=r.length;A<E;++A)t.push(r.charCodeAt(A));r=t}w||(w=r.length);t=0;if(0==m)for(;t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64;for(;t<w;)if(f[m++]=r[t++],q++,64==m)for(m=0,b(f);t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64}
function d(){var r=[],w=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=w&255,w>>>=8;b(f);for(t=w=0;5>t;t++)for(var A=24;0<=A;A-=8)r[w++]=e[t]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Mc:function(){for(var r=d(),w="",t=0;t<r.length;t++)w+="0123456789ABCDEF".charAt(Math.floor(r[t]/16))+"0123456789ABCDEF".charAt(r[t]%16);return w}}}
;function og(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,pg(mg(d),a,c||null)].join(" "):null}
function pg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),qg(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=qg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qg(a){var b=ng();b.update(a);return b.Mc().toLowerCase()}
;var rg={};function sg(a){this.h=a||{cookie:""}}
l=sg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Oa())return!0;this.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Fr;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ib}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ib:0,path:b,domain:c});return d};
l.xb=function(){return tg(this).keys};
l.Oa=function(){return!this.h.cookie};
l.clear=function(){for(var a=tg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function tg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ug=new sg("undefined"==typeof document?null:document);function vg(a){return!!rg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function wg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;vg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new sg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");vg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function xg(a,b,c,d){(a=y[a])||(a=(new sg(document)).get(b));return a?og(a,c,d):null}
function yg(a,b){b=void 0===b?!1:b;var c=mg(String(y.location.href)),d=[];if(wg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new sg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?og(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&vg(b)&&((b=xg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=xg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function zg(a){H.call(this,a,-1,Ag)}
u(zg,H);var Ag=[2];function Bg(a){this.h=this.i=this.j=a}
Bg.prototype.reset=function(){this.h=this.i=this.j};
Bg.prototype.getValue=function(){return this.i};function Cg(a){var b=[];Dg(new Eg,a,b);return b.join("")}
function Eg(){}
function Dg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Dg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Fg(d,c),c.push(":"),Dg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Fg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Gg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Hg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Fg(a,b){b.push('"',a.replace(Hg,function(c){var d=Gg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Gg[c]=d);return d}),'"')}
;function Ig(){}
Ig.prototype.h=null;Ig.prototype.getOptions=function(){var a;(a=this.h)||(a={},Jg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Kg;function Lg(){}
$a(Lg,Ig);function Mg(a){return(a=Jg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Jg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Kg=new Lg;function Ng(a){ef.call(this);this.headers=new Map;this.K=a||null;this.i=!1;this.I=this.A=null;this.m=this.T="";this.j=this.P=this.s=this.O=!1;this.o=0;this.F=null;this.ca="";this.V=this.W=!1}
$a(Ng,ef);var Og=/^https?$/i,Pg=["POST","PUT"],Qg=[];function Rg(a,b,c,d,e,f,g){var h=new Ng;Qg.push(h);b&&h.ha("complete",b);h.l.add("ready",h.Kc,!0,void 0,void 0);f&&(h.o=Math.max(0,f));g&&(h.W=g);h.send(a,c,d,e)}
l=Ng.prototype;l.Kc=function(){this.dispose();lb(Qg,this)};
l.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.m="";this.O=!1;this.i=!0;this.A=this.K?Mg(this.K):Mg(Kg);this.I=this.K?this.K.getOptions():Kg.getOptions();this.A.onreadystatechange=Ya(this.ic,this);try{this.getStatus(),this.P=!0,this.A.open(b,String(a),!0),this.P=!1}catch(g){this.getStatus();Sg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=fb(Pg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.ca&&(this.A.responseType=this.ca);"withCredentials"in this.A&&this.A.withCredentials!==this.W&&(this.A.withCredentials=this.W);try{Tg(this),0<this.o&&(this.V=Ug(this.A),this.getStatus(),this.V?(this.A.timeout=this.o,this.A.ontimeout=Ya(this.vc,this)):
this.F=Uf(this.vc,this.o,this)),this.getStatus(),this.s=!0,this.A.send(a),this.s=!1}catch(g){this.getStatus(),Sg(this,g)}};
function Ug(a){return Jc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.vc=function(){"undefined"!=typeof Na&&this.A&&(this.m="Timed out after "+this.o+"ms, aborting",this.getStatus(),ff(this,"timeout"),this.abort(8))};
function Sg(a,b){a.i=!1;a.A&&(a.j=!0,a.A.abort(),a.j=!1);a.m=b;Xg(a);Yg(a)}
function Xg(a){a.O||(a.O=!0,ff(a,"complete"),ff(a,"error"))}
l.abort=function(){this.A&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.A.abort(),this.j=!1,ff(this,"complete"),ff(this,"abort"),Yg(this))};
l.B=function(){this.A&&(this.i&&(this.i=!1,this.j=!0,this.A.abort(),this.j=!1),Yg(this,!0));Ng.X.B.call(this)};
l.ic=function(){this.h()||(this.P||this.s||this.j?Zg(this):this.cd())};
l.cd=function(){Zg(this)};
function Zg(a){if(a.i&&"undefined"!=typeof Na)if(a.I[1]&&4==$g(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==$g(a))Uf(a.ic,0,a);else if(ff(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(ah(a))ff(a,"complete"),ff(a,"success");else{try{var b=2<$g(a)?a.A.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Xg(a)}}finally{Yg(a)}}}
function Yg(a,b){if(a.A){Tg(a);var c=a.A,d=a.I[0]?function(){}:null;
a.A=null;a.I=null;b||ff(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Tg(a){a.A&&a.V&&(a.A.ontimeout=null);a.F&&(y.clearTimeout(a.F),a.F=null)}
l.isActive=function(){return!!this.A};
l.isComplete=function(){return 4==$g(this)};
function ah(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Og.test(a?a.toLowerCase():"");c=b}return c}
function $g(a){return a.A?a.A.readyState:0}
l.getStatus=function(){try{return 2<$g(this)?this.A.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function bh(a){H.call(this,a)}
u(bh,H);function ch(a){H.call(this,a,-1,dh)}
u(ch,H);var dh=[1];var eh=["platform","platformVersion","architecture","model","uaFullVersion"];new ch;function fh(a){H.call(this,a)}
u(fh,H);function gh(a){H.call(this,a,31,hh)}
u(gh,H);var hh=[3,20,27];function ih(a){H.call(this,a,17,jh)}
u(ih,H);var jh=[3,5];function kh(a){H.call(this,a,6,lh)}
u(kh,H);var lh=[5];function mh(a){H.call(this,a)}
u(mh,H);var nh;nh=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=oe}(175237375,{vr:0},mh);function oh(a,b,c,d,e,f,g,h,k,m,q){ef.call(this);var r=this;this.O="";this.j=[];this.Mb="";this.Nb=this.sa=-1;this.Ya=!1;this.I=this.m=null;this.F=0;this.Dc=1;this.timeoutMillis=0;this.ca=!1;ef.call(this);this.Za=b||function(){};
this.s=new ph(a,f);this.Bc=d;this.Xa=q;this.Ec=Za(kf,0,1);this.T=e||null;this.K=c||null;this.V=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ha=f||!1;!this.Ha&&(65<=ac("Chromium")||45<=ac("Firefox")||12<=ac("Safari")||(Fc()||C("iPad")||C("iPod"))&&Gc());a=D(new fh,1,1);qh(this.s,a);this.o=new Bg(1E4);this.i=new Sf(this.o.getValue());ve(this,this.i);m=rh(this,m);Ue(this.i,"tick",m,!1,this);this.P=new Sf(6E5);ve(this,this.P);Ue(this.P,"tick",m,!1,this);this.V||this.P.start();
this.Ha||(Ue(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.W()}),Ue(document,"pagehide",this.W,!1,this))}
u(oh,ef);function rh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
oh.prototype.B=function(){this.W();ef.prototype.B.call(this)};
function sh(a){a.T||(a.T=.01>a.Ec()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function th(a,b){a.o=new Bg(1>b?1:b);Tf(a.i,a.o.getValue())}
oh.prototype.log=function(a){a=a.clone();var b=this.Dc++;D(a,21,b);this.O&&D(a,26,this.O);if(!Sd(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null!=Sd(a,15,!1)||D(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),G(a,zg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.F;this.j.push(a);ff(this,new uh(a));this.V||this.i.enabled||this.i.start()};
oh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ca)vh(this);else{var d=Date.now();if(this.Nb>d&&this.sa<d)b&&b("throttled");else{var e=wh(this.s,this.j,this.F);d={};var f=this.Za();f&&(d.Authorization=f);var g=sh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=wc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=wc(g,"pageId",this.pageId));if(f&&this.Mb===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.F=0;var h=le(e),
k;this.I&&this.I.isSupported(h.length)&&(k=this.I.compress(h));var m={url:g,body:h,Ic:1,Gb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(t){c.o.reset();Tf(c.i,c.o.getValue());if(t){var A=null;try{var E=JSON.parse(t.replace(")]}'\n",""));A=new kh(E)}catch(F){}A&&(t=Number(fe(Sd(A,1),"-1")),0<t&&(c.sa=Date.now(),c.Nb=c.sa+t),A=nh.j(A))&&(A=fe(Sd(A,1),-1),-1!=A&&(c.Ya||th(c,A)))}a&&a()},r=function(t,A){var E=ae(e,gh,3),F=c.o;
F.h=Math.min(3E5,2*F.h);F.i=Math.min(3E5,F.h+Math.round(.2*(Math.random()-.5)*F.h));Tf(c.i,c.o.getValue());401===t&&f&&(c.Mb=f);void 0===A&&(A=500<=t&&600>t||401===t||0===t);A&&(c.j=E.concat(c.j),c.V||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},w=function(){c.Xa?c.Xa.send(m,q,r):c.Bc(m,q,r)};
k?k.then(function(t){m.Gb["Content-Encoding"]="gzip";m.Gb["Content-Type"]="application/binary";m.body=t;m.Ic=2;w()},function(){w()}):w()}}}};
oh.prototype.W=function(){this.flush()};
function vh(a){xh(a,function(b,c){b=wc(b,"format","json");b=window.navigator.sendBeacon(b,le(c));a.ca&&!b&&(a.ca=!1);return b})}
function xh(a,b){if(0!==a.j.length){var c=Dc(sh(a),"format");c=uc(c,"auth",a.Za(),"authuser",a.K||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=wh(a.s,e,a.F);if(!b(c,f))break;a.F=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function uh(){xe.call(this,"event-logged",void 0)}
u(uh,xe);function ph(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new ih;D(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));qh(this,new fh)}
function qh(a,b){G(a.h,fh,1,b);Sd(b,1)||D(b,1,1);a.i||(b=yh(a),Sd(b,5)||D(b,5,a.locale));a.uach&&(b=yh(a),Yd(b,ch,9)||G(b,ch,9,a.uach))}
function zh(a,b){var c=void 0===c?eh:c;b(window,c).then(function(d){a.uach=d;d=yh(a);G(d,ch,9,a.uach);return!0}).catch(function(){return!1})}
function yh(a){a=Yd(a.h,fh,1);var b=Yd(a,bh,11);b||(b=new bh,G(a,bh,11,b));return b}
function wh(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=D(a,4,d);b=ce(a,gh,3,b);c&&D(b,14,c);return b}
;function Ah(a,b,c){Rg(a.url,function(d){d=d.target;if(ah(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Gb,a.timeoutMillis,a.withCredentials)}
;function Bh(){this.j="https://play.google.com/log?format=json&hasfast=true";this.s=!1;this.m=Ah;this.h=""}
;function Ch(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Bh;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new oh(1828,c.I?c.I:yg,"0",c.m,c.j,c.s,!1,c.P,void 0,void 0,c.o?c.o:void 0);c.M&&qh(a.s,c.M);if(c.i){b=c.i;var d=yh(a.s);D(d,7,b)}c.l&&(a.I=c.l);c.h&&(a.O=c.h);c.v&&((b=c.v)?(a.m||(a.m=new zg),b=le(b),D(a.m,4,b)):a.m&&D(a.m,4,void 0,!1));c.K&&(d=c.K,a.m||(a.m=new zg),b=a.m,d=null==d?Ed:Ad(d,1),D(b,2,d));c.F&&(b=c.F,a.Ya=!0,th(a,b));c.O&&zh(a.s,c.O);this.h=a}
Ch.prototype.flush=function(a){var b=a||[];if(b.length){a=new kg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new cg;var h=D(g,1,f.i);var k=f;g=[];for(var m=0;m<k.h.length;m++)g.push(k.h[m].La);if(null==g)g=Ed;else{for(k=0;k<g.length;k++);g=Ad(g,5)}g=D(h,3,g);h=[];k=[];m=p(f.Aa.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.l;for(var w=f.ub(q)||[],t=[],A=0;A<w.length;A++){var E=w[A];E=E&&E.Sb;var F=new hg;switch(r){case 3:Wd(F,
1,jg,Number(E));break;case 2:Wd(F,2,jg,Number(E))}t.push(F)}r=t;for(w=0;w<r.length;w++){t=r[w];A=new eg;t=G(A,hg,2,t);A=q;E=[];F=f;for(var O=[],N=0;N<F.h.length;N++)O.push(F.h[N].Ma);F=O;for(O=0;O<F.length;O++){N=F[O];var R=A[O],ca=new gg;switch(N){case 3:Wd(ca,1,ig,String(R));break;case 2:Wd(ca,2,ig,Number(R));break;case 1:Wd(ca,3,ig,"true"==R)}E.push(ca)}ce(t,gg,1,E);h.push(t)}}ce(g,eg,4,h);c.push(g);e.clear()}ce(a,cg,1,c);b=this.h;a instanceof gh?b.log(a):(c=new gh,a=le(a),a=D(c,8,a),b.log(a));
this.h.flush()}};function Dh(a){this.wa=a;this.v=Eh();this.l=new Ch;this.h=new Vf(this.l);this.o=new $f(this.h);this.i=new ag(this.h);this.j=new bg(this.h);this.m=new Zf(this.h)}
function Eh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Fh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Gh(a){var b=this;this.i=!1;var c=a.program;var d=a.Tc;if(a.gd){var e;this.la=null!=(e=a.la)?e:new Dh(d)}var f=new Fh;this.j=f.promise;if(!y[d]){var g;null!=(g=this.la)&&g.m.h.rb("/client_streamz/bg/fiec",g.wa,1)}this.l=p((0,y[d].a)(c,function(h,k){Promise.resolve().then(function(){var m;if(null!=(m=b.la)){var q=Eh()-m.v;m.o.h.sb("/client_streamz/bg/fil",q,m.wa)}f.resolve({Gc:h,ud:k})})},!0)).next().value;
this.td=f.promise.then(function(){})}
Gh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Eh(),d;null!=(d=this.la)&&d.i.h.rb("/client_streamz/bg/fsc",d.wa);return this.j.then(function(e){var f=e.Gc;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.la)){var m=Eh()-c;k.j.h.sb("/client_streamz/bg/fsl",m,k.wa)}g(h)},[a.Ub,
a.vd])})})};
Gh.prototype.tc=function(a){if(this.i)throw Error("Already disposed");var b=Eh(),c;null!=(c=this.la)&&c.i.h.rb("/client_streamz/bg/fsc",c.wa);a=this.l([a.Ub,a.vd]);null!=(c=this.la)&&(b=Eh()-b,c.j.h.sb("/client_streamz/bg/fsl",b,c.wa));return a};
Gh.prototype.dispose=function(){var a;null!=(a=this.la)&&a.h.tb();this.i=!0;this.j.then(function(b){(b=b.ud)&&b()})};
Gh.prototype.h=function(){return this.i};var Hh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Ih;try{new URL("s://g"),Ih=!0}catch(a){Ih=!1}var Jh=Ih;var Kh={};function Lh(){}
function Mh(a){this.h=a}
u(Mh,Lh);Mh.prototype.toString=function(){return this.h};function Nh(a){var b="true".toString(),c=[new Mh(Oh[0].toLowerCase(),Kh)];if(0===c.length)throw Error("No prefixes are provided");if(c.map(function(d){if(d instanceof Mh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Ph(a,b){a.src=Ib(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Qh(a){this.Yc=a}
function Rh(a){return new Qh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Sh=[Rh("data"),Rh("http"),Rh("https"),Rh("mailto"),Rh("ftp"),new Qh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Th(a){var b=Uh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Vh(){var a=[];Th(function(b){a.push(b)});
return a}
var Uh={Pd:"allow-forms",Qd:"allow-modals",Rd:"allow-orientation-lock",Sd:"allow-pointer-lock",Td:"allow-popups",Ud:"allow-popups-to-escape-sandbox",Vd:"allow-presentation",Wd:"allow-same-origin",Xd:"allow-scripts",Yd:"allow-top-navigation",Zd:"allow-top-navigation-by-user-activation"},Wh=eb(function(){return Vh()});
function Xh(){var a=Yh(),b={};gb(Wh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Yh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Zh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var $h=(new Date).getTime();var ai="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(ai);function bi(a){ef.call(this);var b=this;this.s=this.j=0;this.Y=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
ea:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return v(e,ci(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.s||di(this)}
u(bi,ef);function ei(){var a=fi;bi.h||(bi.h=new bi(a));return bi.h}
bi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Y.ea(this.s);delete bi.h};
bi.prototype.U=function(){return this.i};
function di(a){a.s=a.Y.S(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,ci(a),3):v(c,ci(a),3);di(a);c.h=0})},3E4)}
function ci(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Y.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.o=void 0;a.j&&(a.Y.ea(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ff(a,"networkstatus-online"):ff(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.u(3)}})})}
;function gi(){this.data_=[];this.h=-1}
gi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
gi.prototype.get=function(a){return!!this.data_[a]};
function hi(a){-1===a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ii(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
ii.prototype[Symbol.iterator]=function(){return this};
ii.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ji(a,b){return new ii(a,b)}
;function ki(){this.blockSize=-1}
;function li(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(li,ki);li.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function mi(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
li.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)mi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){mi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){mi(this,e);f=0;break}}this.i=f;this.l+=b}};
li.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;mi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ni(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function oi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function pi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ni(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function qi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):pi(a,"inverted-hdpi")&&oi(a,Array.prototype.filter.call(a.classList?a.classList:ni(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ri(){}
ri.prototype.next=function(){return si};
var si={done:!0,value:void 0};function ti(a){return{value:a,done:!1}}
ri.prototype.da=function(){return this};function ui(a){if(a instanceof vi||a instanceof wi||a instanceof xi)return a;if("function"==typeof a.next)return new vi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new vi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.da)return new vi(function(){return a.da()});
throw Error("Not an iterator or iterable.");}
function vi(a){this.i=a}
vi.prototype.da=function(){return new wi(this.i())};
vi.prototype[Symbol.iterator]=function(){return new xi(this.i())};
vi.prototype.h=function(){return new xi(this.i())};
function wi(a){this.i=a}
u(wi,ri);wi.prototype.next=function(){return this.i.next()};
wi.prototype[Symbol.iterator]=function(){return new xi(this.i)};
wi.prototype.h=function(){return new xi(this.i)};
function xi(a){vi.call(this,function(){return a});
this.j=a}
u(xi,vi);xi.prototype.next=function(){return this.j.next()};function yi(a,b){this.i={};this.h=[];this.oa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof yi)for(c=a.xb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=yi.prototype;l.xb=function(){zi(this);return this.h.concat()};
l.has=function(a){return Ai(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Bi;zi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Bi(a,b){return a===b}
l.Oa=function(){return 0==this.size};
l.clear=function(){this.i={};this.oa=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Ai(this.i,a)?(delete this.i[a],--this.size,this.oa++,this.h.length>2*this.size&&zi(this),!0):!1};
function zi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ai(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ai(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Ai(this.i,a)?this.i[a]:b};
l.set=function(a,b){Ai(this.i,a)||(this.size+=1,this.h.push(a),this.oa++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.xb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new yi(this)};
l.keys=function(){return ui(this.da(!0)).h()};
l.values=function(){return ui(this.da(!1)).h()};
l.entries=function(){var a=this;return ji(this.keys(),function(b){return[b,a.get(b)]})};
l.da=function(a){zi(this);var b=0,c=this.oa,d=this,e=new ri;e.next=function(){if(c!=d.oa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return si;var f=d.h[b++];return ti(a?f:d.i[f])};
return e};
function Ai(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.s=!!a}
$a(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Ci(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ga(b)}}
l.Ga=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ra=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Di(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Ga(c)}}return 0!=e}return!1};
function Di(a,b,c){yf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Ga,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.B=function(){K.X.B.call(this);this.clear();this.l.length=0};function Ei(a){this.h=a}
Ei.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Cg(b))};
Ei.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ei.prototype.remove=function(a){this.h.remove(a)};function Fi(a){this.h=a}
$a(Fi,Ei);function Gi(a){this.data=a}
function Hi(a){return void 0===a||a instanceof Gi?a:new Gi(a)}
Fi.prototype.set=function(a,b){Fi.X.set.call(this,a,Hi(b))};
Fi.prototype.i=function(a){a=Fi.X.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Fi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ii(a){this.h=a}
$a(Ii,Fi);Ii.prototype.set=function(a,b,c){if(b=Hi(b)){if(c){if(c<Date.now()){Ii.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ii.X.set.call(this,a,b)};
Ii.prototype.i=function(a){var b=Ii.X.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ii.prototype.remove.call(this,a);else return b}};function Ji(){}
;function Ki(){}
$a(Ki,Ji);Ki.prototype[Symbol.iterator]=function(){return ui(this.da(!0)).h()};
Ki.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Li(a){this.h=a}
$a(Li,Ki);l=Li.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.da=function(a){var b=0,c=this.h,d=new ri;d.next=function(){if(b>=c.length)return si;var e=c.key(b++);if(a)return ti(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ti(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Mi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
$a(Mi,Li);function Ni(a,b){this.i=a;this.h=null;var c;if(c=Jc)c=!(9<=Number(Wc));if(c){Oi||(Oi=new yi);this.h=Oi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Oi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(Ni,Ki);var Pi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Oi=null;function Qi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Pi[b]})}
l=Ni.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Qi(a),b);Ri(this)};
l.get=function(a){a=this.h.getAttribute(Qi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Qi(a));Ri(this)};
l.da=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new ri;d.next=function(){if(b>=c.length)return si;var e=c[b++];if(a)return ti(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ti(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ri(this)};
function Ri(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Si(a,b){this.i=a;this.h=b+"::"}
$a(Si,Ki);Si.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Si.prototype.get=function(a){return this.i.get(this.h+a)};
Si.prototype.remove=function(a){this.i.remove(this.h+a)};
Si.prototype.da=function(a){var b=this.i[Symbol.iterator](),c=this,d=new ri;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return ti(a?e.slice(c.h.length):c.i.get(e))};
return d};function Ti(a){this.name=a}
;var Ui=new Ti("rawColdConfigGroup");var Vi=new Ti("rawHotConfigGroup");function Wi(a){H.call(this,a)}
u(Wi,H);function Xi(a){H.call(this,a)}
u(Xi,H);Xi.prototype.getKey=function(){return Sd(this,1)};
Xi.prototype.getValue=function(){return ee(this,2===Xd(this,Yi)?2:-1)};
var Yi=[2,3,4,5,6];function Zi(a){H.call(this,a)}
u(Zi,H);function $i(a){H.call(this,a)}
u($i,H);function aj(a){H.call(this,a,-1,bj)}
u(aj,H);var bj=[2];function cj(a){H.call(this,a,-1,dj)}
u(cj,H);cj.prototype.getPlayerType=function(){return Sd(this,36)};
cj.prototype.setHomeGroupInfo=function(a){return G(this,aj,81,a)};
cj.prototype.clearLocationPlayabilityToken=function(){return D(this,89,void 0,!1)};
var dj=[9,66,24,32,86,100,101];function ej(a){H.call(this,a,-1,fj)}
u(ej,H);var fj=[15,26,28];function gj(a){H.call(this,a,-1,hj)}
u(gj,H);var hj=[5];function ij(a){H.call(this,a)}
u(ij,H);function jj(a){H.call(this,a,-1,kj)}
u(jj,H);jj.prototype.setSafetyMode=function(a){return D(this,5,a)};
var kj=[12];function lj(a){H.call(this,a,-1,mj)}
u(lj,H);lj.prototype.i=function(a){return G(this,cj,1,a)};
var mj=[12];var nj=new Ti("continuationCommand");var oj=new Ti("webCommandMetadata");var pj=new Ti("signalServiceEndpoint");var qj={oi:"EMBEDDED_PLAYER_MODE_UNKNOWN",li:"EMBEDDED_PLAYER_MODE_DEFAULT",ni:"EMBEDDED_PLAYER_MODE_PFP",mi:"EMBEDDED_PLAYER_MODE_PFL"};var rj=new Ti("feedbackEndpoint");var sj={Oq:"WEB_DISPLAY_MODE_UNKNOWN",Kq:"WEB_DISPLAY_MODE_BROWSER",Mq:"WEB_DISPLAY_MODE_MINIMAL_UI",Nq:"WEB_DISPLAY_MODE_STANDALONE",Lq:"WEB_DISPLAY_MODE_FULLSCREEN"};function tj(a){H.call(this,a,-1,uj)}
u(tj,H);function vj(a){H.call(this,a)}
u(vj,H);vj.prototype.getKey=function(){return fe(Sd(this,1),"")};
vj.prototype.getValue=function(){return fe(Sd(this,2),"")};
var uj=[4,5];function wj(a){H.call(this,a)}
u(wj,H);function xj(a){H.call(this,a)}
u(xj,H);var yj=[2,3,4];function zj(a){H.call(this,a)}
u(zj,H);zj.prototype.getMessage=function(){return fe(Sd(this,1),"")};function Aj(a){H.call(this,a)}
u(Aj,H);function Bj(a){H.call(this,a)}
u(Bj,H);function Cj(a){H.call(this,a,-1,Dj)}
u(Cj,H);var Dj=[10,17];function Ej(a){H.call(this,a)}
u(Ej,H);function Fj(a){H.call(this,a)}
u(Fj,H);function Gj(a){H.call(this,a)}
u(Gj,H);function Hj(a){H.call(this,a)}
u(Hj,H);function Ij(a){H.call(this,a)}
u(Ij,H);function Jj(a){H.call(this,a,-1,Kj)}
u(Jj,H);Jj.prototype.getVideoData=function(){return Yd(this,Ij,15)};
var Kj=[4];function Lj(a){H.call(this,a)}
u(Lj,H);function Mj(a,b){G(a,Gj,1,b)}
Lj.prototype.i=function(a){D(this,2,a)};
function Nj(a){H.call(this,a)}
u(Nj,H);function Oj(a,b){G(a,Gj,1,b)}
;function Pj(a){H.call(this,a,-1,Qj)}
u(Pj,H);Pj.prototype.i=function(a){D(this,1,a)};
function Rj(a,b){G(a,Gj,2,b)}
var Qj=[3];function Sj(a){H.call(this,a)}
u(Sj,H);Sj.prototype.i=function(a){D(this,1,a)};function Tj(a){H.call(this,a)}
u(Tj,H);Tj.prototype.i=function(a){D(this,1,a)};function Uj(a){H.call(this,a)}
u(Uj,H);Uj.prototype.i=function(a){D(this,1,a)};function Vj(a){H.call(this,a)}
u(Vj,H);Vj.prototype.i=function(a){D(this,1,a)};function Wj(a){H.call(this,a)}
u(Wj,H);function Xj(a){H.call(this,a)}
u(Xj,H);function Yj(a){H.call(this,a,-1,Zj)}
u(Yj,H);Yj.prototype.getPlayerType=function(){var a=Sd(this,7);return null==a?0:a};
Yj.prototype.setVideoId=function(a){return D(this,19,a)};
function ak(a,b){de(a,68,bk,b)}
function bk(a){H.call(this,a)}
u(bk,H);bk.prototype.getId=function(){return fe(Sd(this,2),"")};
var Zj=[83,68];function ck(a){H.call(this,a)}
u(ck,H);function dk(a){H.call(this,a)}
u(dk,H);function ek(a){H.call(this,a)}
u(ek,H);function fk(a){H.call(this,a,459)}
u(fk,H);
var gk=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,458,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,
351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];var hk={qj:0,bj:1,hj:2,ij:4,nj:8,jj:16,kj:32,pj:64,oj:128,dj:256,fj:512,mj:1024,ej:2048,gj:4096,cj:8192,lj:16384};function ik(a){H.call(this,a)}
u(ik,H);function jk(a){H.call(this,a)}
u(jk,H);jk.prototype.setVideoId=function(a){return Wd(this,1,Ek,a)};
jk.prototype.getPlaylistId=function(){return ee(this,2===Xd(this,Ek)?2:-1)};
var Ek=[1,2];function Fk(a){H.call(this,a,-1,Gk)}
u(Fk,H);var Gk=[3];var Hk=new Ti("webPlayerShareEntityServiceEndpoint");var Ik=new Ti("playlistEditEndpoint");var Jk=new Ti("modifyChannelNotificationPreferenceEndpoint");var Kk=new Ti("unsubscribeEndpoint");var Lk=new Ti("subscribeEndpoint");function Mk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Nk=y.window,Ok,Pk,Qk=(null==Nk?void 0:null==(Ok=Nk.yt)?void 0:Ok.config_)||(null==Nk?void 0:null==(Pk=Nk.ytcfg)?void 0:Pk.data_)||{};z("yt.config_",Qk);function Rk(){Mk(Qk,arguments)}
function L(a,b){return a in Qk?Qk[a]:b}
function Sk(){var a=Qk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Tk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Uk(a,b){a=Tk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Vk(){return L("EXPERIMENTS_TOKEN","")}
function Tk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Wk(){for(var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{}),c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=L("EXPERIMENT_FLAGS",{});var e=p(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Xk=[];function Yk(a){Xk.forEach(function(b){return b(a)})}
function Zk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$k(b)}}:a}
function $k(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Rk("ERRORS",e));Yk(a)}
function al(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Rk("ERRORS",e))}
;function bl(){var a=cl;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function dl(a){z("yt.ads.biscotti.lastId_",a)}
;var el=/^[\w.]*$/,fl={q:!0,search_query:!0};function gl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=hl(f[0]||""),h=hl(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(gl);k.args=[{key:m,value:f[1],query:a,method:il==q?"unchanged":q}];fl.hasOwnProperty(m)||al(k)}}return c}
var il=String(gl);function jl(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function kl(a){"?"==a.charAt(0)&&(a=a.substr(1));return gl(a,"&")}
function ll(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),kl(1<a.length?a[1]:a[0])):{}}
function ml(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=kl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return vc(a,e)+d}
function nl(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(nc(4,b))||null)==(Number(nc(4,a))||null):!0;return a}
function hl(a){return a&&a.match(el)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ol(a){var b=pl;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=$h;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ea){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Hh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Hh.screen)?void 0:k.height;var m;e.u_w=null==(m=Hh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Hh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=Hh.screen)?void 0:r.availWidth;var w;e.u_cd=null==(w=Hh.screen)?void 0:w.colorDepth}catch(ea){}h=b.h;try{var t=h.screenX;var A=h.screenY}catch(ea){}try{var E=h.outerWidth;var F=h.outerHeight}catch(ea){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ea){}try{var R=h.screenLeft;var ca=h.screenTop}catch(ea){}try{O=h.innerWidth,N=h.innerHeight}catch(ea){}try{var U=h.screen.availWidth;var sb=h.screen.availTop}catch(ea){}t=[R,ca,t,A,U,sb,E,F,O,N];try{var Wa=(b.h.top||window).document,na="CSS1Compat"==
Wa.compatMode?Wa.documentElement:Wa.body;var I=(new mf(na.clientWidth,na.clientHeight)).round()}catch(ea){I=new mf(-12245933,-12245933)}Wa=I;I={};var ma=void 0===ma?y:ma;na=new gi;ma.SVGElement&&ma.document.createElementNS&&na.set(0);A=Xh();A["allow-top-navigation-by-user-activation"]&&na.set(1);A["allow-popups-to-escape-sandbox"]&&na.set(2);ma.crypto&&ma.crypto.subtle&&na.set(3);ma.TextDecoder&&ma.TextEncoder&&na.set(4);ma=hi(na);I.bc=ma;I.bih=Wa.height;I.biw=Wa.width;I.brdim=t.join();b=b.i;b=(I.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,I.wgl=!!Hh.WebGLRenderingContext,I);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pl=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return jl(ol(a))});Date.now();var ql="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function rl(){if(!ql)return null;var a=ql();return"open"in a?a:null}
function sl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function tl(a,b){"function"===typeof a&&(a=Zk(a));return window.setTimeout(a,b)}
;var ul={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},vl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(ai)),wl=!1;
function xl(a,b){b=void 0===b?{}:b;var c=nl(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in ul){var f=L(ul[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=jl(ol()));return b}
function yl(a){var b=window.location.search,c=oc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||!c&&nl(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=kl(b),f={};gb(vl,function(g){e[g]&&(f[g]=e[g])});
return ml(a,f||{},!1)}
function zl(a,b){var c=b.format||"JSON";a=Al(a,b);var d=Bl(a,b),e=!1,f=Cl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var m=sl(k),q=null,r=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(m||r||w)q=Dl(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,
k,q)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=tl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function Al(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ml(a,b||{},!0);return a}
function Bl(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(M("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=kl(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):tc(e));f=e||f&&!qb(f);!wl&&f&&"POST"!=b.method&&(wl=!0,$k(Error("AJAX request with postData should use POST")));return e}
function Dl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,al(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?El(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Fl(g)})}d&&Gl(e);
return e}
function Gl(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new ec(d)}else Gl(a[b])}}
function El(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fl(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Cl(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Zk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=rl();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=yl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=xl(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Hl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Il(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Jl(a,b,c,d,e){ug.set(""+a,b,{ib:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Kl(a,b,c){ug.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Ll(){if(!ug.isEnabled())return!1;if(!ug.Oa())return!0;ug.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==ug.get("TESTCOOKIESENABLED"))return!1;ug.remove("TESTCOOKIESENABLED");return!0}
;var Ml=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Ml);function Nl(){this.h=L("ALT_PREF_COOKIE_NAME","PREF");this.i=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=ug.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Ml[d]=c.toString())}}}
Nl.prototype.get=function(a,b){Ol(a);Pl(a);a=void 0!==Ml[a]?Ml[a].toString():null;return null!=a?a:b?b:""};
Nl.prototype.set=function(a,b){Ol(a);Pl(a);if(null==b)throw Error("ExpectedNotNull");Ml[a]=b.toString()};
function Ql(a){return!!((Rl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Nl.prototype.remove=function(a){Ol(a);Pl(a);delete Ml[a]};
Nl.prototype.clear=function(){for(var a in Ml)delete Ml[a]};
function Pl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ol(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Rl(a){a=void 0!==Ml[a]?Ml[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Oa(Nl);var Sl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Tl={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ul={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Vl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Wl(){var a=y.navigator;return a?a.connection:void 0}
function Xl(){var a=Wl();if(a){var b=Sl[a.type||"unknown"]||"CONN_UNKNOWN";a=Sl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Yl(){var a=Wl();if(null!=a&&a.effectiveType)return Vl.hasOwnProperty(a.effectiveType)?Vl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Zl(){}
function $l(a,b){return am(a,0,b)}
Zl.prototype.S=function(a,b){return am(a,1,b)};
function bm(a,b){am(a,2,b)}
function cm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function dm(){Zl.apply(this,arguments)}
u(dm,Zl);function em(){dm.h||(dm.h=new dm);return dm.h}
function am(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):tl(a,c||0)}
dm.prototype.ea=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
dm.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
dm.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var fi=em();function P(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
u(P,Error);function fm(){try{return gm(),!0}catch(a){return!1}}
function gm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new P("Datasync ID not set",void 0===a?"unknown":a);}
;var hm=Xc||Yc;function im(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;function jm(a){var b=new Mi;(b=b.isAvailable()?a?new Si(b,a):b:null)||(a=new Ni(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ii(a):null;this.i=document.domain||window.location.hostname}
jm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Cg(b))}catch(f){return}else e=escape(b);Jl(a,e,c,this.i)};
jm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=ug.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
jm.prototype.remove=function(a){this.h&&this.h.remove(a);Kl(a,"/",this.i)};var km=function(){var a;return function(){a||(a=new jm("ytidb"));return a}}();
function lm(){var a;return null==(a=km())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var mm=[],nm,om=!1;function pm(){var a={};for(nm=new qm(void 0===a.handleError?rm:a.handleError,void 0===a.logEvent?sm:a.logEvent);0<mm.length;)switch(a=mm.shift(),a.type){case "ERROR":nm.handleError(a.payload);break;case "EVENT":nm.logEvent(a.eventType,a.payload)}}
function tm(a){om||(nm?nm.handleError(a):(mm.push({type:"ERROR",payload:a}),10<mm.length&&mm.shift()))}
function um(a,b){om||(nm?nm.logEvent(a,b):(mm.push({type:"EVENT",eventType:a,payload:b}),10<mm.length&&mm.shift()))}
;function vm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function wm(a){return a.substr(0,a.indexOf(":"))||a}
;var xm={},ym=(xm.AUTH_INVALID="No user identifier specified.",xm.EXPLICIT_ABORT="Transaction was explicitly aborted.",xm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",xm.MISSING_INDEX="Index not created.",xm.MISSING_OBJECT_STORES="Object stores not created.",xm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",xm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",xm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
xm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",xm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",xm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",xm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",xm),zm={},Am=(zm.AUTH_INVALID="ERROR",zm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",zm.EXPLICIT_ABORT="IGNORED",zm.IDB_NOT_SUPPORTED="ERROR",zm.MISSING_INDEX=
"WARNING",zm.MISSING_OBJECT_STORES="ERROR",zm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",zm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",zm.QUOTA_EXCEEDED="WARNING",zm.QUOTA_MAYBE_EXCEEDED="WARNING",zm.UNKNOWN_ABORT="WARNING",zm.INCOMPATIBLE_DB_VERSION="WARNING",zm),Bm={},Cm=(Bm.AUTH_INVALID=!1,Bm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Bm.EXPLICIT_ABORT=!1,Bm.IDB_NOT_SUPPORTED=!1,Bm.MISSING_INDEX=!1,Bm.MISSING_OBJECT_STORES=!1,Bm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Bm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Bm.QUOTA_EXCEEDED=!1,Bm.QUOTA_MAYBE_EXCEEDED=!0,Bm.UNKNOWN_ABORT=!0,Bm.INCOMPATIBLE_DB_VERSION=!1,Bm);function Dm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ym[a]:c;d=void 0===d?Am[a]:d;e=void 0===e?Cm[a]:e;P.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Dm.prototype)}
u(Dm,P);function Em(a,b){Dm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ym.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Em.prototype)}
u(Em,Dm);function Fm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Fm.prototype)}
u(Fm,Error);var Gm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Hm(a,b,c,d){b=wm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Dm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Dm("QUOTA_EXCEEDED",a);if(Zc&&"UnknownError"===e.name)return new Dm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Fm)return new Dm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Gm.some(function(f){return e.message.includes(f)}))return new Dm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Dm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",jc:e.name})];e.level="WARNING";return e}
function Im(a,b,c){var d=lm();return new Dm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Jm(a){if(!a)throw Error();throw a;}
function Km(a){return a}
function Lm(a){this.h=a}
function Mm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Mm.all=function(a){return new Mm(new Lm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={za:0};f.za<a.length;f={za:f.za},++f.za)Mm.resolve(a[f.za]).then(function(g){return function(h){d[g.za]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Mm.resolve=function(a){return new Mm(new Lm(function(b,c){a instanceof Mm?a.then(b,c):b(a)}))};
Mm.reject=function(a){return new Mm(new Lm(function(b,c){c(a)}))};
Mm.prototype.then=function(a,b){var c=this,d=null!=a?a:Km,e=null!=b?b:Jm;return new Mm(new Lm(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Nm(c,c,d,f,g)}),c.i.push(function(){Om(c,c,e,f,g)})):"FULFILLED"===c.state.status?Nm(c,c,d,f,g):"REJECTED"===c.state.status&&Om(c,c,e,f,g)}))};
Mm.prototype.catch=function(a){return this.then(void 0,a)};
function Nm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Mm?Pm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Om(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Mm?Pm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Pm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Mm?Pm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Qm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Rm(a){return new Promise(function(b,c){Qm(a,b,c)})}
function Sm(a){return new Mm(new Lm(function(b,c){Qm(a,b,c)}))}
;function Tm(a,b){return new Mm(new Lm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Um=window,Q=Um.ytcsi&&Um.ytcsi.now?Um.ytcsi.now:Um.performance&&Um.performance.timing&&Um.performance.now&&Um.performance.timing.navigationStart?function(){return Um.performance.timing.navigationStart+Um.performance.now()}:function(){return(new Date).getTime()};function Vm(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
l=Vm.prototype;l.add=function(a,b,c){return Wm(this,[a],{mode:"readwrite",R:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Wm(this,[a],{mode:"readwrite",R:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Wm(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).count(b)})};
function Xm(a,b,c){a=a.h.createObjectStore(b,c);return new Ym(a)}
l.delete=function(a,b){return Wm(this,[a],{mode:"readwrite",R:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Wm(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).get(b)})};
function Zm(a,b,c){return Wm(a,[b],{mode:"readwrite",R:!0},function(d){d=d.objectStore(b);return Sm(d.h.put(c,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Wm(a,b,c,d){var e,f,g,h,k,m,q,r,w,t,A,E;return x(function(F){switch(F.h){case 1:var O={mode:"readonly",R:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.R?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(Q());za(F,4);m=a.h.transaction(b,e.mode);O=new $m(m);O=an(O,d);return v(F,O,6);case 6:return q=F.i,r=Math.round(Q()),bn(a,k,r,g,void 0,b.join(),e),F.return(q);case 4:w=Ba(F);t=Math.round(Q());A=Hm(w,a.h.name,b.join(),a.h.version);
if((E=A instanceof Dm&&!A.h)||g>=f)bn(a,k,t,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function bn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Dm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&um("QUOTA_EXCEEDED",{dbName:wm(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Dm&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),um("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),cn(a,!1,d,f,b,g.tag),tm(e)):cn(a,!0,d,f,b,g.tag)}
function cn(a,b,c,d,e,f){um("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Ym(a){this.h=a}
l=Ym.prototype;l.add=function(a,b){return Sm(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Sm(this.h.clear()).then(function(){})};
function dn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
l.count=function(a){return Sm(this.h.count(a))};
function en(a,b){return fn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?en(this,a):Sm(this.h.delete(a))};
l.get=function(a){return Sm(this.h.get(a))};
l.index=function(a){try{return new gn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Fm(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function fn(a,b,c){a=a.h.openCursor(b.query,b.direction);return hn(a).then(function(d){return Tm(d,c)})}
function $m(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Dm;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function an(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
$m.prototype.abort=function(){this.h.abort();this.i=!0;throw new Dm("EXPLICIT_ABORT");};
$m.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Ym(a),this.j.set(a,b));return b};
function gn(a){this.h=a}
l=gn.prototype;l.count=function(a){return Sm(this.h.count(a))};
l.delete=function(a){return jn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Sm(this.h.get(a))};
l.getKey=function(a){return Sm(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function jn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return hn(a).then(function(d){return Tm(d,c)})}
function kn(a,b){this.request=a;this.cursor=b}
function hn(a){return Sm(a).then(function(b){return b?new kn(a,b):null})}
l=kn.prototype;l.advance=function(a){this.cursor.advance(a);return hn(this.request)};
l.continue=function(a){this.cursor.continue(a);return hn(this.request)};
l.delete=function(){return Sm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Sm(this.cursor.update(a))};function ln(a,b,c){return new Promise(function(d,e){function f(){w||(w=new Vm(g.result,{closed:r}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Hc,k=c.blocking,m=c.xd,q=c.upgrade,r=c.closed,w;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&um("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:wm(a)});var A=f(),E=new $m(g.transaction);
q&&q(A,function(F){return t.oldVersion<F&&t.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){um("IDB_UNEXPECTEDLY_CLOSED",{dbName:wm(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mn(a,b,c){c=void 0===c?{}:c;return ln(a,b,c)}
function nn(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Hc)&&c.addEventListener("blocked",function(){e()}),v(g,Rm(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Hm(f,a,"",-1);})}
;function on(a){return new Promise(function(b){bm(function(){b()},a)})}
function pn(a,b){this.name=a;this.options=b;this.l=!0;this.o=this.m=0;this.i=500}
pn.prototype.j=function(a,b,c){c=void 0===c?{}:c;return mn(a,b,c)};
pn.prototype.delete=function(a){a=void 0===a?{}:a;return nn(this.name,a)};
function qn(a,b){return new Dm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function rn(a,b){if(!b)throw Im("openWithToken",wm(a.name));return sn(a)}
function sn(a){function b(){var f,g,h,k,m,q,r,w,t,A;return x(function(E){switch(E.h){case 1:return g=null!=(f=Error().stack)?f:"",za(E,2),v(E,a.j(a.name,a.options.version,d),4);case 4:h=E.i;for(var F=a.options,O=[],N=p(Object.keys(F.Da)),R=N.next();!R.done;R=N.next()){R=R.value;var ca=F.Da[R],U=void 0===ca.hd?Number.MAX_VALUE:ca.hd;!(h.h.version>=ca.Ia)||h.h.version>=U||h.h.objectStoreNames.contains(R)||O.push(R)}k=O;if(0===k.length){E.u(5);break}m=Object.keys(a.options.Da);q=h.objectStoreNames();
if(a.o<Uk("ytidb_reopen_db_retries",0))return a.o++,h.close(),tm(new Dm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.m<Uk("ytidb_remake_db_retries",1))){E.u(6);break}a.m++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return v(E,on(a.i),8);case 8:a.i*=2;case 7:return v(E,a.delete(),9);case 9:return tm(new Dm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new Em(q,m);case 5:return E.return(h);case 2:r=Ba(E);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){E.u(10);break}return v(E,a.j(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=E.i;t=w.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw w.close(),
a.l=!1,qn(a,t);return E.return(w);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Hm(r,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.l)throw qn(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,xd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var tn=new pn("YtIdbMeta",{Da:{databases:{Ia:1}},upgrade:function(a,b){b(1)&&Xm(a,"databases",{keyPath:"actualName"})}});
function un(a,b){var c;return x(function(d){if(1==d.h)return v(d,rn(tn,b),2);c=d.i;return d.return(Wm(c,["databases"],{R:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Sm(f.h.put(a,void 0)).then(function(){})})}))})}
function vn(a,b){var c;return x(function(d){if(1==d.h)return a?v(d,rn(tn,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function wn(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],v(e,rn(tn,b),2)):3!=e.h?(d=e.i,v(e,Wm(d,["databases"],{R:!0,mode:"readonly"},function(f){c.length=0;return fn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function xn(a){return wn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function yn(a,b,c){return wn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function zn(a){var b,c;return x(function(d){if(1==d.h)return b=gm("YtIdbMeta hasAnyMeta other"),v(d,wn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var An,Bn=new function(){}(new function(){});
function Cn(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=lm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=hm)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Kc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,un(d,Bn),4);case 4:return v(e,vn("yt-idb-test-do-not-use",Bn),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Dn(){if(void 0!==An)return An;om=!0;return An=Cn().then(function(a){om=!1;var b;if(null!=(b=km())&&b.h){var c;b={hasSucceededOnce:(null==(c=lm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=km())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function En(){return B("ytglobal.idbToken_")||void 0}
function Fn(){var a=En();return a?Promise.resolve(a):Dn().then(function(b){(b=b?Bn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var Gn=0;function Hn(a,b){Gn||(Gn=fi.S(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return v(h,Fn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return v(h,yn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,nn(f.actualName),7);case 7:return v(h,vn(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),tm(g),d=!1;case 4:fi.ea(Gn),Gn=0,d&&Hn(a,b),h.h=0}})}))}
function In(){var a;return x(function(b){return 1==b.h?v(b,Fn(),2):(a=b.i)?b.return(zn(a)):b.return(!1)})}
new Fh;function Jn(a){if(!fm())throw a=new Dm("AUTH_INVALID",{dbName:a}),tm(a),a;var b=gm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Kn(a,b,c,d){var e,f,g,h,k,m;return x(function(q){switch(q.h){case 1:return f=null!=(e=Error().stack)?e:"",v(q,Fn(),2);case 2:g=q.i;if(!g)throw h=Im("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),tm(h),h;vm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Jn(a);za(q,3);return v(q,un(k,g),5);case 5:return v(q,mn(k.actualName,b,d),6);case 6:return q.return(q.i);case 3:return m=Ba(q),za(q,7),v(q,vn(k.actualName,g),9);case 9:Aa(q,
8);break;case 7:Ba(q);case 8:throw m;}})}
function Ln(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!1,c)}
function Mn(a,b,c){c=void 0===c?{}:c;return Kn(a,b,!0,c)}
function Nn(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return v(e,Fn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();vm(a);d=Jn(a);return v(e,nn(d.actualName,b),3)}return v(e,vn(d.actualName,c),0)})}
function On(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?v(e,nn(d.actualName,b),2):v(e,vn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Pn(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return v(d,Fn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();vm("LogsDatabaseV2");return v(d,xn(b),3)}c=d.i;return v(d,On(c,a,b),0)})}
function Qn(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return v(d,Fn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();vm(a);return v(d,nn(a,b),3)}return v(d,vn(a,c),0)})}
;function Rn(a,b){pn.call(this,a,b);this.options=b;vm(a)}
u(Rn,pn);function Sn(a,b){var c;return function(){c||(c=new Rn(a,b));return c}}
Rn.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.pb?Mn:Ln)(a,b,Object.assign({},c))};
Rn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.pb?Qn:Nn)(this.name,a)};
function Tn(a,b){return Sn(a,b)}
;var Un={},Vn=Tn("ytGcfConfig",{Da:(Un.coldConfigStore={Ia:1},Un.hotConfigStore={Ia:1},Un),pb:!1,upgrade:function(a,b){b(1)&&(dn(Xm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),dn(Xm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Wn(a){return rn(Vn(),a)}
function Xn(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:Q()},v(g,Wn(c),2);case 2:return e=g.i,v(g,e.clear("hotConfigStore"),3);case 3:return v(g,Zm(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Yn(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:Q()},v(h,Wn(d),2);case 2:return f=h.i,v(h,f.clear("coldConfigStore"),3);case 3:return v(h,Zm(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Zn(a){var b,c;return x(function(d){return 1==d.h?v(d,Wn(a),2):3!=d.h?(b=d.i,c=void 0,v(d,Wm(b,["coldConfigStore"],{mode:"readwrite",R:!0},function(e){return jn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function $n(a){var b,c;return x(function(d){return 1==d.h?v(d,Wn(a),2):3!=d.h?(b=d.i,c=void 0,v(d,Wm(b,["hotConfigStore"],{mode:"readwrite",R:!0},function(e){return jn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ao(){}
function bo(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!M("gcf_config_store_update_enabled"))return h.u(0);c&&(a.h=c,z("yt.gcf.config.hotConfigGroup",a.h));a.hotHashData=b;z("yt.gcf.config.hotHashData",a.hotHashData);d=En();return d?c?h.u(4):v(h,$n(d),5):(e=Im("updateHotConfig token error"),al(e),h.u(0))}4!=h.h&&(f=h.i,c=null==(g=f)?void 0:g.config);return v(h,Xn(c,b,d),0)})}
function co(a,b,c){var d,e,f,g,h;return x(function(k){if(1==k.h){if(!M("gcf_config_store_update_enabled"))return k.u(0);a.coldHashData=b;z("yt.gcf.config.coldHashData",a.coldHashData);d=En();return d?c?k.u(4):v(k,Zn(d),5):(e=Im("updateColdConfig token error"),al(e),k.u(0))}4!=k.h&&(f=k.i,c=null==(g=f)?void 0:g.config);if(!c)return k.u(0);h=c.configData;return v(k,Yn(c,b,h,d),0)})}
;function eo(){return"INNERTUBE_API_KEY"in Qk&&"INNERTUBE_API_VERSION"in Qk}
function fo(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),yb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cc:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Uc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),ec:L("INNERTUBE_CONTEXT_HL"),dc:L("INNERTUBE_CONTEXT_GL"),Vc:L("INNERTUBE_HOST_OVERRIDE")||"",Xc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Wc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function go(a){var b={client:{hl:a.ec,gl:a.dc,clientName:a.cc,clientVersion:a.innertubeContextClientVersion,configInfo:a.yb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Vk();""!==c&&(b.client.experimentsToken=c);c=Wk();0<c.length&&(b.request={internalExperimentFlags:c});ho(a,void 0,b);M("enable_third_party_info")&&io(void 0,b);jo(void 0,b);ko(a,void 0,b);lo(void 0,b);M("start_sending_config_hash")&&
mo(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(kl(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,
e);return b}
function no(a){var b=new lj,c=new cj;D(c,1,a.ec);D(c,2,a.dc);D(c,16,a.Uc);D(c,17,a.innertubeContextClientVersion);if(a.yb){var d=a.yb,e=new Zi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Zi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=Vk();""!==d&&D(c,54,d);d=Wk();if(0<d.length){e=new ej;for(var f=0;f<d.length;f++){var g=new Xi;D(g,1,d[f].key);Wd(g,2,Yi,d[f].value);de(e,15,Xi,g)}G(b,
ej,5,e)}ho(a,c);M("enable_third_party_info")&&io(b);jo(c);ko(a,c);lo(c);M("start_sending_config_hash")&&mo(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new jj,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(kl(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.i(c);return b}
function ho(a,b,c){a=a.cc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Yd(b,$i,96)||new $i;var d=Il();d=Object.keys(sj).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,$i,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Il())}
function io(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=Yd(a,gj,7)||new gj,D(b,4,c),G(a,gj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function jo(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function ko(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Yd(b,Zi,62))?d:new Zi;D(c,6,a.appInstallData);G(b,Zi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function lo(a,b){var c=Xl();c&&(a?D(a,61,Tl[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Yl())&&(a?D(a,94,Ul[c]):b&&(b.client.effectiveConnectionType=c))}
function oo(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.kr||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().jr:b=yg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
function mo(a,b){ao.h||(ao.h=new ao);var c=B("yt.gcf.config.coldConfigData");var d=B("yt.gcf.config.hotHashData");var e=B("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=Yd(a,Zi,62))?f:new Zi;D(b,1,c);D(b,3,e);D(b,5,d);G(a,Zi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function po(a){a=Object.assign({},a);delete a.Authorization;var b=yg();if(b){var c=new li;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=bd(c.digest(),3)}return a}
;var qo;function ro(){qo||(qo=new jm("yt.innertube"));return qo}
function so(a,b,c,d){if(d)return null;d=ro().get("nextId",!0)||1;var e=ro().get("requests",!0)||{};e[d]={method:a,request:b,authState:po(c),requestTime:Math.round(Q())};ro().set("nextId",d+1,86400,!0);ro().set("requests",e,86400,!0);return d}
function to(a){var b=ro().get("requests",!0)||{};delete b[a];ro().set("requests",b,86400,!0)}
function uo(a){var b=ro().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=po(oo(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),vo(a,d.method,e,{}));delete b[c]}}ro().set("requests",b,86400,!0)}}
;function wo(a){this.bb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ca=function(){};
this.now=Date.now;this.Ka=!1;var b;this.uc=null!=(b=a.uc)?b:100;var c;this.oc=null!=(c=a.oc)?c:1;var d;this.mc=null!=(d=a.mc)?d:2592E6;var e;this.kc=null!=(e=a.kc)?e:12E4;var f;this.nc=null!=(f=a.nc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.gb=!!a.gb;var h;this.fb=null!=(h=a.fb)?h:.1;var k;this.lb=null!=(k=a.lb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ca&&(this.Ca=a.Ca);a.Ka&&(this.Ka=a.Ka);a.bb&&(this.bb=a.bb);this.J=a.J;this.Y=a.Y;this.N=a.N;this.L=a.L;this.ia=a.ia;this.Db=
a.Db;this.Cb=a.Cb;xo(this)&&(!this.J||this.J("networkless_logging"))&&yo(this)}
function yo(a){xo(a)&&!a.Ka&&(a.h=!0,a.gb&&Math.random()<=a.fb&&a.N.Jc(a.H),zo(a),a.L.U()&&a.Ra(),a.L.ha(a.Db,a.Ra.bind(a)),a.L.ha(a.Cb,a.Qb.bind(a)))}
l=wo.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(xo(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.H).then(function(e){d.id=e;c.L.U()&&Ao(c,d)}).catch(function(e){Ao(c,d);
Bo(c,e)})}else this.ia(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(xo(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.L.U()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return v(k,d.N.set(e,d.H).catch(function(m){Bo(d,m)}),2);
f(g,h);k.h=0})}}this.ia(a,b,e.skipRetry)}else this.N.set(e,this.H).catch(function(g){d.ia(a,b,e.skipRetry);
Bo(d,g)})}else this.ia(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(xo(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ba(d.id,c.H):e=!0;c.L.va&&c.J&&c.J("vss_network_hint")&&c.L.va(!0);f(g,h)};
this.ia(d.url,d.options);this.N.set(d,this.H).then(function(g){d.id=g;e&&c.N.Ba(d.id,c.H)}).catch(function(g){Bo(c,g)})}else this.ia(a,b)};
l.Ra=function(){var a=this;if(!xo(this))throw Im("throttleSend");this.i||(this.i=this.Y.S(function(){var b;return x(function(c){if(1==c.h)return v(c,a.N.ac("NEW",a.H),2);if(3!=c.h)return b=c.i,b?v(c,Ao(a,b),3):(a.Qb(),c.return());a.i&&(a.i=0,a.Ra());c.h=0})},this.uc))};
l.Qb=function(){this.Y.ea(this.i);this.i=0};
function Ao(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!xo(a))throw c=Im("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.N.Zc(b.id,a.H),3);case 3:(d=e.i)?b=d:a.Ca(Error("The request cannot be found in the database."));case 2:if(Co(a,b,a.mc)){e.u(4);break}a.Ca(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.N.Ba(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=Do(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.N.Ba(b.id,a.H),8);case 8:a.ia(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Do(a,b){if(!xo(a))throw Im("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.h){case 1:g=Eo(f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.lb)){m.u(2);break}if(!a.L.ob){m.u(3);break}return v(m,a.L.ob(),3);case 3:if(a.L.U()){m.u(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.N.Hb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.lb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.oc?v(m,a.N.Hb(b.id,a.H),12):v(m,a.N.Ba(b.id,a.H),8);case 12:a.Y.S(function(){a.L.U()&&a.Ra()},a.nc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.N.Ba(b.id,a.H),2);a.L.va&&a.J&&a.J("vss_network_hint")&&a.L.va(!0);d(e,f);h.h=0})};
return b}
function Co(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function zo(a){if(!xo(a))throw Im("retryQueuedRequests");a.N.ac("QUEUED",a.H).then(function(b){b&&!Co(a,b,a.kc)?a.Y.S(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):v(c,a.N.Hb(b.id,a.H),2);zo(a);c.h=0})}):a.L.U()&&a.Ra()})}
function Bo(a,b){a.zc&&!a.L.U()?a.zc(b):a.handleError(b)}
function xo(a){return!!a.H||a.bb}
function Eo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Fo(a,b){this.version=a;this.args=b}
;function Go(a,b){this.topic=a;this.h=b}
Go.prototype.toString=function(){return this.topic};var Ho=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ga;K.prototype.publish=K.prototype.ra;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",Ho);var Io=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Io);var Jo=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Jo);var Ko=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Ko);
z("ytPubsub2Pubsub2SkipSubKey",null);function Lo(a,b){var c=Mo();c&&c.publish.call(c,a.toString(),a,b)}
function No(a){var b=Oo,c=Mo();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Io[d])try{if(f&&b instanceof Go&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.oa){var m=new h;h.oa=m.version}var q=h.oa}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var w=k.args,t=w.length;if(0<t){var A=Array(t);for(k=0;k<t;k++)A[k]=w[k];var E=A}else E=[];f=r.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){$k(F)}},Ko[b.toString()]?B("yt.scheduler.instance")?fi.S(g):tl(g,0):g())});
Io[d]=!0;Jo[b.toString()]||(Jo[b.toString()]=[]);Jo[b.toString()].push(d);return d}
function Po(){var a=Qo,b=No(function(c){a.apply(void 0,arguments);Ro(b)});
return b}
function Ro(a){var b=Mo();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete Io[c]}))}
function Mo(){return B("ytPubsub2Pubsub2Instance")}
;var So;
function To(){if(So)return So();var a={};So=Tn("LogsDatabaseV2",{Da:(a.LogsRequestsStore={Ia:2},a),pb:!1,upgrade:function(b,c,d){c(2)&&Xm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),dn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return So()}
;function Uo(a){return rn(To(),a)}
function Vo(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,Uo(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,Zm(d,"LogsRequestsStore",e),3);f=g.i;c.zd=Q();Wo(c);return g.return(f)})}
function Xo(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,Uo(b),2);if(3!=m.h)return d=m.i,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Wm(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(q){return jn(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.zd=Q();Wo(c);return m.return(k)})}
function Yo(a,b){var c;return x(function(d){if(1==d.h)return v(d,Uo(b),2);c=d.i;return d.return(Wm(c,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Sm(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Zo(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return v(e,Uo(b),2);d=e.i;return e.return(Wm(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Sm(g.h.put(h,void 0)).then(function(){return h})):Mm.resolve(void 0)})}))})}
function $o(a,b){var c;return x(function(d){if(1==d.h)return v(d,Uo(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function ap(a){var b,c;return x(function(d){if(1==d.h)return v(d,Uo(a),2);b=d.i;c=Q()-2592E6;return v(d,Wm(b,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){return fn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function bp(){x(function(a){return v(a,Pn(),0)})}
function Wo(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Lo("nwl_transaction_latency_payload",a)}
;var cp={},dp=Tn("ServiceWorkerLogsDatabase",{Da:(cp.SWHealthLog={Ia:1},cp),pb:!0,upgrade:function(a,b){b(1)&&dn(Xm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function ep(a){return rn(dp(),a)}
function fp(a){var b,c;x(function(d){if(1==d.h)return v(d,ep(a),2);b=d.i;c=Q()-2592E6;return v(d,Wm(b,["SWHealthLog"],{mode:"readwrite",R:!0},function(e){return fn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function gp(a){var b;return x(function(c){if(1==c.h)return v(c,ep(a),2);b=c.i;return v(c,b.clear("SWHealthLog"),0)})}
;var hp={},ip=0;function jp(a){var b=new Image,c=""+ip++;hp[c]=b;b.onload=b.onerror=function(){delete hp[c]};
b.src=a}
;function kp(){this.h=new Map;this.i=!1}
function lp(){if(!kp.h){var a=B("yt.networkRequestMonitor.instance")||new kp;z("yt.networkRequestMonitor.instance",a);kp.h=a}return kp.h}
kp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
kp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
kp.prototype.removeParams=function(a){return a.split("?")[0]};
kp.prototype.removeParams=kp.prototype.removeParams;kp.prototype.isEndpointCFR=kp.prototype.isEndpointCFR;kp.prototype.requestComplete=kp.prototype.requestComplete;kp.getInstance=lp;var mp;function np(){mp||(mp=new jm("yt.offline"));return mp}
function op(a){if(M("offline_error_handling")){var b=np().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);np().set("errors",b,2592E3,!0)}}
;function pp(){ef.call(this);var a=this;this.j=!1;this.i=ei();this.i.ha("networkstatus-online",function(){if(a.j&&M("offline_error_handling")){var b=np().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new P(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;$k(d)}np().set("errors",{},2592E3,!0)}}})}
u(pp,ef);function qp(){if(!pp.h){var a=B("yt.networkStatusManager.instance")||new pp;z("yt.networkStatusManager.instance",a);pp.h=a}return pp.h}
l=pp.prototype;l.U=function(){return this.i.U()};
l.va=function(a){this.i.i=a};
l.Sc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Nc=function(){this.j=!0};
l.ha=function(a,b){return this.i.ha(a,b)};
l.ob=function(a){a=ci(this.i,a);a.then(function(b){M("use_cfr_monitor")&&lp().requestComplete("generate_204",b)});
return a};
pp.prototype.sendNetworkCheckRequest=pp.prototype.ob;pp.prototype.listen=pp.prototype.ha;pp.prototype.enableErrorFlushing=pp.prototype.Nc;pp.prototype.getWindowStatus=pp.prototype.Sc;pp.prototype.networkStatusHint=pp.prototype.va;pp.prototype.isNetworkAvailable=pp.prototype.U;pp.getInstance=qp;function rp(a){a=void 0===a?{}:a;ef.call(this);var b=this;this.i=this.o=0;this.j=qp();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.nb?(this.nb=a.nb,c("networkstatus-online",function(){sp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){sp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ff(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ff(b,"publicytnetworkstatus-offline")})))}
u(rp,ef);rp.prototype.U=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
rp.prototype.va=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
rp.prototype.ob=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&lp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.va((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.U())})):c?d.return(c(a)):d.return(!0)})};
function sp(a,b){a.nb?a.i?(fi.ea(a.o),a.o=fi.S(function(){a.m!==b&&(ff(a,b),a.m=b,a.i=Q())},a.nb-(Q()-a.i))):(ff(a,b),a.m=b,a.i=Q()):ff(a,b)}
;var tp;function up(){var a=wo.call;tp||(tp=new rp({yr:!0,sr:!0}));a.call(wo,this,{N:{Jc:ap,Ba:$o,ac:Xo,Zc:Yo,Hb:Zo,set:Vo},L:tp,handleError:$k,Ca:al,ia:vp,now:Q,zc:op,Y:em(),Db:"publicytnetworkstatus-online",Cb:"publicytnetworkstatus-offline",gb:!0,fb:.1,lb:Uk("potential_esf_error_limit",10),J:M,Ka:!(fm()&&wp())});this.j=new Fh;M("networkless_immediately_drop_all_requests")&&bp();Qn("LogsDatabaseV2")}
u(up,wo);function xp(){var a=B("yt.networklessRequestController.instance");a||(a=new up,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&Fn().then(function(b){a.H=b;yo(a);a.j.resolve();a.gb&&Math.random()<=a.fb&&a.H&&fp(a.H);M("networkless_immediately_drop_sw_health_store")&&yp(a)}));
return a}
up.prototype.writeThenSend=function(a,b){b||(b={});fm()||(this.h=!1);wo.prototype.writeThenSend.call(this,a,b)};
up.prototype.sendThenWrite=function(a,b,c){b||(b={});fm()||(this.h=!1);wo.prototype.sendThenWrite.call(this,a,b,c)};
up.prototype.sendAndWrite=function(a,b){b||(b={});fm()||(this.h=!1);wo.prototype.sendAndWrite.call(this,a,b)};
up.prototype.awaitInitialization=function(){return this.j.promise};
function yp(a){var b;x(function(c){if(!a.H)throw b=Im("clearSWHealthLogsDb"),b;return c.return(gp(a.H).catch(function(d){a.handleError(d)}))})}
function vp(a,b,c){M("use_cfr_monitor")&&zp(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Q())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Cl(a,void 0,"POST",e);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Cl(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new cb({url:a});if(g.j&&g.i||
g.l){var h=mc(nc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var m=a.search(yc),q=xc(a,0,"ri",m);if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>m)w=m;r=decodeURIComponent(a.slice(q+3,-1!==w?w:0).replace(/\+/g," "))}k="1"!==r}var t=!k;break b}}catch(E){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(E){}A=!1}c=A?!0:!1}else c=!1;c||jp(a)}}else zl(a,b)}
function zp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){lp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){lp().requestComplete(a,!0);d(e,f)}}
function wp(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var Ap=!1,Op=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Ap};z("ytNetworklessLoggingInitializationOptions",Op);function mq(){var a;x(function(b){if(1==b.h)return v(b,Fn(),2);a=b.i;if(!a||!fm()&&!M("nwl_init_require_datasync_id_killswitch")||!wp())return b.u(0);Ap=!0;Op.isNwlInitialized=Ap;return v(b,xp().awaitInitialization(),0)})}
;function nq(a){var b=this;this.config_=null;a?this.config_=a:eo()&&(this.config_=fo());$l(function(){uo(b)},5E3)}
nq.prototype.isReady=function(){!this.config_&&eo()&&(this.config_=fo());return!!this.config_};
function vo(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=so(b,c,m,k)),E)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){to(E);F(N,R)};
c.onFetchSuccess=function(N,R){to(E);O(N,R)}}try{A&&d.retry&&!d.hc.bypassNetworkless?(g.method="POST",d.hc.writeThenSend?xp().writeThenSend(t,g):xp().sendAndWrite(t,g)):M("web_all_payloads_via_jspb")?zl(t,g):(g.method="POST",g.postParams||(g.postParams={}),zl(t,g))}catch(N){if("InvalidAccessError"==N.name)E&&(to(E),E=0),al(Error("An extension is blocking network request."));
else throw N;}E&&$l(function(){uo(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&al(new P("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new P("innertube xhrclient not ready",b,c,d);$k(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Vc)&&(h=f);var k=a.config_.Xc||!1,m=oo(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},w=a.config_.Wc&&f;w=w&&f.startsWith("Bearer");w||(r.key=a.config_.innertubeApiKey);var t=ml(""+h+q,r||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
Op.isNwlInitialized:Ap)?Dn().then(function(A){e(A)}):e(!1)}
;var oq=0,pq=Mc?"webkit":Lc?"moz":Jc?"ms":Ic?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++oq});var qq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function sq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
rq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",pb);var tq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",tq);
function uq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var vq=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function wq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=uq(a,b,c,d);if(e)return e;e=++tq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new rq(h);if(!pf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new rq(h);
h.currentTarget=a;return c.call(a,h)};
g=Zk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function xq(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?vq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;var yq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function zq(a){this.F=a;this.i=null;this.m=0;this.s=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.K=wq(window,"mousemove",Ya(this.O,this));a=Ya(this.I,this);"function"===typeof a&&(a=Zk(a));this.P=window.setInterval(a,25)}
$a(zq,J);zq.prototype.O=function(a){void 0===a.h&&sq(a);var b=a.h;void 0===a.i&&sq(a);this.i=new lf(b,a.i)};
zq.prototype.I=function(){if(this.i){var a=yq();if(0!=this.m){var b=this.s,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.s=this.i;this.l=(this.l+1)%4}};
zq.prototype.B=function(){window.clearInterval(this.P);xq(this.K)};var Aq={};
function Bq(a){var b=void 0===a?{}:a;a=void 0===b.ed?!1:b.ed;b=void 0===b.Oc?!0:b.Oc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Cq();wq(document,"keydown",Cq);wq(document,"keyup",Cq);wq(document,"mousedown",Cq);wq(document,"mouseup",Cq);a?wq(window,"touchmove",function(){Dq("touchmove",200)},{passive:!0}):(wq(window,"resize",function(){Dq("resize",200)}),b&&wq(window,"scroll",function(){Dq("scroll",200)}));
new zq(function(){Dq("mouse",100)});
wq(document,"touchstart",Cq,{passive:!0});wq(document,"touchend",Cq,{passive:!0})}}
function Dq(a,b){Aq[a]||(Aq[a]=!0,fi.S(function(){Cq();Aq[a]=!1},b))}
function Cq(){null==B("_lact",window)&&Bq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Eq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Fq=y.ytPubsubPubsubInstance||new K,Gq=y.ytPubsubPubsubSubscribedKeys||{},Hq=y.ytPubsubPubsubTopicToKeys||{},Iq=y.ytPubsubPubsubIsSynchronous||{};function Jq(a,b){var c=Kq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Gq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Iq[a]?f():tl(f,0)}catch(g){$k(g)}},void 0);
Gq[d]=!0;Hq[a]||(Hq[a]=[]);Hq[a].push(d);return d}return 0}
function Lq(a){var b=Kq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete Gq[c]}))}
function Mq(a,b){var c=Kq();c&&c.publish.apply(c,arguments)}
function Nq(a){var b=Kq();if(b)if(b.clear(a),a)Oq(a);else for(var c in Hq)Oq(c)}
function Kq(){return y.ytPubsubPubsubInstance}
function Oq(a){Hq[a]&&(a=Hq[a],gb(a,function(b){Gq[b]&&delete Gq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ga;K.prototype.publish=K.prototype.ra;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",Fq);z("ytPubsubPubsubTopicToKeys",Hq);z("ytPubsubPubsubIsSynchronous",Iq);z("ytPubsubPubsubSubscribedKeys",Gq);var Pq=Symbol("injectionDeps");function Qq(a){this.name=a}
Qq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Rq(){this.key=Sq}
function Tq(){this.h=new Map;this.i=new Map}
Tq.prototype.resolve=function(a){return a instanceof Rq?Uq(this,a.key,[],!0):Uq(this,a,[])};
function Uq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.xc)var e=d.xc;else if(d.Cd)e=d[Pq]?Vq(a,d[Pq],c):[],e=d.Cd.apply(d,ja(e));else if(d.wc){e=d.wc;var f=e[Pq]?Vq(a,e[Pq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ir||a.i.set(b,e);return e}
function Vq(a,b,c){return b?b.map(function(d){return d instanceof Rq?Uq(a,d.key,c,!0):Uq(a,d,c)}):[]}
;var Wq;function Xq(){Wq||(Wq=new Tq);return Wq}
;function Yq(){this.store={};this.h={}}
Yq.prototype.storePayload=function(a,b){a=Zq(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Yq.prototype.extractMatchingEntries=function(a){a=$q(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Yq.prototype.getSequenceCount=function(a){a=$q(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function $q(a,b){var c=Zq(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Zq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ar(b.auth,g[0])){var h=b.isJspb;ar(void 0===h?"undefined":h?"true":"false",g[1])&&ar(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function ar(a,b){return void 0===a||"undefined"===a?!0:a===b}
Yq.prototype.getSequenceCount=Yq.prototype.getSequenceCount;Yq.prototype.extractMatchingEntries=Yq.prototype.extractMatchingEntries;Yq.prototype.storePayload=Yq.prototype.storePayload;function Zq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function br(a,b){if(a)return a[b.name]}
;var cr=Uk("initial_gel_batch_timeout",2E3),dr=Math.pow(2,16)-1,er=void 0;function fr(){this.j=this.h=this.i=0}
var gr=new fr,hr=new fr,ir,jr=!0,kr=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",kr);var lr=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",lr);var mr=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",mr);var nr=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",nr);var or={};function pr(){var a=B("yt.logging.ims");a||(a=new Yq,z("yt.logging.ims",a));return a}
function qr(a,b){M("web_all_payloads_via_jspb")&&al(new P("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){rr(a);var c=sr(a);if(M("use_new_in_memory_storage")){or[c]=!0;var d={cttAuthInfo:c,isJspb:!1};pr().storePayload(d,a.payload);tr(b,[],c,!1,d)}else d=kr.get(c)||[],kr.set(c,d),d.push(a.payload),tr(b,d,c)}}
function ur(a,b){if("log_event"===a.endpoint){rr(void 0,a);var c=sr(a,!0);if(M("use_new_in_memory_storage")){or[c]=!0;var d={cttAuthInfo:c,isJspb:!0};pr().storePayload(d,a.payload.toJSON());tr(b,[],c,!0,d)}else d=lr.get(c)||[],lr.set(c,d),a=a.payload.toJSON(),d.push(a),tr(b,d,c,!0)}}
function tr(a,b,c,d,e){d=void 0===d?!1:d;a&&(er=new a);a=Uk("tvhtml5_logging_max_batch_ads_fork")||Uk("tvhtml5_logging_max_batch")||Uk("web_logging_max_batch")||100;var f=Q(),g=d?hr.j:gr.j;b=b.length;e&&(b=pr().getSequenceCount(e));b>=a?ir||(ir=vr(function(){wr({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d);ir=void 0},0)):10<=f-g&&(xr(d),d?hr.j=f:gr.j=f)}
function yr(a,b){M("web_all_payloads_via_jspb")&&al(new P("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){rr(a);var c=sr(a),d=new Map;d.set(c,[a.payload]);b&&(er=new b);return new Bf(function(e,f){er&&er.isReady()?zr(d,er,e,f,{bypassNetworkless:!0},!0):e()})}}
function Ar(a,b){if("log_event"===a.endpoint){rr(void 0,a);var c=sr(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(er=new b);return new Bf(function(e){er&&er.isReady()?Br(d,er,e,{bypassNetworkless:!0},!0):e()})}}
function sr(a,b){var c="";if(a.Ja)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new jk;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Wd(d,2,Ek,c.playlistId);nr[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),mr[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function wr(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&M("web_all_payloads_via_jspb")&&al(new P("transport.flushLogs called for JSON in JSPB only experiment"));new Bf(function(d,e){c?(Cr(hr.i),Cr(hr.h),hr.h=0):(Cr(gr.i),Cr(gr.h),gr.h=0);if(er&&er.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=er;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=pr().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),Br(k,h,d,f)):(k=pr().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),zr(m,h,d,e,f));else if(g){e=p(Object.keys(or));for(g=e.next();!g.done;g=e.next())m=g.value,g=pr().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete or[m];Br(k,h,d,f)}else{k=p(Object.keys(or));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=pr().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<q.length&&m.set(g,q);delete or[g]}zr(m,h,d,e,f)}}else f=a,k=c,h=er,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=lr.get(b)||[],e.set(b,
k),Br(e,h,d,f),lr.delete(b)):(k=new Map,m=kr.get(b)||[],k.set(b,m),zr(k,h,d,e,f),kr.delete(b)):k?(Br(lr,h,d,f),lr.clear()):(zr(kr,h,d,e,f),kr.clear());else xr(c),d()})}
function xr(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!gr.h||a&&!hr.h)){var b=vr(function(){wr({writeThenSend:!0},void 0,a)},6E4);
a?hr.h=b:gr.h=b}Cr(a?hr.i:gr.i);b=L("LOGGING_BATCH_TIMEOUT",Uk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&jr&&(b=cr);b=vr(function(){wr({writeThenSend:!0},void 0,a)},b);
a?hr.i=b:gr.i=b}
function zr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Q()),h=a.size,k={};a=p(a);for(var m=a.next();!m.done;k={Ua:k.Ua,qa:k.qa,Ea:k.Ea,Wa:k.Wa,Va:k.Va},m=a.next()){var q=p(m.value);m=q.next().value;q=q.next().value;k.qa=wb({context:go(b.config_||fo())});if(!Qa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.qa.events=q;(q=mr[m])&&Dr(k.qa,m,q);delete mr[m];k.Ea="visitorOnlyApprovedKey"===m;Er(k.qa,g,k.Ea);Fr(e);k.Wa=function(r){M("update_log_event_config")&&fi.S(function(){return x(function(w){return v(w,
Gr(r),0)})});
h--;h||c()};
k.Ua=0;k.Va=function(r){return function(){r.Ua++;if(e.bypassNetworkless&&1===r.Ua)try{vo(b,"log_event",r.qa,Hr({writeThenSend:!0},r.Ea,r.Wa,r.Va,f)),jr=!1}catch(w){$k(w),d()}h--;h||c()}}(k);
try{vo(b,"log_event",k.qa,Hr(e,k.Ea,k.Wa,k.Va,f)),jr=!1}catch(r){$k(r),d()}}}
function Br(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Q()),g=a.size,h=new Map([].concat(ja(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new Fk;var r=no(b.config_||fo());G(k,lj,1,r);q=q?Ir(q):[];q=p(q);for(r=q.next();!r.done;r=q.next())de(k,3,fk,r.value);(q=nr[m])&&Jr(k,m,q);delete nr[m];m="visitorOnlyApprovedKey"===m;Kr(k,f,m);Fr(d);k=le(k);m=Hr(d,m,function(w){M("update_log_event_config")&&fi.S(function(){return x(function(t){return v(t,Gr(w),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;vo(b,"log_event","",m);jr=!1}}
function Fr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function Hr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,hc:a,Ja:b,mr:!!e,headers:{},postBodyFormat:"",postBody:""};Lr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Q())));return a}
function Er(a,b,c){Lr()||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=Mr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Kr(a,b,c){Lr()||D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=Mr();var d=new ik;D(d,1,b);D(d,2,c);G(a,ik,5,d)}}
function Mr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*dr/2));a++;a>dr&&(a=1);Rk("BATCH_CLIENT_COUNTER",a);return a}
function Dr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Jr(a,b,c){if(ee(c,1===Xd(c,Ek)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,jk,4,c);a=Yd(a,lj,1)||new lj;c=Yd(a,jj,3)||new jj;var e=new ij;D(e,2,b);D(e,1,d);de(c,12,ij,e);G(a,jj,3,c)}
function Ir(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new fk(a[c]))}catch(d){$k(new P("Transport failed to deserialize "+String(a[c])))}return b}
function rr(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function Lr(){return M("use_request_time_ms_header")||M("lr_use_request_time_ms_header")}
function vr(a,b){return M("transport_use_scheduler")?$l(a,b):tl(a,b)}
function Cr(a){M("transport_use_scheduler")?fi.ea(a):window.clearTimeout(a)}
function Gr(a){var b,c,d,e,f,g,h,k,m,q;return x(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=br(d,Vi),g=null==(f=d)?void 0:f.hotHashData,h=br(d,Ui),m=null==(k=d)?void 0:k.coldHashData,q=Xq().resolve(ao),g?e?v(r,bo(q,g,e),2):v(r,bo(q,g),2):r.u(2)):m?h?v(r,co(q,m,h),0):v(r,co(q,m),0):r.u(0)})}
;var Nr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Nr);
function Or(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;M("enable_unknown_lact_fix_on_html5")&&Bq();a=Eq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.Z&&(a=e.context,b=d.Z,b={index:Pr(b),groupKey:b},a.sequence=b,d.Xb&&delete Nr[d.Z]);(d.pc?yr:qr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,Ja:d.Ja},c)}
function Qr(a){wr(void 0,void 0,void 0===a?!1:a)}
function Pr(a){Nr[a]=a in Nr?Nr[a]+1:0;return Nr[a]}
;var Rr=[];var Sr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Sr);function Tr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||Q());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Eq();d=new ek;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.Z){e=c.Z;var f=Pr(e),g=new dk;D(g,2,f);D(g,1,e);G(d,dk,3,g);c.Xb&&delete Sr[c.Z]}G(a,ek,33,d);(c.pc?Ar:ur)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Ja:c.Ja},b)}
;function Ur(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);Tr(a,c?null:nq,b)}
;function Vr(a,b,c){var d=new fk;be(d,Uj,72,gk,a);c?Tr(d,c,b):Ur(d,b)}
function Wr(a,b,c){var d=new fk;be(d,Tj,73,gk,a);c?Tr(d,c,b):Ur(d,b)}
function Xr(a,b,c){var d=new fk;be(d,Sj,78,gk,a);c?Tr(d,c,b):Ur(d,b)}
function Yr(a,b,c){var d=new fk;be(d,Vj,208,gk,a);c?Tr(d,c,b):Ur(d,b)}
function Zr(a,b,c){var d=new fk;be(d,Lj,156,gk,a);c?Tr(d,c,b):Ur(d,b)}
function $r(a,b,c){var d=new fk;be(d,Pj,215,gk,a);c?Tr(d,c,b):Ur(d,b)}
function as(a,b,c){var d=new fk;be(d,Hj,111,gk,a);c?Tr(d,c,b):Ur(d,b)}
;function sm(a,b,c){c=void 0===c?{}:c;if(M("migrate_events_to_ts")){c=void 0===c?{}:c;c.timestamp=Math.round(c.timestamp||Q());var d=nq;L("ytLoggingEventsDefaultDisabled",!1)&&nq===nq&&(d=null);M("web_all_payloads_via_jspb")?Rr.push({Eb:a,payload:b,options:c}):Or(a,b,d,c)}else d=nq,L("ytLoggingEventsDefaultDisabled",!1)&&nq==nq&&(d=null),Or(a,b,d,c)}
;var bs=[{Bb:function(a){return"Cannot read property '"+a.key+"'"},
kb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Bb:function(a){return"Cannot call '"+a.key+"'"},
kb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Bb:function(a){return a.key+" is not defined"},
kb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var ds={na:[],ka:[{callback:cs,weight:500}]};function cs(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function es(){this.ka=[];this.na=[]}
var fs;function gs(){if(!fs){var a=fs=new es;a.na.length=0;a.ka.length=0;ds.na&&a.na.push.apply(a.na,ds.na);ds.ka&&a.ka.push.apply(a.ka,ds.ka)}return fs}
;var hs=new K;function is(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=js(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=js(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=js(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function js(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function ks(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=ls(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=is(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?ls(e+".ve",f,g,h):0;d+=g;d+=ls(e,a[e],b,c);if(500<d)break}}else c[b]=ms(a),d+=c[b].length;else c[b]=ms(a),d+=c[b].length;return d}
function ls(a,b,c,d){c+="."+a;a=ms(b);d[c]=a;return c.length+a.length}
function ms(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var ns=new Set,os=0,ps=0,qs=0,rs=[],ss=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function rm(a){ts(a)}
function us(a){ts(a,"WARNING")}
function ts(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=os)){var m=rs,q=ye(a),r=q.message||"Unknown Error",w=q.name||"UnknownError",t=q.stack||a.i||"Not available";if(t.startsWith(w+": "+r)){var A=t.split("\n");A.shift();t=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",O=t,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=ks(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var U in ca){if(ca[U]){var sb="params."+U,Wa=ms(ca[U]);g[sb]=Wa;N+=sb.length+Wa.length;if(500<N)break}}else g.params=ms(ca)}if(m.length)for(var na=0;na<m.length&&!(N=ks(m[na],"params.context."+na,g,N),500<=N);na++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var I={message:r,name:w,lineNumber:E,fileName:F,stack:O,params:g,sampleWeight:1},ma=Number(a.columnNumber);isNaN(ma)||(I.lineNumber=I.lineNumber+
":"+ma);if("IGNORED"===a.level)var ea=0;else a:{for(var Ee=gs(),Fe=p(Ee.na),sd=Fe.next();!sd.done;sd=Fe.next()){var pa=sd.value;if(I.message&&I.message.match(pa.zr)){ea=pa.weight;break a}}for(var Bp=p(Ee.ka),kk=Bp.next();!kk.done;kk=Bp.next()){var Cp=kk.value;if(Cp.callback(I)){ea=Cp.weight;break a}}ea=1}I.sampleWeight=ea;for(var Dp=p(bs),lk=Dp.next();!lk.done;lk=Dp.next()){var mk=lk.value;if(mk.kb[I.name])for(var Ep=p(mk.kb[I.name]),nk=Ep.next();!nk.done;nk=Ep.next()){var Fp=nk.value,Vg=I.message.match(Fp.regexp);
if(Vg){I.params["params.error.original"]=Vg[0];for(var ok=Fp.groups,Gp={},td=0;td<ok.length;td++)Gp[ok[td]]=Vg[td+1],I.params["params.error."+ok[td]]=Vg[td+1];I.message=mk.Bb(Gp);break}}}I.params||(I.params={});var Hp=gs();I.params["params.errorServiceSignature"]="msg="+Hp.na.length+"&cb="+Hp.ka.length;I.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(I.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(I.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(I);if(0!==I.sampleWeight&&!ns.has(I.message)){if("ERROR"===h){hs.ra("handleError",I);if(M("record_app_crashed_web")&&0===qs&&1===I.sampleWeight)if(qs++,M("errors_via_jspb")){var pk=new Ej;D(pk,1,1);if(!M("report_client_error_with_app_crash_ks")){var Ip=new zj;D(Ip,1,I.message);var Jp=new Aj;G(Jp,zj,3,Ip);var Kp=new Bj;G(Kp,Aj,5,Jp);var Lp=new Cj;G(Lp,Bj,9,Kp);G(pk,Cj,4,Lp)}var Mp=new fk;be(Mp,Ej,20,
gk,pk);Ur(Mp)}else{var Np={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Np.systemHealth={crashData:{clientError:{logMessage:{message:I.message}}}});sm("appCrashed",Np)}ps++}else"WARNING"===h&&hs.ra("handleWarning",I);if(M("kevlar_gel_error_routing"))a:{var Ge=h;if(M("errors_via_jspb")){if(vs())var Pp=void 0;else{var ud=new wj;D(ud,1,I.stack);I.fileName&&D(ud,4,I.fileName);var Lb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Lb.length&&(1!==
Lb.length||isNaN(Number(Lb[0]))?2!==Lb.length||isNaN(Number(Lb[0]))||isNaN(Number(Lb[1]))||(D(ud,2,Number(Lb[0])),D(ud,3,Number(Lb[1]))):D(ud,2,Number(Lb[0])));var zc=new zj;D(zc,1,I.message);D(zc,3,I.name);D(zc,6,I.sampleWeight);"ERROR"===Ge?D(zc,2,2):"WARNING"===Ge?D(zc,2,1):D(zc,2,0);var qk=new xj;D(qk,1,!0);be(qk,wj,3,yj,ud);var cc=new tj;D(cc,3,window.location.href);for(var Qp=L("FEXP_EXPERIMENTS",[]),rk=0;rk<Qp.length;rk++){var ow=Qp[rk];Gd(cc);Vd(cc,5,2,!1,!1).push(ow)}var sk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Sk()&&sk)for(var Rp=p(Object.keys(sk)),Ac=Rp.next();!Ac.done;Ac=Rp.next()){var Sp=Ac.value,tk=new vj;D(tk,1,Sp);D(tk,2,String(sk[Sp]));de(cc,4,vj,tk)}var uk=I.params;if(uk){var Tp=p(Object.keys(uk));for(Ac=Tp.next();!Ac.done;Ac=Tp.next()){var Up=Ac.value,vk=new vj;D(vk,1,"client."+Up);D(vk,2,String(uk[Up]));de(cc,4,vj,vk)}}var Vp=L("SERVER_NAME"),Wp=L("SERVER_VERSION");if(Vp&&Wp){var wk=new vj;D(wk,1,"server.name");D(wk,2,Vp);de(cc,4,vj,wk);var xk=new vj;D(xk,1,"server.version");D(xk,2,Wp);de(cc,
4,vj,xk)}var Wg=new Aj;G(Wg,tj,1,cc);G(Wg,xj,2,qk);G(Wg,zj,3,zc);Pp=Wg}var Xp=Pp;if(!Xp)break a;var Yp=new fk;be(Yp,Aj,163,gk,Xp);Ur(Yp)}else{if(vs())var Zp=void 0;else{var He={stackTrace:I.stack};I.fileName&&(He.filename=I.fileName);var Mb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Mb.length&&(1!==Mb.length||isNaN(Number(Mb[0]))?2!==Mb.length||isNaN(Number(Mb[0]))||isNaN(Number(Mb[1]))||(He.lineNumber=Number(Mb[0]),He.columnNumber=Number(Mb[1])):He.lineNumber=Number(Mb[0]));
var yk={level:"ERROR_LEVEL_UNKNOWN",message:I.message,errorClassName:I.name,sampleWeight:I.sampleWeight};"ERROR"===Ge?yk.level="ERROR_LEVEL_ERROR":"WARNING"===Ge&&(yk.level="ERROR_LEVEL_WARNNING");var pw={isObfuscated:!0,browserStackInfo:He},vd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(vd.experimentIds=L("FEXP_EXPERIMENTS"));var zk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Sk()&&zk)for(var $p=p(Object.keys(zk)),Bc=$p.next();!Bc.done;Bc=$p.next()){var aq=Bc.value;vd.kvPairs.push({key:aq,
value:String(zk[aq])})}var Ak=I.params;if(Ak){var bq=p(Object.keys(Ak));for(Bc=bq.next();!Bc.done;Bc=bq.next()){var cq=Bc.value;vd.kvPairs.push({key:"client."+cq,value:String(Ak[cq])})}}var dq=L("SERVER_NAME"),eq=L("SERVER_VERSION");dq&&eq&&(vd.kvPairs.push({key:"server.name",value:dq}),vd.kvPairs.push({key:"server.version",value:eq}));Zp={errorMetadata:vd,stackTrace:pw,logMessage:yk}}var fq=Zp;if(!fq)break a;sm("clientError",fq)}if("ERROR"===Ge||M("errors_flush_gel_always_killswitch"))b:if(M("migrate_events_to_ts"))c:{if(M("web_fp_via_jspb")&&
(Qr(!0),!M("web_fp_via_jspb_and_json")))break c;Qr()}else{if(M("web_fp_via_jspb")&&(Qr(!0),!M("web_fp_via_jspb_and_json")))break b;Qr()}}if(!M("suppress_error_204_logging")){var Ie=I.params||{},dc={urlParams:{a:"logerror",t:"jserror",type:I.name,msg:I.message.substr(0,250),line:I.lineNumber,level:h,"client.name":Ie.name},postParams:{url:L("PAGE_NAME",window.location.href),file:I.fileName},method:"POST"};Ie.version&&(dc["client.version"]=Ie.version);if(dc.postParams){I.stack&&(dc.postParams.stack=
I.stack);for(var gq=p(Object.keys(Ie)),Bk=gq.next();!Bk.done;Bk=gq.next()){var hq=Bk.value;dc.postParams["client."+hq]=Ie[hq]}var Ck=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Ck)for(var iq=p(Object.keys(Ck)),Dk=iq.next();!Dk.done;Dk=iq.next()){var jq=Dk.value;dc.postParams[jq]=Ck[jq]}var kq=L("SERVER_NAME"),lq=L("SERVER_VERSION");kq&&lq&&(dc.postParams["server.name"]=kq,dc.postParams["server.version"]=lq)}zl(L("ECATCHER_REPORT_HOST","")+"/error_204",dc)}try{ns.add(I.message)}catch(Sx){}os++}}}}
function vs(){for(var a=p(ss),b=a.next();!b.done;b=a.next())if(im(b.value.toLowerCase()))return!0;return!1}
function ws(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function xs(){this.register=new Map}
function ys(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Dr("ABORTED")}
xs.prototype.clear=function(){ys(this);this.register.clear()};
var zs=new xs;var As=Date.now().toString();
function Bs(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(As)for(a=1,b=0;b<As.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^As.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Cs=y.ytLoggingDocDocumentNonce_;Cs||(Cs=Bs(),z("ytLoggingDocDocumentNonce_",Cs));var Ds=Cs;var Es={Zh:0,te:1,Ee:2,Yl:3,bi:4,Bq:5,Om:6,Fo:7,Vn:8,to:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Fs(a){this.G=a}
function Gs(a){return new Fs({trackingParams:a})}
Fs.prototype.getAsJson=function(){var a={};void 0!==this.G.trackingParams?a.trackingParams=this.G.trackingParams:(a.veType=this.G.veType,void 0!==this.G.veCounter&&(a.veCounter=this.G.veCounter),void 0!==this.G.elementIndex&&(a.elementIndex=this.G.elementIndex));void 0!==this.G.dataElement&&(a.dataElement=this.G.dataElement.getAsJson());void 0!==this.G.youtubeData&&(a.youtubeData=this.G.youtubeData);return a};
Fs.prototype.getAsJspb=function(){var a=new Gj;if(void 0!==this.G.trackingParams){var b=this.G.trackingParams;if(null!=b)if("string"===typeof b)b=b?new kd(b,hd):ld();else if(b.constructor!==kd)if(gd(b))b=b.length?new kd(new Uint8Array(b),hd):ld();else throw Error();D(a,1,b)}else void 0!==this.G.veType&&D(a,2,this.G.veType),void 0!==this.G.veCounter&&D(a,6,this.G.veCounter),void 0!==this.G.elementIndex&&D(a,3,this.G.elementIndex);void 0!==this.G.dataElement&&(b=this.G.dataElement.getAsJspb(),G(a,Gj,
7,b));void 0!==this.G.youtubeData&&G(a,Wi,8,this.G.jspbYoutubeData);return a};
Fs.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Fs.prototype.isClientVe=function(){return!this.G.trackingParams&&!!this.G.veType};function Hs(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Is(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Js(a){return L(Is(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",Js);function Ks(a){return(a=Js(void 0===a?0:a))?new Fs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Ls(){var a=L("csn-to-ctt-auth-info");a||(a={},Rk("csn-to-ctt-auth-info",a));return a}
function Ms(a){a=L(Hs(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",Ms);function Ns(a,b,c){var d=Ls();(c=Ms(c))&&delete d[c];b&&(d[a]=b)}
function Os(a){return Ls()[a]}
z("yt_logging_screen.getCttAuthInfo",Os);
function Ps(a,b,c,d){c=void 0===c?0:c;if(a!==L(Hs(c))||b!==L(Is(c)))if(Ns(a,d,c),Rk(Hs(c),a),Rk(Is(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new Hj;D(e,1,Ds);D(e,2,a);M("use_default_heartbeat_client")?as(e):as(e,void 0,nq)}else e={clientDocumentNonce:Ds,clientScreenNonce:a},M("use_default_heartbeat_client")?sm("foregroundHeartbeatScreenAssociated",e):Or("foregroundHeartbeatScreenAssociated",e,nq)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",Ps);var Qs=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Qs);function Rs(a){Mk(Qs,arguments)}
;var Ss={se:3611,Dd:27686,Ed:85013,Fd:23462,Hd:157557,Id:42016,Jd:62407,Kd:26926,Gd:43781,Ld:51236,Md:79148,Nd:50160,Od:77504,ae:153587,be:87907,ce:18630,de:54445,ee:80935,ge:152172,he:105675,ie:150723,je:37521,ke:147285,le:47786,me:98349,ne:123695,oe:6827,pe:29434,qe:7282,re:124448,we:32276,ue:76278,xe:147868,ye:147869,ze:93911,Ae:106531,Be:27259,Ce:27262,De:27263,Fe:21759,Ge:27107,He:62936,Ie:160866,Je:49568,Ke:160789,Le:38408,Me:80637,Ne:68727,Oe:68728,Pe:80353,Qe:80356,Re:74610,Se:45707,Te:83962,
Ue:83970,Ve:46713,We:89711,Xe:74612,Ye:155792,Ze:93265,af:74611,bf:131380,df:128979,ef:139311,ff:128978,cf:131391,gf:105350,jf:139312,kf:134800,hf:131392,mf:113533,nf:93252,pf:99357,rf:94521,sf:114252,tf:113532,uf:94522,qf:94583,vf:88E3,wf:139580,xf:93253,yf:93254,zf:94387,Af:94388,Bf:93255,Cf:97424,lf:72502,Df:110111,Ef:76019,Gf:117092,Hf:117093,Ff:89431,If:110466,Jf:77240,Kf:60508,Lf:148123,Mf:148124,Nf:137401,Of:137402,Pf:137046,Qf:73393,Rf:113534,Sf:92098,Tf:131381,Uf:84517,Vf:83759,Wf:162711,
Xf:162712,Yf:80357,Zf:86113,ag:72598,cg:72733,dg:107349,eg:124275,fg:118203,gg:133275,hg:160157,ig:152569,jg:156651,kg:133274,lg:160159,mg:160158,ng:133272,og:133273,pg:133276,qg:144507,rg:143247,sg:156652,tg:143248,ug:143249,vg:143250,wg:143251,xg:156653,yg:144401,Ag:117431,zg:133797,Bg:153964,Cg:128572,Dg:133405,Eg:117429,Fg:117430,Gg:117432,Hg:120080,Ig:117259,Jg:156655,Kg:156654,Lg:121692,Mg:145656,Ng:156656,Og:145655,Pg:145653,Qg:145654,Rg:145657,Sg:132972,Tg:133051,Ug:133658,Vg:132971,Wg:97615,
Yg:143359,Xg:143356,ah:143361,Zg:143358,dh:143360,bh:143357,eh:142303,fh:143353,gh:143354,hh:144479,ih:143355,jh:31402,lh:133624,mh:146477,nh:133623,oh:133622,kh:133621,ph:84774,rh:160801,qh:95117,sh:150497,th:98930,uh:98931,vh:98932,wh:153320,xh:153321,yh:43347,zh:129889,Ah:149123,Bh:45474,Ch:100352,Dh:84758,Eh:98443,Fh:117985,Gh:74613,Hh:155911,Ih:74614,Jh:64502,Kh:136032,Lh:74615,Mh:74616,Nh:122224,Oh:74617,Ph:77820,Qh:74618,Rh:93278,Sh:93274,Th:93275,Uh:93276,Vh:22110,Wh:29433,Xh:133798,Yh:132295,
ai:120541,ci:82047,di:113550,fi:75836,gi:75837,hi:42352,ii:84512,ji:76065,ki:75989,ri:51879,si:16623,ti:32594,vi:27240,wi:32633,xi:74858,yi:156999,Ai:3945,zi:16989,Bi:45520,Ci:25488,Di:25492,Ei:25494,Fi:55760,Gi:14057,Hi:18451,Ii:57204,Ji:57203,Ki:17897,Li:57205,Mi:18198,Ni:17898,Oi:17909,Pi:43980,Qi:46220,Ri:11721,Si:147994,Ti:49954,Ui:96369,Vi:3854,Wi:151633,Xi:56251,Yi:159108,Zi:25624,aj:152036,rj:16906,sj:99999,tj:68172,uj:27068,vj:47973,wj:72773,xj:26970,yj:26971,zj:96805,Aj:17752,Bj:73233,Cj:109512,
Dj:22256,Ej:14115,Fj:22696,Gj:89278,Hj:89277,Ij:109513,Jj:43278,Kj:43459,Lj:43464,Mj:89279,Nj:43717,Oj:55764,Pj:22255,Qj:147912,Rj:89281,Sj:40963,Tj:43277,Uj:43442,Vj:91824,Wj:120137,Xj:96367,Yj:36850,Zj:72694,ak:37414,bk:36851,dk:124863,ck:121343,ek:73491,fk:54473,gk:166861,hk:43375,ik:46674,jk:143815,kk:139095,lk:144402,mk:149968,nk:149969,pk:32473,qk:72901,rk:72906,sk:50947,tk:50612,uk:50613,vk:50942,wk:84938,xk:84943,yk:84939,zk:84941,Ak:84944,Bk:84940,Ck:84942,Dk:35585,Ek:51926,Fk:79983,Gk:63238,
Hk:18921,Ik:63241,Jk:57893,Kk:41182,Lk:135732,Mk:33424,Nk:22207,Ok:42993,Pk:36229,Qk:22206,Rk:22205,Sk:18993,Tk:19001,Uk:18990,Vk:18991,Wk:18997,Xk:18725,Yk:19003,Zk:36874,al:44763,bl:33427,dl:67793,fl:22182,il:37091,jl:34650,kl:50617,ll:47261,ml:22287,nl:25144,ol:97917,pl:62397,ql:150871,rl:150874,sl:125598,ul:137935,vl:36961,wl:108035,xl:27426,yl:27857,zl:27846,Al:27854,Bl:69692,Cl:61411,Dl:39299,El:38696,Fl:62520,Gl:36382,Hl:108701,Il:50663,Jl:36387,Kl:14908,Ll:37533,Ml:105443,Nl:61635,Ol:62274,
Pl:161670,Ql:133818,Rl:65702,Sl:65703,Tl:65701,Ul:76256,Vl:166382,Wl:37671,Xl:49953,Zl:36216,am:28237,bm:39553,cm:29222,dm:26107,em:38050,fm:26108,hm:120745,gm:26109,im:26110,jm:66881,km:28236,lm:14586,mm:160598,nm:57929,om:74723,pm:44098,qm:44099,tm:23528,um:61699,rm:134104,sm:134103,vm:59149,wm:101951,xm:97346,ym:118051,zm:95102,Am:64882,Bm:119505,Cm:63595,Dm:63349,Em:95101,Fm:75240,Gm:27039,Hm:68823,Im:21537,Jm:83464,Km:75707,Lm:83113,Mm:101952,Nm:101953,Pm:79610,Qm:125755,Rm:24402,Sm:24400,Tm:32925,
Vm:57173,Um:156421,Wm:122502,Xm:145268,Ym:138480,Zm:64423,an:64424,bn:33986,cn:100828,dn:129089,en:21409,jn:135155,kn:135156,ln:135157,mn:135158,nn:158225,pn:135159,qn:135160,rn:167651,sn:135161,un:135162,vn:135163,tn:158226,wn:158227,xn:135164,yn:135165,zn:135166,fn:11070,gn:11074,hn:17880,An:14001,Cn:30709,Dn:30707,En:30711,Fn:30710,Gn:30708,Bn:26984,Hn:146143,In:63648,Jn:63649,Kn:111059,Ln:5754,Mn:20445,Nn:151308,On:151152,Rn:130975,Qn:130976,Pn:167637,Sn:110386,Tn:113746,Un:66557,Wn:17310,Xn:28631,
Yn:21589,Zn:164817,ao:154946,bo:68012,co:162617,eo:60480,fo:138664,ho:141121,jo:164502,ko:31571,lo:141978,mo:150105,no:150106,oo:150107,po:150108,qo:76980,ro:41577,so:45469,uo:38669,vo:13768,wo:13777,xo:141842,yo:62985,zo:4724,Ao:59369,Bo:43927,Co:43928,Do:12924,Eo:100355,Ho:56219,Io:27669,Jo:10337,Go:47896,Ko:122629,Mo:139723,Lo:139722,No:121258,Oo:107598,Po:127991,Qo:96639,Ro:107536,So:130169,To:96661,Uo:145188,Vo:96658,Wo:116646,Xo:159428,Yo:121122,Zo:96660,ap:127738,bp:127083,cp:155281,ep:162959,
fp:163566,gp:147842,hp:104443,ip:96659,jp:147595,kp:106442,lp:162776,mp:134840,np:63667,qp:63668,rp:63669,sp:130686,tp:147036,up:78314,vp:147799,wp:148649,xp:55761,yp:127098,zp:134841,Ap:96368,Bp:67374,Cp:48992,Dp:146176,Ep:49956,Fp:31961,Gp:26388,Hp:23811,Ip:5E4,Jp:126250,Kp:96370,Lp:47355,Mp:47356,Np:37935,Op:45521,Pp:21760,Qp:83769,Rp:49977,Sp:49974,Tp:93497,Up:93498,Vp:34325,Wp:140759,Xp:115803,Yp:123707,Zp:100081,aq:35309,bq:68314,cq:25602,fq:100339,gq:143516,hq:59018,iq:18248,jq:50625,kq:9729,
lq:37168,mq:37169,nq:21667,oq:16749,pq:18635,qq:39305,rq:18046,sq:53969,tq:8213,uq:93926,wq:102852,xq:110099,yq:22678,zq:69076,Aq:137575,Cq:139224,Dq:100856,Eq:154430,Fq:17736,Gq:3832,Hq:147111,Iq:55759,Jq:64031,Pq:93044,Qq:93045,Rq:34388,Sq:17657,Tq:17655,Uq:39579,Vq:39578,Wq:77448,Xq:8196,Yq:11357,Zq:69877,br:8197,dr:156512,er:161613,fr:156509,gr:161612,hr:161614,ir:82039};function Ts(){var a=vb(Us),b;return(new Bf(function(c,d){a.onSuccess=function(e){sl(e)?c(new Vs(e)):d(new Ws("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ws("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ws("Request timed out","net.timeout",e))};
b=zl("//googleads.g.doubleclick.net/pagead/id",a)})).qb(function(c){c instanceof If&&b.abort();
return Gf(c)})}
function Ws(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
u(Ws,bb);function Vs(a){this.xhr=a}
;function Xs(){this.h=0;this.ba=null}
Xs.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.ba))&&"function"===typeof a.then?a:Ys(a):2===this.h&&b?(a=b.call(c,this.ba))&&"function"===typeof a.then?a:Zs(a):this};
Xs.prototype.getValue=function(){return this.ba};
Xs.prototype.$goog_Thenable=!0;function Zs(a){var b=new Xs;a=void 0===a?null:a;b.h=2;b.ba=void 0===a?null:a;return b}
function Ys(a){var b=new Xs;a=void 0===a?null:a;b.h=1;b.ba=void 0===a?null:a;return b}
;function $s(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:nl(a)?"same-origin":"cors",credentials:nl(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function at(){return wg()||hm&&im("applewebkit")&&!im("version")&&(!im("safari")||im("gsa/"))||Nc&&im("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function bt(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in qj)if(qj[c]==b.embeddedPlayerMode){b=qj[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function ct(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof dt;this.isTimeout=a instanceof Ws&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof If}
u(ct,bb);ct.prototype.name="BiscottiError";function dt(){bb.call(this,"Biscotti ID is missing from server")}
u(dt,bb);dt.prototype.name="BiscottiMissingError";var Us={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},et=null;function ft(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!at())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(bt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function cl(){var a=ft();if(void 0!==a)return Gf(a);et||(et=Ts().then(gt).qb(function(b){return ht(2,b)}));
return et}
function gt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new dt;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new dt;a=a.id;dl(a);et=Ys(a);jt(18E5,2);return a}
function ht(a,b){b=new ct(b);dl("");et=Zs(b);0<a&&jt(12E4,a-1);throw b;}
function jt(a,b){tl(function(){Ts().then(gt,function(c){return ht(b,c)}).qb(db)},a)}
function kt(){try{var a=B("yt.ads.biscotti.getId_");return a?a():cl()}catch(b){return Gf(b)}}
;function lt(a){if("1"!=tb(L("PLAYER_VARS",{}))){a&&bl();try{kt().then(function(){},function(){}),tl(lt,18E5)}catch(b){$k(b)}}}
;function mt(){var a=Nl.getInstance(),b=Ql(119),c=1<window.devicePixelRatio;if(document.body&&pi(document.body,"exp-invert-logo"))if(c&&!pi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!pi(d,"inverted-hdpi")){var e=ni(d);oi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&pi(document.body,"inverted-hdpi")&&qi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Rl(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Ml[b]:(c=d.toString(16),Ml[b]=
c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Ml)d.push(f+"="+encodeURIComponent(String(Ml[f])));Jl(b,d.join("&"),63072E3,a.i,c)}}
;function nt(){this.wd=!0}
function ot(a){var b={},c=yg([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Qk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Qk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var pt={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var qt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function rt(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=ll(a).theme;return qt.get(b)||null}catch(c){}return null}
;function st(){this.h={};if(this.i=Ll()){var a=ug.get("CONSISTENCY",void 0);a&&tt(this,{encryptedTokenJarContents:a})}}
st.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ga.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];tt(this,a)}};
function tt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Jl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ut=window.location.hostname.split(".").slice(-2).join(".");function vt(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.h=wt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var xt;vt.getInstance=function(){xt=B("yt.clientLocationService.instance");xt||(xt=new vt,z("yt.clientLocationService.instance",xt));return xt};
l=vt.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.h=wt(this))&&this.h.set("yt-location-playability-token",a,15552E3):Jl("YT_CL",JSON.stringify({loctok:a}),15552E3,ut,!0))};
function wt(a){return void 0===a.h?new jm("yt-client-location"):a.h}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=wt(this))&&this.h.remove("yt-location-playability-token"):Kl("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function zt(a,b){var c,d=null==(c=br(a,pj))?void 0:c.signal;if(d&&b.Qa&&(c=b.Qa[d]))return c();var e;if((c=null==(e=br(a,nj))?void 0:e.request)&&b.Lc&&(e=b.Lc[c]))return e();for(var f in a)if(b.Tb[f]&&(a=b.Tb[f]))return a()}
;function At(a){return function(){return new a}}
;var Bt={},Ct=(Bt.WEB_UNPLUGGED="^unplugged/",Bt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Bt.WEB_UNPLUGGED_OPS="^unplugged/",Bt.WEB_UNPLUGGED_PUBLIC="^unplugged/",Bt.WEB_CREATOR="^creator/",Bt.WEB_KIDS="^kids/",Bt.WEB_EXPERIMENTS="^experiments/",Bt.WEB_MUSIC="^music/",Bt.WEB_REMIX="^music/",Bt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Bt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Bt);
function Dt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Ct[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Ct).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Et(){}
Et.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?pt:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=wb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Nl.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Ql(165)?m="USER_INTERFACE_THEME_DARK":Ql(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:rt()||m;h.userInterfaceTheme=k;if(!f){if(k=
Xl())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Yl())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=ll(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
Hl.h&&(r=Hl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Il(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(sb){}w=void 0}w&&(h.timeZone=w)}(w=Vk())?h.experimentsToken=w:delete h.experimentsToken;w=Wk();st.h||(st.h=new st);h=st.h.h;r=[];q=0;for(var t in h)r[q++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(t=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=t);w=Nl.getInstance();t=Ql(58);w=w.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);w&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Ms())&&(g.clientScreenNonce=f):!f&&(f=Ms())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;vt.getInstance().setLocationOnInnerTubeContext(g);try{var A=ol(),E=A.bid;delete A.bid;g.adSignalsInfo={params:[],bid:E};var F=
p(Object.entries(A));for(var O=F.next();!O.done;O=F.next()){var N=p(O.value),R=N.next().value,ca=N.next().value;A=R;E=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(sb){ts(sb)}F=g}else ts(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(O=this.h(a)){this.i(F,O,b);var U;b="/youtubei/v1/"+Dt(this.j());(O=null==(U=br(a.commandMetadata,oj))?void 0:U.apiUrl)&&(b=O);U=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&(U=String(b)+String(pc(U)));b=
{};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");U=ml(U,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:U,xa:$s(U),ga:F,config:a};a.config.ab?a.config.ab.identity=c:a.config.ab={identity:c};return a}ts(new P("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Et.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Ft(){}
u(Ft,Et);Ft.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",xa:$s("/getDatasyncIdsEndpoint","GET"),ga:{}}};
Ft.prototype.j=function(){return[]};
Ft.prototype.h=function(){};
Ft.prototype.i=function(){};var Gt={},Ht=(Gt.GET_DATASYNC_IDS=At(Ft),Gt);function It(a){var b=Ka.apply(1,arguments);if(!Jt(a)||b.some(function(d){return!Jt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())Kt(a,c.value);return a}
function Kt(a,b){for(var c in b)if(Jt(b[c])){if(c in a&&!Jt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Kt(a[c],b[c])}else if(Lt(b[c])){if(c in a&&!Lt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Mt(a[c],b[c])}else a[c]=b[c];return a}
function Mt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Jt(c)?a.push(Kt({},c)):Lt(c)?a.push(Mt([],c)):a.push(c);return a}
function Jt(a){return"object"===typeof a&&!Array.isArray(a)}
function Lt(a){return"object"===typeof a&&Array.isArray(a)}
;function Nt(a,b){Fo.call(this,1,arguments);this.timer=b}
u(Nt,Fo);var Ot=new Go("aft-recorded",Nt);var Pt=window;function Qt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=Pt.performance||Pt.mozPerformance||Pt.msPerformance||Pt.webkitPerformance||new Qt;var Rt=!1,St={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ya(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||db,S);function Tt(a){var b=Ut("aft",a);if(b)return b;b=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Ut(b[d],a);if(e)return e}return NaN}
function Vt(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Wt(e.requestStart),e.responseEnd=Wt(e.responseEnd),e.redirectStart=Wt(e.redirectStart),e.redirectEnd=Wt(e.redirectEnd),e.domainLookupEnd=Wt(e.domainLookupEnd),e.connectStart=Wt(e.connectStart),e.connectEnd=
Wt(e.connectEnd),e.responseStart=Wt(e.responseStart),e.secureConnectionStart=Wt(e.secureConnectionStart),e.domainLookupStart=Wt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function Xt(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function Wt(a){return Math.round(Xt()+a)}
function Yt(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Zt(a){a=Yt(a);a.info||(a.info={});return a.info}
function $t(a){a=Yt(a);a.metadata||(a.metadata={});return a.metadata}
function au(a){a=Yt(a);a.tick||(a.tick={});return a.tick}
function Ut(a,b){if(a=au(b)[a])return"number"===typeof a?a:a[a.length-1]}
function bu(a){a=Yt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function cu(a){a=bu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function du(a){var b=Yt(a).nonce;b||(b=Bs(),Yt(a).nonce=b);return b}
function eu(a){var b=Ut("_start",a),c=Tt(a);b&&c&&!Rt&&(Lo(Ot,new Nt(Math.round(c-b),a)),Rt=!0)}
function fu(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!fu(a[d],b[d]))return!1;return!0}
;function gu(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return Wt(a.startTime)}a=S.timing;
return a.bd?Math.max(0,a.bd):0}
;function hu(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function iu(a){a=a||"";var b=B("ytcsi.reference");b||(hu(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=hu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},ju=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]=
"LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state=
"LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),V={},ku=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an=
"adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",
V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",
V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",
V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),lu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),mu={},nu=(mu.ccs="CANARY_STATE_",
mu.mver="MEASUREMENT_VERSION_",mu.pis="PLAYER_INITIALIZED_STATE_",mu.yt_pt="LATENCY_PLAYER_",mu.pa="LATENCY_ACTION_",mu.ctop="TOP_ENTITY_TYPE_",mu.yt_vst="VIDEO_STREAM_TYPE_",mu),ou="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function pu(a){return ju[a]||"LATENCY_ACTION_UNKNOWN"}
function qu(a,b,c){c=bu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in ku){c=ku[a];0<=fb(lu,c)&&(b=!!b);a in nu&&"string"===typeof b&&(b=nu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return It({},d)}0<=fb(ou,a)||us(new P("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,
LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,
LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,
LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,
LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,
LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,
LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,
LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,
LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,
LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,
LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,
LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,
LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,
LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";
W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";
W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";
W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";
W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";
W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";
W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";
W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";
var ru={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};ru[ru.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";ru[ru.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";ru[ru.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};
X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";
X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var su={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};su[su.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
su[su.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";su[su.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";su[su.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";su[su.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";su[su.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";su[su.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";su[su.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var tu={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};tu[tu.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";tu[tu.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";tu[tu.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";tu[tu.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var uu={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
uu[uu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";uu[uu.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var vu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};vu[vu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";vu[vu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";vu[vu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
vu[vu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";vu[vu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";vu[vu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var wu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};wu[wu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";wu[wu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";wu[wu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";wu[wu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var xu={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};xu[xu.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";xu[xu.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";xu[xu.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var yu={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};yu[yu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
yu[yu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";yu[yu.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var zu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Au=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Au);function Bu(){this.h=0}
function Cu(){Bu.h||(Bu.h=new Bu);return Bu.h}
Bu.prototype.tick=function(a,b,c,d){Du(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new ck,D(d,1,a),D(d,2,b),a=new fk,be(a,ck,5,gk,d),Ur(a,c)):sm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Bu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Du(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,sm("latencyActionInfo",a,{cttAuthInfo:c}))};
Bu.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Du(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new fk,be(c,Yj,7,gk,a),Ur(c,b))};
Bu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Du(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,sm("latencyActionSpan",a,{cttAuthInfo:c}))};
function Du(a,b){Au[b]=Au[b]||{count:0};var c=Au[b];c.count++;c.time=Q();a.h||(a.h=$l(function(){var d=Q(),e;for(e in Au)Au[e]&&6E4<d-Au[e].time&&delete Au[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new P("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||us(c)),!0):!1}
;function Eu(){var a=["ol"];iu("").info.actionType="embed";a&&Rk("TIMING_AFT_KEYS",a);Rk("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new Yj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);break;case "GetGuide_rid":e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);break;case "GetHome_rid":e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);
break;case "GetPlayer_rid":e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);break;case "GetSearch_rid":e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);break;case "GetSettings_rid":e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);break;case "GetTrending_rid":e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);break;case "GetWatchNext_rid":e=new bk;D(e,1,c);D(e,2,String(d));ak(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}Fu(b);b=new Yj;b=D(b,25,!0);b=D(b,1,W[pu(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
D(b,13,W[pu(a)]);(a=L("CLIENT_PROTOCOL"))&&D(b,33,a);(a=L("CLIENT_TRANSPORT"))&&D(b,34,a);(a=Ms())&&"UNDEFINED_CSN"!==a&&D(b,4,a);a=Gu();1!==a&&-1!==a||D(b,6,!0);a=Zt();D(b,3,"cold");Hu(a);a=Iu();if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new Xj,D(d,1,c),de(b,83,Xj,d);Fu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&Ju(b,a[b]);b={isNavigation:!0,actionType:pu(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=pu(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=
a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=Ms())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=Gu();if(1===a||-1===a)b.isVisible=!0;Zt();b.loadType="cold";Hu(Zt());a=Iu();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});Ku(b)}b=Zt();a=cu();if(!(M("skip_setting_info_in_csi_data_object")&&"cold"!==$t().loadType||"cold"!==b.yt_lt&&"cold"!==a.loadType)){c=au();d=bu();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var f in c)if(!(f in
d))if("number"===typeof c[f])Z(f,Ut(f));else if(M("log_repeated_ytcsi_ticks")){e=p(c[f]);for(var g=e.next();!g.done;g=e.next())Z(f.slice(1),g.value)}f={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=qu(e,b[e]))&&!fu(cu(),e)&&(It(a,e),It(f,e),c=!0);c&&Ku(f)}z("ytglobal.timingready_",!0);f=L("TIMING_ACTION");B("ytglobal.timingready_")&&f&&"_start"in au()&&Tt()&&eu()}
function Ju(a,b,c,d){if(null!==b){var e=Zt(c);M("skip_setting_info_in_csi_data_object")?"yt_lt"===a&&(e="string"===typeof b?b:""+b,$t(c).loadType=e):e[a]=b;(a=qu(a,b,c))&&Ku(a,c,d)}}
function Ku(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=iu(b||""),It(c.info,a),M("skip_setting_info_in_csi_data_object")&&a.loadType&&(c=a.loadType,$t(b).loadType=c),It(cu(b),a),c=du(b),b=Yt(b).cttAuthInfo,Cu().info(a,c,b);else{c=new Yj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,
92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,5,ru[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,su[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,
a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,tu[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,
29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,
64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,uu[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "debugTicksExcluded":D(c,105,a[e]);break;case "adPrebufferedTimeSecs":D(c,
39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,vu[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,wu[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,xu[a[e]]);break;case "playerRotationType":D(c,101,yu[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,
57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:zu.includes(f)&&$k(new P("Codegen laipb translator asked to translate message field",""+f))}}catch(g){$k(Error("Codegen laipb translator failed to set "+f))}}Fu(c,b)}}
function Fu(a,b){if(M("skip_setting_info_in_csi_data_object")){var c=fe(Sd(a,3),"");c&&($t(b).loadType=c)}else c=bu(b),c.jspbInfos||(c.jspbInfos=[]),c.jspbInfos.push(le(a));iu(b||"").jspbInfo.push(a);c=du(b);b=Yt(b).cttAuthInfo;Cu().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=iu(c||"");d.tick[a]=b||Q();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=bu(c);d.gelTicks&&(d.gelTicks[a]=!0);e=au(c);d=b||Q();M("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=du(c);var f=Yt(c).cttAuthInfo;"_start"===a?(a=Cu(),Du(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(a=new Wj,
D(a,1,e),e=new fk,be(e,Wj,6,gk,a),Ur(e,b)):sm("latencyActionBaselined",{clientActionNonce:e},b))):Cu().tick(a,e,b,f);eu(c);return d}
function Lu(){var a=du();requestAnimationFrame(function(){setTimeout(function(){a===du()&&Z("ol",void 0,void 0)},0)})}
function Gu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=pq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Hu(a){var b=Vt(),c=Xt(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=gu();0<a&&Z("fpt",a);a=Vt();a.isPerformanceNavigationTiming&&Ku({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Xt()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&Mu()}
function Nu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ic()&&a.setAttribute("nonce",ic());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=Xt(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Iu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in St)if(St.hasOwnProperty(b)){var c=St[b];Nu(b,c)&&a.push(c)}return a}
function Mu(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Wt(b.startTime)),Z("wffe",Wt(b.responseEnd)))}
var Ou=window;Ou.ytcsi&&(Ou.ytcsi.info=Ju,Ou.ytcsi.tick=Z);var Pu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Qu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Ru(a,b,c,d){this.m=a;this.L=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Qa||(a.Qa={});a.Qa=Object.assign({},Ht,a.Qa)}
function Su(a,b,c,d){if(void 0!==Ru.h){if(d=Ru.h,a=[a!==d.m,b!==d.L,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new P("InnerTubeTransportService is already initialized",a);
}else Ru.h=new Ru(a,b,c,d)}
function Tu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?pt:c;var d=zt(b,a.m);if(!d)return Gf(new P("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Bf(function(f){var g,h,k;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.xa)?void 0:g.mode)?"cors":void 0;if(a.l.wd){var q=e.config,r;q=null==q?void 0:null==(r=q.ab)?void 0:r.sessionIndex;r=ot({sessionIndex:q});k=Object.assign({},Uu(h),r);return m.u(2)}return v(m,Vu(e.config,
h),3)}2!=m.h&&(k=m.i);f(Wu(a,e,k));m.h=0})}):Gf(new P("Error: Failed to build request for command.",b))}
function Xu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Gr)?0:d.Jr)&&a.j){d=p(Pu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Wu(a,b,c){var d,e,f,g,h,k,m,q,r,w,t,A,E,F,O,N,R,ca,U,sb,Wa,na,I,ma,ea,Ee,Fe,sd;return x(function(pa){switch(pa.h){case 1:pa.u(2);break;case 3:if((d=pa.i)&&!d.isExpired())return pa.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.ga)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Cr(b.ga.context);if(null==(m=a.i)||!m.Hr(b.input,b.ga)){pa.u(4);break}return v(pa,a.i.xr(b.input,b.ga),5);case 5:return q=pa.i,M("kevlar_process_local_innertube_responses_killswitch")||
Xu(a,q,b),pa.return(q);case 4:return(t=null==(w=b.config)?void 0:w.wa)&&a.h.has(t)&&M("web_memoize_inflight_requests")?r=a.h.get(t):(A=JSON.stringify(b.ga),O=null!=(F=null==(E=b.xa)?void 0:E.headers)?F:{},b.xa=Object.assign({},b.xa,{headers:Object.assign({},O,c)}),N=Object.assign({},b.xa),"POST"===b.xa.method&&(N=Object.assign({},N,{body:A})),(null==(R=b.config)?0:R.jd)&&Z(b.config.jd),ca=function(){return a.L.fetch(b.input,N,b.config)},r=ca(),t&&a.h.set(t,r)),v(pa,r,6);
case 6:if((U=pa.i)&&"error"in U&&(null==(sb=U)?0:null==(Wa=sb.error)?0:Wa.details))for(na=U.error.details,I=p(na),ma=I.next();!ma.done;ma=I.next())ea=ma.value,(Ee=ea["@type"])&&-1<Qu.indexOf(Ee)&&(delete ea["@type"],U=ea);t&&a.h.has(t)&&a.h.delete(t);(null==(Fe=b.config)?0:Fe.kd)&&Z(b.config.kd);if(U||null==(sd=a.i)||!sd.pr(b.input,b.ga)){pa.u(7);break}return v(pa,a.i.wr(b.input,b.ga),8);case 8:U=pa.i;case 7:return Xu(a,U,b),pa.return(U||void 0)}})}
function Vu(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.ab)?void 0:d.sessionIndex;var h=ot({sessionIndex:e});if(!(h instanceof Bf)){var k=new Bf(db);Cf(k,2,h);h=k}return v(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Uu(b),f)))})}
function Uu(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Yu=new Qq("INNERTUBE_TRANSPORT_TOKEN");var Zu=["share/get_web_player_share_panel"],$u=["feedback"],av=["notification/modify_channel_preference"],bv=["browse/edit_playlist"],cv=["subscription/subscribe"],dv=["subscription/unsubscribe"];function ev(){}
u(ev,Et);ev.prototype.j=function(){return cv};
ev.prototype.h=function(a){return br(a,Lk)||void 0};
ev.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(ev.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function fv(){}
u(fv,Et);fv.prototype.j=function(){return dv};
fv.prototype.h=function(a){return br(a,Kk)||void 0};
fv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(fv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function gv(){}
u(gv,Et);gv.prototype.j=function(){return $u};
gv.prototype.h=function(a){return br(a,rj)||void 0};
gv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(gv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function hv(){}
u(hv,Et);hv.prototype.j=function(){return av};
hv.prototype.h=function(a){return br(a,Jk)||void 0};
hv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function iv(){}
u(iv,Et);iv.prototype.j=function(){return bv};
iv.prototype.h=function(a){return br(a,Ik)||void 0};
iv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function jv(){}
u(jv,Et);jv.prototype.j=function(){return Zu};
jv.prototype.h=function(a){return br(a,Hk)};
jv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Sq=new Qq("NETWORK_SLI_TOKEN");function kv(a){this.h=a}
kv.prototype.fetch=function(a,b){var c=this,d,e;return x(function(f){c.h&&(d=mc(nc(5,Dc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){us(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){us(g)}))})};
kv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.tr(),b=b.then(function(c){us(new P("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
kv[Pq]=[new Rq];var lv=new Qq("NETWORK_MANAGER_TOKEN");var mv;function nv(a){Fo.call(this,1,arguments);this.csn=a}
u(nv,Fo);var Oo=new Go("screen-created",nv),ov=[],qv=pv,rv=0;function sv(a,b,c,d,e,f,g){function h(){us(new P("newScreen() parent element does not have a VE - rootVe",b))}
var k=qv(),m=new Fs({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={Z:k};e&&(f.cttAuthInfo=e);M("il_via_jspb")?(e=new Lj,e.i(k),Mj(e,m.getAsJspb()),c&&c.visualElement?(m=new Nj,c.clientScreenNonce&&D(m,2,c.clientScreenNonce),Oj(m,c.visualElement.getAsJspb()),g&&D(m,4,hk[g]),G(e,Nj,5,m)):c&&h(),d&&D(e,3,d),Zr(e,f,a)):(e={csn:k,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):
c&&h(),d&&(e.cloneCsn=d),a?Or("screenCreated",e,a,f):sm("screenCreated",e,f));Lo(Oo,new nv(k));return k}
function tv(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Os(b)||void 0,
Z:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&us(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new Pj;h.i(b);Rj(h,c.getAsJspb());ib(e,function(k){k=k.getAsJspb();de(h,3,Gj,k)});
"UNDEFINED_CSN"===b?uv("visualElementAttached",f,void 0,h):$r(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?uv("visualElementAttached",f,c):a?Or("visualElementAttached",c,a,f):sm("visualElementAttached",c,f)}
function vv(a,b,c,d,e,f){wv(a,b,c,e,f)}
function wv(a,b,c,d,e){var f={cttAuthInfo:Os(b)||void 0,Z:b};M("il_via_jspb")?(d=new Uj,d.i(b),c=c.getAsJspb(),G(d,Gj,2,c),D(d,4,1),e&&G(d,Jj,3,e),"UNDEFINED_CSN"===b?uv("visualElementShown",f,void 0,d):Vr(d,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?uv("visualElementShown",f,e):a?Or("visualElementShown",e,a,f):sm("visualElementShown",e,f))}
function pv(){if(M("enable_web_96_bit_csn"))var a=Bs();else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=bd(b,3)}return a}
function uv(a,b,c,d){ov.push({Eb:a,payload:c,ma:d,options:b});rv||(rv=Po())}
function Qo(a){if(ov){for(var b=p(ov),c=b.next();!c.done;c=b.next())if(c=c.value,M("il_via_jspb")&&c.ma)switch(c.ma.i(a.csn),c.Eb){case "screenCreated":Zr(c.ma,c.options);break;case "visualElementAttached":$r(c.ma,c.options);break;case "visualElementShown":Vr(c.ma,c.options);break;case "visualElementHidden":Wr(c.ma,c.options);break;case "visualElementGestured":Xr(c.ma,c.options);break;case "visualElementStateChanged":Yr(c.ma,c.options);break;default:us(new P("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Or(c.Eb,c.payload,null,c.options));ov.length=0}rv=0}
;function xv(){this.l=new Set;this.h=new Set;this.m=new Map;this.client=nq;this.csn=null}
function yv(){xv.h||(xv.h=new xv);return xv.h}
xv.prototype.i=function(a){this.client=a};
xv.prototype.j=function(){this.clear();this.csn=Ms()};
xv.prototype.clear=function(){this.l.clear();this.h.clear();this.m.clear();this.csn=null};function zv(){this.j=new Set;this.h=new Set;this.l=new Map;this.client=nq;this.csn=null}
function Av(){zv.h||(zv.h=new zv);return zv.h}
zv.prototype.i=function(a){M("safe_logging_library_killswitch")?this.client=a:Zk(yv().i).bind(yv())(a)};
zv.prototype.clear=function(){M("safe_logging_library_killswitch")?(this.j.clear(),this.h.clear(),this.l.clear(),this.csn=null):Zk(yv().clear).bind(yv())()};function Bv(){this.j=new Set;this.h=new Set;this.l=new Map}
Bv.prototype.i=function(a){M("use_ts_visibilitylogger")&&Av().i(a)};
Bv.prototype.clear=function(){M("use_ts_visibilitylogger")?Av().clear():(this.j.clear(),this.h.clear(),this.l.clear())};
Oa(Bv);function Cv(){this.o=[];this.v=[];this.h=[];this.m=[];this.M=[];this.j=new Set;this.s=new Map}
Cv.prototype.i=function(a){this.client=a};
function Dv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=Ms(c),f=Ks(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&tv(a.client,e,f,[Gs(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&tv(a.client,e,f,[Gs(d.playerResponse.trackingParams)])}})}
function Ev(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=Ms(d);c=c||Ks(d);e&&c&&tv(a.client,e,c,[b])}}
Cv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Ms(void 0===c?0:c)){a=this.client;var e=Gs(d);d={cttAuthInfo:Os(c)||void 0,Z:c};M("il_via_jspb")?(b=new Sj,b.i(c),e=e.getAsJspb(),G(b,Gj,2,e),D(b,4,hk.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?uv("visualElementGestured",d,void 0,b):Xr(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===c?uv("visualElementGestured",
d,e):a?Or("visualElementGestured",e,a,d):sm("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
Cv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.j.has(c)?this.v.push([a,b]):Fv(this,a,b,c)};
function Fv(a,b,c,d){d=void 0===d?0:d;var e=Ms(d);d=b||Ks(d);e&&d&&(a=a.client,b={cttAuthInfo:Os(e)||void 0,Z:e},M("il_via_jspb")?(c=new Vj,c.i(e),d=d.getAsJspb(),G(c,Gj,2,d),"UNDEFINED_CSN"===e?uv("visualElementStateChanged",b,void 0,c):Yr(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?uv("visualElementStateChanged",b,c):a?Or("visualElementStateChanged",c,a,b):sm("visualElementStateChanged",c,b)))}
function Gv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Hv(a,b,c);var f=Ks(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Ev(a,h[0],h[1]||f,c.layer);f=p(a.v);for(g=f.next();!g.done;g=f.next())g=g.value,Fv(a,g[0],g[1])}};
Ms(c.layer)||a.l();if(c.Wb)for(var d=p(c.Wb),e=d.next();!e.done;e=d.next())Dv(a,e.value,c.layer);else ts(Error("Delayed screen needs a data promise."))}
function Hv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.dd?c.dd:c.layer;var e=Ms(d);d=Ks(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=sv(a.client,b,f,c.Vb,c.cttAuthInfo,g,c.ur)}catch(m){ws(m,{Er:b,rootVe:d,Br:void 0,qr:e,Ar:f,Vb:c.Vb});ts(m);return}Ps(k,b,c.layer,c.cttAuthInfo);
if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Es));for(f=b.next();!f.done;f=b.next())if(Ms(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Os(e)||void 0,Z:e,Xb:g},M("il_via_jspb")?(h=new Tj,h.i(e),d=d.getAsJspb(),G(h,Gj,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"===e?uv("visualElementHidden",f,void 0,h):Wr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"===e?uv("visualElementHidden",f,d):b?Or("visualElementHidden",d,b,f):sm("visualElementHidden",
d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Ku({clientScreenNonce:k});d=Bv.getInstance();M("use_ts_visibilitylogger")?(d=Av(),M("safe_logging_library_killswitch")?(d.clear(),d.csn=Ms()):Zk(yv().j).bind(yv())()):d.clear();d=Ks(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,M("safe_logging_library_killswitch")?wv(void 0,e,d):Zk(vv)(void 0,e,d,void 0,void 0,void 0));a.j.delete(c.layer||0);a.l=void 0;e=p(a.s);
for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Ev(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){ts(m)}}for(c=a.m.length=0;c<a.M.length;c++){e=a.M[c];try{e()}catch(m){ts(m)}}}
;function Iv(){var a,b,c;return x(function(d){if(1==d.h)return a=Xq().resolve(Yu),a?v(d,Tu(a),2):(us(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return us(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.rr;return d.return(c)}us(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Jv=y.caches,Kv;function Lv(a){var b=a.indexOf(":");return-1===b?{jc:a}:{jc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Mv(){return x(function(a){if(void 0!==Kv)return a.return(Kv);Kv=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),v(d,Jv.open("test-only"),4);case 4:return v(d,Jv.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Kv)})}
function Nv(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.h)return v(k,Mv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return v(k,Jv.keys(),3)}c=k.i;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Lv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Jv.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Ov(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return v(h,Mv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=gm("cache contains other");return v(h,Jv.keys(),3)}b=h.i;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Lv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Pv(){try{return!!self.localStorage}catch(a){return!1}}
;function Qv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Rv(a){if(Pv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Qv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Sv(){if(!Pv())return!1;var a=gm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Qv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Tv(){Iv().then(function(a){a&&(Hn(a),Nv(a),Rv(a))})}
function Uv(){var a=new rp;fi.S(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=gm("clear");if(b.startsWith("V")){var g=[b];Hn(g);Nv(g);Rv(g);return f.return()}c=Sv();return v(f,Ov(),3);case 3:return d=f.i,v(f,In(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.U()?Tv():a.l.add("publicytnetworkstatus-online",Tv,!0,void 0,void 0),f.h=0}})})}
;var Oh=ia(["data-"]);function Vv(a){a&&(a.dataset?a.dataset[Wv("loaded")]="true":Nh(a))}
function Xv(a,b){return a?a.dataset?a.dataset[Wv(b)]:a.getAttribute("data-"+b):null}
var Yv={};function Wv(a){return Yv[a]||(Yv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Zv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,$v=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function aw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Zv,""),c=c.replace($v,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else bw(a,b,c)}
function bw(a,b,c){c=void 0===c?null:c;var d=cw(a),e=document.getElementById(d),f=e&&Xv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Jq(d,b),b=""+Sa(b),dw[b]=f),g||(e=ew(a,d,function(){Xv(e,"loaded")||(Vv(e),Mq(d),tl(Za(Nq,d),0))},c)))}
function ew(a,b,c,d){d=void 0===d?null:d;var e=of("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ph(e,Jb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function fw(a){a=cw(a);var b=document.getElementById(a);b&&(Nq(a),b.parentNode.removeChild(b))}
function gw(a,b){a&&b&&(a=""+Sa(b),(a=dw[a])&&Lq(a))}
function cw(a){var b=document.createElement("a");fc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var dw={};var hw=[],iw=!1;function jw(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&at()){var a=L("PLAYER_VARS",{});if("1"!=tb(a)&&!bt(a)){var b=function(){iw=!0;"google_ad_status"in window?Rk("DCLKSTAT",1):Rk("DCLKSTAT",2)};
try{aw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}hw.push(fi.S(function(){if(!(iw||"google_ad_status"in window)){try{gw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}iw=!0;Rk("DCLKSTAT",3)}},5E3))}}}
function kw(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function lw(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?em():d;this.l=c;this.j=d;this.i=new Fh;this.h=a;a={};c=p(this.h.entries());for(d=c.next();!d.done;a={Fa:a.Fa,Sa:a.Sa},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Sa=d;a.Fa=e;d=function(f){return function(){f.Fa.Ab();b.h[f.Sa].mb=!0;b.h.every(function(g){return!0===g.mb})&&b.i.resolve()}}(a);
e=am(d,mw(this,a.Fa));this.h[a.Sa]=Object.assign({},a.Fa,{Ab:d,jobId:e})}}
function nw(a){var b=Array.from(a.h.keys()).sort(function(d,e){return mw(a,a.h[e])-mw(a,a.h[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.mb||(a.j.ea(c.jobId),am(c.Ab,10))}
lw.prototype.cancel=function(){for(var a=p(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.mb||this.j.ea(b.jobId),b.mb=!0;this.i.resolve()};
function mw(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function qw(a){this.state=a;this.plugins=[];this.o=void 0}
qw.prototype.install=function(){this.plugins.push.apply(this.plugins,ja(Ka.apply(0,arguments)))};
qw.prototype.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
qw.prototype.transition=function(a,b){var c=this,d=this.v.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.D===a}):f.from===c.state&&f.D===a});
if(d){this.j&&(nw(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(rw(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function rw(a,b,c){return function(){var d=Ka.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
em();var g={};e=p(e);for(var h=e.next();!h.done;g={Ta:g.Ta},h=e.next())g.Ta=h.value,cm(function(k){return function(){k.Ta.callback.apply(k.Ta,ja(d))}}(g));
f=f.map(function(k){var m;return{Ab:function(){k.callback.apply(k,ja(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new lw(f))}}
fa.Object.defineProperties(qw.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function sw(a){qw.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.h=new Map;this.v=[{from:"document_active",D:"document_disposed_preventable",action:this.M},{from:"document_active",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"flush_logs",action:this.m},{from:"document_disposed_preventable",D:"document_active",action:this.i},{from:"document_disposed",D:"flush_logs",action:this.m},
{from:"document_disposed",D:"document_active",action:this.i},{from:"document_disposed",D:"document_disposed",action:function(){}},
{from:"flush_logs",D:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
u(sw,qw);sw.prototype.M=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
sw.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
sw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
sw.prototype.i=function(){this.h=new Map};function tw(a){qw.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.v=[{from:"document_visibility_unknown",D:"document_visible",action:this.i},{from:"document_visibility_unknown",D:"document_hidden",action:this.h},{from:"document_visibility_unknown",D:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",D:"document_backgrounded",action:this.l},{from:"document_visible",D:"document_hidden",action:this.h},{from:"document_visible",D:"document_foregrounded",action:this.m},
{from:"document_visible",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_hidden",action:this.h},{from:"document_foregrounded",D:"document_foregrounded",action:this.m},{from:"document_hidden",D:"document_visible",action:this.i},{from:"document_hidden",D:"document_backgrounded",action:this.l},{from:"document_hidden",D:"document_hidden",action:this.h},{from:"document_backgrounded",D:"document_hidden",action:this.h},
{from:"document_backgrounded",D:"document_backgrounded",action:this.l},{from:"document_backgrounded",D:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
u(tw,qw);tw.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
tw.prototype.h=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
tw.prototype.l=function(a,b){a(null==b?void 0:b.event)};
tw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function uw(){this.h=new sw;this.i=new tw}
uw.prototype.install=function(){var a=Ka.apply(0,arguments);this.h.install.apply(this.h,ja(a));this.i.install.apply(this.i,ja(a))};function vw(){uw.call(this);var a={};this.install((a.document_disposed={callback:this.j},a));a={};this.install((a.flush_logs={callback:this.l},a))}
var ww;u(vw,uw);vw.prototype.l=function(){if(M("web_fp_via_jspb")){var a=new Fj,b=Ms();b&&D(a,1,b);b=new fk;be(b,Fj,380,gk,a);Ur(b);M("web_fp_via_jspb_and_json")&&sm("finalPayload",{csn:Ms()})}else sm("finalPayload",{csn:Ms()})};
vw.prototype.j=function(){ys(zs)};function xw(){}
xw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new xw,z("ytglobal.storage_",a));return a};
xw.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(yw()):d.return()})};
function yw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",xw);function qm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Uk("ytidb_transaction_ended_event_rate_limit_session",.2)}
qm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":zw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Uk("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function zw(a,b){xw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Aw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Aw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Aw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Bw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.I=!!a;this.F=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.I&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=fb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.F)}
u(Bw,J);Bw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){al(d)}}};
Bw.prototype.B=function(){window.removeEventListener("message",this.F);J.prototype.B.call(this)};function Cw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Bw(!!L("WIDGET_ID_ENFORCE")),b=this.fd.bind(this);a.o=b;a.s=null;this.h.i="widget";if(a=L("WIDGET_ID"))this.h.sessionId=a}
l=Cw.prototype;l.fd=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Dw(this,a)),this.j[a]=!0)):this.Kb(a,b,c)};
l.Kb=function(){};
function Dw(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Qc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.wb());this.sendMessage("onReady");gb(this.i,this.qc,this);this.i=[]};
l.wb=function(){return null};
function Ew(a,b){a.sendMessage("infoDelivery",b)}
l.qc=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.qc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};var Fw={},Gw=(Fw["api.invalidparam"]=2,Fw.auth=150,Fw["drm.auth"]=150,Fw["heartbeat.net"]=150,Fw["heartbeat.servererror"]=150,Fw["heartbeat.stop"]=150,Fw["html5.unsupportedads"]=5,Fw["fmt.noneavailable"]=5,Fw["fmt.decode"]=5,Fw["fmt.unplayable"]=5,Fw["html5.missingapi"]=5,Fw["html5.unsupportedlive"]=5,Fw["drm.unavailable"]=5,Fw["mrm.blocked"]=151,Fw);var Hw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Iw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Jw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(Hw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Kw(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Lw(a){Cw.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.qd.bind(this));this.addEventListener("onVolumeChange",this.rd.bind(this));this.addEventListener("onApiChange",this.ld.bind(this));this.addEventListener("onPlaybackQualityChange",this.nd.bind(this));this.addEventListener("onPlaybackRateChange",this.od.bind(this));this.addEventListener("onStateChange",this.pd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.sd.bind(this))}
u(Lw,Cw);l=Lw.prototype;
l.Kb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Iw(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Jw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Jw(e);break;case "loadPlaylist":case "cuePlaylist":e=Kw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Iw(a)&&Ew(this,this.wb())}};
l.onReady=function(){var a=this.Qc.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?Gw[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.wb=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.pd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ew(this,a)};
l.nd=function(a){Ew(this,{playbackQuality:a})};
l.od=function(a){Ew(this,{playbackRate:a})};
l.ld=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.rd=function(){Ew(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.qd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ew(this,a)};
l.sd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ew(this,a)};
l.dispose=function(){Cw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Mw(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.lc,this)}
u(Mw,J);l=Mw.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.ya("RECEIVING"))};
l.ya=function(a,b){this.started&&!this.h()&&this.connection.ya(a,b)};
l.lc=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Nw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Ow(a,c))&&this.ya(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.md.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.md=function(a,b){this.started&&!this.h()&&this.connection.ya(a,this.vb(a,b))};
l.vb=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.B=function(){var a=this.connection;a.h()||Ci(a.i,"command",this.lc,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.B.call(this)};function Pw(a,b){Mw.call(this,b);this.api=a;this.start()}
u(Pw,Mw);Pw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Pw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Nw(a,b){switch(a){case "loadVideoById":return a=Jw(b),[a];case "cueVideoById":return a=Jw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Kw(b),[a];case "cuePlaylist":return a=Kw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Ow(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Pw.prototype.vb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Mw.prototype.vb.call(this,a,b)};
Pw.prototype.B=function(){Mw.prototype.B.call(this);delete this.api};function Qw(a){a=void 0===a?!1:a;J.call(this);this.i=new K(a);ve(this,this.i)}
$a(Qw,J);Qw.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Qw.prototype.m=function(a,b){this.h()||this.i.ra.apply(this.i,arguments)};function Rw(a,b,c){Qw.call(this);this.l=a;this.j=b;this.id=c}
u(Rw,Qw);Rw.prototype.ya=function(a,b){this.h()||this.l.ya(this.j,this.id,a,b)};
Rw.prototype.B=function(){this.j=this.l=null;Qw.prototype.B.call(this)};function Sw(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=wq(window,"message",this.l.bind(this));this.connection=new Rw(this,a,b);ve(this,this.connection)}
u(Sw,J);Sw.prototype.ya=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Sw.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Sw.prototype.B=function(){xq(this.j);this.i=null;J.prototype.B.call(this)};function Tw(){this.state=1;this.h=null}
l=Tw.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Ab())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Jb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Uw(this,e,
d,a.program,b,c)}else us(Error("Cannot initialize botguard without program"))};
function Uw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,aw(c,function(){window[g]?Vw(a,d,g,e):(a.state=3,fw(c),us(new P("Unable to load Botguard","from "+c)))},f)):b?(f=of("SCRIPT"),f.textContent=b,f.nonce=ic(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Vw(a,d,g,e):(a.state=4,us(new P("Unable to load Botguard from JS")))):us(new P("Unable to load VM; no url or JS provided"))}
function Vw(a,b,c,d){a.state=5;try{var e=new Gh({program:b,Tc:c,gd:M("att_web_record_metrics")});e.td.then(function(){a.state=6;d&&d(b)});
a.Ib(e)}catch(f){a.state=7,f instanceof Error&&us(f)}}
l.invoke=function(a){a=void 0===a?{}:a;return this.Jb()?this.yc({Ub:a}):null};
l.dispose=function(){this.Lb()};
l.Lb=function(){this.Ib(null);this.state=8};
l.Jb=function(){return!!this.h};
l.yc=function(a){return this.h.tc(a)};
l.Ib=function(a){te(this.h);this.h=a};function Ww(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Xw(){Tw.apply(this,arguments)}
u(Xw,Tw);Xw.prototype.Lb=function(){this.state=8};
Xw.prototype.Ib=function(a){var b;null==(b=Ww())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.tc.bind(a)},z("yt.abuse.playerAttLoader",b),z("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(z("yt.abuse.playerAttLoader",null),z("yt.abuse.playerAttLoaderRun",null))};
Xw.prototype.Jb=function(){return!!Ww()};
Xw.prototype.yc=function(a){return Ww().bgvmc(a)};var Yw=new Xw;function Zw(){return Yw.Jb()}
function $w(a){a=void 0===a?{}:a;return Yw.invoke(a)}
;function ax(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ax.prototype.clone=function(){var a=new ax,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=vb(c):a[b]=c}return a};var bx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function cx(a){a=a||"";if(window.spf){var b=a.match(bx);spf.style.load(a,b?b[1]:"",void 0)}else dx(a)}
function dx(a){var b=ex(a),c=document.getElementById(b),d=c&&Xv(c,"loaded");d||c&&!d||(c=fx(a,b,function(){Xv(c,"loaded")||(Vv(c),Mq(b),tl(Za(Nq,b),0))}))}
function fx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Jb(a);gc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ex(a){var b=of("A");Db("This URL is never added to the DOM");fc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function gx(){J.call(this);this.i=[]}
u(gx,J);gx.prototype.B=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.B.call(this)};function hx(){gx.apply(this,arguments)}
u(hx,gx);function ix(a,b,c,d,e){J.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.Xa=e;this.ca=!1;this.api={};this.V=this.o=null;this.K=new K;this.i={};this.P=this.W=this.elementId=this.sa=this.config=null;this.O=!1;this.l=this.F=null;this.ja={};this.Ya=["onReady"];this.lastError=null;this.Ha=NaN;this.I={};this.Za=new hx(this);this.T=0;this.j=this.m=a;ve(this,this.K);jx(this);kx(this);ve(this,this.Za);c?this.T=tl(function(){f.loadNewVideoConfig(c)},0):d&&(lx(this),mx(this))}
u(ix,J);l=ix.prototype;l.getId=function(){return this.s};
l.loadNewVideoConfig=function(a){if(!this.h()){this.T&&(window.clearTimeout(this.T),this.T=0);var b=a||{};b instanceof ax||(b=new ax(b));this.config=b;this.setConfig(a);mx(this);this.isReady()&&nx(this)}};
function lx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.sa=a;this.config=ox(a);lx(this);if(!this.W){var b;this.W=px(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Zh(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Zh(Number(a)||a))};
function nx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function qx(a){var b=!0,c=rx(a);c&&a.config&&(a=sx(a),b=Xv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function mx(a){if(!a.h()&&!a.O){var b=qx(a);if(b&&"html5"===(rx(a)?"html5":null))a.P="html5",a.isReady()||tx(a);else if(ux(a),a.P="html5",b&&a.l&&a.m)a.m.appendChild(a.l),tx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=vx(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?ox(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Xa);tx(a)};
a.O=!0;b?a.F():(aw(sx(a),a.F),(b=wx(a))&&cx(b),xx(a)&&!c&&z("yt.player.Application.create",null))}}}
function rx(a){var b=nf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function tx(a){if(!a.h()){var b=rx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.O=!1;if(!vx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}yx(a)}else a.Ha=tl(function(){tx(a)},50)}}
function yx(a){jx(a);a.ca=!0;var b=rx(a);if(b){a.o=zx(a,b,"addEventListener");a.V=zx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=zx(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);nx(a);a.W&&a.W(a.api);a.K.ra("onReady",a.api)}
function zx(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,us(f))}}}
function jx(a){a.ca=!1;if(a.V)for(var b in a.i)a.i.hasOwnProperty(b)&&a.V(b,a.i[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.I={};a.o=null;a.V=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.sa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.ca};
function kx(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Mq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Mq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=px(this,b);d&&(0<=fb(this.Ya,a)||this.i[a]||(b=Ax(this,a),this.o&&this.o(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&tl(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=px(this,b))&&Ci(this.K,a,b)};
function px(a,b){var c=b;if("string"===typeof b){if(a.ja[b])return a.ja[b];c=function(){var d=Ka.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){ts(f)}};
a.ja[b]=c}return c?c:null}
function Ax(a,b){var c="ytPlayer"+b+a.s;a.i[b]=c;y[c]=function(d){var e=tl(function(){if(!a.h()){try{a.K.ra(b,null!=d?d:void 0)}catch(h){us(new P("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.I,g=String(e);g in f&&delete f[g]}},0);
rb(a.I,String(e))};
return c}
l.getPlayerType=function(){return this.P||(rx(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function ux(a){a.cancel();jx(a);a.P=null;a.config&&(a.config.loaded=!1);var b=rx(a);b&&(qx(a)||!xx(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.F&&gw(sx(this),this.F);window.clearTimeout(this.Ha);this.O=!1};
l.B=function(){ux(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){ts(b)}this.ja=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.sa=this.config=this.api=null;delete this.m;delete this.j;J.prototype.B.call(this)};
function xx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function sx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function wx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function vx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===gl(c||"","&")[b]}
function ox(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var Bx={},Cx="player_uid_"+(1E9*Math.random()>>>0);function Dx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?nf(c):c;var e=Cx+"_"+Sa(c),f=Bx[e];if(f&&d)return Ex(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ix(c,e,a,b,void 0);Bx[e]=f;Mq("player-added",f.api);we(f,function(){delete Bx[f.getId()]});
return f.api}
function Ex(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Fx=null,Gx=null,Hx=null;function Ix(){Jx()}
function Kx(){Jx()}
function Jx(){var a=Fx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Lx(){Fx&&Fx.sendAbandonmentPing&&Fx.sendAbandonmentPing();L("PL_ATT")&&Yw.dispose();for(var a=fi,b=0,c=hw.length;b<c;b++)a.ea(hw[b]);hw.length=0;fw("//static.doubleclick.net/instream/ad_status.js");iw=!1;Rk("DCLKSTAT",0);ue(Hx,Gx);Fx&&(Fx.removeEventListener("onVideoDataChange",Ix),Fx.destroy())}
;function Mx(a,b,c){a="ST-"+kc(a).toString(36);b=b?tc(b):"";c=c||5;at()&&Jl(a,b,c)}
;function Nx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=oc(window.location.href);g&&f.push(g);g=oc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d&&(d=pc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ms()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Mx(d,b,h)}else Mx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=vc(a,k)+m;var r=void 0===r?Sh:r;a:{r=void 0===r?Sh:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof Qh&&m.Yc(a)){r=new Ob(a,Pb);break a}r=void 0}r=r||Sb;if(r instanceof Ob)var w=Qb(r);else{b:if(Jh){try{w=new URL(r)}catch(t){w="https:";break b}w=w.protocol}else c:{w=document.createElement("a");try{w.href=r}catch(t){w=void 0;break c}w=
w.protocol;w=":"===w||""===w?"https:":w}w="javascript:"!==w?r:void 0}void 0!==w&&(c.href=w)}return!0}
;z("yt.setConfig",Rk);z("yt.config.set",Rk);z("yt.setMsg",Rs);z("yt.msgs.set",Rs);z("yt.logging.errors.log",ts);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}lt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Eu();c=L("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ll(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Fx=Dx(a,c);Fx.addEventListener("onVideoDataChange",Ix);Fx.addEventListener("onReady",Kx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Hx=new Lw(Fx):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Gx=new Sw(window.parent,a,b),Hx=new Pw(Fx,Gx.connection));jw();M("ytidb_create_logger_embed_killswitch")||M("embeds_web_disable_nwl")||pm();a={};ww||(ww=new vw);ww.install((a.flush_logs={callback:function(){wr()}},
a));
M("embeds_web_disable_nwl")||mq();M("ytidb_clear_embedded_player")&&fi.S(function(){var e;if(!mv){var f=Xq(),g={Fb:lv,wc:kv};f.h.set(g.Fb,g);g={Tb:{feedbackEndpoint:At(gv),modifyChannelNotificationPreferenceEndpoint:At(hv),playlistEditEndpoint:At(iv),subscribeEndpoint:At(ev),unsubscribeEndpoint:At(fv),webPlayerShareEntityServiceEndpoint:At(jv)}};var h=vt.getInstance(),k={};h&&(k.client_location=h);if(void 0===m){nt.h||(nt.h=new nt);var m=nt.h}void 0===e&&(e=f.resolve(lv));Su(g,e,m,k);m={Fb:Yu,xc:Ru.h};
f.h.set(m.Fb,m);mv=f.resolve(Yu)}Uv()})});
var Ox=Zk(function(){Lu();mt();Cv.h||(Cv.h=new Cv);var a=Cv.h;var b=16623;var c=void 0===c?{}:c;Object.values(Ss).includes(b)||(us(new P("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.o=[];a.v=[];c.Wb?Gv(a,b,c):Hv(a,b,c)}),Px=Zk(function(a){M("embeds_web_enable_load_player_from_page_show")&&!a.persisted&&(Lu(),mt())}),Qx=Zk(function(a){M("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Lx():a.persisted||(M("embeds_web_enable_load_player_from_page_show")?
Lx():Zc?setTimeout(function(){Lx()},0):Lx())}),Rx=Zk(Lx);
window.addEventListener?(window.addEventListener("load",Ox),M("embeds_web_enable_load_player_from_page_show")?(window.addEventListener("pageshow",Px),window.addEventListener("pagehide",Qx)):Zc?window.addEventListener("beforeunload",Qx):window.addEventListener("pagehide",Qx)):window.attachEvent&&(window.attachEvent("onload",Ox),window.attachEvent("onunload",Rx));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Zw);
z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||$w);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||kw);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||Nx);z("yt.util.activity.init",B("yt.util.activity.init")||Bq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Eq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Cq);}).call(this);
