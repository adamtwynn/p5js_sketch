var p;

function setup(){
	createCanvas(windowWidth,windowHeight);
	p = new Particle ();
}

function mouseClicked(){
	//colour isnt actually needed here or below 
	p = new Particle (mouseX, mouseY, random(0.003, 0.03));
	p.addNewParticle();
}

function mouseDragged(){
	p = new Particle (mouseX, mouseY, random(0.003, 0.03));
	p.addNewParticle();
}
	
function draw(){
	background(32);
	p.draw();
}

document.addEventListener("DOMContentLoaded", function(){
    var cr = document.getElementById("colred");
    function changeRed(event){
	let red = document.getElementById("colred").value;
	p.setRed(red);
    }
    
    var cg = document.getElementById("colgreen");
    function changeGreen(event){
	let green = document.getElementById("colgreen").value;
	p.setGreen(green);
    }
        
    var cb = document.getElementById("colblue");
    function changeBlue(event){
	let blue = document.getElementById("colblue").value;
	p.setBlue(blue);
    }
    
    var co = document.getElementById("opacity");
    function changeOpacity(event){
	let opacity = document.getElementById("opacity").value;
	p.setOpacity(opacity);
    }
    
    cr.addEventListener("change", changeRed);
    cg.addEventListener("change", changeGreen);
	cb.addEventListener("change", changeBlue);
	co.addEventListener("change", changeOpacity);
   
   
    var cf = document.getElementById("colour_form");

    cf.addEventListener("submit", function (event){
	event.preventDefault()});
});
