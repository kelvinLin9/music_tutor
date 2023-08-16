<template>
  <div class="bg-dark py-4 border-top">
    <div class="container">
      <div class="row justify-content-center justify-content-lg-between align-items-center">
        <div class="col">
          <RouterLink to="/" class="navbar-brand nav-link " href="#">
            <img src="../assets/images/logo_white.png" alt="logo" class="d-none d-lg-block">
            <img src="../assets/images/logo_white_sm.png" alt="logo" class="d-block d-lg-none mx-auto my-3">
          </RouterLink>
        </div>
        <div class="col-12 col-lg-auto">
          <ul class="row justify-content-center justify-content-lg-end align-items-center ps-0">
            <li class="col-12 col-md-auto text-center py-2">
              <a href="#" class="text-light" @click.prevent>
                <i class="bi bi-facebook"></i>
                <span class="ms-2">Facebook</span>
              </a>
            </li>
            <li class="col-12 col-md-auto text-center py-2">
              <a href="#" class="text-light" @click.prevent>
                <i class="bi bi-instagram"></i>
                <span class="ms-2">Instagram</span>
              </a>
            </li>
            <li class="col-12 col-md-auto text-center py-2">
              <a href="#" class="text-light " @click.prevent>
                <i class="bi bi-twitter"></i>
                <span class="ms-2">Twitter</span>
              </a>
            </li>
          </ul>
          <div class="text-center text-lg-end text-light">
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
a {
  text-decoration: none;
  &:hover {
    color: rgba(168, 128, 48, 1) !important;
  }
}
</style>