const dataToGet = document.URL.substring(document.URL.indexOf('?') + 1);
if (dataToGet === "message=Email+Successfully+Sent%21&isError=0") {
    alert("Your question has successfully been asked succesfully and it will get answered within 24 hours through your email!");
    location.href = "index.html"
    if (document.URL.substring(document.URL.indexOf('?') + 1) === "message=Email+Successfully+Sent%21&isError=0") {
        location.href = "/learn/index.html"
    }
}else{
    if (dataToGet === "message=Email%2Bcould%2Bnot%2Bbe%2Bsent.&isError=1&pm_err=subject%20is%20required.%20text%20is%20required."){
      alert("We were not able to send your question probably because you have not entered your question. Try again!");  
      location.href = "/learn/doubts.html#asker"
    }else{
        if (dataToGet === "message=Email%2Bcould%2Bnot%2Bbe%2Bsent.&isError=1&pm_err=subject%20is%20required."){
            alert("Oops, looks like you have left your email address empty! Please try again and enter a valid email address!");  
            location.href = "/learn/doubts.html#asker"
          }else{
            if (dataToGet === "error=unable%to%join%your%learnr%meeting"){
                alert("Oops! We were unable to join your learnr meeting! The token might have expired or the channel you have entered is invalid!");  
                location.href = "/"
              }else{
          
              }
          }
    }
}