class Particle{
	constructor(x,y,m,r,g,b,o){
		this.positionX = x;
		this.positionY = y;
		this.mass = m;
		this.red = r;
		this.green = g;
		this.blue = b;
		this.opacity = o;
	}
	
	draw(){
		noStroke();
		fill(this.red, this.green, this.blue, this.opacity);
		ellipse(this.positionX, this.positionY, this.mass * 1000, this.mass * 1000);
	}
}

var p;

function setup(){
	createCanvas(windowWidth,windowHeight);
}
	
function mouseClicked(){
	p = new Particle (mouseX, mouseY, random(0.003, 0.03), 64, 255, 255, 192);
	p.draw();
}

function mouseDragged(){
	p = new Particle (mouseX, mouseY, random(0.003, 0.03), 64, 255, 255, 192);
	p.draw();
}
		
function draw(){
		background(32);
		p.draw()
}

