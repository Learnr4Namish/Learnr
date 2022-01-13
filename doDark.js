function doDark() {
    document.body.style.backgroundColor = '#000000'; 
    document.body.style.transition = '0.3s'; 
    document.body.style.color = '#FFFFFF'; 
    document.getElementById('askrText').style.color = '#FFFFFF'; 
    document.getElementById('logoImg').src = 'white_learnr.png'; 
    document.getElementById('xyzButton').style.borderRadius = "80px";
    document.getElementById('xyzButton').style.color = "red"
    document.getElementById('xyzButton').style.backgroundColor = "#FFFFFF"
    document.getElementById('xyzButton').style.transition = "0.3s";
    document.getElementById('xyzButton').onmouseenter = function() {
        document.getElementById('xyzButton').style.borderRadius = "80px";
        document.getElementById('xyzButton').style.color = "#FFFFFF"
        document.getElementById('xyzButton').style.backgroundColor = "red"
        document.getElementById('xyzButton').style.transition = "0.3s";
    }
    document.getElementById('xyzButton').onmouseleave = function() {
        document.getElementById('xyzButton').style.borderRadius = "80px";
        document.getElementById('xyzButton').style.color = "red"
        document.getElementById('xyzButton').style.backgroundColor = "#FFFFFF"
        document.getElementById('xyzButton').style.transition = "0.3s";
    }
}