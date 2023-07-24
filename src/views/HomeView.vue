<template>
  <NavbarCom />
  <RouterView />
  <GoTop/>
</template>


<script>
import NavbarCom from '@/components/NavbarCom.vue'
import GoTop from '@/components/GoTop.vue'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    NavbarCom,
    GoTop
  },
  computed: {

  },
  methods: {

  },
  created () {
    console.log(this.$route.name)
  }
}
</script>

<style lang="scss" scoped>

</style>
