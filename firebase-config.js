import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDY39Obgrd-oFSo-BqrN4aUJRb-1qo74Lo",
  authDomain: "as-de-picas.firebaseapp.com",
  projectId: "as-de-picas",
  storageBucket: "as-de-picas.firebasestorage.app",
  messagingSenderId: "93083649862",
  appId: "1:93083649862:web:3f7ba6ebae452f1dac0747",
  measurementId: "G-NX5X0CDZ0D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
