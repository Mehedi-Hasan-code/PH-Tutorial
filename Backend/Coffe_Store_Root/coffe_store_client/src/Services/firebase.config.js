import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKJ-fbLZYhlpOKY067dTcYI_kHUpU3r6k",
  authDomain: "coffee-store-app-6b87d.firebaseapp.com",
  projectId: "coffee-store-app-6b87d",
  storageBucket: "coffee-store-app-6b87d.firebasestorage.app",
  messagingSenderId: "499207792279",
  appId: "1:499207792279:web:29d39ebaa32fbb179cabd2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
