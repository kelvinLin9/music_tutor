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
          <h1 class="ms-5"> {{ teacherData.displayName }} </h1>
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
  <!-- Loading -->
  <CoursesLoading class="my-3" v-if="loading"/>
  <!-- grid -->
  <div class="container my-3"
      v-if="displayState === 'grid' && !loading">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
      <CourseCard/>
    </div>
  </div>




    <!-- 學生橫向呈現 -->
  <div class="container my-3"
      v-if="myCoursesState === 'student' && displayState === 'list' && !loading">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th width="" class="" colspan="2">
                課程資訊
              </th>
              <th width="" class="">
                購買時間
              </th>
              <th>
                開課時間
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userStudentCourses" :key="item.id">
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
                  <i class="bi bi-clock ms-2"></i>
                  {{ item.data.time }}
                </div>
              </td>
              <td class="">
                {{ this.$moment(item.timestamp).format('YYYY/MM/DD') }}<br>
              </td>
              <td class="">
                {{ item.classSchedule || '尚未開課' }}<br>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- 老師橫向呈現 -->
  <div class="container my-3"
      v-if="myCoursesState === 'teacher' && displayState === 'list' && !loading">
    <div class="row">
      <div class="col-12">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th width="" class="" colspan="2">
                課程資訊
              </th>
              <th width="" class="">
                人數統計
              </th>
              <th width="" class="">
                設定開課時間
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
                  <i class="bi bi-clock ms-2"></i>
                  {{ item.data.time }}
                </div>
                <div v-if="item.data.whoBuy">
                  <i class="bi bi-people me-2"></i>
                  {{ item.data.whoBuy.length}}
                </div>
              </td>
              <td>
                <p>已約定：</p>
                <p>未完：</p>
                <p>完課：</p>
              </td>
              <td class="">
                <button type="button" class="btn btn-outline-danger"
                  data-bs-toggle="modal" data-bs-target="#SetUpClassSchedule"
                  @click="SetUpClassSchedule(item)">
                  設定
                </button>
                <a href="#"></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <SetUpClassScheduleModal />
    <!-- 收藏橫向呈現 -->
  <!-- <div class="container my-3"
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
                  <i class="bi bi-clock ms-2"></i>
                  {{ item.data.time }}
                </div>
                <div >
                  <i class="bi bi-people me-2"></i>
                  {{ item.data.whoBuy.length}}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div> -->
  
    

</template>
  
<script>
import CoursesLoading from '../components/CoursesLoading.vue'
import CourseCard from '../components/CourseCard.vue'
import SetUpClassScheduleModal from '../components/SetUpClassScheduleModal.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'
import courseCardStore from '@/stores/courseCardStore'

export default {
  components: { CourseCard, CoursesLoading, SetUpClassScheduleModal },
  watch: {
    myCoursesState() {
      if(this.myCoursesState === 'teacher') {
        this.courseCardData = this.userTeacherCourses
      } else if (this.myCoursesState === 'bookmark') {
        this.courseCardData = this.userBookmarkCourses
      } else if (this.myCoursesState === 'student') {
        this.courseCardData = this.userStudentCourses
      } 
    }
  },
  computed: {
    ...mapState(dataStore, ['teacherData', 'userTeacherCourses', 'userStudentCourses', 'userBookmarkCourses', 'loading']),
    ...mapWritableState(dataStore, ['myCoursesState', 'displayState', 'classScheduleData']),
    ...mapWritableState(courseCardStore, ['courseCardData']),
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged', 'getOneCoursesFirebaseData', 'SetUpClassSchedule']),
    
  },
  created () {
    this.onAuthStateChanged()
    this.courseCardData = this.userTeacherCourses
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