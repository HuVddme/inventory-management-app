import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyBw_nDrjUGqHtYKvslifClHGFm60RkjLqo",
 authDomain: "inventory-management-app-39235.firebaseapp.com",
 projectId: "inventory-management-app-39235",
 storageBucket: "inventory-management-app-39235.appspot.com",
 messagingSenderId: "1077395729605",
 appId: "1:1077395729605:web:a8ee019a8b37fe9b7694ac"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };