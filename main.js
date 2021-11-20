function setup(){
canvas = createCanvas(480,480);
canvas.center();
camera = createCapture(VIDEO);
camera.hide();
color_tint = "";
}
function preload(){

}
function draw(){

    image(camera,0,0,480,480);

}

function take_snapshot(){
save("imagemadewithp5.png");
}
