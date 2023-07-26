<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">編輯我的個人資料</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <VForm class="mx-auto w-75"
                v-slot="{ errors }"
                @submit="SetFirebaseData()">
          <!-- <div class="mb-3">
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
              v-model="user.email"
            />
            <ErrorMessage class="invalid-feedback" name="email"/>
          </div> -->
          <div class="mb-3">
            <label for="phone" class="form-label ">
              手機：
            </label>
            <VField
              name="手機"
              id="phone"
              type="phone"
              rules="required"
              class="form-control"
              :class="{ 'is-invalid': errors['手機'] }"
              placeholder="請輸入手機"
              v-model="teacherData.phoneNumber"
            />
            <ErrorMessage class="invalid-feedback" name="手機"/>
          </div>
          <div class="mb-3">
            <label for="teacherIntro" class="form-label">
            自我介紹(限定80字元內)：
          </label>
          <textarea 
                class="form-control" 
                id="teacherIntro" 
                rows="3"
                placeholder="限定80字元內"
                v-model="teacherData.teacherIntro"
                >
          </textarea>
          </div>

          <!-- <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div> -->


          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
            確認
          </button>
        </VForm>
      </div>
      <div class="modal-footer">
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
    ...mapState(dataStore, ['user']),
    ...mapWritableState(dataStore, ['teacherData'])
  },
  methods: {  
    ...mapActions(dataStore, ['SetFirebaseData'])
    // ...mapActions(goStore, ['goHomePage', 'goLoginPage']),
    // ...mapActions(logInStore, ['signUp', 'logIn', 'signInWithGoogle','updateProfile', 'signOut']),
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

</style>