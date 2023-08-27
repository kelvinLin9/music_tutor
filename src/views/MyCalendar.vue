<template>
  <BannerCom />
  <div class="container my-32">
    <div class="row">
      <div class="col-auto">
        - 我是老師
      </div>
      <div class="col-auto">
        - 我是學生
      </div>
      <div class="col-auto">
        <label for="exampleColorInput" class="form-label">自訂顏色</label>
        <!-- <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"> -->
      </div>
    </div>
  </div>
  <div class="container mb-32" v-if="!loading">
    <calendar-com/>
  </div>
</template>


  
<script>


import BannerCom from '../components/BannerCom.vue'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'
import bannerStore from '@/stores/bannerStore'
import CalendarCom from '../components/CalendarCom.vue'

export default {
  components: { BannerCom, CalendarCom },
  data () {
    return {
      // calendarOptions: {
      //   plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
      //   initialView: 'dayGridMonth',
      //   weekends: true,
      //   height: 650,
      //   // locale: 'zh-tw',
      //   dayMaxEventRows: 2.0, // 事件最大展示列數
      //   aspectRatio: 1.35,
      //   weekNumberCalculation:'iso',//周次的显示格式。
      //   handleWindowResize: true, // 響應式
      //   selectable: true,  // 是否可以選中日曆格   
      //   expandRows: true, 
      //   // stickyFooterScrollbar: true, //
      //   windowResize : function(e){//瀏覽器窗體變化時觸發
      //     console.log(window.innerWidth)
      //     console.log()
      //       },
      //   titleFormat: { 
      //     year: 'numeric',
      //     month: '2-digit',
      //     },
      //   headerToolbar: {
      //     left: "prev,next today",
      //     center: "title",
      //     right: "dayGridMonth,timeGridWeek,timeGridDay listMonth",
      //   }, //日曆上方的按钮和title
      //   buttonText: {
      //     today: "今天",
      //     month: "月",
      //     week: "周",
      //     day: "日",
      //     list: "列表",
      //   },
      //   slotLabelFormat: {
      //     hour: "2-digit",
      //     minute: "2-digit",
      //     meridiem: false,
      //     hour12: false, 
      //   }, 
      //   eventTimeFormat: { // like '14:30'
      //     hour: '2-digit',
      //     minute: '2-digit',
      //     hour12: false
      //   },   
      //   displayEventEnd: true, //     
      //   // eventMouseEnter: this.eventMouseEnter,
      //   dateClick: info => {
      //     console.log(info);
      //   },//點擊日期info是單元格的信息
      //   eventClick: info => {
      //     console.log(info);
      //     // dialogVisible.value = true;
      //   }, //事件的點擊
      //   eventDidMount: function(info) {
      //     var tooltip = new Tooltip(info.el, {
      //       content: info.event._def.title,
      //       placement: 'top',
      //       // trigger: 'hover', 
      //       // container: 'body'
      //     }); // 懸浮提示
      //   },
      //   loading : function(isLoading, view){ //视图数据加载中、加载完成触发
      //                           console.log("↓↓↓loading↓↓↓");
      //                           if(isLoading == true){
      //                               console.log("view:"+view+",开始加载");
      //                           }else if(isLoading == false){
      //                               console.log("view:"+view+",加载完成");
      //                           }else{
      //                               console.log("view:"+view+",除非天塌下来否则不会进这个分支");
      //                           }
      //                       },
      //   // events: [],
      //   eventSources: [
      //     // {
      //     //   events: [],
      //     //   // color: 'black',     // an option!
      //     //   // textColor: 'yellow' // an option!
      //     // },
      //     // {
      //     //   events: [
      //     //     {
      //     //       title  : 'event0',
      //     //       start  : '2023-08-27'
      //     //     },
      //     //     {
      //     //       title  : 'event1',
      //     //       start  : '2023-08-29'
      //     //     },
      //     //   ],
      //     //   // color: 'black',     // an option!
      //     //   // textColor: 'yellow' // an option!
      //     // },
      //   ]
      // },


    }
  },
  watch: {
    calenderDataAll() {
      // this.calendarOptions.events = this.calenderDataAll
      // console.log(this.calendarOptions.eventSources[0].events)
      // this.calendarOptions.eventSources[1].events = this.calenderDataAll
    },
  },
  computed:{
    ...mapState(dataStore,['calenderDataAll', 'calenderData', 'loading', 'calenderTeach', 'calenderTest']),
  },
  methods: {
    ...mapActions(dataStore,['onAuthStateChanged']),
    ...mapActions(bannerStore, ['getBannerInfo']),
  },
  created () {
    this.onAuthStateChanged()
    this.getBannerInfo(
      new URL('../assets/images/banner.jpg', import.meta.url).href,
      'CALENDAR',
      '行事曆',
      '井然有序，做一個時間管理大師'
      )
      if(window.innerWidth < 992) {
        this.calendarOptions.initialView = 'listMonth'
        this.calendarOptions.headerToolbar = {
          left: "prev,next today",
          center: "title",
          right: "listMonth"
        }
      }
    },
    mounted() {

  }
}



</script>

<style lang="scss">
.fc-toolbar-title {
  color: #ff715f !important;
}
.fc-button-primary {
    color: #ff715f !important;
    background-color: #ffffff !important;
    border-color: #ff715f !important;
    border-radius: 50rem !important;
    &:hover{
    background-color: #ff715f !important;
    color: #ffffff !important;
    box-shadow: 0!important;
  }
}
.fc-button-primary {
  &:hover{
    background-color: #ff715f !important;
    color: #ffffff !important;
    box-shadow: 0!important;
  }
}
.fc-button-active {
  background-color: #ff715f !important;
  color: #ffffff !important;
  box-shadow: 0!important;
}
.fc-button .fc-icon {
    vertical-align: middle;
    font-size: 1.5em;
    color: #ff715f;
    &:hover{
    background-color: #ff715f !important;
    color: #ffffff !important;
    box-shadow: 0!important;
  }
}
.fc-event {
    position: relative;
    font-size: 0.6em !important;
    line-height: 1.4 !important;
    display: block !important;
    border-radius: 5px;
    color: #333333;
    .fc-daygrid-event-dot {
      display: inline-block !important;
    }
    .fc-event-time {
      display: inline !important;
      
    }
    .fc-event-title {
      padding-left: 4px;
    }
}

</style>