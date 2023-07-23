<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="border-top border-bottom border-5 py-2 w-75 mx-auto">
          自我介紹
        </h1>
        <h2>想吸引同學來上您的課，必須在這邊好好介紹自己</h2>
      </div>
    </div>
  </div>

  <div class="container mt-5">
    <VForm  v-slot="{ errors }"
           @submit="goBeATeacherStep3()">
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-lg-8">
          <label for="teacherIntro" class="form-label">
            自我介紹(限定80字元內)：
          </label>
          <textarea 
                class="form-control" 
                id="teacherIntro" 
                rows="5"
                placeholder="限定80字元內"
                v-model="beATeacherData.teacherIntro"
                >
          </textarea>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-lg-8">
          <label for="courseIntro" class="form-label">
            課程介紹：
          </label>
          <textarea 
                class="form-control" 
                id="courseIntro" 
                rows="5"
                placeholder="限定20字元內"
                v-model="beATeacherData.courseIntro"
                >
          </textarea>
        </div>
      </div>

      <div class="row justify-content-center mb-3">
        <div class="col-12 col-lg-8 mb-3">
          <div class="row">
            <div class="col-4">
              <label for="teacherPhoto" 
                    class="col-form-label"
                    accept="image/png, image/jpeg">
                上傳一張個人形象照：
              </label>
            </div>
            <div class="col-8">
              <input
                  type="file"
                  id="teacherPhoto"
                  class="form-control"
                  @change="uploadPhoto('teacher', $event)"
                />
                <img class="img-fluid" 
                    :src="beATeacherData.teacherImg" 
                    alt="個人形象照"
                    v-if="beATeacherData.teacherImg"/>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 mb-3">
          <div class="row">
            <div class="col-4">
              <label for="coursePhoto" 
                    class="col-form-label"
                    accept="image/png, image/jpeg">
                上傳一張課程封面照：
              </label>
            </div>
            <div class="col-8">
              <input
                  type="file"
                  id="coursePhoto"
                  class="form-control"
                  @change="uploadPhoto('course',$event)"
                />
                <img class="img-fluid" 
                    :src="beATeacherData.courseImg" 
                    alt="課程封面照"
                    v-if="beATeacherData.courseImg"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 d-flex justify-content-between">
          <button type="button" class="btn btn-outline-primary col-5 col-md-3"
                  @click="goBeATeacherStep1()">
            上一步
          </button>
          <button type="submit" class="btn btn-primary col-5 col-md-3">
            下一步
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
    ...mapActions(dataStore, ['uploadPhoto']),
    ...mapActions(goStore, ['goBeATeacherStep1', 'goBeATeacherStep3']),
  },
  created () {
    
  }
}
</script>

<style lang="scss" scoped>

</style>