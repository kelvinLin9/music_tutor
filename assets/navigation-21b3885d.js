import{y as B,z as q,A as R,B as T,C as j,D as I,E as M,G as v,S as G,H as A,I as W,J as L,K as V,L as _,M as D,N as g,O as K,P as F,Q as J,R as Q,T as Z}from"./index-92177697.js";function z(n,i){n===void 0&&(n={}),i===void 0&&(i=!0);const t={on:{}},o={},a={};B(t,q),t._emitClasses=!0,t.init=!1;const s={},l=R.map(e=>e.replace(/_/,"")),u=Object.assign({},n);return Object.keys(u).forEach(e=>{typeof n[e]>"u"||(l.indexOf(e)>=0?T(n[e])?(t[e]={},a[e]={},B(t[e],n[e]),B(a[e],n[e])):(t[e]=n[e],a[e]=n[e]):e.search(/on[A-Z]/)===0&&typeof n[e]=="function"?i?o[`${e[2].toLowerCase()}${e.substr(3)}`]=n[e]:t.on[`${e[2].toLowerCase()}${e.substr(3)}`]=n[e]:s[e]=n[e])}),["navigation","pagination","scrollbar"].forEach(e=>{t[e]===!0&&(t[e]={}),t[e]===!1&&delete t[e]}),{params:t,passedParams:a,rest:s,events:o}}function X(n,i){let{el:t,nextEl:o,prevEl:a,paginationEl:s,scrollbarEl:l,swiper:u}=n;j(i)&&o&&a&&(u.params.navigation.nextEl=o,u.originalParams.navigation.nextEl=o,u.params.navigation.prevEl=a,u.originalParams.navigation.prevEl=a),I(i)&&s&&(u.params.pagination.el=s,u.originalParams.pagination.el=s),M(i)&&l&&(u.params.scrollbar.el=l,u.originalParams.scrollbar.el=l),u.init(t)}function Y(n,i,t,o,a){const s=[];if(!i)return s;const l=e=>{s.indexOf(e)<0&&s.push(e)};if(t&&o){const e=o.map(a),p=t.map(a);e.join("")!==p.join("")&&l("children"),o.length!==t.length&&l("children")}return R.filter(e=>e[0]==="_").map(e=>e.replace(/_/,"")).forEach(e=>{if(e in n&&e in i)if(T(n[e])&&T(i[e])){const p=Object.keys(n[e]),r=Object.keys(i[e]);p.length!==r.length?l(e):(p.forEach(d=>{n[e][d]!==i[e][d]&&l(e)}),r.forEach(d=>{n[e][d]!==i[e][d]&&l(e)}))}else n[e]!==i[e]&&l(e)}),s}const k=n=>{!n||n.destroyed||!n.params.virtual||n.params.virtual&&!n.params.virtual.enabled||(n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.parallax&&n.params.parallax&&n.params.parallax.enabled&&n.parallax.setTranslate())};function P(n,i,t){n===void 0&&(n={});const o=[],a={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},s=(l,u)=>{Array.isArray(l)&&l.forEach(e=>{const p=typeof e.type=="symbol";u==="default"&&(u="container-end"),p&&e.children?s(e.children,u):e.type&&(e.type.name==="SwiperSlide"||e.type.name==="AsyncComponentWrapper")?o.push(e):a[u]&&a[u].push(e)})};return Object.keys(n).forEach(l=>{if(typeof n[l]!="function")return;const u=n[l]();s(u,l)}),t.value=i.value,i.value=o,{slides:o,slots:a}}function ee(n,i,t){if(!t)return null;const o=r=>{let d=r;return r<0?d=i.length+r:d>=i.length&&(d=d-i.length),d},a=n.value.isHorizontal()?{[n.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:s,to:l}=t,u=n.value.params.loop?-i.length:0,e=n.value.params.loop?i.length*2:i.length,p=[];for(let r=u;r<e;r+=1)r>=s&&r<=l&&p.push(i[o(r)]);return p.map(r=>(r.props||(r.props={}),r.props.style||(r.props.style={}),r.props.swiperRef=n,r.props.style=a,g(r.type,{...r.props},r.children)))}const ae={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(n,i){let{slots:t,emit:o}=i;const{tag:a,wrapperTag:s}=n,l=v("swiper"),u=v(null),e=v(!1),p=v(!1),r=v(null),d=v(null),m=v(null),y={value:[]},S={value:[]},C=v(null),E=v(null),x=v(null),O=v(null),{params:b,passedParams:$}=z(n,!1);P(t,y,S),m.value=$,S.value=y.value;const H=()=>{P(t,y,S),e.value=!0};b.onAny=function(c){for(var f=arguments.length,h=new Array(f>1?f-1:0),w=1;w<f;w++)h[w-1]=arguments[w];o(c,...h)},Object.assign(b.on,{_beforeBreakpoint:H,_containerClasses(c,f){l.value=f}});const N={...b};if(delete N.wrapperClass,d.value=new G(N),d.value.virtual&&d.value.params.virtual.enabled){d.value.virtual.slides=y.value;const c={cache:!1,slides:y.value,renderExternal:f=>{u.value=f},renderExternalUpdate:!1};B(d.value.params.virtual,c),B(d.value.originalParams.virtual,c)}A(()=>{!p.value&&d.value&&(d.value.emitSlidesClasses(),p.value=!0);const{passedParams:c}=z(n,!1),f=Y(c,m.value,y.value,S.value,h=>h.props&&h.props.key);m.value=c,(f.length||e.value)&&d.value&&!d.value.destroyed&&W({swiper:d.value,slides:y.value,passedParams:c,changedParams:f,nextEl:C.value,prevEl:E.value,scrollbarEl:O.value,paginationEl:x.value}),e.value=!1}),L("swiper",d),V(u,()=>{Z(()=>{k(d.value)})}),_(()=>{r.value&&(X({el:r.value,nextEl:C.value,prevEl:E.value,paginationEl:x.value,scrollbarEl:O.value,swiper:d.value},b),o("swiper",d.value))}),D(()=>{d.value&&!d.value.destroyed&&d.value.destroy(!0,!1)});function U(c){return b.virtual?ee(d,c,u.value):(c.forEach((f,h)=>{f.props||(f.props={}),f.props.swiperRef=d,f.props.swiperSlideIndex=h}),c)}return()=>{const{slides:c,slots:f}=P(t,y,S);return g(a,{ref:r,class:F(l.value)},[f["container-start"],g(s,{class:K(b.wrapperClass)},[f["wrapper-start"],U(c),f["wrapper-end"]]),j(n)&&[g("div",{ref:E,class:"swiper-button-prev"}),g("div",{ref:C,class:"swiper-button-next"})],M(n)&&g("div",{ref:O,class:"swiper-scrollbar"}),I(n)&&g("div",{ref:x,class:"swiper-pagination"}),f["container-end"]])}}},te={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(n,i){let{slots:t}=i,o=!1;const{swiperRef:a}=n,s=v(null),l=v("swiper-slide"),u=v(!1);function e(d,m,y){m===s.value&&(l.value=y)}_(()=>{!a||!a.value||(a.value.on("_slideClass",e),o=!0)}),J(()=>{o||!a||!a.value||(a.value.on("_slideClass",e),o=!0)}),A(()=>{!s.value||!a||!a.value||(typeof n.swiperSlideIndex<"u"&&(s.value.swiperSlideIndex=n.swiperSlideIndex),a.value.destroyed&&l.value!=="swiper-slide"&&(l.value="swiper-slide"))}),D(()=>{!a||!a.value||a.value.off("_slideClass",e)});const p=Q(()=>({isActive:l.value.indexOf("swiper-slide-active")>=0,isVisible:l.value.indexOf("swiper-slide-visible")>=0,isPrev:l.value.indexOf("swiper-slide-prev")>=0,isNext:l.value.indexOf("swiper-slide-next")>=0}));L("swiperSlide",p);const r=()=>{u.value=!0};return()=>g(n.tag,{class:F(`${l.value}`),ref:s,"data-swiper-slide-index":typeof n.virtualIndex>"u"&&a&&a.value&&a.value.params.loop?n.swiperSlideIndex:n.virtualIndex,onLoadCapture:r},n.zoom?g("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof n.zoom=="number"?n.zoom:void 0},[t.default&&t.default(p.value),n.lazy&&!u.value&&g("div",{class:"swiper-lazy-preloader"})]):[t.default&&t.default(p.value),n.lazy&&!u.value&&g("div",{class:"swiper-lazy-preloader"})])}};export{ae as S,te as a};