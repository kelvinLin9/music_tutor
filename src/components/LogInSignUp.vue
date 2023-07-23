<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-3">
        <img src="https://fakeimg.pl/180x720/" alt="">
      </div>
      <div class="col-6 mx-auto">
        <div v-if="logInPage">
          <h1 class="mx-auto border-bottom my-3 pb-2 w-50 text-center">會員登入</h1>
          <VForm class="mx-auto w-75"
          v-slot="{ errors }"
          @submit="goHomePage()">
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
                name="password"
                id="password"
                type="password"
                rules="required|min:8"
                class="form-control"
                :class="{ 'is-invalid': errors['password'] }"
                placeholder="請輸入密碼"
                v-model="logInForm.user.password"
              />
              <ErrorMessage class="invalid-feedback" name="password"/>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-sm btn-primary">
                登入
              </button>
              <button type="button" class="btn btn-sm btn-outline-primary ms-5"
                @click="goHomePage(true)">
                假裝登入
              </button>
            </div>
            <div class="d-flex justify-content-between">
              <a href="#">忘記密碼</a>
              <a href="#" class="d-inline-block"
                @click="logInPage = false">
                前往註冊
              </a>
            </div>
          </VForm>
        </div>

        <div v-else>
          <h1 class="mx-auto border-bottom my-3 pb-2 w-50 text-center">會員註冊</h1>
          <VForm class="mx-auto w-75"
          v-slot="{ errors }"
          @submit="goLoginPage()">
            <div class="mb-3">
              <label for="name" class="form-label ">
                Name：
              </label>
              <VField
                name="name"
                id="name"
                type="text"
                rules="required"
                class="form-control"
                :class="{ 'is-invalid': errors['name'] }"
                placeholder="請輸入姓名"
                v-model="signUpForm.user.name"
              />
              <ErrorMessage class="invalid-feedback" name="name"/>
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
              <button type="submit" class="btn btn-sm btn-primary">
                註冊
              </button>
              <button type="reset" class="btn btn-sm btn-danger">
                重設
              </button>
              <button type="button" class="btn btn-sm btn-primary me-2"
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

export default {
  computed: {
    ...mapWritableState(logInStore, ['logInForm', 'signUpForm', 'logInPage', 'isMember'])
  },
  methods: {  
    ...mapActions(goStore, ['goHomePage', 'goLoginPage'])
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  
}
</style>