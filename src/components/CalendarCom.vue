<template>
    <FullCalendar :options='calendarOptions' class="tyr">
    <!-- <template v-slot:eventContent='arg'>
      <div :style="{color: arg.event.backgroundColor}">
        <p class="">
          {{ arg.timeText }}
        </p>
        <p>
          {{ arg.event.title }}
        </p>
      </div>
    </template> -->
  </FullCalendar>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3"
// import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid' // 右上顯示月週日
import interactionPlugin from "@fullcalendar/interaction" // 拖曳
import listPlugin from "@fullcalendar/list";
import Tooltip from 'tippy.js' //npm i tippy.js
import 'tippy.js/dist/tippy.css'
import { mapState, mapActions, mapWritableState } from 
'pinia'  
import dataStore from '@/stores/dataStore'


export default {
  components: { FullCalendar },
  data () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        weekends: true,
        height: 650,
        // locale: 'zh-tw',
        dayMaxEventRows: 2.0, // 事件最大展示列數
        aspectRatio: 1.35,
        weekNumberCalculation:'iso',//周次的显示格式。
        handleWindowResize: true, // 響應式
        selectable: true,  // 是否可以選中日曆格   
        expandRows: true, 
        // stickyFooterScrollbar: true, //
        windowResize : function(e){//瀏覽器窗體變化時觸發
          console.log(window.innerWidth)
          console.log()
            },
        titleFormat: { 
          year: 'numeric',
          month: '2-digit',
          },
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay listMonth",
        }, //日曆上方的按钮和title
        buttonText: {
          today: "今天",
          month: "月",
          week: "周",
          day: "日",
          list: "列表",
        },
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false, 
        }, 
        eventTimeFormat: { // like '14:30'
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        },   
        displayEventEnd: true, //     
        // eventMouseEnter: this.eventMouseEnter,
        dateClick: info => {
          console.log(info);
        },//點擊日期info是單元格的信息
        eventClick: info => {
          console.log(info);
          // dialogVisible.value = true;
        }, //事件的點擊
        eventDidMount: function(info) {
          var tooltip = new Tooltip(info.el, {
            content: info.event._def.title,
            placement: 'top',
            // trigger: 'hover', 
            // container: 'body'
          }); // 懸浮提示
        },
        loading : function(isLoading, view){ //视图数据加载中、加载完成触发
                                console.log("↓↓↓loading↓↓↓");
                                if(isLoading == true){
                                    console.log("view:"+view+",开始加载");
                                }else if(isLoading == false){
                                    console.log("view:"+view+",加载完成");
                                }else{
                                    console.log("view:"+view+",除非天塌下来否则不会进这个分支");
                                }
                            },
        // events: [],
        eventSources: [
          // {
          //   events: [],
          //   // color: 'black',     // an option!
          //   // textColor: 'yellow' // an option!
          // },
          // {
          //   events: [
          //     {
          //       title  : 'event0',
          //       start  : '2023-08-27'
          //     },
          //     {
          //       title  : 'event1',
          //       start  : '2023-08-29'
          //     },
          //   ],
          //   // color: 'black',     // an option!
          //   // textColor: 'yellow' // an option!
          // },
        ]
      },


    }
  },
  watch: {
    calenderDataAll() {
      
      // this.calendarOptions.eventSources = this.calenderTeach
      // this.calendarOptions.events = this.calenderDataAll
      // console.log(this.calendarOptions.eventSources[0].events)
      // this.calendarOptions.eventSources[1].events = this.calenderDataAll
    },
  },
  computed:{
    ...mapState(dataStore,['calenderDataAll', 'calenderData', 'calenderTeach', 'calenderTest']),
  },
  methods: {

  },
  created () {
    console.log('??????',this.calenderTeach)
    this.calendarOptions.events = this.calenderDataAll
    // this.calendarOptions.eventSources = this.calenderTest
    // this.calendarOptions.eventSources = this.calenderTeach
  
    },
  mounted() {
  }
}


</script>