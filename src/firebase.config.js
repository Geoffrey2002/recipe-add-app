import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp9Tv5X3GlHUiJH_yl5eEp2xZOIoHIpbI",
  authDomain: "react-recipe-f9342.firebaseapp.com",
  projectId: "react-recipe-f9342",
  storageBucket: "react-recipe-f9342.appspot.com",
  messagingSenderId: "662562638843",
  appId: "1:662562638843:web:0c6f098db3c44de48bd95e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
