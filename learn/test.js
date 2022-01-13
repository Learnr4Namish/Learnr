const address = document.URL;
const uid = address.substring(address.indexOf('=') + 1 , address.indexOf('&') - 1);
const prefixed = "You will be attending a test on Real Numbers. Best of luck ";
const prefixedBold = prefixed.bold();
const uidTo = uid + "!".bold();
document.getElementById('luckText').innerHTML = prefixedBold + uidTo;
function startTest() {
    const address = document.URL;
    const uid = address.substring(address.indexOf('=') + 1 , address.indexOf('&') - 1);
    alert("Listen to this " + uid + " before attending this test! You are given 5 questions of 2 marks each. So be very careful while attending any test in Learnr!");
    location.href = "/learn/real_first_ques.html" + "?uid=" + uid;
}
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