class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic : true,
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    //push captures new settings and pop gets back to old settings, we use them so that changes do not apply to all the objects of the game
    push();
    //translate remaps the position of the moving objects on the canvas, so make the position 0,0 in rect()
    translate(pos.x,pos.y);
    //rotate the body in an angle
    rotate(angle)
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
