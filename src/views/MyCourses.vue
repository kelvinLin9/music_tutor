<template>
  <div class="container mt-5">
    <!-- 上方統計欄 -->
    <div class="row align-items-center mb-3">
      <div class="col-12 col-lg-6 mb-3 mb-lg-0">
        <div class="d-flex align-items-center">
          <div class="user-photo position-relative">
            <img :src="teacherData.teacherImg" alt="大頭照"
                v-if="teacherData.teacherImg">
            <img src="../assets/images/預設大頭貼.png" alt="預設大頭照"
                v-if="!teacherData.teacherImg">
          </div>
          <h1 class="ms-5"> {{ user.displayName }} </h1>
        </div>
      </div>
      <div class="col-12 col-lg-6 ms-auto">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto text-center">
            <h5>參加課程</h5>
            <p class="fs-1">{{ userStudentCourses.length }}</p>
          </div>
          <div class="col-auto text-center">
            <h5>已開課程</h5>
            <p class="fs-1">{{ userTeacherCourses.length }}</p>
          </div>
          <div class="col-auto text-center">
            <h5>目前收藏</h5>
            <p class="fs-1">{{ userBookmarkCourses.length }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分類按鈕 -->
    <div class="row align-items-center mb-3">
      <div class="col-4 col-md-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'student'}"
          @click="myCoursesState = 'student'">
        <i class="bi bi-pen"
          :class="{'text-primary': myCoursesState === 'student'}">
        </i>
        <span :class="{'text-primary': myCoursesState === 'student'}">
          我是學生
        </span>
      </div>
      <div class="col-4 col-md-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'teacher'}"
          @click="myCoursesState = 'teacher'">
        <i class="bi bi-book"
        :class="{'text-primary': myCoursesState === 'teacher'}">
        </i>
        <span :class="{'text-primary': myCoursesState === 'teacher'}">
          我是老師
        </span>
      </div>
      <div class="col-4 col-md-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'bookmark'}"
          @click="myCoursesState = 'bookmark'">
        <i class="bi bi-bookmarks-fill"
          :class="{'text-primary': myCoursesState === 'bookmark'}"
        >
        </i>
        <span :class="{'text-primary': myCoursesState === 'bookmark'}">
          我的收藏
        </span>
      </div>
      <div class="col-auto ms-auto pb-2 cursor-pointer">
        <i class="bi bi-grid-fill text-danger fs-2"
            v-if="displayState === 'grid'"
            @click="displayState = 'list'"
        >
        </i>
        <i class="bi bi-list-task text-danger fs-2"
            v-if="displayState === 'list'"
            @click="displayState = 'grid'"
        >
        </i>
      </div>
    </div>
  </div>
  <!-- 學生 -->
  <div class="container my-3"
        v-if="myCoursesState === 'student' && displayState === 'grid'">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
      v-for="item in userStudentCourses" :key="item[0].id">
        <div class="card rounded-3 scale h-100"
        @click="getOneCoursesFirebaseData(item[0].id)">
          <div class="card-img overflow-hidden position-relative">
            <img :src="item[0].data.courseImg" alt="課程圖片" class="card-img-top">
            <i class="bookmark"
            :class="bookmarkState(item[0].id)"
            @click.stop="toggleBookmark(item[0].id)"        
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏"
            ></i>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="mb-1">
              <span class="badge rounded-pill text-bg-danger test align-middle">{{ item[0].data.courseCategory }}</span>
              <span class="">&ensp;{{ item[0].data.courseName }}</span>   
            </div>
            <div class="mt-auto">
              <div class="mb-1 text-primary">
                by {{ item[0].data.displayName }}
              </div>
              <div class="mb-1">
                <i class="bi bi-clock-fill"></i>
                {{ item[0].data.time }}
                <i class="bi bi-geo-alt-fill"></i>
                {{ item[0].data.cityName || '線上' }}
              </div>
              <div class="mb-1">
                <span class="me-3">
                  NT$ {{ $filters.currency(item[0].data.price) }}
                </span>
                <span class="">
                  <i class="bi bi-people-fill me-2"></i>
                  {{ item[0].data.whoBuy.length}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- 學生橫向呈現 -->
  <div class="container my-3"
      v-else-if="myCoursesState === 'student' && displayState === 'list'">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th width="" class="" colspan="5">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userStudentCourses" :key="item[0].id">
              <td width="100"
                  @click="getOneCoursesFirebaseData(item[0].id)">
                  <img :src="item[0].data.courseImg" alt="課程圖片" class="table-image cursor-pointer">
              </td>
              <td>
                <div class="">
                  {{item[0].data.courseName }}
                </div>
                <div class="text-primary">
                  by {{ item[0].data.displayName }}
                </div>
                <div class="">
                  NT$ {{ $filters.currency(item[0].data.price) }}
                  <i class="bi bi-clock-fill ms-2"></i>
                  {{ item[0].data.time }}
                </div>
              </td>
              <td class="">
                購買時間：<br>
                {{ this.$moment(item.timestamp).format('YYYY/MM/DD')}}<br>
                開課時間：<br>
                {{}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- 老師 -->
  <div class="container my-3"
      v-else-if="myCoursesState === 'teacher' && displayState === 'grid'">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
      v-for="item in userTeacherCourses " :key="item.id">
        <div class="card rounded-3 scale h-100"
        @click="getOneCoursesFirebaseData(item.id)">
          <div class="card-img overflow-hidden position-relative">
            <img :src="item.data.courseImg" alt="課程圖片" class="card-img-top">
            <i class="bookmark"
            :class="bookmarkState(item.id)"
            @click.stop="toggleBookmark(item.id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏"
            ></i>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="mb-1">
              <span class="badge rounded-pill text-bg-danger test align-middle">{{ item.data.courseCategory }}</span>
              <span class="">&ensp;{{ item.data.courseName }}</span>   
            </div>
            <div class="mt-auto">
              <div class="mb-1 text-primary">
                by {{ item.data.displayName }}
              </div>
              <div class="mb-1">
                <i class="bi bi-clock-fill"></i>
                {{ item.data.time }}
                <i class="bi bi-geo-alt-fill"></i>
                {{ item.data.cityName || '線上' }}
              </div>
              <!-- <div class="mb-1">
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[0]">
                  {{ item.data.courseMethod[0] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[1]">
                  {{ item.data.courseMethod[1] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[2]">
                  {{ item.data.courseMethod[2] }}
                </span>
              </div> -->
              <div class="mb-1">
                <span class="me-3">
                  NT$ {{ $filters.currency(item.data.price) }}
                </span>
                <span v-if="item.data.whoBuy">
                  <i class="bi bi-people-fill me-2"></i>
                  {{ item.data.whoBuy.length}}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- 老師橫向呈現 -->
  <div class="container my-3"
      v-else-if="myCoursesState === 'teacher' && displayState === 'list'">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th width="" class="" colspan="5">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userTeacherCourses" :key="item.id">
              <td width="100"
                  @click="getOneCoursesFirebaseData(item.id)">
                  <img :src="item.data.courseImg" alt="課程圖片" class="table-image cursor-pointer">
              </td>
              <td>
                <div class="">
                  {{item.data.courseName }}
                </div>
                <div class="text-primary">
                  by {{ item.data.displayName }}
                </div>
                <div class="">
                  NT$ {{ $filters.currency(item.data.price) }}
                  <i class="bi bi-clock-fill ms-2"></i>
                  {{ item.data.time }}
                </div>
                <div v-if="item.data.whoBuy">
                  <i class="bi bi-people-fill me-2"></i>
                  {{ item.data.whoBuy.length}}
                </div>
              </td>
              <td class="">
                我的學生
                <!-- {{ item.data.whoBuy[0].uid }} -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- 收藏 -->
  <div class="container my-3"
        v-else-if="myCoursesState === 'bookmark' && displayState === 'grid'">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
      v-for="item in userBookmarkCourses" :key="item.id">
        <div class="card rounded-3 scale h-100"
        @click="getOneCoursesFirebaseData(item.id)">
          <div class="card-img overflow-hidden position-relative">
            <img :src="item.data.courseImg" alt="課程圖片" class="card-img-top">
            <i class="bookmark"
            :class="bookmarkState(item.id)"
            @click.stop="toggleBookmark(item.id)"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="加入 / 移除收藏"
            ></i>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="mb-1">
              <span class="badge rounded-pill text-bg-danger test align-middle">{{ item.data.courseCategory }}</span>
              <span class="">&ensp;{{ item.data.courseName }}</span>   
            </div>
            <div class="mt-auto">
              <div class="mb-1 text-primary">
                by {{ item.data.displayName }}
              </div>
              <div class="mb-1">
                <i class="bi bi-clock-fill"></i>
                {{ item.data.time }}
                <i class="bi bi-geo-alt-fill"></i>
                {{ item.data.cityName || '線上' }}
              </div>
              <!-- <div class="mb-1">
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[0]">
                  {{ item.data.courseMethod[0] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[1]">
                  {{ item.data.courseMethod[1] }}
                </span>
                <span class="bg-info rounded-2 px-2 me-2"
                      v-if="item.data.courseMethod[2]">
                  {{ item.data.courseMethod[2] }}
                </span>
              </div> -->
              <div class="mb-1">
                <span class="me-3">
                  NT$ {{ $filters.currency(item.data.price) }}
                </span>
                <span v-if="item.data.whoBuy">
                  <i class="bi bi-people-fill me-2"></i>
                  {{ item.data.whoBuy.length}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- 收藏橫向呈現 -->
  <div class="container my-3"
      v-else-if="myCoursesState === 'bookmark' && displayState === 'list'">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th width="" class="" colspan="5">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userBookmarkCourses" :key="item.id">
              <td width="100"
                  @click="getOneCoursesFirebaseData(item.id)">
                  <img :src="item.data.courseImg" alt="課程圖片" class="table-image cursor-pointer">
              </td>
              <td>
                <div class="">
                  {{item.data.courseName }}
                </div>
                <div class="text-primary">
                  by {{ item.data.displayName }}
                </div>
                <div class="">
                  NT$ {{ $filters.currency(item.data.price) }}
                  <i class="bi bi-clock-fill ms-2"></i>
                  {{ item.data.time }}
                </div>
                <div >
                  <i class="bi bi-people-fill me-2"></i>
                  {{ item.data.whoBuy.length}}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
    ...mapState(dataStore, ['user', 'teacherData', 'userTeacherCourses', 'userStudentCourses', 'userBookmarkCourses', 'bookmarkState']),
    ...mapWritableState(dataStore, ['myCoursesState', 'displayState'])
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged', 'toggleBookmark', 'getOneCoursesFirebaseData']),
    
  },
  created () {
    this.onAuthStateChanged()
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
  font-size: 40px;
  position: absolute;
  right: 5px;
  top: -55px;
  z-index: 10;
  transition: 0.5s;
}
.bookmark-on {
  font-size: 40px;
  position: absolute;
  right: 5px;
  top: -15px;
  z-index: 10;
}
.filter-grayscale {
  -webkit-filter:grayscale(0);
}
.user-photo {
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  i {
    position: absolute;
    right: -5px;
    bottom: -5px;
    z-index: 10;
    font-size: 32px;
    }
  }
  // 橫向專用
.table-image {
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}
</style>