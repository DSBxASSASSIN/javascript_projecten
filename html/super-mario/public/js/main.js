function loadImage(url){
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = url;
    });
}

class SpriteSheet {
    constructor(image, width, height){
        this.Image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    define(name, x, y){
        const buffer = document.createElement('canvas');
        buffer.height = this.height;
        buffer.width = this.width;
        buffer
            .getContext('2d')
            .drawImage(
            this.image,
            this.width * x,
            this.height * y,
            this.width,
            this.height,
            0,
            0,
            this.width,
            this.height
        );
        this.tiles.set(name, buffer);
    }

    draw(name, ctx, x, y){
        const buffer = this.tiles.get(name);
        ctx.drawImage(buffer, x, y);
    }
}

const ctx = document.querySelector("canvas").getContext("2d");

loadImage("img/tiles.png")
.then(image => {

    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define("ground", 0, 0);
    sprites.draw("ground", ctx, 45, 62);
    ctx.drawImage(image, 
        0, 0, 
        16, 16, 
        0, 0, 
        16, 16
        );
})