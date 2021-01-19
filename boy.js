class boy extends parent{
    constructor(x,y)
    {
        super(x,y,200,300);
        this.ing=loadImage("boy.png");  
        Matter.Body.setStatic(this.body,true);
    }
}