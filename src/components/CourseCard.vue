<template>
  <div class="col"
        v-for="item in courseCardData" :key="item.id">
    <div class="card rounded-3 scale h-100"
        @click="goCoursePage(item.id)">
      <div class="card-img overflow-hidden position-relative">
        <img :src="item.data.courseImg" alt="商品圖片" class="card-img-top filter-grayscale">
        <i class=""
          :class="bookmarkState(item.id)"
          @click.stop="toggleBookmark(item.id)"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="加入 / 移除收藏"
        ></i>
      </div>
      <div class="card-body d-flex flex-column">
        <div class="mb-1 d-flex align-items-start">
          <span class="badge rounded-pill text-bg-danger align-middle mt-2">{{ item.data.courseCategory }}</span>
          <span class="fs-5 fw-bold ms-2">{{ item.data.courseName }}</span>   
        </div>
        <div class="mt-auto">
          <div class="mb-1">
            by {{ item.data.displayName }}
          </div>
          <div class="mb-1">
            <i class="bi bi-clock"></i>
            {{ item.data.time }}
            <i class="bi bi-geo-alt ms-2"></i>
            {{ item.data.cityName || '線上' }}
            <i class="bi bi-people ms-2"></i>
            {{ item.data.whoBuy.length}}
          </div>
          <div class="mb-1">
            <span class="me-3 fs-4 fw-bold">
              NT$ {{ $filters.currency(item.data.price) }}
            </span>
            <span v-if="item.data.whoBuy">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import courseCardStore from '@/stores/courseCardStore'
import filterStore from '@/stores/filterStore'
import goStore from '@/stores/goStore'

export default {
  watch: {
    // 所有課程頁面用(為了搜尋排序)
    currentPageCoursesData() {
      if (this.$router.currentRoute.value.fullPath === '/AllCourses'){
        this.courseCardData = this.currentPageCoursesData
      }
    },
    // 為了收藏頁變動時能重新渲染
    userBookmarkCourses () {
      if (this.$router.currentRoute.value.fullPath === '/MyCourses' && this.myCoursesState === 'bookmark')
      this.courseCardData = this.userBookmarkCourses
    }
  },
  computed: {
    ...mapState(dataStore, ['bookmarkState', 'userStudentCourses', 'userBookmarkCourses', 'myCoursesState']),
    ...mapWritableState(courseCardStore, ['courseCardData']),
    ...mapState(filterStore, ['currentPageCoursesData']),
  },
  methods: {
    ...mapActions(dataStore, ['toggleBookmark', 'getOneCoursesFirebaseData']),
    ...mapActions(goStore, ['goCoursePage']),

  },
  created () {
    if (this.$router.currentRoute.value.fullPath === '/AllCourses') {
      this.courseCardData = this.currentPageCoursesData
    } else if (this.$router.currentRoute.value.fullPath === '/MyCourses') {
      this.courseCardData = this.userStudentCourses
    }
  }
}
</script>

<style lang="scss" scoped>
  .scale{
    cursor:pointer;
    &:hover{
      img{
        transform: scale(1.15);
      }
      .bookmark-off{
        top: -15px;
      }
      .filter-grayscale {
        -webkit-filter:grayscale(0);
      }
    }
  }
.card-img-top { 
  height: 180px;
  object-fit: cover;
  transition: 0.5s;
}
.bookmark-off {
  font-size: 35px;
  position: absolute;
  right: 5px;
  top: -55px;
  z-index: 10;
  transition: 0.5s;
}
.bookmark-on {
  font-size: 35px;
  position: absolute;
  right: 5px;
  top: -15px;
  z-index: 10;
}
.filter-grayscale {
  -webkit-filter:grayscale(0);
}
  // 橫向專用
  .table-image {
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
