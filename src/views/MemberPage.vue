<template>
  <div class="container">
    <div class="row test">
      <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center mt-3">
        <div class="user-photo position-relative">
          <img :src="user.photoURL" alt="大頭照"
                v-if="user.photoURL">
          <img src="../assets/images/預設大頭貼.png" alt="預設大頭照"
                v-if="!user.photoURL">
          <i class="bi bi-cloud-arrow-up-fill"></i>
        </div>
        <div class="mb-2 fs-2">
          {{ user.displayName }}
          <i :class="teacherData.gender"></i>
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-envelope-fill"></i>：{{ user.email }}
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-telephone-fill"></i>：{{ teacherData.phoneNumber }}
        </div>
        <div class="mb-2 w-100">
          <p class="">自我介紹：</p>
          <p class="border border-secondary rounded-4 p-3">
            {{ teacherData.teacherIntro }}
          </p>
        </div>
        <div class="d-flex justify-content-around w-75 mb-2">
          <a :href="teacherData.facebook" target="_black">
            <i class="bi bi-facebook fs-3 text-secondary"
              :class="{'text-blue': teacherData.facebook}"></i>
          </a>
          <a :href="teacherData.instagram" target="_black">
            <i class="bi bi-instagram fs-3 text-secondary"
              :class="{'text-red': teacherData.instagram}"></i>
          </a>
          <a :href="teacherData.discord" target="_black">
            <i class="bi bi-discord fs-3 text-secondary"
              :class="{'text-purple': teacherData.discord}"></i>
          </a>
          
        </div>
        <div class="mb-2">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">編輯個人資料</button>
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
    ...mapState(dataStore, ['user','isMember', 'teacherData']),
    ...mapWritableState(dataStore, [])
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
  // width: 100px;
  // height: 100px;
  // border-radius: 50px;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  i {
    position: absolute;
    right: -5px;
    bottom: -5px;
    z-index: 10;
    font-size: 32px;
  }
}
</style> 