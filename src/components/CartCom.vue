<template>
  <div class="col-12 col-lg-8 me-auto">
    <CoursesLoadingList v-if="loading" />
  </div>

  <div class="text-center mt-48"
      v-if="studentData.myCart.length === 0 && !loading">
      <p class="fs-2 fw-bold">購物車無任何品項</p>
      <RouterLink to="/AllCourses">
        <button type="button" class="btn btn-outline-primary mt-16">
          繼續購物
        </button>
      </RouterLink> 
  </div>


  <div class="col-12 col-lg-8 mx-auto mb-3 border rounded-2"
        v-if="studentData.myCart.length !== 0 && !loading">
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th width="" class="" colspan="4">
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
          <td width="50"
          @click="getOneCoursesFirebaseData(item[0].id)">
            <img :src="item[0].data.courseImg" alt="" class="table-image cursor-pointer">
          </td>
          <td width="300">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-12 col-lg-8">
                  {{ item[0].data.courseName }}
                </div>
                <div class="col-12 col-lg-4 text-lg-end">
                  <p v-if="couponValue == 1">
                    NT$ {{ $filters.currency(item[0].data.price) }}
                  </p>
                  <p v-if="couponValue != 1">
                    NT$ {{ $filters.currency(item[0].data.price * couponValue) }}
                  </p>
                  <p class="fs-8 text-delete text-decoration-line-through" 
                        v-if="couponValue != 1">
                    NT$ {{ $filters.currency(item[0].data.price) }}
                  </p>
                </div>
              </div>
            </div>
          </td>
          <td width="10" class="text-end">
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
import CoursesLoadingList from '../components/CoursesLoadingList.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import cartStore from '@/stores/cartStore'
import dataStore from '@/stores/dataStore'

export default {
  components: { CoursesLoadingList },
  computed: {
    ...mapWritableState(cartStore, ['cartCheckboxWrap','payWrap', 'checkAllValue']),
    ...mapWritableState(dataStore, ['studentData','user', 'userCartCourses','couponData']),
    ...mapState(cartStore, ['cartTotal', 'couponValue']),
    ...mapState(dataStore, ['loading']),
  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', 'addToPayWrap', 'checkAll']),
    ...mapActions(dataStore, ['onAuthStateChanged','getOneCoursesFirebaseData']),
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.table-image {
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width:768px) {
    width: 50px;
    height: 40px;
    border-radius: 10px;
  }
}
input {
  width: 25px;
  height: 25px;
}
.CoursesCart-vh {
  height: calc(100vh - 194px);
}
</style>