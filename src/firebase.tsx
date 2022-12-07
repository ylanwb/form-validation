import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN_8atonjOfBdFGfxoUF9dLse4_bmKs_Q",
  authDomain: "form-validation-55d53.firebaseapp.com",
  projectId: "form-validation-55d53",
  storageBucket: "form-validation-55d53.appspot.com",
  messagingSenderId: "98867017220",
  appId: "1:98867017220:web:2485bec27bfa832543e751",
  measurementId: "G-FQ0GR3Z4GY",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
