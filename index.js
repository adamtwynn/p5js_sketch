var p;

function setup(){
createCanvas(windowWidth,windowHeight);
//	createCanvas(windowWidth,windowHeight,WEBGL);
//	g = createGraphics(400,400);
	p = new Particle ();
}

function mouseClicked(){
	p = new Particle ();
	p.addNewParticle();

}

function mouseDragged(){
	p = new Particle ();
	p.addNewParticle();

}
function draw(){
//function draw(g){
	background(32);
	p.draw()
//	p.draw(g);
}

document.addEventListener("DOMContentLoaded", function(){
    var r = document.getElementById("colred");
    function changeRed(event){
	let red = document.getElementById("colred").value;
	p.setRed(red);
    }

    var g = document.getElementById("colgreen");
    function changeGreen(event){
	let green = document.getElementById("colgreen").value;
	p.setGreen(green);
    }

    var b = document.getElementById("colblue");
    function changeBlue(event){
	let blue = document.getElementById("colblue").value;
	p.setBlue(blue);
    }

		var reset = document.getElementById("reset");
		function restart(event){
	let reset = document.getElementById("reset").value;
	p.restart(reset);
		}

    r.addEventListener("change", changeRed);
    g.addEventListener("change", changeGreen);
		b.addEventListener("change", changeBlue);
		reset.addEventListener("click", restart);



    var cf = document.getElementById("colour_form");

    cf.addEventListener("submit", function (event){
	event.preventDefault()});
});
