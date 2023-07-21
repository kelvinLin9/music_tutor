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
          <RouterLink to="/CreateCourses" class="nav-link"
            :class="{ 'text-warning':  $route.name === 'CreateCourses'}">
            建立課程
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/AllCourses" class="nav-link"
            :class="{ 'text-warning':  $route.name === 'AllCourses'}">
            所有課程
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/MyCourses" class="nav-link"
            :class="{ 'text-warning':  $route.name === 'MyCourses'}">
            我的課程
          </RouterLink>
        </li>
        <li class="nav-item dropdown">
          <RouterLink to="/UserLogin" class="nav-link"
            :class="{ 'text-warning':  $route.name === 'UserLogin'}">
            登入
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<script >

</script>


<style scoped>

</style>
