import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcXNwU5dziz1Xwp1TmUk18rkqG3tANlRc",
  authDomain: "movie-search-7137e.firebaseapp.com",
  projectId: "movie-search-7137e",
  storageBucket: "movie-search-7137e.appspot.com",
  messagingSenderId: "755371840695",
  appId: "1:755371840695:web:fc6bd3260dd619c8036932",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
