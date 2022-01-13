var anonymous = true;
var userName = "LEARNR_ANONYMOUS_USER_" + Math.floor(Math.random() * 100000000);
function askNow(anonymous, userName) {
    location.href = "/learn/index.html?anonymous=" + anonymous + "&userid=" + userName; 
}