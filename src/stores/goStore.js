import router from '../router'
import { defineStore } from 'pinia'
import logInStore from './logInStore'

const logIn = logInStore()

export default defineStore('goStore', {
  actions: {
    // goCart () {
    //   router.push('/cart')
    //   cart.cartBoxState = false
    // },
    // goProducts () {
    //   router.push('/products')
    //   cart.cartBoxState = false
    // },
    goCoursePage (id) {
      router.push(`/coursePage/${id}`)
    },
    goHomePage () {
      router.push('/')
      logIn.logInForm.user.email = ''
      logIn.logInForm.user.password = ''
    },
    goLoginPage () {
      logIn.logInPage = true
      logIn.signUpForm.user.name = ''
      logIn.signUpForm.user.email = ''
      logIn.signUpForm.user.password = ''
      logIn.signUpForm.user.confirmation = ''
    },
    goBeATeacherStep1 () {
      router.push('/CreateCourses/BeATeacherStep1')
    },
    goBeATeacherStep2 () {
      router.push('/CreateCourses/BeATeacherStep2')
    },
    goBeATeacherStep3 () {
      router.push('/CreateCourses/BeATeacherStep3')
    },
    goBeATeacherStep4 () {
      router.push('/CreateCourses/BeATeacherStep4')
    }
  }
})
