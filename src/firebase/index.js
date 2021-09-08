
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0U2FpeYJBgdalra8-u_pws-6Q_2Owob0",
  authDomain: "reactstore-595ae.firebaseapp.com",
  projectId: "reactstore-595ae",
  storageBucket: "reactstore-595ae.appspot.com",
  messagingSenderId: "261443032954",
  appId: "1:261443032954:web:a58c9281145a6421b668c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app);