var p;

function setup(){
	createCanvas(windowWidth,windowHeight);
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
	background(32);
	p.draw();
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
    
    r.addEventListener("change", changeRed);
    g.addEventListener("change", changeGreen);
	b.addEventListener("change", changeBlue);

   
    var cf = document.getElementById("colour_form");

    cf.addEventListener("submit", function (event){
	event.preventDefault()});
});

}
