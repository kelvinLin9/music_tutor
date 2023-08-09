<template>
  <!-- header -->
  <section class="header mb-5">
    <div class="container">
      <div class="row d-flex flex-lg-row-reverse align-items-center">
        <div class="col-12 col-lg-6">
          <img src="../assets/images/Main-img.png" alt="" class="img-fluid d-none d-lg-block">
          <img src="../assets/images/Main-img-1.png" alt="" class="img-fluid d-block d-lg-none">
        </div>


        <div class="col-12 col-lg-6 p-4 d-none d-lg-block">
          <h2 class="fs-2 fw-bold text-primary mb-3">找尋像好友一樣的音樂導師</h2>
          <h3 class="fs-5 fw-bold mb-5">
            在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。
          </h3>
          <div class="mb-2">
            <input class="form-control mt-0" list="datalistOptions" id="exampleDataList" placeholder="我想學習...">
          </div>
          <div class="pills">
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">鋼琴</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">吉他</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">唱歌</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">大鼓</span>
          </div>
        </div>
        <div class="col-12 col-lg-6 p-4 d-block d-lg-none">
          <h2 class="fs-2 fw-bold text-primary mb-3">找尋像好友一樣的音樂導師</h2>
          <h3 class="fs-5 fw-bold mb-5">
            在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。
          </h3>
          <div class="mb-2">
            <input class="form-control mt-0" list="datalistOptions" id="exampleDataList" placeholder="我想學習...">
          </div>
          <div class="pills">
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">鋼琴</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">吉他</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">唱歌</span>
            <span class="badge border border-primary rounded-pill text-primary fw-bold px-3 me-2">大鼓</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 手機平板測試 -->
    <!-- <div class="header-bg d-flex flex-column justify-content-center align-items-center d-block d-lg-none" style="background-image: url('https://imgur.com/j8quuvt.png');">
          <div class="header-content-bg">
            <div class="header-content col-12 col-lg-6 p-4 d-block d-lg-none">
              <h2 class="fs-2 fw-bold text-primary mb-3">找尋像好友一樣的音樂導師</h2>
              <h3 class="fs-5 fw-bold mb-5">
                在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。
              </h3>
              <div class="mb-2">
                <input class="form-control mt-0" list="datalistOptions" id="exampleDataList" placeholder="我想學習...">
              </div>
              <div class="pills">
                <span class="badge border border-primary rounded-pill text-primary fw-bold px-4 me-2">鋼琴</span>
                <span class="badge border border-primary rounded-pill text-primary fw-bold px-4 me-2">吉他</span>
                <span class="badge border border-primary rounded-pill text-primary fw-bold px-4 me-2">唱歌</span>
                <span class="badge border border-primary rounded-pill text-primary fw-bold px-4 me-2">大鼓</span>
              </div>
            </div>
          </div>
    </div> -->
  </section>
  <!-- 精選課程 -->
  <section>
    <div class="mb-5">
      <img src="../assets/images/section2-left.png" alt="">
    </div>
    <FeaturedCourses class="mb-5"/>
  </section>
  <!-- 加入我們 -->
  <section>
    <div class="mb-5">
      <img src="../assets/images/b-feature.png" alt="">
    </div>
    <div class="container mb-5">
      <div class="row d-flex align-items-center mb-4 mb-lg-0">
        <div class="col-12 col-lg-6">
          <img src="../assets/images/section3-1.png" alt="">
        </div>
        <div class="col-12 col-lg-6">
          <h3 class="fs-28 fw-bold text-primary text-center text-lg-start my-4">燃點才華，擁抱成功！</h3>
          <p class="col-9 col-lg-12 mx-auto mb-3">在我們的音樂家教媒合平台，任何擁有音樂才華的人都能藉此賺取額外收入。無論你是一名專業音樂家、學院派音樂學生，或是熱愛音樂並擁有一定水平的業餘愛好者，這裡都是你展現才華、實現夢想的舞台。</p>
          <div class="text-center text-lg-start">
            <RouterLink to="/AllCourses">
              <button type="button" class="btn btn-outline-primary col-9 col-lg-auto ">
                開始找課程
              </button>
            </RouterLink>            
          </div>
        </div>
      </div>
      <div class="row d-flex flex-lg-row-reverse align-items-center">
        <div class="col-12 col-lg-6">
          <img src="../assets/images/section3-2.png" alt="">
        </div>
        <div class="col-12 col-lg-6">
          <h3 class="fs-28 fw-bold text-primary text-center text-lg-start my-4">尋找音樂共鳴，啟發個人旋律！</h3>
          <p class="col-9 col-lg-12 mx-auto mb-3">在我們的音樂家教媒合平台，你將找到一個與你個人需求完美契合的音樂老師。無論你是想尋找經濟實惠的價格方案、靈活的上課方式，或是特定音樂風格的專業指導，我們的平台將提供你多元且個性化的選擇。</p>
          <div class="text-center text-lg-start">
            <RouterLink to="/CreateCourses/BeATeacherStep1">
              <button type="button" class="btn btn-outline-primary col-9 col-lg-auto">
                我要開課
              </button>
            </RouterLink>            
          </div>
        </div>
      </div>
    </div> 
  </section>
  <!-- 學員回饋 -->
  <section>
    <div class="mb-5">
      <img src="../assets/images/b-giveback.png" alt="">
    </div>

    <div class="container mb-5">
      <div class="row d-flex justify-content-center align-items-lg-center py-4">
         <div class="col-3 col-lg-2">
          <img src="../assets/images/chat-1.png" alt="">
         </div>
         <div class="col-9 col-lg-8 px-3">
          <h5>台北 陳先生</h5>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
         </div> 
      </div>
      <div class="row d-flex flex-row-reverse justify-content-center align-items-lg-center py-4">
         <div class="col-3 col-lg-2">
          <img src="../assets/images/chat-1.png" alt="">
         </div>
         <div class="col-9 col-lg-8 px-3">
          <h5>台北 陳先生</h5>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
         </div> 
      </div>
      <div class="row d-flex justify-content-center align-items-lg-center py-4">
         <div class="col-3 col-lg-2">
          <img src="../assets/images/chat-1.png" alt="">
         </div>
         <div class="col-9 col-lg-8 px-3">
          <h5>台北 陳先生</h5>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
         </div> 
      </div>
      <div class="row d-flex flex-row-reverse justify-content-center align-items-lg-center py-4">
         <div class="col-3 col-lg-2">
          <img src="../assets/images/chat-1.png" alt="">
         </div>
         <div class="col-9 col-lg-8 px-3">
          <h5>台北 陳先生</h5>
          <p>這個音樂家教媒合平台真是太棒了！我在這裡找到了一位出色的音樂老師，真的讓我進步神速。老師教學專業、耐心細心，每次上課都能讓我感受到自己的進步。平台提供的便利服務讓我輕鬆預約上課，無論時間和地點都沒有限制。感謝這個平台，我能夠實現音樂夢想！</p>
         </div> 
      </div>
    </div>
  </section>
  <!-- 合作夥伴 -->
  <section>
    <div class="mb-5">
      <img src="../assets/images/partner.png" alt="合作夥伴標題圖">
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-1.png" alt="商標圖1" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-2.png" alt="商標圖2" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-3.png" alt="商標圖3" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-4.png" alt="商標圖4" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-5.png" alt="商標圖5" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-6.png" alt="商標圖6" class="mb-5">
        </div>
        <div class="col-6 col-md-3">
          <img src="../assets/images/partner-7.png" alt="商標圖7" class="mb-5">
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
import FeaturedCourses from '../components/FeaturedCourses.vue'
import { mapActions, mapState } from 'pinia'
import dataStore from '../stores/dataStore';

export default {
  components: { FeaturedCourses },
  data() {
    return {
      data: {}
    }
  },
  methods: {
    ...mapActions(dataStore, ['onAuthStateChanged']),
  },
  created() {
    this.onAuthStateChanged()
  },
  mounted() {
    const url = import.meta.env.VITE_PATH
    this.$http.get(url)
    .then((res) => {
      this.data = res.data.results[0]
    })
  }
} 
</script>

<style lang="scss" scoped>
  .header {
    // background: rgba(249, 248, 247, 1);
    // min-height: 100vh;
  }

  // 測試版-------------------------------------------
  .header-bg {
    background-size: cover;
    background-position: center center;
    height: calc(100vh - 66px);
  }
  .header-content-bg {
    width: 100vw;
    backdrop-filter: invert(30%);
    // backdrop-filter: contrast(80%);
  }
  // ------------------------------------------------
  .test {
    outline: 1px solid red;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
