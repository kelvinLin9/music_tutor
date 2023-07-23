<template>
  <div class="container mt-5">
    <div class="row align-items-center mb-3">
      <div class="col-4 test">
        <div class="d-flex align-items-center">
          <img src="https://fakeimg.pl/80x80/" alt="">
          <h1 class="ms-auto">陳先生</h1>
        </div>
      </div>
      <div class="col-6 ms-auto">
        <div class="row align-items-center">
          <div class="col text-center">
            <h5 class="test">參加課程</h5>
            <p class="fs-1 test">{{ studentCoursesData.length }}</p>
          </div>
          <div class="col text-center">
            <h5>已開課程</h5>
            <p class="fs-1">{{ teacherCoursesData.length }}</p>
          </div>
          <div class="col text-center">
            <h5>目前收藏</h5>
            <p class="fs-1">{{ bookmarksCoursesData.length }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row align-items-center mb-3">
      <div class="col-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'student'}"
          @click="myCoursesState = 'student'">
        <i class="bi bi-pen"></i>
        <span>我是學生</span>
      </div>
      <div class="col-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'teacher'}"
          @click="myCoursesState = 'teacher'">
        <i class="bi bi-book"></i>
        <span>我是老師</span>
      </div>
      <div class="col-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'bookmark'}"
          @click="myCoursesState = 'bookmark'">
        <i class="bi bi-bookmarks-fill"></i>
        <span>我的收藏</span>
      </div>
    </div>
  </div>

  <div class="container courses mt-3"
      v-if="myCoursesState === 'student'">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
      v-for="item in studentCoursesData" :key="item.id">
        <div class="card rounded-3 scale"
        @click="goCoursePage(item.id)">
          <div class="card-img overflow-hidden position-relative">
            <img src="https://fakeimg.pl/200x150/" alt="" class="card-img-top">
            <i class="bookmark"
            :class="bookmarkState(item.id)"
            @click.stop="toggleBookmark(item.id)"        
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏"
            ></i>
          </div>
          <div class="card-body">
            <div class="mb-1">
              <span class="badge rounded-pill text-bg-danger test align-middle">{{ item.courseCategory }}</span>
              <span class="">&ensp;{{ item.courseName }}</span>   
            </div>
            <div class="mb-1 text-primary">
              by {{ item.teacherName }}
            </div>
            <div class="mb-1">
              <i class="bi bi-clock-fill"></i>
              {{ item.time }}
              <i class="bi bi-geo-alt-fill"></i>
              {{ item.cityName }}
            </div>
            <div class="mb-1">
              NT$ {{ item.price }}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="container courses mt-3"
      v-else-if="myCoursesState === 'teacher'">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
      v-for="item in teacherCoursesData" :key="item.id">
        <div class="card rounded-3 scale"
        @click="goCoursePage(item.id)">
          <div class="card-img overflow-hidden position-relative">
            <img src="https://fakeimg.pl/200x150/" alt="" class="card-img-top">
            <i class="bookmark"
            :class="bookmarkState(item.id)"
            @click.stop="toggleBookmark(item.id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏"
            ></i>
          </div>
          <div class="card-body">
            <div class="mb-1">
              <span class="badge rounded-pill text-bg-danger test align-middle">{{ item.courseCategory }}</span>
              <span class="">&ensp;{{ item.courseName }}</span>   
            </div>
            <div class="mb-1 text-primary">
              by {{ item.teacherName }}
            </div>
            <div class="mb-1">
              <i class="bi bi-clock-fill"></i>
              {{ item.time }}
              <i class="bi bi-geo-alt-fill"></i>
              {{ item.cityName }}
            </div>
            <div class="mb-1">
              NT$ {{ item.price }}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="container courses mt-3"
      v-else>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
      v-for="item in bookmarksCoursesData" :key="item.id">
        <div class="card rounded-3 scale"
        @click="goCoursePage(item.id)">
          <div class="card-img overflow-hidden position-relative">
            <img src="https://fakeimg.pl/200x150/" alt="" class="card-img-top">
            <i class="bookmark"
            :class="bookmarkState(item.id)"
            @click.stop="toggleBookmark(item.id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏"
            ></i>
          </div>
          <div class="card-body">
            <div class="mb-1">
              <span class="badge rounded-pill text-bg-danger test align-middle">{{ item.courseCategory }}</span>
              <span class="">&ensp;{{ item.courseName }}</span>   
            </div>
            <div class="mb-1 text-primary">
              by {{ item.teacherName }}
            </div>
            <div class="mb-1">
              <i class="bi bi-clock-fill"></i>
              {{ item.time }}
              <i class="bi bi-geo-alt-fill"></i>
              {{ item.cityName }}
            </div>
            <div class="mb-1">
              NT$ {{ item.price }}
            </div>
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
import goStore from '@/stores/goStore'

export default {
  computed: {
    ...mapState(dataStore, ['teacherCoursesData', 'studentCoursesData' , 'bookmarksCoursesData', 'bookmarkState']),
    ...mapWritableState(dataStore, ['myCoursesState'])
  },
  methods: {
    ...mapActions(dataStore, ['getTeacherCoursesData', 'getStudentCoursesData', 'getBookmarkCoursesData', 'toggleBookmark']),
    ...mapActions(goStore, ['goCoursePage'])
    
  },
  created () {
    this.getTeacherCoursesData()
    this.getStudentCoursesData()
    this.getBookmarkCoursesData()
  }
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor:pointer;
}
.card-img-top { 
  // width: 100%;
  object-fit: cover;
  transition: 0.5s;
}

.scale{
  cursor:pointer;
  &:hover{
    .btn{
      opacity: 1;
    }
    img{
      transform: scale(1.15);
    }
  }
}
.bookmark {
  font-size: 40px;
  position: absolute;
  right: 5px;
  top: -15px;
  z-index: 10;
}
</style>