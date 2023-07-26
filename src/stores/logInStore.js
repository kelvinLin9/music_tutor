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
      this.logInPage = true
      alert('恭喜註冊成功')

    })
    .catch((err) => {
      alert(err)
    })  
    updateProfile(auth.currentUser, {
      displayName: this.signUpForm.user.displayName
    }).then(() => { 
      this.signUpForm.user.displayName = ''
      this.signUpForm.user.email = ''
      this.signUpForm.user.password = ''
      this.signUpForm.user.confirmation = ''
    }).catch(() => {
      console.log('失敗')
    });
     
   },

  
   signInWithGoogle () {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user)
      router.push('/')
      this.isMember = true
    })
    .catch((err) => {
      alert(err)
    })
   }
  }
})