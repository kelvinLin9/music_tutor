import { defineStore } from 'pinia'
import router from '../router'
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
         onAuthStateChanged,
         GoogleAuthProvider,
         signInWithPopup,
         updateProfile,
         signOut
        } from 'firebase/auth'
import dataStore from './dataStore';


const auth = getAuth();
const data = dataStore()

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
  }),
  actions: {
   signOut() {
    signOut(auth)
    data.user = {}
    data.isMember = false
    data.studentData = {
      myStudyCourses:[],
      myStudyCoursesDown:[],
      myCart:[],
      allStudyTime:0,
      myBookmarkCourses:[],
      myBookmarkTeacher:[],
    }
    data.teacher = {
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
    }
    data.AllCoursesFirebaseData = []
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

    router.push('/UserLogin')
    
   },
   logIn() {
    signInWithEmailAndPassword(auth, this.logInForm.user.email, this.logInForm.user.password)
    .then(() => {
      data.isMember = true
      this.logInForm.user.email = ''
      this.logInForm.user.password = ''
      router.push('/')
      alert('恭喜登入成功')
    })
    .catch((err) => {
      alert(err.message)
    })
   },
   async signUp () {
    await createUserWithEmailAndPassword(auth, this.signUpForm.user.email, this.signUpForm.user.password)
    .then((res) => {
      console.log(res)
      this.logInPage = true
      alert('恭喜註冊成功')
    })
    .catch((err) => {
      alert(err)
    })  
    // 更新自訂名字到user&清除暫存表單資料
    updateProfile(auth.currentUser, {
      displayName: this.signUpForm.user.displayName
    }).then(() => { 
      this.signUpForm.user.displayName = ''
      this.signUpForm.user.email = ''
      this.signUpForm.user.password = ''
      this.signUpForm.user.confirmation = ''
      // 建立一份老師學生端物件上傳
      data.SetFirebaseMemberData()
      router.push('/')
    }).catch(() => {
      alert('更新名字失敗')
    });
   },



   signInWithGoogle () {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user)
      router.push('/')
      data.isMember = true
      alert (res.user.uid,"登入成功")
      // 判斷如果是第一次登入，建立一份老師學生端物件上傳
      if(res.user.metadata.createdAt === res.user.metadata.lastLoginAt) {
        console.log("第一次登入")
        data.SetFirebaseMemberData()
      }
    })
    .catch((err) => {
      alert(err)
    })
   }
  }
})