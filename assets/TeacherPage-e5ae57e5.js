import{_ as m,m as _,a as p,b as h,o,c as r,e,t as a,g as n,h as c,n as s,q as u,p as b,j as g}from"./index-71fb2b27.js";import{l as f}from"./logInStore-a072058a.js";import"./goStore-f8b5a3d1.js";import{d as i}from"./dataStore-5642a1eb.js";import{_ as T}from"./預設大頭貼-17961667.js";import"./cartStore-d10a1686.js";const D={data(){return{uid:"",defaultCkeditorImg:"https://i.imgur.com/EjLcauL.jpg"}},computed:{..._(i,["user","isMember","otherTeacherData"]),...p(i,[])},methods:{...h(f,["signOut"]),...h(i,["onAuthStateChanged","getOneTeacherFirebaseData"])},created(){this.onAuthStateChanged(),this.uid=this.$route.params.TeacherPageId,this.getOneTeacherFirebaseData(this.uid)}},d=t=>(b("data-v-bbdc56c6"),t=t(),g(),t),v={class:"container"},k={class:"row test"},y={class:"col-12 col-md-4 d-flex flex-column justify-content-center align-items-center mt-3"},I={class:"user-photo position-relative"},S=["src"],w={key:1,src:T,alt:"預設大頭照"},C={class:"mb-2 fs-2"},N={class:"mb-2 w-100"},j=d(()=>e("i",{class:"bi bi-envelope-fill"},null,-1)),$={class:"mb-2 w-100"},A=d(()=>e("i",{class:"bi bi-telephone-fill"},null,-1)),B={class:"mb-2 w-100"},O=d(()=>e("p",{class:""},"自我介紹：",-1)),P={class:"border border-secondary rounded-4 p-3"},V={class:"d-flex justify-content-around w-75 mb-2"},z=["href"],E=["href"],F=["href"],L={class:"col-12 col-md-8"};function q(t,M,W,G,l,H){return o(),r("div",v,[e("h1",null,a(t.otherTeacherData.displayName)+" 老師的頁面",1),e("div",k,[e("div",y,[e("div",I,[t.otherTeacherData.teacherImg?(o(),r("img",{key:0,src:t.otherTeacherData.teacherImg,alt:"大頭照"},null,8,S)):n("",!0),t.otherTeacherData.teacherImg?n("",!0):(o(),r("img",w))]),e("div",C,[c(a(t.otherTeacherData.displayName)+" ",1),e("i",{class:s(t.otherTeacherData.gender)},null,2)]),e("div",N,[j,c("："+a(t.otherTeacherData.email),1)]),e("div",$,[A,c("："+a(t.otherTeacherData.phoneNumber),1)]),e("div",B,[O,e("p",P,a(t.otherTeacherData.teacherIntro),1)]),e("div",V,[e("a",{href:t.otherTeacherData.facebook,target:"_black"},[e("i",{class:s(["bi bi-facebook fs-3 text-secondary",{"text-blue":t.otherTeacherData.facebook}])},null,2)],8,z),e("a",{href:t.otherTeacherData.instagram,target:"_black"},[e("i",{class:s(["bi bi-instagram fs-3 text-secondary",{"text-danger":t.otherTeacherData.instagram}])},null,2)],8,E),e("a",{href:t.otherTeacherData.discord,target:"_black"},[e("i",{class:s(["bi bi-discord fs-3 text-secondary",{"text-purple":t.otherTeacherData.discord}])},null,2)],8,F)])]),e("div",L,[e("div",{class:"ckeditor-img position-relative border test",style:u({"background-image":`url(${t.otherTeacherData.ckeditorImg||l.defaultCkeditorImg})`})},null,4)])])])}const Y=m(D,[["render",q],["__scopeId","data-v-bbdc56c6"]]);export{Y as default};
