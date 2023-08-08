<template>
  <NavbarCom />
  <div class="min-height">
    <RouterView />
  </div>
  <FooterCom />
  <GoTop/>
</template>


<script>
import NavbarCom from '@/components/NavbarCom.vue'
import GoTop from '@/components/GoTop.vue'
import { mapActions, mapState } from 'pinia'
import dataStore from '../stores/dataStore'
import FooterCom from '../components/FooterCom.vue'


export default {
  components: {
    NavbarCom,
    GoTop,
    FooterCom
  },
  computed: {

  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
  },
  created () {
    console.log(this.$route.name)
    // this.onAuthStateChanged()
  }
}
</script>

<style lang="scss" scoped>
.min-height {
  min-height: calc(100vh - 178px);
}
</style>
