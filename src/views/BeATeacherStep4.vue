<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-12">
        <h1>恭喜完成開課</h1>
        <p>課程審核需要2~3個工作天</p>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-6 d-flex justify-content-between">
        <button type="button" class="btn btn-outline-primary"
                   @click="goHomePage()">
            &emsp;&emsp;回到首頁&emsp;&emsp;
        </button>
        <button type="button" class="btn btn-primary"
                  @click="goBeATeacherStep1()">
            &emsp;&emsp;繼續開課&emsp;&emsp;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import goStore from '@/stores/goStore'

export default {
  computed: {
  },
  methods: {
    ...mapActions(goStore, ['goHomePage', 'goBeATeacherStep1'])
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>

</style>