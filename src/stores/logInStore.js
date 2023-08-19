import { defineStore } from 'pinia'
import router from '../router'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
         onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup,
         updateProfile, updateEmail, sendEmailVerification, 
         updatePassword, sendPasswordResetEmail, signOut
        } from 'firebase/auth'
import dataStore from './dataStore';
import cartStore from './cartStore';
import moment from 'moment'

import Swal from 'sweetalert2/dist/sweetalert2'



const auth = getAuth();
const data = dataStore()
const cart = cartStore()
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


export default defineStore('logInStore', {
  state: () => ({
    logInPage: true,
    logInForm: {
      user: {
        email: '',
        password: '',
      },
    },
    signUpForm: {
      user: {
        displayName: '',
        email: '',
        password: '',
        confirmation: ''
      },
    },
    AccountSettingState: false,
    CurrentUser:[]
  }),
  actions: {
   signOut() {
    signOut(auth)
    data.courseData={}
    data.user = {}
    data.isMember = false
    data.teacherData = {
      uid: '',
      accountCreateTime: '',
      lastLogInTime: '',
      email: '',
      displayName: '',
      teacherImg: '',
      gender: '',
      birthday: '',
      address: '',
      phoneNumber:'',
      teachArea: [],
      teacherIntro: '',
      ckeditor: '',
      ckeditorImg:'',
      instagram: '',
      facebook: '',
      discord: '',
      expertise: '',
      educationalBackground: '',
      myTeachCourses:[],
      language: [],
      musicStyle:[], 
      allTeachTime:0,
      studentAssess:[]
    },
    data.studentData = {
      myStudyCourses:[],
      myCart:[],
      payHistory:[],
      allStudyTime:0,
      myBookmarkCourses:[],
      myBookmarkTeacher:[],
    }
    // data.teacher = {
    //   uid: '',
    //   accountCreateTime: '',
    //   lastLogInTime: '',
    //   email: '',
    //   displayName: '',
    //   teacherImg: '',
    //   gender: '',
    //   birthday: '',
    //   address: '',
    //   phoneNumber:'',
    //   teachArea: [],
    //   teacherIntro: '',
    //   instagram: '',
    //   facebook: '',
    //   discord: '',
    //   expertise: '',
    //   educationalBackground: '',
    //   myTeachCourses:[],
    //   language: [],
    //   musicStyle:[], 
    //   allTeachTime:0,
    //   studentAssess:[]
    // }
    data.AllCoursesFirebaseData = []
    data.otherTeacherData = []
    data.beATeacherData = {
      uid: '',
      displayName: '',
      gender: '',
      courseImg: '',
      courseName: '',
      courseIntro: '',
      courseCategory: '',
      courseMethod: [],      
      cityName: '',
      time: 0,
      price: 0,
      timestamp:'',
    }
    data.couponData=[]
    data.userTeacherCourses=[]
    data.userStudentCourses=[]
    data.userBookmarkCourses=[]
    data.userCartCourses=[]
    data.top6courses=[]
    data.youLikeCourses =[]
    // 購物車
    cart.couponCode = '',
    cart.couponValue = 1,
    cart.cartCheckboxWrap = [],
    cart.payWrap = {
      payData:[],
      total:0,
      finalTotal:0,
      couponUse:''
    }
    

    router.push('/UserLogin')
    
   },
   logIn() {
    signInWithEmailAndPassword(auth, this.logInForm.user.email, this.logInForm.user.password)
    .then(() => {
      data.isMember = true
      this.logInForm.user.email = ''
      this.logInForm.user.password = ''
      router.push('/')
      Toast.fire({
        icon: 'success',
        title: '恭喜登入成功'
      })
    })
    .catch((err) => {
      Toast.fire(err.message)
    })
   },
   async signUp () {
    await createUserWithEmailAndPassword(auth, this.signUpForm.user.email, this.signUpForm.user.password)
    .then((res) => {
      console.log(res.user)
      data.user = res.user
      // 只有用戶名要跟google登入用不同方式取得
      data.teacherData.displayName = this.signUpForm.user.displayName
      Toast.fire({
        icon: 'success',
        title: '恭喜註冊成功'
      })
      this.logInPage = true
      this.signUpForm.user.displayName = ''
      this.signUpForm.user.email = ''
      this.signUpForm.user.password = ''
      this.signUpForm.user.confirmation = ''
      data.SetFirebaseMemberData()
    })
    .catch((err) => {
      Toast.fire({
        icon: 'success',
        title: err
      })
    })  
  },


  async signInWithGoogle () {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((res) => {
      data.user = res.user
      data.isMember = true
      // 判斷是在登入還是驗證
      console.log(this.AccountSettingState)
      if (this.AccountSettingState) {
        Toast.fire({
          timer: 3000,
          icon: 'success',
          title: `Google帳號驗證成功，歡迎${res.user.displayName} `,
        })
        this.AccountSettingState = false
      } else {
        Toast.fire({
          timer: 3000,
          icon: 'success',
          title: `登入成功，歡迎${res.user.displayName} `,
          text: `上次登入時間：${moment(res.user.metadata.lastSignInTime).format('YYYY/MM/DD')}`,
        })
        // 判斷如果是第一次登入，建立一份老師學生端物件上傳
        if(res.user.metadata.creationTime === res.user.metadata.lastSignInTime) {
          console.log("第一次登入")
          data.teacherData.displayName = res.user.displayName
          data.SetFirebaseMemberData()
        } else {
          router.push('/')
        }
      }
    })
    .catch((err) => {
      Toast.fire({
        icon: 'error',
        title: err
      })
    })
   },

   async signInWithFacebook () {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((res) => {
      data.user = res.user
      data.isMember = true
      // 判斷是在登入還是驗證
      console.log(this.AccountSettingState)
      if (this.AccountSettingState) {
        Toast.fire({
          timer: 3000,
          icon: 'success',
          title: `Facebook帳號驗證成功，歡迎${res.user.displayName} `,
        })
        this.AccountSettingState = false
      } else {
        Toast.fire({
          timer: 3000,
          icon: 'success',
          title: `登入成功，歡迎${res.user.displayName} `,
          text: `上次登入時間：${moment(res.user.metadata.lastSignInTime).format('YYYY/MM/DD')}`,
        })
        // 判斷如果是第一次登入，建立一份老師學生端物件上傳
        if(res.user.metadata.creationTime === res.user.metadata.lastSignInTime) {
          console.log("第一次登入")
          data.teacherData.displayName = res.user.displayName
          data.SetFirebaseMemberData()
        } else {
          router.push('/')
        }
      }
    })
    .catch((err) => {
      Toast.fire({
        icon: 'error',
        title: err
      })
    })




   },

   async signInWithGithub () {
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
    .then((res) => {
      data.user = res.user
      data.isMember = true
      // 判斷是在登入還是驗證
      console.log(this.AccountSettingState)
      if (this.AccountSettingState) {
        Toast.fire({
          timer: 3000,
          icon: 'success',
          title: `Google帳號驗證成功，歡迎${res.user.displayName} `,
        })
        this.AccountSettingState = false
      } else {
        Toast.fire({
          timer: 3000,
          icon: 'success',
          title: `登入成功，歡迎${res.user.displayName} `,
          text: `上次登入時間：${moment(res.user.metadata.lastSignInTime).format('YYYY/MM/DD')}`,
        })
        // 判斷如果是第一次登入，建立一份老師學生端物件上傳
        if(res.user.metadata.creationTime === res.user.metadata.lastSignInTime) {
          console.log("第一次登入")
          data.teacherData.displayName = res.user.displayName
          data.SetFirebaseMemberData()
        } else {
          router.push('/')
        }
      }
    })
    .catch((err) => {
      Toast.fire({
        icon: 'error',
        title: err
      })
    })
   },



   // 取得當前登入者資料(只有自己)，登出後，它也不會改變。
   getCurrentUser () {
    const user = auth.currentUser;
    console.log(user)
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      // const displayName = user.displayName;
      // const email = user.email;
      // const photoURL = user.photoURL;
      // const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      // const uid = user.uid;
    }
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
   },
   // 設置用戶的電子郵件地址
   // 要設置用戶的電子郵件地址，用戶必須最近登錄過
   updateUserEmail() {
    const user = auth.currentUser;
    console.log(user)
    updateEmail(user, "kelvin80121@hotmail.com").then((res) => {
      // Email updated!
      console.log(res)
    }).catch((err) => {
      console.log(err)
      // An error occurred
      // ...
    });
   },
   // 向用戶發送驗證電子郵件
   sendEmailVerification () {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log('送出驗證信')
    });
   },
   // 發送密碼重置郵件
   sendPasswordResetEmail() {
    sendPasswordResetEmail(auth, data.user.email)
    .then(() => {
      console.log('Password reset email sent!')
      // Password reset email sent!
      // ..
    })
    .catch((err) => {
      console.log(err)
      // const errorCode = err.code;
      // const errorMessage = err.message;
      // ..
    });
   },
  }
})