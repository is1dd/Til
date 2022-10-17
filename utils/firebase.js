// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import * as firebase from 'firebase';
// import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIXOczOSNGv6iQg7M_dNYC9SdG7OKHVpc",
  authDomain: "learningnextjs-c6799.firebaseapp.com",
  projectId: "learningnextjs-c6799",
  storageBucket: "learningnextjs-c6799.appspot.com",
  messagingSenderId: "116777246992",
  appId: "1:116777246992:web:6db6b28172473e524c0595"
};
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//     firebase.initializeApp({});
// }
// if (!firebase.apps.length) {
//    firebase.initializeApp({});
// }else {
//    firebase.app(); // if already initialized, use that one
// }
export const auth = getAuth();
export const db = getFirestore(app);
