<template>
  
  <div class="col-12 col-lg-8 mx-auto border rounded-2">
    <h1 class="my-3">結帳清單</h1>
    <table class="table table-hover align-middle">
      <tbody>
        <tr v-for="item, index in payWrap.payData " :key="index">
          <td class="w-25">
            {{ item.courseName }}
          </td>
          <td class="">
            NT$ {{ item.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import cartStore from '@/stores/cartStore'
import dataStore from '@/stores/dataStore'

export default {
  computed: {
    ...mapWritableState(cartStore, ['cartCheckboxWrap','payWrap']),
    ...mapWritableState(dataStore, ['studentData','user', 'userCartCourses', 'couponData']),
    ...mapState(cartStore, ['cartTotal'])
  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', 'addToPayWrap']),
    ...mapActions(dataStore, ['onAuthStateChanged','getOneCoursesFirebaseData']),
  },
  created () {
    // this.onAuthStateChanged()
  }
}
</script>

<style lang="scss" scoped>
.table-image {
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
}
</style>