'Wobbly Swarm'
======
## Description
I have adapted a sketch originally created using the p5.js library into a reusable component using JavaScript classes. The sketch makes use of arrays to store the position, size and velocity of each ellipse which can be drawn onto either a canvas or graphics area. The velocity of each ellipse is calculated by looking at the distance between each particle and the size (mass) of each particle which is used to calculate force and acceleration.

I have included an example page to demonstrate how the class can be used. The example draws the sketch onto a 3d rotating cube using the WebGL API by including an optional p5 renderer as a parameter of the draw method. I have also added additional controls to change the colour and size of each ellipse by using HTML sliders and buttons which interacts with the JavaScript code using the Document Object Model.
## particle.js (class)
`class Particle{}`

`constructor()`

`setRed()`

`setGreen()`

`setBlue()`

`restart()`

`larger()`

`smaller()`

`resetmouseposition()`

`addNewParticle()`

`draw()`

`fill()`

`noStroke()`

`ellipse()`

`random()`

`push()`

`sqrt()`

`reload()`


## index.js (example)
`function setup()`

`function draw()`

`function mouseClicked()`

`function mouseDragged()`

`createCanvas()`

`createGraphics()`

`background()`

`rotateX`

`rotateY`

`texture`

`box()`

`document.addEventListener('DOMContentLoaded', function()`

`changeRed()`

`changeGreen()`

`changeBlue()`

`restart()`

`smaller()`

`larger()`

`addEventListener()`

`getElementById()`

`preventDefault()`


## Original Code

"Wobbly Swarm" by Konstantin Makhmutov

http://www.openprocessing.org/sketch/492096  

Licensed under Creative Commons Attribution ShareAlike

https://creativecommons.org/licenses/by-sa/3.0

https://creativecommons.org/licenses/GPL/2.0/

##CSS

I have used BootstrapCDN to format my HTML.

It is Licensed under the MIT License.

https://github.com/twbs/bootstrap/blob/v4.0.0/LICENSE
