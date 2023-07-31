<template>
  <div class="container mt-3">
    <div class="row" v-if="studentData.myCart.length !== 0">
      <h1 class="my-3">購物車</h1>
      <div class="col-12 col-lg-8 mx-auto border rounded-2">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th colspan="5">全選框</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userCartCourses" :key="item.timestamp">
              <td width="50" class="text-center">
                勾選框
              </td>
              <td width="100"
              @click="getOneCoursesFirebaseData(item[0].data.id)">
                <img :src="item[0].data.courseImg" alt="" class="table-image cursor-pointer">
              </td>
              <td>
                {{ item[0].data.displayName }}
              </td>
              <td class="">
                NT$ {{ item[0].data.price }}
              </td>
              <td class="text-end">
                <div class="cursor-pointer"
                  @click="deleteCart(user.uid, item.timestamp)">
                  可以刪除
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-header">
            <p>訂單明細</p>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p>{{ userCart.cartNum }}件小計</p>
              <p>NT$ {{ userCart.total }}</p>
            </div>
            <div class="text-end fs-2">
              <p>NT$ {{ userCart.total }}</p>
            </div>
          </div>
          <div class="card-footer">
            <div class="">
              優惠碼之後再弄
            </div>
            <div>
              <button type="button" class="btn btn-primary w-100">
                還不能來去結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center fs-1"
      v-if="studentData.myCart.length === 0">購物車無任何品項</div>
    </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import cartStore from '@/stores/cartStore'
import dataStore from '@/stores/dataStore'

export default {
  computed: {
    ...mapWritableState(cartStore, ['','']),
    ...mapWritableState(dataStore, ['studentData','user', 'userCartCourses', 'userCart']),
    // ...mapState(dataStore, ['isMember','','teacherData','user']),

  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', '']),
    ...mapActions(dataStore, ['onAuthStateChanged','getOneCoursesFirebaseData']),
  },
  created () {
    this.onAuthStateChanged()
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