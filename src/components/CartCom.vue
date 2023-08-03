<template>
  <h1 class="my-3">購物車</h1>
  <div class="text-center fs-1"
      v-if="studentData.myCart.length === 0">
      購物車無任何品項
  </div>
  <div class="col-12 col-lg-8 mx-auto border rounded-2"
        v-if="studentData.myCart.length !== 0">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th colspan="5">全選框</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, index in userCartCourses" :key="item.timestamp">
          <td width="50" class="text-center">
            <input class="form-check-input" 
              type="checkbox" 
              :id="item.timestamp" 
              :value="index" 
              name="courseMethod1" 
              v-model="cartCheckboxWrap"> 
            <label :for="item.timestamp"></label>
          </td>
          <td width="100"
          @click="getOneCoursesFirebaseData(item[0].id)">
            <img :src="item[0].data.courseImg" alt="" class="table-image cursor-pointer">
          </td>
          <td>
            {{ item[0].data.courseName }} {{ item.timestamp }}
          </td>
          <td class="">
            NT$ {{ item[0].data.price }}
          </td>
          <td class="text-end">
            <div class="cursor-pointer"
              @click="deleteCart(user.uid, item.timestamp, index)">
              <i class="bi bi-trash3-fill"></i> {{ index }}
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
    ...mapWritableState(dataStore, ['studentData','user', 'userCartCourses','couponData']),
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