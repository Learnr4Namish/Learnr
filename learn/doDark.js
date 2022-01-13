function doDark() {
    document.body.style.backgroundColor = '#000000'; 
    document.body.style.transition = '0.3s'; 
    document.body.style.color = '#FFFFFF'; 
    document.getElementById('askrText').style.color = '#FFFFFF'; 
    document.getElementById('logoImg').src = '/learn/white_learnr.png'; 
    document.getElementById('startLrn').style.borderRadius = "80px";
    document.getElementById('startLrn').style.color = "red"
    document.getElementById('startLrn').style.backgroundColor = "#FFFFFF"
    document.getElementById('startLrn').style.transition = "0.3s";
    document.getElementById('startLrn').onmouseenter = function() {
        document.getElementById('startLrn').style.borderRadius = "80px";
        document.getElementById('startLrn').style.color = "#FFFFFF"
        document.getElementById('startLrn').style.backgroundColor = "red"
        document.getElementById('startLrn').style.transition = "0.3s";
    }
    document.getElementById('startLrn').onmouseleave = function() {
        document.getElementById('startLrn').style.borderRadius = "80px";
        document.getElementById('startLrn').style.color = "red"
        document.getElementById('startLrn').style.backgroundColor = "#FFFFFF"
        document.getElementById('startLrn').style.transition = "0.3s";
    }
    document.getElementById('contentArea').style.backgroundColor = "black";
    document.getElementById('parentZone').style.backgroundColor = "black";
    document.getElementById('mathAlert').style.color = "white";
    document.getElementById('realAlert').style.color = "white";
    document.getElementById('startConp').style.borderRadius = "80px";
    document.getElementById('startConp').style.color = "red"
    document.getElementById('startConp').style.backgroundColor = "#FFFFFF"
    document.getElementById('startConp').style.transition = "0.3s";
    document.getElementById('startConp').onmouseenter = function() {
        document.getElementById('startConp').style.borderRadius = "80px";
        document.getElementById('startConp').style.color = "#FFFFFF"
        document.getElementById('startConp').style.backgroundColor = "red"
        document.getElementById('startConp').style.transition = "0.3s";
    }
    document.getElementById('startConp').onmouseleave = function() {
        document.getElementById('startConp').style.borderRadius = "80px";
        document.getElementById('startConp').style.color = "red"
        document.getElementById('startConp').style.backgroundColor = "#FFFFFF"
        document.getElementById('startConp').style.transition = "0.3s";
    }
}