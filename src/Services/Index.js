// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0DpZw2Eam167wkd2LBAqa5Dj-Huww0Ts",
  authDomain: "estefaniadominguez-72689.firebaseapp.com",
  projectId: "estefaniadominguez-72689",
  storageBucket: "estefaniadominguez-72689.appspot.com",
  messagingSenderId: "972867348928",
  appId: "1:972867348928:web:ae5398710d87aac1848025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db