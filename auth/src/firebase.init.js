import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUdsItSTX78v5uMIGM9rr5LIkhVe6Ltsw",
  authDomain: "auth-integration-c510d.firebaseapp.com",
  projectId: "auth-integration-c510d",
  storageBucket: "auth-integration-c510d.firebasestorage.app",
  messagingSenderId: "825034832453",
  appId: "1:825034832453:web:8b779c9f7b33d62437412c"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)