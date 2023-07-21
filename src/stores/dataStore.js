import { defineStore } from 'pinia'

export default defineStore('dataStore', {
  state: () => ({
    coursesData: [
      {
        id: 1,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: '實體',
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 2,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '從零開始學吉他',
        courseIntro: '',
        courseCategory: '吉他',
        courseMethod: '實體',
        cityName: '新竹市',
        time: 60,
        price: 2000,
      },
      {
        id: 3,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: '線上',
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 4,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '從零開始學吉他',
        courseIntro: '',
        courseCategory: '吉他',
        courseMethod: '實體',
        cityName: '台中市',
        time: 60,
        price: 2000,
      },
      {
        id: 5,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '從零開始學直笛',
        courseIntro: '',
        courseCategory: '直笛',
        courseMethod: '實體',
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 6,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '從零開始學唱歌',
        courseIntro: '',
        courseCategory: '唱歌',
        courseMethod: '實體 / 線上',
        cityName: '台南市',
        time: 60,
        price: 2000,
      },
      {
        id: 7,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '從零開始學唱歌',
        courseIntro: '',
        courseCategory: '唱歌',
        courseMethod: '線上',
        cityName: '台南市',
        time: 60,
        price: 2000,
      },
      {
        id: 8,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: '實體',
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 9,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: '實體',
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 10,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: '實體',
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 11,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: '實體 / 線上',
        cityName: '台東市',
        time: 60,
        price: 2000,
      },
      {
        id: 12,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: '實體',
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
    ],
    courseData:{},
    teacherCoursesData:[],
    studentCoursesData:[],
    myCoursesState: 'student',
    bookmarksCoursesData:[],
    bookmarkIds: [],
    bookmarkNum: 0,

  }),
  actions: {
    // 單一課程頁面用
    getCourseData(id) { 
      this.courseData = this.coursesData.filter((item) => {
        return item.id == id
      })
    },
    // 我的課程頁面用(老師端隨便選些測試)
    getTeacherCoursesData () {
      this.teacherCoursesData = this.coursesData.filter((item) => {
        return item.id > 6
      })
    },
    // 我的課程頁面用(學生端隨便選些測試)
    getStudentCoursesData () {
      this.studentCoursesData = this.coursesData.filter((item) => {
        return item.id > 8
      })
    },
    // 我的課程頁面用(收藏)
    getBookmarkIds () {
      this.bookmarkIds = JSON.parse(localStorage.getItem('bookmarkIds')) || []
    },
    getBookmarkCoursesData () {
      this.getBookmarkIds ()
      this.bookmarksCoursesData = []
      this.coursesData.forEach((item) => {
        if (this.bookmarkIds.indexOf(item.id) > -1) {
          this.bookmarksCoursesData.push(item)
        }
      })
      this.bookmarkNum = this.bookmarksCoursesData.length
      // console.log(this.bookmarkIds)
      // console.log(this.bookmarksCoursesData)
      console.log(this.bookmarkNum)
    },
    toggleBookmark (item) {
      const clickId = item
      const inBookmarks = this.bookmarkIds.some((item) => item === clickId)
      if (!inBookmarks) {
        this.bookmarkIds.push(item)
        localStorage.setItem('bookmarkIds', JSON.stringify(this.bookmarkIds))
      } else {
        const delItem = this.bookmarkIds.find((item) => {
          return item === clickId
        })
        this.bookmarkIds.splice(this.bookmarkIds.indexOf(delItem), 1)
        localStorage.setItem('bookmarkIds', JSON.stringify(this.bookmarkIds))
      }
      this.getBookmarkCoursesData()
    },

  },
  getters: {
    bookmarkState () {
      return (id) => {
        return this.bookmarkIds.indexOf(id) > -1 ? 'bi bi-bookmark-plus-fill text-success' : 'bi bi-bookmark-plus text-success'
      }
    }
  }
})