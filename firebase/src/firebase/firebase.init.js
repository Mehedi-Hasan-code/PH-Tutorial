
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBtePfoUMI7tXO1v0M15ETRKZBpTUtPQiE",
  authDomain: "fir-auth-db996.firebaseapp.com",
  projectId: "fir-auth-db996",
  storageBucket: "fir-auth-db996.firebasestorage.app",
  messagingSenderId: "189813170315",
  appId: "1:189813170315:web:249f3d8d2fc2787a7a748e",
  databaseURL: "https://fir-auth-db996-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
