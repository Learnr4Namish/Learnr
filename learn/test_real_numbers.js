const address = document.URL;
const uid = address.substring(address.indexOf('=') + 1);
function startTest() {
    const address = document.URL;
    const uid = address.substring(address.indexOf('=') + 1);
    location.href = "/learn/test.html" + "?uid=" + uid + "&" + "authtoken=" + Math.floor((Math.random() * 10000000000) + 1) + "&chapter=" + "real numbers" + "&type=test" + "&devicetype=client"; 
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