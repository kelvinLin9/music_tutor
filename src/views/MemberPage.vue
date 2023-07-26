<template>
  <div class="container">
    <div class="row test">
      <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center test">
        <div class="user-photo">
          <img :src="user.photoURL" alt="大頭照">
        </div>
        <div class="mb-2 fs-2">
          {{ user.displayName }}
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-envelope-fill"></i>：{{ user.email }}
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-telephone-fill"></i>：{{ teacherData.phoneNumber }}
        </div>
        <div class="mb-2 w-100">
          <p>自我介紹：</p>
          <p class="border border-secondary py-1">{{ teacherData.teacherIntro }}</p>
        </div>
        <div class="d-flex justify-content-around w-100 mb-2">
          <i class="bi bi-facebook fs-3"></i>
          <i class="bi bi-instagram fs-3"></i>
          <i class="bi bi-discord fs-3"></i>
        </div>
        <div class="mb-2">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">編輯個人資料</button>
        </div>
      </div>
      <div class="col-12 col-md-8">

      </div>
    </div>
  </div>
  <EditIntroModal />

</template>
  
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import logInStore from '@/stores/logInStore'
import goStore from '@/stores/goStore'
import dataStore from '../stores/dataStore';
import EditIntroModal from '../components/EditIntroModal.vue'

export default {
  components: { EditIntroModal },
  computed: {
    ...mapState(dataStore, ['user','isMember']),
    ...mapWritableState(dataStore, ['teacherData'])
  },
  methods: {
    ...mapActions(logInStore, ['signOut']),  
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.user-photo {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
}
</style> 