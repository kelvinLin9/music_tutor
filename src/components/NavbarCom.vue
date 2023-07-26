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
            :class="{ 'text-primary':  $route.matched[1].path === '/CreateCourses'}">
            我要開課
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/AllCourses" class="nav-link"
            :class="{ 'text-primary':  $route.name === 'AllCourses'}">
            所有課程
          </RouterLink>
        </li>
        <RouterLink to="/UserLogin" class="nav-link"
            :class="{ 'text-primary':  $route.name === 'UserLogin'}"
            v-if="this.isMember === false">
            登入
          </RouterLink> 
          <!-- 登入後出現 -->
        <li class="nav-item" 
            v-if="this.isMember === true">
          <RouterLink to="/CoursesCart" class="nav-link"
            :class="{ 'text-primary':  $route.name === 'CoursesCart'}">
            <i class="bi bi-cart-fill me-lg-2"></i>
          </RouterLink>
        </li>
        <li class="nav-item dropdown">  
          <button class="btn dropdown-toggle text-primary"
                  type="button" id="dropdownLogin" 
                  data-bs-toggle="dropdown" aria-expanded="false"
                  :class="{ 'text-primary':  $route.name === 'UserLogin'}"
                  v-if="this.isMember === true">
            <i class="bi bi-person-circle me-2"></i>
            {{ user.displayName }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end text-primary" aria-labelledby="dropdownLogin"
                  v-if="this.isMember === true">
            <li>
              <RouterLink to="/MemberPage" class="dropdown-item">
                個人主頁
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/MyCourses" class="dropdown-item">
                我的課程
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/CoursesTime" class="dropdown-item">
                課表時間
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/AccountSetting" class="dropdown-item">
                帳戶設定
              </RouterLink>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#"
              @click="signOut()">
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
    ...mapState(logInStore, ['user', 'googleUserName','isMember']),
  },
  methods: {
    ...mapActions(logInStore, ['signOut'])
    
  },
  created () {
  }
}
</script>


<style scoped>

</style>
