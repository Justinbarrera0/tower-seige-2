class Polygon{

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40)


    if(this.body.speed<3){
    push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(995,95,19);
    rect(0, 0, this.width, this.height);
    pop();
    }

