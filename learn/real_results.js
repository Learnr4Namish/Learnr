    var firstQuestionMarks = Number(document.URL.substring(document.URL.indexOf('&') + 59, document.URL.indexOf('&') + 59 + 1));
    var secondQuestionMarks = Number(document.URL.substring(document.URL.indexOf('&') + 121, document.URL.indexOf('&') + 121 + 1));
    if (isNaN(secondQuestionMarks)) secondQuestionMarks = 0;
    var thirdQuestionMarks = Number(document.URL.substring(document.URL.indexOf('&') + 181, document.URL.indexOf('&') + 181 + 1));
    if (isNaN(thirdQuestionMarks)) thirdQuestionMarks = 0;
    var fourthQuestionMarks = Number(document.URL.substring(document.URL.indexOf('&') + 243, document.URL.indexOf('&') + 243 + 1));
    if (isNaN(fourthQuestionMarks)) fourthQuestionMarks = 0;
    var fifthQuestionMarks = Number(document.URL.substring(document.URL.indexOf('&') + 303, document.URL.indexOf('&') + 303 + 1));
    if (isNaN(fifthQuestionMarks)) fifthQuestionMarks = 0;
console.log(thirdQuestionMarks);
    var totalMarksGot = firstQuestionMarks + secondQuestionMarks + thirdQuestionMarks + fourthQuestionMarks + fifthQuestionMarks;
document.getElementById('marksText').innerHTML = totalMarksGot;
document.getElementById('marksDefine').style.fontWeight = "bold";
document.getElementById('marksDefine').innerHTML = "Marks Got:- ".bold() + totalMarksGot;
if (totalMarksGot === 0) {
    document.getElementById('marksText').style.color = "red";
    document.getElementById('marksText').style.borderColor = "red";
    document.getElementById('marksDefine').style.color = "red";
    document.getElementById('feedbackText').style.color = "red";
    document.getElementById('feedbackText').innerHTML = "You didn't work hard enough! No problem. A hard word could improve your marks a lot!".bold();
}else{
    if (totalMarksGot === 2) {
        document.getElementById('marksText').style.color = "red";
        document.getElementById('marksText').style.borderColor = "red";
    document.getElementById('marksDefine').style.color = "red";
        document.getElementById('feedbackText').style.color = "red";
        document.getElementById('feedbackText').innerHTML = "You didn't work hard enough! No problem. A hard word could improve your marks a lot!".bold();
    }else{
        if (totalMarksGot === 4) {
            document.getElementById('marksText').style.color = "#8B8000";
            document.getElementById('marksText').style.borderColor = "#8B8000";
    document.getElementById('marksDefine').style.color = "#8B8000";
            document.getElementById('feedbackText').style.color = "#8B8000";
            document.getElementById('feedbackText').innerHTML = "There is a litle gap in your learning! Work a little hard and one day you could be like one of the big scientists!".bold();
        }else{
            if (totalMarksGot === 6) {
                document.getElementById('marksText').style.color = "#8B8000";
            document.getElementById('marksText').style.borderColor = "#8B8000";
    document.getElementById('marksDefine').style.color = "#8B8000";
            document.getElementById('feedbackText').style.color = "#8B8000";
            document.getElementById('feedbackText').innerHTML = "There is a litle gap in your learning! Work a little hard and one day you could be like one of the big scientists!".bold();
            }else{
                if (totalMarksGot === 8) {
                    document.getElementById('marksText').style.color = "blue";
                document.getElementById('marksText').style.borderColor = "blue";
        document.getElementById('marksDefine').style.color = "blue";
                document.getElementById('feedbackText').style.color = "blue";
                document.getElementById('feedbackText').innerHTML = "There is a litle gap in your learning! Work a little hard and one day you could be like one of the big scientists!".bold();
                }else{
                    if (totalMarksGot === 10) {
                        document.getElementById('marksText').style.color = "green";
                    document.getElementById('marksText').style.borderColor = "green";
            document.getElementById('marksDefine').style.color = "green";
                    document.getElementById('feedbackText').style.color = "green";
                    document.getElementById('feedbackText').innerHTML = "Excellent!".bold();
                    }else{
        
                     }
                 }
             }
        }
    } 
}
