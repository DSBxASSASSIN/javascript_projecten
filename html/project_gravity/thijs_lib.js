class CelestialBody{
    constructor(pos, radius, vel, acc, r, g, b){
	this.pos = pos;
	this.radius = radius;
	this.vel = vel || new Vector2(0, 0);	
	this.acc = acc || new Vector2(0, 0);
	this.r = r || 255;
	this.g = g || 255;
	this.b = b || 255;
    }

    get color(){
		return `rbga(${this.r}, ${this.g}, ${this.b})`;
    }

    draw(ctx){
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.strokeStyle = "black";
		ctx.arc(this.pos.dx, this.pos.dy, this.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
    }
    
    update(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
    }
};

class Vector2{
    constructor(dx, dy){
	this.dx = dx;
	this.dy = dy;
    }

    add(Vector){
	this.dx += Vector.dx;
	this.dy += Vector.dy;
    }
};
