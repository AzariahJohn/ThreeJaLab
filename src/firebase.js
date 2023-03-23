import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrLiEy1_rCeEMKo6VfDHk8oQLS8ONHUNU",
  authDomain: "teachersmodule-ffd92.firebaseapp.com",
  projectId: "teachersmodule-ffd92",
  storageBucket: "teachersmodule-ffd92.appspot.com",
  messagingSenderId: "776564683026",
  appId: "1:776564683026:web:6cb072ffaf6d588264c3cb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);