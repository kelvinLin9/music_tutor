<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-3">
        <img src="https://fakeimg.pl/180x520/" alt="">
      </div>
      <div class="col-6 mx-auto">
        <div v-if="logInPage">
          <h1 class="mx-auto border-bottom my-3 pb-2 w-50 text-center">會員登入</h1>
          <VForm class="mx-auto w-75"
                v-slot="{ errors }"
                @submit="logIn()">
            <div class="mb-3">
              <label for="email" class="form-label ">
                Email：
              </label>
              <VField
                name="email"
                id="email"
                type="email"
                rules="required|email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                v-model="logInForm.user.email"
              />
              <ErrorMessage class="invalid-feedback" name="email"/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label ">
                password：
              </label>
              <VField
                name="密碼"
                id="password"
                type="password"
                rules="required|min:8"
                class="form-control"
                :class="{ 'is-invalid': errors['密碼'] }"
                placeholder="請輸入密碼"
                v-model="logInForm.user.password"
              />
              <ErrorMessage class="invalid-feedback" name="密碼"/>
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <button type="submit" class="btn btn-sm btn-primary">
                登入
              </button>
              <button type="button" class="btn btn-sm btn-outline-primary"
                      @click="signInWithGoogle()">
                Google登入
              </button>
            </div>
            <div class="d-flex justify-content-between">
              <a href="#">忘記密碼</a>
              <a href="#" class="d-inline-block"
                @click.prevent="logInPage = false">
                前往註冊
              </a>
            </div>
          </VForm>
        </div>

        <div v-else>
          <h1 class="mx-auto border-bottom my-3 pb-2 w-50 text-center">會員註冊</h1>
          <VForm class="mx-auto w-75"
          v-slot="{ errors }"
          @submit="signUp()">
            <div class="mb-3">
              <label for="displayName" class="form-label ">
                姓名：
              </label>
              <VField
                name="姓名"
                id="displayName"
                type="text"
                rules="required"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                v-model="signUpForm.user.displayName"
              />
              <ErrorMessage class="invalid-feedback" name="姓名"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label ">
                Email：
              </label>
              <VField
                name="email"
                id="email"
                type="email"
                rules="required|email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                v-model="signUpForm.user.email"
              />
              <ErrorMessage class="invalid-feedback" name="email"/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label ">
                password：
              </label>
              <VField
                name="密碼"
                id="password"
                type="password"
                rules="required|min:8"
                class="form-control"
                :class="{ 'is-invalid': errors['密碼'] }"
                placeholder="請輸入密碼"
                v-model="signUpForm.user.password"
              />
              <ErrorMessage class="invalid-feedback" name="密碼"/>
            </div>
            <div class="mb-3">
              <label for="confirmation" class="form-label ">
                請再次輸入密碼：
              </label>
              <VField
                name="驗證密碼"
                id="confirmation"
                type="password"
                rules="confirmed:@密碼"
                class="form-control"
                :class="{ 'is-invalid': errors['驗證密碼'] }"
                placeholder="請再次輸入密碼"
                v-model="signUpForm.user.confirmation"
              />
              <ErrorMessage class="invalid-feedback" name="驗證密碼"/>
            </div>
            <div class="mb-3 d-flex justify-content-between">

              <button type="submit" class="btn btn-sm btn-primary w-25">
                註冊
              </button>
              <!-- <button type="reset" class="btn btn-sm btn-danger">
                重設
              </button> -->
              <button type="button" class="btn btn-sm btn-primary w-25"
                      @click="logInPage = true">
                登入
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import logInStore from '../stores/logInStore';
import goStore from '../stores/goStore';
import dataStore from '../stores/dataStore';


export default {
  computed: {
    ...mapWritableState(logInStore, ['logInForm', 'signUpForm', 'logInPage'])
  },
  methods: {  
    ...mapActions(goStore, ['goHomePage', 'goLoginPage']),
    ...mapActions(logInStore, ['signUp', 'logIn', 'signInWithGoogle','updateProfile', 'signOut']),
    ...mapActions(dataStore, [])
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  
}
</style>