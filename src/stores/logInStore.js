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

const auth = getAuth();


export default defineStore('logInStore', {
  state: () => ({
    logInPage: true,
    isMember: false,
    googleUserName:'',
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
    user:{},
  }),
  actions: {
   signOut() {
    this.googleUserName = ''
    signOut(auth)
    // alert('登出成功')
    router.push('/UserLogin')
    
   },
   logIn() {
    signInWithEmailAndPassword(auth, this.logInForm.user.email, this.logInForm.user.password)
    .then((res) => {
      this.user = res.user
      this.logInForm.user.email = ''
      this.logInForm.user.password = ''
      router.push('/')
      alert('恭喜登入成功')
    })
    .catch((err) => {
      alert(err.message)
    })
   },
   onAuthStateChanged() {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        this.user = user;
        console.log(user.uid)
        this.isMember = true
      } else {
        this.isMember = false
        console.log('已登出')
      }
    });
   },
   async signUp () {
    await createUserWithEmailAndPassword(auth, this.signUpForm.user.email, this.signUpForm.user.password)
    .then((res) => {
      console.log(res)
      this.signUpForm.user.email = ''
      this.signUpForm.user.password = ''
      this.signUpForm.user.confirmation = ''
      this.logInPage = true
      alert('恭喜註冊成功')

    })
    .catch((err) => {
      alert(err)
    })  
    console.log(this.signUpForm.user.displayName)
    updateProfile(auth.currentUser, {
      displayName: this.signUpForm.user.displayName
    }).then(() => {
      console.log(this.signUpForm.user.displayName)
      this.signUpForm.user.displayName = ''
    }).catch(() => {
      console.log('失敗')
    });
     
   },

  
   signInWithGoogle () {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user)
      this.googleUserName = res.user.displayName
      router.push('/')
      this.isMember = true
    })
    .catch((err) => {
      alert(err)
    })
   }
  }
})