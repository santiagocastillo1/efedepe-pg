import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBYiFu5_Lc5GnlwoJGFLexRtLpsZEdZAt0",
  authDomain: "efedepe-pg.firebaseapp.com",
  projectId: "efedepe-pg",
  storageBucket: "efedepe-pg.firebasestorage.app",
  messagingSenderId: "270616418320",
  appId: "1:270616418320:web:9bd90bde38efae1fb69295",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //db --> data base
