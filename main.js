nosex=0;
nosey=0;
function preload(){
image1=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}
function modelLoaded(){
    console.log("model has been loaded");
}
function draw(){
image(video, 0, 0, 300, 300);
image(image1, nosex, nosey, 25, 25);
}
function takeSnapshot(){
save("student.jpg");
}
 function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x-12;
        nosey=results[0].pose.nose.y+5;
        console.log("nosex= "+nosex, ", nosey= " +nosey);
    }
 }