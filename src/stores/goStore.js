import router from '../router'
import { defineStore } from 'pinia'
import logInStore from './logInStore'
import dataStore from './dataStore'


const logIn = logInStore()
const data = dataStore()

export default defineStore('goStore', {
  actions: {
    goCoursePage (id) {
      router.push(`/coursePage/${id}`)
    },
    goHomePage () {
      router.push('/')
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
      data.beATeacherData.courseImg = ''
      data.beATeacherData.teacherImg = ''
      data.beATeacherData.teacherName = ''
      data.beATeacherData.teacherIntro = ''
      data.beATeacherData.courseName = '李老師'
      data.beATeacherData.courseIntro = ''
      data.beATeacherData.courseCategory = ''
      data.beATeacherData.courseMethod = []
      data.beATeacherData.cityName = ''
      data.beATeacherData.time = 0
      data.beATeacherData.price = 0
    }
  }
})
