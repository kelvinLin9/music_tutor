<template>
  <NavbarCom />
  <RouterView />
  <GoTop/>
</template>


<script>
import NavbarCom from '@/components/NavbarCom.vue'
import GoTop from '@/components/GoTop.vue'
import { mapActions, mapState } from 'pinia'
import dataStore from '../stores/dataStore';


export default {
  components: {
    NavbarCom,
    GoTop
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

</style>
