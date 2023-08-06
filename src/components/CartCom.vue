<template>
  <div class="text-center fs-1"
      v-if="studentData.myCart.length === 0">
      購物車無任何品項
  </div>
  <div class="col-12 col-lg-8 mx-auto border rounded-2"
        v-if="studentData.myCart.length !== 0">
    <h1 class="my-3">購物車</h1>
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th width="" class="" colspan="5">
            <div class="form-check align-items-center">
              <input class="form-check-input me-3" 
                type="checkbox" 
                id="checkAll" 
                name="checkAll"
                value=""
                @click="checkAll()"
                v-model="checkAllValue"> 
              <label for="checkAll" class="text-danger fs-5">全選</label>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, index in userCartCourses" :key="item.timestamp">
          <td width="30" class="">
            <div class="form-check">
              <input class="form-check-input" 
                type="checkbox" 
                :id="item.timestamp" 
                :value="index" 
                name="courseMethod1" 
                v-model="cartCheckboxWrap"> 
              <label :for="item.timestamp"></label>
            </div>
          </td>
          <td width="100"
          @click="getOneCoursesFirebaseData(item[0].id)">
            <img :src="item[0].data.courseImg" alt="" class="table-image cursor-pointer">
          </td>
          <td>
            {{ item[0].data.courseName }}
          </td>
          <td class="">
            NT$ {{ $filters.currency(item[0].data.price) }}
          </td>
          <td class="text-end">
            <div class="cursor-pointer"
              @click="deleteCart(user.uid, item.timestamp, index)">
              <i class="bi bi-trash3-fill"></i>
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
    ...mapWritableState(cartStore, ['cartCheckboxWrap','payWrap', 'checkAllValue']),
    ...mapWritableState(dataStore, ['studentData','user', 'userCartCourses','couponData']),
    ...mapState(cartStore, ['cartTotal'])
  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', 'addToPayWrap', 'checkAll']),
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
input {
  width: 25px;
  height: 25px;
}
</style>