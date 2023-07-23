<template>
  <div class="container">
    <swiper
      :loop="true"
      :slidesPerView="3"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{clickable: true}"
      navigation
      :scrollbar="{ draggable: true }"
      :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
        },
      '992': {
        slidesPerView: 3,
        spaceBetween: 20,
        },
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(item) in coursesData" :key="item.id">
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
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import { Navigation, FreeMode, Pagination, Scrollbar } from 'swiper'
import { mapState, mapActions } from 'pinia'
import dataStore from '@/stores/dataStore'
import goStore from '@/stores/goStore'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      // modules: [Navigation, FreeMode, Pagination, Scrollbar]
    }
  },
  computed: {
    ...mapState(dataStore, ['coursesData', 'bookmarkState']),
  },
  methods: {
    ...mapActions(dataStore, ['getBookmarkCoursesData','toggleBookmark']),
    ...mapActions(goStore, ['goCoursePage'])
  },
  created () {
    this.getBookmarkCoursesData()
  }
};
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