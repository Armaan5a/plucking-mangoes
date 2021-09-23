class Stone
{
    constructor(a,b,c)
    {
        var option={
            'restitution' : 0.5,
            'friction': 1.5,
            'density':1.8
        }
        this.body=Bodies.circle(a,b,c,option);
        World.add(world,this.body);
        this.image = loadImage("plucking mangoes/stone.png");
        this.r=c;
        
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("black") 
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();     
    }
}