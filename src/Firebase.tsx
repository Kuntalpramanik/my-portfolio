import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB3hhYbB8fNLw4n6pw9Rs9h5by2EofOweU",
  authDomain: "portfolio-42d28.firebaseapp.com",
  projectId: "portfolio-42d28",
  storageBucket: "portfolio-42d28.firebasestorage.app",
  messagingSenderId: "640927252353",
  appId: "1:640927252353:web:c368c8d1374884af6fb280",
  measurementId: "G-SG7SF82WYK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
