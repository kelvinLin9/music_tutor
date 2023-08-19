<template>
  <div class="container">
    <swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="20"
      :freeMode="true"
      :pagination="{clickable: true}"
      navigation
      :scrollbar="{ draggable: true }"
      :breakpoints="{
      '576': {
        slidesPerView: 1,
        spaceBetween: 20,
        },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
        },
      '992': {
        slidesPerView: 2,
        spaceBetween: 20,
        },
      '1400': {
        slidesPerView: 3,
        spaceBetween: 20,
        },
      }"
      class="mySwiper px-3"
    >
      <!-- Loading -->
      <!-- <CoursesLoading class="my-3" v-if="loading"/> -->
      <SwiperSlide v-for="(item) in youLikeCourses" :key="item.id" class="mb-5">
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
import { mapState, mapActions, mapWritableState } from 
'pinia'  
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
    ...mapState(dataStore, ['coursesData', 'bookmarkState', 'youLikeCourses', 'loading'])
  },
  methods: {
    ...mapActions(dataStore, ['toggleBookmark', 'getOneCoursesFirebaseData']),
  },
  created () {
    // this.getBookmarkCoursesData()
  }
};
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
  -webkit-filter:grayscale(1);
}
.sw-title {
  height: 50px;
}
.loading-img{
  height: 180px;
  width: 1508px;
  @media (min-width: 575.8px) {
    width: 506px;
  }
  @media (min-width: 767.8px) {
    width: 332px;
  }
  @media (min-width: 991.8px) {
    width: 290px;
  }
  @media (min-width: 1199.8px) {
    width: 260px;
  }
}
</style>