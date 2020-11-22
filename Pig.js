class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255; //setting the visibility 
    // 0 means not visible at all, 255 means fully visible
  }
  display(){
    console.log(this.body.speed); //logging the speed of the pig (when a body gets hit the speed of it increases sharply)
    if(this.body.speed<3){ //if the speed is less than three, the pig was not hit
      super.display(); 
    } else{
        World.remove(world,this.body); //removing the pig
        push(); //so that the fading effect applies only to the pig
        this.visibility = this.visibility-5; //decreasing the visibility
        //to create the fading effect
        tint(255,this.visibility); 
        image(this.image,this.body.position.x,this.body.position.y,50,50); 
        pop();
    }
  }
}