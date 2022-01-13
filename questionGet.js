var address = document.URL;
var questionGet = address.substring(address.indexOf("=") + 1);
console.log(questionGet);
var dashes = questionGet.replace(/[+]/g,' ');
var question = dashes.replace(/\s\s+/g, ' ');
console.log(question);
document.title = dashes;