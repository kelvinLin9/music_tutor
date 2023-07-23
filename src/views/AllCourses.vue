<template>
  <div class="container-fluid banner">
    <div class="card">
      <img src="https://fakeimg.pl/180x20/" alt="" class="card-img">
      <div class="card-img-overlay d-flex justify-content-center  align-items-center">
        <h2 class="border-top border-bottom border-primary">
          課程列表
        </h2>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center g-2">
      <div class="col">
        <div class="row g-1 align-items-center">
          <div class="col-auto">
            <label for="selectCourseCategory" class="col-form-label">音樂技能：</label>
          </div>
          <div class="col-auto">
            <input type="text" id="selectCourseCategory" class="form-control w-75" aria-labelledby="selectCourseCategory"
            v-model="selectCourseCategory">
          </div>
        </div>      
      </div>
      <div class="col">
        <div class="row g-1 align-items-center">
          <div class="col-auto">
            上課地點：
          </div>
          <div class="col-auto">
            <select class="form-select" aria-label="Default select example"
            v-model="selectCityName">
              <option value="" selected>請選擇</option>
              <option value="台北市">台北市</option>
              <option value="基隆市">基隆市</option>
              <option value="新北市">新北市</option>
              <option value="宜蘭縣">宜蘭縣</option>
              <option value="桃園市">桃園市</option>
              <option value="新竹市">新竹市</option>
              <option value="新竹縣">新竹縣</option>
              <option value="苗栗縣">苗栗縣</option>
              <option value="台中市">台中市</option>
              <option value="彰化縣">彰化縣</option>
              <option value="南投縣">南投縣</option>
              <option value="嘉義市">嘉義市</option>
              <option value="嘉義縣">嘉義縣</option>
              <option value="雲林縣">雲林縣</option>
              <option value="台南市">台南市</option>
              <option value="高雄市">高雄市</option>
              <option value="澎湖縣">澎湖縣</option>
              <option value="金門縣">金門縣</option>
              <option value="屏東縣">屏東縣</option>
              <option value="台東縣">台東縣</option>
              <option value="花蓮縣">花蓮縣</option>
              <option value="連江縣">連江縣</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row g-1 align-items-center">
          <div class="col-auto">
            <label for="selectCourseName" class="col-form-label">課程名稱：</label>
          </div>
          <div class="col-auto">
            <input type="search" id="selectCourseName" class="form-control w-75" aria-labelledby="searchHelpInline"
            placeholder="請輸入課程名稱"
            v-model="selectCourseName">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row"
     v-if="filterData.length == 0">
      <div class="col text-center">
        很抱歉，沒有符合條件課程
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
      <div class="col"
      v-for="item in filterData" :key="item.id">
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

  <PaginationCom />
</template>
  
<script>
import PaginationCom from '../components/PaginationCom.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import filterStore from '@/stores/filterStore'
import goStore from '@/stores/goStore'

export default {
  components: { PaginationCom },
  computed: {
    ...mapState(dataStore, ['coursesData', 'bookmarkState']),
    ...mapState(filterStore, ['filterData']),
    ...mapWritableState(filterStore, ['selectCityName', 'selectCourseCategory', 'selectCourseName'])
  },
  methods: {
    ...mapActions(dataStore, ['getBookmarkCoursesData','toggleBookmark']),
    ...mapActions(goStore, ['goCoursePage'])
  },
  created () {
    this.getBookmarkCoursesData()
  }
}
</script>

<style lang="scss" scoped>
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