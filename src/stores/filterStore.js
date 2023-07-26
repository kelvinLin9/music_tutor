import { defineStore } from 'pinia'
import dataStore from './dataStore'
import PaginationStore from './PaginationStore'


const data = dataStore()
const Pagination = PaginationStore()

export default defineStore('filterStore', {
  state: () => ({
    selectCityName: '',
    selectCourseCategory: '',
    selectCourseName: '',
    courseMethod: ['在學生家', '在老師家', '線上'],
    selectCourseMethod: ''
  }),
  actions: {
    selectCityNameCancel () {
      // 解決取消搜尋上課方式後上課地點還有值的問題
      if (this.selectCourseMethod === '') {
        this.selectCityName = ''
      }
    }
  },
  getters: {
    filterData () {
      if (this.selectCourseMethod === '') {
        return data.coursesData.filter((item) => {
          return item.cityName.match(this.selectCityName) && item.courseCategory.match(this.selectCourseCategory) && item.courseName.match(this.selectCourseName) 
        }) 
      } else {
        return data.coursesData.filter((item) => {
          return item.cityName.match(this.selectCityName) && item.courseCategory.match(this.selectCourseCategory) && item.courseName.match(this.selectCourseName) && item.courseMethod.includes(this.selectCourseMethod)
        })
      }
    },
  }
})