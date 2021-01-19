class parent
{
    constructor(x,y,w,h)
    {
        this.ing=loadImage("tree.png");
        this.width=w;
        this.height=h;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height);
        Matter.World.add(myWorld,this.body);
    }
display()
{
    imageMode(CENTER);
    image(this.ing,this.body.position.x,this.body.position.y,this.width,this.height);
}
    
}