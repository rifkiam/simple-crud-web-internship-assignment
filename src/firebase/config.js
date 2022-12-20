// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApLtGGaFPdyOnLHkBQhfDPIEmH5mtxLSk",
  authDomain: "vue-crud-assignment.firebaseapp.com",
  projectId: "vue-crud-assignment",
  storageBucket: "vue-crud-assignment.appspot.com",
  messagingSenderId: "361466243176",
  appId: "1:361466243176:web:2084628d8d7ebc142e73dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
//init firestore
export { db };