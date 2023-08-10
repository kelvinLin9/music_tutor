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

const auth = getAuth()
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
      }
    ],
    courseData:{},   // 單一課程頁面用
    myCoursesState: 'student', // 我的課程換頁用
    displayState: 'grid', // 我的課程換呈現方式用
    bookmarkIds: [],
    bookmarkNum: 0,
    // 成為老師表單數據，老師名稱來自會員(先預設)
    beATeacherData:{
      uid: '',
      displayName: '',
      gender: '',
      courseImg: '',
      courseName: '',
      courseIntro: '',
      courseCategory: '',
      courseMethod: [],      
      cityName: '',
      time: 0,
      price: 0,
      whoBuy:[],
    },
    AllCoursesFirebaseData:[],
    otherTeacherData:[],
    teacherData: {
      uid: '',
      accountCreateTime: '',
      lastLogInTime: '',
      email: '',
      displayName: '',
      teacherImg: '',
      gender: '',
      birthday: '',
      address: '',
      phoneNumber:'',
      teachArea: [],
      teacherIntro: '',
      instagram: '',
      facebook: '',
      discord: '',
      expertise: '',
      educationalBackground: '',
      myTeachCourses:[],
      language: [],
      musicStyle:[], 
      allTeachTime:0,
      studentAssess:[]
    },
    studentData: {
      myStudyCourses:[],
      myStudyCoursesDown:[],
      myCart:[],
      payHistory:[],
      allStudyTime:0,
      myBookmarkCourses:[],
      myBookmarkTeacher:[],
    },
    couponData:[],
    user:{},
    isMember: false,
    userTeacherCourses:[],
    userStudentCourses:[],
    userBookmarkCourses:[],
    userCartCourses:[],
  }),
  actions: {
    // 上傳資料----------------------------------
    // 註冊帳號後建立老師端學生端物件
    async SetFirebaseMemberData() {   
      const identity1 = "teacher"
      const identity2 = "student"
      await setDoc(doc(db, this.user.uid , identity1), 
      this.teacherData);
      await setDoc(doc(db, this.user.uid , identity2), 
      this.studentData);
      alert('成功建立老師端學生端物件')
      this.copyUserDataToTeacher()
    },
    // 開課後上傳課程
    async SetFirebaseCourseData() {   
      this.beATeacherData.uid = this.user.uid
      this.beATeacherData.displayName = this.teacherData.displayName
      this.beATeacherData.gender = this.teacherData.gender
      this.beATeacherData.teacherIntro = this.teacherData.teacherIntro
      const member = "MusicTutorCourses"
      console.log(this.beATeacherData)
      await addDoc(collection(db, member), this.beATeacherData)
      router.push('/CreateCourses/BeATeacherStep4')
      this.onAuthStateChanged()
      this.beATeacherData.uid = ''
      this.beATeacherData.displayName = ''
      this.beATeacherData.gender = ''
      this.beATeacherData.courseImg = ''
      this.beATeacherData.teacherIntro = ''
      this.beATeacherData.courseName = ''
      this.beATeacherData.courseIntro = ''
      this.beATeacherData.courseCategory = ''
      this.beATeacherData.courseMethod = []
      this.beATeacherData.cityName = ''
      this.beATeacherData.time = 0
      this.beATeacherData.price = 0
      this.beATeacherData.whoBuy = []
    },
    // 只有第一次登入需要
    async copyUserDataToTeacher() {
      this.teacherData.uid = this.user.uid 
      this.teacherData.email = this.user.email
      // this.teacherData.displayName = this.user.displayName
      this.teacherData.accountCreateTime = this.user.metadata.creationTime
      const teacherRef = doc(db, this.user.uid, 'teacher')
      await updateDoc(teacherRef, this.teacherData)
      alert('成功複製用戶端資料')
      router.push('/')
    },


    // 個人頁面編輯個資用
    async UpdateFirebaseMemberData() {
      const teacherRef = doc(db, this.user.uid, 'teacher')
      await updateDoc(teacherRef, this.teacherData)
      alert('老師端資料更新成功')
      this.onAuthStateChanged()
    },
    // 單一課程頁面編輯用
    async UpdateFirebaseUserCourseData(id) {
      if (this.beATeacherData.courseImg) {
        this.courseData.courseImg = this.beATeacherData.courseImg
      }
      console.log(this.courseData)
      const CoursesRef = doc(db, 'MusicTutorCourses', id)
      await updateDoc(CoursesRef, this.courseData)
      alert('課程資料更新成功')
      // this.onAuthStateChanged()
    },
    async UpdateFirebaseCartData() {
      const studentRef = doc(db, this.user.uid, 'student')
      await updateDoc(studentRef, this.studentData)
      alert('學生老師端資料更新成功')
      // this.onAuthStateChanged()
    },
    async UpdateTeacherImg() {
      const teacherRef = doc(db, this.user.uid, 'teacher')
      await updateDoc(teacherRef, this.teacherData)
      alert('大頭照更新成功')
      // this.onAuthStateChanged()
    },




    // 取得資料---------------------------------------------
    async getTeacherFirebaseData() {
      const docRef = doc(db, this.user.uid, 'teacher');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("用戶老師端資料:", docSnap.data());
        this.teacherData = docSnap.data()
        if(router.currentRoute._value.fullPath === "/CreateCourses/BeATeacherStep1") {
          if (!this.teacherData.displayName || !this.teacherData.teacherIntro || !this.teacherData.teacherImg || !this.teacherData.gender) {
            console.log(this.teacherData.displayName, this.teacherData.teacherIntro, this.teacherData.gender, this.teacherData.teacherImg)
            alert('請先填寫老師姓名、大頭照、性別、自我介紹')
            router.push('/MemberPage')
          }
        }
      } else {
        alert("No such teacher document!");
      }
    },
    async getStudentFirebaseData() {
      const docRef = doc(db, this.user.uid, 'student');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("用戶學生端資料:", docSnap.data());
        this.studentData = docSnap.data()
      } else {
        alert("No such student document!");
      }
    },
    async getAllCoursesFirebaseData() {
      const querySnapshot = await getDocs(collection(db, "MusicTutorCourses"));
      // 這邊有留開課時間
      this.AllCoursesFirebaseData = []
      
      querySnapshot._docs.forEach((item) => {
        // console.log(item.data());
        // console.log(item.id);
        // 之後要再想不麻煩的方法
        const wrap = {
          id: item.id,
          createdTime: item._document.createTime.timestamp.seconds,
          data: item.data()
        }
        this.AllCoursesFirebaseData.push(wrap)
      });
      console.log('全部課程資料',this.AllCoursesFirebaseData)
      // 用ID抓出其他想要渲染的資料
      if (this.user.uid) {
        this.getUserTeacherCourses()
        this.getUserStudentCourses()
        this.getUserCartCourses()
        this.getBookmarkCoursesData()
        this.getCouponData()
      } 
    },
    async getCouponData() {
      const docRef = doc(db, "coupon", 'code')
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log(docSnap.data())
        this.couponData = docSnap.data()
        console.log("後台優惠券資料:", this.couponData);
      } else {
        console.log("No such OneCourses document!")
      }
    },
    async getOneCoursesFirebaseData(courseId) {
      const docRef = doc(db, "MusicTutorCourses", courseId)
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("單一課程資料", docSnap.data())
        this.courseData = docSnap.data()
        // 自己加上課程id，後面要編輯上傳才會有值
        const wrap = {id : courseId}
        this.courseData = Object.assign(this.courseData, wrap,)
        this.getTeacherPhoto(this.courseData.uid)
        router.push(`/coursePage/${courseId}`)
      } else {
        console.log("No such OneCourses document!")
      }
    },
    // 更新單一課程頁面老師大頭照
    async getTeacherPhoto(TeacherId) {
      const docRef = doc(db, TeacherId, 'teacher');
      const docSnap = await getDoc(docRef);
      this.courseData.teacherImg = docSnap.data().teacherImg

    },
    // 進入其他老師頁面用，點自己課程就導向個人主頁
    async getOneTeacherFirebaseData(TeacherId) {
      if (TeacherId === this.user.uid) {
        router.push('/MemberPage')
      } else {
        const docRef = doc(db, TeacherId, 'teacher');
        const docSnap = await getDoc(docRef);
        console.log("某某老師資料", docSnap.data()) 
        this.otherTeacherData = docSnap.data()
        router.push(`/teacherPage/${TeacherId}`)
      }
    },

    // 我的課程頁面for老師
    getUserTeacherCourses() {
      if (!this.AllCoursesFirebaseData) {
        console.log('完全沒有課程')
      } else {
        this.userTeacherCourses = this.AllCoursesFirebaseData.filter((item) => {
          return item.data.uid === this.user.uid
        })
        console.log("用戶老師端課程資料",this.userTeacherCourses)
      }
    },
    getUserCartCourses() {
      this.userCartCourses = []
      this.studentData.myCart.forEach((item) => {
        let wrap = {}
        wrap = this.AllCoursesFirebaseData.filter((i) => {
          return i.id === item.courseId
        })
        wrap.timestamp = item.timestamp
        this.userCartCourses.push(wrap)
      })
      console.log("用戶購物車內課程", this.userCartCourses)
    },
    getUserStudentCourses() {
      if(!this.studentData.myStudyCourses) {
        alert('尚未購買課程')
      } else {
        this.userStudentCourses = []
        this.studentData.myStudyCourses.forEach((item) => {
          let wrap = {}
          wrap = this.AllCoursesFirebaseData.filter((i) => {
            return i.id === item.courseId
          })
          wrap.timestamp = item.timestamp
          this.userStudentCourses.push(wrap)
        })
        console.log("用戶學生端課程資料",this.userStudentCourses)
      }
    },



    // 刪除資料-----------------------------------------
    // async DeleteFirebaseData() {
    //   // 刪集合
    //   // await deleteDoc(doc(db, "Kelvin", "teacher"));

    //   const cityRef = doc(db, 'Kelvin', 'teacher');
    //   await updateDoc(cityRef, {
    //     id: deleteField()
    //   });
    // console.log('ok')
    // },




    // 註冊登入------------------------------------------
    // 判斷完是否登入後，讀取用戶老師端學生端資料
    onAuthStateChanged() {
      onAuthStateChanged(auth, (user) => {
        console.log('user端資料', user)
        if (user) {
          this.user = user;
          this.isMember = true
          this.getTeacherFirebaseData()
          this.getStudentFirebaseData()
          this.getAllCoursesFirebaseData()
        } else {
          this.isMember = false
          this.getAllCoursesFirebaseData()
          console.log('已登出')
        }
      });
     },
     // 判斷完是否登入後，讀取用戶老師端學生端資料(開課頁面用)
    async onAuthStateChangedForCreateCourse() {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          this.isMember = false
          router.push('/UserLogin')
          console.log('已登出') 
        } else {
          this.user = user;
          this.isMember = true
          this.getTeacherFirebaseData()
          this.getStudentFirebaseData()
          this.getAllCoursesFirebaseData()
        }
      });
    },

    
    
    








    // 我的課程頁面用(收藏)先練習存在本地端
    getBookmarkIds () {
      this.bookmarkIds = JSON.parse(localStorage.getItem('bookmarkIds')) || []
    },
    getBookmarkCoursesData () {
      this.getBookmarkIds ()
      this.userBookmarkCourses = []
      this.AllCoursesFirebaseData.forEach((item) => {
        if (this.bookmarkIds.indexOf(item.id) > -1) {
          this.userBookmarkCourses.push(item)
        }
      })
      this.bookmarkNum = this.userBookmarkCourses.length
      console.log('用戶收藏課程資料', this.userBookmarkCourses)
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
          errorMessages.push('需上傳 JPG 或 PNG 檔!')
        }

        const isValidFileSize = fileObject.size / 1024 / 1024 < 0.5
        if (!isValidFileSize) {
          errorMessages.push('圖片大小需小於0.5MB!')
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
            // 編輯個人大頭照用，寫這邊可以綁定課程換大頭照也會一起換避免不一致
            this.teacherData.teacherImg = e.target.result
            this.UpdateTeacherImg()
            
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
        return this.bookmarkIds.indexOf(id) > -1 ? 'bi bi bi-bookmark-fill text-teal bookmark-on' : 'bi bi-bookmark-plus text-teal bookmark-off'
      }
    }
  }
})