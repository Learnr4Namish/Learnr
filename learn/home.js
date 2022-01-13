const address = document.URL;
      const urlTodo = "/learn/concept.real-numbers.html";
const prefixText = "?uid=";
const uidStr = address.substring(address.indexOf("&") + 1);
const uid = uidStr.substring(uidStr.indexOf("=") + 1);
const uidInput = uid.bold();
const morning = "Good Morning ";
const morningBold = morning.bold();
const afternoon = "Good Afternoon ";
const afternoonBold = afternoon.bold();
const evening = "Good Evening ";
const eveningBold = evening.bold();
const formUid = "?uid=" + uid;
if (uid === document.URL) {
  var userName = "LEARNR_ANONYMOUS_USER_" + Math.floor(Math.random() * 100000000);
    location.href = "/learn/index.html?uid=" + userName;
}else{
  if (uid === "true") {
    location.href = "/learn/index.html?uid=" + userName;
  }else{
    console.log("Success");
  }
}
var today = new Date()
var curHr = today.getHours()
if (curHr < 12) {
    document.getElementById("uidText").innerHTML = morningBold + uidInput;
} else if (curHr < 18) {
    document.getElementById("uidText").innerHTML = afternoonBold + uidInput;
} else {
    document.getElementById("uidText").innerHTML = eveningBold + uidInput;
}
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("contentZone").style.border = "none";