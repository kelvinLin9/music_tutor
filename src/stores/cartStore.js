import { defineStore } from 'pinia'
import dataStore from './dataStore';
import { doc, setDoc, updateDoc, getFirestore , arrayUnion, arrayRemove} from "firebase/firestore"; 

const db = getFirestore()
const data = dataStore()

export default defineStore('cartStore', {
  state: () => ({
    
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
      data.getStudentFirebaseData()
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


  }
})