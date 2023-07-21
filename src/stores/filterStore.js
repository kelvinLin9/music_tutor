import { defineStore } from 'pinia'
import dataStore from './dataStore'

const data = dataStore()

export default defineStore('filterStore', {
  state: () => ({
    selectCityName: '',
    selectcourseCategory:'',
    selectcourseName:''
  }),
  actions: {

  },
  getters: {
    filterData () {
      console.log(this.selectcourseCategory)
      if (this.selectCityName === '請選擇上課地點') {
        this.selectCityName = ''
      }
      return data.coursesData.filter((item) => {
        return item.cityName.match(this.selectCityName) && item.courseCategory.match(this.selectcourseCategory) && item.courseName.match(this.selectcourseName)
      })
    }
  }
})