var p;
var g;

function setup(){
    createCanvas(windowWidth,windowHeight, WEBGL);
    g = createGraphics(800,800);
    p = new Particle (mouseX,mouseY);
}
function draw(){
    g.background(32);
    p.draw(g);
    background(0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(g);
    box(800);
}
function mouseClicked(){
    p.addNewParticle();
}

function mouseDragged(){
    p.addNewParticle();
}

//Listener for DOM interaction
document.addEventListener('DOMContentLoaded', function(){
    var r = document.getElementById('colred');
    function changeRed(){
        let red = document.getElementById('colred').value;
        p.setRed(red);
    }

    var g = document.getElementById('colgreen');
    function changeGreen(){
        let green = document.getElementById('colgreen').value;
        p.setGreen(green);
    }

    var b = document.getElementById('colblue');
    function changeBlue(){
        let blue = document.getElementById('colblue').value;
        p.setBlue(blue);
    }

    var reset = document.getElementById('reset');
    function restart(){
        p.restart();
    }

    var s = document.getElementById('half');
    function smaller(){
        p.smaller();
    }

    var l = document.getElementById('double');
    function larger(){
        p.larger();
    }

    r.addEventListener('change', changeRed);
    g.addEventListener('change', changeGreen);
    b.addEventListener('change', changeBlue);
    reset.addEventListener('click', restart);
    s.addEventListener('click', smaller);
    l.addEventListener('click', larger);

    var cf = document.getElementById('colour_form');

    cf.addEventListener('submit', function (event){
        event.preventDefault();});
});
