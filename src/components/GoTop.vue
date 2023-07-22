<template>
  <div class="goTop"
      :class="{'d-none' : !goTopIcon }">
    <a href="#" @click.prevent="top">
      <i class="bi-caret-up-square text-primary"></i>
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import windowStore from '@/stores/windowStore'
export default {
  computed: {
    ...mapState(windowStore, ['goTopIcon'])
  },
  methods: {
    ...mapActions(windowStore, ['scroll']),
    top () {
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    this.scroll()
  }
}
</script>

<style lang="scss" scoped>
.goTop{
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 99;
  font-size: 40px;
}
</style>
