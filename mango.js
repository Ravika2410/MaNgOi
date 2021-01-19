class mango extends parent{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.ing=loadImage("mango.png");  
        Matter.Body.setStatic(this.body,true);
    }
}