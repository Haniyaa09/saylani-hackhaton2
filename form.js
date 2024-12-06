import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBIeQs8yJz81gkI91t35Teo-cRowD0Ne7I",
    authDomain: "login-signup-ce7df.firebaseapp.com",
    projectId: "login-signup-ce7df",
    storageBucket: "login-signup-ce7df.firebasestorage.app",
    messagingSenderId: "189133468088",
    appId: "1:189133468088:web:0cb1615bbf8cfb44fe1f4d",
    measurementId: "G-XZK4EQZ22W"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      phoneNumber: phoneNumber
    });

    alert("Account created and data stored successfully!");
    console.log("User created and data saved:", user);
    window.location.href = "/index.html"; 
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error [${errorCode}]: ${errorMessage}`);
    alert(errorMessage);
  }
});

const submitSignin = document.getElementById('sinInBtn');
submitSignin.addEventListener("click", async function (event) {
  event.preventDefault();

  const loginEmail = document.getElementById('LoginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    const user = userCredential.user;

    alert("Signed in successfully!");
    console.log("User signed in:", user);
    window.location.href = "/index.html"; // Redirect to home page after successful sign-in
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error [${errorCode}]: ${errorMessage}`);
    alert(errorMessage);
  }
});