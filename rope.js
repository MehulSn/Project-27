class rope{
    constructor(a,b,offsetX,offsetY){
     
        var options={
            bodyA:a,
            bodyB:b,
            pointB:{x:offsetX,y:offsetY}
            }
         this.rope=Constraint.create(options);
         World.add(world,this.rope);
    }
  display() {
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    strokeWeight(5);
    line( pointA.x, pointA.y-25, pointB.x+this.rope.pointB.x, pointB.y);
  }   
}