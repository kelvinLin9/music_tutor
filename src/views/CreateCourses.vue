<template>
  <div class="container my-5 test">
    <div class="row">
      <div class="col-3">1</div>
      <div class="col-3">2</div>
      <div class="col-3">3</div>
      <div class="col-3">4</div>
    </div>
  </div>
  <RouterView/>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import dataStore from '@/stores/dataStore'

export default {
  computed: {
    ...mapWritableState(dataStore, ['beATeacherData']),
  },

  created () {
    
  }
}
</script>

<style lang="scss" scoped>

</style>