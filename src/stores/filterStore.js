import { defineStore } from 'pinia'
import dataStore from './dataStore'

const data = dataStore()

export default defineStore('filterStore', {
  state: () => ({
    selectCityName: '',
    selectCourseCategory:'',
    selectCourseName:''
  }),
  actions: {
  },
  getters: {
    filterData () {
      if (this.selectCityName === '請選擇上課地點') {
        this.selectCityName = ''
      }
      return data.coursesData.filter((item) => {
        return item.cityName.match(this.selectCityName) && item.courseCategory.match(this.selectCourseCategory) && item.courseName.match(this.selectCourseName)
      })
    }
  }
})