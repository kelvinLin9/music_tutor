<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-8">
        <img src="https://fakeimg.pl/200x120/" alt="">
      </div>
      <div class="col-4 d-flex flex-column">
        <h1>{{ courseData[0].courseName }}</h1>
        <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repudiandae quae qui sed ipsa. Voluptatibus totam incidunt laboriosam aliquam illum doloribus facilis consectetur adipisci nulla obcaecati? Vitae perspiciatis facere vero.</p>
        <button type="button" class="btn btn-outline-danger mt-auto ms-auto">
          <i class="bi bi-bookmarks-fill"></i>收藏
        </button>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row align-items-center">
      <div class="col-8">
        <div class="row align-items-center">
          <div class="col-2">
            <img src="https://fakeimg.pl/20x20/" alt="">
          </div>
          <div class="col-10">
            {{ courseData[0].teacherName }}
          </div>
        </div>
        <div class="row">
          <div class="col-10 ms-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis delectus accusantium repellat soluta odio, corrupti nesciunt similique velit dolorem ea neque iste rerum voluptatum reprehenderit, ad illum in molestias.
          </div>
        </div>
        <div class="row mt-3">
          <p>關於課程</p>
          <div class="col-3">
            <div class="d-flex align-items-center">
              <i class="bi bi-clock me-2"></i>
              課程時長<br>{{ courseData[0].time }}分鐘
            </div>
          </div>
          <div class="col-3">
            <div class="d-flex align-items-center">
              <i class="bi bi-tools me-2"></i>
              上課方式<br>{{ courseData[0].courseMethod }}
            </div>
          </div>
          <div class="col-3">
            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt-fill me-2"></i>
              上課地點<br> {{ courseData[0].cityName }}
            </div>
          </div>
        </div>
       </div>
      <div class="col-4 p-4 border">
        <h4 class="border-bottom pb-2">購買單堂課程</h4>
        <div class="mb-3">
          <span class="fs-5">售價</span>
          <span class="fs-1">NT${{ courseData[0].price }}</span> 
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-danger w-75">
            立即購買
          </button>
          <button type="button" class="btn btn-danger">
            <i class="bi bi-cart-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'

export default {
  computed: {
    ...mapState(dataStore, ['courseData']),
  },
  methods: {
    ...mapActions(dataStore, ['getCourseData']),
    // ...mapActions(goStore, ['goCoursePage'])
    
  },
  created () {
    this.getCourseData(this.$route.params.coursePageId)
    // console.log(this.courseData[0])
  }
}
</script>

<style lang="scss" scoped>
img {
  // display: block;
  width: 100%;
}
</style>