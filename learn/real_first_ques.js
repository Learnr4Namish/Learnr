const address = document.URL;
const uid = address.substring(address.indexOf('=' + 1));
if (document.URL.substring(document.URL.indexOf('=') + 1) === address) {
      var userName = "LEARNR_ANONYMOUS_USER_" + Math.floor(Math.random() * 100000000);
    location.href = "/learn/real_first_ques.html?uid=" + userName; 
}else{
    
}
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
    document.getElementById('nextAns').onclick = function() {
const address = document.URL;
const uid = address.substring(address.indexOf('=') + 1);
const sufix = "&firstattempted=true";
const sufix1 = "&firstanswer=wrong";
const marksAwarded = "&marksawarededfor1=0";
location.href = "/learn/real_second_ques.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded;
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
    document.getElementById('nextAns').onclick = function() {
        const address = document.URL;
        const uid = address.substring(address.indexOf('=') + 1);
        const sufix = "&firstattempted=true";
        const sufix1 = "&firstanswer=wrong";
        const marksAwarded = "&marksawarededfor1=0";
        location.href = "/learn/real_second_ques.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded;
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
    document.getElementById('nextAns').onclick = function() {
        const address = document.URL;
        const uid = address.substring(address.indexOf('=') + 1);
        const sufix = "&firstattempted=true";
        const sufix1 = "&firstanswer=wrong";
        const marksAwarded = "&marksawarededfor1=0";
        location.href = "/learn/real_second_ques.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded;
            }
  }
  function foAns() {
    var answerCheck = "lastCheck";
    document.getElementById("lastCheck").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    document.getElementById("secondCheck").style.backgroundColor = "#FFFFFF";
    document.getElementById("secondCheck").style.color = "#000000";
    document.getElementById("firstCheck").style.backgroundColor = "#FFFFFF";
    document.getElementById("firstCheck").style.color = "#000000";
    document.getElementById("lastCheck").style.backgroundColor = "#000000";
    document.getElementById("lastCheck").style.color = "#FFFFFF";
    document.getElementById("thirdCheck").style.backgroundColor = "#FFFFFF";
    document.getElementById("thirdCheck").style.color = "#000000";
    document.getElementById('nextAns').onclick = function() {
        const address = document.URL;
        const uid = address.substring(address.indexOf('=') + 1);
        const sufix = "&firstattempted=true";
        const sufix1 = "&firstanswer=correct";
        const marksAwarded = "&marksawarededfor1=2";
        location.href = "/learn/real_second_ques.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded;
            }
  }
  document.getElementById("nextAns").onclick = function() {
    alert("Please choose any answer or you will not be allowed to proceed further!");
}

  