import { createApp } from 'vue'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_3Osjr-jKesKW-Isu-0VnSo5oke2_d7E",
  authDomain: "frontend-project-8e399.firebaseapp.com",
  projectId: "frontend-project-8e399",
  storageBucket: "frontend-project-8e399.appspot.com",
  messagingSenderId: "739879102191",
  appId: "1:739879102191:web:86a1da8d31f734a02a5d1a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).mount('#app')
