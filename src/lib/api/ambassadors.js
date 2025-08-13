import { 
  collection, 
  doc, 
  getDocs, 
  getDoc,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from '../firebase.js'

export const ambassadorsApi = {
  async getAmbassadors() {
    try {
      const q = query(
        collection(db, 'ambassadors')
      )
      
      const querySnapshot = await getDocs(q)
      const ambassadors = []
      
      querySnapshot.forEach((doc) => {
        ambassadors.push({ id: doc.id, ...doc.data() })
      })

      return ambassadors
    } catch (error) {
      throw new Error(error.message)
    }
  },

  async getAmbassadorById(id) {
    try {
      const docRef = doc(db, 'ambassadors', id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      }
      return null
    } catch (error) {
      throw new Error(error.message)
    }
  },
}
