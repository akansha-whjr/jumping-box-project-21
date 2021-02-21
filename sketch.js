var canvas;
var music;
var s1,s2,s3,s4,edges,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);
    
    //create 4 different surfaces
s1=createSprite(100,590,200,20);
s1.shapeColor="Red"
s2=createSprite(300,590,200,20);
s2.shapeColor="yellow"
s3=createSprite(500,590,200,20);
s3.shapeColor="blue"
s4=createSprite(700,590,200,20);
s4.shapeColor="orange"
    //create box sprite and give velocity
box=createSprite(random(20,750),200,20,20)
box.shapeColor="white"
box.velocityX=4;
box.velocityY=8;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    
    box.debug=true;
    
    if (s1.isTouching(box) && box.bounceOff(s1)){
        box.shapeColor=s1.shapeColor
        music.stop()
        box.setVelocity(0,0)
    }

    if (s2.isTouching(box) && box.bounceOff(s2)){
        box.shapeColor=s2.shapeColor
       
    }

    if (s3.isTouching(box) && box.bounceOff(s3)){
        music.play()
        box.shapeColor=s3.shapeColor
    }

    if (s4.isTouching(box) && box.bounceOff(s4)){
        music.play()
        box.shapeColor=s4.shapeColor
    }
    box.bounceOff(edges);
    box.bounceOff(s1);
    box.bounceOff(s2);
    box.bounceOff(s3);
    box.bounceOff(s4);
    
    drawSprites()

    //add condition to check if box touching surface and make it box
}
