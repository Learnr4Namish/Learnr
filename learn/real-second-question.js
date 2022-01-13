var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
modal.style.display = "block";
document.getElementById("explanation").style.visibility = "hidden";

document.getElementById("moreAns").style.visibility = "hidden";
function firstAns() {
var answerCheck = "firstCheck";
document.getElementById("checkAns").style.opacity = 1;
document.getElementById("firstCheck").style.backgroundColor = "#000000";
document.getElementById("firstCheck").style.color = "#FFFFFF";
document.getElementById("secondCheck").style.backgroundColor = "#FFFFFF";
document.getElementById("secondCheck").style.color = "#000000";
document.getElementById("checkAns").onclick = function() {
    document.getElementById("firstCheck").style.backgroundColor = "#FF0000";
document.getElementById("firstCheck").style.color = "#FFFFFF";
document.getElementById("firstCheck").innerHTML = document.getElementById("firstCheck").textContent + " (Wrong Answer!)";
}
}
function secAns() {
var answerCheck = "secondCheck";
document.getElementById("firstCheck").innerHTML = "True";
document.getElementById("checkAns").style.opacity = 1;
document.getElementById("secondCheck").style.backgroundColor = "#000000";
document.getElementById("secondCheck").style.color = "#FFFFFF";
document.getElementById("firstCheck").style.backgroundColor = "#FFFFFF";
document.getElementById("firstCheck").style.color = "#000000";
document.getElementById("checkAns").onclick = function() {
    document.getElementById("secondCheck").style.backgroundColor = "#00FF00";
document.getElementById("secondCheck").style.color = "#000000";
document.getElementById("checkAns").style.opacity = 0;
setTimeout(function(){ 
    document.getElementById("checkAns").style.opacity = 2;
    document.getElementById("checkAns").innerHTML = "Next".bold();
  },500);
  document.getElementById("secondCheck").innerHTML = document.getElementById("secondCheck").textContent + " (Correct Answer!)";
  document.getElementById("explanation").style.visibility = "visible";
  document.getElementById("checkAns").onclick = function() {
      const address = document.URL;
      const uid = address.substring(address.indexOf("?uid=") + 1);
      learnr.alert("You have done a good job " + uid + " so far! Keep learning with this pace to achieve success! Now it's the time to learn about Natural Numbers and again solve some problems as usual.");
      location.href = "natural-numbers.html";
  }
}
}
const address = document.URL;
const uid = address.substring(address.indexOf('=') + 1);
 if (document.URL.substring(document.URL.indexOf('=') + 1 === document.URL)) {
  var userName = "LEARNR_ANONYMOUS_USER_" + Math.floor(Math.random() * 100000000);
  location.href = "/learn/real_second_question.html?uid=" + userName; 
  }else{
      console.log("Success");
  }