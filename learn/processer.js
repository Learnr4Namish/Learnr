import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
          import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
          import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
          import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-storage.js";
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
  var options = {
    userName: null,
    email: null,
    password: null
  };
  //if (options.userName && options.email && options.password) {
      $("#nameText").val(options.userName);
      $("#emailText").val(options.email);
      $("#passText").val(options.password);
    //}
    $("#joiner").submit(async function (e) {
  e.preventDefault();
  var selectElement = document.querySelector('#country');
    var output = selectElement.value;
    if (output === "Main") {
      alert("Please select a country from the available list of countries!");
    }else{
      if ($("#passText").val() === $("#repassText").val()){
        const auth = getAuth();
    createUserWithEmailAndPassword(auth, $("#emailText").val(), $("#passText").val())
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uid = user.uid;
        var today = new Date();
    var dd = String(today.getDate()).padStart(2, '1');
    var mm = String(today.getMonth() + 1).padStart(2, '1'); //January is 0!
    var yyyy = today.getFullYear();
    var today = mm + '/' + dd + '/' + yyyy;
    const storage = getStorage();
    const storageRef = ref(storage);// Points to 'images'
const imagesRef = ref(storageRef, uid);
// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const file = "profile.png";
const fileName = "profile.png";
const spaceRef = ref(imagesRef, fileName);
// File path is 'images/space.jpg'
const path = spaceRef.fullPath;
console.log(path);
// File name is 'space.jpg'
const name = spaceRef.name;
console.log(name);
const metadata = {
  contentType: 'image/png',
};

// Upload the file and metadata
const uploadTask = uploadBytesResumable(storageRef, file, metadata);
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
   console.log(error);
   alert(error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
       const db = getFirestore();
       setDoc(doc(db, "users", uid), {
        name: $("#nameText").val(),
        email: $("#emailText").val(),
      password: $("#passText").val(),
      lastLogin: today,
      profileSource: downloadURL,
      uid: uid
      });

        alert("Account Creation successful!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
      }else{
        alert("The passwords do not match!")
      }
    }
})