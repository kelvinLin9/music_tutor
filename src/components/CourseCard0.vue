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
      <!-- <div class="card-body d-flex flex-column">
        <div class="mb-1">
          <span class="badge rounded-pill text-bg-primary text-white">
            {{ item.data.courseCategory }}
          </span>
          <span class="fs-5 fw-bold ms-2">{{ item.data.courseName }}</span>   
        </div>
        <div class="mt-auto">
          <div class="mb-1 text-secondary">
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
            <span class="me-3 fs-5 fw-bold">
              NT$ {{ $filters.currency(item.data.price) }}
            </span>
            <span v-if="item.data.whoBuy">
            </span>
          </div>
        </div>
      </div> -->
      <!-- 新的 -->
      <div class="">
        <div class="description cursor-pointer"
            @click="goCoursePage(item.id)">
          <h2 class="fs-5 fw-bold d-flex">
            {{ item.data.courseName }}
          </h2>
          

        </div>
      </div>
      <div class="mt-auto px-16 pb-16">
        <h3 class="fs-6">by {{ item.data.displayName }}</h3>
        <p> 
          <i class="bi bi-clock"></i>
          {{ item.data.time }}
          <i class="bi bi-geo-alt ms-2"></i>
          {{ item.data.cityName || '線上' }}
          <i class="bi bi-people ms-2"></i>
          {{ item.data.whoBuy.length}}
        </p>
        <p class="d-flex justify-content-between align-items-center">
          <span class="fs-5 fw-bold">NT$ {{ $filters.currency(item.data.price) }}</span>
        </p>
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

// 新的
$color_white: #fff;
$color_prime: #ff715f;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;


.description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    h2 {
      line-height: 1;
    }
    h3 {
      color: $color_grey_dark;
      margin-top: 5px;
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }


</style>
