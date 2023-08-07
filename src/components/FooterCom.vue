<template>
  <div class="bg-dark py-4">
    <div class="container">
      <div class="row justify-content-center justify-content-lg-between align-items-center">
        <div class="col-auto">
          <RouterLink to="/" class="navbar-brand nav-link" href="#">
            <img src="../assets/images/logo_white.png" alt="logo" class="d-none d-lg-block">
            <img src="../assets/images/logo_white_sm.png" alt="logo" class="d-block d-lg-none">
          </RouterLink>
        </div>
        <div class="col-12 col-lg-auto text-light">
          <ul class="d-flex justify-content-center justify-content-lg-end align-items-center">
            <li class="me-4">
              <i class="bi bi-facebook"></i>
              <span class="ms-2">Facebook</span>
            </li>
            <li class="me-4">
              <i class="bi bi-instagram"></i>
              <span class="ms-2">Instagram</span>
            </li>
            <li class="">
              <i class="bi bi-twitter"></i>
              <span class="ms-2">Twitter</span>
            </li>
          </ul>
          <div class="text-center text-lg-end">
            Copyright © 2023 Taipei music design All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

</script>

<style lang="scss" scoped>
* {
  outline: 1px solid red;
}
</style>