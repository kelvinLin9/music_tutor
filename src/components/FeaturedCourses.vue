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
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
        },
      '992': {
        slidesPerView: 4,
        spaceBetween: 20,
        },
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="(item) in AllCoursesFirebaseData" :key="item.id" class="mb-5">
        <div class="card rounded-3 scale h-100"
            @click="getOneCoursesFirebaseData(item.id)">
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
            <div class="mb-1 sw-title">
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
                <i class="bi bi-geo-alt-fill ms-2"></i>
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
                <span class="">
                  <i class="bi bi-people-fill me-2"></i>
                  {{ item.data.whoBuy.length}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </swiper>

    <RouterLink to="/AllCourses" class="text-center d-block">
      <button type="button" class="btn btn-dark">
        更多課程
      </button>
    </RouterLink>
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
    ...mapState(dataStore, ['coursesData', 'bookmarkState', 'AllCoursesFirebaseData'])
  },
  methods: {
    ...mapActions(dataStore, ['toggleBookmark', 'getOneCoursesFirebaseData', 'getAllCoursesFirebaseData']),
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
</style>