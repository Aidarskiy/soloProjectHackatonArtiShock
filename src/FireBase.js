import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIAp6Pw_-YOgpoGf3Nz242JnikrAQkIIo",
  authDomain: "jewerly-359b1.firebaseapp.com",
  databaseURL:
    "https://jewerly-359b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jewerly-359b1",
  storageBucket: "jewerly-359b1.appspot.com",
  messagingSenderId: "368668459598",
  appId: "1:368668459598:web:c30fc323e216e5e871391f",
  measurementId: "G-3S1JY3QPMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
