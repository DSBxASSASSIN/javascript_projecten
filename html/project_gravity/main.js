const ctx = document.querySelector('canvas').getContext('2d');

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let sun = new CelestialBody(new Vector2(ctx.canvas.width / 2, ctx.canvas.height / 2));


function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    sun.draw(ctx);
    sun.update();

    
}

Update();
