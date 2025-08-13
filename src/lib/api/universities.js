import { 
  collection, 
  doc, 
  getDocs, 
  getDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'
import { db } from '../firebase.js'

export const universitiesApi = {
  async getUniversities(filters, lastDoc) {
    try {
      let q = collection(db, 'universities')
      
      // Apply filters if provided
      if (filters) {
        const constraints = []
        if (filters.location) {
          constraints.push(where('location', '==', filters.location))
        }
        if (filters.program) {
          constraints.push(where('program_offered', 'array-contains', filters.program))
        }
        
        q = query(q, ...constraints, orderBy('name', 'asc'), limit(10))
      } else {
        q = query(q, orderBy('name', 'asc'), limit(10))
      }

      // Apply pagination if lastDoc is provided
      if (lastDoc) {
        q = query(q, startAfter(lastDoc))
      }

      const querySnapshot = await getDocs(q)
      const universities = []
      
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        // Map the data to match the University interface
        universities.push({ 
          id: doc.id,
          campus: data.campus || [],
          description: data.description || '',
          email: data.email || '',
          "faculty-student-ratio": data["faculty-student-ratio"] || '',
          image: data.image || '',
          imageCard: data.imageCard || data.image || '',
          imageDetail: data.imageDetail || data.image || '',
          location: data.location || '',
          name: data.name || '',
          phone: data.phone || '',
          program_detail: data.program_detail || [],
          program_offered: data.program_offered || [],
          ranking: data.ranking || '',
          scholarship: data.scholarship || [],
          type: data.type || '',
          website: data.website || '',
          eligibility: data.eligibility || '',
          fee_structure: data.fee_structure || ''
        })
      })

      return {
        universities,
        lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
      }
    } catch (error) {
      throw new Error(error.message)
    }
  },

  async getUniversityById(id) {
    if (!id) return null;
    
    try {
      console.log('Getting university by ID:', id)
      const docRef = doc(db, 'universities', id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        if (!data) {
          console.log('University document exists but has no data:', id)
          return null;
        }
        
        console.log('Found university:', { id: docSnap.id, name: data.name })
        return { 
          id: docSnap.id,
          campus: data.campus || [],
          description: data.description || '',
          email: data.email || '',
          "faculty-student-ratio": data["faculty-student-ratio"] || '',
          image: data.image || '',
          imageCard: data.imageCard || data.image || '',
          imageDetail: data.imageDetail || data.image || '',
          location: data.location || '',
          name: data.name || '',
          phone: data.phone || '',
          program_detail: data.program_detail || [],
          program_offered: data.program_offered || [],
          ranking: data.ranking || '',
          scholarship: data.scholarship || [],
          type: data.type || '',
          website: data.website || '',
          eligibility: data.eligibility || '',
          fee_structure: data.fee_structure || ''
        }
      }
      console.log('University not found with ID:', id)
      return null
    } catch (error) {
      console.error('Error getting university by ID:', error)
      return null
    }
  },
}
