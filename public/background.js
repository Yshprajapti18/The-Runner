class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update() {
        if (this.x < -this.width) this.x = 0
        else this.x -= this.game.speed * this.speedModifier
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.forestImage1 = forest1;
        this.forestImage2 = forest2;
        this.forestImage3 = forest3;
        this.forestImage4 = forest4;
        this.forestImage5 = forest5;
        this.forest1 = new Layer(this.game, this.width, this.height, 0, this.forestImage1);
        this.forest2 = new Layer(this.game, this.width, this.height, 0.2, this.forestImage2);
        this.forest3 = new Layer(this.game, this.width, this.height, 0.4, this.forestImage3);
        this.forest4 = new Layer(this.game, this.width, this.height, 0.8, this.forestImage4);
        this.forest5 = new Layer(this.game, this.width, this.height, 1, this.forestImage5);
        this.backgroundforests = [this.forest1, this.forest2, this.forest3, this.forest4, this.forest5];
    }
    update() {
        this.backgroundforests.forEach(layer => {
            layer.update();
        })
    }
    draw(context) {
        this.backgroundforests.forEach(layer => {
            layer.draw(context);
        })
    }
}