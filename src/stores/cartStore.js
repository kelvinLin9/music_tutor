import { defineStore } from 'pinia'
import dataStore from './dataStore';
import { doc, setDoc, updateDoc, getFirestore , arrayUnion, arrayRemove} from "firebase/firestore"; 
import router from '../router'

const db = getFirestore()
const data = dataStore()

export default defineStore('cartStore', {
  state: () => ({
    cartPageState: 'cart',
    couponCode:'',
    couponValue:1,
    cartCheckboxWrap: [],
    payWrap:{
      payData:[],
      total:0,
      finalTotal:0,
      couponUse:''
    }

  }),
  actions: {
    async addCart(uid, id) {
      // 加入時間戳，方便區分同商品
      const wrap = { timestamp : new Date().getTime(),
                     courseId : id}
      console.log(wrap)
      const cart = doc(db, uid, 'student');
      await updateDoc(cart, {
        myCart: arrayUnion(wrap)
      });
      alert('成功加入購物車')
      data.onAuthStateChanged()
    },
    async deleteCart(uid, dTimestamp , index){
      console.log(uid,dTimestamp, index)
      // 刪除購物車資料前，要順便刪除佔存陣列的內容，才不會渲染出問題
      const num = this.cartCheckboxWrap.findIndex((item) => {
        // console.log(item)
        // console.log(index)
        return item === index
      })
      console.log(num)
      this.cartCheckboxWrap.splice(num, 1)

      // // 透過timestamp找出要刪的檔
      // const course = data.studentData.myCart.filter((item) => {
      //   return item.timestamp === dTimestamp
      // })
      // console.log('要刪的檔', course[0])
      // const cart = doc(db, uid, 'student');
      // await updateDoc(cart, {
      //   myCart: arrayRemove(course[0])
      // });
      // alert('成功刪除購物車項目')
      // alert(this.cartTotal())
      // data.onAuthStateChanged()
    },

    addToPayWrap() {
      if (this.cartCheckboxWrap.length === 0) {
        alert('請選擇結帳項目')
      } else {
        this.cartPageState = 'pay'
        let total = 0
        this.cartCheckboxWrap.forEach((item) => {
          total += parseInt(data.userCartCourses[item][0].data.price)
          let wrap = {
            courseId:'',
            courseName:'',
            price:'',
          }
          wrap.courseId = data.userCartCourses[item][0].id
          wrap.courseName = data.userCartCourses[item][0].data.courseName
          wrap.price = data.userCartCourses[item][0].data.price
  
          this.payWrap.payData.push(wrap)
        })
        this.payWrap.total = total
        this.payWrap.finalTotal = total * this.couponValue
      }
    },
    addCouponCode () {
      for (let i in data.couponData){
        console.log(i)
        console.log(data.couponData[i])
        if (this.couponCode === i) {
          alert('成功加入折扣碼')
          this.couponValue = data.couponData[i]
          this.payWrap.couponUse = i
          return
        }
      }
      alert('折扣碼不存在')
    },

    async confirmToPay() {
      alert('go')
      // 1. 新增歷史付款資訊(買的人)
      const wrap = { 
        timestamp : new Date().getTime(),
        payData: this.payWrap,
      }
      const cart = doc(db, data.user.uid, 'student');

      await updateDoc(cart, {
        payHistory: arrayUnion(wrap)
      })


      // 2. 新增到學生課程的部分(買的人)
      alert(this.payWrap.payData.length)
      for (let i = 0; i < this.payWrap.payData.length; i++) {
        console.log('2', this.payWrap.payData[i].courseId)
        let wrap2 = { 
        timestamp : new Date().getTime(),
        courseId: this.payWrap.payData[i].courseId,
        }
        // console.log(wrap2)
        await updateDoc(cart, {
          userCourses: arrayUnion(wrap2)
        })
      }


      // 3. 新增到學生課程的部分(賣的人)
      for (let i = 0; i < this.payWrap.payData.length; i++) {
        console.log('3', this.payWrap.payData[i].courseId)
        const cart3 = doc(db, "MusicTutorCourses", this.payWrap.payData[i].courseId);
        let wrap3 = { 
          timestamp : new Date().getTime(),
          uid : data.user.uid ,
          }
        await updateDoc(cart3, {
          whoBuy: arrayUnion(wrap3)
        })
      }
      // 4. 從購物車移除的部分



      alert('開始刪除購物車項目')
      const cart4 = doc(db, data.user.uid, 'student')
      for (let i = 0; i < this.cartCheckboxWrap.length; i++) {
        await updateDoc(cart4, {
          myCart: arrayRemove(data.studentData.myCart[this.cartCheckboxWrap[i]])
        })
      }
      alert('成功刪除購物車項目')
      
      // 5. 結帳完記得清空所有暫存資料
      this.cartPageState =  'cart',
      this.couponCode = '',
      this.couponValue = 1,
      this.cartCheckboxWrap =  [],
      this.payWrap = {
        payData:[],
        total:0,
        finalTotal:0,
        couponUse:''
      }
      alert('成功完成付款')
      data.onAuthStateChanged()
    },



    // async buyNow() {
    //   console.log(this.buyNowData.id, this.buyNowData.uid)
    //   // 買的人的學生端課程+1
    //   const wrap = { timestamp : new Date().getTime(),
    //     courseId : this.buyNowData.id }
    //   const cart = doc(db, this.buyNowData.uid, 'student');
    //   await updateDoc(cart, {
    //     userCourses: arrayUnion(wrap)
    //   });
    //   // 該課程購買人數+1
    //   const wrap2 = { timestamp : new Date().getTime(),
    //     uid : this.buyNowData.id }
    //   const cart2 = doc(db, "MusicTutorCourses", this.buyNowData.id);
    //   await updateDoc(cart2, {
    //     whoBuy: arrayUnion(wrap2)
    //   });
    //   alert('成功購買課程')
    //   //該課程購買名單添加
    //   this.buyNowData.id = ''
    //   this.buyNowData.uid = ''
      
    //   data.onAuthStateChanged()
    //   router.push('/')
    // }
  },
  getters: {
    cartTotal () {
      // console.log(data.userCartCourses)
      return () => {
        let total = 0
        this.cartCheckboxWrap.forEach((item) => {
          total += parseInt(data.userCartCourses[item][0].data.price)
        })
        console.log(total)
        return total
      }
    },
  }
})