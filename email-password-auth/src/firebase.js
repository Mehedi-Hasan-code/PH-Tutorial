import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbvVRWDNUTCVpKPlOy31mIQaNkMnAahh0",
  authDomain: "email-password-auth-7354f.firebaseapp.com",
  projectId: "email-password-auth-7354f",
  storageBucket: "email-password-auth-7354f.firebasestorage.app",
  messagingSenderId: "774625963007",
  appId: "1:774625963007:web:68f0102bebe89e303955ca"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
