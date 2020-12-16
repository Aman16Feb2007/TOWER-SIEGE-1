class Polygon{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h);
        this.image = loadImage("polygon.png");
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display(){        
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);

    }


}