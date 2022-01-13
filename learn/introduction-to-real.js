var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.getElementById("moreAns").style.visibility = "hidden";
document.getElementById("explanation").style.visibility = "hidden";
function firstAns() {
  var answerCheck = "firstCheck";
  document.getElementById("lastCheck").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("firstCheck").style.backgroundColor = "#000000";
    document.getElementById("firstCheck").style.color = "#FFFFFF";
    document.getElementById("secondCheck").style.backgroundColor = "#FFFFFF";
    document.getElementById("secondCheck").style.color = "#000000";
    document.getElementById("lastCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("lastCheck").style.color = "#000000";
  document.getElementById("thirdCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("thirdCheck").style.color = "#000000";
  document.getElementById('checkAns').onclick = function() {
    document.getElementById('firstCheck').style.backgroundColor = "#FF0000";
  document.getElementById('firstCheck').style.color = "#FFFFFF";
  }
}
function secAns() {
  var answerCheck = "secondCheck";
  document.getElementById("lastCheck").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("secondCheck").style.backgroundColor = "#000000";
    document.getElementById("secondCheck").style.color = "#FFFFFF";
    document.getElementById("firstCheck").style.backgroundColor = "#FFFFFF";
    document.getElementById("firstCheck").style.color = "#000000";
    document.getElementById("lastCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("lastCheck").style.color = "#000000";
  document.getElementById("thirdCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("thirdCheck").style.color = "#000000";
  document.getElementById('checkAns').onclick = function() {
    document.getElementById('secondCheck').style.backgroundColor = "#FF0000";
  document.getElementById('secondCheck').style.color = "#FFFFFF";
  }
}
function thiAns() {
  var answerCheck = "thirdCheck";
  document.getElementById("lastCheck").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  document.getElementById("secondCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("secondCheck").style.color = "#000000";
  document.getElementById("firstCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("firstCheck").style.color = "#000000";
  document.getElementById("lastCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("lastCheck").style.color = "#000000";
  document.getElementById("thirdCheck").style.backgroundColor = "#000000";
  document.getElementById("thirdCheck").style.color = "#FFFFFF";
  document.getElementById('checkAns').onclick = function() {
    document.getElementById('thirdCheck').style.backgroundColor = "#FF0000";
  document.getElementById('thirdCheck').style.color = "#FFFFFF";
  }
}
function foAns() {
  var answerCheck = "lastCheck";
  document.getElementById("lastCheck").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  document.getElementById("secondCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("secondCheck").style.color = "#000000";
  document.getElementById("firstCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("firstCheck").style.color = "#000000";
  document.getElementById("thirdCheck").style.backgroundColor = "#FFFFFF";
  document.getElementById("thirdCheck").style.color = "#000000";
  document.getElementById("lastCheck").style.backgroundColor = "#000000";
  document.getElementById("lastCheck").style.color = "#FFFFFF";
  document.getElementById('checkAns').onclick = function() {
    document.getElementById("lastCheck").style.backgroundColor = "#00FF00";
document.getElementById("lastCheck").style.color = "#000000";
document.getElementById("checkAns").style.opacity = 0;
setTimeout(function(){ 
  document.getElementById("checkAns").style.opacity = 2;
  document.getElementById("checkAns").innerHTML = "Next".bold();
},500);
document.getElementById("explanation").style.visibility = "visible";
document.getElementById("checkAns").onclick = function() {
  document.getElementById('firstCheck').remove();
document.getElementById('secondCheck').remove();
document.getElementById('thirdCheck').remove();
document.getElementById('lastCheck').remove();
document.getElementById('gpt').remove();
document.getElementById('mbr').remove();
  const address = document.URL;
  const uid = address.substring(address.indexOf("=") + 1);
  alert("Good Job " + uid + " on answering this question correctly. Now it's the time to answer another question.");
  location.href = "/learn/real-second-question.html" + "?uid=" + uid;
}
  }

}
const address = document.URL;
      const urlTodo = "/learn/concept.real-numbers.html";
const prefixText = "?uid=";
const uidStr = address.substring(address.indexOf("&") + 1);
const uid = uidStr.substring(uidStr.indexOf("=") + 1);
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