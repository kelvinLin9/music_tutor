<template>
  <div class="modal fade" id="SetUpClassSchedule2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">設定上課時間</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">




        

        <div class="block">
      <!-- <span class="demonstration">Use value-format</span> -->
      <div class="demonstration">Value：{{ classScheduleTime }}</div>
      <el-date-picker
        v-model="classScheduleTime"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD HH:mm"
        value-format="YYYY-MM-DD HH:mm"
      />
    </div>

        


      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" 
                data-bs-target="#SetUpClassSchedule" 
                data-bs-toggle="modal">
          取消
        </button>
        <button class="btn btn-primary" 
                data-bs-dismiss="modal"
                @click="UpDateClassSchedule()">
          確定
        </button>
      </div>
    </div>
  </div>
</div>
</template>
    
<script>
import { mapState, mapActions, mapWritableState } from 
'pinia' 
import dataStore from '../stores/dataStore';


export default {
  data () {
    return {
      value:''
    }
  },
  computed: {
    ...mapWritableState(dataStore, ['classScheduleTime'])
  },
  methods: {  
    ...mapActions(dataStore, ['UpDateClassSchedule']),
    test() {
      this.value = (time, Date) => {
        return time.getTime() > Date.now()
      }
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

</style>