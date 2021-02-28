class quake{

    constructor(x,y,w,h){
        
    var options={
     isStatic:true
         
           }
    this.body=Bodies.rectangle(x,y,w,h,options)
     World.add(myworld,this.body)
    
    this.w=w;
    this.h=h;
    
    
    
    
    }
    
    display(){
    push()
    fill ("orange")
    
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
    pop()
    
    }
    
    }