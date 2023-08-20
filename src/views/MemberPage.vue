<template>
  <div class="">
    <div class="container">
      <div class="row my-16">
        <div class="col-12 col-md-4 d-flex flex-column align-items-center">
          <div class="user-photo position-relative">
            <img :src="teacherData.teacherImg" alt="大頭照"
                  v-if="teacherData.teacherImg">
            <img src="../assets/images/預設大頭貼.png" alt="預設大頭照"
                  v-if="!teacherData.teacherImg">
            <label for="file-upload">
              <i class="bi bi-cloud-arrow-up-fill cursor-pointer upload-icon"></i>
            </label>
            <input
                    type="file"
                    id="file-upload"
                    class="d-none"
                    @change="uploadPhoto('teacher',$event)"
                  />
          </div>
          <div class="mb-2 fs-3 fw-bold">
            {{ teacherData.displayName }}
            <i :class="teacherData.gender"></i>
          </div>
          <!-- <div class="mb-2 w-100">
          <div class="mb-2 w-100">
            <i class="bi bi-telephone-fill"></i>：{{ teacherData.phoneNumber }}
          </div> -->
          <div class="my-8 w-100">
            <p class="ps-8 fw-bold">關於我：</p>
            <p class="fs-7 p-8">
              {{ teacherData.teacherIntro }}
            </p>
          </div>
          <div class="d-flex justify-content-around w-50 ms-auto mb-8">
            <a :href="teacherData.facebook" target="_black" @click.prevent>
              <i class="bi bi-facebook fs-3 text-secondary"
                :class="{'text-blue': teacherData.facebook}"></i>
            </a>
            <a :href="teacherData.instagram" target="_black" @click.prevent>
              <i class="bi bi-instagram fs-3 text-secondary"
                :class="{'text-danger': teacherData.instagram}"></i>
            </a>
            <a :href="teacherData.discord" target="_black" @click.prevent>
              <i class="bi bi-discord fs-3 text-secondary"
                :class="{'text-purple': teacherData.discord}"></i>
            </a>
            
          </div>
          <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">編輯個人資料</button>
        </div>
        <!-- 課程介紹 -->
        <div class="col-12 col-md-8">
          <!-- Banner -->
          <div class="ckeditor-img position-relative border"
              :style="{ 'background-image': `url(${teacherData.ckeditorImg ||defaultCkeditorImg })` }">
            <label for="file-upload-ckeditor">
              <i class="bi bi-cloud-arrow-up-fill cursor-pointer upload-icon-ckeditor"></i>
            </label>
            <input
              type="file"
              id="file-upload-ckeditor"
              class="d-none"
              @change="uploadPhoto('ckeditor',$event)"
            />
          </div>
          <!-- 編輯按鈕 -->
          <div class="d-flex justify-content-between" v-if="!ckeditorState">
            <span class="fs-7 text-delete"
              v-if="!teacherData.ckeditor">
              編輯個人頁面，和大家分享更多精彩故事
            </span>
            <a class="text-info fw-bold cursor-pointer ms-auto"
                @click="ckeditorState = true">
                <i class="bi bi-pen-fill me-1"></i>編輯
            </a>
          </div>
          <!-- 顯示編輯內容 -->
          <div v-html="teacherData.ckeditor" class="border p-8"></div>
          <!-- ckeditor編輯框 -->
          <div class="text-delete fs-7 py-1"
              v-if="ckeditorState">
            <ckeditor :editor="editor" v-model="teacherData.ckeditor" :config="editorConfig"></ckeditor>
            
            
  
            <div class="text-end mt-8">
              <button type="button" class="btn btn-secondary me-8"
                      @click="ckeditorState = false">
                取消
              </button>
              <button type="button" class="btn btn-primary"
                      @click="UpdateTeacherCkeditor() , ckeditorState = false">
                確定
              </button>
            </div>
          </div>
          {{ teacherData.ckeditor }}

        </div>
        
      </div>
    </div>
  </div>
  <EditIntroModal />
</template>
  
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import logInStore from '@/stores/logInStore'
import goStore from '@/stores/goStore'
import dataStore from '../stores/dataStore';
import EditIntroModal from '../components/EditIntroModal.vue'
//ckeditor5
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


export default {
  data() {
    return {
      editor: ClassicEditor,
      // this.teacherData.ckeditor: '<p>Content of the editor.</p>',
      editorConfig: {
          // The configuration of the editor.
          // plugins: [ Base64UploadAdapter],
      },
      defaultCkeditorImg: 'https://i.imgur.com/EjLcauL.jpg'
    };
        },
  components: { EditIntroModal },
  computed: {
    ...mapState(dataStore, ['user','isMember', 'teacherData']),
    ...mapWritableState(dataStore, ['ckeditorState'])
  },
  methods: {
    ...mapActions(logInStore, ['signOut']),  
    ...mapActions(dataStore, ['uploadPhoto', 'onAuthStateChanged', 'UpdateTeacherCkeditor']),
    
  },
  created () {
    this.onAuthStateChanged()
  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
.user-photo {
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
}
.upload-icon { 
  position: absolute;
  right: -3px;
  bottom: 0px;
  z-index: 10;
  font-size: 20px;
  background: white;
  color: rgba(108, 117, 125, 1);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2px solid;
}
.upload-icon-ckeditor {
  position: absolute;
  right: 10px;
  bottom: 7px;
  z-index: 10;
  font-size: 20px;
  background: white;
  color: rgba(108, 117, 125, 1);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2px solid;
}
.ckeditor-img {
  height: 400px;
  background-size: cover;
  background-position: center center;
  @media (max-width: 768px)  {
    height: 300px;
  }
  @media (max-width: 576px)  {
    height: 200px;
  }
}

ul li::before{
  /*   可以自訂其他形狀 */
    content: "\2022";
  /*   顏色 */
    color: red;
    font-weight: bold;
  /*   設定 display */
    display: inline-block;
  /*  寬度  */
    width: 1rem;
  /*  可以視情況調整形狀的距離  */
    margin-left: -2rem;
  }
</style> 