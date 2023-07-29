<template>
  <div class="container mt-5">
    <div class="row align-items-center mb-3">
      <div class="col-4">
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
      <div class="col-6 ms-auto">
        <div class="row align-items-center">
          <div class="col text-center">
            <h5 class="">參加課程</h5>
            <p class="fs-1">{{  }}</p>
          </div>
          <div class="col text-center">
            <h5>已開課程</h5>
            <p class="fs-1">{{ userTeacherCourses.length }}</p>
          </div>
          <div class="col text-center">
            <h5>目前收藏</h5>
            <p class="fs-1">{{  }}</p>
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
      v-for="item in userStudentCourses" :key="item.id">
        <div class="card rounded-3 scale h-100"
        @click="getOneCoursesFirebaseData(item.id)">
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
              by {{ item.displayName }}
            </div>
            <div class="mb-1">
              <i class="bi bi-clock-fill"></i>
              {{ item.time }}
              <i class="bi bi-geo-alt-fill"></i>
              {{ item.cityName }}
            </div>
            <div class="mb-1">
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[0]">
                {{ item.courseMethod.values[0].stringValue }}
              </span>
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[1]">
                {{ item.courseMethod.values[0].stringValue }}
              </span>
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[2]">
                {{ item.courseMethod.values[2].stringValue }}
              </span>
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
      v-for="item in userTeacherCourses " :key="item.id">
        <div class="card rounded-3 scale h-100"
        @click="getOneCoursesFirebaseData(item.id)">
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
              by {{ item.displayName }}
            </div>
            <div class="mb-1">
              <i class="bi bi-clock-fill"></i>
              {{ item.time }}
              <i class="bi bi-geo-alt-fill"></i>
              {{ item.cityName }}
            </div>
            <div class="mb-1">
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[0]">
                {{ item.courseMethod.values[0].stringValue }}
              </span>
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[1]">
                {{ item.courseMethod.values[0].stringValue }}
              </span>
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[2]">
                {{ item.courseMethod.values[2].stringValue }}
              </span>
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
      v-for="item in 1" :key="item.id">
        <div class="card rounded-3 scale h-100"
        @click="getOneCoursesFirebaseData(item.id)">
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
              by {{ item.displayName }}
            </div>
            <div class="mb-1">
              <i class="bi bi-clock-fill"></i>
              {{ item.time }}
              <i class="bi bi-geo-alt-fill"></i>
              {{ item.cityName }}
            </div>
            <div class="mb-1">
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[0]">
                {{ item.courseMethod.values[0].stringValue }}
              </span>
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[1]">
                {{ item.courseMethod.values[0].stringValue }}
              </span>
              <span class="bg-info rounded-2 px-2 me-2"
                    v-if="item.courseMethod.values[2]">
                {{ item.courseMethod.values[2].stringValue }}
              </span>
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
    ...mapState(dataStore, ['user', 'teacherData', 'userTeacherCourses', 'userStudentCourses', 'userBookmarkCourses', 'bookmarkState']),
    ...mapWritableState(dataStore, ['myCoursesState'])
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged', 'toggleBookmark']),
    
  },
  created () {
    this.onAuthStateChanged()
    

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
.user-photo {
  // width: 100px;
  // height: 100px;
  // border-radius: 50px;
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
</style>