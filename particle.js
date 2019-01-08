var mass = [];
var positionX = [];
var positionY = [];
var velocityX = [];
var velocityY = [];
var dred = 64
var dgreen = 255
var dblue = 255

class Particle{
	constructor(x=mouseX,y=mouseY,m=random(0.003,0.03),r=dred,g=dgreen,b=dblue,o=192){
		this.positionX = x;
		this.positionY = y;
		this.mass = m;
		this.red = r;
		this.green = g;
		this.blue = b;
		this.opacity = o;
	}

	setRed(red){
		dred = red;
	}

	setGreen(green){
		dgreen = green;
	}

	setBlue(blue){
		dblue = blue;
	}

	restart(reset){
		location.reload();
	}

	addNewParticle(){
		mass.push(this.mass);
		positionX.push(this.positionX);
	    positionY.push(this.positionY);
	    velocityX.push(0);
     	velocityY.push(0);
	}

	fill(r,g,b,o){
		if(g){
			g.fill(this.red, this.green, this.blue, this.opacity);
		}
		else{
			fill(this.red, this.green, this.blue, this.opacity);
		}
	}

	noStroke(){
		if(g){
			g.noStroke();
		}
		else{
		noStroke()
		}
	}

	ellipse(x, y, m1, m2){
		if(g){
			g.ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
		}
		else{
			ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
		}
	}
	draw(g){
		fill(this.red, this.green, this.blue, this.opacity);
		noStroke();
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
