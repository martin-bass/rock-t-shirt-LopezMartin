
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUAFPOJ2nEKjKw19X-jIzLZtmtesdXdgg",
  authDomain: "rock-t-shirt-store.firebaseapp.com",
  projectId: "rock-t-shirt-store",
  storageBucket: "rock-t-shirt-store.appspot.com",
  messagingSenderId: "615715780097",
  appId: "1:615715780097:web:c95ce916e578d805c6b200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);