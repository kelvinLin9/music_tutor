<template>
  <div class="container">
    <div class="row test">
      <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center mt-3">
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
        <div class="mb-2 fs-2">
          {{ teacherData.displayName }}
          <i :class="teacherData.gender"></i>
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-envelope-fill"></i>：{{ user.email }}
        </div>
        <div class="mb-2 w-100">
          <i class="bi bi-telephone-fill"></i>：{{ teacherData.phoneNumber }}
        </div>
        <div class="mb-2 w-100">
          <p class="">自我介紹：</p>
          <p class="border border-secondary rounded-4 p-3">
            {{ teacherData.teacherIntro }}
          </p>
        </div>
        <div class="d-flex justify-content-around w-75 mb-2">
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
        <div class="mb-2">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">編輯個人資料</button>
        </div>
      </div>
      <div class="col-12 col-md-8 mt-3 px-5">
        <div class="">上傳個人封面框</div>

        <!-- <div id="editor"></div> -->
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        {{ editorData  }}
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
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        },
  components: { EditIntroModal },
  computed: {
    ...mapState(dataStore, ['user','isMember', 'teacherData']),
    ...mapWritableState(dataStore, [])
  },
  methods: {
    ...mapActions(logInStore, ['signOut']),  
    ...mapActions(dataStore, ['uploadPhoto', 'onAuthStateChanged']),
    
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
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
}
.upload-icon { 
  position: absolute;
  right: -10px;
  bottom: 10px;
  z-index: 10;
  font-size: 40px;
  
}
</style> 