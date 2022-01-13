import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCK0g-Xs1AtA_uScAzt10a3tumpkAW22Vw",
    authDomain: "askr-app.firebaseapp.com",
    databaseURL: "https://askr-app-default-rtdb.firebaseio.com",
    projectId: "askr-app",
    storageBucket: "askr-app.appspot.com",
    messagingSenderId: "798070255065",
    appId: "1:798070255065:web:0a50b007963704e8453dc8",
    measurementId: "G-XVGXQQWSYY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const body = document.getElementById("body");
var address = document.URL;
var questionId = address.substring(address.indexOf("=") + 1);
console.log(address);
console.log(questionId);
var dashes = questionId.replace(/[+]/g,' ');
var question = dashes.replace(/\s\s+/g, ' ');
var questionText = document.getElementById("questionText");
var textAlready = questionText.textContent;
const textToCall = textAlready + " " + question;
questionText.innerHTML = textToCall.bold();
document.title = question + " : Askr Question";
console.log(textAlready);

