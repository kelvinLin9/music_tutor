<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-lg-8">
        <img src="https://fakeimg.pl/200x120/" alt="">
      </div>
      <div class="col-12 col-lg-4 d-flex flex-column">
        <h1>{{ courseData[0].courseName }}</h1>
        <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repudiandae quae qui sed ipsa. Voluptatibus totam incidunt laboriosam aliquam illum doloribus facilis consectetur adipisci nulla obcaecati? Vitae perspiciatis facere vero.</p>
        <div class="border border-success px-2 py-1 text-success mt-auto ms-auto cursor-pointer"
            @click="toggleBookmark(courseData[0].id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏">
          <i :class="bookmarkState(courseData[0].id)"></i>
          收藏
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row align-items-center">
      <div class="col-12 col-lg-8">
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
        <div class="row my-3">
          <p>關於課程</p>
          <div class="col-3">
            <div class="d-flex align-items-center">
              <i class="bi bi-clock me-2"></i>
              課程時長<br>{{ courseData[0].time }}分鐘
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <i class="bi bi-tools me-2"></i>
              <div>
                上課方式<br>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="courseData[0].courseMethod[0]">
                  {{ courseData[0].courseMethod[0] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                v-if="courseData[0].courseMethod[1]">
                  {{ courseData[0].courseMethod[1] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                v-if="courseData[0].courseMethod[2]">
                  {{ courseData[0].courseMethod[2] }}
                </span>
              </div>
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
      <div class="col-12 col-lg-4 p-4 border">
        <h4 class="border-bottom pb-2">購買單堂課程</h4>
        <div class="mb-3">
          <span class="fs-5">售價</span>
          <span class="fs-1">NT${{ courseData[0].price }}</span> 
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-danger w-75">
            立即購買
          </button>
          <button type="button" class="btn btn-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="加入購物車">
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
    ...mapState(dataStore, ['courseData', 'bookmarkState']),
  },
  methods: {
    ...mapActions(dataStore, ['getCourseData', 'getBookmarkCoursesData','toggleBookmark']),
    ...mapActions(goStore, ['goCoursePage'])
    
  },
  created () {
    this.getCourseData(this.$route.params.coursePageId)
    this.getBookmarkCoursesData()
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.cursor-pointer {
  cursor:pointer;
}
</style>