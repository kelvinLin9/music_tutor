import{a3 as Qo,a4 as Wo,a5 as oi,a6 as Xo,a7 as Yo,a8 as Jo,a9 as Zo,aa as me,ab as ta,ac as ea,ad as na,ae as kt,a0 as ra,a1 as ai}from"./index-f660c17e.js";import{d as ia,S as Rt}from"./dataStore-22092c24.js";var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Er=Er||{},y=sa||self;function mn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function De(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function oa(e){return Object.prototype.hasOwnProperty.call(e,$n)&&e[$n]||(e[$n]=++aa)}var $n="closure_uid_"+(1e9*Math.random()>>>0),aa=0;function ua(e,t,n){return e.call.apply(e.bind,arguments)}function la(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function W(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=ua:W=la,W.apply(null,arguments)}function qe(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function j(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Tt(){this.s=this.s,this.o=this.o}var ha=0;Tt.prototype.s=!1;Tt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ha!=0)&&oa(this)};Tt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function vr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ui(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(mn(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var ca=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",()=>{},t),y.removeEventListener("test",()=>{},t)}catch{}return e}();function _e(e){return/^[\s\xa0]*$/.test(e)}function _n(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function at(e){return _n().indexOf(e)!=-1}function Tr(e){return Tr[" "](e),e}Tr[" "]=function(){};function fa(e,t){var n=iu;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var da=at("Opera"),Gt=at("Trident")||at("MSIE"),Xi=at("Edge"),tr=Xi||Gt,Yi=at("Gecko")&&!(_n().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),pa=_n().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function Ji(){var e=y.document;return e?e.documentMode:void 0}var er;t:{var Gn="",zn=function(){var e=_n();if(Yi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Xi)return/Edge\/([\d\.]+)/.exec(e);if(Gt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(pa)return/WebKit\/(\S+)/.exec(e);if(da)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zn&&(Gn=zn?zn[1]:""),Gt){var Kn=Ji();if(Kn!=null&&Kn>parseFloat(Gn)){er=String(Kn);break t}}er=Gn}var nr;if(y.document&&Gt){var li=Ji();nr=li||parseInt(er,10)||void 0}else nr=void 0;var ga=nr;function ye(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Yi){t:{try{Tr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:ma[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ye.$.h.call(this)}}j(ye,X);var ma={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),_a=0;function ya(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++_a,this.fa=this.ia=!1}function yn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ir(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Ea(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Zi(e){const t={};for(const n in e)t[n]=e[n];return t}const hi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ts(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<hi.length;s++)n=hi[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function En(e){this.src=e,this.g={},this.h=0}En.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ir(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ya(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function rr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Wi(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ir(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ar="closure_lm_"+(1e6*Math.random()|0),Hn={};function es(e,t,n,r,i){if(r&&r.once)return rs(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)es(e,t[s],n,r,i);return null}return n=Pr(n),e&&e[ke]?e.O(t,n,De(r)?!!r.capture:!!r,i):ns(e,t,n,!1,r,i)}function ns(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=De(i)?!!i.capture:!!i,a=Rr(e);if(a||(e[Ar]=a=new En(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=va(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ca||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ss(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function va(){function e(n){return t.call(e.src,e.listener,n)}const t=Ta;return e}function rs(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)rs(e,t[s],n,r,i);return null}return n=Pr(n),e&&e[ke]?e.P(t,n,De(r)?!!r.capture:!!r,i):ns(e,t,n,!0,r,i)}function is(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)is(e,t[s],n,r,i);else r=De(r)?!!r.capture:!!r,n=Pr(n),e&&e[ke]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ir(s,n,r,i),-1<n&&(yn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Rr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ir(t,n,r,i)),(n=-1<e?t[e]:null)&&wr(n))}function wr(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ke])rr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ss(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Rr(t))?(rr(n,e),n.h==0&&(n.src=null,t[Ar]=null)):yn(e)}}}function ss(e){return e in Hn?Hn[e]:Hn[e]="on"+e}function Ta(e,t){if(e.fa)e=!0;else{t=new ye(t,this);var n=e.listener,r=e.la||e.src;e.ia&&wr(e),e=n.call(r,t)}return e}function Rr(e){return e=e[Ar],e instanceof En?e:null}var Qn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pr(e){return typeof e=="function"?e:(e[Qn]||(e[Qn]=function(t){return e.handleEvent(t)}),e[Qn])}function U(){Tt.call(this),this.i=new En(this),this.S=this,this.J=null}j(U,Tt);U.prototype[ke]=!0;U.prototype.removeEventListener=function(e,t,n,r){is(this,e,t,n,r)};function G(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var i=t;t=new X(r,e),ts(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=$e(o,r,!0,t)&&i}if(o=t.g=e,i=$e(o,r,!0,t)&&i,i=$e(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=$e(o,r,!1,t)&&i}U.prototype.N=function(){if(U.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)yn(n[r]);delete e.g[t],e.h--}}this.J=null};U.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};U.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function $e(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&rr(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vr=y.JSON.stringify;class Ia{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Aa(){var e=Cr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class wa{constructor(){this.h=this.g=null}add(t,n){const r=os.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var os=new Ia(()=>new Ra,e=>e.reset());class Ra{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Pa(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Va(e){y.setTimeout(()=>{throw e},0)}let Ee,ve=!1,Cr=new wa,as=()=>{const e=y.Promise.resolve(void 0);Ee=()=>{e.then(Ca)}};var Ca=()=>{for(var e;e=Aa();){try{e.h.call(e.g)}catch(n){Va(n)}var t=os;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ve=!1};function vn(e,t){U.call(this),this.h=e||1,this.g=t||y,this.j=W(this.qb,this),this.l=Date.now()}j(vn,U);p=vn.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),G(this,"tick"),this.ga&&(Sr(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){vn.$.N.call(this),Sr(this),delete this.g};function Dr(e,t,n){if(typeof e=="function")n&&(e=W(e,n));else if(e&&typeof e.handleEvent=="function")e=W(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function us(e){e.g=Dr(()=>{e.g=null,e.i&&(e.i=!1,us(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Sa extends Tt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:us(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Te(e){Tt.call(this),this.h=e,this.g={}}j(Te,Tt);var ci=[];function ls(e,t,n,r){Array.isArray(n)||(n&&(ci[0]=n.toString()),n=ci);for(var i=0;i<n.length;i++){var s=es(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function hs(e){Ir(e.g,function(t,n){this.g.hasOwnProperty(n)&&wr(t)},e),e.g={}}Te.prototype.N=function(){Te.$.N.call(this),hs(this)};Te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tn(){this.g=!0}Tn.prototype.Ea=function(){this.g=!1};function Da(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var h=l[0];l=l[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function ka(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Bt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Oa(e,n)+(r?" "+r:"")})}function Na(e,t){e.info(function(){return"TIMEOUT: "+t})}Tn.prototype.info=function(){};function Oa(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vr(n)}catch{return t}}var Mt={},fi=null;function In(){return fi=fi||new U}Mt.Ta="serverreachability";function cs(e){X.call(this,Mt.Ta,e)}j(cs,X);function Ie(e){const t=In();G(t,new cs(t))}Mt.STAT_EVENT="statevent";function fs(e,t){X.call(this,Mt.STAT_EVENT,e),this.stat=t}j(fs,X);function J(e){const t=In();G(t,new fs(t,e))}Mt.Ua="timingevent";function ds(e,t){X.call(this,Mt.Ua,e),this.size=t}j(ds,X);function Ne(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var An={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ps={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function kr(){}kr.prototype.h=null;function di(e){return e.h||(e.h=e.i())}function gs(){}var Oe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nr(){X.call(this,"d")}j(Nr,X);function Or(){X.call(this,"c")}j(Or,X);var sr;function wn(){}j(wn,kr);wn.prototype.g=function(){return new XMLHttpRequest};wn.prototype.i=function(){return{}};sr=new wn;function xe(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Te(this),this.P=xa,e=tr?125:void 0,this.V=new vn(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ms}function ms(){this.i=null,this.g="",this.h=!1}var xa=45e3,or={},Ze={};p=xe.prototype;p.setTimeout=function(e){this.P=e};function ar(e,t,n){e.L=1,e.v=Pn(gt(t)),e.s=n,e.S=!0,_s(e,null)}function _s(e,t){e.G=Date.now(),Me(e),e.A=gt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Rs(n.i,"t",r),e.C=0,n=e.l.J,e.h=new ms,e.g=Ks(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Sa(W(e.Pa,e,e.g),e.O)),ls(e.U,e.g,"readystatechange",e.nb),t=e.I?Zi(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ie(),Da(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;const t=this.M;t&&ut(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)t:{const h=ut(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||tr||this.g&&(this.h.h||this.g.ja()||_i(this.g)))){this.J||h!=4||t==7||(t==8||0>=c?Ie(3):Ie(2)),Rn(this);var n=this.g.da();this.ca=n;e:if(ys(this)){var r=_i(this.g);e="";var i=r.length,s=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),he(this);var o="";break e}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ka(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(a)){var l=a;break e}}l=null}if(n=l)Bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ur(this,n);else{this.i=!1,this.o=3,J(12),Pt(this),he(this);break t}}this.S?(Es(this,h,o),tr&&this.i&&h==3&&(ls(this.U,this.V,"tick",this.mb),this.V.start())):(Bt(this.j,this.m,o,null),ur(this,o)),h==4&&Pt(this),this.i&&!this.J&&(h==4?qs(this.l,this):(this.i=!1,Me(this)))}else eu(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,J(12)):(this.o=0,J(13)),Pt(this),he(this)}}}catch{}finally{}};function ys(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Es(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=Ma(e,n),i==Ze){t==4&&(e.o=4,J(14),r=!1),Bt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==or){e.o=4,J(15),Bt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Bt(e.j,e.m,i,null),ur(e,i);ys(e)&&i!=Ze&&i!=or&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,J(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),br(t),t.M=!0,J(11))):(Bt(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),he(e))}p.mb=function(){if(this.g){var e=ut(this.g),t=this.g.ja();this.C<t.length&&(Rn(this),Es(this,e,t),this.i&&e!=4&&Me(this))}};function Ma(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Ze:(n=Number(t.substring(n,r)),isNaN(n)?or:(r+=1,r+n>t.length?Ze:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,Pt(this)};function Me(e){e.Y=Date.now()+e.P,vs(e,e.P)}function vs(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Ne(W(e.lb,e),t)}function Rn(e){e.B&&(y.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Na(this.j,this.A),this.L!=2&&(Ie(),J(17)),Pt(this),this.o=2,he(this)):vs(this,this.Y-e)};function he(e){e.l.H==0||e.J||qs(e.l,e)}function Pt(e){Rn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Sr(e.V),hs(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ur(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||lr(n.i,e))){if(!e.K&&lr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)nn(n),Sn(n);else break t;Ur(n),J(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ne(W(n.ib,n),6e3));if(1>=Cs(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vt(n,11)}else if((e.K||n.g==e)&&nn(n),!_e(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const h=l[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=l[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const g=l[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const A=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var s=r.i;s.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xr(s,s.h),s.h=null))}if(r.F){const V=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;V&&(r.Da=V,C(r.I,r.F,V))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=zs(r,r.J?r.pa:null,r.Y),o.K){Ss(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(Rn(a),Me(a)),r.g=o}else js(r);0<n.j.length&&Dn(n)}else l[0]!="stop"&&l[0]!="close"||Vt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vt(n,7):Lr(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ie(4)}catch{}}function Fa(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(mn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function La(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(mn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ts(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(mn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=La(e),r=Fa(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ua(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function St(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof St){this.h=e.h,tn(this,e.j),this.s=e.s,this.g=e.g,en(this,e.m),this.l=e.l;var t=e.i,n=new Ae;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),pi(this,n),this.o=e.o}else e&&(t=String(e).match(Is))?(this.h=!1,tn(this,t[1]||"",!0),this.s=ue(t[2]||""),this.g=ue(t[3]||"",!0),en(this,t[4]),this.l=ue(t[5]||"",!0),pi(this,t[6]||"",!0),this.o=ue(t[7]||"")):(this.h=!1,this.i=new Ae(null,this.h))}St.prototype.toString=function(){var e=[],t=this.j;t&&e.push(le(t,gi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(le(t,gi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(le(n,n.charAt(0)=="/"?Ba:ja,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",le(n,$a)),e.join("")};function gt(e){return new St(e)}function tn(e,t,n){e.j=n?ue(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function en(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function pi(e,t,n){t instanceof Ae?(e.i=t,Ga(e.i,e.h)):(n||(t=le(t,qa)),e.i=new Ae(t,e.h))}function C(e,t,n){e.i.set(t,n)}function Pn(e){return C(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ue(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function le(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ba),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ba(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gi=/[#\/\?@]/g,ja=/[#\?:]/g,Ba=/[#\?]/g,qa=/[#\?@]/g,$a=/#/g;function Ae(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function It(e){e.g||(e.g=new Map,e.h=0,e.i&&Ua(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=Ae.prototype;p.add=function(e,t){It(this),this.i=null,e=Zt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function As(e,t){It(e),t=Zt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ws(e,t){return It(e),t=Zt(e,t),e.g.has(t)}p.forEach=function(e,t){It(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){It(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){It(this);let t=[];if(typeof e=="string")ws(this,e)&&(t=t.concat(this.g.get(Zt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return It(this),this.i=null,e=Zt(this,e),ws(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Rs(e,t,n){As(e,t),0<n.length&&(e.i=null,e.g.set(Zt(e,t),vr(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Zt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ga(e,t){t&&!e.j&&(It(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(As(this,r),Rs(this,i,n))},e)),e.j=t}var za=class{constructor(e,t){this.g=e,this.map=t}};function Ps(e){this.l=e||Ka,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ka=10;function Vs(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Cs(e){return e.h?1:e.g?e.g.size:0}function lr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function xr(e,t){e.g?e.g.add(t):e.h=t}function Ss(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ps.prototype.cancel=function(){if(this.i=Ds(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ds(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return vr(e.i)}var Ha=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function Qa(){this.g=new Ha}function Wa(e,t,n){const r=n||"";try{Ts(e,function(i,s){let o=i;De(i)&&(o=Vr(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Xa(e,t){const n=new Tn;if(y.Image){const r=new Image;r.onload=qe(Ge,n,r,"TestLoadImage: loaded",!0,t),r.onerror=qe(Ge,n,r,"TestLoadImage: error",!1,t),r.onabort=qe(Ge,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=qe(Ge,n,r,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ge(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Fe(e){this.l=e.fc||null,this.j=e.ob||!1}j(Fe,kr);Fe.prototype.g=function(){return new Vn(this.l,this.j)};Fe.prototype.i=function(e){return function(){return e}}({});function Vn(e,t){U.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Mr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(Vn,U);var Mr=0;p=Vn.prototype;p.open=function(e,t){if(this.readyState!=Mr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,we(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Le(this)),this.readyState=Mr};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,we(this)),this.g&&(this.readyState=3,we(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ks(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ks(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Le(this):we(this),this.readyState==3&&ks(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,Le(this))};p.Ya=function(e){this.g&&(this.response=e,Le(this))};p.ka=function(){this.g&&Le(this)};function Le(e){e.readyState=4,e.l=null,e.j=null,e.A=null,we(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function we(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ya=y.JSON.parse;function k(e){U.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ns,this.L=this.M=!1}j(k,U);var Ns="",Ja=/^https?$/i,Za=["POST","PUT"];p=k.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sr.g(),this.C=this.u?di(this.u):di(sr),this.g.onreadystatechange=W(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){mi(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=y.FormData&&e instanceof y.FormData,!(0<=Wi(Za,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ms(this),0<this.B&&((this.L=tu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.ua,this)):this.A=Dr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){mi(this,s)}};function tu(e){return Gt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Er<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function mi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Os(e),Cn(e)}function Os(e){e.F||(e.F=!0,G(e,"complete"),G(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,G(this,"complete"),G(this,"abort"),Cn(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cn(this,!0)),k.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?xs(this):this.kb())};p.kb=function(){xs(this)};function xs(e){if(e.h&&typeof Er<"u"&&(!e.C[1]||ut(e)!=4||e.da()!=2)){if(e.v&&ut(e)==4)Dr(e.La,0,e);else if(G(e,"readystatechange"),ut(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Is)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!Ja.test(i?i.toLowerCase():"")}n=r}if(n)G(e,"complete"),G(e,"success");else{e.m=6;try{var s=2<ut(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Os(e)}}finally{Cn(e)}}}}function Cn(e,t){if(e.g){Ms(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||G(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ms(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function ut(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ya(t)}};function _i(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ns:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function eu(e){const t={};e=(e.g&&2<=ut(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(_e(e[r]))continue;var n=Pa(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Ea(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fs(e){let t="";return Ir(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Fr(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Fs(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):C(e,t,n))}function se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ls(e){this.Ga=0,this.j=[],this.l=new Tn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=se("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=se("baseRetryDelayMs",5e3,e),this.hb=se("retryDelaySeedMs",1e4,e),this.eb=se("forwardChannelMaxRetries",2,e),this.xa=se("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ps(e&&e.concurrentRequestLimit),this.Ja=new Qa,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Ls.prototype;p.ra=8;p.H=1;function Lr(e){if(Us(e),e.H==3){var t=e.W++,n=gt(e.I);if(C(n,"SID",e.K),C(n,"RID",t),C(n,"TYPE","terminate"),Ue(e,n),t=new xe(e,e.l,t),t.L=2,t.v=Pn(gt(n)),n=!1,y.navigator&&y.navigator.sendBeacon)try{n=y.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ks(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Me(t)}Gs(e)}function Sn(e){e.g&&(br(e),e.g.cancel(),e.g=null)}function Us(e){Sn(e),e.u&&(y.clearTimeout(e.u),e.u=null),nn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function Dn(e){if(!Vs(e.i)&&!e.m){e.m=!0;var t=e.Na;Ee||as(),ve||(Ee(),ve=!0),Cr.add(t,e),e.C=0}}function nu(e,t){return Cs(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ne(W(e.Na,e,t),$s(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new xe(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Zi(s),ts(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=bs(this,i,t),n=gt(this.I),C(n,"RID",e),C(n,"CVER",22),this.F&&C(n,"X-HTTP-Session-Id",this.F),Ue(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Fs(s)))+"&"+t:this.o&&Fr(n,this.o,s)),xr(this.i,i),this.bb&&C(n,"TYPE","init"),this.P?(C(n,"$req",t),C(n,"SID","null"),i.aa=!0,ar(i,n,null)):ar(i,n,t),this.H=2}}else this.H==3&&(e?yi(this,e):this.j.length==0||Vs(this.i)||yi(this))};function yi(e,t){var n;t?n=t.m:n=e.W++;const r=gt(e.I);C(r,"SID",e.K),C(r,"RID",n),C(r,"AID",e.V),Ue(e,r),e.o&&e.s&&Fr(r,e.o,e.s),n=new xe(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=bs(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),xr(e.i,n),ar(n,r,t)}function Ue(e,t){e.na&&Ir(e.na,function(n,r){C(t,r,n)}),e.h&&Ts({},function(n,r){C(t,r,n)})}function bs(e,t,n){n=Math.min(e.j.length,n);var r=e.h?W(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const h=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{Wa(h,o,"req"+l+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function js(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ee||as(),ve||(Ee(),ve=!0),Cr.add(t,e),e.A=0}}function Ur(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ne(W(e.Ma,e),$s(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,Bs(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ne(W(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,J(10),Sn(this),Bs(this))};function br(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function Bs(e){e.g=new xe(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=gt(e.wa);C(t,"RID","rpc"),C(t,"SID",e.K),C(t,"AID",e.V),C(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&C(t,"TO",e.qa),C(t,"TYPE","xmlhttp"),Ue(e,t),e.o&&e.s&&Fr(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Pn(gt(t)),n.s=null,n.S=!0,_s(n,e)}p.ib=function(){this.v!=null&&(this.v=null,Sn(this),Ur(this),J(19))};function nn(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function qs(e,t){var n=null;if(e.g==t){nn(e),br(e),e.g=null;var r=2}else if(lr(e.i,t))n=t.F,Ss(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=In(),G(r,new ds(r,n)),Dn(e)}else js(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&nu(e,t)||r==2&&Ur(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Vt(e,5);break;case 4:Vt(e,10);break;case 3:Vt(e,6);break;default:Vt(e,2)}}}function $s(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Vt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=W(e.pb,e);n||(n=new St("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||tn(n,"https"),Pn(n)),Xa(n.toString(),r)}else J(2);e.H=0,e.h&&e.h.za(t),Gs(e),Us(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),J(2)):(this.l.info("Failed to ping google.com"),J(1))};function Gs(e){if(e.H=0,e.ma=[],e.h){const t=Ds(e.i);(t.length!=0||e.j.length!=0)&&(ui(e.ma,t),ui(e.ma,e.j),e.i.i.length=0,vr(e.j),e.j.length=0),e.h.ya()}}function zs(e,t,n){var r=n instanceof St?gt(n):new St(n);if(r.g!="")t&&(r.g=t+"."+r.g),en(r,r.m);else{var i=y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new St(null);r&&tn(s,r),t&&(s.g=t),i&&en(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&C(r,n,t),C(r,"VER",e.ra),Ue(e,r),r}function Ks(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new k(new Fe({ob:!0})):new k(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hs(){}p=Hs.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function rn(){if(Gt&&!(10<=Number(ga)))throw Error("Environmental error: no available transport.")}rn.prototype.g=function(e,t){return new et(e,t)};function et(e,t){U.call(this),this.g=new Ls(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!_e(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_e(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new te(this)}j(et,U);et.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;J(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=zs(e,null,e.Y),Dn(e)};et.prototype.close=function(){Lr(this.g)};et.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Vr(e),e=n);t.j.push(new za(t.fb++,e)),t.H==3&&Dn(t)};et.prototype.N=function(){this.g.h=null,delete this.j,Lr(this.g),delete this.g,et.$.N.call(this)};function Qs(e){Nr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(Qs,Nr);function Ws(){Or.call(this),this.status=1}j(Ws,Or);function te(e){this.g=e}j(te,Hs);te.prototype.Ba=function(){G(this.g,"a")};te.prototype.Aa=function(e){G(this.g,new Qs(e))};te.prototype.za=function(e){G(this.g,new Ws)};te.prototype.ya=function(){G(this.g,"b")};function ru(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}j(ht,ru);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Wn(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ht.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Wn(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Wn(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Wn(this,r),i=0;break}}this.h=i,this.i+=t};ht.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function R(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var iu={};function jr(e){return-128<=e&&128>e?fa(e,function(t){return new R([t|0],0>t?-1:0)}):new R([e|0],0>e?-1:0)}function lt(e){if(isNaN(e)||!isFinite(e))return qt;if(0>e)return $(lt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=hr;return new R(t,0)}function Xs(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return $(Xs(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lt(Math.pow(t,8)),r=qt,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=lt(Math.pow(t,s)),r=r.R(s).add(lt(o))):(r=r.R(n),r=r.add(lt(o)))}return r}var hr=4294967296,qt=jr(0),cr=jr(1),Ei=jr(16777216);p=R.prototype;p.ea=function(){if(rt(this))return-$(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:hr+r)*t,t*=hr}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(ft(this))return"0";if(rt(this))return"-"+$(this).toString(e);for(var t=lt(Math.pow(e,6)),n=this,r="";;){var i=on(n,t).g;n=sn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,ft(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function ft(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function rt(e){return e.h==-1}p.X=function(e){return e=sn(this,e),rt(e)?-1:ft(e)?0:1};function $(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new R(n,~e.h).add(cr)}p.abs=function(){return rt(this)?$(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new R(n,n[n.length-1]&-2147483648?-1:0)};function sn(e,t){return e.add($(t))}p.R=function(e){if(ft(this)||ft(e))return qt;if(rt(this))return rt(e)?$(this).R($(e)):$($(this).R(e));if(rt(e))return $(this.R($(e)));if(0>this.X(Ei)&&0>e.X(Ei))return lt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,ze(n,2*r+2*i),n[2*r+2*i+1]+=s*u,ze(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ze(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ze(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new R(n,0)};function ze(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function oe(e,t){this.g=e,this.h=t}function on(e,t){if(ft(t))throw Error("division by zero");if(ft(e))return new oe(qt,qt);if(rt(e))return t=on($(e),t),new oe($(t.g),$(t.h));if(rt(t))return t=on(e,$(t)),new oe($(t.g),t.h);if(30<e.g.length){if(rt(e)||rt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=cr,r=t;0>=r.X(e);)n=vi(n),r=vi(r);var i=Lt(n,1),s=Lt(r,1);for(r=Lt(r,2),n=Lt(n,2);!ft(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Lt(r,1),n=Lt(n,1)}return t=sn(e,i.R(t)),new oe(i,t)}for(i=qt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=lt(n),o=s.R(t);rt(o)||0<o.X(e);)n-=r,s=lt(n),o=s.R(t);ft(s)&&(s=cr),i=i.add(s),e=sn(e,o)}return new oe(i,e)}p.gb=function(e){return on(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new R(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new R(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new R(n,this.h^e.h)};function vi(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new R(n,e.h)}function Lt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new R(i,e.h)}rn.prototype.createWebChannel=rn.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;An.NO_ERROR=0;An.TIMEOUT=8;An.HTTP_ERROR=6;ps.COMPLETE="complete";gs.EventType=Oe;Oe.OPEN="a";Oe.CLOSE="b";Oe.ERROR="c";Oe.MESSAGE="d";U.prototype.listen=U.prototype.O;k.prototype.listenOnce=k.prototype.P;k.prototype.getLastError=k.prototype.Sa;k.prototype.getLastErrorCode=k.prototype.Ia;k.prototype.getStatus=k.prototype.da;k.prototype.getResponseJson=k.prototype.Wa;k.prototype.getResponseText=k.prototype.ja;k.prototype.send=k.prototype.ha;k.prototype.setWithCredentials=k.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;R.prototype.add=R.prototype.add;R.prototype.multiply=R.prototype.R;R.prototype.modulo=R.prototype.gb;R.prototype.compare=R.prototype.X;R.prototype.toNumber=R.prototype.ea;R.prototype.toString=R.prototype.toString;R.prototype.getBits=R.prototype.D;R.fromNumber=lt;R.fromString=Xs;var su=function(){return new rn},ou=function(){return In()},Xn=An,au=ps,uu=Mt,Ti={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},lu=Fe,Ke=gs,hu=k,cu=R;const Ii="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new na("@firebase/firestore");function Ai(){return Nt.logLevel}function _(e,...t){if(Nt.logLevel<=me.DEBUG){const n=t.map(Br);Nt.debug(`Firestore (${ee}): ${e}`,...n)}}function Ot(e,...t){if(Nt.logLevel<=me.ERROR){const n=t.map(Br);Nt.error(`Firestore (${ee}): ${e}`,...n)}}function an(e,...t){if(Nt.logLevel<=me.WARN){const n=t.map(Br);Nt.warn(`Firestore (${ee}): ${e}`,...n)}}function Br(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ee}) INTERNAL ASSERTION FAILED: `+e;throw Ot(t),new Error(t)}function b(e,t){e||T()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Xo{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(K.UNAUTHENTICATED))}shutdown(){}}class du{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pu{constructor(t){this.t=t,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(b(typeof r.accessToken=="string"),new Ys(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new K(t)}}class gu{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mu{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new gu(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _u{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(b(typeof n.token=="string"),this.R=n.token,new _u(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Eu(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function P(e,t){return e<t?-1:e>t?1:0}function zt(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new L(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.timestamp=t}static fromTimestamp(t){return new D(t)}static min(){return new D(new L(0,0))}static max(){return new D(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Re.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Re?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Re{construct(t,n,r){return new O(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new E(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const vu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Re{construct(t,n,r){return new Q(t,n,r)}static isValidIdentifier(t){return vu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new E(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new E(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new E(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new E(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(O.fromString(t))}static fromName(t){return new v(O.fromString(t).popFirst(5))}static empty(){return new v(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new O(t.slice()))}}function Tu(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=D.fromTimestamp(r===1e9?new L(n+1,0):new L(n,r));return new yt(i,v.empty(),t)}function Iu(e){return new yt(e.readTime,e.key,-1)}class yt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new yt(D.min(),v.empty(),-1)}static max(){return new yt(D.max(),v.empty(),-1)}}function Au(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:P(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ru{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==wu)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(i=>i?d.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new d((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(t[l]).next(h=>{o[l]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(t,n){return new d((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function kn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}to.ae=-1;function qr(e){return e==null}function un(e){return e===0&&1/e==-1/0}function Pu(e){return typeof e=="number"&&Number.isInteger(e)&&!un(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ne(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n){this.comparator=t,this.root=n||B.EMPTY}insert(t,n){return new tt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,B.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new He(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new He(this.root,t,this.comparator,!1)}getReverseIterator(){return new He(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new He(this.root,t,this.comparator,!0)}}class He{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class B{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??B.RED,this.left=i??B.EMPTY,this.right=s??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new B(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return B.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,i,s){return this}insert(t,n,r){return new B(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ri(this.data.getIterator())}getIteratorFrom(t){return new Ri(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Z(this.comparator);return n.data=t,n}}class Ri{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.fields=t,t.sort(Q.comparator)}static empty(){return new ot([])}unionWith(t){let n=new Z(Q.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return zt(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Vu("Invalid base64 string: "+s):s}}(t);return new mt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Cu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(e){if(b(!!e),typeof e=="string"){let t=0;const n=Cu.exec(e);if(b(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:q(e.seconds),nanos:q(e.nanos)}}function q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Pe(e){return typeof e=="string"?mt.fromBase64String(e):mt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function no(e){const t=e.mapValue.fields.__previous_value__;return $r(t)?no(t):t}function ln(e){const t=xt(e.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,n,r,i,s,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class hn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof hn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$r(e)?4:Du(e)?9007199254740991:10:T()}function ct(e,t){if(e===t)return!0;const n=Kt(e);if(n!==Kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ln(e).isEqual(ln(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xt(i.timestampValue),a=xt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Pe(i.bytesValue).isEqual(Pe(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return q(i.geoPointValue.latitude)===q(s.geoPointValue.latitude)&&q(i.geoPointValue.longitude)===q(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return q(i.integerValue)===q(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=q(i.doubleValue),a=q(s.doubleValue);return o===a?un(o)===un(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return zt(e.arrayValue.values||[],t.arrayValue.values||[],ct);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(wi(o)!==wi(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ct(o[u],a[u])))return!1;return!0}(e,t);default:return T()}}function Ve(e,t){return(e.values||[]).find(n=>ct(n,t))!==void 0}function Ht(e,t){if(e===t)return 0;const n=Kt(e),r=Kt(t);if(n!==r)return P(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=q(s.integerValue||s.doubleValue),u=q(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Pi(e.timestampValue,t.timestampValue);case 4:return Pi(ln(e),ln(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Pe(s),u=Pe(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const h=P(a[l],u[l]);if(h!==0)return h}return P(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=P(q(s.latitude),q(o.latitude));return a!==0?a:P(q(s.longitude),q(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const h=Ht(a[l],u[l]);if(h)return h}return P(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Qe.mapValue&&o===Qe.mapValue)return 0;if(s===Qe.mapValue)return 1;if(o===Qe.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},h=Object.keys(l);u.sort(),h.sort();for(let c=0;c<u.length&&c<h.length;++c){const g=P(u[c],h[c]);if(g!==0)return g;const m=Ht(a[u[c]],l[h[c]]);if(m!==0)return m}return P(u.length,h.length)}(e.mapValue,t.mapValue);default:throw T()}}function Pi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return P(e,t);const n=xt(e),r=xt(t),i=P(n.seconds,r.seconds);return i!==0?i:P(n.nanos,r.nanos)}function Qt(e){return fr(e)}function fr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=xt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Pe(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return v.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=fr(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fr(n.fields[o])}`;return i+"}"}(e.mapValue):T()}function dr(e){return!!e&&"integerValue"in e}function Gr(e){return!!e&&"arrayValue"in e}function Ye(e){return!!e&&"mapValue"in e}function ce(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ne(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=ce(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ce(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Du(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ye(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ce(n)}setAll(t){let n=Q.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ce(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Ye(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ct(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Ye(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){ne(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new it(ce(this.value))}}function ro(e){const t=[];return ne(e.fields,(n,r)=>{const i=new Q([n]);if(Ye(r)){const s=ro(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new st(t,0,D.min(),D.min(),D.min(),it.empty(),0)}static newFoundDocument(t,n,r,i){return new st(t,1,n,D.min(),r,i,0)}static newNoDocument(t,n){return new st(t,2,n,D.min(),D.min(),it.empty(),0)}static newUnknownDocument(t,n){return new st(t,3,n,D.min(),D.min(),it.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,n){this.position=t,this.inclusive=n}}function Vi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),n.key):r=Ht(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ci(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ct(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n="asc"){this.field=t,this.dir=n}}function ku(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{}class F extends io{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Ou(t,n,r):n==="array-contains"?new Fu(t,r):n==="in"?new Lu(t,r):n==="not-in"?new Uu(t,r):n==="array-contains-any"?new bu(t,r):new F(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new xu(t,r):new Mu(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ht(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.matchesComparison(Ht(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Et extends io{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Et(t,n)}matches(t){return so(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function so(e){return e.op==="and"}function oo(e){return Nu(e)&&so(e)}function Nu(e){for(const t of e.filters)if(t instanceof Et)return!1;return!0}function pr(e){if(e instanceof F)return e.field.canonicalString()+e.op.toString()+Qt(e.value);if(oo(e))return e.filters.map(t=>pr(t)).join(",");{const t=e.filters.map(n=>pr(n)).join(",");return`${e.op}(${t})`}}function ao(e,t){return e instanceof F?function(r,i){return i instanceof F&&r.op===i.op&&r.field.isEqual(i.field)&&ct(r.value,i.value)}(e,t):e instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ao(o,i.filters[a]),!0):!1}(e,t):void T()}function uo(e){return e instanceof F?function(n){return`${n.field.canonicalString()} ${n.op} ${Qt(n.value)}`}(e):e instanceof Et?function(n){return n.op.toString()+" {"+n.getFilters().map(uo).join(" ,")+"}"}(e):"Filter"}class Ou extends F{constructor(t,n,r){super(t,n,r),this.key=v.fromName(r.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.matchesComparison(n)}}class xu extends F{constructor(t,n){super(t,"in",n),this.keys=lo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Mu extends F{constructor(t,n){super(t,"not-in",n),this.keys=lo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function lo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>v.fromName(r.referenceValue))}class Fu extends F{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gr(n)&&Ve(n.arrayValue,this.value)}}class Lu extends F{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ve(this.value.arrayValue,n)}}class Uu extends F{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ve(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ve(this.value.arrayValue,n)}}class bu extends F{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ve(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Si(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ju(e,t,n,r,i,s,o)}function zr(e){const t=S(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>pr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Qt(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Qt(r)).join(",")),t.he=n}return t.he}function Kr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ku(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ao(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ci(e.startAt,t.startAt)&&Ci(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Bu(e,t,n,r,i,s,o,a){return new Nn(e,t,n,r,i,s,o,a)}function qu(e){return new Nn(e)}function Di(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function $u(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Gu(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function zu(e){return e.collectionGroup!==null}function de(e){const t=S(e);if(t.Pe===null){t.Pe=[];const n=Gu(t),r=$u(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new fe(n)),t.Pe.push(new fe(Q.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new fe(Q.keyField(),s))}}}return t.Pe}function Wt(e){const t=S(e);return t.Ie||(t.Ie=Ku(t,de(e))),t.Ie}function Ku(e,t){if(e.limitType==="F")return Si(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fe(i.field,s)});const n=e.endAt?new cn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new cn(e.startAt.position,e.startAt.inclusive):null;return Si(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function gr(e,t,n){return new Nn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ho(e,t){return Kr(Wt(e),Wt(t))&&e.limitType===t.limitType}function co(e){return`${zr(Wt(e))}|lt:${e.limitType}`}function ki(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uo(i)).join(", ")}]`),qr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qt(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qt(i)).join(",")),`Target(${r})`}(Wt(e))}; limitType=${e.limitType})`}function Hr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of de(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=Vi(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,de(r),i)||r.endAt&&!function(o,a,u){const l=Vi(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,de(r),i))}(e,t)}function Hu(e){return(t,n)=>{let r=!1;for(const i of de(e)){const s=Qu(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Qu(e,t,n){const r=e.field.isKeyField()?v.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?Ht(u,l):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ne(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return eo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new tt(v.comparator);function fn(){return Wu}const fo=new tt(v.comparator);function We(...e){let t=fo;for(const n of e)t=t.insert(n.key,n);return t}function po(e){let t=fo;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ct(){return pe()}function go(){return pe()}function pe(){return new re(e=>e.toString(),(e,t)=>e.isEqual(t))}const Xu=new tt(v.comparator),Yu=new Z(v.comparator);function H(...e){let t=Yu;for(const n of e)t=t.add(n);return t}const Ju=new Z(P);function Zu(){return Ju}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:un(t)?"-0":t}}function _o(e){return{integerValue:""+e}}function tl(e,t){return Pu(t)?_o(t):mo(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this._=void 0}}function el(e,t,n){return e instanceof dn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$r(s)&&(s=no(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Xt?Eo(e,t):e instanceof Yt?vo(e,t):function(i,s){const o=yo(i,s),a=Ni(o)+Ni(i.Ee);return dr(o)&&dr(i.Ee)?_o(a):mo(i.serializer,a)}(e,t)}function nl(e,t,n){return e instanceof Xt?Eo(e,t):e instanceof Yt?vo(e,t):n}function yo(e,t){return e instanceof pn?function(r){return dr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class dn extends On{}class Xt extends On{constructor(t){super(),this.elements=t}}function Eo(e,t){const n=To(t);for(const r of e.elements)n.some(i=>ct(i,r))||n.push(r);return{arrayValue:{values:n}}}class Yt extends On{constructor(t){super(),this.elements=t}}function vo(e,t){let n=To(t);for(const r of e.elements)n=n.filter(i=>!ct(i,r));return{arrayValue:{values:n}}}class pn extends On{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function Ni(e){return q(e.integerValue||e.doubleValue)}function To(e){return Gr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,n){this.field=t,this.transform=n}}function rl(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Xt&&i instanceof Xt||r instanceof Yt&&i instanceof Yt?zt(r.elements,i.elements,ct):r instanceof pn&&i instanceof pn?ct(r.Ee,i.Ee):r instanceof dn&&i instanceof dn}(e.transform,t.transform)}class il{constructor(t,n){this.version=t,this.transformResults=n}}class dt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new dt}static exists(t){return new dt(void 0,t)}static updateTime(t){return new dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Je(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class xn{}function Ao(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ro(e.key,dt.none()):new Mn(e.key,e.data,dt.none());{const n=e.data,r=it.empty();let i=new Z(Q.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ft(e.key,r,new ot(i.toArray()),dt.none())}}function sl(e,t,n){e instanceof Mn?function(i,s,o){const a=i.value.clone(),u=xi(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ft?function(i,s,o){if(!Je(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=xi(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(wo(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function ge(e,t,n,r){return e instanceof Mn?function(s,o,a,u){if(!Je(s.precondition,o))return a;const l=s.value.clone(),h=Mi(s.fieldTransforms,u,o);return l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ft?function(s,o,a,u){if(!Je(s.precondition,o))return a;const l=Mi(s.fieldTransforms,u,o),h=o.data;return h.setAll(wo(s)),h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(s,o,a){return Je(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function ol(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=yo(r.transform,i||null);s!=null&&(n===null&&(n=it.empty()),n.set(r.field,s))}return n||null}function Oi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zt(r,i,(s,o)=>rl(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mn extends xn{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ft extends xn{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function xi(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,nl(o,a,n[i]))}return r}function Mi(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,el(s,o,t))}return r}class Ro extends xn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class al extends xn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&sl(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ge(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ge(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=go();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Ao(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(D.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),H())}isEqual(t){return this.batchId===t.batchId&&zt(this.mutations,t.mutations,(n,r)=>Oi(n,r))&&zt(this.baseMutations,t.baseMutations,(n,r)=>Oi(n,r))}}class Qr{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){b(t.mutations.length===r.length);let i=function(){return Xu}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qr(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N,I;function hl(e){switch(e){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function cl(e){if(e===void 0)return Ot("GRPC error has no .code"),f.UNKNOWN;switch(e){case N.OK:return f.OK;case N.CANCELLED:return f.CANCELLED;case N.UNKNOWN:return f.UNKNOWN;case N.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case N.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case N.INTERNAL:return f.INTERNAL;case N.UNAVAILABLE:return f.UNAVAILABLE;case N.UNAUTHENTICATED:return f.UNAUTHENTICATED;case N.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case N.NOT_FOUND:return f.NOT_FOUND;case N.ALREADY_EXISTS:return f.ALREADY_EXISTS;case N.PERMISSION_DENIED:return f.PERMISSION_DENIED;case N.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case N.ABORTED:return f.ABORTED;case N.OUT_OF_RANGE:return f.OUT_OF_RANGE;case N.UNIMPLEMENTED:return f.UNIMPLEMENTED;case N.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(I=N||(N={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new cu([4294967295,4294967295],0);class fl{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function mr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function pl(e,t){return mr(e,t.toTimestamp())}function $t(e){return b(!!e),D.fromTimestamp(function(n){const r=xt(n);return new L(r.seconds,r.nanos)}(e))}function Po(e,t){return function(r){return new O(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function gl(e){const t=O.fromString(e);return b(Al(t)),t}function _r(e,t){return Po(e.databaseId,t.path)}function ml(e){const t=gl(e);return t.length===4?O.emptyPath():yl(t)}function _l(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yl(e){return b(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Fi(e,t,n){return{name:_r(e,t),fields:n.value.mapValue.fields}}function El(e,t){let n;if(t instanceof Mn)n={update:Fi(e,t.key,t.value)};else if(t instanceof Ro)n={delete:_r(e,t.key)};else if(t instanceof Ft)n={update:Fi(e,t.key,t.data),updateMask:Il(t.fieldMask)};else{if(!(t instanceof al))return T();n={verify:_r(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof dn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pn)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:pl(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(e,t.precondition)),n}function vl(e,t){return e&&e.length>0?(b(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?$t(i.updateTime):$t(s);return o.isEqual(D.min())&&(o=$t(s)),new il(o,i.transformResults||[])}(n,t))):[]}function Tl(e){let t=ml(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let s=[];n.where&&(s=function(c){const g=Vo(c);return g instanceof Et&&oo(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(g=>function(A){return new fe(jt(A.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(c){let g;return g=typeof c=="object"?c.value:c,qr(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(c){const g=!!c.before,m=c.values||[];return new cn(m,g)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const g=!c.before,m=c.values||[];return new cn(m,g)}(n.endAt)),Bu(t,i,o,s,a,"F",u,l)}function Vo(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jt(n.unaryFilter.field);return F.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=jt(n.unaryFilter.field);return F.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=jt(n.unaryFilter.field);return F.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jt(n.unaryFilter.field);return F.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return F.create(jt(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Et.create(n.compositeFilter.filters.map(r=>Vo(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function jt(e){return Q.fromServerFormat(e.fieldPath)}function Il(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Al(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.lt=t}}function Rl(e){const t=Tl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?gr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.on=new Vl}addToCollectionParentIndex(t,n){return this.on.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(yt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(yt.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Vl{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Z(O.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Z(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Jt(0)}static Nn(){return new Jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.changes=new re(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,st.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&ge(r.mutation,i,ot.empty(),L.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,n,r=H()){const i=Ct();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=We();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ct();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,H()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=fn();const o=pe(),a=function(){return pe()}();return n.forEach((u,l)=>{const h=r.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof Ft)?s=s.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),ge(h.mutation,l,h.mutation.getFieldMask(),L.now())):o.set(l.key,ot.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var c;return a.set(l,new Sl(h,(c=o.get(l))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,n){const r=pe();let i=new tt((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let h=r.get(u)||ot.empty();h=a.applyToLocalView(l,h),r.set(u,h);const c=(i.get(a.batchId)||H()).add(u);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,c=go();h.forEach(g=>{if(!s.has(g)){const m=Ao(n.get(g),r.get(g));m!==null&&c.set(g,m),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,c))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return v.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):zu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):d.resolve(Ct());let a=-1,u=s;return o.next(l=>d.forEach(l,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?d.resolve():this.remoteDocumentCache.getEntry(t,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,u,l,H())).next(h=>({batchId:a,changes:po(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new v(n)).next(r=>{let i=We();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=We();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const u=function(h,c){return new Nn(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(l=>{l.forEach((h,c)=>{s=s.insert(h,c)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,u)=>{const l=u.getKey();s.get(l)===null&&(s=s.insert(l,st.newInvalidDocument(l)))});let o=We();return s.forEach((a,u)=>{const l=i.get(a);l!==void 0&&ge(l.mutation,u,ot.empty(),L.now()),Hr(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return d.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$t(i.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Rl(i.bundledQuery),readTime:$t(i.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.overlays=new tt(v.comparator),this.lr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ct();return d.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.Pt(t,n,s)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const i=Ct(),s=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new tt((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=Ct(),s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=Ct(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return d.resolve(a)}Pt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ll(n,r));let s=this.lr.get(n);s===void 0&&(s=H(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.hr=new Z(M.Pr),this.Ir=new Z(M.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new M(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new M(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new v(new O([])),r=new M(n,t),i=new M(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new v(new O([])),r=new M(n,t),i=new M(n,t+1);let s=H();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new M(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class M{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return v.comparator(t.key,n.key)||P(t.gr,n.gr)}static Tr(t,n){return P(t.gr,n.gr)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Z(M.Pr)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ul(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new M(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return d.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new M(n,0),i=new M(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),d.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Z(P);return n.forEach(i=>{const s=new M(i,0),o=new M(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),d.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;v.isDocumentKey(s)||(s=s.child(""));const o=new M(new v(s),0);let a=new Z(P);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gr)),!0)},o),d.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){b(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return d.forEach(n.mutations,i=>{const s=new M(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new M(n,0),i=this.yr.firstAfterOrEqual(r);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.vr=t,this.docs=function(){return new tt(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(t,n){let r=fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=fn();const o=n.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:h}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Au(Iu(h),r)<=0||(i.has(h.key)||Hr(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return d.resolve(s)}getAllFromCollectionGroup(t,n,r,i){T()}Cr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Ml(this)}getSize(t){return d.resolve(this.size)}}class Ml extends Cl{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t){this.persistence=t,this.Fr=new re(n=>zr(n),Kr),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Wr,this.targetCount=0,this.Nr=Jt.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),d.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Jt(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.kn(n),d.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(s).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n){this.Br={},this.overlays={},this.Lr=new to(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Fl(this),this.indexManager=new Pl,this.remoteDocumentCache=function(i){return new xl(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new wl(n),this.Kr=new kl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Nl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Ol(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const i=new Ul(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return d.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Ul extends Ru{constructor(t){super(),this.currentSequenceNumber=t}}class Xr{constructor(t){this.persistence=t,this.Gr=new Wr,this.zr=null}static jr(t){return new Xr(t)}get Hr(){if(this.zr)return this.zr;throw T()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),d.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Hr,r=>{const i=v.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,D.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return d.or([()=>d.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yr(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.Ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Wi(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(Di(n))return d.resolve(null);let r=Wt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gr(n,null,"F"),r=Wt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=H(...s);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.zi(n,a);return this.ji(n,l,o,u.readTime)?this.Ui(t,gr(n,null,"F")):this.Hi(t,l,n,u)}))})))}Wi(t,n,r,i){return Di(n)||i.isEqual(D.min())?this.Gi(t,n):this.$i.getDocuments(t,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(Ai()<=me.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.Hi(t,o,n,Tu(i,-1)))})}zi(t,n){let r=new Z(Hu(t));return n.forEach((i,s)=>{Hr(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return Ai()<=me.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",ki(n)),this.$i.getDocumentsMatchingQuery(t,n,yt.min())}Hi(t,n,r,i){return this.$i.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n,r,i){this.persistence=t,this.Ji=n,this.serializer=i,this.Yi=new tt(P),this.Zi=new re(s=>zr(s),Kr),this.Xi=new Map,this.es=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.ts(r)}ts(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Dl(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Yi))}}function Bl(e,t,n,r){return new jl(e,t,n,r)}async function Co(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=H();for(const l of i){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ns:l,removedBatchIds:o,addedBatchIds:a}))})})}function ql(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.es.newChangeBuffer({trackRemovals:!0});return function(a,u,l,h){const c=l.batch,g=c.keys();let m=d.resolve();return g.forEach(A=>{m=m.next(()=>h.getEntry(u,A)).next(V=>{const w=l.docVersions.get(A);b(w!==null),V.version.compareTo(w)<0&&(c.applyToRemoteDocument(V,l),V.isValidDocument()&&(V.setReadTime(l.commitVersion),h.addEntry(V)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,c))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=H();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function $l(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function Gl(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Li{constructor(){this.activeTargetIds=Zu()}Ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}Is(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zl{constructor(){this.Js=new Li,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Js.Ps(t),this.Ys[t]||"not-current"}updateQueryState(t,n,r){this.Ys[t]=n}removeLocalQueryTarget(t){this.Js.Is(t)}isLocalQueryTarget(t){return this.Js.activeTargetIds.has(t)}clearQueryState(t){delete this.Ys[t]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(t){return this.Js.activeTargetIds.has(t)}start(){return this.Js=new Li,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{Zs(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(t){this.io.push(t)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.io)t(0)}ro(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.io)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe=null;function Yn(){return Xe===null?Xe=function(){return 268435456+Math.round(2147483648*Math.random())}():Xe++,"0x"+Xe.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t){this.oo=t.oo,this._o=t._o}ao(t){this.uo=t}co(t){this.lo=t}onMessage(t){this.ho=t}close(){this._o()}send(t){this.oo(t)}Po(){this.uo()}Io(t){this.lo(t)}To(t){this.ho(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="WebChannelConnection";class Wl extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=Yn(),u=this.fo(n,r);_("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(l,s,o),this.yo(n,u,l,i).then(h=>(_("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw an("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ee}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=Hl[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}yo(t,n,r,i){const s=Yn();return new Promise((o,a)=>{const u=new hu;u.setWithCredentials(!0),u.listenOnce(au.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Xn.NO_ERROR:const h=u.getResponseJson();_(z,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case Xn.TIMEOUT:_(z,`RPC '${t}' ${s} timed out`),a(new E(f.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const c=u.getStatus();if(_(z,`RPC '${t}' ${s} failed with status:`,c,"response text:",u.getResponseText()),c>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const A=function(w){const Y=w.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(Y)>=0?Y:f.UNKNOWN}(m.status);a(new E(A,m.message))}else a(new E(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new E(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{_(z,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);_(z,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}So(t,n,r){const i=Yn(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=su(),a=ou(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new lu({})),this.po(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");_(z,`Creating RPC '${t}' stream ${i}: ${h}`,u);const c=o.createWebChannel(h,u);let g=!1,m=!1;const A=new Ql({oo:w=>{m?_(z,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(g||(_(z,`Opening RPC '${t}' stream ${i} transport.`),c.open(),g=!0),_(z,`RPC '${t}' stream ${i} sending:`,w),c.send(w))},_o:()=>c.close()}),V=(w,Y,nt)=>{w.listen(Y,_t=>{try{nt(_t)}catch(At){setTimeout(()=>{throw At},0)}})};return V(c,Ke.EventType.OPEN,()=>{m||_(z,`RPC '${t}' stream ${i} transport opened.`)}),V(c,Ke.EventType.CLOSE,()=>{m||(m=!0,_(z,`RPC '${t}' stream ${i} transport closed`),A.Io())}),V(c,Ke.EventType.ERROR,w=>{m||(m=!0,an(z,`RPC '${t}' stream ${i} transport errored:`,w),A.Io(new E(f.UNAVAILABLE,"The operation could not be completed")))}),V(c,Ke.EventType.MESSAGE,w=>{var Y;if(!m){const nt=w.data[0];b(!!nt);const _t=nt,At=_t.error||((Y=_t[0])===null||Y===void 0?void 0:Y.error);if(At){_(z,`RPC '${t}' stream ${i} received error:`,At);const ri=At.status;let qn=function(Ho){const si=N[Ho];if(si!==void 0)return cl(si)}(ri),ii=At.message;qn===void 0&&(qn=f.INTERNAL,ii="Unknown error status: "+ri+" with message "+At.message),m=!0,A.Io(new E(qn,ii)),c.close()}else _(z,`RPC '${t}' stream ${i} received:`,nt),A.To(nt)}}),V(a,uu.STAT_EVENT,w=>{w.stat===Ti.PROXY?_(z,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Ti.NOPROXY&&_(z,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.Po()},0),A}}function Jn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){return new fl(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,n,r,i,s,o,a,u){this.si=t,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new So(t,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(t){this.Yo(),this.stream.send(t)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(t,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,t!==4?this.$o.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Ot(n.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Xo(){}auth(){this.state=1;const t=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{t(()=>{const i=new E(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(t,n){const r=this.e_(this.qo);this.stream=this.r_(t,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}e_(t){return n=>{this.si.enqueueAndForget(()=>this.qo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yl extends Xl{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(t,n){return this.connection.So("Write",t,n)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.__){this.$o.reset();const n=vl(t.writeResults,t.commitTime),r=$t(t.commitTime);return this.listener.c_(r,n)}return b(!t.writeResults||t.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const t={};t.database=_l(this.serializer),this.Jo(t)}u_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>El(this.serializer,r))};this.Jo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}mo(t,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(f.UNKNOWN,i.toString())})}wo(t,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(f.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class Zl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(t){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.V_("Offline")))}set(t){this.g_(),this.E_=0,t==="Online"&&(this.A_=!1),this.V_(t)}V_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}m_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(Ot(n),this.A_=!1):_("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{je(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=S(u);l.w_.add(4),await be(l),l.D_.set("Unknown"),l.w_.delete(4),await Ln(l)}(this))})}),this.D_=new Zl(r,i)}}async function Ln(e){if(je(e))for(const t of e.S_)await t(!0)}async function be(e){for(const t of e.S_)await t(!1)}function je(e){return S(e).w_.size===0}async function Do(e,t,n){if(!kn(t))throw t;e.w_.add(1),await be(e),e.D_.set("Offline"),n||(n=()=>$l(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.w_.delete(1),await Ln(e)})}function ko(e,t){return t().catch(n=>Do(e,n,t))}async function Un(e){const t=S(e),n=vt(t);let r=t.p_.length>0?t.p_[t.p_.length-1].batchId:-1;for(;eh(t);)try{const i=await Gl(t.localStore,r);if(i===null){t.p_.length===0&&n.jo();break}r=i.batchId,nh(t,i)}catch(i){await Do(t,i)}No(t)&&Oo(t)}function eh(e){return je(e)&&e.p_.length<10}function nh(e,t){e.p_.push(t);const n=vt(e);n.Wo()&&n.a_&&n.u_(t.mutations)}function No(e){return je(e)&&!vt(e).Uo()&&e.p_.length>0}function Oo(e){vt(e).start()}async function rh(e){vt(e).h_()}async function ih(e){const t=vt(e);for(const n of e.p_)t.u_(n.mutations)}async function sh(e,t,n){const r=e.p_.shift(),i=Qr.from(r,t,n);await ko(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Un(e)}async function oh(e,t){t&&vt(e).a_&&await async function(r,i){if(function(o){return hl(o)&&o!==f.ABORTED}(i.code)){const s=r.p_.shift();vt(r).zo(),await ko(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Un(r)}}(e,t),No(e)&&Oo(e)}async function bi(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=je(n);n.w_.add(3),await be(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.w_.delete(3),await Ln(n)}async function ah(e,t){const n=S(e);t?(n.w_.delete(2),await Ln(n)):t||(n.w_.add(2),await be(n),n.D_.set("Unknown"))}function vt(e){return e.F_||(e.F_=function(n,r,i){const s=S(n);return s.I_(),new Yl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ao:rh.bind(null,e),co:oh.bind(null,e),l_:ih.bind(null,e),c_:sh.bind(null,e)}),e.S_.push(async t=>{t?(e.F_.zo(),await Un(e)):(await e.F_.stop(),e.p_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.p_.length} pending writes`),e.p_=[]))})),e.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Jr(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xo(e,t){if(Ot("AsyncQueue",`${t}: ${e}`),kn(e))return new E(f.UNAVAILABLE,`${t}: ${e}`);throw e}class uh{constructor(){this.queries=new re(t=>co(t),ho),this.onlineState="Unknown",this.N_=new Set}}function lh(e){e.N_.forEach(t=>{t.next()})}class hh{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new re(a=>co(a),ho),this.Aa=new Map,this.Ra=new Set,this.Va=new tt(v.comparator),this.ma=new Map,this.fa=new Wr,this.ga={},this.pa=new Map,this.ya=Jt.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function ch(e,t,n){const r=gh(e);try{const i=await function(o,a){const u=S(o),l=L.now(),h=a.reduce((m,A)=>m.add(A.key),H());let c,g;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let A=fn(),V=H();return u.es.getEntries(m,h).next(w=>{A=w,A.forEach((Y,nt)=>{nt.isValidDocument()||(V=V.add(Y))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,A)).next(w=>{c=w;const Y=[];for(const nt of a){const _t=ol(nt,c.get(nt.key).overlayedDocument);_t!=null&&Y.push(new Ft(nt.key,_t,ro(_t.value.mapValue),dt.exists(!0)))}return u.mutationQueue.addMutationBatch(m,l,Y,a)}).next(w=>{g=w;const Y=w.applyToLocalDocumentSet(c,V);return u.documentOverlayCache.saveOverlays(m,w.batchId,Y)})}).then(()=>({batchId:g.batchId,changes:po(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.ga[o.currentUser.toKey()];l||(l=new tt(P)),l=l.insert(a,u),o.ga[o.currentUser.toKey()]=l}(r,i.batchId,n),await bn(r,i.changes),await Un(r.remoteStore)}catch(i){const s=xo(i,"Failed to persist write");n.reject(s)}}function ji(e,t,n){const r=S(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=S(o);u.onlineState=a;let l=!1;u.queries.forEach((h,c)=>{for(const g of c.listeners)g.B_(a)&&(l=!0)}),l&&lh(u)}(r.eventManager,t),i.length&&r.Ea.i_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fh(e,t){const n=S(e),r=t.batch.batchId;try{const i=await ql(n.localStore,t);Fo(n,r,null),Mo(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bn(n,i)}catch(i){await Zs(i)}}async function dh(e,t,n){const r=S(e);try{const i=await function(o,a){const u=S(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return u.mutationQueue.lookupMutationBatch(l,a).next(c=>(b(c!==null),h=c.keys(),u.mutationQueue.removeMutationBatch(l,c))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>u.localDocuments.getDocuments(l,h))})}(r.localStore,t);Fo(r,t,n),Mo(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await bn(r,i)}catch(i){await Zs(i)}}function Mo(e,t){(e.pa.get(t)||[]).forEach(n=>{n.resolve()}),e.pa.delete(t)}function Fo(e,t,n){const r=S(e);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.ga[r.currentUser.toKey()]=i}}async function bn(e,t,n){const r=S(e),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,u)=>{o.push(r.Sa(u,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=Yr.Qi(u.targetId,l);s.push(h)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(u,l){const h=S(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(l,g=>d.forEach(g.ki,m=>h.persistence.referenceDelegate.addReference(c,g.targetId,m)).next(()=>d.forEach(g.qi,m=>h.persistence.referenceDelegate.removeReference(c,g.targetId,m)))))}catch(c){if(!kn(c))throw c;_("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const g=c.targetId;if(!c.fromCache){const m=h.Yi.get(g),A=m.snapshotVersion,V=m.withLastLimboFreeSnapshotVersion(A);h.Yi=h.Yi.insert(g,V)}}}(r.localStore,s))}async function ph(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Co(n.localStore,t);n.currentUser=t,function(s,o){s.pa.forEach(a=>{a.forEach(u=>{u.reject(new E(f.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bn(n,r.ns)}}function gh(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dh.bind(null,t),t}class Bi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Fn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Bl(this.persistence,new bl,t.initialUser,this.serializer)}createPersistence(t){return new Ll(Xr.jr,this.serializer)}createSharedClientState(t){return new zl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ji(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ph.bind(null,this.syncEngine),await ah(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new uh}()}createDatastore(t){const n=Fn(t.databaseInfo.databaseId),r=function(s){return new Wl(s)}(t.databaseInfo);return function(s,o,a,u){return new Jl(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new th(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ji(this.syncEngine,n,0),function(){return Ui.v()?new Ui:new Kl}())}createSyncEngine(t,n){return function(i,s,o,a,u,l,h){const c=new hh(i,s,o,a,u,l);return h&&(c.wa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=S(n);_("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await be(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=K.UNAUTHENTICATED,this.clientId=Js.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=xo(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Zn(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Co(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function qi(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Eh(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>bi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>bi(t.remoteStore,s)),e._onlineComponents=t}function yh(e){return e.name==="FirebaseError"?e.code===f.FAILED_PRECONDITION||e.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Eh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zn(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!yh(n))throw n;an("Error using user provided cache. Falling back to memory cache: "+n),await Zn(e,new Bi)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Zn(e,new Bi);return e._offlineComponents}async function vh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await qi(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await qi(e,new mh))),e._onlineComponents}function Th(e){return vh(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(e,t,n){if(!n)throw new E(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ah(e,t,n,r){if(t===!0&&r===!0)throw new E(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gi(e){if(!v.isDocumentKey(e))throw new E(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Zr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function yr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zr(e);throw new E(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new E(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new E(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ah("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lo((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new E(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new E(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new E(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ti{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new E(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zi(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fu;switch(r.type){case"firstParty":return new mu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$i.get(n);r&&(_("ComponentProvider","Removing Datastore"),$i.delete(n),r.terminate())}(this),Promise.resolve()}}function wh(e,t,n,r={}){var i;const s=(e=yr(e,ti))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&an("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=K.MOCK_USER;else{a=ta(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new E(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new K(l)}e._authCredentials=new du(new Ys(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ei(this.firestore,t,this._query)}}class pt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ce(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pt(this.firestore,t,this._key)}}class Ce extends ei{constructor(t,n,r){super(t,n,qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pt(this.firestore,null,new v(t))}withConverter(t){return new Ce(this.firestore,t,this._path)}}function Ut(e,t,...n){if(e=kt(e),arguments.length===1&&(t=Js.V()),Ih("doc","path",t),e instanceof ti){const r=O.fromString(t,...n);return Gi(r),new pt(e,null,new v(r))}{if(!(e instanceof pt||e instanceof Ce))throw new E(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return Gi(r),new pt(e.firestore,e instanceof Ce?e.converter:null,new v(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new So(this,"async_queue_retry"),this.eu=()=>{const n=Jn();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=Jn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=Jn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new Dt;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!kn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const i=Jr.createAndSchedule(this,t,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&T()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}class Uo extends ti{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Rh}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bo(this),this._firestoreClient.terminate()}}function Ph(e,t){const n=typeof e=="object"?e:Yo(),r=typeof e=="string"?e:t||"(default)",i=Jo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Zo("firestore");s&&wh(i,...s)}return i}function Vh(e){return e._firestoreClient||bo(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function bo(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,l,h){return new Su(a,u,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Lo(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new _h(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Se(mt.fromBase64String(t))}catch(n){throw new E(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Se(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new E(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new E(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new E(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=/^__.*__$/;class Bo{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Ft(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function qo(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class jn{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(t){return new jn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.Iu(t),i}Tu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(t){return this.lu({path:void 0,Pu:!0})}du(t){return gn(t,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Iu(this.path.get(t))}Iu(t){if(t.length===0)throw this.du("Document fields must not be empty");if(qo(this.cu)&&Ch.test(t))throw this.du('Document fields cannot begin and end with "__"')}}class Sh{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Fn(t)}Vu(t,n,r,i=!1){return new jn({cu:t,methodName:n,Ru:r,path:Q.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dh(e){const t=e._freezeSettings(),n=Fn(e._databaseId);return new Sh(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Bn extends Be{_toFieldTransform(t){if(t.cu!==2)throw t.cu===1?t.du(`${this._methodName}() can only appear at the top level of your update data`):t.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Bn}}function $o(e,t,n){return new jn({cu:3,Ru:t.settings.Ru,methodName:e._methodName,Pu:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class kh extends Be{constructor(t,n){super(t),this.mu=n}_toFieldTransform(t){const n=$o(this,t,!0),r=this.mu.map(s=>ie(s,n)),i=new Xt(r);return new Io(t.path,i)}isEqual(t){return this===t}}class Nh extends Be{constructor(t,n){super(t),this.mu=n}_toFieldTransform(t){const n=$o(this,t,!0),r=this.mu.map(s=>ie(s,n)),i=new Yt(r);return new Io(t.path,i)}isEqual(t){return this===t}}function Oh(e,t,n,r){const i=e.Vu(1,t,n);zo("Data must be an object, but it was:",i,r);const s=[],o=it.empty();ne(r,(u,l)=>{const h=Ko(t,u,n);l=kt(l);const c=i.Tu(h);if(l instanceof Bn)s.push(h);else{const g=ie(l,c);g!=null&&(s.push(h),o.set(h,g))}});const a=new ot(s);return new Bo(o,a,i.fieldTransforms)}function xh(e,t,n,r,i,s){const o=e.Vu(1,t,n),a=[Ki(t,r,n)],u=[i];if(s.length%2!=0)throw new E(f.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Ki(t,s[g])),u.push(s[g+1]);const l=[],h=it.empty();for(let g=a.length-1;g>=0;--g)if(!Lh(l,a[g])){const m=a[g];let A=u[g];A=kt(A);const V=o.Tu(m);if(A instanceof Bn)l.push(m);else{const w=ie(A,V);w!=null&&(l.push(m),h.set(m,w))}}const c=new ot(l);return new Bo(h,c,o.fieldTransforms)}function ie(e,t){if(Go(e=kt(e)))return zo("Unsupported field value:",t,e),Mh(e,t);if(e instanceof Be)return function(r,i){if(!qo(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Pu&&t.cu!==4)throw t.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ie(a,i.Eu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tl(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=L.fromDate(r);return{timestampValue:mr(i.serializer,s)}}if(r instanceof L){const s=new L(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mr(i.serializer,s)}}if(r instanceof jo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Se)return{bytesValue:dl(i.serializer,r._byteString)};if(r instanceof pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Po(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${Zr(r)}`)}(e,t)}function Mh(e,t){const n={};return eo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ne(e,(r,i)=>{const s=ie(i,t.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Go(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof L||e instanceof jo||e instanceof Se||e instanceof pt||e instanceof Be)}function zo(e,t,n){if(!Go(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zr(n);throw r==="an object"?t.du(e+" a custom object"):t.du(e+" "+r)}}function Ki(e,t,n){if((t=kt(t))instanceof ni)return t._internalPath;if(typeof t=="string")return Ko(e,t);throw gn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Fh=new RegExp("[~\\*/\\[\\]]");function Ko(e,t,n){if(t.search(Fh)>=0)throw gn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ni(...t.split("."))._internalPath}catch{throw gn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function gn(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new E(f.INVALID_ARGUMENT,a+e+u)}function Lh(e,t){return e.some(n=>n.isEqual(t))}function wt(e,t,n,...r){e=yr(e,pt);const i=yr(e.firestore,Uo),s=Dh(i);let o;return o=typeof(t=kt(t))=="string"||t instanceof ni?xh(s,"updateDoc",e._key,t,n,r):Oh(s,"updateDoc",e._key,t),Uh(i,[o.toMutation(e._key,dt.exists(!0))])}function Uh(e,t){return function(r,i){const s=new Dt;return r.asyncQueue.enqueueAndForget(async()=>ch(await Th(r),i,s)),s.promise}(Vh(e),t)}function ae(...e){return new kh("arrayUnion",e)}function Hi(...e){return new Nh("arrayRemove",e)}(function(t,n=!0){(function(i){ee=i})(ea),Qo(new Wo("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Uo(new pu(r.getProvider("auth-internal")),new yu(r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new E(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(l.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),oi(Ii,"4.1.1",t),oi(Ii,"4.1.1","esm2017")})();const bt=Ph(),x=ia(),Qi=Rt.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",Rt.stopTimer),e.addEventListener("mouseleave",Rt.resumeTimer)}}),zh=ra("cartStore",{state:()=>({cartPageState:"cart",couponCode:"",couponValue:1,checkAllValue:!1,cartCheckboxWrap:[],payWrap:{payData:[],total:0,finalTotal:0,couponUse:""}}),actions:{async addCart(e,t){const n={timestamp:new Date().getTime(),courseId:t};console.log(n);const r=Ut(bt,e,"student");await wt(r,{myCart:ae(n)}),Qi.fire({icon:"success",title:"成功加入購物車"}),x.getStudentFirebaseData()},async buyNow(e,t){const n={timestamp:new Date().getTime(),courseId:t};console.log(n);const r=Ut(bt,e,"student");await wt(r,{myCart:ae(n)}),ai.push("/CartPage")},async deleteCart(e,t,n){console.log(e,t,n),this.cartCheckboxWrap=[],this.checkAllValue=!1;const r=x.studentData.myCart.filter(s=>s.timestamp===t),i=Ut(bt,e,"student");await wt(i,{myCart:Hi(r[0])}),Qi.fire({icon:"success",title:"成功刪除購物車項目"}),x.onAuthStateChanged()},addToPayWrap(){if(this.cartCheckboxWrap.length===0)Rt.fire("請選擇結帳項目");else{this.cartPageState="pay";let e=0;this.cartCheckboxWrap.forEach(t=>{e+=parseInt(x.userCartCourses[t][0].data.price);let n={courseId:"",courseName:"",price:""};n.courseId=x.userCartCourses[t][0].id,n.courseName=x.userCartCourses[t][0].data.courseName,n.price=x.userCartCourses[t][0].data.price,this.payWrap.payData.push(n)}),this.payWrap.total=e,this.payWrap.finalTotal=Math.trunc(e*this.couponValue)}},addCouponCode(){console.log(x.couponData);for(let e in x.couponData)if(console.log(e),console.log(x.couponData[e]),this.couponCode===e){Rt.fire("成功加入折扣碼"),this.couponValue=x.couponData[e],this.payWrap.couponUse=e;return}Rt.fire("折扣碼不存在")},async confirmToPay(){const e={timestamp:new Date().getTime(),payData:this.payWrap},t=Ut(bt,x.user.uid,"student");await wt(t,{payHistory:ae(e)});for(let r=0;r<this.payWrap.payData.length;r++){const i=Ut(bt,"MusicTutorCourses",this.payWrap.payData[r].courseId),s=new Date().getTime();let o={timestamp:s,courseId:this.payWrap.payData[r].courseId,classSchedule:""},a={timestamp:s,uid:x.teacherData.uid,classSchedule:""};await wt(t,{myStudyCourses:ae(o)}),await wt(i,{whoBuy:ae(a)})}const n=Ut(bt,x.user.uid,"student");for(let r=0;r<this.cartCheckboxWrap.length;r++)await wt(n,{myCart:Hi(x.studentData.myCart[this.cartCheckboxWrap[r]])});this.cartPageState="cart",this.couponCode="",this.couponValue=1,this.cartCheckboxWrap=[],this.payWrap={payData:[],total:0,finalTotal:0,couponUse:""},Rt.fire("成功完成付款"),ai.push("/AllCourses"),x.onAuthStateChanged()},checkAll(){this.checkAllValue?this.cartCheckboxWrap=[]:x.userCartCourses.forEach((e,t)=>{this.cartCheckboxWrap.push(t)})}},getters:{cartTotal(){return()=>{let e=0;return this.cartCheckboxWrap.forEach(t=>{e+=parseInt(x.userCartCourses[t][0].data.price)}),e}}}});export{zh as c};
