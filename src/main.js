import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入 VeeValidate 元件跟功能
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

import { register } from 'swiper/element/bundle';


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/scss/all.scss";
// 金額
import { currency } from './methods/filters'

//引入SweetAlert及其附帶的css
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// sweetalert2
const options = {
  confirmButtonColor: 'rgba(168, 128, 48, 1)',
  cancelButtonColor: 'rgba(108, 117, 125, 1)'
}

//firebase
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyBurMB5RDdvNOV8jMh0M6zi4gNx8r5xNyU",
  authDomain: "music-tutor-909ea.firebaseapp.com",
  projectId: "music-tutor-909ea",
  storageBucket: "music-tutor-909ea.appspot.com",
  messagingSenderId: "653538731223",
  appId: "1:653538731223:web:7d9fdd8b43e991ab6bfc92",
  measurementId: "G-D8YY5SWYN2"
};
initializeApp(firebaseConfig)








const app = createApp(App)

app.config.globalProperties.$filters = {
  currency
}


app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2, options)
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);
app.use(register);
app.mount('#app')
