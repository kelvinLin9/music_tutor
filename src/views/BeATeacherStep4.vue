<template>
<div class=""></div>
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
  mounted () {
    this.$swal.fire({
      title: '<h1>恭喜完成開課</h1>',
      icon: 'success',
      text: '課程審核需要2~3個工作天',
      // showCloseButton: true,
      showCancelButton: true,
      reverseButtons: true,
      cancelButtonText: '回到首頁',
      confirmButtonText: '繼續開課',
      
    })
      .then((result) => {
        if (result.isConfirmed) {
          this.$router.push('/CreateCourses/BeATeacherStep1')
        } else {
          this.$router.push('/')
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.BeATeacherStep4-vh {
  height: calc(100vh - 194px - 184px - 48px);
}
</style>