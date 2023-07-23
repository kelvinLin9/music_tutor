import { defineStore } from 'pinia'

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
   }
  }
})