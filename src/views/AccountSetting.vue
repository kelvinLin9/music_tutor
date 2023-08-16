<template>
  帳戶設定
  信箱驗證
  手機驗證
  修改密碼
  <!-- <div class="m-5"
    @click="test">
    真難
  </div>
  <div class="m-5"
    @click="test2">
    真難欸
  </div> -->

  <el-space direction="vertical" alignment="flex-start">
    <div>
      <label style="margin-right: 16px">Switch Loading</label>
      <el-switch v-model="loading" />
    </div>
    <el-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>

      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Delicious hamburger</span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <el-button text class="button">Operation button</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </el-space>

  

</template>
  




<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import cartStore from '@/stores/cartStore'
import dataStore from '@/stores/dataStore'

import { doc, setDoc, Timestamp, getFirestore, updateDoc} from "firebase/firestore";
const db = getFirestore()
export default {
  data () {
    return {
      loading: true,
    }
  },
  computed: {
    ...mapState(dataStore, ['testD']),

  },
  methods: {
    async test() {
      const docData = {
          stringExample: "Hello world!",
          booleanExample: true,
          numberExample: 3.14159265,
          dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
          arrayExample: [5, true, "hello"],
          nullExample: null,
          objectExample: {
              a: 5,
              b: {
                  nested: "foo"
              }
          }
      };
      await setDoc(doc(db, "data", "one"), docData);    
    },
    async test2() {
      const washingtonRef = doc(db, "data", "one");

          // Set the "capital" field of the city 'DC'
          await updateDoc(washingtonRef, {
            // capital: [{sss : 5566}, {ssss : 55667788}]
            capital: this.testD
      });
    }
  },
  created () {
    // this.onAuthStateChangedForCreateCourse()
    console.log(this.testD)
  }
}
</script>

<style lang="scss" scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>