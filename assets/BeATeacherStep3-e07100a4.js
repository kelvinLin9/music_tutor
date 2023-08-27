import{_ as h,m as u,a as p,b as r,o as i,c as l,d as e,t as o,g as a,F as _,k as b,f as m,p as f,i as v}from"./index-2990d3d4.js";import{d}from"./dataStore-0fb51918.js";import{g}from"./goStore-01a49b73.js";import{b as y}from"./bannerStore-df778272.js";import"./logInStore-aa424131.js";const S={computed:{...u(d,["beATeacherData","teacherData"]),...p(d,["createCourseStep"])},methods:{...r(g,["goBeATeacherStep2","goBeATeacherStep4"]),...r(d,["SetFirebaseCourseData"]),...r(y,["getBannerInfo"])},created(){this.getBannerInfo(new URL("/music_tutor/assets/banner-aea474d0.jpg",self.location).href,"PREVIEW","頁面預覽 ","一探學習體驗，預覽您的課程頁面，確保效果完美呈現"),this.createCourseStep=3}},t=s=>(f("data-v-5586dca9"),s=s(),v(),s),T={class:"container w-75"},A={class:"row"},D={class:"col-12 col-lg-8"},w=["src"],B={class:"col-12 col-lg-4 d-flex flex-column"},I={class:"fs-2 fw-bold"},k={class:""},N={class:"container my-48 w-75"},C={class:"row align-items-center"},$={class:"col-12 col-lg-8"},j={class:"row align-items-center"},F={class:"col-2"},V=["src"],E={class:"col-10 fs-2"},L={class:"row my-3"},R={class:"col-10"},W={class:"row my-3"},M=t(()=>e("p",null,"關於課程",-1)),P={class:"col-auto"},U={class:"d-flex align-items-center"},q=t(()=>e("i",{class:"bi bi-clock me-2"},null,-1)),z=t(()=>e("br",null,null,-1)),G={class:"col-auto"},H={class:"d-flex align-items-center"},J=t(()=>e("i",{class:"bi bi-tools me-2"},null,-1)),K=t(()=>e("br",null,null,-1)),O={key:0,class:"col-auto"},Q={class:"d-flex align-items-center"},X=t(()=>e("i",{class:"bi bi-geo-alt me-2"},null,-1)),Y=t(()=>e("br",null,null,-1)),Z={class:"col-12 col-lg-4 p-4 border"},x=t(()=>e("h4",{class:"border-bottom pb-2"},"購買單堂課程",-1)),ee={class:"mb-3"},se=t(()=>e("span",{class:"fs-5"},"售價",-1)),te={class:"fs-1"},oe=t(()=>e("div",{class:"d-flex justify-content-between"},[e("button",{type:"button",class:"btn btn-outline-danger w-75"}," 立即購買 "),e("button",{type:"button",class:"btn btn-danger"},[e("i",{class:"bi bi-cart-fill"})])],-1)),ae={class:"row justify-content-center mt-48"},ce={class:"col-12 d-flex justify-content-between"};function ne(s,c,ie,le,re,de){return i(),l(_,null,[e("div",T,[e("div",A,[e("div",D,[e("img",{src:s.beATeacherData.courseImg,alt:"課程照片"},null,8,w)]),e("div",B,[e("p",I,o(s.beATeacherData.courseName),1),e("p",k,o(s.beATeacherData.courseIntro),1)])])]),e("div",N,[e("div",C,[e("div",$,[e("div",j,[e("div",F,[e("img",{src:s.teacherData.teacherImg,alt:"老師照片",class:"user-photo"},null,8,V)]),e("div",E,o(s.teacherData.displayName),1)]),e("div",L,[e("div",R,o(s.teacherData.teacherIntro),1)]),e("div",W,[M,e("div",P,[e("div",U,[q,a(" 課程時長"),z,a(o(s.beATeacherData.time)+"分鐘 ",1)])]),e("div",G,[e("div",H,[J,e("div",null,[a(" 上課方式"),K,(i(!0),l(_,null,b(s.beATeacherData.courseMethod,n=>(i(),l("span",{class:"bg-info rounded-2 px-2 me-2",key:n},o(n),1))),128))])])]),s.beATeacherData.cityName?(i(),l("div",O,[e("div",Q,[X,a(" 上課地點"),Y,a(" "+o(s.beATeacherData.cityName),1)])])):m("",!0)])]),e("div",Z,[x,e("div",ee,[se,e("span",te,"NT$"+o(s.beATeacherData.price),1)]),oe])]),e("div",ae,[e("div",ce,[e("button",{type:"button",class:"btn btn-outline-primary",onClick:c[0]||(c[0]=n=>s.goBeATeacherStep2())},"   上一步   "),e("button",{type:"button",class:"btn btn-primary",onClick:c[1]||(c[1]=n=>(s.goBeATeacherStep4(),s.SetFirebaseCourseData()))},"   下一步   ")])])])],64)}const me=h(S,[["render",ne],["__scopeId","data-v-5586dca9"]]);export{me as default};
