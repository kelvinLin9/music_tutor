<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand nav-link" href="#">
      <img src="../assets/images/logo_default.png" alt="logo" class="d-none d-lg-block">
      <img src="../assets/images/logo_default_sm.png" alt="logo" class="d-block d-lg-none">
    </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink to="/CreateCourses/BeATeacherStep1" class="nav-link"
            :class="{ 'text-warning':  $route.matched[1].path === '/CreateCourses'}">
            我要開課
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/AllCourses" class="nav-link"
            :class="{ 'text-warning':  $route.name === 'AllCourses'}">
            所有課程
          </RouterLink>
        </li>
        <li class="nav-item dropdown">
          <RouterLink to="/UserLogin" class="nav-link"
            :class="{ 'text-warning':  $route.name === 'UserLogin'}"
            v-if="isMember === false">
            登入
          </RouterLink>
          <button class="btn dropdown-toggle text-success"
                  type="button" id="dropdownLogin" 
                  data-bs-toggle="dropdown" aria-expanded="false"
                  :class="{ 'text-warning':  $route.name === 'UserLogin'}"
                  v-if="isMember === true">
            <i class="bi bi-person-circle me-2"></i>陳老師
          </button>
          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="dropdownLogin"
                  v-if="isMember === true">
            <li><a class="dropdown-item" href="#">個人主頁</a></li>
            <li>
              <RouterLink to="/MyCourses" class="dropdown-item">
                我的課程
              </RouterLink>
            </li>
            <li><a class="dropdown-item" href="#">課表時間</a></li>
            <li><a class="dropdown-item" href="#">帳戶設定</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"
              @click="logOut()">
              登出
            </a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import logInStore from '@/stores/logInStore'
import goStore from '@/stores/goStore'

export default {
  computed: {
    ...mapState(logInStore, ['isMember']),
  },
  methods: {
    ...mapActions(logInStore, ['logOut'])
    
  },
  created () {

  }
}
</script>


<style scoped>

</style>
