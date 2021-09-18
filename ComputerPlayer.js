class ComputerPlayer {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.image = loadImage("player.png");
      this.width = width;
      this.height = height;
      this.body =Matter.Bodies.rectangle(x, y, this.width, this.height, options);
      Matter.World.add(world, this.body);
    }
    display() {
      var pos = this.body.position; 
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  