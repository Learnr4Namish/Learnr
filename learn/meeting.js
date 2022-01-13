function createNewMeeting() {
    var name = document.getElementById('name').value;
    if (name === "") {
        alert("Your name is required to create a new Learnr Meeting and can't be empty!")
    }else{
        var meetingName = name + "'s Learnr Meeting room";
        var uid = name;
        var appid = "2e2138e0192548f7b46cee891aaa68d"
        var channelName = Math.floor(Math.random() * 100000000);
        doOthers(meetingName, uid, appid, channelName);
    }
}
function doOthers(meetingName, uid, appid, channelName) {
    var options = {
        // Pass your app ID here.
        appId: appid,
        // Set the channel name.
        channel: channelName,
        // Set the user role in the channel.
        role: "host"
    };    
    const tokenRole = options.role;
    fetchToken(uid, channelName, tokenRole, meetingName, uid, appid);
} 
 function fetchToken(uid, channelName, tokenRole, meetingName, uid, appid) {
    return new Promise(function (resolve) {
        axios.post('http://127.0.0.1:8082/fetch_rtc_token', {
            uid: uid,
            channelName: channelName,
            role: tokenRole
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then(function (response) {
                const token = response.data.token;
                alert(token);
                resolve(token);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
 }