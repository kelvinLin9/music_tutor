import { defineStore } from 'pinia'
import dataStore from './dataStore';
import { doc, setDoc, updateDoc, getFirestore , arrayUnion, arrayRemove} from "firebase/firestore"; 

const db = getFirestore()
const data = dataStore()

export default defineStore('cartStore', {
  state: () => ({
    buyNowData:{
      uid:'',
      id:''
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
    async deleteCart(uid, dTimestamp){
      console.log(uid,dTimestamp);
      const course = data.studentData.myCart.filter((item) => {
        return item.timestamp === dTimestamp
      })
      // console.log('要刪的檔', course[0])
      const cart = doc(db, uid, 'student');
      await updateDoc(cart, {
        myCart: arrayRemove(course[0])
      });
      alert('成功刪除購物車項目')
      data.onAuthStateChanged()
    },
    async buyNow() {
      console.log(this.buyNowData.id, this.buyNowData.uid)
      // 買的人的學生端課程+1
      const wrap = { timestamp : new Date().getTime(),
        courseId : this.buyNowData.id }
      const cart = doc(db, this.buyNowData.uid, 'student');
      await updateDoc(cart, {
        userCourses: arrayUnion(wrap)
      });
      // 該課程購買人數+1
      const wrap2 = { timestamp : new Date().getTime(),
        uid : this.buyNowData.id }
      const cart2 = doc(db, "MusicTutorCourses", this.buyNowData.id);
      await updateDoc(cart2, {
        whoBuy: arrayUnion(wrap2)
      });
      alert('成功購買課程')
      //該課程購買名單添加
      this.buyNowData.id = ''
      this.buyNowData.uid = ''
      
      data.onAuthStateChanged()

    }
  }
})