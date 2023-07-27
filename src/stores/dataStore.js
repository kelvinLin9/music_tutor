import {getFirestore, 
        collection, 
        doc, 
        setDoc, 
        getDoc,
        getDocs, 
        addDoc, 
        Timestamp,
        updateDoc, 
        serverTimestamp,
        writeBatch,
        deleteDoc,
        deleteField,
       } from 'firebase/firestore/lite'
import { getAuth, onAuthStateChanged,} from 'firebase/auth'
import { defineStore } from 'pinia'
import router from '../router'

const auth = getAuth();
const db = getFirestore()

export default defineStore('dataStore', {
  state: () => ({
    // 自己創的測試用數據
    coursesData: [
      {
        id: 1,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: ['', '在老師家', ''],
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 2,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '從零開始學吉他',
        courseIntro: '',
        courseCategory: '木吉他',
        courseMethod: ['在學生家', '在老師家', '線上'],
        cityName: '新竹市',
        time: 60,
        price: 2000,
      },
      {
        id: 3,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: ['在學生家', '在老師家', ''],
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 4,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '從零開始學吉他',
        courseIntro: '',
        courseCategory: '木吉他',
        courseMethod: ['在學生家', '在老師家', '線上'],
        cityName: '台中市',
        time: 60,
        price: 2000,
      },
      {
        id: 5,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '從零開始學直笛',
        courseIntro: '',
        courseCategory: '直笛',
        courseMethod: ['在學生家', '', ''],
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 6,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '從零開始學唱歌',
        courseIntro: '',
        courseCategory: '唱歌',
        courseMethod: ['在學生家', '在老師家', ''],
        cityName: '台南市',
        time: 60,
        price: 2000,
      },
      {
        id: 7,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '從零開始學唱歌',
        courseIntro: '',
        courseCategory: '唱歌',
        courseMethod: ['', '在老師家', '線上'],
        cityName: '台南市',
        time: 60,
        price: 2000,
      },
      {
        id: 8,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '零基礎開始學大鼓',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: ['', '在老師家', '線上'],
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      {
        id: 9,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: ['在學生家', '在老師家', ''],
        cityName: '台東市',
        time: 60,
        price: 2000,
      },
      {
        id: 10,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: ['', '', '線上'],
        cityName: '高雄市',
        time: 60,
        price: 2000,
      },
      {
        id: 11,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: ['', '在老師家', '線上'],
        cityName: '台東市',
        time: 60,
        price: 2000,
      },
      {
        id: 12,
        courseImg: '',
        teacherImg: '',
        teacherName: '林老師',
        teacherIntro: '',
        courseName: '零基礎開始學鋼琴',
        courseIntro: '',
        courseCategory: '鋼琴',
        courseMethod: ['在學生家', '', '線上'],
        cityName: '台北市',
        time: 60,
        price: 2000,
      },
      // {
      //   id: 13,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '零基礎開始學鋼琴',
      //   courseIntro: '',
      //   courseCategory: '鋼琴',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台北市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 14,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '從零開始學吉他',
      //   courseIntro: '',
      //   courseCategory: '木吉他',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '新竹市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 15,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '零基礎開始學鋼琴',
      //   courseIntro: '',
      //   courseCategory: '鋼琴',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台北市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 16,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '從零開始學吉他',
      //   courseIntro: '',
      //   courseCategory: '木吉他',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台中市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 17,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '從零開始學直笛',
      //   courseIntro: '',
      //   courseCategory: '直笛',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台北市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 18,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '從零開始學唱歌',
      //   courseIntro: '',
      //   courseCategory: '唱歌',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台南市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 19,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '從零開始學唱歌',
      //   courseIntro: '',
      //   courseCategory: '唱歌',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台南市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 20,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '零基礎開始學鋼琴',
      //   courseIntro: '',
      //   courseCategory: '鋼琴',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台北市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 21,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '零基礎開始學鋼琴',
      //   courseIntro: '',
      //   courseCategory: '鋼琴',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台北市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 22,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '零基礎開始學鋼琴',
      //   courseIntro: '',
      //   courseCategory: '鋼琴',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台北市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 23,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '零基礎開始學鋼琴',
      //   courseIntro: '',
      //   courseCategory: '鋼琴',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台東市',
      //   time: 60,
      //   price: 2000,
      // },
      // {
      //   id: 24,
      //   courseImg: '',
      //   teacherImg: '',
      //   teacherName: '林老師',
      //   teacherIntro: '',
      //   courseName: '零基礎開始學鋼琴',
      //   courseIntro: '',
      //   courseCategory: '鋼琴',
      //   courseMethod: ['在學生家', '在老師家', '線上'],
      //   cityName: '台北市',
      //   time: 60,
      //   price: 2000,
      // },
    ],
    courseData:{},
    teacherCoursesData:[],
    studentCoursesData:[],
    myCoursesState: 'student', // 我的課程換頁用
    bookmarksCoursesData:[],
    bookmarkIds: [],
    bookmarkNum: 0,
    // 成為老師表單數據，老師名稱來自會員(先預設)
    beATeacherData:{
      uid: '',
      displayName: '',
      gender: '',
      courseImg: '',
      teacherImg: '',
      teacherIntro: '',
      courseName: '',
      courseIntro: '',
      courseCategory: '',
      courseMethod: [],      
      cityName: '',
      time: 0,
      price: 0,
    },
    musicTutorData:[],
    teacherData: {
      uid: '',
      displayName: '',
      gender: '',
      address: '',
      teachArea: [],
      teacherIntro: '',
      instagram: '',
      facebook: '',
      discord: '',
      expertise: '',
      educationalBackground: '',
      courses: [],
      language: [],
      musicStyle:[], 
      myTeachCourses:[],
      allTeachTime:0,
      studentAssess:[]
    },
    studentData: {
      myCourses:[],
      myCoursesDown:[],
      allStudyTime:0,
      myBookmarkCourses:[],
      myBookmarkTeacher:[],
    },
    user:{},
    isMember: false,

  }),
  actions: {
    async SetFirebaseMemberData() {   
      console.log('Set Firebase Member')
      const member = this.user.uid
      const identity1 = "teacher"
      const identity2 = "student"
      await setDoc(doc(db, member , identity1), 
      this.teacherData);
      await setDoc(doc(db, member , identity2), 
      this.studentData);
      console.log('成功建立老師端學生端物件')
    },
    async SetFirebaseCourseData() {   
      this.beATeacherData.uid = this.user.uid
      this.beATeacherData.displayName = this.user.displayName
      this.beATeacherData.gender = this.teacherData.gender
      this.beATeacherData.teacherImg = this.user.photoURL
      this.beATeacherData.teacherIntro = this.teacherData.teacherIntro
      const member = "MusicTutorCourses"
      console.log(this.beATeacherData)
      await addDoc(collection(db, member), this.beATeacherData)
      alert('新增課程成功')

      this.beATeacherData.uid = '',
      this.beATeacherData.displayName = '',
      this.beATeacherData.gender = '',
      this.beATeacherData.courseImg = ''
      this.beATeacherData.teacherImg = ''
      this.beATeacherData.teacherIntro = ''
      this.beATeacherData.courseName = ''
      this.beATeacherData.courseIntro = ''
      this.beATeacherData.courseCategory = ''
      this.beATeacherData.courseMethod = []
      this.beATeacherData.cityName = ''
      this.beATeacherData.time = 0
      this.beATeacherData.price = 0
    },
    addCourseDataToTeacher() {

    },
    async UpdateFirebaseMemberData() {
      const teacherRef = doc(db, this.user.uid, 'teacher')
      const studentRef = doc(db, this.user.uid, 'student')
      await updateDoc(teacherRef, this.teacherData)
      await updateDoc(studentRef, this.studentData)
      console.log('學生老師端資料更新成功')
    },
    // async DeleteFirebaseData() {
    //   // 刪集合
    //   // await deleteDoc(doc(db, "Kelvin", "teacher"));

    //   const cityRef = doc(db, 'Kelvin', 'teacher');
    //   await updateDoc(cityRef, {
    //     id: deleteField()
    //   });
    // console.log('ok')
    // },


    async GetTeacherFirebaseData() {
      // 學生資料要記得取
      const docRef = doc(db, this.user.uid, 'teacher');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document teacher data:", docSnap.data());
        this.teacherData = docSnap.data()
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such teacher document!");
      }
    },
    async GetStudentFirebaseData() {
      const docRef = doc(db, this.user.uid, 'student');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document student data:", docSnap.data());
        this.studentData = docSnap.data()
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such student document!");
      }
    },
    // 判斷完是否登入後，讀取用戶老師端學生端資料
    onAuthStateChanged() {
      onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
          this.user = user;
          this.isMember = true
          this.GetTeacherFirebaseData()
          this.GetStudentFirebaseData()
        } else {
          this.isMember = false
          console.log('已登出')
        }
      });
     },
    onAuthStateChangedForCreateCourse() {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.isMember = false
          router.push('/UserLogin')
          console.log('已登出') 
        } else {
          this.user = user;
          this.isMember = true
          this.GetTeacherFirebaseData()
          this.GetStudentFirebaseData()
          if (!user.displayName || !this.teacherData.teacherIntro) {
            alert('請先填寫老師姓名及自我介紹')
            router.push('/MemberPage')
          }
        }
      });
    },
    copyUserToTeacherData() {
      this.teacherData.displayName = this.user.displayName
      this.teacherData.email = this.user.uid.email
      this.teacherData.uid = this.user.uid
    },
    
    
    







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
    // 處理上傳圖片
    async uploadPhoto(item, e) {
      try {
        const file = e.target.files[0]
        if (!file) return

        const beforeUploadCheck = await this.beforeUpload(file)
        if (!beforeUploadCheck.isValid) {
          throw beforeUploadCheck.errorMessages
        }
        this.to64(item, file)
      } catch (error) {
        alert(error)
        console.log('Catch Error: ', error)
      } finally {
        e.target.value = ''
      }
    },
    beforeUpload (fileObject) {
      return new Promise((resolve) => {
        const validFileTypes = ['image/jpeg', 'image/png']
        const isValidFileType = validFileTypes.includes(fileObject.type)
        const errorMessages = []

        if (!isValidFileType) {
          errorMessages.push('You can only upload JPG or PNG file!')
          alert('You can only upload JPG or PNG file!')
        }

        const isValidFileSize = fileObject.size / 1024 / 1024 < 2
        if (!isValidFileSize) {
          errorMessages.push('Image must smaller than 2MB!')
          alert('Image must smaller than 2MB!')
        }
        resolve({
          isValid: isValidFileType && isValidFileSize,
          errorMessages: errorMessages.join('\n')
        })
      })
    },
    to64 (item, File) {
      const formData = new FormData()
      formData.append('iFile', File)
      const file = formData.get('iFile')
      const reader = new FileReader()
      const fileType = file.type
      reader.readAsDataURL(file)

      // reader读取完成
      reader.onload = e => {
        if (/^image\/[jpeg|png|gif]/.test(fileType)) {
          if (item === 'teacher'){
            this.beATeacherData.teacherImg = e.target.result
          } else if (item === 'course') {
            this.beATeacherData.courseImg = e.target.result
          }
        }
      }
    }   
  },
  getters: {
    bookmarkState () {
      return (id) => {
        return this.bookmarkIds.indexOf(id) > -1 ? 'bi bi bi-bookmark-fill text-success' : 'bi bi-bookmark-plus text-success'
      }
    }
  }
})