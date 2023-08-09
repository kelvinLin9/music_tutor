<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h1 class="border-top border-bottom border-5 py-2 w-75 mx-auto">
          課程介紹
        </h1>
        <h2>想吸引同學來上您的課，必須在這邊好好介紹課程</h2>
      </div>
    </div>
  </div>

  
  <div class="container my-5">
    <VForm  v-slot="{ errors }"
           @submit="goBeATeacherStep3()">
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-lg-8">
          <label for="courseIntro" class="form-label">
            課程介紹：
          </label>
          <VField 
                name="課程介紹"
                class="form-control" 
                id="courseIntro" 
                as="textarea"
                rows="5"
                rules="required|max:500"
                :class="{ 'is-invalid': errors['課程介紹'] }"
                placeholder="限定500字元內"
                v-model="beATeacherData.courseIntro"
                >
          </VField>
          <ErrorMessage class="invalid-feedback" name="課程介紹"/>
        </div>
      </div>

      <div class="row justify-content-center mb-3">
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
              <VField
                  name="課程封面"
                  type="file"
                  id="coursePhoto"
                  class="form-control"
                  rules="required"
                  :class="{ 'is-invalid': errors['課程封面'] }"
                  @change="uploadPhoto('course',$event)"
                >
              </VField>
              <ErrorMessage class="invalid-feedback" name="課程封面"/>
                <img class="img-fluid mt-3" 
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
    ...mapWritableState(dataStore, ['beATeacherData','teacherData']),

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