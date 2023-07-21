class Ground {
    constructor(x,y,w,h){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        Ground= new ground(width/2,670,width,20)
        leftSide= new ground(1100,600,20,120)
        rightSide= new ground(1100,600,20,120)

        display()
    }
}