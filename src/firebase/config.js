import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDKk_6NzrU9-7sZTU2qF-0EjO3iKQ6Ociw",
  authDomain: "fir-f662a.firebaseapp.com",
  projectId: "fir-f662a",
  storageBucket: "fir-f662a.appspot.com",
  messagingSenderId: "618891159237",
  appId: "1:618891159237:web:354dee0d5982387cfe72ac",
  measurementId: "G-2K1KQMKM3N"
};

 export default firebase.initializeApp(firebaseConfig)