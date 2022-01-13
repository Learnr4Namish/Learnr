
// create Agora client
var client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

var localTracks = {
  videoTrack: null,
  audioTrack: null
};
var remoteUsers = {};
// Agora client options
var options = {
  appid: null,
  channel: null,
  uid: null,
  token: null
};

// the demo can auto join channel with params in url
$(() => {
  var urlParams = new URL(location.href).searchParams;
  options.appid = "2e2138e0192548f7b46cee891aaa68d";
  options.channel = urlParams.get("channel");
  options.token = urlParams.get("token");
  if (options.appid && options.channel) {
    $("#join-form").submit();
  }else{
    if (options.token === null) {
      alert("Sorry! We couldn't get your token key for this meeting!");
      location.href = "/learn/meet.html"
    }else{
      if (options.channel === null) {
        alert("Oops! Couldn't get your channel name!");
        location.href = "/learn/meet.html"
      }else{
        if (options.channel === null && options.token === null) {
          alert("Neither have you entered your channel name nor have you entered your token key!");
        location.href = "/learn/meet.html"
        }
      }
    }
  }
})

$("#join-form").submit(async function (e) {
  e.preventDefault();
  $("#join").attr("disabled", true);
  try {
    await join();
  } catch (error) {
    console.error(error);
  } finally {
    $("#leave").attr("disabled", false);
  }
})

$("#leave").click(function (e) {
  leave();
  alert("Successfully left this meeting room!")
  location.href = "/learn/meet.html"
})

async function join() {

  // add event listener to play remote tracks when remote user publishs.
  client.on("user-published", handleUserPublished);
  client.on("user-unpublished", handleUserUnpublished);

  // join a channel and create local tracks, we can use Promise.all to run them concurrently
  [ options.uid, localTracks.audioTrack, localTracks.videoTrack ] = await Promise.all([
    // join the channel
    client.join(options.appid, options.channel, options.token || null),
    // create local tracks, using microphone and camera
    AgoraRTC.createMicrophoneAudioTrack(),
    AgoraRTC.createCameraVideoTrack()
  ]);
  
  // play local video track
  localTracks.videoTrack.play("local-player");
  $("#local-player-name").text(`localVideo(${options.uid})`);

  // publish local tracks to channel
  await client.publish(Object.values(localTracks));
  console.log("publish success");
}

async function leave() {
  for (trackName in localTracks) {
    var track = localTracks[trackName];
    if(track) {
      track.stop();
      track.close();
      localTracks[trackName] = undefined;
    }
  }

  // remove remote users and player views
  remoteUsers = {};
  $("#remote-playerlist").html("");

  // leave the channel
  await client.leave();

  $("#local-player-name").text("");
  $("#leave").attr("disabled", true);
  console.log("client leaves channel success");
}

async function subscribe(user, mediaType) {
  const uid = user.uid;
  // subscribe to a remote user
  await client.subscribe(user, mediaType);
  console.log("subscribe success");
  if (mediaType === 'video') {
    const player = $(`
      <div id="player-wrapper-${uid}">
        <p class="player-name">Participant (${uid})</p>
        <div id="player-${uid}" class="player"></div>
      </div>
    `);
    $("#remote-playerlist").append(player);
    user.videoTrack.play(`player-${uid}`);
    const listerHelp = $(`
  <li style="list-style: none; color: black; font-weight: 500; transform: translateY(-30px); font-size: 25px">remoteUser ${options.uid}</li>
  `);
    $(modal).append(listerHelp);
  }
  if (mediaType === 'audio') {
    user.audioTrack.play(); 
  }
}

function handleUserPublished(user, mediaType) {
  const id = user.uid;
  remoteUsers[id] = user;
  subscribe(user, mediaType);
}

function handleUserUnpublished(user) {
  const id = user.uid;
  delete remoteUsers[id];
  $(`#player-wrapper-${id}`).remove();
}
enableUiControls();

// Action buttons
function enableUiControls() {
    $("#mic-btn").click(function () {
        toggleMic();
    });
    $("#video-btn").click(function () {
        toggleVideo();
    });
}

// Toggle Mic
function toggleMic() {
    if ($("#mic-icon").hasClass('fa-microphone')) {
        localTracks.audioTrack.setEnabled(false);
        console.log("Audio Muted.");
    } else {
        localTracks.audioTrack.setEnabled(true);
        console.log("Audio Unmuted.");
    }
    $("#mic-icon").toggleClass('fa-microphone').toggleClass('fa-microphone-slash');
}

// Toggle Video
function toggleVideo() {
    if ($("#video-icon").hasClass('fa-video')) {
        localTracks.videoTrack.setEnabled(false);
        console.log("Video Muted.");
    } else {
        localTracks.videoTrack.setEnabled(true);
        console.log("Video Unmuted.");
    }
    $("#video-icon").toggleClass('fa-video').toggleClass('fa-video-slash');
}
/**$("#screen-btn").click(function (e) {
  shareScreen();
})
function shareScreen() {
  AgoraRTC.createScreenVideoTrack({
    // Set the encoder configurations. For details, see the API description.
    encoderConfig: "1080p_1",
    // Set the video transmission optimization mode as prioritizing video quality.
    optimizationMode: "detail"
}).then(localScreenTrack => {
  startScreenCall();
  startVideoCall();
});
}
async function startScreenCall() {
  var urlParams = new URL(location.href).searchParams;
  const screenClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  await screenClient.join("2e2138e0192548f7b46cee891aaa68d", urlParams.get("channel"), urlParams.get("token"));

  const screenTrack = await AgoraRTC.createScreenVideoTrack();
  await screenClient.publish(screenTrack);

  return screenClient;
}

async function startVideoCall() {
  var urlParams = new URL(location.href).searchParams;
  const videoClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  await videoClient.join("2e2138e0192548f7b46cee891aaa68d", urlParams.get("channel"), urlParams.get("token"));

  const videoTrack = await AgoraRTC.createCameraVideoTrack();
  await videoClient.publish(videoTrack);

  return videoClient;
}

Promise.all([startScreenCall(), startVideoCall()]).then(() => { 
  alert("Screen sharing started successfully!");
}); **/
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("screen-btn");

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