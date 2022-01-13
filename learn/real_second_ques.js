const address = document.URL;
const uid = address.substring(address.indexOf('=' + 1));
if (document.URL.substring(document.URL.indexOf('=') + 1) === document.URL) {
   alert("You have not attempted the previous question. Please attend the previous question first or you haven't entered a valid UID.")
   location.href = "/";
  }else{
      console.log("Success");
  }
  var fetcher = document.URL.substring(document.URL.indexOf('&') + 1);
  var fetcher1 = fetcher.substring(fetcher.indexOf('&') + 1);
  var fetcher2 = fetcher1.substring(fetcher1.indexOf('&') + 1);
  var totalMarksSoFar = fetcher2.substring(fetcher2.indexOf('=') + 1);
  var marksToDo = Number(totalMarksSoFar); 
  console.log(marksToDo);
  function firstAns() {
    var answerCheck = "firstCheck";
      document.getElementById("firstCheck").style.backgroundColor = "#000000";
      document.getElementById("firstCheck").style.color = "#FFFFFF";
      document.getElementById("secondCheck").style.backgroundColor = "#FFFFFF";
      document.getElementById("secondCheck").style.color = "#000000";
    document.getElementById('nextAns').onclick = function() {
const address = document.URL;
const uid = address.substring(address.indexOf('=') + 1);
const egg = 0;
const good = 1;
const sufix = "&secondattempted=true";
const sufix1 = "&secondanswer=wrong";
const marksAwarded = "&marksawarededfor2=0";
const totalmarks = marksToDo + egg;
location.href = "/learn/real_third_ques.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded; //+ /**"&marksgotsofar=" + totalmarks**/ 
    }
  }
  function secAns() {
    var answerCheck = "secondCheck";
      document.getElementById("secondCheck").style.backgroundColor = "#000000";
      document.getElementById("secondCheck").style.color = "#FFFFFF";
      document.getElementById("firstCheck").style.backgroundColor = "#FFFFFF";
      document.getElementById("firstCheck").style.color = "#000000";
    document.getElementById('nextAns').onclick = function() {
        const address = document.URL;
        const uid = address.substring(address.indexOf('=') + 1);
        const egg = 0;
        const good = 1;
        const sufix = "&secondattempted=true";
        const sufix1 = "&secondanswer=correct";
        const marksAwarded = "&marksawarededfor2=2";
        const totalmarks = marksToDo + good;
        location.href = "/learn/real_third_ques.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded;  //+ /**"&marksgotsofar=" + totalmarks**/ 
            }
  }
  document.getElementById("nextAns").onclick = function() {
      alert("Please choose any answer or you will not be allowed to proceed further!");
  }