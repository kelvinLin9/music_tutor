<template>

<div class="container">
  <div class="row">
    <div class="col-3 d-none d-md-block">
      55
    </div>
    <div class="col-12 col-md-9">
      <div class="mb-16">
        <h2 class="fs-3">完成個人資訊，獲得生日優惠禮與更精準的課程推薦</h2>

      </div>
      <table class="table table-hover align-middle">
        <tbody>
          <!-- 信箱 -->
          <tr>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="login-logo d-flex justify-content-center align-items-center">
                    <img src="../assets/images/LOGO.png" alt="">
                  </div>
                  <div class="ms-32">
                    <p class="fs-5">尚未建立樂樂帳號</p>
                    <p class="fs-5">連結為</p>
                  </div>
                </div>
                <div class="">
                  <a href="#" @click.prevent>
                    建立並連結帳號
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <!-- google -->
          <tr>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="login-logo d-flex justify-content-center align-items-center">
                    <img src="../assets/images/google-icon.png" alt="">
                  </div>
                  <div class="ms-32">
                    <p class="fs-5">尚未建立Google帳號</p>
                    <p class="fs-5">連結為</p>
                  </div>
                </div>
                <div class="">
                  <a href="#" @click.prevent="signInWithGoogle(), AccountSettingState = true">
                    建立並連結帳號
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <!-- facebook -->
          <tr>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="login-logo d-flex justify-content-center align-items-center">
                    <img src="../assets/images/facebook-icon.png" alt="">
                  </div>
                  <div class="ms-32">
                    <p class="fs-5">尚未建立Facebook帳號</p>
                    <p class="fs-5">連結為</p>
                  </div>
                </div>
                <div class="">
                  <a href="#" @click.prevent="signInWithFacebook(), AccountSettingState = true">
                    建立並連結帳號
                  </a>
                </div>
              </div>
            </td>
          </tr>
          <!-- GitHub -->
          <tr>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="login-logo d-flex justify-content-center align-items-center">
                    <img src="../assets/images/github-icon.png" alt="">
                  </div>
                  <div class="ms-32">
                    <p class="fs-5">尚未建立GitHub帳號</p>
                    <p class="fs-5">連結為</p>
                  </div>
                </div>
                <div class="">
                  <a href="#" @click.prevent="signInWithGithub(), AccountSettingState = true">
                    建立並連結帳號
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</div>

{{ user.providerData }}<br>
{{ user.email }}<br>

<br>
<a href="#" @click.prevent="getCurrentUser()">查詢當前登入</a>
<br>
<a href="#" @click.prevent="updateUserEmail()">設置信箱</a>
<br>
<a href="#" @click.prevent="sendEmailVerification()">發送信箱驗證信</a>
<br>
<a href="#" @click.prevent="sendPasswordResetEmail()">發送重設密碼信</a>
</template>
  




<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import loginStore from '@/stores/loginStore'
import dataStore from '@/stores/dataStore'
export default {

  computed: {
    ...mapState(dataStore, ['user']),
    ...mapState(loginStore, ['']),
    ...mapWritableState(loginStore, ['AccountSettingState']),

  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
    ...mapActions(loginStore, ['signInWithGoogle' , 'signInWithFacebook', 'signInWithGithub', 'getCurrentUser', 'updateUserEmail', 'sendEmailVerification', 'sendPasswordResetEmail']),
  },
  created () {
    this.onAuthStateChanged()
  }
}
</script>

<style lang="scss" scoped>
.login-logo {
  width: 96px;
  height: 48px;
  img {
    width: 32px;
    height: 32px;
  }
}
</style>