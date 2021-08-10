class Rope{
    constructor(bodyA, bodyB,x,y){
        this.x=x
        this.y=y
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.x,y:this.y}
            //stiffness: 0.04,
            //length: 30
        }
        
        this.bodyB = bodyB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        
        //if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();
            
            stroke(48,22,8);
            
            
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x+this.x , pointB.y+this.y);
               
           
            
            pop();
       // }
    }
    
}