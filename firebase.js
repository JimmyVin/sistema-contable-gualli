  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAH9ODbySPgO5mbTDrsY_Gla2wCQhkTZ3g",
    authDomain: "jru-producciones.firebaseapp.com",
    databaseURL: "https://jru-producciones-default-rtdb.firebaseio.com",
    projectId: "jru-producciones",
    storageBucket: "jru-producciones.appspot.com",
    messagingSenderId: "4585409465",
    appId: "1:4585409465:web:0aa66410b78b08466f8468"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);