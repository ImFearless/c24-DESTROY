class bibi{

constructor(x,y,w,h){
    
var options={
 restitution:0.3
     
       }
this.body=Bodies.rectangle(x,y,w,h,options)
 World.add(myworld,this.body)

this.w=w;
this.h=h;




}

display(){
  push()
  fill("skyblue")
translate(this.body.position.x,this.body.position.y)   
rectMode(CENTER)
rotate(this.body.angle)
rect(0,0,this.w,this.h)
pop()
}

}