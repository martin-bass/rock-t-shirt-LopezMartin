
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_apiKey}`,
  authDomain: "rock-t-shirt-store.firebaseapp.com",
  projectId: "rock-t-shirt-store",
  storageBucket: "rock-t-shirt-store.appspot.com",
  messagingSenderId: "615715780097",
  appId: `${process.env.REACT_APP_appId}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);