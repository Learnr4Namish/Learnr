function doLight() {
    document.body.style.backgroundColor = '#FFFFFF'; 
    document.body.style.transition = '0.3s'; 
    document.body.style.color = '#000000'; 
    document.getElementById('askrText').style.color = '#000000'; 
    document.getElementById('logoImg').src = '/learn/red_learnr.png';
    document.getElementById('startLrn').style.backgroundColor = '#000000';
    document.getElementById('startLrn').style.color = '#FFFFFF';
    document.getElementById('startLrn').onmouseenter = function() {
        console.log("Yes!")
    }
    document.getElementById('startLrn').onmouseleave = function() {
        console.log("Yes!")
    }
    document.getElementById('startConp').style.backgroundColor = '#000000';
    document.getElementById('startConp').style.color = '#FFFFFF';
    document.getElementById('startConp').onmouseenter = function() {
        console.log("Yes!")
    }
    document.getElementById('startConp').onmouseleave = function() {
        console.log("Yes!")
    }
    document.getElementById('contentArea').style.backgroundColor = "white";
    document.getElementById('parentZone').style.backgroundColor = "white";
    document.getElementById('mathAlert').style.color = "black";
    document.getElementById('realAlert').style.color = "black";
}