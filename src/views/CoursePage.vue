<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-lg-8">
        <img :src="courseData.courseImg" alt="課程圖片" class="course-photo">
      </div>
      <div class="col-12 col-lg-4 d-flex flex-column">
        <h1>{{ courseData.courseName }}</h1>
        <p class="">{{ courseData.courseIntro}}</p>
        <div class="border border-success px-2 py-1 text-success mt-auto ms-auto cursor-pointer"
            @click="toggleBookmark(courseData.id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏">
          <i :class="bookmarkState(courseData.id)"></i>
          收藏
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row align-items-center">
      <div class="col-12 col-lg-8">
        <div class="row align-items-center"
          @click="getOneTeacherFirebaseData(courseData.uid)">
          <div class="col-2 cursor-pointer">
            <img :src="courseData.teacherImg" alt="老師照片" class="user-photo">
          </div>
          <div class="col-auto fs-2 cursor-pointer">
            {{ courseData.displayName }}
          </div>
        </div>
        <div class="row my-3">
          <div class="col-10">
            {{ courseData.teacherIntro }}
          </div>
        </div>
        <div class="row my-3">
          <p>關於課程</p>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <i class="bi bi-clock me-2"></i>
              課程時長<br>{{ courseData.time }}分鐘
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <i class="bi bi-people-fill me-2"></i>
              已被購買 <br> {{ courseData.whoBuy.length }}次
            </div>
          </div>
          <div class="col-auto">
            <div class="d-flex align-items-center">
              <i class="bi bi-tools me-2"></i>
              <div>
                上課方式<br>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="courseData.courseMethod[0]">
                  {{ courseData.courseMethod[0] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="courseData.courseMethod[1]">
                  {{ courseData.courseMethod[1] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="courseData.courseMethod[2]">
                  {{ courseData.courseMethod[2] }}
                </span>
              </div>
            </div>
          </div>
          <div class="col-auto"
                v-if="courseData.cityName">
            <div class="d-flex align-items-center">
              <i class="bi bi-geo-alt-fill me-2"></i>
              上課地點<br> {{ courseData.cityName }}
            </div>
          </div>
        </div>
       </div>
      <div class="col-12 col-lg-4 p-4 border"
          v-if="this.user.uid !== courseData.uid">
        <h4 class="border-bottom pb-2">購買單堂課程</h4>
        <div class="mb-3">
          <span class="fs-5 me-1">售價</span>
          <span class="fs-1">NT${{ courseData.price }}</span> 
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-danger w-75"
            @click="goCheckoutPage(),buyNowData.id = courseData.id ,buyNowData.uid = user.uid">
            立即購買
          </button>
          <button type="button" class="btn btn-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="加入購物車"
                  @click="addCart(user.uid, courseData.id)">
            <i class="bi bi-cart-fill"></i>
          </button>
        </div>
      </div>
      <div class="col-12 col-lg-4 p-4 border"
          v-if="this.user.uid === courseData.uid">
        <h4 class="border-bottom pb-2">購買人數</h4>
        <div class="mb-3">
          <span class="fs-5 me-1">共</span>
          <span class="fs-1">{{ courseData.whoBuy.length }}人</span> 
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-danger w-25"
          data-bs-toggle="modal" data-bs-target="#editMyCourseModal">
            編輯
          </button>
        </div>
      </div>
    </div>
  </div>
  <edit-my-course-modal></edit-my-course-modal>
</template>
  
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'
import EditMyCourseModal from '../components/EditMyCourseModal.vue'
import cartStore from '../stores/cartStore'

export default {
  components: { EditMyCourseModal },
  data () {
    return {
      id: ''
    }
  },
  computed: {
    ...mapState(dataStore, ['bookmarkState','user','teacherData']),
    ...mapWritableState(dataStore, ['courseData']),
    ...mapWritableState(cartStore, ['buyNowData'])
  
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged' ,'toggleBookmark','getOneCoursesFirebaseData', 'getOneTeacherFirebaseData']),
    ...mapActions(goStore, ['goCheckoutPage']),
    ...mapActions(cartStore, ['addCart']),
    
  },
  created () {
    this.onAuthStateChanged()
    // 防止從新整理產生讀不到資料
    this.id = this.$route.params.coursePageId
    this.getOneCoursesFirebaseData(this.id)

  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  object-fit: cover;
}
.user-photo {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  object-fit: cover;
}
.course-photo {
  height: 500px;
  object-fit: cover;
  @media (max-width: 768px)  {
    height: 300px;
  }
  @media (max-width: 576px)  {
    height: 200px;
  }
}
</style>