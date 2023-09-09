<template>
  <BannerCom />
  <!-- 自訂顏色 -->
  <div class="container my-32">
    <div class="row">
      <div class="col-auto d-flex align-items-center mb-16">
        <p class="point me-8"  :style="{ 'backgroundColor': `${teacherData.calenderTeacherColor.color}`}"></p>
        <p class="px-8 rounded" :style="{ 'color': `${teacherData.calenderTeacherColor.textColor}`,
                     'backgroundColor': `${teacherData.calenderTeacherColor.color}`}">我是老師</p>
      </div>
      <div class="col-auto d-flex align-items-center mb-16">
        <p class="point me-8"  :style="{ 'backgroundColor': `${teacherData.calenderStudentColor.color}`}"></p>
        <p class="px-8 rounded" :style="{ 'color': `${teacherData.calenderStudentColor.textColor}`,
                     'backgroundColor': `${teacherData.calenderStudentColor.color}`}">我是學生</p>
      </div>
      <div class="col-auto mb-16" v-if="!customColorState" @click="customColorState = true">
        <button type="button" class="btn btn-sm btn-outline-delete">
          自訂顏色
        </button>
      </div>
      <div class="col-auto d-flex align-items-center" v-if="customColorState">
        <div class="row align-items-center">
          <div class="col-auto mb-16">
            <label for="t-color" class="form-label fs-7">老師背景</label>
            <input type="color" class="form-control form-control-color mx-auto" id="t-color" title="Choose your color" v-model="teacherData.calenderTeacherColor.color">
          </div>
          <div class="col-auto mb-16">
            <label for="t-textColor" class="form-label fs-7">老師文字</label>
            <input type="color" class="form-control form-control-color mx-auto" id="t-textColor" title="Choose your color" v-model="teacherData.calenderTeacherColor.textColor">
          </div>
          <div class="col-auto mb-16">
            <label for="s-color" class="form-label fs-7">學生背景</label>
            <input type="color" class="form-control form-control-color mx-auto" id="s-color" title="Choose your color" v-model="teacherData.calenderStudentColor.color">
          </div>
          <div class="col-auto mb-16">
            <label for="s-textColor" class="form-label fs-7">學生文字</label>
            <input type="color" class="form-control form-control-color mx-auto" id="s-textColor" title="Choose your color" v-model="teacherData.calenderStudentColor.textColor">
          </div>
          <div class="col-12 col-sm-auto" v-if="customColorState">
            <button type="button" class="btn btn-sm btn-outline-secondary me-8"
                   >
              預設
            </button>
            <button type="button" class="btn btn-sm btn-secondary me-8"
                    @click="customColorState = false">
              取消
            </button>
            <button type="button" class="btn btn-sm btn-primary"
                    @click="UpdateTeacherCalender() , customColorState = false">
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Loading -->
  <div class="container">
    <CoursesLoadingList v-if="loading"/>
  </div>
  <div class="container mb-32" v-if="!loading">
    <calendar-com/>
  </div>
</template>


  
<script>


import BannerCom from '../components/BannerCom.vue'
import { mapState, mapActions } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import bannerStore from '@/stores/bannerStore'
import CalendarCom from '../components/CalendarCom.vue'
import CoursesLoadingList from '../components/CoursesLoadingList.vue'

export default {
  components: { BannerCom, CalendarCom, CoursesLoadingList },
  data () {
    return {
      customColorState: false,
    }
  },
  computed:{
    ...mapState(dataStore,['teacherData', 'calenderDataAll', 'calenderData', 'loading']),
  },
  methods: {
    ...mapActions(dataStore,['onAuthStateChanged', 'UpdateTeacherCalender']),
    ...mapActions(bannerStore, ['getBannerInfo']),
  },
  created () {
    this.onAuthStateChanged()
    this.getBannerInfo(
      new URL('../assets/images/banner.jpg', import.meta.url).href,
      '行事曆',
      'CALENDAR',
      '井然有序，做一個時間管理大師'
      )
    },
}



</script>

<style lang="scss" scoped>
.point {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}


</style>