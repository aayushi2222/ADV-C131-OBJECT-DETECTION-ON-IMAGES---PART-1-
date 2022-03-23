 img = "";

function setup(){

    canvas = createCanvas(490, 450);
    canvas.center();
}

function preload(){
    img = loadImage("my pic.jpg");
}

function draw(){

image(img ,0,0,490,450);

fill("#E81313");

text("Cat" , 45 , 75);
noFill();
stroke("#E81313");
rect(30,60,300,450);
}



