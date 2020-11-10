class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[];
    this.image1=loadImage("sprites/smoke.png");
  }

  display() {
    
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
     var pause = [this.body.position.x,this.body.position.y];
     this.trajectory.push(pause)
    }
   for (var i = 0; i<this.trajectory.length;i++){
    image(this.image1,this.trajectory[i][0],this.trajectory[i][1])
   }


  }
}
