class Particle{
    constructor(x=50,y=50,m=random(0.003,0.03),r=64,g=255,b=255,o=192,s=1000){
        this.X = x;
        this.Y = y;
        this.radius = m;
        this.red = r;
        this.green = g;
        this.blue = b;
        this.opacity = o;
        this.size = s;

        this.mass = [];
        this.positionX = [];
        this.positionY = [];
        this.velocityX = [];
        this.velocityY = [];
    }

    setRed(red){
        this.red = red;
    }

    setGreen(green){
        this.green = green;
    }

    setBlue(blue){
        this.blue = blue;
    }

    restart(){
        location.reload();
    }

    larger(){
        this.size = this.size*2;
    }
    smaller(){
        this.size = this.size/2;
    }

    resetmouseposition(mouseX,mouseY){
        this.X = mouseX;
        this.Y = mouseY;
    }

    addNewParticle(){
        this.resetmouseposition(mouseX,mouseY);
        this.radius = random(0.003, 0.03);
        this.mass.push(this.radius);
        this.positionX.push(this.X);
        this.positionY.push(this.Y);
        this.velocityX.push(0);
        this.velocityY.push(0);
    }

    draw(g){
        if(g){
            g.fill(this.red, this.green, this.blue, this.opacity);
            g.noStroke();
        }
        else{
            fill(this.red, this.green, this.blue, this.opacity);
            noStroke();
        }


        for (this.particleA = 0; this.particleA < this.mass.length; this.particleA++) {
            this.accelerationX = 0, this.accelerationY = 0;

            for (this.particleB = 0; this.particleB < this.mass.length; this.particleB++) {
                if (this.particleA != this.particleB) {
                    this.distanceX = this.positionX[this.particleB] - this.positionX[this.particleA];
                    this.distanceY = this.positionY[this.particleB] - this.positionY[this.particleA];

                    this.distance = sqrt(this.distanceX * this.distanceX + this.distanceY * this.distanceY);
                    if (this.distance < 1) this.distance = 1;

                    this.force = (this.distance - 320) * this.mass[this.particleB] / this.distance;
                    this.accelerationX += this.force * this.distanceX;
                    this.accelerationY += this.force * this.distanceY;
                }
            }

            this.velocityX[this.particleA] = this.velocityX[this.particleA] * 0.99 + this.accelerationX * this.mass[this.particleA];
            this.velocityY[this.particleA] = this.velocityY[this.particleA] * 0.99 + this.accelerationY * this.mass[this.particleA];
        }

        for (this.particle = 0; this.particle < this.mass.length; this.particle++) {
            this.positionX[this.particle] += this.velocityX[this.particle];
            this.positionY[this.particle] += this.velocityY[this.particle];
            if(g){
                g.ellipse(this.positionX[this.particle], this.positionY[this.particle], this.mass[this.particle] * this.size, this.mass[this.particle] * this.size);
            }
            else{
                ellipse(this.positionX[this.particle], this.positionY[this.particle], this.mass[this.particle] * this.size, this.mass[this.particle] * this.size);
            }

        }
    }

}
