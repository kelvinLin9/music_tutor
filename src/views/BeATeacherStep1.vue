<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="border-top border-bottom border-5 py-2 w-75 mx-auto">
          四個步驟，讓你成為老師
        </h1>
        <h2>首先設定必要資訊</h2>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <VForm  v-slot="{ errors }"
           @submit="goBeATeacherStep2()">
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label for="courseName" class="col-form-label">
            課程名稱：
          </label>
        </div>
        <div class="col-4">
          <VField
            name="課程名稱"
            id="courseName"
            type="text"
            rules="required"
            class="form-control"
            :class="{ 'is-invalid': errors['課程名稱'] }"
            placeholder="請輸入課程名稱"
            v-model="beATeacherData.courseName"
          />
          <ErrorMessage class="invalid-feedback" name="課程名稱"/>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label for="coursePrice" class="col-form-label">
            課程費用：
          </label>
        </div>
        <div class="col-4">
          <VField
            name="課程費用"
            id="coursePrice"
            type="text"
            rules="required"
            class="form-control"
            :class="{ 'is-invalid': errors['課程費用'] }"
            placeholder="請輸入課程費用"
            v-model="beATeacherData.price"
          />
          <ErrorMessage class="invalid-feedback" name="課程費用"/>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label for="courseCategory" class="col-form-label">
            教學項目：
          </label>
        </div>
        <div class="col-4">
          <VField
            name="教學項目"
            id="courseCategory"
            type="text"
            rules="required"
            class="form-control"
            :class="{ 'is-invalid': errors['教學項目'] }"
            placeholder="請輸入教學項目"
            v-model="beATeacherData.courseCategory"
          />
          <ErrorMessage class="invalid-feedback" name="教學項目"/>
          <div class="mt-1">
            熱門項目：
            <span class="badge rounded-pill text-bg-danger me-1">鋼琴</span>
            <span class="badge rounded-pill text-bg-danger me-1">吉他</span>
            <span class="badge rounded-pill text-bg-danger me-1">唱歌</span>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label for="courseTime" class="col-form-label">
            授課時間：
          </label>
        </div>
        <div class="col-4">
          <VField
            name="授課時間"
            id="courseTime"
            type="number"
            rules="required"
            class="form-control"
            :class="{ 'is-invalid': errors['授課時間'] }"
            placeholder="請輸入授課時間(分鐘)"
            v-model="beATeacherData.time"
          />
          <ErrorMessage class="invalid-feedback" name="授課時間"/>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label for="courseMethod" class="col-form-label">
            上課方式：
          </label>
        </div>
        <div class="col-4">
          <div class="form-check form-check-inline">
            <input class="form-check-input" 
                  type="checkbox" 
                  id="studentHome" 
                  value="在學生家" 
                  name="courseMethod" 
                  v-model="beATeacherData.courseMethod"> 
            <label for="studentHome">在學生家</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" 
                  type="checkbox" 
                  id="teacherHome" 
                  value="在老師家" 
                  name="courseMethod" 
                  v-model="beATeacherData.courseMethod">
            <label for="teacherHome">在老師家</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" 
                  type="checkbox" 
                  id="online" 
                  value="線上" 
                  name="courseMethod" 
                  v-model="beATeacherData.courseMethod">
            <label for="online">線上</label>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-auto">
          <label for="courseMethod" class="col-form-label">
            上課地點：
          </label>
        </div>
        <div class="col-4">
          <select class="form-select" aria-label="Default select example"
                  v-model="beATeacherData.cityName">
            <option selected>請選擇上課地點</option>
            <option value="台北市">台北市</option>
            <option value="基隆市">基隆市</option>
            <option value="新北市">新北市</option>
            <option value="宜蘭縣">宜蘭縣</option>
            <option value="桃園市">桃園市</option>
            <option value="新竹市">新竹市</option>
            <option value="新竹縣">新竹縣</option>
            <option value="苗栗縣">苗栗縣</option>
            <option value="台中市">台中市</option>
            <option value="彰化縣">彰化縣</option>
            <option value="南投縣">南投縣</option>
            <option value="嘉義市">嘉義市</option>
            <option value="嘉義縣">嘉義縣</option>
            <option value="雲林縣">雲林縣</option>
            <option value="台南市">台南市</option>
            <option value="高雄市">高雄市</option>
            <option value="澎湖縣">澎湖縣</option>
            <option value="金門縣">金門縣</option>
            <option value="屏東縣">屏東縣</option>
            <option value="台東縣">台東縣</option>
            <option value="花蓮縣">花蓮縣</option>
            <option value="連江縣">連江縣</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 text-end">
          <button type="submit" class="btn btn-primary">
            &emsp;&emsp;下一步&emsp;&emsp;
          </button>
        </div>
      </div>
    </VForm>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import goStore from '@/stores/goStore'
import dataStore from '@/stores/dataStore'

export default {
  computed: {
    ...mapWritableState(dataStore, ['beATeacherData']),

  },
  methods: {
    ...mapActions(goStore, ['goBeATeacherStep1', 'goBeATeacherStep2']),
  },
  created () {
    
  }
}
</script>

<style lang="scss" scoped>

</style>