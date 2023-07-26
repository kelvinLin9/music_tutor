<template>
  <NavbarCom />
  <RouterView />
  <GoTop/>
</template>


<script>
import NavbarCom from '@/components/NavbarCom.vue'
import GoTop from '@/components/GoTop.vue'
import { mapActions, mapState } from 'pinia'
import logInStore from '../stores/logInStore';

export default {
  components: {
    NavbarCom,
    GoTop
  },
  computed: {

  },
  methods: {
    ...mapActions(logInStore, ['onAuthStateChanged']),
  },
  created () {
    console.log(this.$route.name)
    this.onAuthStateChanged()
  }
}
</script>

<style lang="scss" scoped>

</style>
