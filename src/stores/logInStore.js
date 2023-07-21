import { defineStore } from 'pinia'

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
        name: '',
        email: '',
        password: '',
        confirmation: ''
      },
    }
  }),
  actions: {
   
  }
})