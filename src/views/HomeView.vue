<template>
  <Navbar />
  <RouterView />
  <GoTop/>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import GoTop from '@/components/GoTop.vue'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    Navbar,
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