import{C as B}from"./CoursesLoadingList-e7d8ad3b.js";import{a as h,m as y,b as u,_ as C,r as m,o,c as s,d as t,h as g,f as l,e as P,w as I,u as v,v as W,F as f,k as D,t as n,p as A,i as N,x as L}from"./index-0ca412f5.js";import{c}from"./logInStore-2fc2d6cc.js";import{d as p}from"./dataStore-fa81ee19.js";import{g as R}from"./goStore-960b6698.js";import{B as U}from"./BannerCom-3a208c07.js";import{b as j}from"./bannerStore-dbe28613.js";const F={components:{CoursesLoadingList:B},computed:{...h(c,["cartCheckboxWrap","payWrap","checkAllValue"]),...h(p,["studentData","user","userCartCourses","couponData"]),...y(c,["cartTotal","couponValue"]),...y(p,["loading"])},methods:{...u(c,["deleteCart","addToPayWrap","checkAll"]),...u(p,["onAuthStateChanged"]),...u(R,["goCoursePage"])},created(){}},$=e=>(A("data-v-360ae9e4"),e=e(),N(),e),O={class:"col-12 col-lg-8 me-auto"},M={key:0,class:"text-center mt-48"},E=$(()=>t("p",{class:"fs-2 fw-bold"},"購物車無任何品項",-1)),H=$(()=>t("button",{type:"button",class:"btn btn-outline-primary mt-16"}," 繼續購物 ",-1)),K={key:1,class:"col-12 col-lg-8 mx-auto mb-3 border rounded-2 h-100"},Y={class:"table table-hover align-middle"},q={width:"",class:"",colspan:"4"},z={class:"form-check align-items-center"},G=$(()=>t("label",{for:"checkAll",class:"text-primary fs-5"},"全選",-1)),J={width:"8%",class:""},Q={class:"form-check"},X=["id","value"],Z=["for"],x=["onClick"],ee={class:"table-image cursor-pointer"},te=["src"],oe={width:"60%"},se={class:"container g-0"},ae={class:"row align-items-center g-0"},ne={class:"col-12 col-lg-8"},re={class:"fs-5 fw-bold lh-1"},le={class:"col-12 col-lg-4 text-lg-end"},ce={key:0},de={key:1},ie={key:2,class:"fs-8 text-delete text-decoration-line-through"},ue={width:"7%",class:"text-end"},pe=["onClick"],he=$(()=>t("i",{class:"bi bi-trash3-fill"},null,-1)),_e=[he];function me(e,a,w,T,V,S){const d=m("CoursesLoadingList"),_=m("RouterLink");return o(),s(f,null,[t("div",O,[e.loading?(o(),g(d,{key:0})):l("",!0)]),e.studentData.myCart.length===0&&!e.loading?(o(),s("div",M,[E,P(_,{to:"/AllCourses"},{default:I(()=>[H]),_:1})])):l("",!0),e.studentData.myCart.length!==0&&!e.loading?(o(),s("div",K,[t("table",Y,[t("thead",null,[t("tr",null,[t("th",q,[t("div",z,[v(t("input",{class:"form-check-input me-3",type:"checkbox",id:"checkAll",name:"checkAll",value:"",onClick:a[0]||(a[0]=r=>e.checkAll()),"onUpdate:modelValue":a[1]||(a[1]=r=>e.checkAllValue=r)},null,512),[[W,e.checkAllValue]]),G])])])]),t("tbody",null,[(o(!0),s(f,null,D(e.userCartCourses,(r,i)=>(o(),s("tr",{key:r.timestamp},[t("td",J,[t("div",Q,[v(t("input",{class:"form-check-input",type:"checkbox",id:r.timestamp,value:i,name:"courseMethod1","onUpdate:modelValue":a[2]||(a[2]=b=>e.cartCheckboxWrap=b)},null,8,X),[[W,e.cartCheckboxWrap]]),t("label",{for:r.timestamp},null,8,Z)])]),t("td",{width:"12%",onClick:b=>e.goCoursePage(r[0].id)},[t("div",ee,[t("img",{src:r[0].data.courseImg,alt:"課程圖片",class:""},null,8,te)])],8,x),t("td",oe,[t("div",se,[t("div",ae,[t("div",ne,[t("div",re,n(r[0].data.courseName),1)]),t("div",le,[e.couponValue==1?(o(),s("p",ce," NT$ "+n(e.$filters.currency(r[0].data.price)),1)):l("",!0),e.couponValue!=1?(o(),s("p",de," NT$ "+n(e.$filters.currency(r[0].data.price*e.couponValue)),1)):l("",!0),e.couponValue!=1?(o(),s("p",ie," NT$ "+n(e.$filters.currency(r[0].data.price)),1)):l("",!0)])])])]),t("td",ue,[t("div",{class:"cursor-pointer",onClick:b=>e.deleteCart(e.user.uid,r.timestamp,i)},_e,8,pe)])]))),128))])])])):l("",!0)],64)}const ye=C(F,[["render",me],["__scopeId","data-v-360ae9e4"]]);const fe={computed:{...h(c,["cartCheckboxWrap","payWrap"]),...h(p,["studentData","user","userCartCourses","couponData"]),...y(c,["cartTotal","couponValue"])},methods:{...u(c,["deleteCart","addToPayWrap"]),...u(p,["onAuthStateChanged","getOneCoursesFirebaseData"])},created(){}},$e={class:"col-12 col-lg-8 mx-auto mb-3 border rounded-2"},be={class:"my-3 pb-2 ps-3 ms-1 border-bottom fs-3 fw-bold text-secondary"},ge={class:"table table-hover align-middle"},ve={class:"container"},Ce={class:"row"},ke={class:"col-12 col-lg-8"},we={class:"col-12 col-lg-4 text-lg-end"},Te={key:0},Ve={key:1},Se={key:2,class:"fs-8 text-delete text-decoration-line-through"};function We(e,a,w,T,V,S){return o(),s("div",$e,[t("div",be," 總共"+n(e.payWrap.payData.length)+"件 ",1),t("table",ge,[t("tbody",null,[(o(!0),s(f,null,D(e.payWrap.payData,(d,_)=>(o(),s("tr",{key:_},[t("td",null,[t("div",ve,[t("div",Ce,[t("div",ke,n(d.courseName),1),t("div",we,[e.couponValue==1?(o(),s("p",Te," NT$ "+n(e.$filters.currency(d.price)),1)):l("",!0),e.couponValue!=1?(o(),s("p",Ve," NT$ "+n(e.$filters.currency(d.price*e.couponValue)),1)):l("",!0),e.couponValue!=1?(o(),s("p",Se," NT$ "+n(e.$filters.currency(d.price)),1)):l("",!0)])])])])]))),128))])])])}const Pe=C(fe,[["render",We],["__scopeId","data-v-8b7c3a86"]]);const De={components:{CartCom:ye,PayCom:Pe,BannerCom:U},watch:{cartPageState(){this.cartPageState==="cart"?this.getBannerInfo(new URL("/music_tutor/assets/banner-aea474d0.jpg",self.location).href,"購物車","CART","年底前輸入『 2023666 』享六折優惠"):this.getBannerInfo(new URL("/music_tutor/assets/banner-aea474d0.jpg",self.location).href,"結帳","CHECKOUT","YO~")}},computed:{...h(c,["cartCheckboxWrap","payWrap","cartPageState","couponCode"]),...h(p,["studentData","user","userCartCourses","couponData"]),...y(c,["cartTotal","couponValue"])},methods:{...u(c,["deleteCart","addToPayWrap","addCouponCode","confirmToPay"]),...u(p,["onAuthStateChanged","getOneCoursesFirebaseData"]),...u(j,["getBannerInfo"])},created(){this.cartPageState="cart",this.onAuthStateChanged(),this.getBannerInfo(new URL("/music_tutor/assets/banner-aea474d0.jpg",self.location).href,"購物車","CART","年底前輸入『 2023666 』享六折優惠")}},k=e=>(A("data-v-70c3bef8"),e=e(),N(),e),Ae={class:"container mt-3"},Ne={class:"row"},Be={key:2,class:"col-12 col-lg-4 mb-3 px-0 px-lg-3"},Ie={class:"card"},Le=k(()=>t("div",{class:"card-header"},[t("p",null,"訂單明細")],-1)),Re={class:"card-body"},Ue={class:"d-flex justify-content-between"},je={key:0,class:"text-end fs-6 text-primary"},Fe={class:"text-end fs-2"},Oe={class:"card-footer"},Me={class:"row mb-2 align-items-center"},Ee={class:"col-8 pe-0"},He={class:"col-4 text-end"},Ke={key:3,class:"col-12 col-lg-4 mb-3 px-0 px-lg-3"},Ye={class:"card"},qe=k(()=>t("div",{class:"card-header"},[t("p",null,"訂單明細")],-1)),ze={class:"card-body"},Ge={class:"d-flex justify-content-between"},Je={key:0,class:"text-end fs-6 text-primary"},Qe={class:"text-end fs-2"},Xe={class:"card-footer"},Ze=k(()=>t("div",{class:"text-primary fs-8 mb-2 fw-bold"}," 我已詳閱並同意〈服務契約〉及服務內容 ",-1)),xe={class:"row g-0"};function et(e,a,w,T,V,S){const d=m("BannerCom"),_=m("pay-com"),r=m("cart-com");return o(),s(f,null,[P(d),t("div",Ae,[t("div",Ne,[e.cartPageState==="pay"?(o(),g(_,{key:0})):l("",!0),e.cartPageState==="cart"?(o(),g(r,{key:1})):l("",!0),e.cartPageState==="cart"&&e.studentData.myCart.length!==0?(o(),s("div",Be,[t("div",Ie,[Le,t("div",Re,[t("div",Ue,[t("p",null,n(e.cartCheckboxWrap.length)+"件小計",1),t("p",null,"NT$ "+n(e.$filters.currency(e.cartTotal())),1)]),e.couponValue!=1?(o(),s("div",je,[t("p",null,"折扣 - "+n(e.$filters.currency(e.cartTotal()-e.cartTotal()*e.couponValue)),1)])):l("",!0),t("div",Fe,[t("p",null,"NT$ "+n(e.$filters.currency(e.cartTotal()*e.couponValue)),1)])]),t("div",Oe,[t("div",Me,[t("div",Ee,[v(t("input",{class:"col-form-label w-100 py-1 fs-7",type:"text",id:"coupon",name:"coupon",placeholder:"請輸入折扣碼","onUpdate:modelValue":a[0]||(a[0]=i=>e.couponCode=i)},null,512),[[L,e.couponCode]])]),t("div",He,[t("button",{type:"button",class:"btn btn-sm btn-secondary w-100",onClick:a[1]||(a[1]=i=>e.addCouponCode())}," 確認 ")])]),t("button",{type:"button",class:"btn btn-primary w-100",onClick:a[2]||(a[2]=i=>e.addToPayWrap())}," 來去結帳 ")])])])):l("",!0),e.cartPageState==="pay"?(o(),s("div",Ke,[t("div",Ye,[qe,t("div",ze,[t("div",Ge,[t("p",null,n(e.payWrap.payData.length)+"件小計",1),t("p",null,"NT$ "+n(e.$filters.currency(e.payWrap.total)),1)]),e.couponValue!=1?(o(),s("div",Je,[t("p",null,"折扣 - "+n(e.$filters.currency(e.payWrap.total-e.payWrap.total*e.couponValue)),1)])):l("",!0),t("div",Qe,[t("p",null,"NT$ "+n(e.$filters.currency(e.payWrap.total*e.couponValue)),1)])]),t("div",Xe,[Ze,t("div",xe,[t("button",{type:"button",class:"btn btn-secondary col-5",onClick:a[3]||(a[3]=i=>(e.cartPageState="cart",e.payWrap.payData=[]))}," 重新選擇 "),t("button",{type:"button",class:"btn btn-primary col-5 ms-auto",onClick:a[4]||(a[4]=i=>e.confirmToPay())}," 同意並送出 ")])])])])):l("",!0)])])],64)}const ct=C(De,[["render",et],["__scopeId","data-v-70c3bef8"]]);export{ct as default};
