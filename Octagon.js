class Octagon{
    constructor(x, y) {
      var options = {
        isStatic: false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40,40, options);
      this.width = 40;
      this.height = 40;

      this.image=loadImage("octagon.jpg");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
    // rectMode(CENTER);
    // rect(pos.x, pos.y, this.width, this.height);

      imageMode(CENTER);
     image(this.image,pos.x,pos.y,40,40)
     
    }
  }