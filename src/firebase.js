import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyBbhh2OT92rXfTm_Ran5hKhYTiCSEJ-tmo",
  authDomain: "ggggggg-84521.firebaseapp.com",
  projectId: "ggggggg-84521",
  storageBucket: "ggggggg-84521.firebasestorage.app",
  messagingSenderId: "313000731272",
  appId: "1:313000731272:web:fded1333ba26ba5811b53d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
