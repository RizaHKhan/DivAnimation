z = 0;
function startRotation() {
    blueBox = document.getElementById('rotatorDiv')

    blueBox.style.transform = "rotate(" + z + "deg)";
    if (z === 360) {
        z = 0;
    } else {
        z++;
    }
}

function startRMove(event) {
    setInterval(startRotation, 10);
    event.target.onclick="";
}


var v = 0;
var delta = 1;
function verticalMove() {
    redBox = document.getElementById('verticalDiv');
    v += delta;
    redBox.style.top = v + "px";
    if (v <= 0) delta = 1;
    if (v >= 700) delta = -1; 

}

function startVMove(event) {
    setInterval(verticalMove, 10);
    event.target.onclick="";
    
    
}
x = 1400;
y = 0;
velx = 0;
vely = 0;
thrust = 7;
angle = 0;

function startCMove() {
    orangeBox = document.getElementById('circleDiv');
    velx = Math.cos(angle * Math.PI / 180) * thrust;
    vely = Math.sin(angle * Math.PI / 180) * thrust;
    x += velx;
    y += vely;
    angle += 3;
    
    orangeBox.style.right = (x + velx) + "px";
    orangeBox.style.top = (y + vely) + "px";
    
    
}


function startCMOve(event) {
    setInterval(startCMove, 10);
    event.target.onclick="";
    
}

