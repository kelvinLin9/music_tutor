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
      myStudyCoursesDown:[],
      myCart:[],
      payHistory:[],
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
    data.userCartCourses=[],
    

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
      console.log(res.user)
      data.user = res.user
      // 只有用戶名要跟google登入用不同方式取得
      data.teacherData.displayName = this.signUpForm.user.displayName
      alert('恭喜註冊成功')
      this.logInPage = true
      this.signUpForm.user.displayName = ''
      this.signUpForm.user.email = ''
      this.signUpForm.user.password = ''
      this.signUpForm.user.confirmation = ''
      data.SetFirebaseMemberData()
    })
    .catch((err) => {
      alert(err)
    })  
  },




   signInWithGoogle () {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user)
      data.user = res.user
      data.isMember = true
      alert(res.user.uid + "登入成功")
      alert(`帳號創立時間${res.user.metadata.creationTime
      }`)
      alert(`上次登入時間${res.user.metadata.lastSignInTime}`)
      
      // 判斷如果是第一次登入，建立一份老師學生端物件上傳
      if(res.user.metadata.creationTime === res.user.metadata.lastSignInTime) {
        console.log("第一次登入")
        data.teacherData.displayName = res.user.displayName
        data.SetFirebaseMemberData()
      } else {
        router.push('/')
      }
    })
    .catch((err) => {
      alert(err)
    })
   }
  }
})