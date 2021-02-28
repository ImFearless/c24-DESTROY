class lag{

    constructor(x,y,w,h,angle){
        
    var options={
     restitution:0.3,
     friction:1
         
           }
    this.body=Bodies.rectangle(x,y,w,h,options)
     World.add(myworld,this.body)
    Matter.Body.setAngle(this.body,angle)
    this.w=w;
    this.h=h;
    
    
    
    
    }
    
    display(){
      push()
      fill("lightgreen")
    translate(this.body.position.x,this.body.position.y)   
    rectMode(CENTER)
    rotate(this.body.angle)
    rect(0,0,this.w,this.h)
    pop()
    }
    
    }