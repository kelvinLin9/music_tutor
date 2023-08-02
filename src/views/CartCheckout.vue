<template>
  <button type="button" class="btn btn-primary"
   @click="buyNow()">
    我要結帳
  </button>
</template>
  
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import cartStore from '@/stores/cartStore'
import dataStore from '@/stores/dataStore'

export default {
  computed: {
    ...mapState(dataStore, ['bookmarkState','user','teacherData']),
    ...mapState(cartStore, ['payWrap'])

  },
  methods: {
    ...mapActions(cartStore, ['buyNow']),
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>

</style>