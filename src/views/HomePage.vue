<template>
  <!-- header -->
  <section class="header d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 ">
          <div class="blockquote px-32">
            <h2 class="fs-2 text-white mb-3">
              找尋像好友一樣的音樂導師
            </h2>
            <h3 class="fs-6 text-white mb-24">
              在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。
            </h3>
            <div class="mb-2">
              <input class="form-control mt-0" list="datalistOptions" id="exampleDataList" placeholder="我想學習...">
            </div>
            <div class="pills">
              <span class="badge rounded-pill text-bg-primary text-white me-1">鋼琴</span>
              <span class="badge rounded-pill text-bg-primary text-white me-1">吉他</span>
              <span class="badge rounded-pill text-bg-primary text-white me-1">唱歌</span>
              <span class="badge rounded-pill text-bg-primary text-white me-1">大鼓</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <!-- 精選課程 -->
  <section>
    <CoursesLoading class="my-48" v-if="loading"/>
    <FeaturedCourses class="my-48" v-if="!loading"/>
  </section>
  


</template>

<script>
import FeaturedCourses from '../components/FeaturedCourses.vue'
import CoursesLoading from '../components/CoursesLoading.vue';
import { mapActions, mapState } from 'pinia'
import dataStore from '../stores/dataStore';

export default {
  components: { FeaturedCourses, CoursesLoading },
  computed: {
    ...mapState(dataStore, ['loading'])
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
  },
  created() {
    this.onAuthStateChanged()
  }
} 
</script>

<style lang="scss" scoped>
  .header {
    background-image: url('../assets/images/banner.jpg');
    background-size: cover;
    background-position: center center;
    min-height: 100vh;
  }
  .blockquote {
  background: hsla(0,0%,100%,.3);  
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  
  /* stylings */
  padding: 1em 0;
  border-radius: .3em;
  margin: 0 auto;
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	            0 .5em 1em rgba(0, 0, 0, 0.6);
	text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
}
</style>
