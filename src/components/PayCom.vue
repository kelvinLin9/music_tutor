<template>
  
  <div class="col-12 col-lg-8 mx-auto mb-3 border rounded-2">
    <h1 class="my-3 pb-2 ps-3 border-bottom">結帳清單
      <span class="fs-5 text-secondary">總共{{ payWrap.payData.length }}件</span>
    </h1>
    <table class="table table-hover align-middle">
      <tbody>
        <tr v-for="item, index in payWrap.payData " :key="index">
          <td>
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-8">
                  {{ item.courseName }}
                </div>
                <div class="col-12 col-lg-4 text-lg-end">
                  <p v-if="couponValue == 1">
                    NT$ {{ $filters.currency(item.price) }}
                  </p>
                  <p v-if="couponValue != 1">
                    NT$ {{ $filters.currency(item.price * couponValue) }}
                  </p>
                  <p class="fs-8 text-delete text-decoration-line-through" 
                        v-if="couponValue != 1">
                    NT$ {{ $filters.currency(item.price) }}
                  </p>
                </div>
              </div>
            </div>  
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
    ...mapState(cartStore, ['cartTotal', 'couponValue'])
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