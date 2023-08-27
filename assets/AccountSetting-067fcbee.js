import{_ as g,m as l,a as u,b as d,r as p,o as e,c as o,d as t,f as r,g as f,t as v,n as _,e as b,w as y,j as a,p as k,i as S}from"./index-0ca412f5.js";import{l as c}from"./logInStore-2fc2d6cc.js";import{d as m}from"./dataStore-fa81ee19.js";import{_ as w}from"./預設大頭貼-17961667.js";import{_ as C}from"./LOGO-36e2187d.js";import{_ as x}from"./google-icon-3c1afa8b.js";const I="/music_tutor/assets/facebook-icon-7b6431a9.png",j="/music_tutor/assets/github-icon-d83ddf4e.png";const P={computed:{...l(m,["user","teacherData"]),...l(c,["userProviderData","ProviderState"]),...u(c,["AccountSettingState"])},methods:{...d(m,["onAuthStateChanged"]),...d(c,["signInWithGoogle","signInWithFacebook","signInWithGithub","getCurrentUser","updateUserEmail","sendEmailVerification","sendPasswordResetEmail"])},created(){this.onAuthStateChanged(),this.getCurrentUser()}},n=s=>(k("data-v-2a223133"),s=s(),S(),s),D={class:"container"},G={class:"row my-16"},A={class:"col-12 col-lg-3 d-flex flex-column align-items-center mb-32 py-32 shadow h-100"},N={class:"user-photo position-relative mb-16"},V=["src"],E={key:1,src:w,alt:"預設大頭照"},W={class:"mb-8 fs-3 fw-bold position-relative"},$=n(()=>t("button",{type:"button",class:"btn btn-primary mt-48"}," 編輯個人資料 ",-1)),B={class:"col-12 col-md-9"},F=n(()=>t("div",{class:"mb-16 shadow"},null,-1)),L={class:"table table-hover align-middle px-8 shadow"},R={class:"d-flex justify-content-between align-items-center"},U={class:"d-flex align-items-center"},H=n(()=>t("div",{class:"login-logo d-flex justify-content-center align-items-center"},[t("img",{src:C,alt:"樂樂LOGO"})],-1)),M={class:"ms-32"},O={key:0,class:"fs-6"},z={key:1,class:"fs-6"},T={class:""},q={class:"d-flex justify-content-between align-items-center"},J={class:"d-flex align-items-center"},K=n(()=>t("div",{class:"login-logo d-flex justify-content-center align-items-center"},[t("img",{src:x,alt:"google-icon"})],-1)),Q={class:"ms-32"},X={key:0,class:"fs-6"},Y={key:1,class:"fs-6"},Z={class:""},tt={class:"d-flex justify-content-between align-items-center"},st={class:"d-flex align-items-center"},et=n(()=>t("div",{class:"login-logo d-flex justify-content-center align-items-center"},[t("img",{src:I,alt:"facebook-icon"})],-1)),ot={class:"ms-32"},it={key:0,class:"fs-6"},nt={key:1,class:"fs-6"},at={class:""},ct={class:"d-flex justify-content-between align-items-center"},lt={class:"d-flex align-items-center"},dt={class:"login-logo d-flex justify-content-center align-items-center"},rt={class:"ms-32"},_t={key:0,class:"fs-6"},mt={key:1,class:"fs-6"},ht={class:""},gt=n(()=>t("div",{class:""},null,-1));function ut(s,i,pt,ft,vt,bt){const h=p("RouterLink");return e(),o("div",D,[t("div",G,[t("div",A,[t("div",N,[s.teacherData.teacherImg?(e(),o("img",{key:0,src:s.teacherData.teacherImg,alt:"大頭照"},null,8,V)):r("",!0),s.teacherData.teacherImg?r("",!0):(e(),o("img",E))]),t("div",W,[f(v(s.teacherData.displayName)+" ",1),t("i",{class:_(s.teacherData.gender)},null,2)]),b(h,{to:"/MemberPage"},{default:y(()=>[$]),_:1})]),t("div",B,[F,t("table",L,[t("tbody",null,[t("tr",null,[t("td",null,[t("div",R,[t("div",U,[H,t("div",M,[s.ProviderState.password?(e(),o("p",z,"已連結樂樂帳號")):(e(),o("p",O,"尚未建立樂樂帳號"))])]),t("div",T,[t("a",{href:"#",onClick:i[0]||(i[0]=a(()=>{},["prevent"]))}," 建立並連結帳號 ")])])])]),t("tr",null,[t("td",null,[t("div",q,[t("div",J,[K,t("div",Q,[s.ProviderState.google?(e(),o("p",Y,"已連結Google帳號")):(e(),o("p",X,"尚未連結Google帳號"))])]),t("div",Z,[t("a",{href:"#",onClick:i[1]||(i[1]=a(()=>{},["prevent"]))}," 建立並連結帳號 ")])])])]),t("tr",null,[t("td",null,[t("div",tt,[t("div",st,[et,t("div",ot,[s.ProviderState.facebook?(e(),o("p",nt,"已連結Facebook帳號")):(e(),o("p",it,"尚未連結Facebook帳號"))])]),t("div",at,[t("a",{href:"#",onClick:i[2]||(i[2]=a(()=>{},["prevent"]))}," 建立並連結帳號 ")])])])]),t("tr",null,[t("td",null,[t("div",ct,[t("div",lt,[t("div",dt,[t("img",{src:j,alt:"github-icon",class:_({"filter-grayscale":!s.ProviderState.github})},null,2)]),t("div",rt,[s.ProviderState.github?(e(),o("p",mt,"已連結GitHub帳號")):(e(),o("p",_t,"尚未連結GitHub帳號"))])]),t("div",ht,[t("a",{href:"#",onClick:i[3]||(i[3]=a(()=>{},["prevent"]))}," 建立並連結帳號 ")])])])])])]),gt])])])}const It=g(P,[["render",ut],["__scopeId","data-v-2a223133"]]);export{It as default};