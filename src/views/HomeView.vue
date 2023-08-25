<template>
  <NavbarCom :key="$route.path"/>
  <div class="home-loading position-fixed" v-if="homeLoading">
    <home-loading/>
  </div>
  <div class="min-height">
    <RouterView />
  </div>
  <FooterCom/>
  <GoTop/>
</template>


<script>
import NavbarCom from '@/components/NavbarCom.vue'
import GoTop from '@/components/GoTop.vue'
import { mapActions, mapState } from 'pinia'
import dataStore from '../stores/dataStore'
import FooterCom from '../components/FooterCom.vue'
import HomeLoading from '../components/HomeLoading.vue';

export default {
  data () {
    return {
      homeLoading: true,
    }
  },
  components: {
    NavbarCom,
    GoTop,
    FooterCom, 
    HomeLoading
  },
  computed: {
    ...mapState(dataStore, ['loading'])
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
    scrollStop () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false)
    },
    scrollMove () {
      const mo = function (e) { e.preventDefault() }
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', mo, false)
    }
  },
  created () {
    console.log(this.$route.name)
  },
  mounted () {
    this.scrollStop()
    setTimeout(() => {
      this.scrollMove()
      this.homeLoading = false
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.home-loading {
  position: absolute;
  z-index: 2000;
  width: 100%;
  min-height: 100vh;
  background:  #F3F1E5;
}
.min-height {
  min-height: calc(100vh - 211px);
}
</style>
