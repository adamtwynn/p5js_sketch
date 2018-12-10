var Particle = function(x, y, vx, vy) {
  this.mass = 1.0;
  this.friction = 0;
  //this.location = createVector(random(width), random(height));
  this.location = createVector(x, y);
  this.velocity = createVector(2.0, 0.0);
  this.accelaration = createVector(vx, vy);
  this.img;
}

Particle.prototype.update = function() {
  this.velocity.add(this.accelaration);
  this.velocity.mult(1.0 - this.friction);
  this.location.add(this.velocity);
  this.accelaration.set(0.0, 0.0);
}

Particle.prototype.display = function() {
  image(this.img, this.location.x, this.location.y);
}

Particle.prototype.attract = function(attractor) {
  var force = p5.Vector.sub(attractor.location, this.location);
  var distance = force.mag();
  distance = constrain(distance, 10.0, 200.0);
  force.normalize();
  var strength = (g*this.mass*attractor.mass)/pow(distance, 2.0);
  force.mult(strength);
  return force;
}

Particle.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force, this.mass);
  this.accelaration.add(f);
}

Particle.prototype.wallThrough = function() {
  if (this.location.x > width) {
    this.location.x = 0;
  }
  if (this.location.x < 0) {
    this.location.x = width;
  }
  if (this.location.y > height) {
    this.location.y = 0;
  }
  if (this.location.y < 0) {
    this.location.y = height;
  }
}

Particle.prototype.createParticleImage = function() {

  var side = 300;
  var center = 150;

  this.img = createImage(side, side);

  var num = pow(10, 1.8);

  var Cr =random(100, 255);
  var Cg =random(100, 255);
  var Cb =random(100, 255);

  //while ((Cr/Cg > 0.8 && Cr/Cg < 1.2) && (Cr/Cb > 0.8 && Cr/Cb < 1.2)) {
  //  var Cr =random(50, 255);
  //  var Cg =random(50, 255);
  //  var Cb =random(50, 255);
  //}

  this.img.loadPixels();
	for (var y = 0; y < side; y++) {
    for (var x = 0; x < side; x++) {
      var d = (sq(center - x) + sq(center - y))/num;
      //var d = (sq(center - x) + sq(center - y))/num;
      var col = color(Cr/d, Cg/d, Cb/d);
      this.img.set(x, y, col);
    }
  }
	this.img.updatePixels();
  return this.img;
}

var Attractor = function(x, y) {
  this.mass = 100.0;
  this.location = createVector(x, y);
}

Attractor.prototype.display = function() {
  fill(0, 0, 0, 0);
  stroke(200);
  ellipse(this.location.x, this.location.y, 5, 5);
}

infoDisplay = function() {
  if (frameCount % 10 == 0) {
    fr = frameRate();
  }
  textFont('Monospace');
  textSize(24);
  fill("white");
  textAlign(RIGHT, BOTTOM);
  text(str(int(fr))+" fps", width, height);
  textAlign(LEFT, BOTTOM);
  text("Attractor: "+str(attractors.length), 0, height);
  textAlign(CENTER, BOTTOM);
  text("Particle: "+str(particles.length), width / 2, height);
}

//var n = int(pow(10, random(3)));
var attractors = [];
var particles = [];

var g = 10.0;

var fr;

function setup() {
  createCanvas(windowWidth, windowHeight);
	//createCanvas(800, 800);
  blendMode(ADD);
  imageMode(CENTER);
  frameRate(60);
  background(0);
  //saveFrames("frame","png", 10, 10);
}

function draw() {
  clear();
  background(0);
  //mousePressed();
  //noStroke();
  //fill(20);
  //rect(0, 0, width, height);
  for (var i = 0; i < particles.length; i++) {
    for (var j = 0; j < attractors.length; j++) {
        var force = particles[i].attract(attractors[j]);
        particles[i].applyForce(force);
    }
    particles[i].update();
    //particles[i].wallThrough();
    particles[i].display();
  }
  for (var i = 0; i < attractors.length; i++) {
    attractors[i].display();
  }
  infoDisplay();
}

function mouseClicked() {
  particles.push(new Particle(mouseX, mouseY, 0, 0));
  particles[particles.length - 1].createParticleImage();
}

function doubleClicked() {
  particles = [];
  attractors = [];
}

function keyTyped() {
  if (key === 'p') {
    particles.push(new Particle(mouseX, mouseY, 0, 0));
    particles[particles.length - 1].createParticleImage();
  }
  if (key === 'a') {
    attractors.push(new Attractor(mouseX, mouseY));
  }
  else if (key === 'r') {
    particles = [];
    attractors = [];
  }
  else if (key === 'm') {
    for (var particle of particles) {
      particle.velocity.x = random(-5, 5);
      particle.velocity.y = random(-5, 5);
    }
  }
}