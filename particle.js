var mass = [];
var positionX = [];
var positionY = [];
var velocityX = [];
var velocityY = [];

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
	
	
	addNewParticle(){
		mass.push(this.mass);
		positionX.push(this.positionX);
	  positionY.push(this.positionY);
	  velocityX.push(0);
   	velocityY.push(0);
		
		//this will be moved to its own method once DOM working
		noStroke();
		fill(this.red, this.green, this.blue, this.opacity);
	}
	draw(){
		for (var particleA = 0; particleA < mass.length; particleA++) {
		var accelerationX = 0, accelerationY = 0;
		
		for (var particleB = 0; particleB < mass.length; particleB++) {
			if (particleA != particleB) {
				var distanceX = positionX[particleB] - positionX[particleA];
				var distanceY = positionY[particleB] - positionY[particleA];

				var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
				if (distance < 1) distance = 1;

				var force = (distance - 320) * mass[particleB] / distance;
				accelerationX += force * distanceX;
				accelerationY += force * distanceY;
			}
		}
		
		velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
		velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
	}
	
	for (var particle = 0; particle < mass.length; particle++) {
		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];
		ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
	}
	}
}

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
	p = new Particle (mouseX, mouseY, random(0.003, 0.03), 64, 255, 255, 192);
	p.addNewParticle();
}
	
function draw(){
	background(32);
	p.draw();
}