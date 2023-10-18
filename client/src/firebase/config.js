import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBg1chSVZLWKua6VYYULVucmiUOgVGVCLk",
  authDomain: "iris-f357c.firebaseapp.com",
  projectId: "iris-f357c",
  storageBucket: "iris-f357c.appspot.com",
  messagingSenderId: "401351329658",
  appId: "1:401351329658:web:f6d1e3a43c4990750078c3"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)