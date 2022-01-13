function doLight() {
    document.body.style.backgroundColor = '#FFFFFF'; 
    document.body.style.transition = '0.3s'; 
    document.body.style.color = '#000000'; 
    document.getElementById('askrText').style.color = '#000000'; 
    document.getElementById('logoImg').src = 'red_learnr.png';
    document.getElementById('xyzButton').style.backgroundColor = '#000000';
    document.getElementById('xyzButton').style.color = '#FFFFFF';
    document.getElementById('xyzButton').onmouseenter = function() {
        console.log("Yes!")
    }
    document.getElementById('xyzButton').onmouseleave = function() {
        console.log("Yes!")
    }
}