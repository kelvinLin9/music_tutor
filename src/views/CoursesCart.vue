<template>
  <div class="container mt-3">
    <div class="row">
      <pay-com v-if="cartPageState === 'pay'" />
      <cart-com v-if="cartPageState === 'cart'" />

      <div class="col-12 col-lg-4"
        v-if="cartPageState === 'cart' && studentData.myCart.length !== 0">
        <div class="card">
          <div class="card-header">
            <p>訂單明細</p>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p>{{ cartCheckboxWrap.length }}件小計</p>
              <p>NT$ {{ $filters.currency(cartTotal()) }}</p>
            </div>
            <div class="text-end fs-6 text-primary"
                v-if="couponValue != 1">
              <p>折扣 - {{ $filters.currency(cartTotal() - cartTotal() * couponValue) }}</p>
            </div>
            <div class="text-end fs-2">
              <p>NT$ {{ $filters.currency(cartTotal() * couponValue) }}</p>
            </div>
          </div>
          <div class="card-footer">
            <div class="row mb-2">
              <div class="col-9">
                <label for="coupon">折扣碼：</label>
                <input class="col-form-label w-75" 
                    type="text" 
                    id="coupon"  
                    name="coupon" 
                    v-model="couponCode"> 
                
              </div>
              <div class="col-3">
                <button type="button" class="btn btn-secondary ms-auto d-block"
                          @click="addCouponCode()">
                    確認
                </button>
              </div>
            </div>
            <button type="button" class="btn btn-primary w-100"
                    @click="addToPayWrap()">
              來去結帳
            </button>
          </div>
        </div>
        試用折扣碼:<br>
        2023666 (6折)<br>
        hexschoolsogood (3折)
      </div>

      <div class="col-12 col-lg-4"
            v-if="cartPageState === 'pay'">
        <div class="card">
          <div class="card-header">
            <p>訂單明細</p>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p>{{ payWrap.payData.length }}件小計</p>
              <p>NT$ {{  $filters.currency(payWrap.total) }}</p>
            </div>
            <div class="text-end fs-6 text-primary"
                v-if="couponValue != 1">
              <p>折扣 - {{ $filters.currency(payWrap.total - payWrap.total * couponValue) }}</p>
            </div>
            <div class="text-end fs-2">
              <p>NT$ {{  $filters.currency(payWrap.total * couponValue) }}</p>
            </div>
          </div>
          <div class="card-footer">
            <div class="text-danger mb-2">
              我已詳閱並同意〈服務契約〉及服務內容
            </div>
            <div class="row">
              <button type="button" class="btn btn-secondary col-5"
                    @click="cartPageState = 'cart', 
                            payWrap.payData = []">
                重新選擇
              </button>
              <button type="button" class="btn btn-primary col-5 ms-auto"
                    @click="confirmToPay()">
                同意並送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <!-- 對應選到哪個<br> -->
    <!-- {{ cartCheckboxWrap }}<br> -->
    <!-- {{ cartTotal() }}<br> -->
    <!-- {{ payWrap[0] }}<br> -->
    <!-- {{ payWrap[1] }}<br> -->
    <!-- {{ payWrap }}<hr>
    {{ payWrap.payData }}<hr> -->

</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import cartStore from '@/stores/cartStore'
import dataStore from '@/stores/dataStore'
import CartCom from '../components/CartCom.vue'
import PayCom from '../components/PayCom.vue'

export default {
  components: { CartCom, PayCom },
  computed: {
    ...mapWritableState(cartStore, ['cartCheckboxWrap','payWrap', 'cartPageState', 'couponCode']),
    ...mapWritableState(dataStore, ['studentData','user', 'userCartCourses', 'couponData']),
    ...mapState(cartStore, ['cartTotal', 'couponValue'])
  },
  methods: {
    ...mapActions(cartStore, ['deleteCart', 'addToPayWrap', 'addCouponCode','confirmToPay']),
    ...mapActions(dataStore, ['onAuthStateChanged','getOneCoursesFirebaseData']),
  },
  created () {
    this.cartPageState = 'cart'
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