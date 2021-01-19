class stone
{
    constructor(x,y,w,h)
    {
        this.ing=loadImage("stone.png");
        var options={
            isStatic=true,
            friction=1,
            retitution=0,
            density=1.2
        }
        this.height=h;
        this.weight=w;
        this.body=Matter.Bodies.rectangle(x,y,this.weight,this.height,options);
        Matter.World.add(myWorld,this.body);
    }
display()
{
    imageMode(CENTER);
    image(this.ing,this.body.position.x,this.body.position.y,this.width,this.height);
}
    
}