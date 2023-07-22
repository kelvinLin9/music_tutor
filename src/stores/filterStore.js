import { defineStore } from 'pinia'
import dataStore from './dataStore'
import PaginationStore from './PaginationStore'


const data = dataStore()
const Pagination = PaginationStore()

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
      return data.coursesData.filter((item) => {
        return item.cityName.match(this.selectCityName) && item.courseCategory.match(this.selectCourseCategory) && item.courseName.match(this.selectCourseName)
      })
    }
  }
})