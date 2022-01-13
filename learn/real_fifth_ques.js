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
    var answerCheck = "firthCheck";
      document.getElementById("secondCheck").style.backgroundColor = "white";
      document.getElementById("secondCheck").style.color = "black";
      document.getElementById("firstCheck").style.backgroundColor = "black";
      document.getElementById("firstCheck").style.color = "white";
    document.getElementById('nextAns').onclick = function() {
        const address = document.URL;
        const uid = address.substring(address.indexOf('=') + 1);
        const egg = 0;
        const good = 1;
        const sufix = "&fifthattempted=true";
        const sufix1 = "&fifthanswer=wrong";
        const marksAwarded = "&marksawarededfor5=0";
        const totalmarks = marksToDo + egg;
        location.href = "/learn/real_results.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded; //+ /**"&marksgotsofar=" + totalmarks**/ 
    }
  }
  function secAns() {
    var answerCheck = "secondCheck";
  document.getElementById("firstCheck").style.backgroundColor = "white";
  document.getElementById("firstCheck").style.color = "black";
  document.getElementById("secondCheck").style.backgroundColor = "black";
  document.getElementById("secondCheck").style.color = "white";
document.getElementById('nextAns').onclick = function() {
    const address = document.URL;
    const uid = address.substring(address.indexOf('=') + 1);
    const egg = 0;
    const good = 1;
    const sufix = "&fifthattempted=true";
    const sufix1 = "&fifthanswer=correct";
    const marksAwarded = "&marksawarededfor5=2";
    const totalmarks = marksToDo + good;
    location.href = "/learn/real_results.html" + "?uid=" + uid + sufix + sufix1 + marksAwarded;  //+ /**"&marksgotsofar=" + totalmarks**/ 
            }
  }
  document.getElementById("nextAns").onclick = function() {
      alert("Please choose any answer or you will not be allowed to proceed further!");
  }
  