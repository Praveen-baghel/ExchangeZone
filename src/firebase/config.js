import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyClsBFbM3egdLhBX8FQ4M7w-y3STWpfy7E",
  authDomain: "exchangezone-af529.firebaseapp.com",
  projectId: "exchangezone-af529",
  storageBucket: "exchangezone-af529.appspot.com",
  messagingSenderId: "214002481499",
  appId: "1:214002481499:web:a01c0bbdef61c8b263427e"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export