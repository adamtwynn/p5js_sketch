
var p;

function setup(){
	createCanvas(windowWidth,windowHeight);
	p = new Particle ();
}

function mouseClicked(){
	//colour isnt actually needed here or below 
	p = new Particle (mouseX, mouseY, random(0.003, 0.03), 64, 255, 255, 192);
	p.addNewParticle();
}

function mouseDragged(){
	p = new Particle (mouseX, mouseY, random(0.003, 0.03),64, 255, 255, 192);
	p.addNewParticle();
}
	
function draw(){
	background(32);
	p.draw();
}

