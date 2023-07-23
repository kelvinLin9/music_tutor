<template>
  <div class="header">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center">
        <div class="col-12 col-lg-6">
          <img src="https://fakeimg.pl/640x830/" alt="" class="img-fluid">
        </div>
        <div class="col-12 col-lg-6">
          <h2>找尋像好友一樣的音樂導師</h2>
          <h3>
            在這裡與熱愛音樂的導師相遇，將你的音樂激情傾注其中。
          </h3>
          <div class="search bg-test">
            <div class="form-floating mb-3 bg-test">
              <input type="email" class="form-control bg-test" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">我要學習...</label>
            </div>
          </div>
          <div class="pills">
            <span class="badge rounded-pill text-bg-primary">Primary</span>
            <span class="badge rounded-pill text-bg-primary">Primary</span>
            <span class="badge rounded-pill text-bg-primary">Primary</span>
            <span class="badge rounded-pill text-bg-primary">Primary</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FeaturedCourses class="my-5"/>

</template>

<script>
import FeaturedCourses from '../components/FeaturedCourses.vue'
export default {
  components: { FeaturedCourses },
  data() {
    return {
      data: {}
    }
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
@media (min-width: 1024px) {
  .header {
    background: #FFFCEB;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .bg-test {
    background: #FFFCEB;
  }
}
</style>
