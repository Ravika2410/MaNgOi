class tree extends parent{
    constructor(x,y)
    {
        super(x,y,300,350);
        this.ing=loadImage("tree.png");  
        Matter.Body.setStatic(this.body,true);
    }
}