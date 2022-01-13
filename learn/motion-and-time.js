const address = document.URL;
const uid = address.substring(address.indexOf("=") + 1);
const welcomeText = "Hello ";
const welcomeInput = welcomeText.bold();
const uidText = document.getElementById("uidText");
const uidInput = uid.bold();
uidText.innerHTML = welcomeInput + uidInput;
if (uid === document.URL) {
    alert("You are not allowed to access this page at this moment. Please generate a valid UID from the home page and continue.");
    location.href = "/index.html";
  }else{
    if (uid === "true") {
      alert("You are not allowed to access this page at this moment. Please generate a valid UID from the home page and continue.");
      location.href = "/index.html";
    }else{
      console.log("Success");
    }
  }