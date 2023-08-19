<template>
  <div class="container mt-48">
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
          <h1 class="ms-48"> {{ teacherData.displayName }} </h1>
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
      <div class="col-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'student'}"
          @click="myCoursesState = 'student', courseCardData = userStudentCourses">
        <i class="bi bi-pen"
          :class="{'text-primary': myCoursesState === 'student'}">
        </i>
        <span :class="{'text-primary': myCoursesState === 'student'}">
          我是學生
        </span>
      </div>
      <div class="col-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'teacher'}"
          @click="myCoursesState = 'teacher', courseCardData = userTeacherCourses">
        <i class="bi bi-book"
        :class="{'text-primary': myCoursesState === 'teacher'}">
        </i>
        <span :class="{'text-primary': myCoursesState === 'teacher'}">
          我是老師
        </span>
      </div>
      <div class="col-3 border-bottom border-5 pb-2 cursor-pointer"
          :class="{'border-danger': myCoursesState === 'bookmark'}"
          @click="myCoursesState = 'bookmark', courseCardData = userBookmarkCourses">
        <i class="bi bi-bookmarks"
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
  <div class="container">
    <CoursesLoadingList v-if="loading"/>
  </div>
  <!-- 無課程提示 -->
  <div class="container d-flex justify-content-center align-items-center text-center" v-if="!loading">
    <div v-if="userStudentCourses.length === 0 && myCoursesState === 'student'">
      <p class="fs-1">尚未購買課程</p>
      <RouterLink to="/AllCourses">
        <button type="button" class="btn btn-primary">
          馬上購買
        </button>
      </RouterLink>
    </div>
    <div v-if="userTeacherCourses.length === 0 && myCoursesState === 'teacher'">
      <p class="fs-1">尚未建立課程</p>
      <RouterLink to="/CreateCourses/BeATeacherStep1">
        <button type="button" class="btn btn-primary">
          我要開課
        </button>
      </RouterLink>
    </div>
    <div v-if="userBookmarkCourses.length === 0 && myCoursesState === 'bookmark'">
      <p class="fs-1">尚未收藏課程</p>
      <RouterLink to="/AllCourses">
        <button type="button" class="btn btn-primary">
          添加收藏
        </button>
      </RouterLink>
    </div>
  </div>
  <!-- grid -->
  <div class="container my-3"
      v-if="displayState === 'grid' && !loading">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
      <CourseCard/>
    </div>
  </div>
  <!-- list -->
  <div class="container my-3" v-if="!loading">
    <div class="row">
      <div class="col-12">
        <!-- 學生 -->
        <table class="table table-hover align-middle"
        v-if="userStudentCourses.length !== 0 && myCoursesState === 'student' && displayState === 'list'">
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
              <td width="100" class="cursor-pointer"
                  @click="getOneCoursesFirebaseData(item.id)">
                  <img :src="item.data.courseImg" alt="課程圖片" class="table-image">
              </td>
              <td class="cursor-pointer" 
                  @click="getOneCoursesFirebaseData(item.id)">
                <div class="mb-1 d-flex align-items-center">
                  <span class="badge rounded-pill text-bg-danger">{{ item.data.courseCategory }}</span>
                  <span class="fs-5 fw-bold ms-2">{{ item.data.courseName }}</span>   
                </div>
                <div class="">
                  by {{ item.data.displayName }}
                </div>
                <div class="">
                  <i class="bi bi-clock"></i>
                  {{ item.data.time }}
                  <i class="bi bi-geo-alt ms-2"></i>
                  {{ item.data.cityName || '線上' }}
                  <i class="bi bi-people ms-2"></i>
                  {{ item.data.whoBuy.length}}
                </div>
                <div class="fs-5 fw-bold">
                  NT$ {{ $filters.currency(item.data.price) }}
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

        <!-- 老師 -->
        <table class="table table-hover align-middle"
                v-if="userStudentCourses.length !== 0 && myCoursesState === 'teacher' && displayState === 'list'">
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
              <td width="100" class="cursor-pointer"
                  @click="getOneCoursesFirebaseData(item.id)">
                  <img :src="item.data.courseImg" alt="課程圖片" class="table-image">
              </td>
              <td class="cursor-pointer" 
                  @click="getOneCoursesFirebaseData(item.id)">
                <div class="mb-1 d-flex align-items-center">
                  <span class="badge rounded-pill text-bg-danger">{{ item.data.courseCategory }}</span>
                  <span class="fs-5 fw-bold ms-2">{{ item.data.courseName }}</span>   
                </div>
                <div class="">
                  by {{ item.data.displayName }}
                </div>
                <div class="">
                  <i class="bi bi-clock"></i>
                  {{ item.data.time }}
                  <i class="bi bi-geo-alt ms-2"></i>
                  {{ item.data.cityName || '線上' }}
                  <i class="bi bi-people ms-2"></i>
                  {{ item.data.whoBuy.length}}
                </div>
                <div class="fs-5 fw-bold">
                  NT$ {{ $filters.currency(item.data.price) }}
                </div>
              </td>
              <td>
                <p>未約定：</p>
                <p>已約定：</p>
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
        <!-- 設定上課時間 -->
        <SetUpClassScheduleModal />

        <!-- 收藏 -->
        <table class="table table-hover align-middle"
                v-if="userStudentCourses.length !== 0 && myCoursesState === 'bookmark' && displayState === 'list'">
          <thead>
            <tr>
              <th width="" class="" colspan="2">
                課程資訊
              </th>
              <th width="" class="">
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userBookmarkCourses" :key="item.id">
              <td width="100" class="cursor-pointer"
                  @click="getOneCoursesFirebaseData(item.id)">
                  <img :src="item.data.courseImg" alt="課程圖片" class="table-image">
              </td>
              <td class="cursor-pointer" 
                  @click="getOneCoursesFirebaseData(item.id)">
                <div class="mb-1 d-flex align-items-center">
                  <span class="badge rounded-pill text-bg-danger">{{ item.data.courseCategory }}</span>
                  <span class="fs-5 fw-bold ms-2">{{ item.data.courseName }}</span>   
                </div>
                <div class="">
                  by {{ item.data.displayName }}
                </div>
                <div class="">
                  <i class="bi bi-clock"></i>
                  {{ item.data.time }}
                  <i class="bi bi-geo-alt ms-2"></i>
                  {{ item.data.cityName || '線上' }}
                  <i class="bi bi-people ms-2"></i>
                  {{ item.data.whoBuy.length}}
                </div>
                <div class="fs-5 fw-bold">
                  NT$ {{ $filters.currency(item.data.price) }}
                </div>
              </td>
              <td>
                <a href="#" @click.prevent="toggleBookmark(item.id)">移除</a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>

 


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
import CoursesLoadingList from '../components/CoursesLoadingList.vue'
import CourseCard from '../components/CourseCard.vue'
import SetUpClassScheduleModal from '../components/SetUpClassScheduleModal.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'
import courseCardStore from '@/stores/courseCardStore'

export default {
  components: { CourseCard, CoursesLoadingList, SetUpClassScheduleModal },
  computed: {
    ...mapState(dataStore, ['teacherData', 'userTeacherCourses', 'userStudentCourses', 'userBookmarkCourses', 'loading']),
    ...mapWritableState(dataStore, ['myCoursesState', 'displayState', 'classScheduleData']),
    ...mapWritableState(courseCardStore, ['courseCardData']),
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged', 'getOneCoursesFirebaseData', 'SetUpClassSchedule', 'toggleBookmark']),
    
  },
  created () {
    this.onAuthStateChanged()
    this.courseCardData = this.userTeacherCourses
    this.displayState = 'list'
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