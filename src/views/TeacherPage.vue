<template>
  <div class="container">
    <h1> {{ otherTeacherData.displayName }} 老師的頁面</h1>
    <div class="row test">
      <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center mt-3">
        <div class="user-photo position-relative">
          <img :src="otherTeacherData.teacherImg" alt="大頭照"
                v-if="otherTeacherData.teacherImg">
          <img src="../assets/images/預設大頭貼.png" alt="預設大頭照"
                v-if="!otherTeacherData.teacherImg">
        </div>
        <div class="mb-2 fs-2">
          {{ otherTeacherData.displayName }}
          <i :class="otherTeacherData.gender"></i>
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-envelope-fill"></i>：{{ otherTeacherData.email }}
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-telephone-fill"></i>：{{ otherTeacherData.phoneNumber }}
        </div>
        <div class="mb-2 w-100">
          <p class="">自我介紹：</p>
          <p class="border border-secondary rounded-4 p-3">
            {{ otherTeacherData.teacherIntro }}
          </p>
        </div>
        <div class="d-flex justify-content-around w-75 mb-2">
          <a :href="otherTeacherData.facebook" target="_black">
            <i class="bi bi-facebook fs-3 text-secondary"
              :class="{'text-blue': otherTeacherData.facebook}"></i>
          </a>
          <a :href="otherTeacherData.instagram" target="_black">
            <i class="bi bi-instagram fs-3 text-secondary"
              :class="{'text-danger': otherTeacherData.instagram}"></i>
          </a>
          <a :href="otherTeacherData.discord" target="_black">
            <i class="bi bi-discord fs-3 text-secondary"
              :class="{'text-purple': otherTeacherData.discord}"></i>
          </a>
        </div>
      </div>
      <div class="col-12 col-md-8">

      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import logInStore from '@/stores/logInStore'
import goStore from '@/stores/goStore'
import dataStore from '../stores/dataStore';

export default {
  data () {
    return {
      uid: ''
    }
  },
  computed: {
    ...mapState(dataStore, ['user','isMember', 'otherTeacherData']),
    ...mapWritableState(dataStore, [])
  },
  methods: {
    ...mapActions(logInStore, ['signOut']),  
    ...mapActions(dataStore, ['onAuthStateChanged', 'getOneTeacherFirebaseData']),
    
  },
  created () {
    this.onAuthStateChanged()
    // 防止從新整理產生讀不到資料
    this.uid = this.$route.params.TeacherPageId
    this.getOneTeacherFirebaseData(this.uid)
  }
}
</script>

<style lang="scss" scoped>
.user-photo {
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
}
.upload-icon { 
  position: absolute;
  right: -10px;
  bottom: 10px;
  z-index: 10;
  font-size: 40px;
  
}
</style> 