// Import the functions you need from the SDKs you need 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

console.log("JS Loaded"); // To confirm JS file is loaded

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALBn01OCrkjHqrvSFK3d-fePXfmbKNw3o",
  authDomain: "mini-site-d6fb3.firebaseapp.com",
  projectId: "mini-site-d6fb3",
  storageBucket: "mini-site-d6fb3.appspot.com",
  messagingSenderId: "705699719845",
  appId: "1:705699719845:web:683b7a615ffd441bbe7b4c",
  measurementId: "G-VW8HMVH8T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



document.getElementById("loginform").addEventListener("submit", (event)=>{
     // Prevent the default form submission (which would refresh the page)
     event.preventDefault();
    
     // Get the input values
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     
     // Log the values or perform any action
     console.log("Email: ", email, "Password: ", password);
 
     // Firebase authentication - Create user with email and password
     createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed up 
         const user = userCredential.user;
         console.log("User signed up:", user);
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.error("Error:", errorCode, errorMessage);
       });

})
// function login(event) {
   
// }
