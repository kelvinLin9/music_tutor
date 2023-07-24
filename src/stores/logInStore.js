import { defineStore } from 'pinia'
import router from '../router'
import { getAuth, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword,
      } from 'firebase/auth'




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
        name: '',
        email: '',
        password: '',
        confirmation: ''
      },
    }
  }),
  actions: {
   logOut() {
    this.isMember = false
   },
   logIn() {
    signInWithEmailAndPassword(getAuth(), this.logInForm.user.email, this.logInForm.user.password)
    .then((res) => {
      console.log(res)
      this.logInForm.user.email = ''
      this.logInForm.user.password = ''
      router.push('/')
      this.isMember = true
      alert('恭喜登入成功')

    })
    .catch((err) => {
      console.log(err)
      alert(err)
    })
   },
   signUp () {
    createUserWithEmailAndPassword(getAuth(), this.signUpForm.user.email, this.signUpForm.user.password)
    .then((res) => {
      console.log(res)
      this.signUpForm.user.name = ''
      this.signUpForm.user.email = ''
      this.signUpForm.user.password = ''
      this.signUpForm.user.confirmation = ''
      this.logInPage = true
      alert('恭喜註冊成功')

    })
    .catch((err) => {
      console.log(err)
      alert(err)
    })
   }
  }
})