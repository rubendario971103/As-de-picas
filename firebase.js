
import {{ initializeApp }} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {{
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword
}} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {{
  getFirestore, doc, setDoc, getDoc, updateDoc
}} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDY39Obgrd-oFSo-BqrN4aUJRb-1qo74Lo",
  authDomain: "as-de-picas.firebaseapp.com",
  projectId: "as-de-picas",
  appId: "1:93083649862:web:cd8fcee8da01d0d1ac0747"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("Sesión iniciada");
    window.location.href = "index.html";
  } catch (e) {
    alert("Error al iniciar sesión: " + e.message);
  }
};

window.register = async function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {{
      email: email,
      points: 1000
    }});
    alert("Cuenta creada");
    window.location.href = "index.html";
  } catch (e) {
    alert("Error: " + e.message);
  }
};

window.updatePoints = async function () {
  const email = document.getElementById("adminEmail").value;
  const amount = parseInt(document.getElementById("points").value);
  try {
    const usersRef = await getDoc(doc(db, "users", email));
    if (usersRef.exists()) {{
      const data = usersRef.data();
      const newPoints = (data.points || 0) + amount;
      await updateDoc(doc(db, "users", email), {{
        points: newPoints
      }});
      document.getElementById("result").innerText = "Puntos actualizados: " + newPoints;
    }} else {{
      document.getElementById("result").innerText = "Usuario no encontrado";
    }}
  }} catch (e) {{
    document.getElementById("result").innerText = "Error: " + e.message;
  }}
};
