class Block extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,width,height);
    this.Visibility = 255;

  }
  score(){
    console.log(this.Visibility)
    if(this.Visibility===0 ){
      score=score+1;
      console.log(score)

    }
  }
  display(){
    
    if(this.body.speed < 3){
     super.display()
    }
    else{
      World.remove(world, this.body);
      push();
      
      this.Visibility = this.Visibility - 5;
      

      pop();
     
     
    }
    
  }

};
