<template>
  <div class="about">
    {{ data }}
  </div>
  <img src="https://fakeimg.pl/180x3000/" alt="">
</template>

<script>
export default {
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
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
